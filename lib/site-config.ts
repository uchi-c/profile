import { BriefcaseBusiness, FileCheck2, Radar, ShieldCheck, Sparkles, Workflow } from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" }
] as const;

export const siteConfig = {
  name: "Uchi Chinyama",
  title: "Cybersecurity Specialist, Secure Systems Builder & Founder",
  tagline: "Helping organizations strengthen digital trust, operational security, and workflow resilience.",
  supportLine: "Cybersecurity. Secure systems. Practical digital trust for modern institutions.",
  shortOverview:
    "I work on practical cybersecurity and secure systems problems that affect real organizations, especially where digital processes are weak, reporting is fragmented, and operational trust depends too much on improvisation.",
  about: [
    "I’m Uchi Chinyama, a Zambia-based cybersecurity specialist and secure systems builder focused on practical digital protection, workflow resilience, and institutional trust.",
    "My work includes phishing simulation, awareness programs, risk reviews, security documentation, workflow thinking, and digital trust-oriented system design.",
    "I’m also building in the founder space through Shadow Root Security Technologies and contributing to URUU, a secure workflow and intelligence platform focused on structured reporting, visibility, and trust-sensitive operations."
  ],
  contactIntro:
    "If you’re looking for support around cybersecurity awareness, phishing simulation, security reviews, documentation, workflow improvement, or digital trust-focused thinking, I’m open to practical conversations, collaborations, and selected project opportunities.",
  profileHighlights: [
    "Zambia-based with an Africa-rooted institutional lens.",
    "Focused on measurable resilience, not cosmetic security outputs.",
    "Grounded in governance-aware modernization and practical trust systems."
  ],
  details: {
    email: "uchichinyama@gmail.com",
    phone: "0979501830",
    location: "Zambia",
    portfolio: "[PORTFOLIO_DOMAIN]",
    linkedin: "https://zm.linkedin.com/in/uchi-chinyama-b4a335302",
    github: "[GITHUB_URL]",
    shadowRoot: "[SHADOW_ROOT_LINK]",
    uruu: "[URUU_DEMO_LINK]",
    cv: "[CV_LINK]"
  },
  services: [
    {
      title: "Cyber Awareness & Phishing Simulation",
      description:
        "Help organizations improve awareness around phishing, social engineering, and user-driven risk through education and controlled simulation-based exercises.",
      solves: "Recurring human-error incidents, low reporting behavior, and weak anti-phishing readiness.",
      audience: "SMEs, NGOs, schools, and institutional teams managing distributed users.",
      cta: "Discuss Awareness Program",
      icon: ShieldCheck
    },
    {
      title: "Risk Assessments & Security Reviews",
      description:
        "Identify weaknesses in digital practices, operational behavior, and basic security posture.",
      solves: "Blind spots in day-to-day security execution and uncertain risk priorities.",
      audience: "Leaders and operations teams needing focused, practical risk direction.",
      cta: "Request a Risk Review",
      icon: Radar
    },
    {
      title: "Security Documentation & Governance Support",
      description:
        "Support internal security materials, process guidance, governance notes, and foundational documentation.",
      solves: "Inconsistent documentation, weak decision traceability, and unclear controls.",
      audience: "Institutions modernizing governance and formalizing security processes.",
      cta: "Strengthen Governance Materials",
      icon: FileCheck2
    },
    {
      title: "AI Workflow Assessment",
      description:
        "Assess internal workflows to identify weak manual processes, reporting gaps, and opportunities for more structured operational systems.",
      solves: "Unstructured AI adoption and fragile operational workflows.",
      audience: "Teams introducing AI or automation while protecting quality and trust.",
      cta: "Assess My Workflow",
      icon: Sparkles
    },
    {
      title: "Workflow Automation Guidance",
      description:
        "Help organizations think through how selected processes can become more structured, trackable, and resilient through workflow redesign and automation-aware planning.",
      solves: "Manual bottlenecks, limited process visibility, and accountability gaps.",
      audience: "Operations and admin functions scaling service delivery.",
      cta: "Explore Workflow Redesign",
      icon: Workflow
    },
    {
      title: "Digital Trust & Operational Security Consulting",
      description:
        "Support organizations in strengthening trust in digital operations through secure systems thinking, process discipline, awareness, and governance-aware improvement.",
      solves: "Low institutional confidence in digital processes and sensitive operations.",
      audience: "Executives, founders, and institution-facing teams handling critical workflows.",
      cta: "Book a Consulting Discussion",
      icon: BriefcaseBusiness
    }
  ],
  tools: {
    security: ["Kali Linux", "Burp Suite", "Wireshark", "Nmap", "Metasploit", "OWASP ZAP"],
    technical: ["Python", "Bash / Shell", "JavaScript", "SQL"],
    capabilities: [
      "Phishing awareness and simulation",
      "Risk review support",
      "Security documentation",
      "Workflow assessment",
      "Secure systems thinking",
      "Digital trust strategy",
      "Awareness program design"
    ],
    certifications: ["CompTIA Security+ (In Progress)", "CEH (Planned)", "CISSP (Long-term Goal)"]
  },
  ventures: [
    {
      name: "Shadow Root Security Technologies",
      label: "Current Venture",
      summary:
        "A venture direction focused on secure systems, digital trust, workflow intelligence, and institution-focused problem solving.",
      linkKey: "shadowRoot"
    },
    {
      name: "URUU",
      label: "Flagship Platform Initiative",
      summary:
        "A flagship platform direction focused on structured reporting, workflow visibility, trust-sensitive operations, and stronger digital resilience.",
      linkKey: "uruu"
    }
  ],
  workThemes: [
    "Phishing Simulation & Awareness",
    "Governance & Documentation Support",
    "Workflow Security Thinking",
    "Secure Systems Concepts"
  ],
  insightThemes: [
    "Phishing awareness and human risk",
    "Secure workflows and reporting",
    "Digital trust in African institutions",
    "Practical cybersecurity for SMEs, NGOs, and schools",
    "Tools and lessons from security practice",
    "AI and operational security",
    "Governance-aware modernization"
  ]
};
