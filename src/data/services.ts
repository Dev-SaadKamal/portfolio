import { ServiceItem, PrincipleItem, ProcessStep, TechCategory } from "@/types";

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    headline: "Custom business platforms, dashboards, and scalable web applications.",
    tech: "React · Next.js · Node.js · Express · MongoDB",
    suitedFor: [
      "Custom business platforms",
      "Interactive dashboards",
      "Data-driven web applications",
      "Internal tools & portals",
    ],
    problem:
      "Businesses often rely on fragmented off-the-shelf software or brittle spreadsheets that do not fit their exact operating model, limiting growth and data consistency.",
    solution:
      "I design and engineer tailored full-stack applications with modular React frontends, robust Node/Express backends, and performant MongoDB schemas, giving you complete ownership of your toolset.",
    deliverables: [
      "End-to-end architecture (client, API, database)",
      "Component-driven responsive interfaces",
      "Secure RESTful APIs with input validation",
      "Full deployment and environment configuration",
    ],
  },
  {
    number: "02",
    title: "SaaS & MVP Engineering",
    headline: "Rapid, production-ready product builds for founders validating early ideas.",
    tech: "Next.js · React · Node.js · MongoDB · JWT",
    suitedFor: [
      "Startup MVPs & prototype validation",
      "Multi-tenant application architecture",
      "Tiered subscription & role platforms",
      "Self-service onboarding flows",
    ],
    problem:
      "Early-stage founders burn months and excessive budget on slow development cycles or over-engineered solutions before their target market can even test the concept.",
    solution:
      "I help founders build lean, reliable Minimum Viable Products that focus ruthlessly on core value propositions, rock-solid authentication, and clean code that won't require a total rewrite when scaling.",
    deliverables: [
      "Core feature execution prioritized for user feedback",
      "Role-based authentication & session security",
      "Clean database design ready for schema evolution",
      "Fast cloud hosting setup with CI/CD",
    ],
  },
  {
    number: "03",
    title: "E-Commerce Development",
    headline: "Custom storefronts, high-converting product flows, and backend inventory APIs.",
    tech: "React · Node.js · Express · REST APIs · MongoDB",
    suitedFor: [
      "Bespoke product catalogs & storefronts",
      "Direct-to-consumer brand shops",
      "Checkout & cart flow optimizations",
      "Merchant back-office systems",
    ],
    problem:
      "Cookie-cutter e-commerce platforms often charge high recurring fees and impose rigid design or checkout limitations that hurt conversion rates and brand identity.",
    solution:
      "I create responsive, lightweight e-commerce storefronts with custom product views, performant cart states, order management workflows, and tailored backend API integrations.",
    deliverables: [
      "High-speed product catalog & filter experiences",
      "Custom checkout state management & cart logic",
      "Order processing & transactional email pipelines",
      "Mobile-first checkout UX optimization",
    ],
  },
  {
    number: "04",
    title: "Business & Management Systems",
    headline: "Centralized admin consoles, role-based workflows, and operational automation.",
    tech: "MERN Stack · JWT Auth · Express APIs · MongoDB",
    suitedFor: [
      "Staff & intern management platforms",
      "Operational workflow & approval pipelines",
      "Secure executive & administrator consoles",
      "Activity logging & audit trails",
    ],
    problem:
      "Operational bottlenecks occur when team handoffs, document submissions, and authorization approvals take place across unsorted emails and ad-hoc chat channels.",
    solution:
      "I engineer structured management systems that enforce role-based access control, track assignment lifecycles, and present clear operational dashboards for decision makers.",
    deliverables: [
      "Role-based access control (Admin, Manager, Member)",
      "Assignment, task, and deadline tracking engines",
      "Review, verification, and status approval systems",
      "Searchable data grids and audit records",
    ],
  },
];

