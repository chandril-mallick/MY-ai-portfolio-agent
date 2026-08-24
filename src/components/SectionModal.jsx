import React, { useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { X } from 'lucide-react';

export default function SectionModal({ title, active, onClose, children }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
            'flex items-end sm:items-center justify-center',
            'p-0 sm:p-4 md:p-6 lg:p-8',
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
              /* Background — white with blur */
              'bg-white sm:bg-white/95 backdrop-blur-xl',
              /* Border + shadow */
              'border border-brand-border/80',
            ].join(' ')}
            style={{ boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08), 0 20px 60px rgba(15, 23, 42, 0.12)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Drag handle (mobile only) ── */}
            <div className="sm:hidden flex justify-center pt-2.5 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-brand-border" aria-hidden />
            </div>

            {/* ── Top color accent bar (Scroll Progress) ── */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-brand-teal origin-left z-50"
              style={{ scaleX }} 
            />

            {/* ── Modal header ── */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 border-b border-brand-border/60 bg-brand-bg/50 shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-1.5 sm:w-2 h-5 sm:h-6 md:h-8 bg-brand-teal rounded-full shrink-0" />
                <h2
                  id="section-modal-title"
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-brand-heading tracking-tight truncate"
                >
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="touch-target flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 hover:bg-brand-section rounded-xl sm:rounded-2xl transition-all text-brand-muted hover:text-brand-dark group shrink-0 border border-transparent hover:border-brand-border"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* ── Scrollable content ── */}
            <div
              ref={scrollRef}
              className={[
                'flex-1 overflow-y-auto overflow-x-hidden',
                'p-4 sm:p-6 md:p-8 lg:p-10',
                'scroll-smooth overscroll-contain',
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
