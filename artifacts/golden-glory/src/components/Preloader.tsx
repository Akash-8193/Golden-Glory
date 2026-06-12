import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(() => {
    // Only show if it's the first time visiting in this session
    if (typeof window !== 'undefined') {
      const hasVisited = sessionStorage.getItem('hasVisitedBefore');
      return !hasVisited;
    }
    return true;
  });

  useEffect(() => {
    if (!loading) return;

    // Disable scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      sessionStorage.setItem('hasVisitedBefore', 'true');
    }, 3000); // Show for 3 seconds
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [loading]);

  // If already visited, render nothing at all (no animation needed)
  if (typeof window !== 'undefined' && sessionStorage.getItem('hasVisitedBefore') && !loading) {
    return null;
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center"
        >
          {/* Main Logo Container */}
          <div className="relative flex flex-col items-center">
            
            {/* The Floating Dot */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="absolute -top-6 md:-top-8 right-12 md:right-16 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#dca646]" 
            />

            {/* GOLDEN */}
            <motion.div 
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-64 md:w-80 flex justify-between text-4xl md:text-5xl font-serif text-gray-500 mb-2 md:mb-3"
            >
              <span>G</span><span>O</span><span>L</span><span>D</span><span>E</span><span>N</span>
            </motion.div>

            {/* GLORY */}
            <motion.div 
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-64 md:w-80 flex justify-between text-4xl md:text-5xl font-serif text-[#c08d3e]"
            >
              <span>G</span><span>L</span><span>O</span><span>R</span><span>Y</span>
            </motion.div>

            {/* Subtext */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-6 md:mt-8 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-gray-400 font-sans uppercase"
            >
              Premium Coworking Space
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
