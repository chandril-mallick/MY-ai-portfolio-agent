import React from 'react';
import { Info } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Header({ onAbout }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-3 sm:px-4 md:px-12 py-3 md:py-5 pointer-events-none safe-top">
      <button
        type="button"
        onClick={onAbout}
        className="flex flex-col items-start gap-0.5 pointer-events-auto min-w-0 max-w-[75%] text-left rounded-2xl bg-white/80 backdrop-blur-xl border border-brand-border/60 hover:border-brand-teal/30 px-3 py-2 sm:px-4 sm:py-2.5 -ml-1 transition-all duration-200"
        style={{ boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)' }}
        aria-label="Open about section"
      >
        <span className="text-[10px] sm:text-xs md:text-sm font-black text-brand-dark uppercase tracking-[0.2em] sm:tracking-[0.3em] truncate w-full">
          {PROFILE.name}
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold text-brand-body uppercase tracking-widest truncate w-full">
          {PROFILE.title} · Brainware University
        </span>
      </button>
      <button
        type="button"
        onClick={onAbout}
        className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 transition-all rounded-2xl bg-white/80 backdrop-blur-xl border border-brand-border/60 hover:border-brand-teal/30 pointer-events-auto group shrink-0"
        style={{ boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)' }}
        aria-label="About Chandril Mallick"
      >
        <Info className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-teal group-hover:scale-110 transition-transform" />
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-brand-dark group-hover:text-brand-teal transition-colors">
          About
        </span>
      </button>
    </header>
  );
}
