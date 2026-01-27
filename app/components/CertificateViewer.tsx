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

  useEffect(() => {
    setCurrentIndex(initialCertificateIndex);
    setZoomLevel(1);
  }, [initialCertificateIndex, isOpen]);

  const currentCertificate = certificates[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    setZoomLevel(1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    setZoomLevel(1);
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
      <div className="relative w-full h-full flex flex-col max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className={`flex items-center justify-between p-4 rounded-t-lg ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="flex-1">
            <h2 className={`text-xl md:text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {currentCertificate.title}
            </h2>
            <p className={`text-sm md:text-base mt-1 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Issued by {currentCertificate.issuer} • {currentCertificate.date}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className={`flex-1 flex items-center justify-center overflow-auto p-4 rounded-b-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="relative">
            <div 
              className="transition-transform duration-200 ease-in-out"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={currentCertificate.imagePath}
                alt={currentCertificate.title}
                width={800}
                height={600}
                className="max-w-full h-auto rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className={`flex items-center justify-between p-4 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}>
          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={certificates.length <= 1}
              className={`p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiChevronLeft size={20} />
            </button>
            
            <span className={`text-sm px-3 ${
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
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiZoomOut size={18} />
            </button>
            
            <span className={`text-sm px-2 min-w-[3rem] text-center ${
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
              <FiZoomIn size={18} />
            </button>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <FiDownload size={16} />
            <span className="text-sm font-medium">Download</span>
          </button>
        </div>

        {/* Certificate Thumbnails */}
        {certificates.length > 1 && (
          <div className={`flex gap-2 p-4 overflow-x-auto ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setZoomLevel(1);
                }}
                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all ${
                  index === currentIndex 
                    ? 'ring-2 ring-blue-500 scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={cert.imagePath}
                  alt={cert.title}
                  width={100}
                  height={75}
                  className="w-24 h-18 object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-blue-500/20" />
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
