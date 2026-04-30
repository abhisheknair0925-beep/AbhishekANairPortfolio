import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Star, GitFork, Activity } from "lucide-react";
import { useDynamicProjects } from "../hooks/useDynamicProjects";

const DynamicProjects = () => {
  const { projects, loading, error } = useDynamicProjects();

  return (
    <section id="dynamic-projects" className="py-24 bg-[#0F172A] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0F172A] to-[#0F172A] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 mt-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
              Dynamic <span className="text-gradient">Showcase.</span>
            </h2>
            <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Live from GitHub
            </div>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Real-time GitHub activity. Automatically fetching top projects and their descriptions directly from the README.
          </p>
        </motion.div>

        {/* CONTENT */}
        {error ? (
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-center">
            Failed to load projects: {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // SKELETON LOADER
              [1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`glass-card p-8 animate-pulse border-t-2 border-t-slate-700 ${i === 1 ? 'md:col-span-2 lg:col-span-2 min-h-[300px]' : 'min-h-[250px]'}`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-8 w-1/2 bg-slate-800/50 rounded-lg"></div>
                    <div className="h-8 w-8 bg-slate-800/50 rounded-full"></div>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="h-4 w-full bg-slate-800/50 rounded"></div>
                    <div className="h-4 w-[90%] bg-slate-800/50 rounded"></div>
                    <div className="h-4 w-[75%] bg-slate-800/50 rounded"></div>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <div className="h-5 w-16 bg-slate-800/50 rounded-full"></div>
                    <div className="h-5 w-16 bg-slate-800/50 rounded-full"></div>
                  </div>
                </div>
              ))
            ) : (
              // ACTUAL PROJECTS
              projects.map((repo, index) => {
                const isFeatured = index === 0;

                return (
                  <motion.div 
                    key={repo.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`glass-card p-8 group flex flex-col h-full border-t-2 border-t-transparent hover:border-t-indigo-500 transition-all duration-300 relative overflow-hidden ${
                      isFeatured ? 'md:col-span-2 lg:col-span-2 shadow-[0_0_30px_rgba(99,102,241,0.1)] border-indigo-500/20' : ''
                    }`}
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className={`flex items-center gap-3 font-bold text-slate-100 group-hover:text-indigo-400 transition-colors ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
                          {isFeatured ? <Activity className="w-8 h-8 text-indigo-400" /> : <BookOpen className="w-6 h-6 text-slate-500 group-hover:text-indigo-400 transition-colors" />}
                          {repo.name}
                        </a>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100 bg-white/5 p-2 rounded-full backdrop-blur-sm">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>

                      <p className={`text-slate-400 mb-8 flex-grow leading-relaxed ${isFeatured ? 'text-lg' : 'text-base'}`}>
                        {repo.clean_description || "No description provided for this repository."}
                      </p>

                      <div className="flex items-center gap-6 text-sm font-medium text-slate-400 pt-6 border-t border-white/5 mt-auto">
                        {repo.language && (
                          <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-default">
                          <Star className="w-4 h-4" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors cursor-default">
                          <GitFork className="w-4 h-4" /> {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicProjects;
