import { motion } from "framer-motion";
import { useGithubData } from "../hooks/useGithubData";
import { Users, BookOpen, Star, GitBranch, Code } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { hoverLift, fadeInUp } from "../utils/animations";

const GithubActivity = () => {
  const { profile, repos, loading, error } = useGithubData();

  if (error && !profile) return null; // Hide section if API fails and no cache exists

  // Calculate some stats from repos
  const totalStars = repos?.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 0;
  
  const languageCounts = repos?.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});
  
  const mostUsedLanguage = languageCounts 
    ? Object.keys(languageCounts).reduce((a, b) => languageCounts[a] > languageCounts[b] ? a : b, "N/A")
    : "N/A";

  // Prepare data for Recharts PieChart
  const totalReposWithLang = Object.values(languageCounts || {}).reduce((a, b) => a + b, 0);
  const chartData = languageCounts 
    ? Object.entries(languageCounts)
        .map(([name, value]) => ({ 
          name, 
          value,
          percentage: ((value / totalReposWithLang) * 100).toFixed(1)
        }))
        .sort((a, b) => b.value - a.value)
    : [];

  const CHART_COLORS = ['#6366F1', '#8B5CF6', '#3B82F6', '#14B8A6', '#F59E0B', '#F43F5E'];

  const GITHUB_USERNAME = "abhisheknair0925-beep";

  return (
    <section id="github-activity" className="py-24 relative bg-[#0F172A] border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live GitHub Sync
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            Developer <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real-time insights directly from my GitHub profile.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Profile Overview Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 glass-card p-8 flex flex-col items-center text-center relative overflow-hidden"
          >
            {loading && !profile ? (
              <div className="animate-pulse w-full flex flex-col items-center">
                <div className="w-32 h-32 bg-slate-800 rounded-full mb-6"></div>
                <div className="w-3/4 h-8 bg-slate-800 rounded mb-4"></div>
                <div className="w-1/2 h-4 bg-slate-800 rounded"></div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30"></div>
                  <img 
                    src={profile?.avatar_url} 
                    alt="GitHub Avatar" 
                    className="w-32 h-32 rounded-full border-2 border-slate-800 relative z-10 mb-6 object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-100 mb-2">{profile?.name || profile?.login}</h3>
                <a href={profile?.html_url} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 font-medium mb-4 transition-colors">
                  @{profile?.login}
                </a>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {profile?.bio || "Software Engineer pushing code to production."}
                </p>

                <div className="grid grid-cols-2 gap-4 w-full border-t border-slate-800 pt-6 mt-auto">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-slate-200">{profile?.followers}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1 mt-1">
                      <Users className="w-3 h-3" /> Followers
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-slate-200">{profile?.public_repos}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1 mt-1">
                      <BookOpen className="w-3 h-3" /> Repos
                    </span>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Stats & Heatmap Area */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            {/* Mini Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Stars", value: totalStars, icon: <Star className="w-5 h-5 text-yellow-400" /> },
                { label: "Top Language", value: mostUsedLanguage, icon: <GitBranch className="w-5 h-5 text-indigo-400" /> },
                { label: "Public Gists", value: profile?.public_gists || 0, icon: <BookOpen className="w-5 h-5 text-teal-400" /> },
                { label: "Following", value: profile?.following || 0, icon: <Users className="w-5 h-5 text-purple-400" /> },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={hoverLift}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-4 flex flex-col justify-between h-32 cursor-default"
                >
                  {loading && !profile ? (
                    <div className="animate-pulse w-full h-full bg-slate-800/50 rounded"></div>
                  ) : (
                    <>
                      <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center border border-white/5 mb-4">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                        <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contribution Heatmap */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-card p-6 w-full overflow-hidden"
            >
              <h3 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
                Contribution Calendar
              </h3>
              <div className="w-full overflow-x-auto overflow-y-hidden rounded-lg bg-[#0D1117] border border-white/5 p-4 flex justify-center custom-scrollbar">
                 {/* Using GitHub Readme Stats API with dracula theme to match the dark UI */}
                 <img 
                   src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=0D1117&color=6366F1&line=8B5CF6&point=FFFFFF&area=true&hide_border=true&custom_title=Recent%20Activity`}
                   alt="GitHub Activity Graph" 
                   className="w-full h-auto min-w-[600px] filter brightness-110 saturate-150"
                 />
              </div>
            </motion.div>

            {/* Language Usage Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glass-card p-6 w-full flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="flex-1 w-full text-center lg:text-left">
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-indigo-400 font-medium mb-2">
                  <Code className="w-5 h-5" />
                  Technology Distribution
                </div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4">
                  Languages I Speak
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Based on real GitHub repositories. The chart visually represents the proportion of my public repositories utilizing each programming language.
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {chartData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-800/50 px-3 py-1.5 rounded-full border border-white/5">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }}></span>
                      {entry.name} <span className="text-slate-500">{entry.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full h-[300px] min-h-[300px] relative">
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center animate-pulse">
                     <div className="w-48 h-48 rounded-full border-[20px] border-slate-800"></div>
                  </div>
                ) : (
                  <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                          animationBegin={200}
                          animationDuration={1500}
                          animationEasing="ease-out"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', borderRadius: '8px', color: '#F8FAFC' }}
                          itemStyle={{ color: '#F8FAFC' }}
                          formatter={(value, name, props) => [`${props.payload.percentage}% (${value} repos)`, name]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
