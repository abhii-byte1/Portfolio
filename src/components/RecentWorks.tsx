import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Search, Zap } from 'lucide-react';

const GithubIcon = ({ size = 24, strokeWidth = 2, className = "" }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'ShieldHer — Women Safety Tool',
    category: 'Full Stack Web Application',
    problem: 'Women facing emergencies need an immediate, single-tap mechanism to alert contacts, stream location, and trigger alarms without navigating complex menus.',
    features: [
      'One-tap emergency activation interface',
      'Live GPS geolocation streaming',
      'Automated WhatsApp alert dispatch',
      'Loud alarm siren generation',
      'Safe-cancel state engine to prevent misfires'
    ],
    technologies: ['HTML5', 'Vanilla JS', 'Node.js', 'Express.js', 'SQLite'],
    challenges: 'Designing a foolproof 4-table SQLite schema state engine that allows lightning-fast SOS triggers while actively preventing accidental misfires during high-stress situations.',
    role: 'Lead Full Stack Developer & IEEE Research Author',
    status: 'Completed (Published in IJRPA & IEEE)',
    image: '/shieldher.png',
    github: 'https://github.com/abhii-byte1/women-safety-tool-updated',
    demo: 'https://women-safety-tool-updated-1.onrender.com'
  },
  {
    id: 2,
    title: 'Smart Waste Management',
    category: 'MERN Stack Platform',
    problem: 'Citizens lack a transparent, real-time platform to lodge and track civic waste complaints directly with municipal administrators.',
    features: [
      'Role-based JWT authentication for Admins & Users',
      'Dedicated analytics dashboards per role',
      'Real-time complaint status tracking',
      'Scalable MVC backend architecture',
      'Pre-seeded database for rapid demo deployment'
    ],
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    challenges: 'Architecting a highly modular MVC backend with dedicated controllers and services layers to ensure the platform remains scalable as complaint volume grows.',
    role: 'Full Stack Architect & Developer',
    status: 'Completed',
    image: '/wastemanagement.jpg',
    github: 'https://github.com/abhii-byte1/smart-waste-management-system',
    demo: 'https://smart-waste-management-system-2-2817.onrender.com'
  },
  {
    id: 3,
    title: 'E-Commerce Analytics Dashboard',
    category: 'Frontend Engineering',
    problem: 'Store owners need a highly responsive, visual interface to quickly digest complex real-time sales metrics, user acquisition data, and inventory.',
    features: [
      'Real-time sales metrics and KPI tracking',
      'Complex interactive chart visualizations',
      'Customized data tables with sorting/filtering',
      'Fluid responsive grid layouts for all devices'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    challenges: 'Rendering heavy datasets into performant, interactive UI visualizations without layout shifts or frame drops on low-end devices.',
    role: 'Frontend Engineer',
    status: 'Completed',
    image: '/dashboard.jpg',
    github: 'https://github.com/abhii-byte1',
    demo: '#'
  }
];

export default function RecentWorks() {
  return (
    <section id="work" className="py-16 lg:py-32 bg-[#0d1116] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#00df8f] rounded-full animate-pulse" />
            <h3 className="font-mono text-sm tracking-widest text-[#00df8f] uppercase">Product Case Studies</h3>
          </div>
          <h2 className="font-display font-bold text-5xl sm:text-7xl tracking-tighter text-white leading-[0.9]">
            FEATURED <span className="text-transparent" style={{ WebkitTextStroke: '2px #00df8f' }}>PROJECTS.</span>
          </h2>
        </motion.div>

        {/* Case Studies Container */}
        <div className="flex flex-col gap-16 lg:gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#14181f] aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                  <div className="absolute inset-0 bg-[#00df8f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 bg-[#00df8f] rounded-full" />
                    <span className="text-white text-xs font-mono uppercase tracking-widest">{project.status}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-[#00df8f] font-mono text-sm uppercase tracking-widest mb-2">{project.category}</h4>
                    <h3 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tighter leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Problem Statement */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 mb-8 hover:border-[#00df8f]/30 hover:bg-white/10 transition-colors shadow-lg">
                    <div className="flex gap-3 mb-2">
                      <Search size={20} className="text-[#00df8f] shrink-0" />
                      <h5 className="text-white font-bold tracking-wide">The Problem</h5>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed ml-8">{project.problem}</p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h5 className="text-white font-bold tracking-wide mb-4 flex items-center gap-2">
                      <Zap size={20} className="text-[#00df8f]" /> Key Features
                    </h5>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                          <CheckCircle2 size={18} className="text-[#00df8f] mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 bg-[#14181f] border border-white/10 rounded-lg text-gray-300 text-xs font-mono uppercase tracking-wider hover:border-[#00df8f] hover:text-[#00df8f] hover:shadow-[0_0_10px_rgba(0,223,143,0.2)] transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Role & Challenges */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div>
                      <h6 className="text-white font-bold text-sm mb-2 opacity-80">My Role</h6>
                      <p className="text-[#00df8f] text-sm">{project.role}</p>
                    </div>
                    <div>
                      <h6 className="text-white font-bold text-sm mb-2 opacity-80">Challenge Solved</h6>
                      <p className="text-gray-400 text-xs leading-relaxed">{project.challenges}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 bg-[#00df8f] text-black px-6 py-4 sm:py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#00b373] hover:shadow-[0_0_20px_rgba(0,223,143,0.4)] transition-all duration-300 w-full sm:w-auto h-14 sm:h-auto"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 bg-[#14181f] border border-white/10 text-white px-6 py-4 sm:py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/5 hover:border-white/30 hover:shadow-lg transition-all duration-300 w-full sm:w-auto h-14 sm:h-auto"
                    >
                      <GithubIcon size={18} className="text-[#00df8f]" />
                      Repository
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
