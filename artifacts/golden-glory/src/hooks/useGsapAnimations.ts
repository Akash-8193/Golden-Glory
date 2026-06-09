import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations(dependencies: any[] = []) {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let cleanupMouseMove: (() => void) | undefined;
    let ctx: gsap.Context;

    const initAnimations = () => {
      const SplitType = (window as any).SplitType;

      if (!SplitType) {
        console.warn("SplitType not loaded yet, retrying in 100ms...");
        timer = setTimeout(initAnimations, 100);
        return;
      }

      timer = setTimeout(() => {
        let splits: any[] = [];
        ctx = gsap.context(() => {
          
          // 3.4 Image Reveal — Curtain Wipe (.at-animation-image-style-1)
          const imageContainers = document.querySelectorAll('.at-animation-image-style-1');
          imageContainers.forEach((container) => {
            const image = container.querySelector('img') || container.querySelector('.image-target');
            if (!image) return;

            gsap.set(container, { visibility: 'visible' });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                toggleActions: 'play none none none',
              }
            });

            tl.fromTo(container, 
              { xPercent: -100 }, 
              { xPercent: 0, duration: 1, ease: 'power2.out' }
            )
            .fromTo(image, 
              { xPercent: 100, scale: 1 }, 
              { xPercent: 0, scale: 1, duration: 1, ease: 'power2.out' }, 
              '<' 
            );
          });

          // 3.6 Text Animation Style 1 — Words Fade In (.at-animation-heading-style-1)
          const headingsStyle1 = document.querySelectorAll('.at-animation-heading-style-1');
          headingsStyle1.forEach((heading) => {
            gsap.set(heading, { visibility: 'visible' });
            const split = new SplitType(heading as HTMLElement, { types: 'words' });
            splits.push(split);
            gsap.from(split.words, {
              duration: 1, x: 20, autoAlpha: 0, stagger: 0.05, ease: 'power2.out',
              scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' }
            });
          });

          // 3.7 Text Animation Style 2 — Characters Slide In (.at-animation-heading-style-2)
          const headingsStyle2 = document.querySelectorAll('.at-animation-heading-style-2');
          headingsStyle2.forEach((heading) => {
            gsap.set(heading, { visibility: 'visible' });
            const split = new SplitType(heading as HTMLElement, { types: 'chars' });
            splits.push(split);
            gsap.from(split.chars, {
              duration: 1, x: 20, autoAlpha: 0, stagger: 0.03, ease: 'power2.out',
              scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' }
            });
          });

          // 3.8 Text Animation Style 3 — 3D Bounce (.at-animation-heading-style-3)
          const headingsStyle3 = document.querySelectorAll('.at-animation-heading-style-3');
          headingsStyle3.forEach((heading) => {
            gsap.set(heading, { visibility: 'visible' });
            const split = new SplitType(heading as HTMLElement, { types: 'lines,words,chars' });
            splits.push(split);
            gsap.set(heading, { perspective: 400 });
            gsap.set(split.chars, { opacity: 0, x: 50 });
            gsap.to(split.chars, {
              x: 0, y: 0, rotateX: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.02,
              scrollTrigger: { trigger: heading, start: 'top 90%', toggleActions: 'play none none none' }
            });
          });

          // 3.9 Generic Fade Up for Subheadings and Paragraphs (.fade-up)
          const fadeUpElements = document.querySelectorAll('.fade-up');
          fadeUpElements.forEach((el) => {
            gsap.from(el, {
              y: 40,
              autoAlpha: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none'
              }
            });
          });

          // 3.10 Typewriter Effect for Small Texts (.typewriter)
          const typewriterElements = document.querySelectorAll('.typewriter');
          typewriterElements.forEach((el) => {
            const split = new SplitType(el as HTMLElement, { types: 'chars' });
            splits.push(split);
            gsap.from(split.chars, {
              opacity: 0,
              duration: 0.1,
              stagger: 0.02,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none'
              }
            });
          });

          // 3.11 Staggered Counter Boxes (.excellence-counter-boxes)
          const counterContainers = document.querySelectorAll('.excellence-counter-boxes');
          counterContainers.forEach((container) => {
            const oddBoxes = container.querySelectorAll('.counter-box:nth-child(odd)');
            const evenBoxes = container.querySelectorAll('.counter-box:nth-child(even)');
            
            gsap.to(oddBoxes, {
              y: -15, duration: 0.4, ease: 'power2.out', paused: true
            });
            gsap.to(evenBoxes, {
              y: 15, duration: 0.4, ease: 'power2.out', paused: true
            });
            
            container.addEventListener('mouseenter', () => {
              gsap.to(oddBoxes, { y: -15, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
              gsap.to(evenBoxes, { y: 15, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
            });
            
            container.addEventListener('mouseleave', () => {
              gsap.to([oddBoxes, evenBoxes], { y: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
            });
          });

          // 3.12 Magic Cursor Hover Effect for buttons (.btn-anime)
          const buttons = document.querySelectorAll('.btn-anime');
          const cursor = document.getElementById('magic-cursor');
          if (cursor) {
            buttons.forEach(btn => {
              btn.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
              btn.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
            });
          }

          // Antigravity / Floating effect
          const floaters = document.querySelectorAll('.gsap-float');
          if (floaters.length > 0) {
            floaters.forEach(el => {
              gsap.to(el, {
                y: -15,
                duration: 2 + Math.random() * 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: Math.random() * 2
              });
            });

            const handleMouseMove = (e: MouseEvent) => {
              floaters.forEach(function(el) {
                const rect = el.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const threshold = 120; // repel radius in px

                if (dist < threshold) {
                  const force = (threshold - dist) / threshold;
                  gsap.to(el, {
                    x: '-=' + dx * force * 0.4,
                    y: '-=' + dy * force * 0.4,
                    duration: 0.4,
                    ease: 'power2.out',
                    overwrite: 'auto'
                  });
                } else {
                  gsap.to(el, {
                    x: 0, y: 0,
                    duration: 1.5,
                    ease: 'elastic.out(1, 0.3)',
                    overwrite: 'auto'
                  });
                }
              });
            };

            document.addEventListener('mousemove', handleMouseMove);
            cleanupMouseMove = () => {
              document.removeEventListener('mousemove', handleMouseMove);
            };
          }

          ScrollTrigger.refresh();
        });

        // Store splits on the ctx object so we can access them in the cleanup function
        (ctx as any).splits = splits;
      }, 100);
    };

    initAnimations();

    return () => {
      clearTimeout(timer);
      if (cleanupMouseMove) cleanupMouseMove();
      if (ctx) {
        ctx.revert();
        if ((ctx as any).splits) {
          (ctx as any).splits.forEach((split: any) => split.revert());
        }
      }
    };
  }, dependencies);
}
