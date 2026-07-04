import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-0 left-0 w-full h-24 z-50 bg-[#0f1115]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 md:px-12"
    >
      {/* Logo */}
      <button onClick={scrollToTop} className="text-2xl sm:text-3xl font-display font-bold tracking-tighter text-white">
        ABHISHEK MEENA
      </button>

      <div className="flex items-center gap-8 md:gap-16">
        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {['ABOUT', 'WORK', 'CONTACT'].map((item) => (
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

        {/* Action Button */}
        <button 
          onClick={(e) => scrollToSection(e as any, 'contact')}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00df8f] transition-colors group"
        >
          <div className="w-2 h-2 rounded-full bg-white group-hover:bg-[#00df8f] transition-colors" />
        </button>
      </div>
    </motion.nav>
  );
}
