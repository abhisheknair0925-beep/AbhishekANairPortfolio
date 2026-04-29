import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../utils/data";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0F172A]">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Journey & <span className="text-indigo-400">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional growth, focusing on leadership and real-world system improvements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-teal-500/50 to-transparent -translate-x-1/2 hidden md:block"></div>

          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0">

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-slate-900 border-4 border-indigo-500 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              </div>

              {/* Content Box (Left or Right) */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto text-left"}`}
              >
                <div className={`glass-card p-6 md:p-8 relative ${index % 2 === 0 ? "hover:-translate-x-2" : "hover:translate-x-2"} transition-transform duration-300`}>
                  <div className={`flex items-center gap-2 mb-2 text-indigo-400 font-medium text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-2 mb-4 text-teal-400 font-medium ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Impact Metrics */}
                  {exp.metrics && (
                    <div className={`flex flex-wrap gap-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 rounded-lg border border-slate-700">
                          <TrendingUp className="w-4 h-4 text-teal-400" />
                          <div className="text-left">
                            <div className="text-xs text-slate-400 uppercase tracking-wider">{metric.label}</div>
                            <div className="font-bold text-slate-200">{metric.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
