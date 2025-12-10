import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PROJECTS } from '../constants';
import { Category } from '../types';

const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter || (filter === 'Development' && p.category === 'Code'));

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Animate items when filter changes
    const ctx = gsap.context(() => {
        gsap.fromTo(".project-card", 
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
        );
    }, containerRef.current);
    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="work" ref={containerRef} className="py-32 px-6 md:px-20 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Selected Work</h2>
            
            <div className="flex gap-6 mt-8 md:mt-0">
                {['All', 'Design', 'Development', '3D'].map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => setFilter(cat as Category)}
                        className={`text-sm uppercase tracking-widest hover-trigger ${filter === cat ? 'text-brand-accent' : 'text-brand-gray hover:text-white'} transition-colors`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
            {filteredProjects.map((project, index) => (
                <div key={project.id} className={`project-card group ${index % 2 !== 0 ? 'md:mt-20' : ''}`}>
                    <div className="relative overflow-hidden aspect-[4/3] mb-6 cursor-pointer hover-trigger">
                        <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-6 left-6 z-20 overflow-hidden">
                           <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white text-lg font-bold bg-black/50 px-3 py-1 backdrop-blur-sm">View Case</span>
                           </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <div>
                            <h3 className="text-2xl font-display font-medium text-white mb-1 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                            <span className="text-brand-gray text-sm">{project.category}</span>
                        </div>
                        <span className="text-white/30 font-display">{project.year}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;