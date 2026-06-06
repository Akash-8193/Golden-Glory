import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorCircle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return;

    const dot = cursorDot.current;
    const circle = cursorCircle.current;
    if (!dot || !circle) return;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });
    };

    const updateCircle = () => {
      const dx = mouseX - circleX;
      const dy = mouseY - circleY;
      
      circleX += dx * 0.15;
      circleY += dy * 0.15;
      
      gsap.set(circle, {
        x: circleX,
        y: circleY,
      });
      
      requestAnimationFrame(updateCircle);
    };

    updateCircle();

    const onMouseEnterInteractive = () => {
      gsap.to(circle, {
        scale: 2.5,
        backgroundColor: "rgba(201, 151, 58, 0.1)",
        borderColor: "rgba(201, 151, 58, 0.5)",
        duration: 0.3,
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(circle, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.5)",
        duration: 0.3,
      });
    };

    const addListeners = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor="hover"]');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDot} 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      />
      <div 
        ref={cursorCircle} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-colors duration-300"
      />
    </>
  );
}
