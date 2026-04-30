import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { PORTFOLIO_DATA } from "../utils/data";
import { hoverLift, fadeInUp } from "../utils/animations";

const SystemImpact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-[#0F172A] z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Live Telemetry
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            System <span className="text-gradient">Impact Dashboard</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real-world metrics representing the scale and performance of the backend architectures I have engineered.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.systemImpact.map((metric, index) => (
            <motion.div
              key={index}
              variants={hoverLift}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 border-t-4 border-t-indigo-500/50 hover:border-t-indigo-400 group cursor-default"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/5 group-hover:bg-slate-700 transition-colors">
                  {metric.icon}
                </div>
              </div>
              
              <div className="text-4xl font-bold font-heading text-slate-100 mb-2 tracking-tighter flex items-end">
                {inView ? (
                  CountUp.default 
                    ? <CountUp.default end={metric.value} duration={2.5} separator="," />
                    : <CountUp end={metric.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-2xl text-indigo-400 ml-1">{metric.suffix}</span>
              </div>
              
              <div className="text-sm font-medium text-slate-300 mb-1">{metric.label}</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemImpact;
