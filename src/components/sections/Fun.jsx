import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Zap, Flame, Code2 } from 'lucide-react';
import { ACHIEVEMENTS, PUBLICATION, IMPACT_METRICS } from '../../data/profile';

const HACKATHONS = [
  { name: 'Hack4Delhi', result: 'Participant', icon: '🏙️' },
  { name: 'CONVOLVE 4.0', result: 'Participant', icon: '🌀' },
  { name: 'Code Clash', result: 'Participant', icon: '⚔️' },
];

export default function Fun() {
  return (
    <div className="max-w-4xl mx-auto pb-4 sm:pb-10 space-y-5 sm:space-y-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <p className="section-label mb-2 sm:mb-3">Social Proof</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-heading tracking-tight mb-2">
          Recognition & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-brand-body text-xs sm:text-sm md:text-base">Research, competitions, and national recognition.</p>
      </motion.div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
      >
        {IMPACT_METRICS.map((m) => (
          <div key={m.label} className="premium-card p-3 sm:p-4 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-brand-heading tabular-nums leading-none">{m.value}{m.suffix}</p>
            <p className="text-[8px] sm:text-[9px] text-brand-muted font-bold uppercase tracking-widest mt-1.5">{m.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Top achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="premium-card p-4 sm:p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden hover:border-brand-teal/30 transition-all duration-300"
        >
          <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-brand-teal/5 rounded-full blur-2xl" aria-hidden />
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-soft-teal rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 border border-brand-teal/10">
            <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-brand-teal" />
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-teal tabular-nums">Top</div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-heading mb-2 sm:mb-3 tabular-nums">1,000</div>
          <h3 className="font-black text-brand-heading text-sm sm:text-base md:text-lg mb-1">National Innovator</h3>
          <p className="text-brand-body font-medium text-xs sm:text-sm leading-relaxed">
            Ranked among 10,000+ nationwide participants for innovation and technical impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="premium-card p-4 sm:p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden hover:border-brand-teal/30 transition-all duration-300"
        >
          <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-cta-yellow/5 rounded-full blur-2xl" aria-hidden />
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-soft-yellow rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 border border-cta-yellow/10">
            <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cta-yellow" />
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-cta-yellow tabular-nums">Top</div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-heading mb-2 sm:mb-3 tabular-nums">25</div>
          <h3 className="font-black text-brand-heading text-sm sm:text-base md:text-lg mb-1">HP Dreams Unlocked</h3>
          <p className="text-brand-body font-medium text-xs sm:text-sm leading-relaxed">
            Top 25 Finalist (Tech Track) for Study Copilot — Dabba AI platform.
          </p>
        </motion.div>
      </div>

      {/* Hackathons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-brand-section/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] border border-brand-border/60"
      >
        <h3 className="font-black text-brand-heading text-base sm:text-lg md:text-xl mb-4 sm:mb-5 flex items-center gap-2">
          <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal shrink-0" />
          Hackathons
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {HACKATHONS.map((h) => (
            <div key={h.name} className="flex items-center gap-2.5 sm:gap-3 bg-white p-3 sm:p-4 rounded-xl border border-brand-border/60 hover:border-brand-teal/20 transition-all"
              style={{ boxShadow: '0 1px 3px rgba(15, 23, 42, 0.03)' }}
            >
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal shrink-0" aria-hidden />
              <div className="min-w-0">
                <p className="text-brand-heading font-bold text-xs sm:text-sm truncate">{h.name}</p>
                <p className="text-brand-muted text-[10px] sm:text-xs">{h.result}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* IEEE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="premium-card p-4 sm:p-5 md:p-6 border-brand-teal/20 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-soft-teal rounded-xl sm:rounded-2xl border border-brand-teal/10 flex items-center justify-center shrink-0">
          <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal" />
        </div>
        <div className="min-w-0">
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-brand-teal mb-1.5">
            IEEE Publication · {PUBLICATION.year}
          </p>
          <p className="text-brand-heading font-bold text-xs sm:text-sm md:text-base leading-snug">{PUBLICATION.title}</p>
          <p className="text-brand-body text-xs sm:text-sm mt-1.5 leading-relaxed">{PUBLICATION.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
