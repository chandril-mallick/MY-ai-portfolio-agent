import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, ShieldAlert } from 'lucide-react';
import { PROFILE, SKILL_CATEGORIES, FEATURED_PROJECTS } from '../../data/profile';

const BANNER = `
==================================================
  CHANDRIL MALLICK -- INTERACTIVE TERMINAL v2.0
  Type 'help' to see all available commands.
==================================================
`;

const THEME_STYLES = {
  yellow: {
    text: 'text-yellow-400',
    border: 'border-yellow-500/25',
    inputCaret: 'caret-yellow-400',
    matrixText: 'text-yellow-400',
    btnHover: 'hover:bg-yellow-500/20 hover:border-yellow-500/40 text-yellow-500'
  },
  green: {
    text: 'text-emerald-400',
    border: 'border-emerald-500/25',
    inputCaret: 'caret-emerald-400',
    matrixText: 'text-emerald-400',
    btnHover: 'hover:bg-emerald-500/20 hover:border-emerald-500/40 text-emerald-500'
  },
  cyan: {
    text: 'text-cyan-400',
    border: 'border-cyan-500/25',
    inputCaret: 'caret-cyan-400',
    matrixText: 'text-cyan-400',
    btnHover: 'hover:bg-cyan-500/20 hover:border-cyan-500/40 text-cyan-500'
  },
  red: {
    text: 'text-red-400',
    border: 'border-red-500/25',
    inputCaret: 'caret-red-400',
    matrixText: 'text-red-400',
    btnHover: 'hover:bg-red-500/20 hover:border-red-500/40 text-red-500'
  }
};

