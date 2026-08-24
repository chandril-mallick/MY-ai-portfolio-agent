import React from 'react';
import { User, Folder, Zap, Trophy, Send, BookOpen, Rocket } from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
  { id: 'about',    label: 'Me',       icon: User },
  { id: 'journey',  label: 'Story',    icon: BookOpen },
  { id: 'startups', label: 'Ventures', icon: Rocket },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'skills',   label: 'Skills',   icon: Zap },

  { id: 'contact',  label: 'Contact',  icon: Send },
];

export default function Navbar({ activeSection, onNavigate, hidden = false }) {
  if (hidden) return null;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:bottom-6 lg:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-auto w-full"
      aria-label="Main navigation"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Floating pill navigation */}
      <div
        className={clsx(
          'flex items-stretch md:justify-center md:gap-1',
          'justify-around',
          'p-1 sm:p-1.5 md:p-2',
          /* Light premium glass */
          'bg-white/90 backdrop-blur-xl border border-brand-border/80',
          /* Mobile: flat top bar; md+: floating pill */
          'rounded-t-2xl md:rounded-[2rem]',
          'border-b-0 md:border-b',
          'w-full md:w-auto mx-auto',
          'overflow-hidden',
        )}
        style={{ boxShadow: '0 -2px 12px rgba(15, 23, 42, 0.04), 0 4px 24px rgba(15, 23, 42, 0.08)' }}
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(isActive ? 'home' : item.id)}
              className={clsx(
                /* Base layout */
                'relative flex flex-col items-center justify-center',
                /* Sizing */
                'flex-1 md:flex-none md:w-[4.25rem]',
                /* Height */
                'h-[3rem] sm:h-[3.25rem] md:h-14',
                /* Rounded, transitions */
                'rounded-xl md:rounded-2xl transition-all duration-250 py-0.5',
                'min-w-0',
                /* Colors */
                isActive
                  ? 'text-white font-black'
                  : 'text-brand-muted hover:text-brand-dark active:bg-brand-section',
              )}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active bg — teal */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl md:rounded-2xl -z-10 bg-brand-teal shadow-teal-glow" />
              )}
              {/* Active indicator dot — mobile only */}
              {isActive && (
                <span className="absolute -top-px left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white md:hidden" aria-hidden />
              )}

              <Icon
                className={clsx(
                  'w-[1.1rem] h-[1.1rem] sm:w-5 sm:h-5 shrink-0',
                  isActive && 'stroke-[2.5px]',
                )}
              />
              <span
                className={clsx(
                  'font-black uppercase tracking-wide mt-0.5 max-w-full leading-none',
                  'text-[6.5px] sm:text-[7.5px] md:text-[9px]',
                  'truncate px-0.5 w-full text-center',
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
