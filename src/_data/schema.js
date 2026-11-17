const profile = require("./profile");
const site = require("./site");

const skills = profile.skills.flatMap((group) => group.items);

// schema.org ProfilePage + Person graph for search engines and AI agents.
module.exports = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.canonicalUrl}#profile`,
  url: site.canonicalUrl,
  name: site.title,
  description: site.description,
  inLanguage: "en-US",
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntity: {
    "@type": "Person",
    "@id": `${site.canonicalUrl}#person`,
    name: profile.name,
    givenName: "Jake",
    familyName: "Vose",
    jobTitle: profile.currentRole,
    description: profile.summary,
    url: site.canonicalUrl,
    image: `${site.siteUrl}${profile.portrait}`,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedinUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ashburn",
      addressRegion: "VA",
      addressCountry: "US",
    },
    worksFor: {
      "@type": "Organization",
      name: profile.currentCompany,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: profile.currentRole,
      occupationLocation: { "@type": "State", name: "Virginia" },
      skills: skills.join(", "),
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "State University of New York at Oswego",
      alternateName: "SUNY Oswego",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Certified Solutions Architect – Professional",
        credentialCategory: "certification",
        recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
        dateCreated: "2025",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Bachelor of Arts, Computer Science",
        credentialCategory: "degree",
        recognizedBy: { "@type": "CollegeOrUniversity", name: "SUNY Oswego" },
        dateCreated: "1999",
      },
    ],
    knowsAbout: [
      "Cloud platform modernization",
      "Multi-tenant cloud platforms",
      "AWS governance",
      "Cost controls",
      "Capacity optimization",
      "Platform resilience",
      "Infrastructure as code",
      "DevSecOps",
      "AI-assisted infrastructure operations",
      "NIST SP 800-53 Moderate compliance",
      "Trusted Internet Connection (TIC) architecture",
      ...skills,
    ],
  },
};