export default function TerminalConsole() {
  const [themeColor, setThemeColor] = useState('yellow');
  const [history, setHistory] = useState([
    { text: BANNER, isCmd: false },
    { text: "Type 'neofetch' for system info, 'matrix' or 'hack' for secret visual effects.", isCmd: false }
  ]);
  const [input, setInput] = useState('');
  const [matrixActive, setMatrixActive] = useState(false);
  const [hackActive, setHackActive] = useState(false);
  const [hackStage, setHackStage] = useState(0);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const currentTheme = THEME_STYLES[themeColor];

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, hackStage, hackActive]);

  // Focus input on click
  const handleTerminalClick = () => {
    if (!matrixActive && !hackActive) {
      inputRef.current?.focus();
    }
  };

  // Matrix Effect Timer
  useEffect(() => {
    if (matrixActive) {
      const timer = setTimeout(() => {
        setMatrixActive(false);
        setHistory((prev) => [
          ...prev,
          { text: 'matrix: Rain sequence terminated successfully.', isCmd: false }
        ]);
      }, 5000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [matrixActive]);

  // Intrusion sequence animation
  useEffect(() => {
    if (hackActive) {
      const stages = [
        'Connecting to gateway protocol: 192.168.1.100...',
        'Handshaking port 8080 (AI inference subsystem)...',
        'Extracting model weights: [=======>    ] 70%',
        'Decrypting local databases: SUCCESS',
        'Bypassing system firewall... UNLEASHING AI POWERED CHATBOT ENGINE',
        'INTRUSION COMPLETE. Access granted to root core.'
      ];

      if (hackStage < stages.length) {
        const timer = setTimeout(() => {
          setHistory((prev) => [...prev, { text: `[!] ${stages[hackStage]}`, isCmd: false }]);
          setHackStage((prev) => prev + 1);
        }, 800);
        return () => clearTimeout(timer);
      } else {
        setHackActive(false);
        setHackStage(0);
      }
    }
    return undefined;
  }, [hackActive, hackStage]);

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.toLowerCase().trim();
    const newLogs = [{ text: `visitor@chandril:~$ ${cmdText}`, isCmd: true }];

    if (cleanCmd === '') {
      setHistory((prev) => [...prev, ...newLogs]);
      return;
    }

    // Handle theme command specifically
    if (cleanCmd.startsWith('theme')) {
      const parts = cleanCmd.split(/\s+/);
      if (parts.length === 1) {
        newLogs.push({
          text: `Usage: theme [yellow | green | cyan | red]\nCurrent theme: ${themeColor}`,
          isCmd: false
        });
      } else {
        const t = parts[1];
        if (THEME_STYLES[t]) {
          setThemeColor(t);
          newLogs.push({ text: `Theme successfully updated to: ${t}`, isCmd: false });
        } else {
          newLogs.push({
            text: `Invalid theme color: ${t}. Choose from: yellow, green, cyan, red`,
            isCmd: false,
            isError: true
          });
        }
      }
      setHistory((prev) => [...prev, ...newLogs]);
      return;
    }

    switch (cleanCmd) {
      case 'help':
        newLogs.push({
          text: `Available commands:
  about       - Get bio/headline
  skills      - List core tech stack
  projects    - View featured builds
  contact     - Retrieve contact details
  neofetch    - System info & profile
  theme [col] - Switch console color (yellow/green/cyan/red)
  matrix      - Trigger retro falling rain sequence
  hack        - Simulate system firewall decryption
  clear       - Clear screen logs`,
          isCmd: false
        });
        break;

      case 'about':
        newLogs.push({
          text: `Headline: ${PROFILE.headline}
Bio: Accepted as a Machine Learning Engineering Intern at FlyRank AI. Optimizing ranking algorithms and ML workflows while building PathShala AI. Ready to solve complex problems.`,
          isCmd: false
        });
        break;

      case 'skills': {
        const skillsList = SKILL_CATEGORIES.map(
          (c) => `[${c.title} - ${c.level}]
  ${c.skills.map((s) => `${s.name} (${s.pct}%)`).join(', ')}`
        ).join('\n\n');
        newLogs.push({ text: skillsList, isCmd: false });
        break;
      }

      case 'projects': {
        const projectList = FEATURED_PROJECTS.map(
          (p) => `* ${p.title} (${p.subtitle})
  Tech: ${p.tags.join(', ')}
  Problem: ${p.problem}
  Solution: ${p.solution}`
        ).join('\n\n');
        newLogs.push({ text: projectList, isCmd: false });
        break;
      }

      case 'contact':
        newLogs.push({
          text: `Email: ${PROFILE.email}
Phone: ${PROFILE.phone}
Location: ${PROFILE.location}
LinkedIn: ${PROFILE.linkedin}
GitHub: ${PROFILE.github}
Calendly: ${PROFILE.calendly}`,
          isCmd: false
        });
        break;

      case 'neofetch':
        newLogs.push({
          text: `      _.._          chandril@portfolio
    .' .-'\`         ------------------
   /  /             OS: Brainware AI v2.6
   |  |             Kernel: React-19-Vite
   \\  \\             Uptime: 2h 45m
    '._'-._         Shell: zsh (antigravity)
       \`""\`         DE: Glassmorphism Gold
                    WM: Framer Motion
                    Terminal: CM Interactive v2
                    CPU: Apple M3 Max (Virtual)
                    Memory: 32 GB / 64 GB`,
          isCmd: false
        });
        break;

      case 'matrix':
        setMatrixActive(true);
        newLogs.push({ text: 'matrix: Initiating falling rain sequence...', isCmd: false });
        break;

      case 'hack':
        setHackActive(true);
        setHackStage(0);
        newLogs.push({ text: 'hack: Starting security intrusion script...', isCmd: false });
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        if (cleanCmd.startsWith('sudo')) {
          newLogs.push({
            text: 'sudo: Permission denied. Admin credentials required.',
            isCmd: false,
            isError: true
          });
        } else {
          newLogs.push({
            text: `command not found: ${cleanCmd}. Type 'help' for suggestions.`,
            isCmd: false,
            isError: true
          });
        }
    }

    setHistory((prev) => [...prev, ...newLogs]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div
      onClick={handleTerminalClick}
      className={`relative flex flex-col h-[70dvh] sm:h-[55dvh] bg-slate-950 border ${currentTheme.border} rounded-2xl overflow-hidden font-mono text-xs sm:text-sm ${currentTheme.text} p-4 shadow-2xl transition-all duration-300`}
    >
      {/* Matrix falling code overlay */}
      {matrixActive && (
        <div className="absolute inset-0 z-20 bg-slate-950/90 overflow-hidden select-none pointer-events-none flex flex-wrap justify-around">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className={`${currentTheme.matrixText} font-bold opacity-60 text-xs sm:text-sm leading-none animate-bounce`}
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                animationDuration: `${1.5 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {Array.from({ length: 25 }).map(() => String.fromCharCode(33 + Math.floor(Math.random() * 93))).join('')}
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>
      )}

      {/* Main logs display */}
      <div className="flex-1 overflow-y-auto space-y-2 no-scrollbar">
        {history.map((log, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap ${
              log.isError ? 'text-red-500 font-bold' : log.isCmd ? 'text-white font-bold' : currentTheme.text
            }`}
          >
            {log.text}
          </div>
        ))}
        {hackActive && (
          <div className="flex items-center gap-2 text-red-500 font-black animate-pulse">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>INTRUSION IN PROGRESS</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick theme selectors */}
      <div className="flex flex-wrap gap-2 mb-2 border-b border-white/5 pb-2 pt-1 shrink-0 items-center">
        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black mr-1">Console Theme:</span>
        {Object.keys(THEME_STYLES).map((t) => (
          <button
            key={t}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setThemeColor(t);
              setHistory((prev) => [...prev, { text: `Theme updated via selector: ${t}`, isCmd: false }]);
            }}
            className={`px-2 py-0.5 border text-[10px] font-black uppercase tracking-wider rounded-md transition-all active:scale-95 border-white/10 ${
              themeColor === t ? 'bg-yellow-500 text-slate-950 border-yellow-400' : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Cmd input line */}
      {!hackActive && (
        <div className="flex items-center gap-2 pt-1 mt-1 shrink-0">
          <span className="text-white font-black shrink-0">visitor@chandril:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={matrixActive}
            placeholder="Type 'help'..."
            className={`flex-1 bg-transparent text-white border-none outline-none ${currentTheme.inputCaret}`}
            autoFocus
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <span className="text-[10px] text-slate-500 font-bold shrink-0 hidden sm:inline flex items-center gap-1">
            Press Enter <CornerDownLeft className="w-3 h-3 inline" />
          </span>
        </div>
      )}
    </div>
  );
}
