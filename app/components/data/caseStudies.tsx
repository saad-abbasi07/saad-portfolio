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
    problem: "Teams struggled with scattered communication tools, leading to missed deadlines and poor collaboration. Existing solutions were either too expensive or overly complex for agile teams.",
    solution: "Built a unified collaboration platform combining real-time messaging, project management, and team analytics. Focused on simplicity while adding enterprise features like SSO and advanced permissions.",
    timeline: "4 months (Full-time development)",
    role: "Lead Full Stack Developer & System Architect"
  },
  architecture: {
    description: "Next.js frontend with Node.js/Express backend and MongoDB. Used Redis for caching and Socket.io for real-time features. Implemented JWT authentication and comprehensive monitoring.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Redis", "Socket.io", "JWT"],
    database: "MongoDB with proper indexing, Redis for caching and session management",
    deployment: "Vercel for frontend, AWS for backend services, CloudFlare CDN, automated CI/CD with GitHub Actions"
  },
  keyFeatures: [
    {
      title: "Real-time Messaging",
      description: "Team chat with channels, threads, and file sharing. Supports 100+ concurrent users with fast message delivery and search functionality.",
      icon: <FiMessageCircle />
    },
    {
      title: "Project Management",
      description: "Task tracking, sprint planning, and deadline management. Integrates with GitHub for seamless workflow and progress tracking.",
      icon: <FiBarChart />
    },
    {
      title: "Team Analytics",
      description: "Performance metrics, productivity tracking, and custom dashboards. Provides insights into team velocity and project health.",
      icon: <FiBarChart />
    },
    {
      title: "Security & Permissions",
      description: "Role-based access control, SSO integration, and data encryption. Ensures secure collaboration with audit trails.",
      icon: <FiShield />
    }
  ],
  challenges: [
    {
      title: "Real-time Performance",
      description: "Ensuring fast message delivery and smooth collaboration features as team usage grew.",
      solution: "Optimized database queries, implemented Redis caching, and used Socket.io efficiently. Added monitoring and load testing."
    },
    {
      title: "Data Consistency",
      description: "Managing concurrent updates and preventing conflicts when multiple users edit project data simultaneously.",
      solution: "Implemented proper locking mechanisms and conflict resolution strategies. Used database transactions and optimistic updates."
    },
    {
      title: "Security Implementation",
      description: "Balancing security requirements with user experience while implementing authentication and permissions.",
      solution: "Used JWT for authentication, implemented role-based access control, and added comprehensive input validation and security headers."
    }
  ],
  results: [
    {
      metric: "System Uptime",
      value: "99.5%",
      icon: <FiZap />
    },
    {
      metric: "Active Users",
      value: "150+",
      icon: <FiUsers />
    },
    {
      metric: "Message Latency",
      value: "<200ms",
      icon: <FiTrendingUp />
    },
    {
      metric: "Team Efficiency",
      value: "+35%",
      icon: <FiBarChart />
    }
  ],
  lessons: [
    "Real-time features require careful architecture - caching and optimization are crucial for good performance",
    "Security should be built from the start, not added later - authentication and permissions affect the entire system",
    "User experience matters as much as features - simplicity often beats complexity in collaboration tools",
    "Monitoring and testing are essential for maintaining reliability as usage grows",
    "Good database design impacts everything - proper indexing and query optimization prevent performance issues"
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
    problem: "Small businesses struggled with high transaction fees from platforms like Shopify and limited customization options for their specific needs.",
    solution: "Built a flexible e-commerce platform with lower fees and customizable features. Focused on ease of use while providing essential business tools.",
    timeline: "3 months (Full-time development)",
    role: "Full Stack Developer & Tech Lead"
  },
  architecture: {
    description: "Next.js frontend with Node.js backend and PostgreSQL database. Used Redis for caching and integrated Stripe for payments. Added CDN for fast content delivery.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS S3"],
    database: "PostgreSQL with proper indexing, Redis for caching and session management",
    deployment: "Vercel for frontend, AWS for backend services, CloudFlare CDN, automated backups"
  },
  keyFeatures: [
    {
      title: "Product Management",
      description: "Easy product catalog management with categories, variants, and inventory tracking. Bulk upload and automated stock management.",
      icon: <FiShoppingBag />
    },
    {
      title: "Shopping Cart & Checkout",
      description: "Smooth shopping experience with saved carts, guest checkout, and multiple payment options including Stripe integration.",
      icon: <FiPackage />
    },
    {
      title: "Order Management",
      description: "Complete order tracking, shipping management, and customer notifications. Automated email updates and status tracking.",
      icon: <FiBarChart />
    },
    {
      title: "Payment Processing",
      description: "Secure payment processing with Stripe, support for multiple currencies, and automated fraud detection.",
      icon: <FiShield />
    }
  ],
  challenges: [
    {
      title: "Payment Integration",
      description: "Implementing secure payment processing while handling various edge cases and ensuring compliance.",
      solution: "Used Stripe for secure payments, implemented proper error handling, and added comprehensive logging and monitoring."
    },
    {
      title: "Inventory Management",
      description: "Preventing overselling and maintaining accurate stock levels across multiple concurrent orders.",
      solution: "Implemented database transactions and proper locking mechanisms. Added real-time stock updates and low-stock alerts."
    },
    {
      title: "Performance Optimization",
      description: "Ensuring fast page loads and smooth checkout experience as product catalog grew.",
      solution: "Optimized database queries, implemented Redis caching, and used CDN for images. Added lazy loading and compression."
    }
  ],
  results: [
    {
      metric: "System Uptime",
      value: "99.8%",
      icon: <FiZap />
    },
    {
      metric: "Conversion Rate",
      value: "3.2%",
      icon: <FiShoppingBag />
    },
    {
      metric: "Page Speed",
      value: "<2s",
      icon: <FiSmartphone />
    },
    {
      metric: "Sales Growth",
      value: "+45%",
      icon: <FiPackage />
    }
  ],
  lessons: [
    "Payment processing requires careful error handling - failed transactions need clear user feedback",
    "Inventory management is critical - overselling damages customer trust and business reputation",
    "Performance directly impacts sales - every second of load time costs conversions",
    "Security is non-negotiable in e-commerce - PCI compliance and data protection are essential",
    "User experience matters most - simple checkout processes dramatically improve conversion rates"
  ],
  links: {
    github: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs",
    demo: "https://ecommerce-estore-nextjs.vercel.app/"
  }
};