export const principles: PrincipleItem[] = [
  {
    number: "01",
    title: "Business First",
    description: "I focus on what the product needs to achieve, not just what the code needs to do.",
    detail:
      "Technology is an instrument for solving concrete operational or customer problems. Every architectural decision is guided by real business requirements, speed to launch, and end-user clarity.",
  },
  {
    number: "02",
    title: "Full-Stack Thinking",
    description: "I understand the complete journey from user interface to API route to database record.",
    detail:
      "Building a product requires harmonizing UI responsiveness with database integrity and API efficiency. Because I engineer across the entire stack, there are no blind spots between frontend and backend.",
  },
  {
    number: "03",
    title: "Clean & Scalable",
    description: "The goal is not just to make it work, but to structure it so it can sustainably grow.",
    detail:
      "I write modular, typed code with clear folder structures, predictable naming conventions, and decoupled logic. This allows your team or future collaborators to expand features without technical debt.",
  },
  {
    number: "04",
    title: "Clear Communication",
    description: "Simple communication, transparent progress, and practical engineering solutions.",
    detail:
      "No unnecessary jargon or disappearing acts. You get proactive updates, straightforward problem-solving options, and realistic timelines throughout every development phase.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "DISCOVER",
    tagline: "Clarifying intent & constraints",
    summary: "Understand the core idea, business objectives, user workflows, and technical constraints.",
    activities: [
      "Deconstruct product goals & target user needs",
      "Map user journeys and essential functional requirements",
      "Determine technical constraints and tech stack alignment",
    ],
  },
  {
    number: "02",
    name: "PLAN",
    tagline: "Architecting before writing code",
    summary: "Define data schemas, API contracts, interface wireframes, and delivery milestones.",
    activities: [
      "Model MongoDB database collections and relational links",
      "Specify RESTful endpoints and authorization gates",
      "Establish milestone scope prioritizing highest-value features",
    ],
  },
  {
    number: "03",
    name: "BUILD",
    tagline: "Iterative, modular engineering",
    summary: "Develop the full-stack system with modern React/Next.js, Node.js, Express, and Tailwind CSS.",
    activities: [
      "Build modular, responsive frontend component tree",
      "Implement robust Express API services with validation",
      "Connect secure JWT authentication and state stores",
    ],
  },
  {
    number: "04",
    name: "LAUNCH",
    tagline: "Testing, deployment & handoff",
    summary: "Test edge cases, configure production cloud environments, and deploy for real users.",
    activities: [
      "Conduct cross-browser and mobile responsiveness audits",
      "Deploy onto production infrastructure (Vercel, Netlify, cloud)",
      "Provide clean documentation, environment keys, and codebase handoff",
    ],
  },
];

export const techToolbox: TechCategory[] = [
  {
    category: "Frontend Engineering",
    description: "Building fast, accessible, responsive user interfaces and client architectures.",
    items: [
      { name: "React.js", role: "Component architecture, reactive state, custom hooks", highlight: true },
      { name: "Next.js", role: "SSR, static generation, app router architecture", highlight: true },
      { name: "TypeScript", role: "Type safety, maintainable interfaces, refactoring confidence", highlight: true },
      { name: "JavaScript (ES6+)", role: "Modern async/await, DOM APIs, event loop", highlight: false },
      { name: "Tailwind CSS", role: "Design systems, utility-first layouts, responsive grids", highlight: false },
      { name: "HTML5 & CSS3", role: "Semantic layout, accessibility, modern styling", highlight: false },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Designing reliable server logic, authentication gates, and RESTful endpoints.",
    items: [
      { name: "Node.js", role: "Event-driven asynchronous server runtime", highlight: true },
      { name: "Express.js", role: "RESTful API routes, middleware, request validation", highlight: true },
      { name: "REST APIs", role: "CRUD contracts, clean endpoint design, status semantics", highlight: false },
      { name: "JWT Auth", role: "Stateless token-based authorization and session guards", highlight: true },
      { name: "Bcrypt", role: "Secure cryptographic password hashing", highlight: false },
    ],
  },
  {
    category: "Data & Storage",
    description: "Structuring flexible documents, indices, and file assets.",
    items: [
      { name: "MongoDB", role: "Document database, schema design, aggregation", highlight: true },
      { name: "Mongoose", role: "ODM schema models, validation, middleware hooks", highlight: false },
      { name: "Cloudinary", role: "Cloud media storage, image optimization, asset delivery", highlight: false },
    ],
  },
  {
    category: "DevOps & Tooling",
    description: "Version control, continuous deployment, and testing workflows.",
    items: [
      { name: "Git & GitHub", role: "Version control, branching, PR reviews, code tracking", highlight: true },
      { name: "Vercel", role: "Frontend cloud deployment, preview URLs, DNS config", highlight: true },
      { name: "Netlify", role: "Static hosting, automated continuous builds", highlight: false },
      { name: "Postman", role: "API debugging, automated endpoint testing", highlight: false },
    ],
  },
];
