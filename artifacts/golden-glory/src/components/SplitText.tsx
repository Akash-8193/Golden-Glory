import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ children, className = "", delay = 0 }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.word-wrapper');
    
    gsap.fromTo(words, 
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
        }
      }
    );
  }, [delay]);

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap gap-[0.25em]`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <span className="word-wrapper inline-block translate-y-full opacity-0">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
