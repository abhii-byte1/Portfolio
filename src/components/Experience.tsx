import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Code2, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    subtitle: 'WebMitr Digital Pvt. Ltd.',
    badge: 'Professional Experience',
    icon: Briefcase,
    points: [
      'Built responsive web interfaces',
      'Improved UI performance',
      'Developed reusable components',
      'Worked in real-world development workflows'
    ]
  },
  {
    id: 2,
    title: 'Research Publication',
    subtitle: 'ShieldHer SOS System',
    badge: 'Academic Milestone',
    icon: BookOpen,
    points: [
      'Researched women safety solutions',
      'Designed emergency response workflows',
      'Published research work'
    ]
  },
  {
    id: 3,
    title: 'Building Real-World Projects',
    subtitle: 'Full Stack Development',
    badge: 'Project Development',
    icon: Code2,
    points: [
      'ShieldHer SOS System',
      'Smart Waste Management System'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative z-10 px-6 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-20 text-center lg:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="w-2 h-2 bg-[#00df8f] rounded-full animate-pulse" />
              <h3 className="font-mono text-sm tracking-widest text-[#00df8f] uppercase">My Journey</h3>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.9]">
              EXPERIENCE & <span className="text-transparent" style={{ WebkitTextStroke: '2px #00df8f' }}>IMPACT.</span>
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        
        {/* Continuous Vertical Line */}
        <div className="absolute left-[23px] sm:left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00df8f] via-[#00df8f]/30 to-transparent" />

        <div className="flex flex-col gap-16">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            
            return (
              <div key={exp.id} className="relative pl-16 sm:pl-24">
                
                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute left-0 sm:left-4 top-2 sm:top-6 w-12 h-12 rounded-full bg-[#14181f] border-2 border-[#00df8f] flex items-center justify-center shadow-[0_0_20px_rgba(0,223,143,0.4)] z-10"
                >
                  <Icon size={20} className="text-[#00df8f]" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="bg-[#14181f] border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#00df8f]/50 hover:shadow-[0_15px_40px_rgba(0,223,143,0.15)] transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle hover glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00df8f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 font-sans text-lg">{exp.subtitle}</p>
                      </div>
                      
                      {/* Badge */}
                      <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[#00df8f] font-mono text-xs tracking-widest uppercase self-start">
                        {exp.badge}
                      </span>
                    </div>

                    <ul className="space-y-4">
                      {exp.points.map((point, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                          className="flex items-start gap-4 text-gray-300 group-hover:text-white transition-colors"
                        >
                          <CheckCircle2 size={20} className="text-[#00df8f] mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
