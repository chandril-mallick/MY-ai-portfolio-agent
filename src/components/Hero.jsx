import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onNavigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate finding an answer - just open 'about' for now
    onNavigate('about');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
    >
      <div className="relative mb-8">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full flex items-center justify-center p-1 shadow-xl border-4 border-white overflow-hidden">
           <img src="/WhatsApp Image 2025-12-27 at 19.32.06.jpeg" alt="Chandril Mallick" className="w-full h-full object-cover rounded-full" />
        </div>
        <motion.div 
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
          className="absolute -right-2 top-0 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-medium border border-gray-100"
        >
          AI Agent
        </motion.div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-6 tracking-tight">
     Hi, I'm Chandril Mallick
      </h1>

      <p className="text-gray-500 mb-10 text-lg max-w-md">
        I'm a Full Stack Developer with a focus on AI and Machine Learning.
      </p>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="flex-1 relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full pl-12 pr-14 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 focus:outline-none transition-all text-lg"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 aspect-square bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-colors shadow-md"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
        
        <button 
           onClick={() => window.open('/resume.pdf', '_blank')}
           className="px-6 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-sm text-gray-700 font-medium hover:bg-gray-50 hover:border-blue-300 transition-all whitespace-nowrap active:scale-95"
        >
          Resume
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl opacity-50" />
      </div>
    </motion.div>
  );
}
