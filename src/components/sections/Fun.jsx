import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Globe, Trophy, BookOpen } from 'lucide-react';

export default function Fun() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pb-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="modern-glass p-8 rounded-[2rem] flex flex-col items-center text-center group hover:border-blue-500/30 transition-all duration-500"
      >
        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
          <PenTool className="w-8 h-8 text-blue-500 group-hover:text-white" />
        </div>
        <h3 className="font-black text-white text-xl mb-3 uppercase tracking-wider">Tech Writer</h3>
        <p className="text-slate-400 font-medium leading-relaxed">
          Documenting my journey in System Design vs ML. Building a knowledge base for upcoming engineers.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="modern-glass p-8 rounded-[2rem] flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all duration-500"
      >
        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-500">
          <Globe className="w-8 h-8 text-emerald-500 group-hover:text-white" />
        </div>
        <h3 className="font-black text-white text-xl mb-3 uppercase tracking-wider">Open Source</h3>
        <p className="text-slate-400 font-medium leading-relaxed">
          Contributing to LangChain ecosystem and maintaining starter kits for RAG pipelines.
        </p>
      </motion.div>

       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-2 bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5 shadow-inner"
      >
        <h3 className="font-black text-white text-2xl mb-8 text-center uppercase tracking-[0.2em]">Recent Milestones</h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex items-center gap-4 bg-slate-800/40 px-6 py-4 rounded-2xl border border-white/5 group hover:border-yellow-500/30 transition-all">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <span className="text-slate-300 font-bold">Hackathon Winner 2024</span>
            </div>
            <div className="flex items-center gap-4 bg-slate-800/40 px-6 py-4 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-all">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <span className="text-slate-300 font-bold">20 Books in 2024</span>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
