'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: fine)').matches;
    }
    return false;
  });

  // Smooth springs for cursor outer ring
  const ringX = useSpring(-100, { stiffness: 400, damping: 28 });
  const ringY = useSpring(-100, { stiffness: 400, damping: 28 });

  // Direct position state for fast inner dot
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device supports fine precision pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, input, textarea, select, label, [role="button"], summary, .hover-target, [onClick]'
          )
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [ringX, ringY, isVisible]);

  if (!isPointerFine || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Precision Inner Dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#1A1A1A]"
        style={{
          x: dotPos.x - 3,
          y: dotPos.y - 3,
          width: 6,
          height: 6,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 0.85,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Editorial Outer Ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-[#1A1A1A]/40 bg-[#1A1A1A]/0"
        style={{
          x: ringX,
          y: ringY,
          width: 28,
          height: 28,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.75 : 1,
          backgroundColor: isHovered ? 'rgba(26, 26, 26, 0.08)' : 'rgba(26, 26, 26, 0)',
          borderColor: isHovered ? 'rgba(26, 26, 26, 0.75)' : 'rgba(26, 26, 26, 0.35)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  );
}
