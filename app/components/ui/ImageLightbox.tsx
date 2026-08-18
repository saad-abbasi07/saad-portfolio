"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiX, FiZoomIn, FiZoomOut, FiDownload } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
}

export default function ImageLightbox({ isOpen, onClose, imageSrc, imageAlt, title }: ImageLightboxProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  // Reset state when lightbox opens/closes
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoomLevel(prev => Math.min(Math.max(0.5, prev + delta), 3));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `${title || 'project-screenshot'}.png`;
    link.click();
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          
          {/* Lightbox Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-4 border-b ${
              theme === 'dark' ? 'border-gray-700 bg-gray-900/90' : 'border-gray-200 bg-white/90'
            } backdrop-blur-sm`}>
              <div className="flex items-center gap-3">
                <h3 className={`font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {title || 'Project Screenshot'}
                </h3>
                {zoomLevel > 1 && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {Math.round(zoomLevel * 100)}%
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-700 text-gray-400' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  title="Download image"
                >
                  <FiDownload className="text-lg" />
                </button>
                <button
                  onClick={resetZoom}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-700 text-gray-400' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  title="Reset zoom"
                >
                  <FiZoomOut className="text-lg" />
                </button>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-700 text-gray-400' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <FiX className="text-xl" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div 
              className="flex-1 relative overflow-hidden cursor-move"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: zoomLevel,
                    x: position.x,
                    y: position.y
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative max-w-full max-h-full"
                  style={{ cursor: isDragging && zoomLevel > 1 ? 'grabbing' : zoomLevel > 1 ? 'grab' : 'default' }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-full object-contain"
                    draggable={false}
                  />
                </motion.div>
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-lg bg-black/50 backdrop-blur-sm">
                <button
                  onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.25))}
                  className={`p-2 rounded transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-700 text-white' 
                      : 'hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <FiZoomOut className="text-sm" />
                </button>
                <div className={`w-px h-4 ${
                  theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'
                }`} />
                <button
                  onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.25))}
                  className={`p-2 rounded transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-700 text-white' 
                      : 'hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <FiZoomIn className="text-sm" />
                </button>
              </div>

              {/* Instructions */}
              {zoomLevel === 1 && (
                <div className="absolute bottom-4 left-4 text-xs text-white/70 bg-black/50 backdrop-blur-sm px-3 py-2 rounded">
                  Scroll to zoom • Drag to pan when zoomed
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
