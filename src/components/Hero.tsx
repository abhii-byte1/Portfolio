import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { useRef } from 'react';

const GithubIcon = ({ size = 24, strokeWidth = 2, className = "" }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, strokeWidth = 2, className = "" }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerRef = useRef(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 lg:pt-0 overflow-hidden bg-[#0d1116]"
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
          className="flex flex-col items-center lg:items-start pt-10 lg:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 flex flex-col items-center lg:items-start"
          >
            <h1 className="font-display font-bold text-[clamp(2.5rem,8vw,6rem)] text-white leading-[0.9] tracking-tighter mb-4 text-center lg:text-left">
              HELLO, I'M <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #00df8f' }}>ABHISHEK MEENA</span>
            </h1>
            <h2 className="text-[#00df8f] font-mono text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase font-semibold text-center lg:text-left">
              Full Stack Developer <span className="text-white">|</span> React <span className="text-white">•</span> Node.js <span className="text-white">•</span> APIs
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-gray-400 font-sans text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10 text-center lg:text-left self-center lg:self-start px-4 sm:px-0"
          >
            I build modern, scalable web applications and transform ideas into <span className="text-white font-semibold">production-ready</span> digital experiences using React, Node.js, and <span className="text-[#00df8f] font-semibold">AI-driven solutions</span>.
          </motion.p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 w-full px-6 sm:px-0">
            <a 
              href="#work"
              className="group flex items-center justify-center gap-3 bg-[#00df8f] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#00b373] transition-all duration-300 w-full sm:w-auto h-14"
            >
              View Projects
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} />
              </div>
            </a>
            
            <a 
              href="/resume.pdf"
              download="Abhishek_Meena_Resume.pdf"
              className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:border-[#00df8f] hover:text-[#00df8f] transition-all duration-300 w-full sm:w-auto h-14"
            >
              <Download size={16} />
              Resume
            </a>

            <a 
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:border-[#00df8f] hover:text-[#00df8f] transition-all duration-300 w-full sm:w-auto h-14"
            >
              <Mail size={16} />
              Contact
            </a>
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
              <GithubIcon size={20} strokeWidth={2} />
            </a>
            
            <a 
              href="https://linkedin.com/in/abhishek-meena-0647663a0"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-[#00df8f] hover:border-[#00df8f] hover:bg-[#00df8f]/10 hover:shadow-[0_0_15px_rgba(0,223,143,0.3)] hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} strokeWidth={2} />
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 flex justify-center items-center relative mb-12 lg:mb-0"
        >
          {/* Animated Glowing Ring */}
          <div className="absolute w-[260px] h-[260px] md:w-[420px] md:h-[420px] rounded-full border border-[#00df8f]/30 border-dashed animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-[280px] h-[280px] md:w-[460px] md:h-[460px] rounded-full border border-white/10 animate-[spin_30s_linear_infinite_reverse]" />
          
          {/* Neon Glow Behind Image */}
          <div className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-full bg-[#00df8f]/20 blur-[60px] md:blur-[100px]" />

          {/* Image Container */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[220px] h-[220px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-[#14181f] shadow-[0_0_50px_rgba(0,223,143,0.3)] z-10 group"
          >
            <img 
              src="/abhishek.jpg" 
              alt="Abhishek Meena" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%2314181f'/%3E%3Ccircle cx='200' cy='200' r='120' fill='%2300df8f' opacity='0.2'/%3E%3C/svg%3E";
              }}
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 ease-out"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
