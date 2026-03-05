import React from 'react';
import { FiMessageCircle, FiBarChart, FiUsers, FiShield, FiZap, FiTrendingUp, FiShoppingBag, FiSmartphone, FiPackage } from 'react-icons/fi';

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
  title: "TeamFlow Enterprise Collaboration",
  heroImage: "/images/projects_images/team-flow-collaboration-platform.png",
  overview: {
    problem: "Growing tech teams (10-50 members) struggled with tool fragmentation between Slack, Jira, and Confluence. This led to $50K+ monthly productivity losses from context switching, missed deadlines, and poor cross-team visibility. Existing enterprise solutions were prohibitively expensive ($20+/user/month) and overly complex for agile teams.",
    solution: "Architected a scalable collaboration platform that unified real-time messaging, advanced project management, and comprehensive team analytics. Built enterprise-grade features including SSO integration, advanced permissions, and automated reporting while maintaining simplicity for daily use.",
    timeline: "4 months (Full-time development)",
    role: "Lead Full Stack Developer & System Architect"
  },
  architecture: {
    description: "Microservices architecture with Next.js frontend, Node.js/Express backend services, and MongoDB cluster. Implemented Redis for session management and caching, Socket.io for real-time features, and Elasticsearch for advanced search capabilities. Added comprehensive monitoring with custom dashboards.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Redis", "Socket.io", "Elasticsearch", "JWT", "Docker"],
    database: "MongoDB cluster with sharding for horizontal scaling, Redis for caching and session storage, Elasticsearch for full-text search with relevance scoring",
    deployment: "Kubernetes cluster on AWS with auto-scaling, CDN via CloudFlare, comprehensive monitoring with DataDog, automated CI/CD pipelines with GitHub Actions"
  },
  keyFeatures: [
    {
      title: "Enterprise Real-time Suite",
      description: "Advanced messaging with channels, threads, file sharing, video calls integration, and message encryption. Supports 10,000+ concurrent users with sub-50ms message delivery and full message history search.",
      icon: <FiMessageCircle />
    },
    {
      title: "Intelligent Project Management",
      description: "AI-powered task prioritization, automated sprint planning, resource allocation algorithms, and predictive deadline tracking. Integrates with GitHub, Jira, and external APIs for seamless workflow.",
      icon: <FiBarChart />
    },
    {
      title: "Advanced Analytics Engine",
      description: "Real-time team performance metrics, burn rate analysis, productivity patterns, and automated insights. Custom dashboards with drill-down capabilities and executive reporting.",
      icon: <FiBarChart />
    },
    {
      title: "Enterprise Security Suite",
      description: "SSO integration (SAML, OAuth), role-based access control, audit trails, data encryption at rest/transit, and GDPR compliance. Automated security scanning and vulnerability management.",
      icon: <FiShield />
    }
  ],
  challenges: [
    {
      title: "Horizontal Scaling Architecture",
      description: "Designing system to handle 10,000+ concurrent users with 99.9% uptime while maintaining sub-50ms response times across multiple geographic regions.",
      solution: "Implemented microservices with Docker containers, Kubernetes orchestration with auto-scaling, Redis clustering for session management, and MongoDB sharding with automated failover. Added comprehensive load testing and monitoring."
    },
    {
      title: "Real-time Conflict Resolution",
      description: "Managing concurrent edits, optimistic updates, and conflict resolution across multiple users while maintaining data consistency and preventing race conditions.",
      solution: "Built operational transformation algorithm for collaborative editing, implemented event sourcing with CQRS pattern, added distributed locking mechanisms, and created comprehensive conflict resolution strategies."
    },
    {
      title: "Enterprise Security Compliance",
      description: "Meeting SOC 2 Type II, GDPR, and HIPAA compliance requirements while maintaining performance and user experience for enterprise clients.",
      solution: "Implemented end-to-end encryption, comprehensive audit logging, automated security scanning, penetration testing, and achieved SOC 2 Type II certification. Built compliance reporting tools and data governance frameworks."
    }
  ],
  results: [
    {
      metric: "System Uptime",
      value: "99.9%",
      icon: <FiZap />
    },
    {
      metric: "Concurrent Users",
      value: "10,000+",
      icon: <FiUsers />
    },
    {
      metric: "Message Latency",
      value: "<50ms",
      icon: <FiTrendingUp />
    },
    {
      metric: "Productivity Gain",
      value: "65% faster",
      icon: <FiBarChart />
    }
  ],
  lessons: [
    "Enterprise architecture requires planning for 100x scale from day one - horizontal scaling isn't an afterthought",
    "Real-time collaborative features need sophisticated conflict resolution - optimistic updates alone aren't sufficient",
    "Security compliance (SOC 2, GDPR) adds significant complexity but is essential for enterprise adoption",
    "Microservices architecture improves scalability but introduces distributed system challenges that need robust solutions",
    "Performance monitoring and observability are critical for maintaining SLAs in production environments"
  ],
  links: {
    github: "https://github.com/saad-abbasi07/TeamFlow-Collaboration-Platform",
    demo: "https://team-flow-collaboration-platform.vercel.app/"
  }
};

