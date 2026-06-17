import React from 'react';
import { Info } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-4 md:px-12 py-3 md:py-6 pointer-events-none safe-top">
      <div className="flex flex-col items-start gap-0.5 pointer-events-auto min-w-0 max-w-[70%]">
        <span className="text-[10px] sm:text-xs md:text-sm font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80 truncate w-full">
          Chandril Mallick
        </span>
        <span className="text-[9px] sm:hidden font-bold text-slate-500 uppercase tracking-widest">
          AI · ML Engineer
        </span>
      </div>
      <button
        type="button"
        className="touch-target p-2.5 md:p-3 transition-all rounded-2xl hover:bg-white/10 pointer-events-auto group shrink-0"
        aria-label="About this portfolio"
      >
        <Info className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-white transition-colors" />
      </button>
    </header>
  );
}
