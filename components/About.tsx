import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROFILE_PIC } from '../constants';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Image Reveal Animation
      if (imageContainerRef.current && imageRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
          }
        });

        // Clip path reveal for container
        tl.fromTo(imageContainerRef.current, 
          { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5, ease: "power4.inOut" }
        );

        // Scale down image inside
        tl.fromTo(imageRef.current,
          { scale: 1.5, filter: "grayscale(100%) brightness(0.8)" },
          { scale: 1, filter: "grayscale(0%) brightness(1)", duration: 1.5, ease: "power4.out" },
          "<"
        );
      }

      // Text stagger reveal
      const lines = gsap.utils.toArray('.about-line');
      gsap.from(lines, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        }
      });

      // Floating watermark parallax
      gsap.to('.watermark', {
        x: -100,
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative py-32 px-6 md:px-20 bg-brand-black overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="watermark absolute top-10 right-0 text-[15vw] font-display font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none z-0">
        WHO I AM
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Column: Profile Picture */}
        <div 
          ref={imageContainerRef}
          className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:h-[80vh] overflow-hidden rounded-sm group hover-trigger"
        >
          {/* Decorative Frame */}
          <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none group-hover:border-brand-accent/50 transition-colors duration-500" />
          
          {/* Glitch Overlay on Hover */}
          <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay z-10" />
          
          <img 
            ref={imageRef}
            src={PROFILE_PIC} 
            alt="Krish Portrait" 
            className="w-full h-full object-cover"
          />

          {/* Tag */}
          <div className="absolute bottom-6 left-6 z-20 overflow-hidden">
             <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <span className="text-xs font-mono text-brand-black bg-brand-accent px-2 py-1 font-bold uppercase tracking-wider">
                    Creative Developer
                  </span>
             </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="about-line text-sm font-bold tracking-widest text-brand-accent mb-6 uppercase flex items-center gap-4">
             <span className="w-12 h-[1px] bg-brand-accent"></span>
             About Me
          </h2>
          
          <h3 className="about-line text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.1] mb-10">
            I craft digital experiences that <span className="text-white/40 italic">breathe</span> and <span className="text-brand-accent">inspire.</span>
          </h3>

          <div className="space-y-8">
            <p className="about-line text-brand-gray text-lg leading-relaxed max-w-xl">
              With over 3 years of experience in the digital space, I bridge the gap between design and engineering. I believe that good design is not just about how it looks, but how it works and how it feels.
            </p>
            <p className="about-line text-brand-gray text-lg leading-relaxed max-w-xl">
              My approach is rooted in minimalism and functionality. Whether it's a website, an app, or a brand identity, I aim for clarity, purpose, and emotion.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10 about-line">
             <div className="group cursor-default">
               <span className="block text-4xl font-display font-bold text-white group-hover:text-brand-accent transition-colors duration-300">3+</span>
               <span className="text-xs text-brand-gray uppercase tracking-widest mt-2 block">Years Exp</span>
             </div>
             <div className="group cursor-default">
               <span className="block text-4xl font-display font-bold text-white group-hover:text-brand-accent transition-colors duration-300">20+</span>
               <span className="text-xs text-brand-gray uppercase tracking-widest mt-2 block">Projects</span>
             </div>
             <div className="group cursor-default">
               <span className="block text-4xl font-display font-bold text-white group-hover:text-brand-accent transition-colors duration-300">10+</span>
               <span className="text-xs text-brand-gray uppercase tracking-widest mt-2 block">Awards</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;