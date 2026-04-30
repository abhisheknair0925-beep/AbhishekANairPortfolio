import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../utils/data";
import { ExternalLink, Star, GitFork, BookOpen } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { useGithubData } from "../hooks/useGithubData";
import { staggerContainer, hoverLift, fadeInUp } from "../utils/animations";

const Projects = () => {
  const { repos, loading } = useGithubData();
  
  // Filter top 4 repos (excluding forks if possible, sorted by stars)
  const topRepos = repos?.filter(repo => !repo.fork).slice(0, 4) || [];

  return (
    <section id="projects" className="py-24 bg-[#0F172A] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0F172A] to-[#0F172A] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION: PREMIUM HIGHLIGHTED PROJECTS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">
            Production <span className="text-gradient">Deployments.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            A curated selection of robust backend systems, high-performance APIs, and enterprise tools I have engineered.
          </p>
        </motion.div>

        <div className="space-y-32 mb-32">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 w-full relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl p-2 bg-slate-800/50 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/800x600/1e293b/6366f1?text=Project+Preview"; }}
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="flex gap-3 mb-6 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold rounded-full tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white font-medium group transition-colors">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </div>
                      Source Code
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium group transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                      Live Deployment
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* SECTION: LIVE GITHUB REPOS (AUTO SYNC) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 mt-32"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Featured <span className="text-gradient">Open Source</span>
            </h2>
            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Auto Synced
            </div>
          </div>
          <p className="text-slate-400 max-w-2xl">
            Live repositories automatically fetched from my GitHub profile.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {loading ? (
            // Skeleton Loader
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card p-8 animate-pulse border-t-2 border-t-slate-700">
                <div className="h-6 w-1/2 bg-slate-800 rounded mb-4"></div>
                <div className="h-4 w-full bg-slate-800 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-slate-800 rounded mb-6"></div>
                <div className="flex gap-4">
                  <div className="h-4 w-12 bg-slate-800 rounded"></div>
                  <div className="h-4 w-12 bg-slate-800 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            topRepos.map((repo, index) => (
              <motion.div 
                key={repo.id}
                variants={hoverLift}
                whileHover="hover"
                initial="rest"
                className="glass-card p-8 border-t-2 border-t-indigo-500/30 hover:border-t-indigo-500 group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    <BookOpen className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" />
                    {repo.name}
                  </a>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {repo.description || "No description provided for this repository."}
                </p>

                <div className="flex items-center gap-6 text-sm font-medium text-slate-400 pt-4 border-t border-white/5 mt-auto">
                  {repo.language && (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors cursor-default">
                    <Star className="w-4 h-4" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-default">
                    <GitFork className="w-4 h-4" /> {repo.forks_count}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
