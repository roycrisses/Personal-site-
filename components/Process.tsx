import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PROCESS } from '../constants';
import { ProcessStep } from '../types';
import DecryptedText from './DecryptedText';

const ProcessCard: React.FC<{ step: ProcessStep; index: number }> = ({ step, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`process-step flex flex-col md:flex-row gap-10 items-stretch md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="group w-full md:w-[45%] relative rounded-xl overflow-hidden hover-trigger">
        {/* Glow Border */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4), transparent 40%)`
          }}
        />
        
        {/* Card Content */}
        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl z-10 transition-colors duration-500 group-hover:border-white/20">
            {/* Spotlight Background */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`
              }}
            />

            {/* Giant Number Watermark */}
            <span className="absolute -right-4 -bottom-8 text-[8rem] font-display font-bold text-white/[0.03] pointer-events-none group-hover:text-white/[0.08] transition-colors duration-500 select-none">
                0{step.id}
            </span>

            <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                Step 0{step.id}
            </span>
            
            <h3 className="text-3xl font-display font-medium text-white mb-4 group-hover:text-brand-accent transition-colors">
                {step.title}
            </h3>
            
            <div className="text-brand-gray text-base leading-relaxed h-[3em]">
                <DecryptedText text={step.description} animateOnView={true} speed={30} />
            </div>
        </div>
      </div>
      
      <div className="absolute left-[11px] md:left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-black border-2 border-brand-accent z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,1)]" />
      
      <div className="w-full md:w-[45%] hidden md:block" /> 
    </div>
  );
};

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Line growth
      if (lineRef.current) {
        gsap.to(lineRef.current, {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 0.5
          }
        });
      }

      // Steps reveal
      gsap.utils.toArray('.process-step').forEach((step: any) => {
        gsap.from(step, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.8,
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-32 px-6 md:px-20 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-24 text-center">
            The <span className="text-brand-accent">Process</span>
        </h2>

        <div className="absolute left-[19px] md:left-1/2 top-32 bottom-0 w-[1px] bg-white/5 md:-translate-x-1/2">
            <div ref={lineRef} className="w-full bg-gradient-to-b from-brand-accent via-purple-500 to-brand-accent h-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </div>

        <div className="space-y-32">
            {PROCESS.map((step, index) => (
                <ProcessCard key={step.id} step={step} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;