import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { PORTFOLIO_DATA } from "../utils/data";
import { staggerContainer, fadeInUp, buttonGlow } from "../utils/animations";

const Hero = () => {
  const { name, role, tagline } = PORTFOLIO_DATA.hero;

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-[#0F172A] bg-grid-pattern">
      {/* Animated glowing blobs */}
      <motion.div 
        animate={{ 
          x: [0, 30, -20, 0], 
          y: [0, -40, 20, 0] 
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="glow-blob bg-indigo-600 w-[500px] h-[500px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 30, 0], 
          y: [0, 30, -20, 0] 
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear", delay: 2 }}
        className="glow-blob bg-purple-600 w-[600px] h-[600px] bottom-0 right-0 translate-x-1/3 translate-y-1/3"
      />

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10 relative">
        
        {/* Text Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left mt-12 lg:mt-0"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-8 tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            {role}
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-6 tracking-tighter leading-[1.1]">
            Engineering <br />
            <span className="text-gradient">Resilience.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I'm <strong className="text-slate-200">{name}</strong>. {tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <motion.a 
              href="#projects" 
              className="relative group w-full sm:w-auto block"
              variants={buttonGlow}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative px-8 py-4 bg-slate-900 rounded-full flex items-center justify-center gap-2 font-semibold text-slate-100 transition-all hover:bg-slate-800">
                Explore Systems
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
            
            <motion.a 
              href="/resume.pdf" 
              download 
              variants={buttonGlow}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-slate-300 hover:text-white"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start gap-8 mt-14 text-slate-500">
            <a href="https://github.com/abhisheknair0925-beep" target="_blank" rel="noreferrer" className="hover:text-indigo-400 hover:scale-110 transition-all">
              <GithubIcon className="w-7 h-7" />
            </a>
            <a href="#" className="hover:text-blue-500 hover:scale-110 transition-all">
              <LinkedinIcon className="w-7 h-7" />
            </a>
          </motion.div>
        </motion.div>

        {/* Premium Profile Image Frame */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full max-w-md lg:max-w-lg relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl glow-border p-2 bg-slate-900/50 backdrop-blur-3xl z-10">
            <img 
              src="/profile.png" 
              alt="Abhishek A Nair" 
              className="w-full h-full object-cover rounded-2xl filter contrast-125 saturate-110"
              onError={(e) => {
                 // Fallback if image doesn't exist
                 e.target.src = "https://via.placeholder.com/600x800/0f172a/6366f1?text=Abhishek+A+Nair";
              }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none"></div>
          </div>
          

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
