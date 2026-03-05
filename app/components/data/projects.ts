export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
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
    highlight: "Full-Stack ML Engineer",
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
  {
    title: "ConnectHub",
    description: "Full-stack social collaboration platform for sharing posts, chatting in real-time, and managing profiles. Implemented real-time messaging and profile management using MERN stack and Tailwind CSS.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ConnectHub",
    image: "/images/projects_images/connecthub-preview.png",
  },
  {
    title: "Shopify Theme",
    description: "Milano Shopify Theme - Full-stack React/Node solution with responsive UI and demo showcase. Built authentication, responsive layouts, and demo card features using Tailwind CSS and MongoDB.",
    technologies: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
    github: "https://github.com/saad-abbasi07/shopify-theme",
    image: "/images/projects_images/shopifyTheme.png",
  },
  {
    title: "React Starter Web",
    description: "A lightweight starter template for React projects. Includes basic folder structure, pre-configured routing, reusable components, and a ready-to-deploy setup.",
    technologies: ["React", "Vite", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/react-starter-web",
    image: "/images/projects_images/starter-web.png",
  },
  {
    title: "My Portfolio",
    description: "Modern personal portfolio built with Vite and Tailwind CSS. Focused on responsive design, project showcase, and high-performance optimizations.",
    technologies: ["React", "Vite", "Tailwind"],
    github: "https://github.com/saad-abbasi07/connectfolio",
    image: "/images/projects_images/portfilioImage.png",
  },
  {
    title: "MERN Chat App",
    description: "Real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io featuring socket-based messaging and multi-room support.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/saad-abbasi07/mern-chat-app",
    image: "/images/projects_images/Mern_live_chat.png",
  },
  {
    title: "Ecommerce Estore NextJS",
    description: "Responsive e-commerce storefront built with Next.js and Tailwind. Implemented dynamic product pages, category filters, and cart functionality.",
    technologies: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs",
    image: "/images/projects_images/e-store.png",
  },
  {
    title: "FoodieOrder",
    description: "React + Tailwind food delivery UI with restaurant listings, menus, cart, and authentication using context-based state management.",
    technologies: ["React", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/FoodieOrder",
    image: "/images/projects_images/foodieOrder.png",
  },
  {
    title: "Enquiry Form App",
    description: "Dynamic enquiry form with insert/update table functionality. Integrated backend storage using MongoDB and built interactive table features.",
    technologies: ["React", "Axios", "Node.js", "MongoDB", "Flowbite"],
    github: "https://github.com/saad-abbasi07/userEnquiry",
    image: "/images/projects_images/enquiry-form.png",
  },
  {
    title: "Weather App",
    description: "Live weather updates for any city or country using React and Weather API. Implemented search functionality and responsive UI components.",
    technologies: ["React", "Weather API", "Axios", "Tailwind"],
    github: "https://github.com/saad-abbasi07/weather-app-react",
    image: "/images/projects_images/weather-app.png",
  },
  {
    title: "Live Chat App",
    description: "Real-time messaging app using React, Firebase, and WebSocket. Implemented message streaming and live notifications.",
    technologies: ["React", "WebSocket", "Firebase", "Tailwind"],
    github: "https://github.com/saad-abbasi07/chat-app",
    image: "/images/projects_images/chat-app.png",
  },
  {
    title: "Strong Password Generator",
    description: "Tool to generate strong 20-character passwords with copy-to-clipboard functionality. Built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/password-generator-react",
    image: "/images/projects_images/password-generator.png",
  },
  {
    title: "University Portal",
    description: "Secure PHP/MySQL portal with role-specific dashboards, session-based authentication, and Bootstrap UI components.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/saad-abbasi07/university-portal",
    image: "/images/projects_images/university-portal.png",
  },
  {
    title: "fb-mini-app",
    description: "Mini Facebook-like app built with Next.js and TypeScript. Developed modular UI components and navigation.",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/saad-abbasi07/fb-mini-app",
    image: "/images/projects_images/fb-pic.png",
  },
];

export const mlProjects: Project[] = [
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
