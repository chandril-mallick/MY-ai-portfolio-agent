import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Zap } from 'lucide-react';
import { ACHIEVEMENTS, PUBLICATION } from '../../data/profile';

export default function Fun() {
  return (
    <div className="max-w-4xl mx-auto pb-6 sm:pb-12 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-2"
      >
        <p className="text-slate-400 text-sm sm:text-base">
          Research, competitions, and national recognition.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="modern-glass p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] flex flex-col items-center text-center"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-4 border border-yellow-500/20">
            <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500" />
          </div>
          <h3 className="font-black text-white text-lg sm:text-xl mb-2 uppercase tracking-wider">
            Top 1,000 Innovator
          </h3>
          <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
            Ranked among 10,000+ nationwide participants for innovation and technical impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="modern-glass p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] flex flex-col items-center text-center"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 border border-blue-500/20">
            <Award className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
          </div>
          <h3 className="font-black text-white text-lg sm:text-xl mb-2 uppercase tracking-wider">
            HP Dreams Unlocked
          </h3>
          <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
            Top 25 Finalist (Tech Track) for Study Copilot — Dabba AI platform.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-900/40 p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-white/5"
      >
        <h3 className="font-black text-white text-lg sm:text-xl mb-4 flex items-center gap-2 uppercase tracking-wider">
          <Zap className="w-5 h-5 text-cyan-400" />
          Highlights
        </h3>
        <ul className="space-y-3">
          {ACHIEVEMENTS.map((item) => (
            <li
              key={item}
              className="flex gap-3 items-start text-slate-400 text-sm sm:text-base font-medium bg-slate-800/30 p-4 rounded-2xl border border-white/5"
            >
              <span className="text-blue-500 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="modern-glass p-5 sm:p-6 rounded-2xl border border-purple-500/20"
      >
        <p className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-2">
          IEEE Publication · {PUBLICATION.year}
        </p>
        <p className="text-white font-bold text-sm sm:text-base leading-snug">{PUBLICATION.title}</p>
      </motion.div>
    </div>
  );
}
