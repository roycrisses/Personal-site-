import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
  animateOnView?: boolean;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  speed = 50, 
  className = "",
  animateOnView = false
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<any>(null);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const scramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    if (animateOnView && inView) {
      scramble();
    }
  }, [inView]);

  return (
    <span 
      ref={ref}
      className={className}
      onMouseEnter={() => {
        setIsHovered(true);
        scramble();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  );
};

export default DecryptedText;