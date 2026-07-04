import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-32 pb-10 border-t border-white/10 bg-[#0d1116] overflow-hidden">
      
      {/* Massive Background Graphic */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="font-display font-bold text-[25vw] leading-[0.7] tracking-tighter text-white opacity-5">
          CONTACT
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-32">
          
          {/* Left - CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[#00df8f] rounded-full" />
              <h3 className="font-mono text-sm tracking-widest text-[#00df8f] uppercase">Get In Touch</h3>
            </div>
            
            <h2 className="font-display font-bold text-5xl sm:text-7xl tracking-tighter text-white mb-6 leading-[0.9]">
              HOW CAN I <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #ffffff' }}>
                HELP?
              </span>
            </h2>
            
            <p className="text-gray-400 font-sans text-lg max-w-md leading-relaxed mb-10">
              Whether you have a full-stack project in mind, need a scalable MERN backend, or want to discuss a potential opportunity, I'm always open to talking.
            </p>
            
            <a 
              href="mailto:mabhi7411@gmail.com"
              className="bg-white text-[#0d1116] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#00df8f] transition-colors duration-300"
            >
              mabhi7411@gmail.com
            </a>
          </motion.div>

          {/* Right - Links Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-16 lg:justify-end"
          >
            {/* Menu */}
            <div className="flex flex-col gap-6">
              <h4 className="font-mono text-xs tracking-widest text-gray-500 uppercase mb-2">Menu</h4>
              <button onClick={scrollToTop} className="text-left text-white font-display text-2xl uppercase tracking-tighter hover:text-[#00df8f] transition-colors">Home</button>
              <a href="#about" className="text-white font-display text-2xl uppercase tracking-tighter hover:text-[#00df8f] transition-colors">About</a>
              <a href="#work" className="text-white font-display text-2xl uppercase tracking-tighter hover:text-[#00df8f] transition-colors">Work</a>
            </div>
            
            {/* Socials */}
            <div className="flex flex-col gap-6">
              <h4 className="font-mono text-xs tracking-widest text-gray-500 uppercase mb-2">Socials</h4>
              <a href="https://github.com/abhii-byte1" target="_blank" rel="noreferrer" className="text-white font-display text-2xl uppercase tracking-tighter hover:text-[#00df8f] transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/abhishek-meena-0647663a0" target="_blank" rel="noreferrer" className="text-white font-display text-2xl uppercase tracking-tighter hover:text-[#00df8f] transition-colors">LinkedIn</a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10 text-gray-500 font-mono text-xs tracking-widest uppercase">
          <p>© 2026 Abhishek Meena. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
