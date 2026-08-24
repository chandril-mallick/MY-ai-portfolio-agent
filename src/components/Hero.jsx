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
  { label: "Tell me about your experience.", query: "Tell me about your experience." },
  { label: "What projects have you built?", query: "What projects have you built?" },
  { label: "Tell me about your research.", query: "Tell me about your research." },
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

/* Stat icons */
const STAT_ICONS = [
  <Rocket className="w-4 h-4 text-brand-teal" key="rocket" />,
  <Code2 className="w-4 h-4 text-brand-teal" key="code" />,
  <Sparkles className="w-4 h-4 text-brand-teal" key="spark" />,
  <UserCircle className="w-4 h-4 text-brand-teal" key="user" />,
];

export default function Hero({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const msgId = useRef(0);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog, isThinking]);

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
                    pt-[calc(5.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(6.5rem+env(safe-area-inset-top,0px))]
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
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white ring-2 ring-brand-border"
                  style={{ boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)' }}
                >
                  <img
                    src={PROFILE.avatar}
                    alt={PROFILE.name}
                    className="w-full h-full object-cover"
                    width={64}
                    height={64}
                    loading="eager"
                  />
                </div>
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-[2.5px] border-brand-bg animate-pulse-subtle"
                  title="Open to Work"
                  aria-label="Open to work"
                />
              </div>
              <div className="min-w-0">
                <p className="text-brand-dark font-black text-sm sm:text-base tracking-tight truncate">{PROFILE.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shrink-0" aria-hidden />
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest truncate">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4 min-w-0">
              <p className="section-label">IEEE Researcher · AI Engineer</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-brand-heading leading-[1.1] tracking-tight">
                Building AI Products<br />
                That Solve <span className="text-brand-teal relative">
                  Real Problems.
                  <span className="absolute bottom-0 left-0 h-[3px] bg-brand-teal/30 rounded-full animate-underline-draw" />
                </span>
              </h1>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed font-medium">
                Building PathShala AI.
              </p>
            </div>

            {/* Metrics strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {IMPACT_METRICS.slice(0, 4).map((m, i) => (
                <div
                  key={m.label}
                  className="premium-card p-2.5 sm:p-3 text-center"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    {STAT_ICONS[i]}
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-brand-heading leading-none">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-brand-muted font-bold uppercase tracking-widest mt-1 leading-tight">{m.label}</p>
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
                className="cta-hire text-sm"
                id="hero-hire-me"
              >
                <Briefcase className="w-4 h-4 shrink-0" aria-hidden />
                <span className="whitespace-nowrap">Hire Me</span>
              </MagneticButton>
              <MagneticButton
                as="a"
                href={PROFILE.calendly}
                target="_blank"
                rel="noopener noreferrer"
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
                <Bot className="w-4 h-4 text-brand-teal shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-body">Ask My AI Assistant</span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('terminal')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-brand-section text-brand-dark border border-brand-border hover:border-brand-teal/40 rounded-xl transition-all shadow-sm active:scale-95 text-[10px] font-black uppercase tracking-wider group shrink-0"
                title="Open Interactive Terminal Console"
                aria-label="Open Interactive Terminal Console"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-brand-teal group-hover:scale-110 transition-transform" />
                <span>Terminal</span>
                <span className="text-brand-teal opacity-70 group-hover:translate-x-0.5 transition-transform">❯</span>
              </button>
            </div>

            {/* Chat window */}
            <div className="bg-white rounded-[1.75rem] p-3.5 sm:p-5 md:p-6
                            min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]
                            flex flex-col gap-3 sm:gap-4 relative overflow-hidden border border-brand-border/80"
              style={{ boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06), 0 12px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 157, 138, 0.04)' }}
            >
              {/* Subtle top gradient */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-soft-teal/30 via-transparent to-transparent pointer-events-none rounded-t-[1.75rem]" />

              {/* Messages */}
              <div
                className="flex-1 min-h-0 overflow-y-auto space-y-3 sm:space-y-4 no-scrollbar scroll-smooth overscroll-contain relative"
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
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-soft-teal rounded-2xl flex items-center justify-center border border-brand-teal/10">
                        <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-brand-teal" />
                      </div>
                      <div className="space-y-1.5 px-2">
                        <p className="text-brand-heading text-base sm:text-lg font-black tracking-tight">
                          Hi, I&apos;m {PROFILE.name.split(' ')[0]}&apos;s AI
                        </p>
                        <p className="text-brand-body max-w-xs mx-auto text-xs sm:text-sm font-medium leading-relaxed">
                          Ask about Dabba AI, SmartSant-IoT, Samsung internship, IEEE publication, skills, projects, or experience.
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
                            msg.role === 'user' ? 'bg-brand-teal text-white' : 'bg-soft-teal text-brand-teal border border-brand-teal/10'
                          }`}
                          aria-hidden
                        >
                          {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                        </div>
                        <div
                          className={`p-3 sm:p-4 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed break-words ${
                            msg.role === 'user'
                              ? 'bg-brand-teal text-white rounded-tr-sm shadow-teal-glow'
                              : 'bg-brand-section text-brand-dark border border-brand-border rounded-tl-sm'
                          }`}
                          style={msg.role === 'assistant' ? { boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)' } : {}}
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
                            className="touch-target p-1.5 self-center rounded-xl bg-white hover:bg-brand-section text-brand-muted border border-brand-border shrink-0 transition-all active:scale-95 ml-1"
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
                      <div className="flex gap-2.5 items-center bg-brand-section px-3.5 py-2.5 rounded-2xl border border-brand-border">
                        <div className="flex gap-1" aria-hidden>
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal rounded-full animate-bounce" />
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal rounded-full animate-bounce [animation-delay:-0.3s]" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-brand-body font-black tracking-widest uppercase">Analyzing...</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={chatEndRef} />
              </div>

              {/* Active Project Highlight Bar to balance right panel */}
              <div className="flex items-center justify-between px-3 py-2 bg-brand-section/80 border border-brand-border/60 rounded-xl text-[10px] text-brand-body font-medium shrink-0">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                  <span className="font-bold text-brand-dark">Active Build:</span>
                  <span className="truncate text-brand-body">PathShala AI (RAG & NLP)</span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="text-brand-teal font-bold hover:underline shrink-0 ml-2 uppercase text-[9px] tracking-wider"
                >
                  View Projects →
                </button>
              </div>

              {/* Suggested Prompts */}
              <div className="space-y-2 border-t border-brand-border/60 pt-3 shrink-0">
                <p className="text-[9px] text-brand-muted font-bold uppercase tracking-widest">Suggested Prompts:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {SUGGESTED_PROMPTS.map((p, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      onClick={() => {
                        if (isThinking) return;
                        appendMessage('user', p.label);
                        setIsThinking(true);
                        setTimeout(() => handleSearch(p.query), 300);
                      }}
                      disabled={isThinking}
                      className="touch-target flex items-center justify-center text-center px-2.5 py-1.5 bg-brand-section hover:bg-soft-teal border border-brand-border hover:border-brand-teal/30 rounded-xl text-[10px] font-bold text-brand-body hover:text-brand-teal transition-all active:scale-95 disabled:opacity-50"
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
                  className="w-full min-w-0 pl-3.5 sm:pl-5 pr-12 sm:pr-14 py-3 sm:py-3.5 bg-brand-section border border-brand-border rounded-xl sm:rounded-2xl text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-teal/50 focus:ring-4 focus:ring-brand-teal/10 transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={isThinking || !query.trim()}
                  className="touch-target absolute right-1.5 sm:right-2 p-2 sm:p-2.5 bg-brand-teal hover:bg-brand-teal-light disabled:bg-brand-border disabled:text-brand-muted text-white rounded-lg sm:rounded-xl transition-all active:scale-95"
                  aria-label="Send message"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* High Contrast Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center"
        >
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-soft-teal text-brand-dark hover:text-brand-teal border border-brand-border hover:border-brand-teal/30 rounded-full transition-all shadow-sm active:scale-95 group font-bold text-xs"
            aria-label="Explore portfolio"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Explore Sections</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-brand-teal group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
