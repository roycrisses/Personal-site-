import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import GlitchText from './GlitchText';

interface HeroProps {
  startAnimation?: boolean;
}

const Hero: React.FC<HeroProps> = ({ startAnimation = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !startAnimation) return;
    
    const ctx = gsap.context(() => {
      // Ensure initial states
      gsap.set(".hero-char", { y: 100, opacity: 0 });
      if (subTextRef.current) gsap.set(subTextRef.current, { y: 20, opacity: 0 });

      // Reveal Text
      gsap.to(".hero-char", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        delay: 0.2 // Wait for curtain to fully lift
      });

      if (subTextRef.current) {
        gsap.to(subTextRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.8,
          ease: "power2.out"
        });
      }

      // Parallax effect on scroll
      if (textRef.current) {
        gsap.to(textRef.current, {
          y: 200,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }, containerRef.current);

    return () => ctx.revert();
  }, [startAnimation]);

  return (
    <section 
      id="hero" 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-brand-black"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-brand-accent/10 rounded-full blur-[100px] animate-pulse" />
      
      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        <h1 
          ref={textRef}
          className="font-display font-bold text-[15vw] leading-[0.8] tracking-tighter text-white mix-blend-difference select-none"
        >
          <div className="overflow-hidden inline-block">
             <div className="hero-char inline-block"><GlitchText text="K" /></div>
             <div className="hero-char inline-block"><GlitchText text="R" /></div>
             <div className="hero-char inline-block"><GlitchText text="I" /></div>
             <div className="hero-char inline-block"><GlitchText text="S" /></div>
             <div className="hero-char inline-block"><GlitchText text="H" /></div>
          </div>
        </h1>
        
        <div className="mt-8 overflow-hidden">
          <p ref={subTextRef} className="text-xl md:text-2xl text-brand-gray font-light tracking-wide max-w-lg mx-auto opacity-0 translate-y-4">
            Designer <span className="text-brand-accent">•</span> Coder <span className="text-brand-accent">•</span> Creator
            <br />
            <span className="text-sm md:text-base mt-2 block opacity-80">Crafting modern designs & interactive experiences.</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50" />
      </div>
    </section>
  );
};

export default Hero;