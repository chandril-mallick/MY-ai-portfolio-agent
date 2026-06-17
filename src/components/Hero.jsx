import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Bot, User, Sparkles, UserCircle, Rocket, Code2, Mail, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { getAIResponse } from '../lib/getAIResponse';

const QUICK_QUERIES = [
  { label: 'About Me', action: 'about', icon: UserCircle },
  { label: 'Projects', action: 'projects', icon: Rocket },
  { label: 'Skills', action: 'skills', icon: Code2 },
  { label: 'Contact', action: 'contact', icon: Mail },
];

export default function Hero({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const msgId = useRef(0);

  const appendMessage = useCallback((role, content) => {
    msgId.current += 1;
    setChatLog((prev) => [...prev, { id: msgId.current, role, content }]);
  }, []);

  const handleSearch = useCallback(
    (text) => {
      const { content, target } = getAIResponse(text);
      appendMessage('assistant', content);
      setIsThinking(false);
      setTimeout(() => onNavigate(target), 2000);
    },
    [appendMessage, onNavigate]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() || isThinking) return;
    const userMsg = query.trim();
    appendMessage('user', userMsg);
    setQuery('');
    setIsThinking(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    handleSearch(userMsg);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-3 sm:px-4 md:px-6 pt-16 sm:pt-20 pb-[calc(5.5rem+env(safe-area-inset-bottom))] safe-top">
      <div className="w-full max-w-3xl flex flex-col gap-4 sm:gap-6">
        <div className="flex items-center justify-between px-1 sm:px-4 gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-lg shadow-blue-500/20 shrink-0">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-white font-bold text-base sm:text-lg flex items-center gap-2 truncate">
                CM AI <Sparkles className="w-4 h-4 text-blue-400 shrink-0" aria-hidden />
              </h1>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" aria-hidden />
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold tracking-wider uppercase truncate">
                  {PROFILE.title}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-blue-600/10 p-2 rounded-xl border border-blue-500/20 shrink-0" aria-hidden>
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
          </div>
        </div>

        <div className="modern-glass rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] p-4 sm:p-6 md:p-8 min-h-[min(420px,58dvh)] sm:min-h-[450px] flex flex-col justify-end gap-4 sm:gap-6 relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

          <div
            className="flex-1 min-h-0 overflow-y-auto space-y-4 sm:space-y-8 px-0 sm:px-2 no-scrollbar scroll-smooth overscroll-contain"
            aria-live="polite"
            aria-label="Chat messages"
          >
            <AnimatePresence initial={false}>
              {chatLog.length === 0 && !isThinking && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[180px] flex flex-col items-center justify-center text-center gap-4 sm:gap-6 py-6 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 ai-glow">
                    <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                  </div>
                  <div className="space-y-2 px-2">
                    <p className="text-white text-xl sm:text-2xl font-black tracking-tight">
                      Hi, I&apos;m {PROFILE.name.split(' ')[0]}&apos;s AI
                    </p>
                    <p className="text-slate-400 max-w-sm mx-auto text-xs sm:text-sm font-medium">
                      Ask about Dabba AI, SmartSant-IoT, Samsung internship, IEEE publication, or skills.
                    </p>
                  </div>
                </motion.div>
              )}

              {chatLog.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 16 : -16, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex gap-2 sm:gap-4 max-w-[92%] sm:max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div
                      className={`hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl items-center justify-center shrink-0 shadow-lg ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-blue-400 border border-slate-700'
                      }`}
                      aria-hidden
                    >
                      {msg.role === 'user' ? (
                        <User className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                    <div
                      className={`p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-bold leading-relaxed shadow-xl break-words ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white rounded-tr-sm sm:rounded-tr-none'
                          : 'bg-slate-800/80 text-white border border-white/5 rounded-tl-sm sm:rounded-tl-none backdrop-blur-xl'
                      }`}
                    >
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
                  aria-label="CM AI is thinking"
                >
                  <div className="flex gap-3 items-center bg-slate-800/50 px-4 py-3 rounded-2xl border border-white/5">
                    <div className="flex gap-1.5" aria-hidden>
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    </div>
                    <span className="text-[10px] text-blue-400 font-black tracking-widest uppercase">
                      Analyzing...
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 px-0 sm:px-2">
            {QUICK_QUERIES.map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.button
                  key={q.action}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  onClick={() => {
                    if (isThinking) return;
                    appendMessage('user', q.label);
                    setIsThinking(true);
                    setTimeout(() => handleSearch(q.label), 300);
                  }}
                  disabled={isThinking}
                  className="touch-target flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black text-slate-300 hover:text-white transition-all active:scale-95 uppercase tracking-wider disabled:opacity-50"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{q.label}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="relative p-0 sm:p-1">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <label htmlFor="cm-ai-input" className="sr-only">
                Message CM AI
              </label>
              <input
                id="cm-ai-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about Dabba AI, skills, research..."
                disabled={isThinking}
                enterKeyHint="send"
                autoComplete="off"
                className="w-full pl-4 sm:pl-8 pr-14 sm:pr-20 py-4 sm:py-6 bg-slate-950/80 backdrop-blur-3xl border-2 border-white/10 rounded-xl sm:rounded-[2rem] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-base sm:text-lg shadow-inner"
              />
              <button
                type="submit"
                disabled={isThinking || !query.trim()}
                className="touch-target absolute right-2 sm:right-4 p-3 sm:p-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl sm:rounded-2xl transition-all shadow-glow active:scale-95"
                aria-label="Send message"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
