import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../utils/data";
import { Users, GitPullRequest, Rocket, ShieldAlert } from "lucide-react";

const Leadership = () => {
  const { title, description, points } = PORTFOLIO_DATA.leadership;

  const icons = [
    <Users className="w-6 h-6 text-indigo-400" />,
    <GitPullRequest className="w-6 h-6 text-purple-400" />,
    <Rocket className="w-6 h-6 text-blue-400" />,
    <ShieldAlert className="w-6 h-6 text-teal-400" />,
  ];

  return (
    <section className="py-24 relative bg-[#0F172A] bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-6 flex items-start gap-4 group hover:bg-slate-800/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center border border-white/5 shadow-inner flex-shrink-0 group-hover:scale-110 transition-transform">
                  {icons[index % icons.length]}
                </div>
                <div>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
