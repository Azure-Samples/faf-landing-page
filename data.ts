import type { Icon } from "@phosphor-icons/react";
import {
  Brain,
  UserCircleCheck,
  Compass,
  TreeStructure,
  Code,
  CloudArrowUp,
  Rocket,
  Lightning,
  UsersThree,
  Wrench,
  Cube,
  Terminal,
  MagnifyingGlass,
  FileText,
  GitBranch,
  ArrowsSplit,
  Robot,
  Flask,
  Fingerprint,
  CurrencyDollar,
  Graph,
  Package,
  FilePdf,
  FileDoc,
  Table,
  Presentation,
  Scales,
} from "@phosphor-icons/react";

export const REPO_URL =
  "https://github.com/Azure-Samples/factory-agents-forge";

export const KB_REPO_URL =
  "https://azure-samples.github.io/faf-kb-landing-page";

// ── Request Access (mailto) ────────────────────────────────────
const ACCESS_RECIPIENTS = "dantelmo@microsoft.com,nadeemis@microsoft.com";

const ACCESS_SUBJECT = "Agent Forge (FAF) — Repository Access Request";

const ACCESS_BODY = `Hi Agent Forge (FAF) team,

I'd like to request access to the Agent Forge repository.

• GitHub username *:
• Name *:
• Requested access level (Read / Write) *:
• Organization / team:
• Reason for access:

Note: Please provide your personal/public GitHub username, NOT your GitHub EMU (Enterprise Managed User) id — these usually end with "_microsoft" and cannot be added as collaborators.

Thanks!`;

export const REQUEST_ACCESS_MAILTO = `mailto:${ACCESS_RECIPIENTS}?subject=${encodeURIComponent(
  ACCESS_SUBJECT
)}&body=${encodeURIComponent(ACCESS_BODY)}`;

// ── Stats ──────────────────────────────────────────────────────
export interface Stat {
  icon: Icon;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: Robot, value: "7", label: "Agents" },
  { icon: Lightning, value: "7", label: "Skills" },
  { icon: ArrowsSplit, value: "6", label: "Scenarios" },
  { icon: Cube, value: "5+", label: "Projects Built" },
];

// ── What is FAF ────────────────────────────────────────────────
export interface Feature {
  icon: Icon;
  title: string;
  description: string;
}

export const whatFeatures: Feature[] = [
  {
    icon: Flask,
    title: "Spec-Driven Development",
    description:
      "Every step — from scoping to delivery — is driven by structured document templates that agents produce and consume. PRDs, solution specs, technical architectures, and feature backlogs are purpose-built for generative AI app projects.",
  },
  {
    icon: Fingerprint,
    title: "Agentic Workflows",
    description:
      "Two engagement models — Agentic Customization and Agentic Development — match the right approach to your project. Customize proven accelerator templates or build from scratch with role-specific agents, human-in-the-loop gates, and structured handoffs at every stage.",
  },
  {
    icon: Code,
    title: "Reusable IPs & Design Guidance",
    description:
      "Grounded in production-ready knowledge bases, reference architectures, and design guidance purpose-built for agentic apps. Includes Azure diagrams, pricing, and composable skills backed by reusable code patterns across Python, TypeScript, Java, C#, and IaC.",
  },
];

// ── Agents Catalog ─────────────────────────────────────────────
export type AgentStatus = "active" | "development" | "planned";
export type AgentPhase = "Pre-Engagement" | "Scoping" | "Delivery";

export interface Agent {
  icon: Icon;
  name: string;
  role: string;
  phase: AgentPhase;
  description: string;
  status: AgentStatus;
  docPath: string;
}

