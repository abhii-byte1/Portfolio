import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
          <h2 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tighter mb-8 flex items-end">
            <span 
              className="text-transparent"
              style={{ WebkitTextStroke: '2px #00df8f' }}
            >
              MEENA
            </span>
          </h2>

          <p className="text-gray-400 font-sans text-lg max-w-md leading-relaxed mb-10">
            I craft highly scalable, robust, and visually stunning web applications utilizing the MERN stack and clean code practices.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={() => scrollToSection('work')}
              className="group flex items-center gap-4 bg-gradient-to-r from-[#00df8f] to-[#00b373] px-8 py-4 rounded-full text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300"
            >
              View My Work
              <div className="bg-black/10 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 bg-[#14181f] border border-white/10 px-8 py-4 rounded-full text-white font-bold uppercase tracking-widest hover:border-white/30 transition-colors"
            >
              Contact Me
              <span className="w-2 h-2 rounded-full bg-[#00df8f]" />
            </button>
          </div>
        </motion.div>

        {/* Right Column - Interactive ID Card */}
        <div className="flex items-center justify-center lg:justify-end h-[500px] lg:h-full relative pointer-events-none lg:pointer-events-auto">
          {/* Lanyard Strip */}
          <div className="absolute top-[-100px] lg:top-[-200px] w-8 h-[300px] lg:h-[400px] bg-gradient-to-b from-[#00df8f]/10 to-[#00df8f]/80 z-0 skew-x-[-5deg] rounded-b-xl shadow-[0_0_20px_rgba(0,223,143,0.3)] border-b-2 border-l border-r border-[#00df8f]" />

          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [-1, 1, -1]
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10 w-72 sm:w-80 h-auto aspect-[2.5/3.5] bg-[#14181f] rounded-3xl p-3 shadow-2xl border border-white/10 cursor-grab backdrop-blur-sm group pointer-events-auto mt-20 lg:mt-0"
          >
            {/* Inner Border */}
            <div className="w-full h-full rounded-2xl border border-white/5 relative overflow-hidden flex flex-col">
              {/* Top Slot */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#0d1116] rounded-full shadow-inner z-20 border border-white/10" />

              {/* Portrait */}
              <img 
                src="/abhishek.jpg" 
                alt="Abhishek Meena" 
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                draggable={false}
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#14181f] via-[#14181f]/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-display font-bold text-3xl text-white tracking-tighter">
                  Abhishek.
                </h3>
                <p className="text-[#00df8f] font-mono text-xs tracking-widest uppercase mt-1">
                  Full Stack Developer
                </p>
                {/* Barcode Mock */}
                <div className="mt-4 flex gap-1 h-6 opacity-30">
                  <div className="w-1 bg-white h-full" />
                  <div className="w-2 bg-white h-full" />
                  <div className="w-1 bg-white h-full" />
                  <div className="w-3 bg-white h-full" />
                  <div className="w-1 bg-white h-full" />
                  <div className="w-2 bg-white h-full" />
                  <div className="w-1 bg-white h-full" />
                  <div className="w-4 bg-white h-full" />
                  <div className="w-1 bg-white h-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
