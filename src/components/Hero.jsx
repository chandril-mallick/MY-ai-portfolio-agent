import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  ArrowRight, Bot, User, Sparkles, UserCircle, Rocket, Code2, Mail,
  Terminal as TerminalIcon, Download, Calendar, Briefcase, ChevronDown, Volume2,
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { PROFILE, IMPACT_METRICS } from '../data/profile';
import { getAIResponse } from '../lib/getAIResponse';
import { playSound } from '../lib/sound';

const SUGGESTED_PROMPTS = [
  { label: "What's PathShala AI?", query: "What is PathShala AI?" },
  { label: "What's your tech stack?", query: "What is your tech stack?" },
  { label: "Tell me about your experience.", query: "Tell me about your experience." }
];

function MagneticButton({ children, as: Component = 'button', ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150, mass: 0.1 });
  const springY = useSpring(y, { damping: 15, stiffness: 150, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component {...props}>{children}</Component>
    </motion.div>
  );
}

/* Animated counter */
function AnimatedCounter({ value, suffix }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.floor(eased * value));
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="tabular-nums">{display}{suffix}</span>;
}

export default function Hero({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const msgId = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  const appendMessage = useCallback((role, content) => {
    msgId.current += 1;
    setChatLog((prev) => [...prev, { id: msgId.current, role, content }]);
  }, []);

  const handleSearch = useCallback(
    (text) => {
      const { content, target } = getAIResponse(text);
      playSound('success');
      appendMessage('assistant', content);
      setIsThinking(false);
      setTimeout(() => onNavigate(target), 2000);
    },
    [appendMessage, onNavigate]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() || isThinking) return;
    playSound('click');
    const userMsg = query.trim();
    appendMessage('user', userMsg);
    setQuery('');
    setIsThinking(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    handleSearch(userMsg);
  };

  return (
    <div className="w-full min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 lg:px-8
                    pt-[calc(4rem+env(safe-area-inset-top,0px))]
                    pb-[calc(5rem+env(safe-area-inset-bottom,0px))]">
      <div className="w-full max-w-7xl mx-auto">

        {/* TWO-PANEL HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-center mb-8 sm:mb-10">

          {/* LEFT PANEL: Identity + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex flex-col gap-5 sm:gap-6 min-w-0"
          >
            {/* Avatar + status */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    src={PROFILE.avatar}
                    alt={PROFILE.name}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                    loading="eager"
                  />
                </div>
                <span
                  className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-slate-950 shadow-md"
                  title="Open to Work"
                  aria-label="Open to work"
                />
              </div>
              <div className="min-w-0">
                <p className="text-white font-black text-sm sm:text-base tracking-tight truncate">{PROFILE.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shrink-0" aria-hidden />
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest truncate">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4 min-w-0">
              <p className="section-label text-slate-500">IEEE Researcher · AI Engineer</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.1] tracking-tight">
                Building AI Products<br />
                That Solve Real Problems.
              </h1>
              <div className="space-y-1">
                <p className="text-sm sm:text-base md:text-lg text-slate-300 font-black tracking-tight">
                  IEEE Researcher
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  Building PathShala AI.
                </p>
              </div>
            </div>

            {/* Metrics strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {IMPACT_METRICS.slice(0, 4).map((m) => (
                <div
                  key={m.label}
                  className="bg-slate-900/60 border border-white/8 rounded-xl p-2.5 sm:p-3 text-center"
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-white leading-none">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1 leading-tight">{m.label}</p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <MagneticButton
                as="a"
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary text-sm"
                id="hero-download-resume"
              >
                <Download className="w-4 h-4 shrink-0" aria-hidden />
                <span className="whitespace-nowrap">Download Resume</span>
              </MagneticButton>
              <MagneticButton
                as="button"
                type="button"
                onClick={() => onNavigate('contact')}
                className="cta-primary text-sm"
                id="hero-hire-me"
              >
                <Briefcase className="w-4 h-4 shrink-0" aria-hidden />
                <span className="whitespace-nowrap">Hire Me</span>
              </MagneticButton>
              <MagneticButton
                as="a"
                href={PROFILE.calendly}
                className="cta-secondary text-sm"
                id="hero-book-meeting"
              >
                <Calendar className="w-4 h-4 shrink-0" aria-hidden />
                <span className="whitespace-nowrap">Book a Meeting</span>
              </MagneticButton>
            </div>
          </motion.div>

          {/* RIGHT PANEL: AI Chatbot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
            className="w-full flex flex-col gap-2.5 sm:gap-3 min-w-0"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between px-0.5 h-10 sm:h-12">
              <div className="flex items-center gap-2 min-w-0">
                <Bot className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Ask My AI Assistant</span>
              </div>
              <div className="relative">
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => {
                        setShowTooltip(false);
                        onNavigate('terminal');
                      }}
                      className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-slate-800 text-white text-[10px] font-black uppercase tracking-wider py-1.5 px-3 rounded-lg shadow-lg border border-white/10 z-30 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Interactive Terminal Console</span>
                      <span className="animate-pulse">❯</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  type="button"
                  onClick={() => {
                    setShowTooltip(false);
                    onNavigate('terminal');
                  }}
                  className="relative bg-white/5 hover:bg-white/10 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-white/10 shrink-0 transition-all active:scale-95 text-slate-400 hover:text-white"
                  title="Open Interactive Terminal"
                  aria-label="Open Interactive Terminal"
                >
                  <TerminalIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </button>
              </div>
            </div>

            {/* Chat window */}
            <div className="modern-glass rounded-2xl sm:rounded-[1.75rem] p-3.5 sm:p-5 md:p-6
                            min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]
                            flex flex-col gap-3 sm:gap-4 relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

              {/* Messages */}
              <div
                className="flex-1 min-h-0 overflow-y-auto space-y-3 sm:space-y-4 no-scrollbar scroll-smooth overscroll-contain"
                aria-live="polite"
                aria-label="Chat messages"
              >
                <AnimatePresence initial={false}>
                  {chatLog.length === 0 && !isThinking && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full min-h-[140px] sm:min-h-[180px] flex flex-col items-center justify-center text-center gap-3 sm:gap-4 py-6 sm:py-8"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                        <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-slate-400" />
                      </div>
                      <div className="space-y-1.5 px-2">
                        <p className="text-white text-base sm:text-lg font-black tracking-tight">
                          Hi, I&apos;m {PROFILE.name.split(' ')[0]}&apos;s AI
                        </p>
                        <p className="text-slate-400 max-w-xs mx-auto text-xs sm:text-sm font-medium leading-relaxed">
                          Ask about Dabba AI, SmartSant-IoT, Samsung internship, IEEE publication, or skills.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {chatLog.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 12 : -12, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-2 max-w-[90%] sm:max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div
                          className={`hidden sm:flex w-7 h-7 sm:w-8 sm:h-8 rounded-xl items-center justify-center shrink-0 ${
                            msg.role === 'user' ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400 border border-slate-700'
                          }`}
                          aria-hidden
                        >
                          {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                        </div>
                        <div
                          className={`p-3 sm:p-4 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed shadow-lg break-words ${
                            msg.role === 'user'
                              ? 'bg-slate-700 text-white rounded-tr-sm'
                              : 'bg-slate-800/80 text-white border border-white/5 rounded-tl-sm backdrop-blur-xl'
                          }`}
                        >
                          {msg.content}
                        </div>
                        {msg.role === 'assistant' && (
                          <button
                            type="button"
                            onClick={() => {
                              if ('speechSynthesis' in window) {
                                window.speechSynthesis.cancel();
                                const utterance = new SpeechSynthesisUtterance(msg.content);
                                utterance.rate = 1.05;
                                window.speechSynthesis.speak(utterance);
                              }
                            }}
                            className="touch-target p-1.5 self-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 border border-white/5 shrink-0 transition-all active:scale-95 ml-1"
                            title="Speak message"
                            aria-label="Speak message"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        )}
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
                      <div className="flex gap-2.5 items-center bg-slate-800/50 px-3.5 py-2.5 rounded-2xl border border-white/5">
                        <div className="flex gap-1" aria-hidden>
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce" />
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 font-black tracking-widest uppercase">Analyzing...</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Suggested Prompts */}
              <div className="space-y-2 border-t border-white/5 pt-3 shrink-0">
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Suggested Prompts:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {SUGGESTED_PROMPTS.map((p, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      onClick={() => {
                        if (isThinking) return;
                        appendMessage('user', p.label);
                        setIsThinking(true);
                        setTimeout(() => handleSearch(p.query), 300);
                      }}
                      disabled={isThinking}
                      className="touch-target flex items-center justify-center text-center px-2 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[10px] font-bold text-slate-300 hover:text-white transition-all active:scale-95 disabled:opacity-50"
                    >
                      <span className="truncate">{p.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="relative flex items-center shrink-0">
                <label htmlFor="cm-ai-input" className="sr-only">Message CM AI</label>
                <input
                  id="cm-ai-input"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about projects, skills, research..."
                  disabled={isThinking}
                  enterKeyHint="send"
                  autoComplete="off"
                  className="w-full min-w-0 pl-3.5 sm:pl-5 pr-12 sm:pr-14 py-3 sm:py-3.5 bg-slate-950/80 backdrop-blur-3xl border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-white/30 focus:ring-4 focus:ring-white/5 transition-all text-sm shadow-inner"
                />
                <button
                  type="submit"
                  disabled={isThinking || !query.trim()}
                  className="touch-target absolute right-1.5 sm:right-2 p-2 sm:p-2.5 bg-white hover:bg-slate-200 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 rounded-lg sm:rounded-xl transition-all active:scale-95"
                  aria-label="Send message"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center"
        >
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors group"
            aria-label="Explore more"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-white transition-colors" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
