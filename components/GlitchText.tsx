import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "span" }) => {
  return (
    <Component className={`glitch-wrapper relative inline-block group ${className}`}>
      <span 
        className="relative z-10 block group-hover:opacity-0 transition-opacity duration-100"
      >
        {text}
      </span>
      <span 
        className="glitch-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100" 
        data-text={text}
      >
        {text}
      </span>
    </Component>
  );
};

export default GlitchText;