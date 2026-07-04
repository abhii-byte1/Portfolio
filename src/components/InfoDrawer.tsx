import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

interface InfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoDrawer({ isOpen, onClose }: InfoDrawerProps) {
  const [activeView, setActiveView] = useState<'menu' | 'contact'>('menu');

  const menuItems = [
    { name: 'PROJECTS', action: () => {} },
    { name: 'BLOG', action: () => {} },
    { name: 'ABOUT', action: () => {} },
    { name: 'RESUME', action: () => {} },
    { name: "LET'S WORK", action: () => setActiveView('contact') },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-xl md:max-w-2xl bg-[#333333] border-l border-white/5 z-50 flex flex-col overflow-y-auto overflow-x-hidden no-scrollbar"
          >
            {/* Header */}
            <div className="sticky top-0 w-full flex items-center justify-between p-6 sm:p-10 bg-[#333333]/90 backdrop-blur-md z-10 border-b border-white/5">
              {activeView === 'contact' ? (
                <button 
                  onClick={() => setActiveView('menu')}
                  className="flex items-center gap-2 text-white/70 hover:text-[#CCFF00] transition-colors font-mono text-sm tracking-widest uppercase"
                >
                  <ArrowLeft size={18} /> Back
                </button>
              ) : (
                <div className="font-mono text-sm tracking-widest text-white/50 uppercase">Menu</div>
              )}
              <button 
                onClick={onClose}
                className="text-white hover:text-[#CCFF00] transition-colors bg-white/5 p-2 rounded-full"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeView === 'menu' ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-6 sm:gap-10"
                  >
                    {menuItems.map((item, idx) => (
                      <button 
                        key={idx}
                        onClick={item.action}
                        className="text-left font-display text-4xl sm:text-6xl md:text-7xl uppercase text-white hover:text-[#CCFF00] hover:translate-x-4 transition-all duration-300"
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col h-full"
                  >
                    <h2 className="font-display text-4xl sm:text-5xl uppercase text-white mb-8 sm:mb-12">
                      Let's Build Something <span className="text-[#CCFF00]">Iconic</span>
                    </h2>

                    <form className="flex flex-col gap-8 sm:gap-12 flex-1" onSubmit={(e) => e.preventDefault()}>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Name</label>
                        <input 
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-lg focus:outline-none focus:border-[#CCFF00] transition-colors"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Email</label>
                        <input 
                          type="email" 
                          placeholder="your@email.com"
                          className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-lg focus:outline-none focus:border-[#CCFF00] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Inquiry Type</label>
                        <select 
                          className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-lg focus:outline-none focus:border-[#CCFF00] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="project" className="bg-[#333333] text-white">Full Project</option>
                          <option value="freelance" className="bg-[#333333] text-white">Freelance Design</option>
                          <option value="audit" className="bg-[#333333] text-white">UX Audit</option>
                          <option value="other" className="bg-[#333333] text-white">Other</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Message</label>
                        <textarea 
                          rows={4}
                          placeholder="Tell me about your project..."
                          className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-lg focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="mt-auto sm:mt-8 w-full bg-[#CCFF00] text-black font-display text-2xl py-5 hover:bg-white hover:scale-[1.02] transition-all duration-300 uppercase"
                      >
                        Send Inquiry
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
