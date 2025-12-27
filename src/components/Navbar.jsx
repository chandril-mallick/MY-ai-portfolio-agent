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
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(isActive ? 'home' : item.id)}
              className={clsx(
                "relative flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300",
                isActive ? "text-blue-600 bg-blue-50" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute inset-0 bg-blue-100/50 rounded-xl -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={clsx("w-6 h-6 mb-1", isActive && "stroke-[2.5px]")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
