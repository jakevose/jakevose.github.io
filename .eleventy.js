const fontFiles = {
  "node_modules/@fontsource-variable/newsreader/files/newsreader-latin-standard-normal.woff2":
    "assets/fonts/newsreader.woff2",
  "node_modules/@fontsource-variable/newsreader/files/newsreader-latin-standard-italic.woff2":
    "assets/fonts/newsreader-italic.woff2",
  "node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2":
    "assets/fonts/space-grotesk.woff2",
};

// Static (non-variable) instances for the PDF: Chromium embeds variable fonts
// as Type 3 glyphs, which some ATS parsers and PDF viewers handle poorly.
const printFonts = [
  ["inter", "400-normal"],
  ["inter", "400-italic"],
  ["inter", "500-normal"],
  ["inter", "600-normal"],
  ["newsreader", "400-normal"],
  ["newsreader", "600-normal"],
];

for (const [family, variant] of printFonts) {
  fontFiles[`node_modules/@fontsource/${family}/files/${family}-latin-${variant}.woff2`] =
    `assets/fonts/print/${family}-${variant}.woff2`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ ".well-known": ".well-known" });
  eleventyConfig.addPassthroughCopy(fontFiles);

  // Serialize data for JSON-LD without hand-escaping strings in templates.
  eleventyConfig.addFilter("jsonld", (value) =>
    JSON.stringify(value, null, 2).replace(/</g, "\\u003c")
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
