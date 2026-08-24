import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Code, Cpu, BookOpen, Scroll, TrendingUp } from 'lucide-react';
import { TIMELINE } from '../../data/profile';

const TEAL_TIMELINE_STYLE = 'from-brand-teal/10 border-brand-teal/20 text-brand-teal';
const ICONS = [GraduationCap, Code, Cpu, BookOpen, Scroll, TrendingUp];

function TimelineNode({ item, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const IconComponent = ICONS[index % ICONS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
      className="relative flex gap-3 sm:gap-5 pb-8 sm:pb-12 last:pb-0"
    >
      {/* Vertical connector */}
      {!isLast && (
        <div className="absolute left-[19px] sm:left-[21px] top-10 sm:top-11 bottom-0 w-px bg-gradient-to-b from-brand-border to-transparent" />
      )}

      {/* Icon node */}
      <div className="flex-shrink-0 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br ${TEAL_TIMELINE_STYLE} border flex items-center justify-center text-base sm:text-xl`}
          style={{ boxShadow: '0 2px 8px rgba(15, 157, 138, 0.1)' }}
          aria-hidden
        >
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal shrink-0" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-0.5">
        <span className={`inline-block mb-1.5 sm:mb-2 px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${TEAL_TIMELINE_STYLE} border`}>
          {item.year}
        </span>
        <h3 className="text-brand-heading font-black text-sm sm:text-base md:text-lg tracking-tight mb-1">{item.title}</h3>
        <p className="text-brand-body text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-brand-section text-brand-body rounded-md sm:rounded-lg text-[8px] sm:text-[10px] font-bold uppercase tracking-wider border border-brand-border/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <div className="max-w-2xl mx-auto pb-4 sm:pb-10">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 sm:mb-12">
        <p className="section-label mb-2 sm:mb-3">My Story</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-heading tracking-tight mb-2 sm:mb-3">
          From Student to <span className="gradient-text">AI Founder</span>
        </h2>
        <p className="text-brand-body text-xs sm:text-sm md:text-base leading-relaxed">
          A timeline of key moments, breakthroughs, and ships.
        </p>
      </motion.div>

      <div>
        {TIMELINE.map((item, index) => (
          <TimelineNode
            key={item.year}
            item={item}
            index={index}
            isLast={index === TIMELINE.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