export const agents: Agent[] = [
  {
    icon: Brain,
    name: "Analyst",
    role: "Scoping",
    phase: "Scoping",
    description:
      "Synthesizes customer context, requirements, and use cases into a structured PRD — using document templates purpose-built for scoping generative AI applications.",
    status: "active",
    docPath: "docs/agents/README-analyst-agent.md",
  },
  {
    icon: TreeStructure,
    name: "Architect",
    role: "Scoping",
    phase: "Scoping",
    description:
      "Translates the PRD into a solution specification and technical architecture for generative AI apps — grounded in design guidance, reference patterns, and Azure architecture diagrams.",
    status: "active",
    docPath: "docs/agents/README-architect-agent.md",
  },
  {
    icon: Compass,
    name: "Implementation Recommender",
    role: "Scoping",
    phase: "Scoping",
    description:
      "Evaluates reusable IPs and accelerators purpose-built for agentic apps, recommends Agentic Customization or Development, and scaffolds the chosen path.",
    status: "active",
    docPath: "docs/agents/README-impl-recommender-agent.md",
  },
  {
    icon: UserCircleCheck,
    name: "Product Owner",
    role: "Delivery",
    phase: "Delivery",
    description:
      "Transforms solution specs into structured feature backlogs with user stories, acceptance criteria, and naming conventions.",
    status: "active",
    docPath: "docs/agents/README-product-owner-agent.md",
  },
  {
    icon: Code,
    name: "Developer",
    role: "Delivery",
    phase: "Delivery",
    description:
      "Implements scoped changes, runs validations, and fixes defects — grounded in knowledge bases with production-ready patterns for building agentic apps.",
    status: "preview",
    docPath: "docs/agents/README-dev-agent.md",
  },
  {
    icon: CloudArrowUp,
    name: "Infrastructure",
    role: "Delivery",
    phase: "Delivery",
    description:
      "Generates Azure infrastructure (Bicep + azd) from SOLUTION.md, validates with Bicep tools, and wires up post-provisioning hooks.",
    status: "preview",
    docPath: "docs/agents/README-infra-agent.md",
  },
  {
    icon: GitBranch,
    name: "DevOps",
    role: "Delivery",
    phase: "Delivery",
    description:
      "Provisions Azure resources and creates automated CI/CD deployment pipelines with GitHub Actions or Azure DevOps.",
    status: "planned",
    docPath: "",
  },
];

// ── Skills Catalog ─────────────────────────────────────────────
export type SkillProvider = "faf" | "anthropic";

export interface Skill {
  icon: Icon;
  name: string;
  description: string;
  provider: SkillProvider;
  docPath: string;
}

export const skills: Skill[] = [
  {
    icon: Graph,
    name: "Azure Diagrams",
    description:
      "Generate Azure architecture diagrams with 700+ official Microsoft icons — from Bicep/Terraform templates or solution specs.",
    provider: "faf",
    docPath: "docs/skills/README-faf-azure-diagrams.md",
  },
  {
    icon: CurrencyDollar,
    name: "Azure Pricing",
    description:
      "Answer how much Azure services cost, compare pricing across SKUs or regions, build cost estimates for architectures, and forecast Copilot Studio credits.",
    provider: "faf",
    docPath: "docs/skills/README-faf-azure-pricing.md",
  },
  {
    icon: Scales,
    name: "Foundry Model Evaluation",
    description:
      "Evaluate and recommend the best LLM model(s) for a customer application based on solution requirements, use case characteristics, cost constraints, and deployment preferences.",
    provider: "faf",
    docPath: "",
  },
  {
    icon: Package,
    name: "KB Manager",
    description:
      "Manage the lifecycle of knowledge base packages — discover, install, update, and remove FAF plugins to keep the codebase aligned with the latest components.",
    provider: "faf",
    docPath: "docs/skills/README-faf-kb-manager.md",
  },
  {
    icon: FilePdf,
    name: "PDF",
    description:
      "Read, create, merge, split, watermark, encrypt, and OCR PDF files directly from the coding agent.",
    provider: "anthropic",
    docPath: "",
  },
  {
    icon: FileDoc,
    name: "Word (DOCX)",
    description:
      "Create, read, and edit Word documents with formatting, tables of contents, headings, and page layouts.",
    provider: "anthropic",
    docPath: "",
  },
  {
    icon: Table,
    name: "Excel (XLSX)",
    description:
      "Open, edit, create, and transform spreadsheets — add columns, compute formulas, format, chart, and clean tabular data.",
    provider: "anthropic",
    docPath: "",
  },
  {
    icon: Presentation,
    name: "PowerPoint (PPTX)",
    description:
      "Create, read, edit, and combine slide decks — work with templates, layouts, speaker notes, and comments.",
    provider: "anthropic",
    docPath: "",
  },
];

