import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronDown, ChevronUp, Globe, Linkedin } from 'lucide-react';
import { STARTUPS } from '../../data/profile';

const STATUS_STYLES = {
  Building: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  Stealth:  'bg-yellow-600/15 text-yellow-500 border-yellow-500/20',
  Prototype:'bg-yellow-500/10 text-slate-400 border-white/10',
  'Beta Cohort': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
};
const PULSE_COLORS = {
  Building: 'bg-yellow-500',
  Stealth:  'bg-yellow-600',
  Prototype:'bg-slate-400',
  'Beta Cohort': 'bg-yellow-400',
};
const CARD_GRADIENTS = [
  'from-yellow-600/10 via-transparent to-transparent border-yellow-500/20 hover:border-yellow-500/40',
];
const BLOB_COLOR = '#eab308'; // solid yellow-500

function StartupCard({ startup, index }) {
  const [expanded, setExpanded] = useState(false);
  const gradient = CARD_GRADIENTS[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      className={`relative rounded-xl sm:rounded-2xl md:rounded-[1.75rem] bg-gradient-to-br ${gradient} border p-4 sm:p-6 md:p-8 transition-all duration-300 overflow-hidden group`}
    >
      {/* Decorative blob */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ background: BLOB_COLOR }}
        aria-hidden
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          {startup.logoUrl ? (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 overflow-hidden shrink-0 bg-white flex items-center justify-center p-0.5 shadow-md">
              <img src={startup.logoUrl} alt={startup.name} className="w-full h-full object-contain" />
            </div>
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-yellow-500/20 bg-yellow-500/10 flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5 text-yellow-500" />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight leading-tight truncate">{startup.name}</h3>
            <p className="text-slate-400 text-xs sm:text-sm font-medium mt-0.5 line-clamp-1">{startup.tagline}</p>
          </div>
        </div>
        <span className={`status-badge border ${STATUS_STYLES[startup.status]} shrink-0 text-[8px] sm:text-[9px]`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse shrink-0 ${PULSE_COLORS[startup.status]}`} aria-hidden />
          {startup.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5">{startup.description}</p>

      {/* Expandable deep dive */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 sm:mb-5 space-y-3 sm:space-y-4 border-t border-white/5 pt-4 sm:pt-5"
        >
          <div>
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5">The Problem</p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{startup.problem}</p>
          </div>
          <div>
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5">The Solution</p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{startup.solution}</p>
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between flex-wrap gap-3 pt-3 border-t border-white/5 mt-1">
        <div className="flex items-center gap-2">
          {startup.website && (
            <a
              href={startup.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black rounded-lg text-[9px] sm:text-[10px] uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <Globe className="w-3.5 h-3.5" />
              Website
            </a>
          )}
          {startup.linkedin && (
            <a
              href={startup.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-[9px] sm:text-[10px] uppercase tracking-wider transition-all active:scale-95"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {startup.tech.map((t) => (
              <span key={t} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-slate-800/60 text-slate-400 rounded-md sm:rounded-lg text-[8px] sm:text-[10px] font-bold uppercase tracking-wider border border-white/5">
                {t}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((p) => !p)}
            className="flex items-center gap-1 text-[9px] sm:text-[10px] font-black text-slate-500 hover:text-slate-300 uppercase tracking-widest transition-colors shrink-0"
            aria-expanded={expanded}
          >
            {expanded ? 'Less' : 'Deep Dive'}
            {expanded ? <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Startups() {
  return (
    <div className="max-w-5xl mx-auto pb-4 sm:pb-10">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6 sm:mb-10">
        <p className="section-label mb-2 sm:mb-3">Ventures</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-2 sm:mb-3">
          Building the <span className="gradient-text">Future</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto">
          Products I&apos;m building to solve real problems in education and local language understanding.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5">
        {STARTUPS.map((startup, index) => (
          <StartupCard key={startup.id} startup={startup} index={index} />
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 sm:mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-slate-900/50 border border-white/5 rounded-lg sm:rounded-xl">
          <Rocket className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-500 shrink-0" aria-hidden />
          <span className="text-[10px] sm:text-xs text-slate-400 font-medium">More products in stealth — email me if curious</span>
        </div>
      </motion.div>
    </div>
  );
}
