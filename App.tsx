import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Process from './components/Process';
import Contact from './components/Contact';
import DecryptedText from './components/DecryptedText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scroll during loading
    document.body.style.overflow = 'hidden';

    // Simulate loading progress
    const duration = 2200; // 2.2 seconds total load time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        clearInterval(timer);
        setProgress(100);
        
        // Start exit animation
        const tl = gsap.timeline();

        // 1. Fade out percentage text
        tl.to(progressTextRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in"
        })
        // 2. Slide the curtain up
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          onComplete: () => {
             document.body.style.overflow = ''; // Re-enable scroll
             setStartAnimation(true);
          }
        });

      } else {
        setProgress(Math.min(Math.round(currentProgress), 100));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-accent selection:text-white relative">
      <div className="bg-noise" />
      <Cursor />
      
      {/* Loading Screen Overlay */}
      <div 
        ref={loaderRef} 
        className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center pointer-events-none"
      >
         <div ref={progressTextRef} className="text-center relative w-[300px] md:w-[500px]">
            <div className="font-display font-bold text-[15vw] md:text-[12vw] leading-none text-brand-white tabular-nums tracking-tighter">
                {progress}%
            </div>
            
            <div className="flex justify-between items-end mt-4 px-2">
                <div className="text-xs md:text-sm font-mono text-brand-accent animate-pulse">
                   <DecryptedText text="INITIALIZING SYSTEM..." speed={30} />
                </div>
                <div className="text-xs md:text-sm font-mono text-brand-gray/50">
                    v1.0.0
                </div>
            </div>

            {/* Progress Bar Line */}
            <div className="w-full h-[2px] bg-white/10 mt-4 overflow-hidden relative rounded-full">
                <div 
                  className="h-full bg-brand-accent absolute top-0 left-0 transition-all duration-75 ease-linear shadow-[0_0_15px_#3b82f6]"
                  style={{ width: `${progress}%` }}
                />
            </div>
         </div>
      </div>

      <Navbar startAnimation={startAnimation} />
      
      <main className="relative z-0">
        <Hero startAnimation={startAnimation} />
        <About />
        <Skills />
        <Work />
        <Process />
        <Contact />
      </main>
    </div>
  );
};

export default App;