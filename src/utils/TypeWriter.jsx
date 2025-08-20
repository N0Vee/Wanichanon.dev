"use client";

import { useState, useEffect } from 'react';

const TypeWriter = ({ className = "text-2xl md:text-4xl font-bold text-white" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const text = "Full-Stack Developer.";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <h1 className={className}>
      {displayText.split('').map((char, i) => (
        <span 
          key={i} 
          className={`${
            char === '-' 
              ? 'text-purple-400' 
              : i % 3 === 0 
                ? 'text-white' 
                : i % 3 === 1 
                  ? 'text-purple-300' 
                  : 'text-pink-300'
          }`}
        >
          {char}
        </span>
      ))}
      <span className={`animate-pulse ${isComplete ? 'opacity-100' : 'opacity-100'}`}>|</span>
    </h1>
  );
};

export default TypeWriter;
