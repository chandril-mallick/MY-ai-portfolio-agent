import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function SectionModal({ title, active, onClose, children }) {
  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, onClose]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="section-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 sm:pb-24 md:pb-28 pointer-events-none safe-top"
          role="dialog"
          aria-modal="true"
          aria-labelledby="section-modal-title"
        >
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="bg-slate-900/95 sm:bg-slate-900/80 backdrop-blur-3xl w-full sm:max-w-6xl h-[92dvh] sm:h-full sm:max-h-[85dvh] rounded-t-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col pointer-events-auto relative safe-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-white/20" aria-hidden />
            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

            <div className="px-4 py-4 sm:p-6 md:p-8 border-b border-white/5 flex justify-between items-center gap-3 bg-white/5 shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-600 rounded-full shrink-0" />
                <h2
                  id="section-modal-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight truncate"
                >
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="touch-target p-2.5 sm:p-3 hover:bg-white/10 rounded-2xl transition-all text-slate-400 hover:text-white group shrink-0"
                aria-label="Close"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 md:p-12 scroll-smooth overscroll-contain">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
