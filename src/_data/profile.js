module.exports = {
  name: "Jake Vose",
  title: "Principal Engineer",
  location: "Ashburn, VA",
  email: "jakevose@proton.me",
  linkedinLabel: "linkedin.com/in/jake-vose",
  linkedinUrl: "https://www.linkedin.com/in/jake-vose",
  website: "https://jakevose.github.io",
  websiteLabel: "jakevose.github.io",
  yearsExperience: "25+",
  infrastructureYears: "10+",
  portrait: "/assets/jake_vose.jpg",
  currentRole: "Senior Solutions Architect",
  currentCompany: "CTAC",
  currentPeriod: "2012 – Present",
  currentRoleSummary:
    "Senior Solutions Architect at CTAC since 2012, leading shared cloud modernization, governance, and platform reliability.",
  summary:
    "Principal engineer with 25+ years of software engineering, the last 10+ focused on cloud infrastructure and platform architecture across enterprise and government environments. Most recently built a NIST Moderate AWS platform for Oak Ridge National Laboratory; ongoing work centers on modernizing a multi-tenant Virtual Network Operations Center (VNOC), organization-wide AWS governance, cost controls, and AI-assisted infrastructure operations.",
  proofPoints: [
    {
      metric: "75%",
      label: "faster provisioning",
      context: "AI compute landing zones for ORNL at the Department of Energy.",
    },
    {
      metric: "98%",
      label: "less illegitimate traffic",
      context: "Traffic-throttling architecture protecting NHTSA's public API from abusive traffic.",
    },
    {
      metric: "10%",
      label: "VNOC spend reduction",
      context: "Shared cloud operations spend, alongside halving Splunk license usage.",
    },
    {
      metric: "60%",
      label: "less delivery complexity",
      context: "Immutable CI/CD stacks for TheRealCost.gov, adding two nines of stability.",
    },
  ],
  strengths: [
    "Owns multi-tenant cloud platforms, operating models, and engineering standards across shared environments",
    "Establishes organization-wide AWS governance, security baselines, and compliance-aware delivery patterns",
    "Applies 25+ years of software engineering to infrastructure: platforms and pipelines built as code that reduce operational complexity for engineering teams",
    "Applies cost controls, capacity optimization, and reliability engineering across complex cloud platforms",
    "Uses AI-assisted and agentic workflows to accelerate cloud, infrastructure, and runbook engineering",
  ],
  focusAreas: [
    {
      title: "Platform ownership",
      detail: "Leads shared cloud platforms as delivery infrastructure, combining architecture, standards, cost control, and internal enablement across multi-environment enclaves.",
    },
    {
      title: "Cost controls and capacity optimization",
      detail: "Connects platform architecture, usage visibility, and operating standards to reduce spend, right-size capacity, and create room for growth across shared environments.",
    },
    {
      title: "AI-enabled infrastructure operations",
      detail: "Uses AI-assisted and agentic workflows to accelerate Terraform changes, pipeline work, troubleshooting, resource investigation, security analysis, and runbook creation within normal engineering change control.",
    },
  ],
  principalWork: [
    {
      title: "NIST Moderate AWS platform for Oak Ridge National Laboratory",
      lede:
        "Most recent build: a compliance-ready AWS platform-as-a-service for a Department of Energy national laboratory, delivered as Terraform and Bash.",
      outcomes: [
        "Built a NIST Moderate AWS PaaS for Oak Ridge National Laboratory, defined end to end in Terraform and Bash.",
        "Designed hub-and-spoke Transit Gateway networking as a virtual Trusted Internet Connection (TIC), with centralized inspection behind AWS Network Firewall.",
        "Automated hardened base image creation and tag-based patching across the instance fleet.",
        "Implemented user-tiered instance access through AWS Systems Manager Session Manager, with full session logging.",
      ],
    },
    {
      title: "Platform modernization and cost discipline",
      lede:
        "Owns VNOC modernization as a shared cloud platform, combining architecture, operating standards, and cost discipline rather than treating infrastructure as a series of isolated projects.",
      outcomes: [
        "Led multi-tenant VNOC modernization across shared cloud infrastructure, driving platform standards, infrastructure as code improvements, and operational simplification across client environments.",
        "Reduced VNOC spend by 10% while cutting Splunk usage to half of the base license and identifying additional savings opportunities across platform operations.",
      ],
    },
    {
      title: "Governance, capacity, and risk reduction",
      lede:
        "Builds control-plane consistency into cloud operations while improving usage visibility, capacity planning, and the economics of shared platforms.",
      outcomes: [
        "Enabled organization-wide AWS governance and security baselines through AWS Config, Security Hub, CloudTrail, and playbook-driven operational standards.",
        "Identified an EBS snapshot architecture issue representing potential savings of roughly 20% of spend for one client, with similar opportunities across other tenants.",
        "Delivered NOC VPN rollout with full SAML integration, usage controls, and reporting to improve secure access to internal tooling and lower environments.",
        "Cleared 1000+ vulnerabilities by improving inspection visibility for the infrastructure team, removing a risky prototype application, and tightening security posture across the enclave.",
      ],
    },
    {
      title: "Delivery systems at mission scale",
      lede:
        "Combines platform engineering with public-sector delivery outcomes, translating architecture decisions into faster provisioning, lower complexity, and more resilient services.",
      outcomes: [
        "Built AI compute landing zones for ORNL at the Department of Energy, reducing provisioning time by 75%.",
        "Architected immutable CI/CD application stacks for TheRealCost.gov, reducing complexity by 60% while improving stability and performance by two nines.",
        "Designed and implemented traffic throttling for NHTSA's public API, reducing illegitimate traffic by over 98%.",
      ],
    },
  ],
  ctacEngagements: {
    title: "Earlier CTAC delivery",
    lede:
      "Before VNOC, led application and platform delivery for federal health and communications programs.",
    items: [
      "Led content delivery platform strategy for FDA's Center for Tobacco Products across public websites and internal systems of record, including the DevOps pipelines behind them (Ruby on Rails, Drupal, Terraform, Packer, CloudFormation).",
      "Built a Kids.gov migration prototype for GSA: reverse-engineered Percussion CM1 content into XML, exposed it as a self-documenting REST API (Ruby, Swagger), and generated a static site from that API with Node.js.",
      "Developed a public communication review and sign-off workflow for HHS in Ruby on Rails, replacing an outdated job runner with a Redis-based queue and speeding exports by flattening normalized data into MongoDB.",
    ],
  },
  earlierFoundation: [
    {
      title: "Earlier leadership and product engineering",
      detail:
        "At Wagger Designs, led technical direction, standards, research and development, and project execution across client work. At Vovici, coordinated architecture and SDLC work with international development and QA teams, delivered SOAP and XML integrations supporting clients totaling $20MM in annual spend, shipped an offline survey iOS app tied to $10MM in new sales, and formalized virtualized QA and UAT processes that shortened development cycles by 20%.",
    },
    {
      title: "Consulting depth in regulated systems",
      detail:
        "At CC Pace, customized loan origination systems and co-developed a Risk Analysis Toolkit for FFIEC compliance. At RESCUECOM, built server applications for franchise operations, worked with web-service interfaces before REST became standard, and developed handheld-device client software for field workflows.",
    },
    {
      title: "Internet-scale platform foundations",
      detail:
        "At Scient, contributed to Chase Manhattan Bank's initial online banking platform, brought live game statistics online for Major League Baseball, and helped diagnose load-balancing and failover issues with the WebLogic vendor team.",
    },
  ],
  careerHistory: [
    {
      company: "CTAC",
      stack: ["AWS", "Azure", "Terraform", "Python", "Ruby on Rails", "Drupal", "PostgreSQL"],
      role: "Senior Solutions Architect",
      period: "2012 – Present",
    },
    {
      company: "Wagger Designs",
      stack: ["PHP", "Drupal", "WordPress", "Ruby on Rails", "MySQL", "Objective-C"],
      role: "Chief Technical Officer",
      period: "2009 – 2012",
    },
    {
      company: "Vovici",
      stack: ["C# .NET", "SQL Server", "SOAP/XML", "jQuery", "VMware ESX"],
      role: "Software Engineer",
      period: "2008 – 2009",
    },
    {
      company: "CC Pace",
      stack: ["Scheme (Lisp)", "C# and VB .NET", "Oracle", "Integra Destiny", "FNIS Empower"],
      role: "Technical Consultant",
      period: "2005 – 2008",
    },
    {
      company: "RESCUECOM",
      stack: ["Visual FoxPro", "Macromedia Flash", ".NET Compact Framework"],
      role: "Strategic Projects Developer",
      period: "2002 – 2005",
    },
    {
      company: "Scient",
      stack: ["Java", "Enterprise JavaBeans", "WebLogic", "TIBCO Rendezvous"],
      role: "Consultant",
      period: "1999 – 2001",
    },
  ],
  // Grouped by kind; within each group, most current and most used first.
  skills: [
    {
      label: "Cloud and networking",
      items: ["AWS", "Azure", "Transit Gateway", "AWS Network Firewall", "Session Manager"],
    },
    {
      label: "Security & governance",
      items: ["Multi-account governance", "AWS Config", "Security Hub", "CloudTrail", "Inspector"],
    },
    {
      label: "Infrastructure as code",
      items: ["Terraform", "CloudFormation", "Packer", "EC2 Image Builder", "Docker"],
    },
    {
      label: "CI/CD",
      items: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "AWS CodeBuild"],
    },
    {
      label: "Languages",
      items: ["Python", "Bash", "Ruby", "JavaScript and Node.js", "C#", "Java"],
    },
    {
      label: "Data",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "OpenSearch/Elasticsearch"],
    },
  ],
  credentials: [
    "AWS Certified Solutions Architect – Professional (2025)",
    "Bachelor of Arts, Computer Science, SUNY Oswego, 1999",
  ],
};