// ── Agentic Scenarios ──────────────────────────────────────────
export interface Scenario {
  id: string;
  title: string;
  startingPoint: string;
  description: string;
  keyAgents: string[];
}

export const scenarios: Scenario[] = [
  {
    id: "S1",
    title: "Customer Requirements Available",
    startingPoint: "Customer-provided docs, transcripts, or briefs",
    description:
      "Start directly from existing customer requirements to produce structured specs, architecture, and an implementation plan.",
    keyAgents: ["Analyst", "Architect", "Impl Recommender"],
  },
  {
    id: "S2",
    title: "Quick Scope Assessment",
    startingPoint: "High-level idea or brief summary",
    description:
      "When you only have a rough idea of the project scope, quickly assess which accelerators fit and what gaps exist before committing to a full engagement.",
    keyAgents: ["Impl Recommender"],
  },
  {
    id: "S3",
    title: "Agentic Development (Post-Scaffold)",
    startingPoint: "Scaffolded codebase from Implementation Recommender",
    description:
      "The code scaffold and AGENTS.md are ready — proceed with feature development using Developer, Product Owner, and Infra agents.",
    keyAgents: ["Product Owner", "Developer", "Infrastructure"],
  },
  {
    id: "S4",
    title: "Agentic Customization",
    startingPoint: "Existing accelerator + solution-metadata.yaml",
    description:
      "Adapt an existing accelerator to customer requirements by customizing templates with guided agent support rather than building from scratch.",
    keyAgents: ["Product Owner", "Developer", "Infrastructure"],
  },
  {
    id: "S5",
    title: "Agentic Dev on Custom Codebase",
    startingPoint: "Your own repo + project requirements",
    description:
      "Adopt FAF agentic development practices on your existing codebase — bring your own repo and let agents help plan and implement features.",
    keyAgents: ["Product Owner", "Developer", "Infrastructure"],
  },
];

// ── Sample Outputs ─────────────────────────────────────────────
export interface SampleOutput {
  icon: Icon;
  title: string;
  agentName: string;
  description: string;
  tags: string[];
  link: string;
  previewImage?: string;
}

