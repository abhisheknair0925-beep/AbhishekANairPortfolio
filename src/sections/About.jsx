import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../utils/data";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const { summary, highlights } = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Title & Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-teal-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 mb-8 rounded-full"></div>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="glass-card p-8 grid grid-cols-2 gap-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
              
              <div className="text-center relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">3+</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">4+</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Major Systems</div>
              </div>
              <div className="text-center relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">30%</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Performance Gain</div>
              </div>
              <div className="text-center relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">10+</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Mentees Guided</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
