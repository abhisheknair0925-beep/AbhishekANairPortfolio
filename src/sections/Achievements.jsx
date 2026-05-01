import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../utils/data";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Honors & <span className="text-purple-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PORTFOLIO_DATA.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 text-center flex flex-col items-center group hover:border-purple-500/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{achievement.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {achievement.description}
              </p>
              {achievement.link && (
                <a href={achievement.link} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                  View Publication <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
