export interface CaseStudyData {
  title: string;
  heroImage: string;
  overview: {
    problem: string;
    solution: string;
    timeline: string;
    role: string;
  };
  architecture: {
    description: string;
    tech: string[];
    database: string;
    deployment: string;
  };
  keyFeatures: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
  lessons: string[];
  links: {
    github: string;
    demo: string;
  };
}

export const teamFlowCaseStudy: CaseStudyData = {
  title: "TeamFlow Collaboration Platform",
  heroImage: "/images/projects_images/team-flow-collaboration-platform.png",
  overview: {
    problem: "Teams struggled with fragmented communication tools, leading to missed deadlines, poor project visibility, and inefficient collaboration across distributed workforces. Existing solutions were either too complex or lacked essential features for modern agile teams.",
    solution: "Built a comprehensive collaboration platform that combines real-time messaging, project management, and team analytics in a unified interface. Implemented scalable architecture supporting 1000+ concurrent users with sub-100ms message delivery.",
    timeline: "3 months (Full-time)",
    role: "Full Stack Developer & System Architect"
  },
  architecture: {
    description: "Designed a microservices-inspired architecture with Next.js frontend, Node.js/Express backend, and MongoDB for flexible data modeling. Implemented Socket.io for real-time features and JWT-based authentication with role-based access control.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
    database: "MongoDB with aggregation pipelines for analytics and indexing strategies for optimal query performance",
    deployment: "Vercel for frontend, Railway for backend services, with automated CI/CD pipelines and environment-specific configurations"
  },
  keyFeatures: [
    {
      title: "Real-time Collaboration",
      description: "Instant messaging with typing indicators, read receipts, and file sharing. Supports 100+ concurrent users per workspace with 100ms message delivery.",
      icon: "💬"
    },
    {
      title: "Advanced Project Management",
      description: "Kanban boards with drag-and-drop, Gantt charts, and automated progress tracking. Custom workflows for different team methodologies.",
      icon: "📊"
    },
    {
      title: "Team Analytics Dashboard",
      description: "Real-time insights on team productivity, project burn rates, and performance metrics with exportable reports and predictive analytics.",
      icon: "📈"
    },
    {
      title: "Role-based Access Control",
      description: "Granular permissions system with custom roles, project-level access, and audit trails for enterprise security compliance.",
      icon: "🔐"
    }
  ],
  challenges: [
    {
      title: "Scalability with Real-time Features",
      description: "Ensuring smooth performance with 1000+ concurrent users while maintaining real-time synchronization across multiple data types.",
      solution: "Implemented Redis for session management and message queuing, used MongoDB sharding strategies, and optimized Socket.io rooms with connection pooling."
    },
    {
      title: "Complex State Management",
      description: "Managing synchronized state across multiple components while handling optimistic updates and conflict resolution.",
      solution: "Built custom state management layer using React Context with useReducer, implemented event sourcing for critical operations, and added conflict resolution algorithms."
    },
    {
      title: "Performance Optimization",
      description: "Achieving sub-second load times despite complex data relationships and real-time requirements.",
      solution: "Implemented code splitting, lazy loading, and virtualization for large lists. Added MongoDB indexing and query optimization, reducing average response time by 35%."
    }
  ],
  results: [
    {
      metric: "Load Time Improvement",
      value: "35%",
      icon: "⚡"
    },
    {
      metric: "Concurrent Users",
      value: "1,000+",
      icon: "👥"
    },
    {
      metric: "Message Delivery",
      value: "<100ms",
      icon: "🚀"
    },
    {
      metric: "Query Optimization",
      value: "50% Faster",
      icon: "📊"
    }
  ],
  lessons: [
    "Early performance testing revealed critical bottlenecks that shaped the entire architecture decisions",
    "Real-time features require careful consideration of offline scenarios and conflict resolution",
    "User feedback loops are essential for complex collaboration tools - built in analytics from day one",
    "Scalability planning should begin at the architecture stage, not as an afterthought",
    "Security in collaboration tools goes beyond authentication - need to consider data privacy and compliance"
  ],
  links: {
    github: "https://github.com/saad-abbasi07/TeamFlow-Collaboration-Platform",
    demo: "https://team-flow-collaboration-platform.vercel.app/"
  }
};

