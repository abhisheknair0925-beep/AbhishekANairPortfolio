import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PORTFOLIO_DATA } from "../utils/data";
import { Zap, Clock } from "lucide-react";

const Optimization = () => {
  const { title, description, before, after } = PORTFOLIO_DATA.optimization;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 relative bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              {description}
            </p>
          </motion.div>

          {/* Animated Bar Chart Content */}
          <div ref={ref} className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
            <div className="glass-card p-8 glow-border">
              
              {/* Before Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {before.label}
                  </span>
                  <span className="text-slate-300 font-mono">{before.time}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-6 overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-slate-600 h-full rounded-full"
                  />
                </div>
              </div>

              {/* After Bar */}
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-teal-400 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> {after.label}
                  </span>
                  <span className="text-teal-300 font-mono font-bold">{after.time}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-6 overflow-hidden border border-white/5 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${after.value}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="bg-gradient-to-r from-teal-500 to-indigo-500 h-full rounded-full relative overflow-hidden"
                  >
                    {/* Shimmer effect inside the bar */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="mt-6 text-right"
                >
                  <span className="inline-block px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded text-sm font-bold">
                    ⚡ 50% Latency Reduction
                  </span>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Optimization;
