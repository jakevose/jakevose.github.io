const profile = require("./profile");

module.exports = {
  pageTitle: `${profile.name} | Print Resume`,
  pageDescription:
    "Print-ready two-page PDF resume for Jake Vose focused on principal-level cloud platform modernization and secure delivery leadership.",
  headline:
    "Senior Solutions Architect | Principal-Level Cloud Platform Modernization, Governance, and Secure Delivery",
  summary:
    "Senior Solutions Architect with 20+ years leading cloud platform modernization, secure delivery, and resilient engineering systems across enterprise and government environments. At CTAC since 2012, driving shared platform architecture, AWS governance, infrastructure delivery standards, cost discipline, and operational simplification across regulated environments. Recent work includes VNOC modernization, AI compute landing zones, traffic protection for public APIs, and CI/CD platform improvements with measurable gains in speed, resilience, and spend.",
  selectedImpact: profile.proofPoints,
  coreExpertise: [
    "AWS governance and security baselines",
    "Multi-tenant cloud platform ownership",
    "Terraform and CloudFormation delivery",
    "DevSecOps and CI/CD modernization",
    "Cost discipline and operational simplification",
    "Platform resilience and attack-surface reduction",
    "AI-assisted infrastructure operations",
    "Enterprise and government delivery",
  ],
  currentExperience: {
    company: profile.currentCompany,
    role: profile.currentRole,
    period: profile.currentPeriod,
    location: profile.location,
    summary:
      "Leading shared cloud platform modernization, governance baselines, secure delivery patterns, and reliability improvements across regulated client environments.",
    bullets: [
      "Led multi-tenant VNOC modernization across shared cloud infrastructure, driving platform standards, infrastructure-as-code improvements, and operational simplification across client environments.",
      "Enabled organization-wide AWS governance and security baselines through AWS Config, Security Hub, CloudTrail, and playbook-driven operational standards.",
      "Reduced VNOC spend by 10% while cutting Splunk usage to half of the base license and identifying additional savings opportunities across platform operations.",
      "Built AI compute landing zones for ORNL at the Department of Energy, reducing provisioning time by 75%.",
      "Architected immutable CI/CD application stacks for TheRealCost.gov, reducing delivery complexity by 60% while improving stability and performance by two nines.",
      "Designed and implemented traffic throttling for NHTSA's public API, reducing illegitimate traffic by over 98%.",
    ],
  },
  earlierExperience: [
    {
      company: "Wagger Designs",
      role: "Chief Technical Officer",
      period: "2009 – 2012",
      highlights: [
        "Led technical direction, engineering standards, research and development, and project execution across client work.",
      ],
    },
    {
      company: "Vovici",
      role: "Software Engineer",
      period: "2008 – 2009",
      highlights: [
        "Coordinated architecture and SDLC work with international development and QA teams, delivered SOAP and XML integrations supporting clients totaling $20MM in annual spend, shipped an offline survey iOS app tied to $10MM in new sales, and formalized virtualized QA and UAT processes that shortened development cycles by 20%.",
      ],
    },
    {
      company: "CC Pace",
      role: "Technical Consultant",
      period: "2005 – 2008",
      highlights: [
        "Customized loan origination systems and co-developed a Risk Analysis Toolkit supporting FFIEC compliance work.",
      ],
    },
    {
      company: "RESCUECOM",
      role: "Strategic Projects Developer",
      period: "2002 – 2005",
      highlights: [
        "Built server applications for franchise operations, worked with early web-service interfaces, and developed handheld-device client software for field workflows.",
      ],
    },
    {
      company: "Scient",
      role: "Consultant",
      period: "1999 – 2001",
      highlights: [
        "Contributed to Chase Manhattan Bank's initial online banking platform, Major League Baseball live game statistics, and load-balancing and failover diagnosis with the WebLogic vendor team.",
      ],
    },
  ],
  skillGroups: [
    {
      label: "Cloud and governance",
      items: ["AWS", "Azure", "multi-account governance", "AWS Config", "Security Hub", "CloudTrail"],
    },
    {
      label: "Platform delivery",
      items: ["Terraform", "CloudFormation", "Docker", "Jenkins", "GitHub Actions", "GitLab CI/CD"],
    },
    {
      label: "Engineering scope",
      items: ["DevSecOps", "playbooks", "runbooks", "Python", "Node.js", "JavaScript"],
    },
  ],
  credentials: profile.credentials,
  links: [
    {
      label: "Website",
      value: "jakevose.github.io",
      href: "https://jakevose.github.io",
    },
    {
      label: "LinkedIn",
      value: profile.linkedinLabel,
      href: profile.linkedinUrl,
    },
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
  ],
};