export const ecommerceCaseStudy: CaseStudyData = {
  title: "Premium E-commerce Platform",
  heroImage: "/images/projects_images/e-store.png",
  overview: {
    problem: "Small to medium businesses needed an affordable, scalable e-commerce solution with advanced features like inventory management, analytics, and multi-channel selling, but existing platforms were either too expensive or too basic.",
    solution: "Developed a comprehensive e-commerce platform with headless architecture, supporting multiple storefronts, advanced inventory management, and real-time analytics. Integrated with popular payment gateways and shipping providers.",
    timeline: "2 months (Full-time)",
    role: "Full Stack Developer & UI/UX Lead"
  },
  architecture: {
    description: "Built with Next.js for SSR performance, Stripe for payments, and PostgreSQL for transactional integrity. Implemented Redis for caching and session management, with CDN optimization for global content delivery.",
    tech: ["Next.js", "React", "PostgreSQL", "Redis", "Stripe", "Tailwind CSS", "Vercel"],
    database: "PostgreSQL with proper indexing, foreign key constraints, and optimized query patterns for high-volume transactions",
    deployment: "Vercel Edge Network for global CDN, Railway for database and backend services, with automated backups and monitoring"
  },
  keyFeatures: [
    {
      title: "Multi-Channel Selling",
      description: "Sell across website, social media, and marketplaces from a single inventory dashboard with automatic stock synchronization.",
      icon: "🛍️"
    },
    {
      title: "Advanced Analytics",
      description: "Real-time sales analytics, customer behavior tracking, and predictive inventory management with AI-powered recommendations.",
      icon: "📊"
    },
    {
      title: "Progressive Web App",
      description: "Offline capabilities, push notifications for abandoned carts, and mobile-optimized checkout with Apple Pay/Google Pay.",
      icon: "📱"
    },
    {
      title: "Inventory Management",
      description: "Automated stock tracking, low-level alerts, supplier management, and purchase order generation with demand forecasting.",
      icon: "📦"
    }
  ],
  challenges: [
    {
      title: "Payment Security & Compliance",
      description: "Implementing PCI-compliant payment processing while maintaining user experience and supporting multiple payment methods.",
      solution: "Used Stripe Elements for secure payment forms, implemented 3D Secure authentication, and added comprehensive audit logging for compliance."
    },
    {
      title: "High-Concurrency Inventory",
      description: "Preventing overselling during flash sales and high-traffic periods while maintaining accurate inventory across multiple channels.",
      solution: "Implemented optimistic locking with database transactions, used Redis for real-time stock tracking, and added queue-based order processing."
    },
    {
      title: "Performance at Scale",
      description: "Maintaining sub-second page loads with large product catalogs and high traffic during peak shopping seasons.",
      solution: "Implemented Next.js ISR for product pages, Redis caching for frequently accessed data, and CDN optimization with intelligent cache invalidation."
    }
  ],
  results: [
    {
      metric: "API Response Time",
      value: "40% Faster",
      icon: "⚡"
    },
    {
      metric: "Conversion Rate",
      value: "25% Increase",
      icon: "📈"
    },
    {
      metric: "Page Load Speed",
      value: "1.2s",
      icon: "🚀"
    },
    {
      metric: "Cart Abandonment",
      value: "30% Reduced",
      icon: "🛒"
    }
  ],
  lessons: [
    "E-commerce requires obsessive focus on performance - every 100ms improvement impacts conversion rates",
    "Payment security is non-negotiable - invest in proper compliance and security measures from the start",
    "Mobile-first design is essential - over 70% of traffic comes from mobile devices",
    "Analytics should be built-in, not bolted on - they drive business decisions and optimization",
    "Inventory management complexity grows exponentially with business size - plan for scalability"
  ],
  links: {
    github: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs",
    demo: "https://ecommerce-estore-nextjs.vercel.app/"
  }
};
