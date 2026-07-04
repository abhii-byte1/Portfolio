import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = ({ size = 24, className = "" }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = ({ size = 24, className = "" }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['ABOUT', 'EXPERIENCE', 'WORK', 'CONTACT'];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 w-full h-20 md:h-24 z-[60] bg-[#0f1115]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 md:px-12"
      >
        {/* Logo */}
        <button onClick={scrollToTop} className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tighter text-white z-[70]">
          ABHISHEK MEENA
        </button>

        <div className="flex items-center gap-6 md:gap-16">
          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="text-sm font-semibold text-gray-300 uppercase tracking-widest hover:text-[#00df8f] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button (Desktop) */}
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden md:flex w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center hover:border-[#00df8f] transition-colors group"
          >
            <div className="w-2 h-2 rounded-full bg-white group-hover:bg-[#00df8f] transition-colors" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 z-[70]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[55] bg-[#0d1116] flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                    className="text-4xl font-display font-bold text-white uppercase tracking-tighter hover:text-[#00df8f] transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
