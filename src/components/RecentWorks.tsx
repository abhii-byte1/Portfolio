import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'ShieldHer',
    category: 'Full Stack Application',
    description: 'A comprehensive women safety SOS web application featuring one-tap emergency activation, live GPS geolocation streaming, automated WhatsApp alert dispatch, and a loud alarm siren served by a robust Node.js backend with a 4-table SQLite schema safe-cancel state engine.',
    tags: ['HTML5', 'Vanilla JS', 'Node.js', 'Express.js', 'SQLite'],
    image: '/shieldher.png',
    link: '#'
  },
  {
    id: 2,
    title: 'Smart Waste Management',
    category: 'MERN Stack Platform',
    description: 'A full-stack civic complaint platform with role-based JWT authentication, dedicated admin/user dashboards, and real-time complaint status tracking. Built on a highly scalable MVC backend architecture seeding default accounts for rapid demo deployment.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    image: '/wastemanagement.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'E-Commerce Dashboard',
    category: 'Frontend Engineering',
    description: 'A highly responsive analytics dashboard built for tracking real-time sales metrics, user acquisition, and inventory management. Implemented complex chart visualizations and a customized data table with sorting and filtering capabilities.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    image: '/dashboard.jpg',
    link: '#'
  }
];

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleCardClick = (index: number) => {
    if (index === activeIdx) {
      // Cycle to the next card if front card is clicked
      setActiveIdx((prev) => (prev + 1) % projects.length);
    } else {
      // Pull clicked card to front
      setActiveIdx(index);
    }
  };

  return (
    <section id="work" className="py-32 bg-[#0d1116] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-[#00df8f] rounded-full" />
              <h3 className="font-mono text-sm tracking-widest text-[#00df8f] uppercase">Selected Projects</h3>
            </div>
            <h2 className="font-display font-bold text-5xl sm:text-6xl tracking-tighter text-white leading-[0.9]">
              RECENT WORKS.
            </h2>
          </div>
          <button className="text-gray-300 font-mono text-sm uppercase tracking-widest hover:text-[#00df8f] transition-colors border-b border-white/20 hover:border-[#00df8f] pb-1 w-max">
            View All Projects
          </button>
        </motion.div>

        {/* 3D Stack & Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Side - 3D Card Stack */}
          <div className="lg:col-span-7 flex flex-col h-[340px] sm:h-[450px] md:h-[480px]">
            <div className="relative flex-1 w-full flex justify-center perspective-[1200px]">
              {projects.map((project, index) => {
                // Calculate position relative to active card
                let diff = index - activeIdx;
                if (diff < 0) diff += projects.length; // Wrap around for infinite stack feel
                
                const isFront = diff === 0;

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => handleCardClick(index)}
                    animate={{
                      y: diff * 35,
                      scale: 1 - diff * 0.05,
                      rotateX: diff * 2,
                      zIndex: projects.length - diff,
                      opacity: diff > 2 ? 0 : 1 // Hide cards too far back
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    className={`absolute top-0 w-full max-w-xl aspect-video bg-[#14181f] rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 ${isFront ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''}`}
                    style={{ transformOrigin: 'top center' }}
                  >
                    {/* Overlay to dim back cards */}
                    <motion.div 
                      animate={{ opacity: isFront ? 0 : 0.6 }}
                      className="absolute inset-0 bg-[#0d1116] z-10 pointer-events-none transition-opacity duration-300"
                    />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[0.2]"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8 lg:mt-12">
              <button
                onClick={() => setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length)}
                className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white font-mono text-sm uppercase tracking-widest hover:border-[#00df8f] hover:text-[#00df8f] transition-all duration-300"
              >
                <div className="bg-white/10 rounded-full p-1 group-hover:bg-[#00df8f]/20 transition-colors">
                  <ArrowLeft size={16} />
                </div>
                Back
              </button>
              
              <button
                onClick={() => setActiveIdx((prev) => (prev + 1) % projects.length)}
                className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white font-mono text-sm uppercase tracking-widest hover:border-[#00df8f] hover:text-[#00df8f] transition-all duration-300"
              >
                Next
                <div className="bg-white/10 rounded-full p-1 group-hover:bg-[#00df8f]/20 transition-colors">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Description Panel */}
          <div className="lg:col-span-5 flex items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
              >
                <div className="font-mono text-sm tracking-widest text-gray-500 uppercase mb-4">
                  {projects[activeIdx].category}
                </div>
                
                <h3 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tighter mb-6 leading-[1]">
                  {projects[activeIdx].title}
                </h3>
                
                <p className="text-gray-400 font-sans text-lg leading-relaxed mb-8">
                  {projects[activeIdx].description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {projects[activeIdx].tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-4 py-2 rounded-full bg-[#14181f] border border-white/5 text-gray-300 text-xs font-mono uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={projects[activeIdx].link}
                  className="group inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest hover:text-[#00df8f] transition-colors"
                >
                  Explore Project
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#00df8f] group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