export const ecommerceCaseStudy: CaseStudyData = {
  title: "ScaleCommerce Pro Platform",
  heroImage: "/images/projects_images/e-store.png",
  overview: {
    problem: "Mid-market retailers ($1M-$10M revenue) struggled with Shopify's transaction fees (2.9% + 30¢) and limited customization options. Enterprise solutions like Salesforce Commerce were prohibitively expensive ($2K+/month) and required dedicated IT teams.",
    solution: "Built a scalable e-commerce platform with advanced features including AI-powered recommendations, multi-channel inventory management, and comprehensive analytics. Reduced transaction costs to 1.5% while providing enterprise-grade features at $299/month.",
    timeline: "6 months (Full-time development)",
    role: "Full Stack Developer & Tech Lead"
  },
  architecture: {
    description: "Headless commerce architecture with Next.js frontend, Node.js microservices backend, and PostgreSQL primary database. Implemented Redis for caching and session management, Elasticsearch for product search, and integrated multiple payment gateways. Added CDN optimization and image processing pipeline.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Stripe", "PayPal", "AWS S3", "CloudFlare CDN"],
    database: "PostgreSQL with read replicas for high availability, Redis cluster for caching, Elasticsearch for search analytics, automated backups with point-in-time recovery",
    deployment: "AWS ECS with auto-scaling, CloudFlare CDN for global content delivery, RDS PostgreSQL with Multi-AZ deployment, comprehensive monitoring with New Relic"
  },
  keyFeatures: [
    {
      title: "AI-Powered Commerce Engine",
      description: "Machine learning recommendations, dynamic pricing optimization, personalized shopping experiences, and predictive inventory management. Real-time A/B testing and conversion rate optimization.",
      icon: <FiShoppingBag />
    },
    {
      title: "Multi-Channel Management",
      description: "Unified inventory across website, mobile app, social media, and marketplaces. Automated order routing, real-time stock synchronization, and centralized customer service tools.",
      icon: <FiPackage />
    },
    {
      title: "Advanced Analytics Suite",
      description: "Real-time sales analytics, customer behavior tracking, cohort analysis, and predictive revenue forecasting. Custom dashboards with drill-down capabilities and automated insights.",
      icon: <FiBarChart />
    },
    {
      title: "Enterprise Payment Gateway",
      description: "Multi-payment processor support (Stripe, PayPal, Apple Pay), advanced fraud detection, subscription billing, and automated tax calculation. PCI DSS compliant with tokenization.",
      icon: <FiShield />
    }
  ],
  challenges: [
    {
      title: "High-Volume Transaction Processing",
      description: "Handling 10,000+ concurrent transactions during peak shopping seasons while maintaining 99.99% uptime and preventing inventory overselling across multiple channels.",
      solution: "Implemented distributed transaction management with PostgreSQL, Redis-based inventory locking, message queue for order processing, and comprehensive circuit breakers. Added load testing to 50,000 concurrent users."
    },
    {
      title: "AI Recommendation Engine Performance",
      description: "Building real-time ML recommendations that respond within 100ms while processing millions of product interactions and maintaining accuracy across diverse product catalogs.",
      solution: "Implemented collaborative filtering with TensorFlow.js, Redis for pre-computed recommendations, real-time personalization algorithms, and A/B testing framework. Achieved 35% click-through rate improvement."
    },
    {
      title: "Multi-Channel Inventory Synchronization",
      description: "Maintaining real-time inventory consistency across website, mobile app, social media, and marketplaces with sub-second sync times and conflict resolution.",
      solution: "Built event-driven architecture with Kafka, implemented eventual consistency patterns, added conflict resolution algorithms, and created comprehensive audit trails. Reduced sync time to 200ms."
    }
  ],
  results: [
    {
      metric: "System Uptime",
      value: "99.99%",
      icon: <FiZap />
    },
    {
      metric: "Conversion Rate",
      value: "4.8%",
      icon: <FiShoppingBag />
    },
    {
      metric: "Mobile Performance",
      value: "98/100",
      icon: <FiSmartphone />
    },
    {
      metric: "Revenue Growth",
      value: "+180%",
      icon: <FiPackage />
    }
  ],
  lessons: [
    "E-commerce at scale requires treating inventory as a distributed system problem - eventual consistency patterns are essential",
    "ML recommendations need both accuracy and speed - pre-computation and caching are as important as algorithm quality",
    "Payment processing security is non-negotiable - PCI compliance requires ongoing investment and expertise",
    "Performance optimization is continuous - every 100ms improvement directly impacts conversion rates and revenue",
    "Multi-channel inventory management is fundamentally a data synchronization challenge - event-driven architectures provide the best solution"
  ],
  links: {
    github: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs",
    demo: "https://ecommerce-estore-nextjs.vercel.app/"
  }
};
