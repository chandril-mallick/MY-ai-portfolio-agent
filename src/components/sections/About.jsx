import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Brain, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto pb-6 sm:pb-10">
      {/* Introduction Block - High Impact */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert max-w-none text-slate-300"
      >
        <p className="text-2xl sm:text-3xl md:text-4xl leading-tight font-black tracking-tight text-white">
          Applied Machine Learning Engineer
        </p>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-slate-400 mt-3 sm:mt-4">
          Architecting <span className="text-blue-500 font-black">production-grade AI systems</span> that bridge the gap between research and scalability. 
        </p>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-400 max-w-3xl">
          I build high-performance, distributed systems for **Health-Tech** and **Ed-Tech**. My focus is not just on model accuracy, but on the entire AI lifecycle: **low-latency inference**, **containerization**, and **reliable deployment** at scale.
        </p>
      </motion.div>

      {/* Metric/Highlight Cards - FAANG Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1 }}
           className="bg-slate-900/40 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md group hover:border-blue-500/30 transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-2xl border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                <Layers className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-white font-black text-xl tracking-tight">Scalable Architecture</h3>
          </div>
          <p className="text-slate-400 text-md leading-relaxed font-medium">
             Designing <strong>microservices</strong> and <strong>event-driven backends</strong> that handle complex data pipelines. Experience with Docker, Kubernetes, and Cloud orchestration.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="bg-slate-900/40 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md group hover:border-purple-500/30 transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-2xl border border-purple-500/20 group-hover:scale-110 group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-500">
                <Brain className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-white font-black text-xl tracking-tight">Advanced RAG Systems</h3>
          </div>
          <p className="text-slate-400 text-md leading-relaxed font-medium">
            Engineering context-aware <strong>LLM applications</strong>. Optimizing vector retrieval (FAISS) and fine-tuning Transformer models for domain-specific accuracy.
          </p>
        </motion.div>
      </div>

      {/* Detailed Experience / flagship Projects contextualized */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-slate-900/20 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] border border-white/5 shadow-inner"
      >
        <h3 className="text-white font-black text-xl sm:text-2xl mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4 uppercase tracking-widest">
          <div className="w-2 h-8 sm:h-10 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] shrink-0"></div>
          Engineering Impact
        </h3>
        <div className="space-y-8 sm:space-y-12">
           <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800">
             <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-slate-950 shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
             <h4 className="font-black text-white text-xl tracking-tight">Dabba AI Ecosystem</h4>
             <p className="text-md text-blue-400 font-bold mb-4 uppercase tracking-widest">Flagship Ed-Tech Platform</p>
             <p className="text-slate-400 text-md mb-4 leading-relaxed font-medium">
               Engineered an end-to-end <strong>RAG platform</strong> for private enterprise knowledge retrieval.
             </p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-500">
               <li className="flex gap-2 items-start bg-slate-800/30 p-4 rounded-2xl border border-white/5">
                 <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                 <span className="text-sm">Implemented context-aware retrieval reducing hallucination rates by ~40%.</span>
               </li>
               <li className="flex gap-2 items-start bg-slate-800/30 p-4 rounded-2xl border border-white/5">
                 <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                 <span className="text-sm">Designed a privacy-first architecture handling sensitive institutional data.</span>
               </li>
             </ul>
           </div>

           <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800">
             <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.8)]"></div>
             <h4 className="font-black text-white text-xl tracking-tight">SmartSant IoT</h4>
             <p className="text-md text-emerald-400 font-bold mb-4 uppercase tracking-widest">Health-Tech Innovation</p>
             <p className="text-slate-400 text-md mb-4 leading-relaxed font-medium">
               Developed an AI-driven disease prediction system integrating IoT sensor data.
             </p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-500">
               <li className="flex gap-2 items-start bg-slate-800/30 p-4 rounded-2xl border border-white/5">
                 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                 <span className="text-sm">Deployed lightweight Computer Vision models on edge devices.</span>
               </li>
               <li className="flex gap-2 items-start bg-slate-800/30 p-4 rounded-2xl border border-white/5">
                 <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                 <span className="text-sm">Built a real-time alerting pipeline processing continuous sensor streams.</span>
               </li>
             </ul>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
