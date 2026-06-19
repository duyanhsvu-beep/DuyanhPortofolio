import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface VideoLightboxProps {
  videoUrl: string;
  posterUrl?: string;
  videoType?: string;
  onClose: () => void;
}

export default function VideoLightbox({ videoUrl, posterUrl, videoType, onClose }: VideoLightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Close when clicking outside of the active video player container
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (overlayRef.current === e.target) {
      onClose();
    }
  };

  return (
    <motion.div
      ref={overlayRef}
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
      id="video-lightbox-overlay"
    >
      {/* Top Bar for close triggers */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={onClose}
          className="rounded-full bg-white/5 border border-white/10 p-3 text-white/70 hover:text-white hover:bg-white/25 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/20"
          aria-label="Sluit video"
          id="close-lightbox-btn"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Main Content: Responsive Video Carrier */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.05 }}
        className={`relative rounded-lg overflow-hidden bg-black shadow-2xl border border-white/5 ${
          videoType === 'vimeo'
            ? 'w-full max-w-[380px] sm:max-w-[420px] aspect-[9/16] max-h-[85vh]'
            : 'w-full max-w-5xl aspect-video'
        }`}
      >
        {videoType === 'vimeo' ? (
          <iframe
            src={videoUrl}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0 bg-black"
            title="Design/Videografie Showcase"
            allowFullScreen
          />
        ) : (
          <video
            src={videoUrl}
            poster={posterUrl}
            controls
            autoPlay
            preload="metadata"
            playsInline
            className="h-full w-full object-contain bg-black"
            id="lightbox-native-player"
          >
            Uw browser ondersteunt geen video-afspelen.
          </video>
        )}
      </motion.div>
    </motion.div>
  );
}
