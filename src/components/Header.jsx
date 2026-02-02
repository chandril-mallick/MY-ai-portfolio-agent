import React from 'react';
import { Info } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-8 pointer-events-none">
      <div className="flex items-center space-x-2 pointer-events-auto">
        <span className="text-sm font-black text-white uppercase tracking-[0.3em] opacity-80">Chandril Mallick</span>
      </div>
      <button className="p-3 transition-all rounded-2xl hover:bg-white/10 pointer-events-auto group">
        <Info className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
      </button>
    </header>
  );
}
