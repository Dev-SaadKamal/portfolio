import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "intern-management-system",
    number: "01",
    title: "InternHub (Intern Management System)",
    category: "Full-Stack Business Platform",
    tag: "MERN STACK · FLAGSHIP SYSTEM",
    description:
      "An intern management system that lets organizations manage tasks, track submissions, and monitor intern progress in one place. Built for companies running structured internship programs.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    liveUrl: "https://intern-management-system-eight.vercel.app/",
    githubUrl: "https://github.com/Dev-SaadKamal/Intern-Management-System",
    imageUrl:
      "https://z-cdn-media.chatglm.cn/files/8dc1f969-99f2-4f69-af48-95a334a19065.png?auth_key=1882473905-9fec0f6c475b4a049bb60449b7ee38f6-0-832fc23ca715d02b261dd81fec59e1ef",
    isFeaturedDominant: true,
    problem:
      "Managing student internships, assignments, and evaluation cycles manually or over scattered chats causes missed deadlines, untracked submissions, and tedious administrative overhead.",
    solution:
      "Engineered an end-to-end MERN application separating administrative oversight from intern task delivery. Admins can create cohorts, issue task briefs with explicit deadlines, review submissions, and manage approvals in a structured single dashboard.",
    role:
      "Designed and implemented the full architecture: RESTful API routing with Express, MongoDB schema design with Mongoose, JWT authentication middleware, and the reactive dashboard UI in React.",
    architecture: {
      frontend: "React SPA with componentized views for Admin & Intern roles",
      backend: "Node.js + Express REST API with modular controllers and route guards",
      database: "MongoDB with structured schemas for Users, Tasks, and Submissions",
      auth: "JSON Web Tokens (JWT) stored securely with role authorization middleware",
      deployment: "Vercel frontend hosting with cloud-connected API endpoints",
    },
    keyFeatures: [
      "Role-Based Access Control (Admin vs Intern privilege separation)",
      "Assignment Lifecycle: Assignment Creation → Submission → Review → Approval Status",
      "Deadline tracking with visual submission timestamps",
      "Centralized admin control center for batch oversight",
      "Secure password hashing (bcrypt) and protected API endpoints",
    ],
    workflowHighlights: [
      {
        title: "Cohort Administration",
        desc: "Admins create targeted assignments, assign submission dates, and track participant completion rates in real-time.",
      },
      {
        title: "Submission & Feedback Loop",
        desc: "Interns access their personalized queue, submit deliverables, and view review states without friction.",
      },
      {
        title: "Deterministic State Management",
        desc: "State flows directly through REST endpoints verifying token validity on every mutation.",
      },
    ],
  },
  {
    id: "helplytics-ai",
    number: "02",
    title: "Helplytics AI",
    category: "AI Web Product & Support Platform",
    tag: "MERN STACK · AI MATCHING",
    description:
      "A community support network powered by AI matching. Members can post help requests, solve others' problems, and grow a helpful ecosystem — built for students, creators, and communities.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Matching", "Tailwind CSS"],
    liveUrl: "https://helplytics-ai.netlify.app/",
    githubUrl: "https://github.com/Dev-SaadKamal/April_Hackathon_FrontEnd",
    imageUrl:
      "https://z-cdn-media.chatglm.cn/files/ad97b37b-4dc3-49e8-b294-95813775bca6.png?auth_key=1882473905-d4b130c341b94b31a4a3599d0ab6fe97-0-d1e5dcde958c9aa1cf52e4121d61cb7e",
    isFeaturedDominant: false,
    problem:
      "Support and peer communities lack streamlined, accessible platforms to post urgent help requests, categorize inquiries, and match members with appropriate helpers automatically.",
    solution:
      "Built an AI-driven support community experience presenting intelligent request matching, categorized problem discovery, and real-time query states with high responsiveness and zero visual friction.",
    role:
      "Architected the frontend interface, dashboard layouts, responsive design system, and state management for user queries and member matching.",
    architecture: {
      frontend: "React with modular dashboard layouts and Tailwind CSS styling",
      backend: "Node.js and Express API integration layer with AI matching endpoints",
      database: "MongoDB collections for users, queries, and match metrics",
      auth: "Client-side session handling and route guards",
      deployment: "Continuous deployment via Netlify",
    },
    keyFeatures: [
      "AI-assisted request matching connecting inquiries to experienced community solvers",
      "Intuitive analytics overview with key support metrics and query resolution rates",
      "Interactive inquiry exploration views with category filtering",
      "Responsive layout optimized across desktop, tablet, and mobile screens",
    ],
    workflowHighlights: [
      {
        title: "AI Community Matching",
        desc: "Analyzes incoming request tags and pairs them with suited solvers in the network.",
      },
      {
        title: "Intelligent Triage View",
        desc: "Structured view allowing members to quickly evaluate high-priority incoming requests.",
      },
    ],
  },
  {
    id: "saad-quiz-app",
    number: "03",
    title: "Interactive Quiz Application",
    category: "Interactive JavaScript Engine",
    tag: "HTML · CSS · JS · QUIZ LOGIC",
    description:
      "A clean and interactive quiz interface where users can test their knowledge and track their scores. Built with vanilla JavaScript for fast, dependency-free performance.",
    stack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Quiz Logic", "LocalStorage"],
    liveUrl: "https://saad-quiz-app.netlify.app/",
    githubUrl: "https://github.com/Dev-SaadKamal/Quiz_App",
    imageUrl:
      "https://z-cdn-media.chatglm.cn/files/a1f4a2d7-f191-412d-8651-a49018348086.png?auth_key=1882473905-ff062245dcac44b49a59e809b3af4659-0-c245d35b97fb4f1ffb248ea5d1d80653",
    isFeaturedDominant: false,
    problem:
      "Educational apps frequently suffer from sluggish DOM manipulation, broken timer state across transitions, or unmaintainable spaghetti code in vanilla JavaScript.",
    solution:
      "Constructed a clean, decoupled JavaScript application with isolated question state, timer handlers, scoring computation, and instant UI state transitions.",
    role:
      "Authored 100% of the core JavaScript engine, responsive styling, and accessibility considerations for keyboard navigation.",
    architecture: {
      frontend: "Semantic HTML5 and modular CSS3 architecture",
      backend: "Client-side state machine with persistent session scores",
      database: "Structured JSON question bank with difficulty tags",
      auth: "N/A (Client-side interactive utility)",
      deployment: "Hosted on Netlify with automated build hooks",
    },
    keyFeatures: [
      "Dynamic question progression without full-page reloads",
      "Precise timer mechanism triggering automated submission on expiry",
      "Instant score calculation with answer breakdown and performance feedback",
      "Fluid, responsive mobile layout with touch-friendly selectors",
    ],
    workflowHighlights: [
      {
        title: "Deterministic State Machine",
        desc: "Engine transitions reliably between start, question, timeout, and result phases.",
      },
      {
        title: "Instant Feedback Loop",
        desc: "Provides clear correct/incorrect signifiers immediately upon confirmation.",
      },
    ],
  },
  {
    id: "my-todo-app",
    number: "04",
    title: "To Do List Application",
    category: "Utility & Task Management",
    tag: "HTML · CSS · JS · LOCALSTORAGE",
    description:
      "A minimal, fast to-do list app for managing everyday tasks. Add, edit, and delete items with smooth interactions and persistent local storage.",
    stack: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    liveUrl: "https://my-todo-app-list93.netlify.app/",
    githubUrl: "https://github.com/Dev-SaadKamal/todo-app",
    imageUrl:
      "https://z-cdn-media.chatglm.cn/files/8371cc21-2f08-4a44-b7c5-be02258f1741.png?auth_key=1882473905-82d05fc69d9f4324898c75f6221e0bb0-0-3b05b62c56aa2bc8e6bec9406b96be43",
    isFeaturedDominant: false,
    problem:
      "Daily task management often gets bogged down by heavy software with overwhelming features, slowing down quick item captures.",
    solution:
      "Developed an ultra-lightweight productivity tool providing sub-millisecond task operations, local storage persistence, and clear status toggling.",
    role:
      "Engineered the responsive interface, custom state handling for storage synchronization, and intuitive interaction design.",
    architecture: {
      frontend: "Lightweight responsive HTML5 and CSS3 layout",
      backend: "Client-side state synchronization layer",
      database: "Browser LocalStorage with serialized schema validation",
      auth: "N/A (Local-first client tool)",
      deployment: "Hosted on Netlify",
    },
    keyFeatures: [
      "Instant add, edit, toggle, and delete operations",
      "Persistent state across page reloads and browser sessions",
      "Filter views: All, Active, Completed",
      "Minimalist, zero-lag user interface",
    ],
    workflowHighlights: [
      {
        title: "Local-First Persistence",
        desc: "Never loses work; updates save to browser storage atomically on each keystroke or toggle.",
      },
    ],
  },
];
