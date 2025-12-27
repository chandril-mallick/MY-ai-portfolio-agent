import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-10">
      {/* Introduction Block - High Impact */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-lg text-gray-700"
      >
        <p className="text-2xl leading-relaxed font-light">
          <span className="text-gray-900 font-bold block mb-2">Applied Machine Learning Engineer</span> 
          Architecting <span className="text-blue-600 font-semibold">production-grade AI systems</span> that bridge the gap between research and scalability. 
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          I build high-performance, distributed systems for **Health-Tech** and **Ed-Tech**. My focus is not just on model accuracy, but on the entire lifecycle: **low-latency inference**, **containerization**, and **reliable deployment** at scale.
        </p>
      </motion.div>

      {/* Metric/Highlight Cards - FAANG Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1 }}
           className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border border-blue-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
             <span className="text-2xl bg-blue-100 p-2 rounded-lg">🚀</span>
             <h3 className="text-gray-900 font-bold text-lg">Scalable Architecture</h3>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
             Designing <strong>microservices</strong> and <strong>event-driven backends</strong> that handle complex data pipelines. Experience with Docker, Kubernetes, and Cloud orchestration.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-3xl border border-purple-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
             <span className="text-2xl bg-purple-100 p-2 rounded-lg">🧠</span>
             <h3 className="text-gray-900 font-bold text-lg">Advanced RAG Systems</h3>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Engineering context-aware <strong>LLM applications</strong>. Optimizing vector retrieval (FAISS) and fine-tuning Transformer models for domain-specific accuracy.
          </p>
        </motion.div>
      </div>

      {/* Detailed Experience / flagship Projects contextualized */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md"
      >
        <h3 className="text-gray-900 font-bold text-xl mb-6 flex items-center gap-2">
          Engineering Impact
        </h3>
        <div className="space-y-8">
           <div className="relative pl-8 border-l-2 border-gray-100">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
             <h4 className="font-bold text-gray-900 text-lg">Dabba AI Ecosystem</h4>
             <p className="text-sm text-blue-600 font-medium mb-2">Flagship Ed-Tech Platform</p>
             <p className="text-gray-600 text-sm mb-3">
               Engineered an end-to-end <strong>RAG platform</strong> for private enterprise knowledge retrieval.
             </p>
             <ul className="list-disc list-outside ml-4 text-sm text-gray-500 space-y-1">
               <li>Implemented <strong>context-aware retrieval</strong> reducing hallucination rates by ~40%.</li>
               <li>Designed a <strong>privacy-first architecture</strong> handling sensitive institutional data.</li>
               <li>Optimized <strong>vector search latency</strong> for real-time user interaction.</li>
             </ul>
           </div>

           <div className="relative pl-8 border-l-2 border-gray-100">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 ring-4 ring-white"></div>
             <h4 className="font-bold text-gray-900 text-lg">SmartSant IoT</h4>
             <p className="text-sm text-green-600 font-medium mb-2">Health-Tech Innovation</p>
             <p className="text-gray-600 text-sm mb-3">
               Developed an AI-driven disease prediction system integrating IoT sensor data.
             </p>
             <ul className="list-disc list-outside ml-4 text-sm text-gray-500 space-y-1">
               <li>Deployed lightweight <strong>Computer Vision models</strong> on edge devices.</li>
               <li>Built a real-time alerting pipeline processing continuous sensor streams.</li>
             </ul>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
