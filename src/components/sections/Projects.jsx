import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowRight, Loader2, Star, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS, GITHUB_USERNAME } from '../../data/profile';

const COLORS = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-emerald-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-cyan-500',
];

const FEATURED_REPO_NAMES = new Set(FEATURED_PROJECTS.map((p) => p.repoName));

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
        );
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();

        const formatted = data
          .filter((repo) => !repo.fork && !FEATURED_REPO_NAMES.has(repo.name))
          .map((repo, index) => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            originalName: repo.name,
            description: repo.description || 'Open-source AI and software engineering project.',
            tags: repo.language ? [repo.language] : ['Software'],
            link: repo.html_url,
            homepage: repo.homepage,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            color: COLORS[index % COLORS.length],
          }));

        setRepos(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="w-full mx-auto px-0 sm:px-2 py-2 sm:py-4 space-y-8 sm:space-y-10">
      <div>
        <h3 className="text-sm font-black uppercase tracking-widest text-blue-400 mb-4">
          Flagship Projects
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group bg-slate-900/50 rounded-2xl sm:rounded-[2rem] border border-blue-500/20 p-5 sm:p-8 hover:border-blue-500/40 transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-blue-400/90 text-xs sm:text-sm font-bold uppercase tracking-widest mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-black uppercase tracking-wider transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-slate-800/60 text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                    <span className="text-blue-500 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4">
          More on GitHub
        </h3>

        {loading && (
          <div className="h-32 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        )}

        {error && (
          <div className="h-32 flex flex-col items-center justify-center text-red-400 gap-3 text-sm">
            <p className="font-medium">Could not load additional repositories.</p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-bold underline"
            >
              View GitHub profile
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {repos.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all flex flex-col"
              >
                <div className="h-36 sm:h-40 relative overflow-hidden shrink-0">
                  <img
                    src={`https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${project.originalName}`}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add(project.color, 'opacity-40');
                    }}
                  />
                  <div className="absolute bottom-3 left-3 flex gap-2 text-white text-[10px] font-bold">
                    <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {project.stars}
                    </span>
                    <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                      <GitFork className="w-3 h-3" /> {project.forks}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h4 className="text-lg font-black text-white capitalize line-clamp-1 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-1">{project.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black text-white hover:text-blue-400 uppercase tracking-wider flex items-center gap-2"
                    >
                      Source <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center p-8 bg-slate-900/30 rounded-2xl border-2 border-dashed border-slate-700 hover:border-blue-500/50 transition-all gap-4"
            >
              <ArrowRight className="w-8 h-8 text-white" />
              <p className="font-black text-white text-sm uppercase tracking-widest">All Repositories</p>
            </motion.a>
          </div>
        )}
      </div>
    </div>
  );
}
