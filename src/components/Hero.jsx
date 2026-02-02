import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Zap, Bot, User, Sparkles, UserCircle, Rocket, Code2, Mail, Info, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QUICK_QUERIES = [
  { label: "About Me", action: 'about', icon: UserCircle },
  { label: "View Projects", action: 'projects', icon: Rocket },
  { label: "Technical Skills", action: 'skills', icon: Code2 },
  { label: "Contact Info", action: 'contact', icon: Mail }
];

export default function Hero({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setChatLog([...chatLog, { role: 'user', content: userMsg }]);
    setQuery('');
    setIsThinking(true);

    // AI "Thinking" Simulation
    await new Promise(resolve => setTimeout(resolve, 1500));

    handleSearch(userMsg);
  };

  const handleSearch = (text) => {
    const lowerText = text.toLowerCase();
    let response = "";
    let target = "";

    if (lowerText.includes('about') || lowerText.includes('who are you') || lowerText.includes('bio')) {
      response = "I am an Applied ML Engineer focused on production-grade AI. Let me show you my profile.";
      target = 'about';
    } else if (lowerText.includes('project') || lowerText.includes('work') || lowerText.includes('build')) {
      response = "I've built several high-impact projects. Loading my featured repositories...";
      target = 'projects';
    } else if (lowerText.includes('skill') || lowerText.includes('tech') || lowerText.includes('stack')) {
      response = "My stack covers the entire AI lifecycle. Opening my technical skills section.";
      target = 'skills';
    } else if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('hire')) {
      response = "I'm always open to new opportunities. Here's how you can reach me.";
      target = 'contact';
    } else if (lowerText.includes('fun') || lowerText.includes('interest')) {
      response = "Beyond coding, I enjoy tech writing and open source. Check it out!";
      target = 'fun';
    } else {
      response = "I'm not sure about that, but let's start with my background.";
      target = 'about';
    }

    setChatLog(prev => [...prev, { role: 'assistant', content: response }]);
    setIsThinking(false);

    // Delay navigation so user can read the response
    setTimeout(() => {
      onNavigate(target);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-4 md:p-6 pb-32">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        
        {/* Chat Log Header / Agent Info */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-lg shadow-blue-500/20">
              <img src="/WhatsApp Image 2025-12-27 at 19.32.06.jpeg" alt="Chandril" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                CM AI <Sparkles className="w-4 h-4 text-blue-400" />
              </h2>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-slate-400 font-bold tracking-wider uppercase">Online</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-600/10 p-2 rounded-xl border border-blue-500/20">
            <Terminal className="w-5 h-5 text-blue-500" />
          </div>
        </div>

        {/* Conversation Area */}
        <div className="modern-glass rounded-[3rem] p-8 min-h-[450px] flex flex-col justify-end gap-6 relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="flex-1 overflow-y-auto space-y-8 px-2 no-scrollbar scroll-smooth">
            <AnimatePresence initial={false}>
              {chatLog.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center gap-6 py-12"
                >
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 ai-glow">
                    <Bot className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white text-2xl font-black tracking-tight">
                      How can I help you?
                    </p>
                    <p className="text-slate-400 max-w-xs mx-auto text-sm font-medium">
                      Ask me about Chandril's technical expertise, projects, or professional background.
                    </p>
                  </div>
                </motion.div>
              )}
              
              {chatLog.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                      msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400 border border-slate-700'
                    }`}>
                      {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>
                    <div className={`p-5 rounded-3xl text-sm md:text-base font-bold leading-relaxed shadow-xl ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-slate-800/80 text-white border border-white/5 rounded-tl-none backdrop-blur-xl'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isThinking && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-start"
                >
                   <div className="flex gap-4 items-center bg-slate-800/50 px-6 py-4 rounded-3xl border border-white/5 backdrop-blur-xl">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      </div>
                      <span className="text-xs text-blue-400 font-black tracking-widest uppercase">Analyzing...</span>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Suggestions Layered Higher to avoid overlap */}
          <div className="flex flex-wrap gap-2 px-2">
            {QUICK_QUERIES.map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.button
                  key={q.action}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  onClick={() => handleSearch(q.label)}
                  disabled={isThinking}
                  className="flex items-center gap-2.5 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-xs font-black text-slate-300 hover:text-white transition-all active:scale-95 uppercase tracking-wider"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {q.label}
                </motion.button>
              );
            })}
          </div>

          {/* Input Area */}
          <div className="relative group p-1">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Message Chandril AI..."
                disabled={isThinking}
                className="w-full pl-8 pr-20 py-6 bg-slate-950/80 backdrop-blur-3xl border-2 border-white/10 rounded-[2rem] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5 transition-all text-lg shadow-inner"
              />
              <button 
                type="submit"
                disabled={isThinking || !query.trim()}
                className="absolute right-4 p-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-2xl transition-all shadow-glow active:scale-95"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
