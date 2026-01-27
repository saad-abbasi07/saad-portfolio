"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight, FiDownload, FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imagePath: string;
}

interface CertificateViewerProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: Certificate[];
  initialCertificateIndex?: number;
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({ 
  isOpen, 
  onClose, 
  certificates, 
  initialCertificateIndex = 0 
}) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(initialCertificateIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setCurrentIndex(initialCertificateIndex);
    setZoomLevel(1);
    setImageError(false);
    setImageLoading(true);
  }, [initialCertificateIndex, isOpen]);

  const currentCertificate = certificates[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    setZoomLevel(1);
    setImageError(false);
    setImageLoading(true);
  };

  const handleNext = () => {
    console.log('handleNext called, certificates.length:', certificates.length, 'currentIndex:', currentIndex);
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    setZoomLevel(1);
    setImageError(false);
    setImageLoading(true);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentCertificate.imagePath;
    link.download = `${currentCertificate.title.replace(/\s+/g, '_')}_Certificate.jpg`;
    link.click();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        handlePrevious();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      case '+':
      case '=':
        handleZoomIn();
        break;
      case '-':
      case '_':
        handleZoomOut();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen || !currentCertificate) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full flex flex-col max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] 2xl:max-w-[75vw] mx-auto p-2 sm:p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className={`flex items-center justify-between p-3 sm:p-4 rounded-t-lg ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="flex-1 min-w-0">
            <h2 className={`text-lg sm:text-xl md:text-2xl font-bold truncate ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {currentCertificate.title}
            </h2>
            <p className={`text-xs sm:text-sm md:text-base mt-1 truncate ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Issued by {currentCertificate.issuer} • {currentCertificate.date}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
              theme === 'dark' 
                ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <FiX size={20} className="sm:size-6" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className={`flex-1 flex items-center justify-center overflow-auto p-2 sm:p-4 lg:p-6 rounded-b-lg min-h-[60vh] lg:min-h-[70vh] ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="relative w-full h-full flex items-center justify-center max-w-6xl xl:max-w-7xl">
            {imageLoading && (
              <div className={`absolute inset-0 flex items-center justify-center ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                  <p className="text-sm">Loading certificate...</p>
                </div>
              </div>
            )}
            
            {imageError ? (
              <div className={`text-center p-8 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-sm font-medium mb-2">Failed to load certificate</p>
                <p className="text-xs mb-4">Please check your connection and try again</p>
                <button
                  onClick={() => {
                    setImageError(false);
                    setImageLoading(true);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    theme === 'dark' 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  Retry
                </button>
              </div>
            ) : (
              <div 
                className="transition-transform duration-200 ease-in-out w-full h-auto"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <Image
                  src={currentCertificate.imagePath}
                  alt={currentCertificate.title}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain rounded-lg shadow-2xl max-h-[60vh] lg:max-h-[70vh] xl:max-h-[75vh]"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, (max-width: 1280px) 80vw, 75vw"
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageLoading(false);
                    setImageError(true);
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 p-3 sm:p-4 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}>
          {/* Navigation */}
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <button
              onClick={handlePrevious}
              disabled={certificates.length <= 1}
              className={`p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiChevronLeft size={18} />
            </button>
            
            <span className={`text-xs sm:text-sm px-2 sm:px-3 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {currentIndex + 1} / {certificates.length}
            </span>
            
            <button
              onClick={handleNext}
              disabled={certificates.length <= 1}
              className={`p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiChevronRight size={18} />
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <button
              onClick={handleZoomOut}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiZoomOut size={16} />
            </button>
            
            <span className={`text-xs sm:text-sm px-2 min-w-[3rem] text-center ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {Math.round(zoomLevel * 100)}%
            </span>
            
            <button
              onClick={handleZoomIn}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiZoomIn size={16} />
            </button>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors order-3 ${
              theme === 'dark' 
                ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                : 'bg-primary hover:bg-primary/90 text-primary-foreground'
            }`}
          >
            <FiDownload size={14} />
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Download</span>
          </button>
        </div>

        {/* Certificate Thumbnails */}
        {certificates.length > 1 && (
          <div className={`flex gap-2 p-3 sm:p-4 overflow-x-auto ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setZoomLevel(1);
                  setImageError(false);
                  setImageLoading(true);
                }}
                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={cert.imagePath}
                  alt={cert.title}
                  width={80}
                  height={60}
                  className="w-16 h-12 sm:w-20 sm:h-15 object-cover"
                  sizes="(max-width: 640px) 64px, 80px"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateViewer;
