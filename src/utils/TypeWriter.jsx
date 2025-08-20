"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';

const TypeWriter = ({ 
  className = "text-2xl md:text-4xl font-bold text-white", 
  speed = 100, 
  pause = 1200, 
  deleteSpeed = 50 
}) => {
  const text = useMemo(() => "Full-Stack Developer.", []);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const resetCycle = useCallback(() => {
    setDisplayText('');
    setIsTyping(true);
  }, []);

  useEffect(() => {
    let timeoutId;

    const typeText = () => {
      if (displayText.length < text.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => text.substring(0, prev.length + 1));
        }, speed);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, pause);
      }
    };

    const deleteText = () => {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        timeoutId = setTimeout(resetCycle, 400);
      }
    };

    if (isTyping) {
      typeText();
    } else {
      deleteText();
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, speed, pause, deleteSpeed, text, resetCycle]);

  return (
    <h1 className={className}>
      {displayText}
      <span className="animate-pulse text-white">|</span>
    </h1>
  );
};

export default TypeWriter;
