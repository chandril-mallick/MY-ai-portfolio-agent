import React from 'react';
import { Info } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Header({ onAbout }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-3 sm:px-4 md:px-12 py-3 md:py-6 pointer-events-none safe-top">
      <button
        type="button"
        onClick={onAbout}
        className="flex flex-col items-start gap-0.5 pointer-events-auto min-w-0 max-w-[75%] text-left rounded-xl hover:bg-white/5 px-1 py-0.5 -ml-1 transition-colors"
        aria-label="Open about section"
      >
        <span className="text-[10px] sm:text-xs md:text-sm font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80 truncate w-full">
          {PROFILE.name}
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest truncate w-full">
          {PROFILE.title} · Brainware University
        </span>
      </button>
      <button
        type="button"
        onClick={onAbout}
        className="touch-target p-2.5 md:p-3 transition-all rounded-2xl hover:bg-white/10 pointer-events-auto group shrink-0"
        aria-label="About Chandril Mallick"
      >
        <Info className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-white transition-colors" />
      </button>
    </header>
  );
}
