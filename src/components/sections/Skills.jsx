import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Box, 
  Globe, 
  Layers, 
  Zap, 
  BarChart3, 
  Search, 
  Brain, 
  Image as ImageIcon, 
  FileText,
  Cloud,
  Code2,
  Atom
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "Applied Machine Learning & GenAI",
    skills: [
      { name: "Python", icon: Terminal, color: "from-blue-400 to-blue-600" },
      { name: "LangChain", icon: Layers, color: "from-green-400 to-emerald-600" },
      { name: "PyTorch", icon: Zap, color: "from-orange-500 to-red-600" },
      { name: "MLflow", icon: BarChart3, color: "from-blue-400 to-indigo-600" },
      { name: "RAG Pipeline", icon: Cpu, color: "from-purple-400 to-pink-600" },
      { name: "Transformers", icon: Brain, color: "from-yellow-400 to-orange-500" },
      { name: "Weights & Biases", icon: BarChart3, color: "from-yellow-400 to-yellow-600" },
      { name: "NumPy", icon: Code2, color: "from-blue-400 to-cyan-600" },
      { name: "FAISS", icon: Search, color: "from-gray-400 to-gray-600" },
      { name: "OpenCV", icon: ImageIcon, color: "from-emerald-400 to-teal-600" },
      { name: "Pandas", icon: Database, color: "from-blue-600 to-indigo-800" },
      { name: "HuggingFace", icon: Brain, color: "from-yellow-300 to-yellow-500" },
      { name: "PaddleOCR", icon: FileText, color: "from-red-400 to-red-600" },
      { name: "OpenAI", icon: Zap, color: "from-green-500 to-emerald-700" }
    ]
  },
  {
    title: "Software Engineering & Systems",
    skills: [
      { name: "Docker", icon: Box, color: "from-blue-400 to-blue-600" },
      { name: "Flutter", icon: Layers, color: "from-cyan-400 to-blue-500" },
      { name: "Node.js", icon: Terminal, color: "from-green-400 to-green-600" },
      { name: "Dart", icon: Zap, color: "from-blue-500 to-indigo-600" },
      { name: "Git", icon: Box, color: "from-orange-400 to-red-500" },
      { name: "React", icon: Atom, color: "from-cyan-300 to-blue-400" },
      { name: "MySQL", icon: Database, color: "from-blue-500 to-blue-700" },
      { name: "Java", icon: Code2, color: "from-red-500 to-red-700" },
      { name: "Next.js", icon: Layers, color: "from-gray-700 to-black" },
      { name: "Firebase", icon: Cloud, color: "from-yellow-400 to-orange-500" },
      { name: "Tailwind CSS", icon: Globe, color: "from-cyan-400 to-teal-400" },
      { name: "Supabase", icon: Database, color: "from-emerald-400 to-green-600" },
      { name: "HTML5", icon: Globe, color: "from-orange-500 to-red-600" },
      { name: "CSS3", icon: ImageIcon, color: "from-blue-500 to-indigo-600" },
      { name: "SQLite", icon: Database, color: "from-blue-400 to-blue-600" }
    ]
  }
];

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16 pb-6 sm:pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed px-1">
          Mastering the full AI lifecycle: from <span className="text-blue-400 font-bold">deep model research</span> to <span className="text-purple-400 font-bold">scalable cloud deployment</span>.
        </p>
      </motion.div>
      
      {SKILL_CATEGORIES.map((category, categoryIndex) => (
        <div key={category.title}>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="text-lg sm:text-xl font-black text-white mb-5 sm:mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-1 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
            {category.title}
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {category.skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (categoryIndex * 0.1) + (index * 0.02) }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-3 sm:p-5 bg-slate-800/40 rounded-xl sm:rounded-2xl border border-white/5 hover:bg-slate-800/60 hover:border-blue-500/30 transition-all cursor-default overflow-hidden backdrop-blur-sm shadow-xl"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="flex flex-col items-center gap-2 sm:gap-4 text-center">
                    <div className="p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300 group-hover:text-white transition-all duration-300" />
                    </div>
                    <span className="font-bold text-slate-300 text-xs sm:text-sm group-hover:text-white transition-colors leading-tight">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
