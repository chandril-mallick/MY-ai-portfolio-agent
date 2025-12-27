import React, { useEffect, useState, useRef } from 'react';
import { Github, ExternalLink, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const GITHUB_USERNAME = 'chandril-mallick';

const COLORS = [
  'bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-orange-500', 'bg-pink-500', 'bg-cyan-500'
];

export default function Projects() {
  const containerRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        
        // Filter out forks if desired, currently keeping them
        const formattedData = data.map((repo, index) => ({
          id: repo.id,
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), // Humanize names
          originalName: repo.name,
          description: repo.description || "No description provided.",
          tags: repo.language ? [repo.language] : [], // Use language as main tag
          link: repo.html_url,
          homepage: repo.homepage,
          color: COLORS[index % COLORS.length] // Cycle colors
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
      <div className="h-full flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center text-red-500">
        <p>Could not load projects. Please check your connection.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar flex items-center gap-6 px-4 md:px-12 py-8" ref={containerRef}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex-shrink-0 w-80 md:w-96 h-[450px] bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Project Image - Using GitHub Open Graph */}
            <div className="h-48 shrink-0 bg-gray-100 relative overflow-hidden group-hover:opacity-100 transition-opacity">
               <img 
                 src={`https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${project.originalName}`}
                 alt={project.title}
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.parentElement.classList.add(project.color);
                 }}
               />
               
               {/* Fallback pattern if image fails to load or is just the default */}
               <div className={`absolute inset-0 ${project.color} bg-opacity-20 flex items-center justify-center opacity-0 pointer-events-none -z-10`}>
                 <span className={`text-4xl font-bold ${project.color.replace('bg-', 'text-')} opacity-50`}>
                   {project.title.substring(0, 2).toUpperCase()}
                 </span>
               </div>
            </div>

            {/* Content Body - Fills remaining space */}
            <div className="p-6 flex flex-col flex-1 min-h-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 capitalize truncate leading-tight" title={project.title}>
                {project.title}
              </h3>
              
              <div className="flex-1 overflow-hidden">
                <p className="text-gray-500 leading-relaxed text-sm line-clamp-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.tags.slice(0, 3).map(tag => ( // Limit tags to 3 to save space
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="pt-2 mt-auto border-t border-gray-50 flex items-center gap-4">
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                 >
                    View Code <ArrowRight className="w-4 h-4" />
                 </a>
                 <div className="flex gap-2 ml-auto">
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    {project.homepage && (
                      <a 
                        href={project.homepage}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                      >
                          <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Link to full GitHub Profile */}
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: projects.length * 0.1 }}
            className="flex-shrink-0 w-48 h-[400px] flex items-center justify-center"
          >
            <a 
              href={`https://github.com/${GITHUB_USERNAME}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-current flex items-center justify-center group-hover:border-blue-600 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
              <span className="font-medium text-center">View More on<br/>GitHub</span>
            </a>
          </motion.div>
      </div>
    </div>
  );
}
