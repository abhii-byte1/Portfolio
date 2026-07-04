import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const stages = [
  {
    title: 'REQUIREMENT ANALYSIS',
    content: 'Collaborating closely to understand business goals, user needs, and technical constraints to formulate a robust project strategy and feature roadmap.'
  },
  {
    title: 'SYSTEM ARCHITECTURE',
    content: 'Designing scalable MVC backend structures, designing relational databases (MongoDB/SQLite), and defining secure API specifications and JWT authentication flows.'
  },
  {
    title: 'FRONTEND PROTOTYPING',
    content: 'Crafting responsive, high-fidelity UI prototypes and establishing a robust design system using modern tools like Tailwind CSS and Framer Motion.'
  },
  {
    title: 'FULL STACK DEVELOPMENT',
    content: 'Executing seamless integration of React/Vite frontends with Node.js/Express backends, ensuring clean code practices and performant modular architecture.'
  },
  {
    title: 'TESTING & QA',
    content: 'Rigorous debugging, API endpoint validation, and cross-device responsive testing to eliminate UI defects and ensure production-grade stability.'
  },
  {
    title: 'DEPLOYMENT',
    content: 'Finalizing production builds, seeding default configurations, and executing seamless deployment to cloud hosting environments with version control best practices.'
  }
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-32 bg-[#0d1116]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#00df8f] rounded-full" />
            <h3 className="font-mono text-sm tracking-widest text-[#00df8f] uppercase">Process</h3>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white leading-[1.1]">
            STAGES OF APPLICATION <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #ffffff' }}>
              DEVELOPMENT
            </span>
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {stages.map((stage, index) => {
            const isOpen = openIdx === index;
            
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-8 sm:py-10 group text-left"
                >
                  <div className="flex items-center gap-6 sm:gap-12">
                    <span className="font-mono text-lg text-gray-500">
                      0{index + 1}
                    </span>
                    <h3 className={`font-display font-bold text-2xl sm:text-4xl tracking-tighter uppercase transition-colors duration-300 ${isOpen ? 'text-[#00df8f]' : 'text-white group-hover:text-gray-300'}`}>
                      {stage.title}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-full border transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-[#00df8f] border-[#00df8f] text-[#0d1116] rotate-180' : 'border-white/20 text-white group-hover:border-white'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <p className="pb-10 pl-[52px] sm:pl-[76px] max-w-2xl text-gray-400 font-sans text-lg leading-relaxed">
                        {stage.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
