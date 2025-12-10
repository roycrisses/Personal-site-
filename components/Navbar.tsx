import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface NavbarProps {
  startAnimation?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ startAnimation = true }) => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !startAnimation) return;

    // Reset initial state
    gsap.set(nav, { y: -100, opacity: 0 });

    gsap.to(nav, { 
      y: 0, 
      opacity: 1, 
      duration: 1.2, 
      delay: 0.2, // Slight delay after curtain lifts
      ease: "power3.out" 
    });
  }, [startAnimation]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white opacity-0">
      <div className="text-2xl font-display font-bold tracking-tighter hover-trigger cursor-pointer" onClick={() => scrollToSection('hero')}>
        KRISH.
      </div>
      <div className="hidden md:flex gap-8">
        {['About', 'Work', 'Process', 'Contact'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="font-medium text-sm tracking-wide hover:text-brand-accent transition-colors hover-trigger relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all group-hover:w-full"></span>
          </button>
        ))}
      </div>
      <button 
        onClick={() => scrollToSection('contact')}
        className="hidden md:block border border-white/20 px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all hover-trigger"
      >
        Let's Talk
      </button>
    </nav>
  );
};

export default Navbar;