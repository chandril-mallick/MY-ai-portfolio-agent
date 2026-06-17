import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/profile';

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 pb-6 sm:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed px-1">
          Full-stack AI engineering — from{' '}
          <span className="text-blue-400 font-bold">RAG &amp; LLM pipelines</span> to{' '}
          <span className="text-purple-400 font-bold">FastAPI deployment</span>.
        </p>
      </motion.div>

      {SKILL_CATEGORIES.map((category, categoryIndex) => (
        <div key={category.title}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.08 }}
            className="text-lg sm:text-xl font-black text-white mb-4 sm:mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-1 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            {category.title}
          </motion.h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {category.skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: categoryIndex * 0.08 + index * 0.02 }}
                className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-white/5 text-xs sm:text-sm font-bold text-slate-300 hover:border-blue-500/30 hover:text-white transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
