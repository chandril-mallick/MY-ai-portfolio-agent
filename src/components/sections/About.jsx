import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, CheckCircle2 } from 'lucide-react';
import {
  PROFILE,
  SUMMARY,
  EDUCATION,
  EXPERIENCE,
  PUBLICATION,
} from '../../data/profile';

export default function About() {
  return (
    <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto pb-6 sm:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-none text-slate-300"
      >
        <p className="text-2xl sm:text-3xl md:text-4xl leading-tight font-black tracking-tight text-white">
          {PROFILE.title}
        </p>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-slate-400 mt-3 sm:mt-4">
          <span className="text-blue-500 font-black">{PROFILE.subtitle.split('·')[0].trim()}</span>
          {' · '}
          Building production-ready RAG systems &amp; AI applications
        </p>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-400 max-w-3xl">
          {SUMMARY}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/40 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-2xl border border-blue-500/20">
              <GraduationCap className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">Education</h3>
          </div>
          <p className="text-white font-bold">{EDUCATION.degree}</p>
          <p className="text-blue-400 text-sm font-bold mt-1">{EDUCATION.school}</p>
          <p className="text-slate-500 text-sm mt-1">{EDUCATION.period}</p>
          <p className="text-slate-400 text-sm mt-4 leading-relaxed">
            <span className="font-bold text-slate-300">Coursework: </span>
            {EDUCATION.coursework.join(', ')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/40 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-2xl border border-purple-500/20">
              <BookOpen className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">Publication</h3>
          </div>
          <p className="text-white font-bold text-sm sm:text-base leading-snug">{PUBLICATION.title}</p>
          <p className="text-purple-400 text-sm font-bold mt-2">
            {PUBLICATION.venue}, {PUBLICATION.year}
          </p>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">{PUBLICATION.description}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-slate-900/20 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] border border-white/5 shadow-inner"
      >
        <h3 className="text-white font-black text-xl sm:text-2xl mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4 uppercase tracking-widest">
          <div className="w-2 h-8 sm:h-10 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] shrink-0" />
          Experience
        </h3>
        <div className="space-y-8 sm:space-y-12">
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="relative pl-6 sm:pl-10 border-l-2 border-slate-800">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-slate-950 shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h4 className="font-black text-white text-lg sm:text-xl tracking-tight flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-400 hidden sm:inline" />
                  {exp.role}
                </h4>
                <span className="text-xs sm:text-sm text-slate-500 font-bold">{exp.period}</span>
              </div>
              <p className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">
                {exp.company}
              </p>
              <ul className="grid grid-cols-1 gap-3 text-slate-500">
                {exp.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 items-start bg-slate-800/30 p-4 rounded-2xl border border-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
