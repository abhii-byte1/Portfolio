import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0d1116] pt-24"
    >
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Massive Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="font-display font-bold text-[18vw] leading-none tracking-tighter text-white opacity-[0.02] select-none">
          DEVELOPMENT
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center h-full pb-16">
        
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col items-start pt-10 lg:pt-0"
        >
          <div className="flex items-center gap-3 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#00df8f] animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-300">Full Stack Developer</span>
          </div>

          <h2 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tighter text-white mb-2">
            ABHISHEK
          </h2>
          <h2 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tighter mb-4 flex items-end">
            <span 
              className="text-transparent"
              style={{ WebkitTextStroke: '2px #00df8f' }}
            >
              MEENA
            </span>
          </h2>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 font-sans text-xl sm:text-2xl font-medium mb-8 tracking-wide"
          >
            Full Stack Developer | <span className="text-[#00df8f]">React</span> • <span className="text-[#00df8f]">Node.js</span> • <span className="text-[#00df8f]">APIs</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-gray-400 font-sans text-xl max-w-2xl leading-relaxed mb-10 text-center lg:text-left self-center lg:self-start"
          >
            I build modern, scalable web applications and transform ideas into <span className="text-white font-semibold">production-ready</span> digital experiences using React, Node.js, and <span className="text-[#00df8f] font-semibold">AI-driven solutions</span>.
          </motion.p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
            {/* Primary Button */}
            <button 
              onClick={() => scrollToSection('work')}
              className="group flex items-center justify-center gap-4 bg-gradient-to-r from-[#00df8f] to-[#00b373] px-8 py-4 rounded-full text-black font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(0,223,143,0.4)] transition-all duration-300 w-full sm:w-auto"
            >
              View Projects
              <div className="bg-black/10 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </button>
            
            {/* Secondary Button: Resume */}
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#14181f] border border-white/10 px-8 py-4 rounded-full text-white font-bold uppercase tracking-widest hover:bg-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              <Download size={18} className="text-[#00df8f]" />
              Download Resume
            </a>

            {/* Secondary Button: Contact */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="group flex items-center justify-center gap-3 bg-[#14181f] border border-white/10 px-8 py-4 rounded-full text-white font-bold uppercase tracking-widest hover:bg-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              <Mail size={18} className="text-[#00df8f]" />
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-6 mt-12 w-full justify-center lg:justify-start"
          >
            <a 
              href="https://github.com/abhii-byte1"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-[#00df8f] hover:border-[#00df8f] hover:bg-[#00df8f]/10 hover:shadow-[0_0_15px_rgba(0,223,143,0.3)] hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} strokeWidth={2} />
            </a>
            
            <a 
              href="https://linkedin.com/in/abhishek-meena-0647663a0"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-[#00df8f] hover:border-[#00df8f] hover:bg-[#00df8f]/10 hover:shadow-[0_0_15px_rgba(0,223,143,0.3)] hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={2} />
            </a>

            <a 
              href="mailto:mabhi7411@gmail.com"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-[#00df8f] hover:border-[#00df8f] hover:bg-[#00df8f]/10 hover:shadow-[0_0_15px_rgba(0,223,143,0.3)] hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} strokeWidth={2} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <div className="flex items-center justify-center lg:justify-end h-[400px] lg:h-full relative pointer-events-auto mt-20 lg:mt-0">
          
          {/* Soft neon glow behind the image */}
          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-[#00df8f]/20 rounded-full blur-[80px]" />

          {/* Floating Container */}
          <motion.div
            animate={{ 
              y: [0, -15, 0]
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10"
          >
            {/* Animated glowing rings */}
            <div className="absolute inset-[-15px] sm:inset-[-20px] rounded-full border-2 border-[#00df8f]/30 border-dashed animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-[-25px] sm:inset-[-35px] rounded-full border border-[#00df8f]/10 animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Circular Frame */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#14181f] shadow-[0_0_40px_rgba(0,223,143,0.3)] bg-[#14181f]"
            >
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />
              <img 
                src="/abhishek.jpg" 
                alt="Abhishek Meena" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
