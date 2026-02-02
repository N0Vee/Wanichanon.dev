"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseFollowingCircle() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring config for the following circle (smooth following)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Simple mobile check
    const isMobileDevice = window.innerWidth <= 768;
    setIsMobile(isMobileDevice);
    
    // Initialize cursor tracking for all devices for now
    let animationFrame;
    let lastTime = 0;
    const throttleTime = 16; // ~60fps

    const moveCursor = (e) => {
      const now = Date.now();
      if (now - lastTime >= throttleTime) {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
        animationFrame = requestAnimationFrame(() => {
          // Update position for the following circle (with correct offset for w-4 h-4 = 16px)
          cursorX.set(e.clientX - 8);  // Half of 16px (w-4 h-4)
          cursorY.set(e.clientY - 8);  // Half of 16px (w-4 h-4)
        });
        lastTime = now;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for hover effects on interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer, .glass-card'
    );

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('resize', handleResize);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('resize', handleResize);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Only hide on mobile devices
  if (!mounted) return null;
  
  // Show circle on desktop, hide on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Following circle that trails behind the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: isHovering 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))' 
              : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: isHovering 
              ? '0 0 8px rgba(59, 130, 246, 0.2)' 
              : '0 0 4px rgba(255, 255, 255, 0.1)',
          }}
          animate={{
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </motion.div>

      <style jsx global>{`
        /* Keep normal cursor visible on all devices */
        @media (min-width: 769px) {
          * {
            cursor: auto !important;
          }
        }
        
        /* Mobile devices - normal cursor */
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }

        /* Accessibility - respect user preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