export const sampleOutputs: SampleOutput[] = [
  {
    icon: FileText,
    title: "Product Requirements Document",
    agentName: "Analyst Agent",
    description:
      "A structured PRD synthesized from customer context, meeting transcripts, and use case descriptions — ready to hand off to the Architect.",
    tags: ["PRD", "Scoping", "Markdown", "PDF"],
    link: `${REPO_URL}/blob/main/docs/agents/samples/analyst-agent-sample-prd.md`,
    previewImage: `${import.meta.env.BASE_URL}images/prd-preview.png`,
  },
  {
    icon: TreeStructure,
    title: "Solution Specification",
    agentName: "Architect Agent",
    description:
      "A detailed solution spec covering system overview, component design, data flows, and integration points derived from the PRD.",
    tags: ["Solution Spec", "Architecture", "Markdown", "PDF"],
    link: `${REPO_URL}/blob/main/docs/agents/samples/architect-agent-sample-solution-spec.md`,
    previewImage: `${import.meta.env.BASE_URL}images/solution-spec-preview.png`,
  },
  {
    icon: TreeStructure,
    title: "Solution Spec with Azure Diagrams",
    agentName: "Architect Agent",
    description:
      "Solution specification enriched with auto-generated Azure architecture diagrams using the azure-diagrams skill.",
    tags: ["Architecture", "Azure Diagrams", "PDF"],
    link: `${REPO_URL}/blob/main/docs/agents/samples/architect-agent-sample-solution-spec-with-azure-diagram.md`,
    previewImage: `${import.meta.env.BASE_URL}images/solution-spec-with-diagrams-review.png`,
  },
  {
    icon: TreeStructure,
    title: "Technical Architecture",
    agentName: "Architect Agent",
    description:
      "Technical architecture following the C4 model (Context → Container → Component → Class) for low-level design — used by the FAF Developer Agent to scaffold the solution structure, API contracts, and infrastructure.",
    tags: ["Architecture", "C4 Model", "Technical Design", "Markdown"],
    link: `${REPO_URL}/blob/main/docs/agents/samples/architect-agent-sample-technical-architecture.md`,
    previewImage: `${import.meta.env.BASE_URL}images/technical-spec-preview.png`,
  },
  {
    icon: MagnifyingGlass,
    title: "Solution Metadata",
    agentName: "Impl Recommender Agent",
    description:
      "YAML metadata that provides the technical dimensions data source for accelerator comparison — mapping solution components to evaluation criteria and recommending Agentic Customization or Development paths.",
    tags: ["Metadata", "YAML", "Recommendation"],
    link: `${REPO_URL}/blob/main/docs/agents/samples/impl-recommender-agent-sample-solution-metadata.yaml`,
    previewImage: `${import.meta.env.BASE_URL}images/solution-metadata-preview.png`,
  },
  {
    icon: MagnifyingGlass,
    title: "Accelerator Comparison",
    agentName: "Impl Recommender Agent",
    description:
      "Side-by-side comparison of available accelerators evaluated against solution requirements to recommend the best starting point.",
    tags: ["Comparison", "Accelerators", "Visual"],
    link: `${REPO_URL}/blob/main/docs/agents/samples/impl-recommender-accelerator-comparison.png`,
    previewImage: `${import.meta.env.BASE_URL}images/impl-recommender-accelerator-comparison.png`,
  },
  {
    icon: MagnifyingGlass,
    title: "Scoring Card Evaluation",
    agentName: "Impl Recommender Agent",
    description:
      "Weighted scoring card that evaluates accelerators across dimensions like use case scenarios, LLM capabilities, data integration, UI integration, agents hosting, and programming languages.",
    tags: ["Scoring", "Evaluation", "Visual"],
    link: `${REPO_URL}/blob/main/docs/agents/samples/impl-recommender-scoring-card-evaluation-sample.png`,
    previewImage: `${import.meta.env.BASE_URL}images/impl-recommender-scoring-card-evaluation-sample.png`,
  },
  {
    icon: UsersThree,
    title: "Feature Spec + User Stories",
    agentName: "Product Owner Agent",
    description:
      "A complete feature specification with acceptance criteria broken down into individual user stories ready for implementation.",
    tags: ["Feature", "User Stories", "Backlog"],
    link: `${REPO_URL}/tree/main/docs/agents/samples/product-owner-feature-sample`,
    previewImage: `${import.meta.env.BASE_URL}images/feature-preview.png`,
  },
];

// ── Getting Started paths ──────────────────────────────────────
export interface GettingStartedPath {
  title: string;
  icon: Icon;
  steps: string[];
  cta: string;
  ctaLink: string;
}

export const gettingStartedPaths: GettingStartedPath[] = [
  {
    title: "VS Code Plugin Marketplace",
    icon: Rocket,
    steps: [
      "Open GitHub Copilot Chat settings in VS Code",
      "Go to Plugins → Add plugin source",
      "Paste the repo URL and select the Agent Forge plugin",
    ],
    cta: "View Install Guide",
    ctaLink: `${REPO_URL}/blob/main/docs/marketplace/INSTALL.md`,
  },
  {
    title: "From Source",
    icon: Terminal,
    steps: [
      "Clone the repository to your machine",
      "Open in VS Code with GitHub Copilot enabled",
      "Agents, skills, and prompts auto-discover from .github/",
    ],
    cta: "View on GitHub",
    ctaLink: REPO_URL,
  },
];
