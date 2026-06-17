import React from 'react';
import { User, Folder, Zap, Trophy, Send } from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
  { id: 'about', label: 'Me', icon: User },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'fun', label: 'Awards', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Send },
];

export default function Navbar({ activeSection, onNavigate, hidden = false }) {
  if (hidden) return null;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-auto w-full safe-bottom"
      aria-label="Main navigation"
    >
      <div className="flex items-stretch justify-between md:justify-center gap-0 md:gap-2 p-1.5 md:p-2 modern-glass rounded-t-2xl md:rounded-3xl border border-white/10 border-b-0 md:border-b shadow-3xl w-full md:w-auto mx-auto max-w-[100vw]">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(isActive ? 'home' : item.id)}
              className={clsx(
                'relative flex flex-col items-center justify-center flex-1 md:w-[4.5rem] min-w-0 h-[3.25rem] md:h-16 rounded-xl md:rounded-2xl transition-all duration-300 py-1 touch-target',
                isActive ? 'text-white' : 'text-slate-500 hover:text-white active:bg-white/5'
              )}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && (
                <div
                  className={clsx(
                    'absolute inset-0 rounded-xl md:rounded-2xl -z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]',
                    'bg-blue-600/90 md:bg-blue-600'
                  )}
                />
              )}
              {isActive && (
                <span
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-300 md:hidden"
                  aria-hidden
                />
              )}
              <Icon className={clsx('w-5 h-5 sm:w-6 sm:h-6 shrink-0', isActive && 'stroke-[2.5px]')} />
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-wide mt-0.5 truncate max-w-full px-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
