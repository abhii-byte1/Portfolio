import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'Python', 'React.js', 'Vite', 
  'Tailwind CSS', 'Node.js', 'Express.js', 
  'MongoDB', 'REST APIs', 'Git', 'SQLite', 'JWT Auth'
];

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#0d1116] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#00df8f] rounded-full" />
            <h3 className="font-mono text-sm tracking-widest text-[#00df8f] uppercase">About Me</h3>
          </div>
          
          <h2 className="font-display font-bold text-5xl sm:text-6xl tracking-tighter text-white mb-8 leading-[0.9]">
            ENGINEERING WITH <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #ffffff' }}>
              PURPOSE.
            </span>
          </h2>

          <p className="text-gray-400 font-sans text-lg leading-relaxed mb-6">
            I am an IEEE-published researcher and Full Stack Developer pursuing my B.Tech in AI & ML. With real-world internship experience and independent projects, I specialize in building production-grade applications featuring RESTful APIs, JWT role-based authentication, geolocation systems, and robust MongoDB/SQLite databases.
          </p>
          
          <p className="text-gray-400 font-sans text-lg leading-relaxed mb-12">
            Comfortable across the full stack — from creating responsive React/Tailwind frontends to engineering scalable Node.js/Express backends — I emphasize strong version control, clean code practices, and deadline-driven execution.
          </p>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-2">
              <span className="font-display font-bold text-4xl text-white">IEEE</span>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Published Author</span>
            </div>
            <div className="flex flex-col gap-2 border-l border-white/10 pl-8">
              <span className="font-display font-bold text-4xl text-[#00df8f]">100%</span>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Commitment</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Toolkit */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12"
        >
          <h3 className="font-display font-bold text-3xl text-white mb-8 tracking-tighter">
            MY TOOLKIT
          </h3>
          
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                className="px-6 py-3 rounded-full bg-[#14181f] border border-white/10 text-gray-300 font-mono text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 hover:border-[#00df8f] hover:text-[#00df8f] hover:shadow-[0_0_15px_rgba(0,223,143,0.3)] hover:-translate-y-1"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
