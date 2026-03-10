"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome, FiUser, FiBriefcase, FiAward, FiBookOpen, FiMail, 
  FiGithub, FiExternalLink, FiDownload, FiSearch, FiCommand,
  FiGrid, FiFileText, FiMessageSquare
} from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'navigation' | 'external' | 'actions';
  keywords?: string[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'home',
      title: 'Go to Home',
      description: 'Navigate to hero section',
      icon: <FiHome />,
      action: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'navigation',
      keywords: ['home', 'hero', 'top']
    },
    {
      id: 'about',
      title: 'Go to About',
      description: 'Navigate to about section',
      icon: <FiUser />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'navigation',
      keywords: ['about', 'me', 'profile']
    },
    {
      id: 'projects',
      title: 'Go to Projects',
      description: 'Navigate to work section',
      icon: <FiBriefcase />,
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'navigation',
      keywords: ['projects', 'work', 'portfolio']
    },
    {
      id: 'skills',
      title: 'Go to Skills',
      description: 'Navigate to skills section',
      icon: <FiAward />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'navigation',
      keywords: ['skills', 'expertise', 'tech']
    },
    {
      id: 'contact',
      title: 'Go to Contact',
      description: 'Navigate to contact section',
      icon: <FiMail />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
      category: 'navigation',
      keywords: ['contact', 'email', 'reach']
    },
    // External Links
    {
      id: 'github',
      title: 'Open GitHub',
      description: 'Visit GitHub profile',
      icon: <FiGithub />,
      action: () => {
        window.open('https://github.com/saad-abbasi07', '_blank');
        onClose();
      },
      category: 'external',
      keywords: ['github', 'code', 'source']
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn',
      description: 'Visit LinkedIn profile',
      icon: <FiExternalLink />,
      action: () => {
        window.open('https://linkedin.com/in/saad-abbasi07', '_blank');
        onClose();
      },
      category: 'external',
      keywords: ['linkedin', 'professional', 'network']
    },
    // Actions
    {
      id: 'download-cv',
      title: 'Download CV',
      description: 'Download resume PDF',
      icon: <FiDownload />,
      action: () => {
        window.open('/myResume/Saad-Abbasi-Resume.pdf', '_blank');
        onClose();
      },
      category: 'actions',
      keywords: ['cv', 'resume', 'download']
    },
    {
      id: 'email',
      title: 'Send Email',
      description: 'Open email client',
      icon: <FiMessageSquare />,
      action: () => {
        window.open('mailto:07saadabbasi@gmail.com', '_blank');
        onClose();
      },
      category: 'actions',
      keywords: ['email', 'contact', 'mail']
    }
  ];

  const filteredCommands = commands.filter(command => {
    const query = searchQuery.toLowerCase();
    return (
      command.title.toLowerCase().includes(query) ||
      command.description?.toLowerCase().includes(query) ||
      command.keywords?.some(keyword => keyword.toLowerCase().includes(query))
    );
  });

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'navigation': return <FiGrid />;
      case 'external': return <FiExternalLink />;
      case 'actions': return <FiFileText />;
      default: return <FiSearch />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'navigation': return 'text-blue-400';
      case 'external': return 'text-green-400';
      case 'actions': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`relative w-full max-w-2xl rounded-2xl shadow-2xl border ${
              theme === 'dark' 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-white border-gray-200'
            } overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className={`flex items-center gap-3 px-4 py-3 border-b ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <FiCommand className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className={`flex-1 bg-transparent outline-none text-sm ${
                  theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'
                }`}
              />
              <kbd className={`px-2 py-1 text-xs rounded border ${
                theme === 'dark' 
                  ? 'border-gray-600 text-gray-400 bg-gray-800' 
                  : 'border-gray-300 text-gray-600 bg-gray-100'
              }`}>
                ESC
              </kbd>
            </div>

            {/* Command List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center">
                  <FiSearch className={`mx-auto text-2xl mb-2 ${
                    theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                  }`} />
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    No commands found.
                  </p>
                </div>
              ) : (
                <div className="py-2">
                  {['navigation', 'external', 'actions'].map((category, categoryIndex) => {
                    const categoryCommands = filteredCommands.filter(cmd => cmd.category === category);
                    if (categoryCommands.length === 0) return null;

                    return (
                      <div key={category}>
                        {/* Category Header */}
                        {categoryIndex > 0 && (
                          <div className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                          }`}>
                            <div className="flex items-center gap-2">
                              {getCategoryIcon(category)}
                              <span>{category}</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Commands */}
                        {categoryCommands.map((command, index) => {
                          const globalIndex = filteredCommands.indexOf(command);
                          const isSelected = globalIndex === selectedIndex;
                          
                          return (
                            <motion.button
                              key={command.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={command.action}
                              className={`w-full px-4 py-3 flex items-center gap-3 transition-colors ${
                                isSelected
                                  ? theme === 'dark' 
                                    ? 'bg-gray-800 text-white' 
                                    : 'bg-gray-100 text-gray-900'
                                  : theme === 'dark'
                                    ? 'text-gray-300 hover:bg-gray-800'
                                    : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                                isSelected
                                  ? 'bg-[#A855F7]/20 text-[#A855F7]'
                                  : theme === 'dark'
                                    ? 'bg-gray-700 text-gray-400'
                                    : 'bg-gray-200 text-gray-600'
                              }`}>
                                {command.icon}
                              </div>
                              <div className="flex-1 text-left">
                                <div className="text-sm font-medium">{command.title}</div>
                                {command.description && (
                                  <div className={`text-xs ${
                                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                  }`}>
                                    {command.description}
                                  </div>
                                )}
                              </div>
                              <kbd className={`px-2 py-1 text-xs rounded border ${
                                theme === 'dark' 
                                  ? 'border-gray-600 text-gray-400 bg-gray-800' 
                                  : 'border-gray-300 text-gray-600 bg-gray-100'
                              }`}>
                                {globalIndex === 0 ? '↵' : ''}
                              </kbd>
                            </motion.button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className={`px-4 py-2 border-t text-xs ${
              theme === 'dark' 
                ? 'border-gray-700 text-gray-500' 
                : 'border-gray-200 text-gray-400'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span>Press</span>
                  <kbd className={`px-1.5 py-0.5 rounded border ${
                    theme === 'dark' 
                      ? 'border-gray-600 bg-gray-800' 
                      : 'border-gray-300 bg-gray-100'
                  }`}>
                    ↑↓
                  </kbd>
                  <span>to navigate</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Press</span>
                  <kbd className={`px-1.5 py-0.5 rounded border ${
                    theme === 'dark' 
                      ? 'border-gray-600 bg-gray-800' 
                      : 'border-gray-300 bg-gray-100'
                  }`}>
                    ↵
                  </kbd>
                  <span>to select</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
