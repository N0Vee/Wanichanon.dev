"use client";

import { useState, useEffect } from 'react';

const TypeWriter = ({ className = "text-2xl md:text-4xl font-bold text-white", speed = 100, pause = 1200, deleteSpeed = 50 }) => {
  const text = "Full-Stack Developer.";
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval;
    if (isTyping) {
      if (displayText.length < text.length) {
        interval = setInterval(() => {
          setDisplayText(prev => prev + text.charAt(prev.length));
        }, speed);
      } else {
        setIsComplete(true);
        interval = setTimeout(() => {
          setIsTyping(false);
        }, pause);
      }
    } else {
      if (displayText.length > 0) {
        interval = setInterval(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsComplete(false);
        interval = setTimeout(() => {
          setIsTyping(true);
        }, 400);
      }
    }
    return () => clearInterval(interval) || clearTimeout(interval);
  }, [displayText, isTyping, speed, pause, deleteSpeed, text.length]);

  return (
    <h1 className={className}>
      {displayText.split('').map((char, i) => (
        <span key={i} className="text-white">
          {char}
        </span>
      ))}
      <span className={`animate-pulse text-white ${isComplete ? 'opacity-100' : 'opacity-100'}`}>|</span>
    </h1>
  );
};

export default TypeWriter;
