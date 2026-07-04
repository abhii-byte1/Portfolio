import { motion } from 'framer-motion';
import { Briefcase, Trophy, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const achievements = [
    "Frontend Developer Intern at WebMitr",
    "Research Paper Publication on ShieldHer SOS System",
    "Smart Waste Management Project Development",
    "Participation in Hackathons and Technical Events"
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-5xl md:text-7xl mb-4 text-white uppercase tracking-tighter"
        >
          BUILDING WITH <span className="text-transparent" style={{ WebkitTextStroke: '2px #00df8f' }}>IMPACT.</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 w-24 bg-[#00df8f] rounded-full origin-left"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00df8f] to-transparent opacity-30" />
          
          <div className="relative pl-16 pt-2">
            <div className="absolute left-[19px] top-4 w-4 h-4 rounded-full bg-[#00df8f] shadow-[0_0_15px_rgba(0,223,143,0.8)] animate-pulse" />
            
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#00df8f]/50 hover:shadow-[0_10px_30px_rgba(0,223,143,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase size={24} className="text-[#00df8f]" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Frontend Developer Intern</h3>
              </div>
              <p className="text-[#00df8f] font-mono text-sm uppercase tracking-widest mb-6">WebMitr Digital Pvt. Ltd. • Nov 2025</p>
              
              <ul className="space-y-4">
                {[
                  "Built responsive web interfaces",
                  "Improved UI performance",
                  "Developed reusable components",
                  "Collaborated in real-world development workflows"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    <CheckCircle2 size={18} className="text-[#00df8f] mt-1 shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-[#14181f] border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-[#00df8f]/50 hover:shadow-[0_10px_30px_rgba(0,223,143,0.15)] group transition-all duration-300"
            >
              <div className="bg-white/5 p-4 rounded-full mb-4 group-hover:bg-[#00df8f]/10 group-hover:scale-110 transition-all duration-300">
                <Trophy size={28} className="text-gray-500 group-hover:text-[#00df8f] transition-colors" />
              </div>
              <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
