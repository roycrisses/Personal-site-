import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Layout, MousePointer2, Target, Box, Code2, Sparkles } from 'lucide-react';
import { SKILLS } from '../constants';

const iconMap: any = {
  Layout, MousePointer2, Target, Box, Code2, Sparkles
};

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      });
    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-20">Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div 
                key={skill.id} 
                className="skill-card group p-8 border border-white/10 rounded-sm hover:bg-white/5 transition-colors duration-500 hover-trigger"
              >
                <div className="mb-6 text-brand-accent group-hover:rotate-12 transition-transform duration-500 origin-left">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-medium text-white mb-3">{skill.name}</h3>
                <p className="text-brand-gray group-hover:text-white/80 transition-colors">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;