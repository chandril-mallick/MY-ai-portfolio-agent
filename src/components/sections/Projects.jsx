import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowRight, Loader2, Star, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

const GITHUB_USERNAME = 'chandril-mallick';

const COLORS = [
  'bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-orange-500', 'bg-pink-500', 'bg-cyan-500'
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        
        const formattedData = data.map((repo, index) => ({
          id: repo.id,
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
          originalName: repo.name,
          description: repo.description || "Building the future of AI and software engineering.",
          tags: repo.language ? [repo.language] : ['Software'],
          link: repo.html_url,
          homepage: repo.homepage,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          color: COLORS[index % COLORS.length]
        }));

        setProjects(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-red-500 gap-4">
        <p className="font-medium text-lg">Could not load projects.</p>
        <button onClick={() => window.location.reload()} className="px-4 py-2 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">Try Again</button>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-0 sm:px-2 py-2 sm:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group bg-slate-900/40 rounded-2xl sm:rounded-[2rem] border border-white/5 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full backdrop-blur-md"
          >
            {/* Project Image - Using GitHub Open Graph */}
            <div className="h-40 sm:h-48 shrink-0 relative overflow-hidden">
               <img 
                 src={`https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${project.originalName}`}
                 alt={project.title}
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.parentElement.classList.add(project.color);
                   e.target.parentElement.classList.add('opacity-50');
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
               <div className="absolute bottom-4 left-4 flex gap-4 text-white text-xs font-bold tracking-widest uppercase">
                   <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-all">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> {project.stars}
                   </span>
                   <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-all">
                      <GitFork className="w-3.5 h-3.5" /> {project.forks}
                   </span>
               </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-8 flex flex-col flex-1">
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors capitalize line-clamp-2 sm:line-clamp-1 mb-2 sm:mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800/40 text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/5 group-hover:border-blue-500/20 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="pt-4 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="touch-target flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black text-white hover:text-blue-400 transition-all group/link tracking-wider uppercase"
                 >
                    Source Code 
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-blue-600 transition-all shrink-0">
                       <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                 </a>
                 <div className="flex gap-2">
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-slate-400 hover:text-white border border-transparent hover:border-white/10"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    {project.homepage && (
                      <a 
                        href={project.homepage}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-2xl transition-all border border-blue-500/20 hover:border-blue-500 shadow-lg shadow-blue-500/10"
                      >
                          <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Full Profile Card */}
        <motion.a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="group flex flex-col items-center justify-center p-8 sm:p-12 bg-slate-900/30 rounded-2xl sm:rounded-[2rem] border-2 border-dashed border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/20 transition-all duration-500 gap-4 sm:gap-6 backdrop-blur-sm"
        >
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
            <ArrowRight className="w-10 h-10 text-white" />
          </div>
          <div className="text-center">
            <p className="font-black text-white text-xl uppercase tracking-widest">Explore More</p>
            <p className="text-slate-500 text-sm font-bold mt-1">Check out all 50+ repositories on GitHub</p>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
