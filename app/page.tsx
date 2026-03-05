"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FiMonitor, FiCpu, FiSmartphone, FiDatabase, 
  FiLayers, FiPieChart, FiMap, FiCheck,
  FiMail, FiPhone, FiMapPin, FiGithub, FiExternalLink, FiBookOpen, FiBriefcase, FiCode, FiZap
} from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiPython, SiTensorflow,
  SiTailwindcss, SiGit, SiDocker, SiAmazon,
  SiVercel, SiNetlify, SiJavascript, SiTypescript,
  SiScikitlearn, SiNumpy, SiPandas, SiOpencv
} from 'react-icons/si';
import { ReactNode } from 'react';
import SectionHeader from './components/ui/SectionHeader';
import StatCard from './components/ui/StatCard';
import ProjectCaseStudy from './components/ui/ProjectCaseStudy';
import CommandPalette from './components/ui/CommandPalette';
import ScrollProgress from './components/ui/ScrollProgress';
import SkillBar from './components/ui/SkillBar';
import { teamFlowCaseStudy, ecommerceCaseStudy } from './components/data/caseStudies';
import ProjectCard from './components/ui/ProjectCard';
import ContactInfo from './components/ui/ContactInfo';
import CertificateViewer from './components/CertificateViewer';
import Toast from './components/ui/Toast';
import StickyNav from './components/ui/StickyNav';
import { useTheme } from './contexts/ThemeContext';

// --- TYPE DEFINITIONS ---
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  buttonText: string;
  image: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  demo?: string;
  featured?: boolean;
}

interface ExpertiseCardProps {
  icon: ReactNode;
  title: string;
  color: string;
}

interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
}

interface TimelineItemProps {
  icon: ReactNode;
  date: string;
  title: string;
  sub: string;
  desc: string;
}

// --- DATA FROM YOUR RESUME & PROJECTS ---
const slides = [
  {
    id: 1,
    title: "Hi!",
    subtitle: "I'm Saad",
    highlight: "Full Stack Software Engineer",
    description: "I design full-stack web apps and ML solutions that help businesses increase efficiency and scale. Built 10+ live projects with 1000+ users.",
    buttonText: "Download My CV",
    image: "/images/main_images/Creatix.jpg",
    action: "cv"
  },
  {
    id: 2,
    title: "View My",
    subtitle: "Certificates",
    highlight: "Professional Certifications",
    description: "View my professional certifications and achievements in full-stack development and machine learning.",
    buttonText: "View Certificates",
    image: "/images/main_images/my-pic.png",
    action: "certification"
  }
];

