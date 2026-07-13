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
          className={[
            'fixed inset-0 z-[60] pointer-events-none',
            /* Mobile: align to bottom edge | md+: center */
            'flex items-end sm:items-center justify-center',
            /* Padding: none on mobile (full-width sheet), comfortable on larger screens */
            'p-0 sm:p-4 md:p-6 lg:p-8',
            /* Bottom offset for navbar: none on mobile (modal covers nav), md+ offset */
            'sm:pb-[5rem] md:pb-[5.5rem] lg:pb-[6rem]',
          ].join(' ')}
          role="dialog"
          aria-modal="true"
          aria-labelledby="section-modal-title"
        >
          <motion.div
            initial={{ y: 56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 56, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className={[
              'pointer-events-auto relative overflow-hidden flex flex-col',
              /* Width */
              'w-full sm:max-w-5xl xl:max-w-6xl',
              /* Height */
              'h-[94dvh] sm:h-auto sm:max-h-[82dvh] md:max-h-[80dvh]',
              /* Border radius */
              'rounded-t-[1.5rem] sm:rounded-[1.5rem] md:rounded-[2rem]',
              /* Background + blur */
              'bg-slate-900/97 sm:bg-slate-900/90 backdrop-blur-3xl',
              /* Border + shadow */
              'border border-white/10',
              'shadow-[0_0_60px_rgba(0,0,0,0.6)]',
            ].join(' ')}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Drag handle (mobile only) ── */}
            <div className="sm:hidden flex justify-center pt-2.5 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-white/20" aria-hidden />
            </div>

            {/* ── Top color accent bar ── */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

            {/* ── Modal header ── */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 border-b border-white/5 bg-white/[0.03] shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-1.5 sm:w-2 h-5 sm:h-6 md:h-8 bg-yellow-500 rounded-full shrink-0" />
                <h2
                  id="section-modal-title"
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight truncate"
                >
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="touch-target flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 hover:bg-white/10 rounded-xl sm:rounded-2xl transition-all text-slate-400 hover:text-white group shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* ── Scrollable content ── */}
            <div
              className={[
                'flex-1 overflow-y-auto overflow-x-hidden',
                'p-4 sm:p-6 md:p-8 lg:p-10',
                'scroll-smooth overscroll-contain',
                /* Thin custom scrollbar on desktop */
                'thin-scrollbar',
              ].join(' ')}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
