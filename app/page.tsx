"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FiMonitor, FiCpu, FiSmartphone, FiDatabase, 
  FiLayers, FiPieChart, FiMap, FiCheck,
  FiMail, FiPhone, FiMapPin, FiGithub, FiExternalLink, FiBookOpen, FiBriefcase
} from 'react-icons/fi';
import { ReactNode } from 'react';
import SectionHeader from './components/ui/SectionHeader';
import StatCard from './components/ui/StatCard';
import ProjectCard from './components/ui/ProjectCard';
import ContactInfo from './components/ui/ContactInfo';
import CertificateViewer from './components/CertificateViewer';
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
    description: "Full Stack Software Engineer & Machine Learning Developer. I build responsive products and smart solutions.",
    buttonText: "Download CV",
    image: "/images/main_images/Mypic.jpg",
  },
  {
    id: 2,
    title: "Expert",
    subtitle: "Development",
    highlight: "Machine Learning Developer",
    description: "I'm a Full Stack Developer and Machine Learning Developer. I build responsive digital products and use data to create smart solutions.",
    buttonText: "View Certification",
    image: "/images/main_images/Mypic2.jpg",
  }
];

const webProjects = [
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
    title: "My Certification",
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

const mlProjects = [
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

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isCertificateViewerOpen, setIsCertificateViewerOpen] = useState(false);
  const { theme } = useTheme();

  // Certificates data
  const certificates = [
    {
      id: 'sololearn',
      title: 'Full-Stack Development',
      issuer: 'Sololearn',
      date: '2024',
      imagePath: '/certificates/certification_Sololearn.jpg'
    },
    {
      id: 'nexelix',
      title: 'Professional Certification',
      issuer: 'Nexelix',
      date: '2024',
      imagePath: '/certificates/certification_nexelix.jpeg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
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
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div className={`w-full font-sans overflow-x-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      
      {/* 1. HERO SECTION */}
      <section id="home" className={`relative h-screen w-full overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-all duration-1000 flex items-center ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <div className="container mx-auto h-full flex items-center px-6 sm:px-12 md:px-16 lg:px-24">
              <div className={`max-w-2xl z-30 p-6 md:p-0 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800/70 md:bg-transparent' : 'bg-white/70 md:bg-transparent'
              }`}>
                <h2 className="text-blue-500 font-bold tracking-[6px] uppercase text-[11px] mb-4">{slide.highlight}</h2>
                <h1 className={`text-[35px] sm:text-[60px] lg:text-[80px] font-serif font-bold leading-[1.1] mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-[#2c2c2c]'
                }`}>
                  {slide.title} <br /> <span className="text-blue-600">{slide.subtitle}</span>
                </h1>
                <p className={`text-[14px] md:text-[15px] leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 max-w-md ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                }`}>{slide.description}</p>
                <button 
                  className={`px-10 py-4 uppercase tracking-widest text-[11px] font-bold transition-all shadow-lg ${
                    theme === 'dark' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-black text-white hover:bg-blue-600'
                  }`}
                  onClick={() => {
                    if (slide.buttonText === "Download CV") {
                      window.open('/myResume/Saad-Abbasi-Resume.pdf', '_blank');
                    } else if (slide.buttonText === "View Certification") {
                      setIsCertificateViewerOpen(true);
                    } else {
                      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 ${
                  theme === 'dark' ? 'bg-gray-800/40 md:bg-transparent md:bg-gradient-to-r md:from-gray-900' : 'bg-white/40 md:bg-transparent md:bg-gradient-to-r md:from-white'
                } md:via-white/10 md:to-transparent`}></div>
            </div>
          </div>
        ))}
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className={`py-24 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl">
          <SectionHeader subtitle="About Me" title="Who Am I?" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className={`space-y-6 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
            }`}>
              <p><strong className={`font-bold text-lg ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>I'm Saad Abbasi,</strong> a Full Stack Developer and Machine Learning Engineer passionate about building responsive web applications and intelligent ML solutions. I specialize in modern web technologies and data-driven development to create impactful digital experiences.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard count="50+" label="Projects" />
              <StatCard count="4+" label="Years" />
              <StatCard count="30+" label="Clients" />
              <StatCard count="100%" label="Commitment" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExpertiseCard icon={<FiMonitor />} title="Full Stack" color="border-b-[#2c98f0]" />
            <ExpertiseCard icon={<FiCpu />} title="Machine Learning" color="border-b-[#ec5453]" />
            <ExpertiseCard icon={<FiPieChart />} title="Data Analysis" color="border-b-[#f9bf3f]" />
            <ExpertiseCard icon={<FiDatabase />} title="Deployment" color="border-b-[#a84cb8]" />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className={`py-24 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-[#f2f3f7]'
      }`}>
        <div className="max-w-6xl">
          <SectionHeader subtitle="Services" title="What I Offer" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceItem icon={<FiLayers color="#2c98f0"/>} title="Web Development" desc="Full-stack applications with MERN stack (MongoDB, Express.js, React, Node.js) and modern frontend frameworks." />
            <ServiceItem icon={<FiCpu color="#ec5453"/>} title="Machine Learning" desc="Data analysis, feature engineering, and predictive models using Python, TensorFlow, and scikit-learn." />
            <ServiceItem icon={<FiSmartphone color="#f9bf3f"/>} title="Mobile Development" desc="Cross-platform mobile applications using React Native for iOS and Android with native performance." />
            <ServiceItem icon={<FiDatabase color="#a84cb8"/>} title="API Development" desc="RESTful APIs, backend solutions, and database integration with Express.js and secure authentication." />
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className={`py-24 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl">
          <SectionHeader subtitle="Expertise" title="Technical Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <SkillBar skill="MongoDB / Express.js" percentage={92} color="bg-[#2c98f0]" />
            <SkillBar skill="React / Node.js" percentage={90} color="bg-[#ec5453]" />
            <SkillBar skill="React Native / Mobile" percentage={85} color="bg-[#f9bf3f]" />
            <SkillBar skill="Next.js / TypeScript" percentage={88} color="bg-[#a84cb8]" />
            <SkillBar skill="Python / ML (TensorFlow)" percentage={85} color="bg-[#2c98f0]" />
            <SkillBar skill="Tailwind CSS / REST APIs" percentage={90} color="bg-[#ec5453]" />
          </div>
        </div>
      </section>

      {/* 5. EDUCATION SECTION */}
      <section id="education" className={`py-24 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-[#f2f3f7]'
      }`}>
        <div className="max-w-6xl">
          <SectionHeader subtitle="Knowledge" title="Education" />
          <div className="border-l-2 border-blue-500 ml-4 pl-8 space-y-12">
            <TimelineItem 
              icon={<FiBookOpen className="bg-blue-600 text-white"/>} 
              date="2022 - 2026" 
              title="Bachelor of Computer Science" 
              sub="Abbottabad University Of Science & Technology (AUST)" 
              desc="Focused on core computer science principles, software architecture, and artificial intelligence." 
            />
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE SECTION */}
      <section id="experience" className={`py-24 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl">
          <SectionHeader subtitle="Career" title="Professional Experience" />
          <div className="border-l-2 border-red-500 ml-4 pl-8 space-y-12">
            <TimelineItem 
              icon={<FiBriefcase className="bg-red-500 text-white"/>} 
              date="2025 - Present" 
              title="Full Stack Web Developer" 
              sub="Nexelix, Havelian" 
              desc="Building responsive applications using Next.js, React, and Tailwind CSS. Developing backend APIs and managing MongoDB databases." 
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
      <section id="work" className={`py-24 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-[#f2f3f7]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeader subtitle="My Work" title="Web Development Projects" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, index) => (
                <ProjectCard key={index} project={project} color="blue" />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader subtitle="AI & ML" title="Machine Learning Projects" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mlProjects.map((project, index) => (
                <ProjectCard key={index} project={project} color="green" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className={`py-24 px-6 sm:px-12 md:px-16 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl">
          <SectionHeader subtitle="Connect" title="Contact Me" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
                <ContactInfo icon={<FiMail />} label="07saadabbasi@gmail.com" />
                <ContactInfo icon={<FiPhone />} label="+92 327 6491461" />
                <ContactInfo icon={<FiMapPin />} label="Abbottabad, Pakistan" />
            </div>
            <form className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`p-4 outline-none text-sm focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-600' 
                      : 'bg-[#f2f3f7] text-black'
                  }`} 
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`p-4 outline-none text-sm focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-600' 
                      : 'bg-[#f2f3f7] text-black'
                  }`} 
                  required
                />
                <textarea 
                  name="message"
                  placeholder="Message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`md:col-span-2 p-4 outline-none text-sm focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-600' 
                      : 'bg-[#f2f3f7] text-black'
                  }`}
                  required
                ></textarea>
                <button 
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="bg-blue-600 text-white px-10 py-4 uppercase font-bold text-[11px] tracking-widest self-start disabled:bg-gray-400 hover:bg-blue-700 transition-all"
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="md:col-span-2 text-green-600 text-sm">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="md:col-span-2 text-red-600 text-sm">Please fill all fields correctly.</p>
                )}
            </form>
          </div>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      <CertificateViewer 
        isOpen={isCertificateViewerOpen}
        onClose={() => setIsCertificateViewerOpen(false)}
        certificates={certificates}
      />

    </div>
  );
}

const ExpertiseCard = ({ icon, title, color }: ExpertiseCardProps) => {
  const { theme } = useTheme();
  return (
    <div className={`p-8 shadow-lg border-b-4 ${color} text-center ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="text-3xl text-blue-500 flex justify-center mb-6">{icon}</div>
      <h3 className="text-[13px] font-bold uppercase tracking-wider">{title}</h3>
    </div>
  );
};

const ServiceItem = ({ icon, title, desc }: ServiceItemProps) => {
  const { theme } = useTheme();
  return (
    <div className={`p-6 sm:p-8 shadow-lg border rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[280px] ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    }`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}>
        <div className="text-3xl">{icon}</div>
      </div>
      <h3 className={`text-[16px] sm:text-[18px] font-bold uppercase mb-4 tracking-wide ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
      <p className={`text-[13px] sm:text-[14px] leading-relaxed font-medium ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>{desc}</p>
    </div>
  );
};

const SkillBar = ({ skill, percentage, color }: SkillBarProps) => {
  const { theme } = useTheme();
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className={`text-[12px] font-bold uppercase tracking-widest ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>{skill}</span>
        <span className={`text-[12px] font-bold ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>{percentage}%</span>
      </div>
      <div className={`w-full h-[6px] rounded-full overflow-hidden ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div className={`h-full ${color} transition-all duration-1000`} style={{ width: `${percentage}%` }}></div>
      </div>
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
      <div className={`p-6 shadow-sm border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{date}</span>
        <h3 className={`text-lg font-bold mt-2 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>{title} <span className="text-gray-400 font-normal"> - {sub}</span></h3>
        <p className={`text-sm mt-4 leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
        }`}>{desc}</p>
      </div>
    </div>
  );
};
