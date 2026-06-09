import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 3.2 Magic Cursor - Disabled on screens <= 991px
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isMobile) return null;

  return (
    <motion.div
      id="magic-cursor"
      className="fixed top-0 left-0 pointer-events-none z-[1000000]"
      animate={{
        x: mousePosition.x - 5, // Center the 10px dot
        y: mousePosition.y - 5,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.01 // Minimal lag to feel like cursor, not completely delayed
      }}
    >
      <div id="ball" className="w-[10px] h-[10px] bg-[#ffa602] rounded-full shadow-lg" />
    </motion.div>
  );
}
