import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowRight, Loader2, Star, GitFork, ChevronDown, ChevronUp, Cpu } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FEATURED_PROJECTS, GITHUB_USERNAME } from '../../data/profile';

const FEATURED_REPO_NAMES = new Set(FEATURED_PROJECTS.map((p) => p.repoName));

function TiltCard({ children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}

function FeaturedCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group perspective-1000"
    >
      <TiltCard className="h-full bg-slate-900/60 rounded-2xl sm:rounded-[1.75rem] border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden">
      {/* Yellow top accent bar */}
      <div className="h-0.5 w-full bg-white opacity-10" />

      <div className="p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4 sm:mb-5">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white group-hover:text-slate-200 transition-colors tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">
              {project.subtitle}
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all shrink-0"
          >
            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden xs:inline">GitHub</span>
          </a>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex items-center gap-2 bg-slate-800/50 border border-white/5 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2">
                <span className="text-base sm:text-lg font-black text-white leading-none">{m.value}</span>
                <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-slate-800/60 text-white rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="bg-slate-800/30 rounded-xl p-3 sm:p-4 border border-white/5">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Problem</p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-3 sm:p-4 border border-white/5">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Solution</p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Architecture */}
        {project.architecture && (
          <div className="flex items-start gap-2 bg-slate-900/50 border border-white/5 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5">
            <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden />
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Architecture</p>
              <p className="text-slate-300 text-[10px] sm:text-xs font-mono leading-relaxed break-words">{project.architecture}</p>
            </div>
          </div>
        )}

        {/* Expandable highlights */}
        <button
          type="button"
          onClick={() => setExpanded((p) => !p)}
          className="flex items-center gap-1.5 text-[10px] font-black text-slate-500 hover:text-slate-300 uppercase tracking-widest transition-colors mb-2"
          aria-expanded={expanded}
        >
          {expanded ? 'Hide Details' : 'Show All Highlights'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {expanded && (
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            {project.highlights.map((item) => (
              <li key={item} className="text-slate-400 text-xs sm:text-sm leading-relaxed flex gap-2">
                <span className="text-yellow-500 shrink-0 mt-0.5">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
      </TiltCard>
    </motion.article>
  );
}

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
          .map((repo) => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            originalName: repo.name,
            description: repo.description || 'Open-source AI and software engineering project.',
            tags: repo.language ? [repo.language] : ['Software'],
            link: repo.html_url,
            homepage: repo.homepage,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
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
    <div className="w-full space-y-10 sm:space-y-14">
      {/* Featured */}
      <div>
        <p className="section-label mb-3 sm:mb-4">Flagship Projects</p>
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* GitHub repos */}
      <div>
        <p className="section-label mb-3 sm:mb-4">More on GitHub</p>

        {loading && (
          <div className="h-28 flex items-center justify-center">
            <Loader2 className="w-7 h-7 animate-spin text-yellow-500" />
          </div>
        )}
        {error && (
          <div className="h-28 flex flex-col items-center justify-center text-red-400 gap-3 text-sm">
            <p className="font-medium">Could not load repositories.</p>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-bold underline">
              View GitHub
            </a>
          </div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {repos.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group bg-slate-900/40 rounded-xl sm:rounded-2xl border border-white/5 overflow-hidden hover:border-yellow-500/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                <div className="h-28 sm:h-32 md:h-36 relative overflow-hidden shrink-0">
                  <img
                    src={`https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${project.originalName}`}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('bg-yellow-500', 'opacity-40');
                    }}
                  />
                  <div className="absolute bottom-2 left-2 flex gap-1.5 text-white text-[9px] sm:text-[10px] font-bold">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                      <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" /> {project.stars}
                    </span>
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                      <GitFork className="w-2.5 h-2.5" /> {project.forks}
                    </span>
                  </div>
                  {project.tags[0] !== 'Software' && (
                    <span className="absolute top-2 right-2 px-1.5 sm:px-2 py-0.5 bg-black/60 backdrop-blur-sm text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-300 rounded-full">
                      {project.tags[0]}
                    </span>
                  )}
                </div>
                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
                  <h4 className="text-sm sm:text-base font-black text-white capitalize line-clamp-1 mb-1">{project.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-3 flex-1">{project.description}</p>
                  <div className="flex items-center justify-between pt-2.5 border-t border-white/5">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="text-[10px] sm:text-xs font-black text-white hover:text-yellow-400 uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                      Source <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                    {project.homepage && (
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-yellow-600/10 text-yellow-400 hover:bg-yellow-500 hover:text-slate-950 transition-all" aria-label="Live demo">
                        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
              className="flex flex-col items-center justify-center p-6 sm:p-8 bg-slate-900/30 rounded-xl sm:rounded-2xl border-2 border-dashed border-slate-700 hover:border-yellow-500/50 hover:bg-slate-900/50 transition-all gap-2.5 group"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-hover:text-white transition-colors" />
              <p className="font-black text-slate-500 group-hover:text-white text-[10px] sm:text-xs uppercase tracking-widest transition-colors text-center">
                All Repositories
              </p>
            </motion.a>
          </div>
        )}
      </div>
    </div>
  );
}
