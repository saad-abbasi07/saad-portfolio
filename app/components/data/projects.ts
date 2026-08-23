export interface ProjectLink {
  label: string;
  url: string;
  type?: 'demo' | 'github' | 'apk' | 'webRepo' | 'mobileRepo' | 'backendRepo' | 'external';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  image: string;
  demo?: string;
  featured?: boolean;
  links?: ProjectLink[];
  architectureNote?: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  buttonText: string;
  image: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Hi!",
    subtitle: "I'm Saad",
    highlight: "Full Stack Software Engineer",
    description: "Full Stack & AI Developer specializing in building smart web solutions with Next.js and Machine Learning.",
    buttonText: "Download CV",
    image: "/images/main_images/Mypic.jpg",
  },
  {
    id: 2,
    title: "Expert",
    subtitle: "Development",
    highlight: "Full-Stack Developer",
    description: "Crafting responsive web applications with React, Node.js, and type-safe TypeScript code.",
    buttonText: "View Portfolio",
    image: "/images/main_images/Mypic2.jpg",
  }
];

export const webProjects: Project[] = [
  // ── 1. Top Flagship: JobMatch AI (Big Card) ──────────────────────────────
  {
    title: "JobMatch AI - Full Stack Job Application Platform",
    description: "A full-stack AI-powered platform that helps job seekers manage applications and understand how well their CV matches a job. Features CV-to-job matching with match score, missing skills analysis, resume upload and management, user authentication, and an application tracking dashboard.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Appwrite", "Gemini", "Vercel"],
    github: "https://lnkd.in/du2vnFWN",
    image: "/images/projects_images/job-match-ai.png",
    demo: "https://lnkd.in/dJHazbY3",
    featured: true,
    links: [
      { label: "Live Demo", url: "https://lnkd.in/dJHazbY3", type: "demo" },
      { label: "GitHub", url: "https://lnkd.in/du2vnFWN", type: "github" }
    ]
  },
  // ── 2. TeamFlow Collaboration Platform ──────────────────────────────────
  {
    title: "TeamFlow Collaboration Platform",
    description: "Full-stack collaboration platform with real-time messaging, project tracking, and JWT-secured authentication. Handles 1k+ tasks per workspace with 35% faster load times through optimized React queries and MongoDB indexing.",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    github: "https://github.com/saad-abbasi07/TeamFlow-Collaboration-Platform",
    image: "/images/projects_images/team-flow-collaboration-platform.png",
    demo: "https://team-flow-collaboration-platform.vercel.app/",
    links: [
      { label: "Live Demo", url: "https://team-flow-collaboration-platform.vercel.app/", type: "demo" },
      { label: "GitHub", url: "https://github.com/saad-abbasi07/TeamFlow-Collaboration-Platform", type: "github" }
    ]
  },
  // ── 3. Digital Time Capsule ──────────────────────────────────────────────
  {
    title: "Digital Time Capsule",
    description: "A full-stack web application where users can write messages for their future selves, lock them until a specific date, and return when the capsule unlocks. Features live unlock countdown, create/edit/delete capsules, locked and unlocked states, and MongoDB Atlas persistence.",
    technologies: ["Next.js", "React", "JavaScript", "MongoDB Atlas", "Mongoose", "Node.js"],
    github: "https://lnkd.in/dkXgAKFw",
    image: "/images/projects_images/digital-time-capsule.png",
    demo: "https://lnkd.in/deaa_4dZ",
    links: [
      { label: "Live Demo", url: "https://lnkd.in/deaa_4dZ", type: "demo" },
      { label: "GitHub", url: "https://lnkd.in/dkXgAKFw", type: "github" }
    ]
  },
  // ── 4. Top Flagship: Job Application Tracker Web (Big Card) ───────────────
  {
    title: "Job Application Tracker - Full Stack Web",
    description: "A full-stack job application management platform where users can securely register and log in, manage job applications, track application status, search and filter records, edit application details, and delete applications. Built with React, TypeScript, Vite, and Tailwind CSS. Shares the same Node.js / Express backend and MongoDB Atlas database with the mobile app.",
    architectureNote: "React Web + React Native Mobile → Node.js / Express API → MongoDB Atlas",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "REST API"],
    github: "https://lnkd.in/dMk6jtWU",
    image: "/images/projects_images/job-application-tracker-web.png",
    demo: "https://lnkd.in/dSGiCB4d",
    featured: true,
    links: [
      { label: "Live Demo", url: "https://lnkd.in/dSGiCB4d", type: "demo" },
      { label: "Web Frontend", url: "https://lnkd.in/dMk6jtWU", type: "webRepo" },
      { label: "Backend Repo", url: "https://lnkd.in/dD8_NPV9", type: "backendRepo" }
    ]
  },
  // ── 5. Ecommerce Estore NextJS ──────────────────────────────────────────
  {
    title: "Ecommerce Estore NextJS",
    description: "Responsive e-commerce storefront with dynamic product pages and cart functionality. Optimized API response time by 40% using Next.js caching strategies and implemented secure Stripe payment processing.",
    technologies: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs",
    image: "/images/projects_images/e-store.png",
    demo: "https://ecommerce-estore-nextjs.vercel.app/",
    links: [
      { label: "Live Demo", url: "https://ecommerce-estore-nextjs.vercel.app/", type: "demo" },
      { label: "GitHub", url: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs", type: "github" }
    ]
  },
  // ── 6. ConnectHub ───────────────────────────────────────────────────────
  {
    title: "ConnectHub",
    description: "Full-stack social platform with real-time messaging and profile management. Reduced database query time by 50% through MongoDB aggregation pipelines and implemented Socket.io for 100ms message delivery.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ConnectHub",
    image: "/images/projects_images/connecthub-preview.png",
    links: [
      { label: "GitHub", url: "https://github.com/saad-abbasi07/ConnectHub", type: "github" }
    ]
  },
  // ── 7. MERN Chat App ────────────────────────────────────────────────────
  {
    title: "MERN Chat App",
    description: "Real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io featuring socket-based messaging and multi-room support.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/saad-abbasi07/mern-chat-app",
    image: "/images/projects_images/Mern_live_chat.png",
    links: [
      { label: "GitHub", url: "https://github.com/saad-abbasi07/mern-chat-app", type: "github" }
    ]
  },
  // ── 8. FoodieOrder ──────────────────────────────────────────────────────
  {
    title: "FoodieOrder",
    description: "React + Tailwind food delivery UI with restaurant listings, menus, cart, and authentication using context-based state management.",
    technologies: ["React", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/FoodieOrder",
    image: "/images/projects_images/foodieOrder.png",
    demo: "https://foodie-order-lilac.vercel.app/",
    links: [
      { label: "Live Demo", url: "https://foodie-order-lilac.vercel.app/", type: "demo" },
      { label: "GitHub", url: "https://github.com/saad-abbasi07/FoodieOrder", type: "github" }
    ]
  },
  // ── 9. Shopify Theme ────────────────────────────────────────────────────
  {
    title: "Shopify Theme",
    description: "Milano Shopify Theme - Full-stack React/Node solution with responsive UI and demo showcase. Built authentication, responsive layouts, and demo card features using Tailwind CSS and MongoDB.",
    technologies: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
    github: "https://github.com/saad-abbasi07/shopify-theme",
    image: "/images/projects_images/shopifyTheme.png",
    links: [
      { label: "GitHub", url: "https://github.com/saad-abbasi07/shopify-theme", type: "github" }
    ]
  },
  // ── 10. Weather App ─────────────────────────────────────────────────────
  {
    title: "Weather App",
    description: "Live weather updates for any city or country using React and Weather API. Implemented search functionality and responsive UI components.",
    technologies: ["React", "Weather API", "Axios", "Tailwind"],
    github: "https://github.com/saad-abbasi07/weather-app-react",
    image: "/images/projects_images/weather-app.png",
    demo: "https://weather-app-react-pied-three.vercel.app/",
    links: [
      { label: "Live Demo", url: "https://weather-app-react-pied-three.vercel.app/", type: "demo" },
      { label: "GitHub", url: "https://github.com/saad-abbasi07/weather-app-react", type: "github" }
    ]
  },
  // ── 11. Live Chat App ───────────────────────────────────────────────────
  {
    title: "Live Chat App",
    description: "Real-time messaging app using React, Firebase, and WebSocket. Implemented message streaming and live notifications.",
    technologies: ["React", "WebSocket", "Firebase", "Tailwind"],
    github: "https://github.com/saad-abbasi07/chat-app",
    image: "/images/projects_images/chat-app.png",
    links: [
      { label: "GitHub", url: "https://github.com/saad-abbasi07/chat-app", type: "github" }
    ]
  },
  // ── 12. Enquiry Form App ────────────────────────────────────────────────
  {
    title: "Enquiry Form App",
    description: "Dynamic enquiry form with insert/update table functionality. Integrated backend storage using MongoDB and built interactive table features.",
    technologies: ["React", "Axios", "Node.js", "MongoDB", "Flowbite"],
    github: "https://github.com/saad-abbasi07/userEnquiry",
    image: "/images/projects_images/enquiry-form.png",
    links: [
      { label: "GitHub", url: "https://github.com/saad-abbasi07/userEnquiry", type: "github" }
    ]
  },
  // ── 13. Strong Password Generator ───────────────────────────────────────
  {
    title: "Strong Password Generator",
    description: "Tool to generate strong 20-character passwords with copy-to-clipboard functionality. Built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/password-generator-react",
    image: "/images/projects_images/password-generator.png",
    links: [
      { label: "GitHub", url: "https://github.com/saad-abbasi07/password-generator-react", type: "github" }
    ]
  },
  // ── 14. fb-mini-app ─────────────────────────────────────────────────────
  {
    title: "fb-mini-app",
    description: "Mini Facebook-like app built with Next.js and TypeScript. Developed modular UI components and navigation.",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/saad-abbasi07/fb-mini-app",
    image: "/images/projects_images/fb-pic.png",
    links: [
      { label: "GitHub", url: "https://github.com/saad-abbasi07/fb-mini-app", type: "github" }
    ]
  },
  // ── 15. React Starter Web ───────────────────────────────────────────────
  {
    title: "React Starter Web",
    description: "A lightweight starter template for React projects. Includes basic folder structure, pre-configured routing, reusable components, and a ready-to-deploy setup.",
    technologies: ["React", "Vite", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/react-starter-web",
    image: "/images/projects_images/starter-web.png",
    demo: "https://react-starter-web.vercel.app/",
    links: [
      { label: "Live Demo", url: "https://react-starter-web.vercel.app/", type: "demo" },
      { label: "GitHub", url: "https://github.com/saad-abbasi07/react-starter-web", type: "github" }
    ]
  },
  // ── 16. University Portal ───────────────────────────────────────────────
  {
    title: "University Portal",
    description: "Secure PHP/MySQL portal with role-specific dashboards, session-based authentication, and Bootstrap UI components.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/saad-abbasi07/university-portal",
    image: "/images/projects_images/university-portal.png",
    links: [
      { label: "GitHub", url: "https://github.com/saad-abbasi07/university-portal", type: "github" }
    ]
  }
];

export const mobileProjects: Project[] = [
  {
    title: "Job Application Tracker (Mobile App)",
    description: "A React Native mobile application that allows users to register and log in securely, manage job applications, track application status, search and filter applications, edit records, and delete applications. Built using React Native, Expo, TypeScript, and NativeWind with EAS Build. Uses the same Node.js + Express.js backend, JWT authentication, and MongoDB Atlas database as the web application.",
    architectureNote: "React Web + React Native Mobile → Node.js / Express API → MongoDB Atlas",
    technologies: ["React Native", "Expo", "TypeScript", "NativeWind", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
    github: "https://lnkd.in/ddupX76w",
    featured: true,
    image: "/images/projects_images/job-application-tracker-mobile.png",
    links: [
      { label: "Android APK", url: "https://lnkd.in/dt2xw_iB", type: "apk" },
      { label: "Mobile Repo", url: "https://lnkd.in/ddupX76w", type: "mobileRepo" },
      { label: "Backend Repo", url: "https://lnkd.in/dD8_NPV9", type: "backendRepo" }
    ]
  },
  {
    title: "Expo React Native Cross-Platform Application",
    description: "A modern cross-platform mobile application built with Expo and React Native, designed to work across iOS and Android. Includes file-based routing, React Navigation, haptic feedback, efficient image handling, offline storage, and cross-platform functionality. The project is fully open-source, and an Android APK was generated using Expo EAS Build.",
    technologies: ["React Native", "Expo", "TypeScript", "React Navigation", "EAS Build", "Offline Storage"],
    github: "https://lnkd.in/dNnNhraA",
    image: "/images/projects_images/cross-platform-mobile-application.png",
    links: [
      { label: "Android APK", url: "https://lnkd.in/dAnRrXnq", type: "apk" },
      { label: "GitHub Repo", url: "https://lnkd.in/dNnNhraA", type: "github" }
    ]
  },
  {
    title: "E-Learning Mobile App",
    description: "An E-Learning mobile application built with Expo and React Native. The application focuses on a simple interface, clear navigation, and a scalable structure. Features include Home screen, Course listing, Course details, Tab-based navigation, Clean mobile UI, and Scalable project structure.",
    technologies: ["React Native", "Expo", "JavaScript"],
    github: "https://lnkd.in/d-uuSEvj",
    image: "/images/projects_images/E-Learning-mobile-application.png",
    links: [
      { label: "GitHub Repo", url: "https://lnkd.in/d-uuSEvj", type: "github" }
    ]
  }
];

export const mlProjects: Project[] = [
  {
    title: "Credit Card Fraud Detection",
    description: "Advanced ML system for real-time credit card fraud detection. Built with XGBoost classifier achieving high accuracy in identifying fraudulent transactions. Features interactive web interface for testing predictions with live demo.",
    technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Streamlit", "Machine Learning", "FinTech"],
    github: "https://github.com/saad-abbasi07/credit-card-fraud-detection",
    image: "/images/project_images/fraud_detection.jpg",
  },
  {
    title: "Fake News Detector",
    description: "An AI tool using NLP to detect misinformation. Implemented a Passive Aggressive Classifier and TF-IDF Vectorizer for text classification.",
    technologies: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Pandas"],
    github: "https://github.com/saad-abbasi07/fake-news-detector",
    image: "/images/projects_images/fake-news.png",
  },
  {
    title: "Loan Approval ML Model",
    description: "Predicts loan approval based on applicant data. Implemented data preprocessing, model training, and visualizations like ROC curves.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/saad-abbasi07/loan-approval-ml-model",
    image: "/images/projects_images/loan-approval.png",
  },
  {
    title: "SpamShield-ML",
    description: "Spam detection system classifying messages as spam or ham. Built TF-IDF vectorization and trained a Multinomial Naive Bayes model.",
    technologies: ["Python", "NLP", "scikit-learn", "Seaborn", "WordCloud", "TF-IDF"],
    github: "https://github.com/saad-abbasi07/SpamShield-ML",
    image: "/images/projects_images/spamshield.png",
  },
  {
    title: "Linear Regression: Student Score Prediction",
    description: "Predicts student exam scores based on study hours and attendance. Visualized predicted vs actual results and analyzed feature impact.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn"],
    github: "https://github.com/saad-abbasi07/student-performance-prediction",
    image: "/images/projects_images/linearRegressionImage.png",
  },
  {
    title: "SmartSpend-AI",
    description: "AI-driven personal finance tool that predicts monthly spending and provides budgeting recommendations using ML modeling.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn", "AI"],
    github: "https://github.com/saad-abbasi07/SmartSpend-AI",
    image: "/images/projects_images/smartspend-ai.png",
  },
  {
    title: "Stock Price Predictor",
    description: "Predicts stock prices and trends using historical data. Built with Python and Matplotlib for deep analysis and visualization.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Stock Analysis", "AI"],
    github: "https://github.com/saad-abbasi07/stock_price_predictor",
    image: "/images/projects_images/stock-price-predictor.png",
  },
];