const webProjects = [
  {
    title: "TeamFlow Collaboration Platform",
    description: "Full-stack collaboration platform with real-time messaging, project tracking, and JWT-secured authentication. Handles 1k+ tasks per workspace with 35% faster load times through optimized React queries and MongoDB indexing.",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    github: "https://github.com/saad-abbasi07/TeamFlow-Collaboration-Platform",
    image: "/images/projects_images/team-flow-collaboration-platform.png",
    demo: "https://team-flow-collaboration-platform.vercel.app/",
    featured: true
  },
  {
    title: "React Starter Web",
    description: "A lightweight starter template for React projects. Includes basic folder structure, pre-configured routing, reusable components, and a ready-to-deploy setup.",
    technologies: ["React", "Vite", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/react-starter-web",
    image: "/images/projects_images/starter-web.png",
    demo: "https://react-starter-web.vercel.app/"
  },
  {
    title: "Ecommerce Estore NextJS",
    description: "Responsive e-commerce storefront with dynamic product pages and cart functionality. Optimized API response time by 40% using Next.js caching strategies and implemented secure Stripe payment processing.",
    technologies: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/saad-abbasi07/ecommerce-estore-nextjs",
    image: "/images/projects_images/e-store.png",
    demo: "https://ecommerce-estore-nextjs.vercel.app/"
  },
  {
    title: "FoodieOrder",
    description: "React + Tailwind food delivery UI with restaurant listings, menus, cart, and authentication using context-based state management.",
    technologies: ["React", "Tailwind", "React Router"],
    github: "https://github.com/saad-abbasi07/FoodieOrder",
    image: "/images/projects_images/foodieOrder.png",
    demo: "https://foodie-order-lilac.vercel.app/"
  },
  {
    title: "Weather App",
    description: "Live weather updates for any city or country using React and Weather API. Implemented search functionality and responsive UI components.",
    technologies: ["React", "Weather API", "Axios", "Tailwind"],
    github: "https://github.com/saad-abbasi07/weather-app-react",
    image: "/images/projects_images/weather-app.png",
    demo: "https://weather-app-react-pied-three.vercel.app/"
  },
  {
    title: "ConnectHub",
    description: "Full-stack social platform with real-time messaging and profile management. Reduced database query time by 50% through MongoDB aggregation pipelines and implemented Socket.io for 100ms message delivery.",
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
    title: "MERN Chat App",
    description: "Real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io featuring socket-based messaging and multi-room support.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/saad-abbasi07/mern-chat-app",
    image: "/images/projects_images/Mern_live_chat.png",
  },
  {
    title: "Enquiry Form App",
    description: "Dynamic enquiry form with insert/update table functionality. Integrated backend storage using MongoDB and built interactive table features.",
    technologies: ["React", "Axios", "Node.js", "MongoDB", "Flowbite"],
    github: "https://github.com/saad-abbasi07/userEnquiry",
    image: "/images/projects_images/enquiry-form.png",
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

const mlProjects = [
  {
    title: "Fake News Detector",
    description: "An AI tool using NLP to detect misinformation. Implemented a Passive Aggressive Classifier and TF-IDF Vectorizer for text classification.",
    technologies: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Pandas"],
    github: "https://github.com/saad-abbasi07/fake-news-detector",
    image: "/images/projects_images/fake-news.png",
    demo: "https://fake-news-detector-jxa6exrhjknrxcfncdxyro.streamlit.app/"
  },
  {
    title: "Stock Price Predictor",
    description: "ML model predicting stock trends with 87% accuracy using historical data. Optimized model training time by 60% through feature engineering and implemented real-time data processing with Python APIs.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Stock Analysis", "AI"],
    github: "https://github.com/saad-abbasi07/stock_price_predictor",
    image: "/images/projects_images/stock-price-predictor.png",
    demo: "https://stock-price-predictor-xbhm.vercel.app/"
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
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isCertificateViewerOpen, setIsCertificateViewerOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof teamFlowCaseStudy | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const { theme } = useTheme();

  // Certificates data
  const certificates = [
    {
      id: 'sololearn',
      title: 'Full-Stack Development',
      issuer: 'Sololearn',
      date: '2024',
      imagePath: '/certificates/certification_sololearn.jpg'
    },
    {
      id: 'nexelix',
      title: 'Professional Certification',
      issuer: 'Nexelix',
      date: '2024',
      imagePath: '/certificates/certification_nexelix.jpeg'
    },
    {
      id: 'teaching',
      title: 'Teaching Excellence Certificate',
      issuer: 'Digital Dream',
      date: '2026',
      imagePath: '/certificates/Teaching_Certificate.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Command Palette Keyboard Shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openCaseStudy = (projectTitle: string) => {
    if (projectTitle === "TeamFlow Collaboration Platform") {
      setSelectedCaseStudy(teamFlowCaseStudy);
    } else if (projectTitle === "Ecommerce Estore NextJS") {
      setSelectedCaseStudy(ecommerceCaseStudy);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setToastMessage('Please fill all fields correctly.');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    setFormStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setToastMessage('Message sent successfully! I\'ll get back to you soon.');
        setToastType('success');
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setToastMessage('Failed to send message. Please try again.');
        setToastType('error');
        setShowToast(true);
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      setFormStatus('error');
      setToastMessage('Network error. Please check your connection and try again.');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div className={`w-full font-sans overflow-x-hidden transition-colors duration-300 scroll-smooth ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Sticky Navigation */}
      <StickyNav />
      
      {/* 1. HERO SECTION */}
      <section id="home" className={`relative h-screen w-full overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Subtle gradient overlay for depth - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-all duration-1000 flex items-center ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <div className="container mx-auto h-full flex items-center px-8 sm:px-12 md:px-16 lg:px-24">
              <div className={`max-w-2xl z-30 p-4 sm:p-6 md:p-0 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800/70 md:bg-transparent' : 'bg-white/70 md:bg-transparent'
            }`}>
                <h2 className="text-[#A855F7] font-black tracking-[2px] text-[10px] sm:text-[12px] mb-4 sm:mb-6 uppercase">{slide.highlight}</h2>
                <h1 className={`text-[28px] sm:text-[50px] lg:text-[70px] xl:text-[90px] font-serif font-black leading-[1.05] mb-6 sm:mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-[#A855F7]'
                }`}>
                  {slide.title} <br /> <span className="text-[#A855F7] font-black">{slide.subtitle}</span>
                </h1>
                <p className={`text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed mb-8 sm:mb-10 border-l-4 border-[#A855F7] pl-4 sm:pl-6 max-w-lg font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}>{slide.description}</p>
                <button 
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-widest text-[10px] sm:text-[11px] font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 min-h-[44px] sm:min-h-[48px] bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 ${
                    theme === 'dark' ? 'shadow-purple-500/25' : 'shadow-purple-500/20'
                  }`}
                  onClick={() => {
                    if (slide.action === "cv") {
                      window.open('/myResume/Saad-Abbasi-Resume.pdf', '_blank');
                    } else if (slide.action === "work") {
                      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                    } else if (slide.action === "certification") {
                      setIsCertificateViewerOpen(true);
                    }
                  }}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-full h-full md:w-2/3 lg:w-1/2 overflow-hidden z-0">
                <Image 
                  src={slide.image} 
                  alt="Saad" 
                  fill 
                  className="object-cover object-center md:object-right" 
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A"
                />
                <div className={`absolute inset-0 ${
                  theme === 'dark' ? 'bg-gray-800/20 md:bg-transparent md:bg-gradient-to-r md:from-gray-900/80' : 'bg-white/20 md:bg-transparent md:bg-gradient-to-r md:from-white/80'
                } md:via-white/5 md:to-transparent`}></div>
            </div>
          </div>
        ))}
      </section>

      {/* 2. ABOUT SECTION */}
      <motion.section 
        id="about" 
        className={`py-24 px-8 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionHeader subtitle="About Me" title="Who Am I?" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div className={`space-y-6 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
            }`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p><strong className={`font-bold text-lg ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>I'm Saad Abbasi,</strong> a Full Stack Developer and Machine Learning Engineer passionate about building responsive web applications and intelligent ML solutions. I specialize in modern web technologies and data-driven development to create impactful digital experiences.</p>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatCard count="50+" label="Projects" />
              <StatCard count="4+" label="Years" />
              <StatCard count="30+" label="Clients" />
              <StatCard count="100%" label="Commitment" />
            </motion.div>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ExpertiseCard icon={<FiMonitor />} title="Full Stack" color="border-b-[#2c98f0]" />
            <ExpertiseCard icon={<FiCpu />} title="Machine Learning" color="border-b-[#ec5453]" />
            <ExpertiseCard icon={<FiPieChart />} title="Data Analysis" color="border-b-[#f9bf3f]" />
            <ExpertiseCard icon={<FiDatabase />} title="Deployment" color="border-b-[#a84cb8]" />
          </motion.div>
        </div>
      </motion.section>

      {/* 3. SERVICES SECTION */}
      <motion.section 
        id="services" 
        className={`py-24 px-8 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-[#f2f3f7]'
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionHeader subtitle="Services" title="What I Offer" />
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceItem icon={<FiLayers color="#2c98f0"/>} title="Web Development" desc="Full-stack applications with MERN stack (MongoDB, Express.js, React, Node.js) and modern frontend frameworks." />
            <ServiceItem icon={<FiCpu color="#ec5453"/>} title="Machine Learning" desc="Data analysis, feature engineering, and predictive models using Python, TensorFlow, and scikit-learn." />
            <ServiceItem icon={<FiSmartphone color="#f9bf3f"/>} title="Mobile Development" desc="Cross-platform mobile applications using React Native for iOS and Android with native performance." />
            <ServiceItem icon={<FiDatabase color="#a84cb8"/>} title="API Development" desc="RESTful APIs, backend solutions, and database integration with Express.js and secure authentication." />
          </motion.div>
        </div>
      </motion.section>

      {/* 4. SKILLS SECTION */}
      <motion.section 
        id="skills" 
        className={`py-24 px-8 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionHeader subtitle="Expertise" title="Technical Skills" />
          </motion.div>
          
          {/* Web Development Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className={`flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-700`}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <FiCode className="text-white text-xl" />
              </div>
              <h3 className={`text-2xl font-black text-blue-500 dark:text-blue-400 uppercase tracking-wider`}>Web Development</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SkillBar 
                skill="React" 
                percentage={92} 
                color="bg-blue-500" 
                icon={<SiReact className="text-blue-400" />}
                projects={[
                  { title: "TeamFlow", link: "https://team-flow-collaboration-platform.vercel.app/" },
                  { title: "Ecommerce Store", link: "https://ecommerce-estore-nextjs.vercel.app/" }
                ]}
              />
              <SkillBar 
                skill="Next.js" 
                percentage={90} 
                color="bg-blue-500" 
                icon={<SiNextdotjs className="text-gray-800 dark:text-white" />}
                projects={[
                  { title: "Ecommerce Store", link: "https://ecommerce-estore-nextjs.vercel.app/" },
                  { title: "Portfolio", link: "#" }
                ]}
              />
              <SkillBar 
                skill="Node.js / Express" 
                percentage={88} 
                color="bg-blue-500" 
                icon={<SiNodedotjs className="text-green-500" />}
                projects={[
                  { title: "TeamFlow", link: "https://team-flow-collaboration-platform.vercel.app/" },
                  { title: "ConnectHub", link: "https://github.com/saad-abbasi07/ConnectHub" }
                ]}
              />
              <SkillBar 
                skill="MongoDB" 
                percentage={90} 
                color="bg-blue-500" 
                icon={<SiMongodb className="text-green-600" />}
                projects={[
                  { title: "TeamFlow", link: "https://team-flow-collaboration-platform.vercel.app/" },
                  { title: "MERN Chat App", link: "https://github.com/saad-abbasi07/mern-chat-app" }
                ]}
              />
              <SkillBar 
                skill="Tailwind CSS" 
                percentage={92} 
                color="bg-blue-500" 
                icon={<SiTailwindcss className="text-cyan-500" />}
                projects={[
                  { title: "All Projects", link: "#work" }
                ]}
              />
              <SkillBar 
                skill="TypeScript" 
                percentage={85} 
                color="bg-blue-500" 
                icon={<SiTypescript className="text-blue-600" />}
                projects={[
                  { title: "fb-mini-app", link: "https://github.com/saad-abbasi07/fb-mini-app" }
                ]}
              />
            </div>
          </motion.div>

          {/* Machine Learning Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className={`flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-700`}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <FiCpu className="text-white text-xl" />
              </div>
              <h3 className={`text-2xl font-black text-red-500 dark:text-red-400 uppercase tracking-wider`}>Machine Learning</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SkillBar 
                skill="Python" 
                percentage={90} 
                color="bg-red-500" 
                icon={<SiPython className="text-blue-500" />}
                projects={[
                  { title: "Fake News Detector", link: "https://fake-news-detector-jxa6exrhjknrxcfncdxyro.streamlit.app/" },
                  { title: "Stock Predictor", link: "https://stock-price-predictor-xbhm.vercel.app/" }
                ]}
              />
              <SkillBar 
                skill="TensorFlow" 
                percentage={82} 
                color="bg-red-500" 
                icon={<SiTensorflow className="text-orange-500" />}
                projects={[
                  { title: "Stock Predictor", link: "https://stock-price-predictor-xbhm.vercel.app/" }
                ]}
              />
              <SkillBar 
                skill="Scikit-learn" 
                percentage={85} 
                color="bg-red-500" 
                icon={<SiScikitlearn className="text-orange-600" />}
                projects={[
                  { title: "Fake News Detector", link: "https://fake-news-detector-jxa6exrhjknrxcfncdxyro.streamlit.app/" },
                  { title: "Loan Approval ML", link: "https://github.com/saad-abbasi07/loan-approval-ml-model" }
                ]}
              />
              <SkillBar 
                skill="Pandas / NumPy" 
                percentage={88} 
                color="bg-red-500" 
                icon={<SiPandas className="text-blue-600" />}
                projects={[
                  { title: "SmartSpend-AI", link: "https://github.com/saad-abbasi07/SmartSpend-AI" }
                ]}
              />
              <SkillBar 
                skill="OpenCV" 
                percentage={75} 
                color="bg-red-500" 
                icon={<SiOpencv className="text-green-600" />}
                projects={[
                  { title: "Computer Vision Projects", link: "#" }
                ]}
              />
              <SkillBar 
                skill="Data Analysis" 
                percentage={87} 
                color="bg-red-500" 
                icon={<FiCpu className="text-red-400" />}
                projects={[
                  { title: "All ML Projects", link: "#work" }
                ]}
              />
            </div>
          </motion.div>

          {/* Deployment & DevOps Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={`flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-700`}>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <FiZap className="text-white text-xl" />
              </div>
              <h3 className={`text-2xl font-black text-amber-500 dark:text-amber-400 uppercase tracking-wider`}>Deployment & DevOps</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SkillBar 
                skill="Vercel" 
                percentage={92} 
                color="bg-amber-500" 
                icon={<SiVercel className="text-black" />}
                projects={[
                  { title: "All Next.js Projects", link: "#work" }
                ]}
              />
              <SkillBar 
                skill="Git / GitHub" 
                percentage={95} 
                color="bg-amber-500" 
                icon={<SiGit className="text-orange-600" />}
                projects={[
                  { title: "All Projects", link: "https://github.com/saad-abbasi07" }
                ]}
              />
              <SkillBar 
                skill="Docker" 
                percentage={78} 
                color="bg-amber-500" 
                icon={<SiDocker className="text-blue-500" />}
                projects={[
                  { title: "TeamFlow Backend", link: "https://github.com/saad-abbasi07/TeamFlow-Collaboration-Platform" }
                ]}
              />
              <SkillBar 
                skill="AWS" 
                percentage={72} 
                color="bg-amber-500" 
                icon={<SiAmazon className="text-orange-500" />}
                projects={[
                  { title: "Cloud Deployments", link: "#" }
                ]}
              />
              <SkillBar 
                skill="Netlify" 
                percentage={85} 
                color="bg-amber-500" 
                icon={<SiNetlify className="text-cyan-500" />}
                projects={[
                  { title: "React Projects", link: "#work" }
                ]}
              />
              <SkillBar 
                skill="CI/CD" 
                percentage={80} 
                color="bg-amber-500" 
                icon={<FiZap className="text-amber-400" />}
                projects={[
                  { title: "Automated Deployments", link: "#" }
                ]}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. EDUCATION SECTION */}
      <section id="education" className={`py-24 px-8 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-[#f2f3f7]'
      }`}>
        <div className="max-w-6xl">
          <SectionHeader subtitle="Knowledge" title="Education" />
          <div className="border-l-2 border-[#A855F7] ml-4 pl-8 space-y-12">
            <TimelineItem 
              icon={<FiBookOpen className="bg-[#A855F7] text-white"/>} 
              date="2022 - 2026" 
              title="Bachelor of Computer Science" 
              sub="Abbottabad University Of Science & Technology (AUST)" 
              desc="Focused on core computer science principles, software architecture, and artificial intelligence." 
            />
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE SECTION */}
      <section id="experience" className={`py-32 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl">
          <SectionHeader subtitle="Career" title="Professional Experience" />
          <div className="border-l-2 border-red-500 ml-4 pl-8 space-y-12">
            <TimelineItem 
              icon={<FiBriefcase className="bg-red-500 text-white"/>} 
              date="January 2025 - January 12, 2026" 
              title="Full Stack Web Developer"
              sub="Nexelix Solutions, Havelian" 
              desc="Developed responsive web applications using Next.js, React, and Tailwind CSS. Built RESTful APIs, managed MongoDB databases, and implemented modern web development best practices." 
            />
            <TimelineItem 
              icon={<FiBriefcase className="bg-gray-800 text-white"/>} 
              date="2024 - Present" 
              title="Machine Learning Developer" 
              sub="Freelance" 
              desc="Training deep learning models for computer vision and analyzing datasets with Python, Pandas, and NumPy." 
            />
          </div>
        </div>
      </section>

      {/* 7. WORK SECTION */}
      <motion.section 
        id="work" 
        className={`py-24 px-8 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-[#f2f3f7]'
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionHeader subtitle="My Work" title="Web Development Projects" />
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={project.featured ? "lg:col-span-2" : ""}
                >
                  <ProjectCard 
                    project={project} 
                    color="blue" 
                    onCaseStudy={openCaseStudy}
                    specialWidth={project.title === "Ecommerce Estore NextJS"}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SectionHeader subtitle="AI & ML" title="Machine Learning Projects" />
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mlProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} color="green" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className={`py-24 px-8 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionHeader subtitle="Let's Connect" title="Ready to Build Something Amazing?" />
            <p className={`text-center max-w-2xl mx-auto mb-12 text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Whether you have a project in mind, want to collaborate, or just want to chat about technology - I'm always excited to connect with fellow developers and innovative thinkers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <h3 className={`text-lg font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Get in Touch</h3>
                <div className="space-y-4">
                  <ContactInfo icon={<FiMail />} label="07saadabbasi@gmail.com" />
                  <ContactInfo icon={<FiPhone />} label="+92 327 6491461" />
                  <ContactInfo icon={<FiMapPin />} label="Abbottabad, Pakistan" />
                </div>
              </div>
              
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <h3 className={`text-lg font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Let's Collaborate</h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Open to freelance projects, full-time opportunities, and exciting collaborations. Let's create something remarkable together!
                </p>
              </div>
            </motion.div>
            
            <motion.form 
              className="lg:col-span-2 space-y-6" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`p-4 outline-none text-sm focus:ring-2 focus:ring-[#A855F7] min-h-[56px] rounded-lg transition-all ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-600' 
                      : 'bg-[#f2f3f7] text-black'
                  }`} 
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`p-4 outline-none text-sm focus:ring-2 focus:ring-[#A855F7] min-h-[56px] rounded-lg transition-all ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-600' 
                      : 'bg-[#f2f3f7] text-black'
                  }`} 
                  required
                />
              </div>
              <textarea 
                name="message"
                placeholder="Tell me about your project or idea..." 
                rows={6} 
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full p-4 outline-none text-sm focus:ring-2 focus:ring-[#A855F7] rounded-lg transition-all resize-none ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white border-gray-600' 
                    : 'bg-[#f2f3f7] text-black'
                }`}
                required
              ></textarea>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`px-8 py-4 text-sm font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 min-h-[56px] rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100 flex-1 sm:flex-none ${
                    theme === 'dark' ? 'shadow-purple-500/25' : 'shadow-purple-500/20'
                  }`}
                >
                  {formStatus === 'loading' ? 'Sending Message...' : 'Send Message'}
                </button>
                
                <a
                  href="mailto:07saadabbasi@gmail.com?subject=Project%20Inquiry&body=Hi%20Saad,%20I'd%20love%20to%20discuss%20a%20project%20with%20you!"
                  className={`px-8 py-4 text-sm font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 min-h-[56px] rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 flex-1 sm:flex-none text-center ${
                    theme === 'dark' ? 'shadow-blue-500/25' : 'shadow-blue-500/20'
                  }`}
                >
                  Quick Email
                </a>
              </div>
              
              <p className={`text-xs text-center ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                I typically respond within 24 hours. Let's build something amazing together!
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast 
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      {/* Certificate Viewer Modal */}
      <CertificateViewer 
        isOpen={isCertificateViewerOpen}
        onClose={() => setIsCertificateViewerOpen(false)}
        certificates={certificates}
      />

      {/* Professional Footer */}
      <footer className={`border-t border-white/10 py-10 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4">
            <p className={`text-sm font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Building scalable full-stack applications and intelligent ML-powered solutions with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a 
                href="mailto:07saadabbasi@gmail.com" 
                className={`text-sm transition-colors hover:text-[#A855F7] ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                07saadabbasi@gmail.com
              </a>
              <span className={`text-sm hidden sm:block ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              }`}>•</span>
              <a 
                href="https://github.com/saad-abbasi07" 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm transition-colors hover:text-[#A855F7] ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                GitHub
              </a>
              <span className={`text-sm hidden sm:block ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              }`}>•</span>
              <a 
                href="https://linkedin.com/in/saad-abbasi07" 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm transition-colors hover:text-[#A855F7] ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                LinkedIn
              </a>
            </div>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              © 2026 Saad Abbasi. Crafted with precision.
            </p>
          </div>
        </div>
      </footer>

      {/* Project Case Study Modal */}
      <ProjectCaseStudy
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        caseStudy={selectedCaseStudy || teamFlowCaseStudy}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

    </div>
  );
}

const ExpertiseCard = ({ icon, title, color }: ExpertiseCardProps) => {
  const { theme } = useTheme();
  return (
    <div className={`p-10 shadow-lg border-b-4 ${color} text-center ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="text-3xl text-[#A855F7] flex justify-center mb-6">{icon}</div>
      <h3 className={`text-[15px] font-black uppercase tracking-wider ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
    </div>
  );
};

const ServiceItem = ({ icon, title, desc }: ServiceItemProps) => {
  const { theme } = useTheme();
  return (
    <div className={`p-8 sm:p-10 shadow-lg border rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[300px] ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}>
        <div className="text-3xl">{icon}</div>
      </div>
      <h3 className={`text-[18px] sm:text-[20px] font-black uppercase mb-4 tracking-wide ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
      <p className={`text-[13px] sm:text-[14px] leading-relaxed font-medium ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>{desc}</p>
    </div>
  );
};

const TimelineItem = ({ icon, date, title, sub, desc }: TimelineItemProps) => {
  const { theme } = useTheme();
  return (
    <div className="relative mb-12 last:mb-0">
      <div className={`absolute -left-[51px] top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 shadow-sm z-10 text-lg ${
        theme === 'dark' ? 'border-gray-800' : 'border-white'
      }`}>
        {icon}
      </div>
      <div className={`p-8 shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <span className="text-[#A855F7] font-bold text-xs uppercase tracking-widest">{date}</span>
        <h3 className={`text-xl font-black mt-2 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>{title} <span className="text-gray-400 font-normal"> - {sub}</span></h3>
        <p className={`text-sm mt-4 leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
        }`}>{desc}</p>
      </div>
    </div>
  );
};
