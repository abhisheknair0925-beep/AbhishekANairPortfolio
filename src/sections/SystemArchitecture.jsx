import { motion } from "framer-motion";

const SystemArchitecture = () => {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            Architecture <span className="text-gradient">Visualization</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            A high-level representation of the resilient data flows and decoupled services I typically architect for enterprise platforms.
          </p>
        </motion.div>

        {/* Animated SVG Architecture Flow */}
        <div className="max-w-5xl mx-auto relative glass-card p-8 md:p-16 glow-border overflow-x-auto">
          <div className="min-w-[800px] h-[400px] relative mx-auto">
            
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Path from Client to API */}
              <motion.path 
                d="M 150 200 L 300 200" 
                stroke="url(#lineGrad)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Path from API to ETL */}
              <motion.path 
                d="M 400 200 L 550 120" 
                stroke="url(#lineGrad)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              />

              {/* Path from API to DB */}
              <motion.path 
                d="M 400 200 L 550 280" 
                stroke="url(#lineGrad)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              />

              {/* Path from ETL/DB to Dashboard */}
              <motion.path 
                d="M 650 120 L 800 200 M 650 280 L 800 200" 
                stroke="url(#lineGrad)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />

              {/* Animated glowing dots */}
              <circle r="4" fill="#6366F1" filter="url(#glow)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 150 200 L 300 200" />
              </circle>
              <circle r="4" fill="#8B5CF6" filter="url(#glow)">
                <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M 400 200 L 550 120" />
              </circle>
              <circle r="4" fill="#3B82F6" filter="url(#glow)">
                <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 400 200 L 550 280" />
              </circle>
              <circle r="4" fill="#6366F1" filter="url(#glow)">
                <animateMotion dur="3s" begin="2s" repeatCount="indefinite" path="M 650 120 L 800 200" />
              </circle>
              <circle r="4" fill="#3B82F6" filter="url(#glow)">
                <animateMotion dur="3s" begin="2.5s" repeatCount="indefinite" path="M 650 280 L 800 200" />
              </circle>
            </svg>

            {/* Nodes */}
            <div className="absolute top-1/2 left-[100px] -translate-y-1/2 w-24 h-24 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl flex flex-col items-center justify-center z-10">
              <span className="text-2xl mb-1">📱</span>
              <span className="text-xs font-bold text-slate-300">Client / POS</span>
            </div>

            <div className="absolute top-1/2 left-[350px] -translate-y-1/2 w-28 h-28 bg-indigo-500/10 border border-indigo-500/50 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)] flex flex-col items-center justify-center z-10 backdrop-blur-md">
              <span className="text-2xl mb-1">⚡</span>
              <span className="text-xs font-bold text-indigo-300">API Gateway</span>
              <span className="text-[10px] text-slate-400 mt-1">.NET Core</span>
            </div>

            <div className="absolute top-[80px] left-[600px] w-24 h-24 bg-purple-500/10 border border-purple-500/50 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.2)] flex flex-col items-center justify-center z-10 backdrop-blur-md">
              <span className="text-2xl mb-1">⚙️</span>
              <span className="text-xs font-bold text-purple-300">ETL Worker</span>
            </div>

            <div className="absolute top-[240px] left-[600px] w-24 h-24 bg-blue-500/10 border border-blue-500/50 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)] flex flex-col items-center justify-center z-10 backdrop-blur-md">
              <span className="text-2xl mb-1">🗄️</span>
              <span className="text-xs font-bold text-blue-300">SQL Server</span>
            </div>

            <div className="absolute top-1/2 left-[850px] -translate-y-1/2 w-24 h-24 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl flex flex-col items-center justify-center z-10">
              <span className="text-2xl mb-1">📊</span>
              <span className="text-xs font-bold text-slate-300">Dashboard</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
