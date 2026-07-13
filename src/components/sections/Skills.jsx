import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/profile';

const YELLOW_COLOR_MAP = {
  bar: 'bg-yellow-500',
  text: 'text-yellow-400',
  border: 'border-yellow-500/20',
  bg: 'bg-yellow-500/5'
};

const LEVEL_COLORS = {
  Expert:    'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Proficient:'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
  Familiar:  'text-slate-400 bg-slate-400/10 border-slate-400/20',
};

function SkillBar({ name, pct, categoryIndex, skillIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs sm:text-sm font-semibold text-slate-300 truncate">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: categoryIndex * 0.06 + skillIndex * 0.04 + 0.3 }}
          className={`text-[9px] sm:text-[10px] font-black tabular-nums shrink-0 ${YELLOW_COLOR_MAP.text}`}
        >
          {pct}%
        </motion.span>
      </div>
      <div className="h-1 sm:h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${YELLOW_COLOR_MAP.bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: categoryIndex * 0.06 + skillIndex * 0.04 + 0.1 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 pb-4 sm:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto px-2"
      >
        <p className="section-label mb-2 sm:mb-3">Technical Arsenal</p>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
          Full-stack AI engineering — from{' '}
          <span className="text-yellow-400 font-bold">RAG & LLM pipelines</span> to{' '}
          <span className="text-yellow-500 font-bold">FastAPI deployment</span>.
        </p>
      </motion.div>

      {/* 1-col mobile, 2-col sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        {SKILL_CATEGORIES.map((category, categoryIndex) => {
          const levelStyle = LEVEL_COLORS[category.level] || LEVEL_COLORS.Proficient;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.08 }}
              className={`${YELLOW_COLOR_MAP.bg} border ${YELLOW_COLOR_MAP.border} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4`}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 ${YELLOW_COLOR_MAP.bar}`} aria-hidden />
                  <h3 className="text-sm sm:text-base md:text-lg font-black text-white tracking-tight truncate">{category.title}</h3>
                </div>
                <span className={`status-badge border text-[8px] sm:text-[9px] shrink-0 ${levelStyle}`}>
                  {category.level}
                </span>
              </div>

              {/* Bars */}
              <div className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    pct={skill.pct}
                    categoryIndex={categoryIndex}
                    skillIndex={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
