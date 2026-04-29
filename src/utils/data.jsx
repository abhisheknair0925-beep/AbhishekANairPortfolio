import { Code2, Database, LayoutTemplate, Smartphone, Terminal, Server, Activity, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export const PORTFOLIO_DATA = {
  hero: {
    name: "Abhishek A Nair",
    role: "Software Engineer | Backend Systems | Team Lead",
    tagline: "Building scalable backend systems powering real-time retail intelligence.",
    location: "Kochi, Kerala",
  },
  systemImpact: [
    {
      label: "Transactions Processed",
      value: 10000,
      suffix: "K+",
      description: "Daily high-throughput API calls handled seamlessly.",
      icon: <Activity className="w-5 h-5 text-indigo-400" />
    },
    {
      label: "Performance Boost",
      value: 30,
      suffix: "%",
      description: "SQL Server query optimization reducing latency.",
      icon: <Zap className="w-5 h-5 text-purple-400" />
    },
    {
      label: "Systems Deployed",
      value: 4,
      suffix: "+",
      description: "Major production tracking and ETL systems.",
      icon: <Server className="w-5 h-5 text-blue-400" />
    },
    {
      label: "Developers Mentored",
      value: 50,
      suffix: "+",
      description: "Guided through real-world system implementations.",
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />
    }
  ],
  leadership: {
    title: "Leadership & Ownership",
    description: "Driving engineering excellence beyond code. I take ownership of the entire system lifecycle, from architectural design to production deployment and team growth.",
    points: [
      "Leading a team of 4+ developers in building enterprise intelligence systems.",
      "Owning critical code review pipelines to maintain high structural integrity.",
      "Direct responsibility for staging to production deployment cycles.",
      "Proactive production incident handling and root-cause analysis.",
    ]
  },
  optimization: {
    title: "Before vs After Optimization",
    description: "I specialize in identifying bottlenecks and restructuring data access layers. Here's a real-world example of optimizing a complex real-time aggregation query.",
    before: { label: "Legacy Query Execution", time: "1.2s", value: 100 },
    after: { label: "Optimized Indexed Query", time: "0.6s", value: 50 } // Representing 50% reduction visually
  },
  about: {
    summary: "I engineer the invisible scaffolding that makes complex data visible. With over 3 years of deep technical experience in .NET/C# and Spring Boot architectures, I don't just write code—I build resilient, fault-tolerant backend systems. My passion lies in pushing the limits of system performance, tuning databases to perfection, and orchestrating teams to deliver enterprise-grade software.",
    highlights: [
      "Real-time ETL Pipelines",
      "Microservices Architecture",
      "Advanced Query Optimization",
      "Production Deployment Strategy",
    ],
  },
  skills: [
    {
      category: "Backend & Core",
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      items: ["C#", ".NET Core", "Java", "Spring Boot", "Microservices", "REST APIs"],
    },
    {
      category: "Data & Persistence",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      items: ["SQL Server", "MySQL", "PostgreSQL", "ETL Pipelines", "Query Tuning"],
    },
    {
      category: "Infrastructure",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      items: ["Docker", "Git/GitHub", "CI/CD Pipelines", "Swagger", "Postman"],
    },
    {
      category: "Client & UI",
      icon: <LayoutTemplate className="w-6 h-6 text-teal-400" />,
      items: ["React.js", "Tailwind CSS", "Flutter", "Android Native"],
    },
  ],
  experience: [
    {
      role: "Software Developer → Development Team Lead",
      company: "Inditech Data Insight Pvt Ltd — Kochi",
      period: "Aug 2024 - Present",
      description: "Architected scalable backend services in C# (.NET Core) for a high-volume retail platform. Built real-time RESTful APIs and end-to-end ETL pipelines. Promoted to Team Lead within 3 months for technical ownership, leading a 5+ member team and resolving critical production incidents.",
      metrics: [
        { label: "Query Speed", value: "30%" },
        { label: "Team Size", value: "5+" },
      ],
    },
    {
      role: "Android Development Trainer",
      company: "ATEES Industrial Training Pvt Ltd — Thrissur",
      period: "Dec 2019 - Mar 2021",
      description: "Delivered instructor-led training on Android development (Java) and Firebase integration to multiple cohorts. Built demo applications and mentored students on mobile architecture patterns and Material Design UI principles.",
      metrics: [
        { label: "Mentees", value: "10+" },
      ],
    },
  ],
  projects: [
    {
      title: "Automatic Revenue Sharing System (E-Goal)",
      description: "Engineered automated backend revenue processing engine for a multi-store retail chain. Integrated third-party REST APIs for real-time sales synchronization with robust validation pipelines.",
      tech: ["C#", ".NET Core", "SQL Server", "REST APIs"],
      image: "/architecture.png",
      github: "https://github.com/abhisheknair0925-beep",
      live: "#",
    },
    {
      title: "Expense Manager Tracker",
      description: "Built via vibe coding — AI-assisted development used to rapidly ship a cross-platform app with analytics dashboard, offline-first architecture, and cloud sync.",
      tech: ["Flutter", "Dart", "SQLite", "Firebase"],
      image: "/expense-app.png",
      github: "https://github.com/abhisheknair0925-beep",
    },
    {
      title: "E-Goal V2 Android App",
      description: "Production Android client with REST API integration, role-based access control, response caching, and offline sync capabilities.",
      tech: ["Java", "Retrofit", "Material UI", "Android"],
      image: "/expense-app.png",
      github: "https://github.com/abhisheknair0925-beep",
    },
    {
      title: "Secure Online Banking System",
      description: "Secure banking backend implementing JWT-based authentication, strict input validation, and AES data encryption for sensitive transactions.",
      tech: ["Java", "Spring Boot", "Security"],
      image: "/architecture.png",
      github: "https://github.com/abhisheknair0925-beep",
    },
    {
      title: "Token Management System",
      description: "Client-server hospital queue management system, significantly reducing patient wait time through digital token allocation.",
      tech: ["PHP", "MySQL", "Android"],
      image: "/architecture.png",
      github: "https://github.com/abhisheknair0925-beep",
    },
  ],
  achievements: [
    {
      title: "IEEE Publication",
      description: "Co-authored and published a research paper in an IEEE conference on advanced software engineering methodologies.",
      icon: <LayoutTemplate className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Kerala Police Recognition",
      description: "Awarded recognition by Kerala Police for technical contributions and developing an impactful public service application.",
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Competitive Programming",
      description: "Active participant in competitive programming platforms like HackerRank, consistently solving complex algorithmic challenges.",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
    },
  ]
};
