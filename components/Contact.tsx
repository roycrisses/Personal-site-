import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
        gsap.from(".contact-reveal", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
            }
        });
    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 md:px-20 bg-brand-black min-h-screen flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="contact-reveal text-5xl md:text-8xl font-display font-bold text-white mb-10 leading-[0.9]">
          Let's Work <br />
          <span className="text-brand-accent">Together.</span>
        </h2>
        
        <form className="contact-reveal space-y-8 mt-20">
            <div className="group relative">
                <input 
                    type="text" 
                    placeholder="What's your name?" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/20 hover-trigger" 
                />
            </div>
            <div className="group relative">
                <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/20 hover-trigger" 
                />
            </div>
            <div className="group relative">
                <textarea 
                    placeholder="Tell me about your project..." 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/20 resize-none hover-trigger" 
                />
            </div>
            
            <button type="submit" className="mt-10 px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-brand-accent hover:text-white transition-all duration-300 hover-trigger">
                Send Message
            </button>
        </form>
      </div>

      <footer className="contact-reveal mt-32 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-brand-gray">
        <p>&copy; 2024 KRISH. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
            {['Twitter', 'LinkedIn', 'Instagram', 'Github'].map(social => (
                <a key={social} href="#" className="hover:text-white transition-colors hover-trigger">{social}</a>
            ))}
        </div>
      </footer>
    </section>
  );
};

export default Contact;