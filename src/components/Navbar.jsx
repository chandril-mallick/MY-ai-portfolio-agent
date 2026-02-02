import React from 'react';
import { User, Folder, Zap, Smile, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const NAV_ITEMS = [
  { id: 'about', label: 'Me', icon: User },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'fun', label: 'Fun', icon: Smile },
  { id: 'contact', label: 'Contact', icon: Send },
];

export default function Navbar({ activeSection, onNavigate }) {
  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 modern-glass rounded-3xl border border-white/10 shadow-3xl">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(isActive ? 'home' : item.id)}
              className={clsx(
                "relative flex flex-col items-center justify-center w-20 h-16 rounded-2xl transition-all duration-300",
                isActive ? "text-white" : "text-slate-500 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute inset-0 bg-blue-600 rounded-2xl -z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={clsx("w-6 h-6 mb-1.5", isActive && "stroke-[2.5px]")} />
              <span className="text-[10px] font-black uppercase tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
