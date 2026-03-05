"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiUsers, FiZap, FiShield, FiDatabase, FiCode, FiTrendingUp, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import { useTheme } from '../../contexts/ThemeContext';

interface CaseStudyData {
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

interface ProjectCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudyData;
}

export default function ProjectCaseStudy({ isOpen, onClose, caseStudy }: ProjectCaseStudyProps) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Section */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                  >
                    {caseStudy.title}
                  </motion.h2>
                  <div className="flex gap-3">
                    {caseStudy.architecture.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/20 backdrop-blur text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-colors"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                {/* Overview Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#A855F7]">Project Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`p-4 rounded-xl ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    }`}>
                      <h4 className="font-semibold mb-2 text-red-400">Problem</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {caseStudy.overview.problem}
                      </p>
                    </div>
                    <div className={`p-4 rounded-xl ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    }`}>
                      <h4 className="font-semibold mb-2 text-green-400">Solution</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {caseStudy.overview.solution}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className={`p-3 rounded-lg text-center ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    }`}>
                      <p className="text-xs text-gray-500">Timeline</p>
                      <p className="font-semibold">{caseStudy.overview.timeline}</p>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    }`}>
                      <p className="text-xs text-gray-500">Role</p>
                      <p className="font-semibold">{caseStudy.overview.role}</p>
                    </div>
                  </div>
                </motion.section>

                {/* Architecture Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#A855F7]">Technical Architecture</h3>
                  <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {caseStudy.architecture.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`p-4 rounded-xl border ${
                      theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <FiCode className="text-xl mb-2 text-blue-400" />
                      <h4 className="font-semibold mb-1">Frontend</h4>
                      <p className="text-xs text-gray-500">{caseStudy.architecture.tech.slice(0, 3).join(', ')}</p>
                    </div>
                    <div className={`p-4 rounded-xl border ${
                      theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <FiDatabase className="text-xl mb-2 text-green-400" />
                      <h4 className="font-semibold mb-1">Database</h4>
                      <p className="text-xs text-gray-500">{caseStudy.architecture.database}</p>
                    </div>
                    <div className={`p-4 rounded-xl border ${
                      theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <FiZap className="text-xl mb-2 text-purple-400" />
                      <h4 className="font-semibold mb-1">Deployment</h4>
                      <p className="text-xs text-gray-500">{caseStudy.architecture.deployment}</p>
                    </div>
                  </div>
                </motion.section>

                {/* Key Features */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#A855F7]">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border ${
                          theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-[#A855F7]/10 text-[#A855F7]">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{feature.title}</h4>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Challenges */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#A855F7]">Technical Challenges</h3>
                  <div className="space-y-4">
                    {caseStudy.challenges.map((challenge, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border ${
                          theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <h4 className="font-semibold mb-2 text-orange-400">{challenge.title}</h4>
                        <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {challenge.description}
                        </p>
                        <div className={`p-3 rounded-lg ${
                          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
                        }`}>
                          <p className="text-xs font-semibold text-green-400 mb-1">Solution:</p>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Results */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#A855F7]">Results & Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {caseStudy.results.map((result, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl text-center ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex justify-center mb-2 text-[#A855F7]">
                          {result.icon}
                        </div>
                        <p className="text-2xl font-bold mb-1">{result.value}</p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {result.metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Lessons Learned */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#A855F7]">Lessons Learned</h3>
                  <div className="space-y-3">
                    {caseStudy.lessons.map((lesson, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border-l-4 border-[#A855F7] ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                        }`}
                      >
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {lesson}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Action Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700"
                >
                  <a
                    href={caseStudy.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <FiGithub />
                    View Source Code
                  </a>
                  <a
                    href={caseStudy.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#A855F7] text-white rounded-xl hover:bg-[#A855F7]/90 transition-colors"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
