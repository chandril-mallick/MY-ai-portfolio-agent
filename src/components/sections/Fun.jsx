import React from 'react';
import { motion } from 'framer-motion';

export default function Fun() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 flex flex-col items-center text-center"
      >
        <span className="text-4xl mb-4">✍️</span>
        <h3 className="font-bold text-indigo-900 text-xl mb-2">Tech Writer</h3>
        <p className="text-indigo-700/80">
          Documenting my journey in System Design vs ML. Building a knowledge base for upcoming engineers.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-teal-50 p-8 rounded-3xl border border-teal-100 flex flex-col items-center text-center"
      >
        <span className="text-4xl mb-4">🌐</span>
        <h3 className="font-bold text-teal-900 text-xl mb-2">Open Source</h3>
        <p className="text-teal-700/80">
          Contributing to LangChain ecosystem and maintaining starter kits for RAG pipelines.
        </p>
      </motion.div>

       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
      >
        <h3 className="font-bold text-gray-900 mb-4 text-center">Recent Achievements</h3>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-600">🏆 Hackathon Winner 2024</div>
            <div className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-600">📚 Read 20 Books in 2024</div>
        </div>
      </motion.div>
    </div>
  );
}
