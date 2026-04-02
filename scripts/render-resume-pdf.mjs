import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { mkdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { PDFDocument } from "pdf-lib";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const siteDir = path.join(repoRoot, "_site");
const resumeRoute = process.env.RESUME_ROUTE || "/resume/";
const expectedPageCount = Number.parseInt(process.env.RESUME_EXPECTED_PAGES || "2", 10);
const outputPath = path.resolve(
  repoRoot,
  process.env.RESUME_PDF_OUTPUT || "_site/resume/jake-vose-resume.pdf"
);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function resolveRequestPath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const relativePath = decodedPath.endsWith("/") ? `${decodedPath}index.html` : decodedPath;
  const normalizedPath = path
    .normalize(relativePath)
    .replace(/^([.][.][/\\])+/, "")
    .replace(/^[/\\]+/, "");
  const filePath = path.join(siteDir, normalizedPath);

  if (!filePath.startsWith(siteDir)) {
    return null;
  }

  return filePath;
}

function createStaticServer() {
  return createServer(async (request, response) => {
    const filePath = resolveRequestPath(request.url || "/");

    if (!filePath) {
      response.writeHead(400);
      response.end("Invalid request path");
      return;
    }

    try {
      const fileStat = await stat(filePath);

      if (!fileStat.isFile()) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      const extension = path.extname(filePath).toLowerCase();
      response.writeHead(200, {
        "Content-Length": fileStat.size,
        "Content-Type": mimeTypes[extension] || "application/octet-stream",
      });
      createReadStream(filePath).pipe(response);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });
}

async function renderResumePdf() {
  await mkdir(path.dirname(outputPath), { recursive: true });

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

  const address = server.address();

  if (!address || typeof address === "string") {
    server.close();
    throw new Error("Could not start local render server.");
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const resumeUrl = `http://127.0.0.1:${address.port}${resumeRoute}`;

  try {
    await page.goto(resumeUrl, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });
    await page.pdf({
      path: outputPath,
      preferCSSPageSize: true,
      printBackground: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });
  } catch (error) {
    if (String(error).includes("Executable doesn't exist")) {
      throw new Error(
        "Playwright Chromium is not installed. Run `mise exec -- npx playwright install chromium` and try again."
      );
    }

    throw error;
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  }

  const fileBytes = await readFile(outputPath);
  const pdf = await PDFDocument.load(fileBytes);
  const pageCount = pdf.getPageCount();

  if (pageCount !== expectedPageCount) {
    throw new Error(
      `Expected ${expectedPageCount} pages, but generated ${pageCount}. Review src/resume.njk and src/assets/print-resume.css.`
    );
  }

  console.log(`Generated ${outputPath} (${pageCount} pages)`);
}

renderResumePdf().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});