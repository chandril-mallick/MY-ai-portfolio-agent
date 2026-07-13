import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, CheckCircle2, Award } from 'lucide-react';
import {
  PROFILE, SUMMARY, CREDENTIALS, EDUCATION, EXPERIENCE, PUBLICATION, CERTIFICATIONS,
} from '../../data/profile';

export default function About() {
  return (
    <div className="space-y-6 sm:space-y-10 max-w-5xl mx-auto pb-4 sm:pb-8">
      {/* Intro */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="section-label mb-2 sm:mb-3">Who I Am</p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-black tracking-tight text-white">
          AI Engineer & Full-Stack Developer
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium text-slate-400 mt-2 sm:mt-3">
          <span className="text-slate-200 font-black">{PROFILE.subtitle.split('·')[0].trim()}</span>
          {' · '}Building production-ready RAG systems & AI applications
        </p>
        <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
          {SUMMARY}
        </p>
        <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
          {CREDENTIALS.map((cred, i) => (
            <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs sm:text-sm font-medium text-slate-300">
              {cred}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Education + Publication — 1-col on mobile, 2-col on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/40 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 flex items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
            </div>
            <h3 className="text-white font-black text-base sm:text-lg md:text-xl tracking-tight">Education</h3>
          </div>
          <p className="text-white font-bold text-sm sm:text-base">{EDUCATION.degree}</p>
          <p className="text-slate-400 text-xs sm:text-sm font-bold mt-1">{EDUCATION.school}</p>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">{EDUCATION.period}</p>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
            <span className="font-bold text-slate-300">Coursework: </span>
            {EDUCATION.coursework.join(', ')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-slate-900/40 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 flex items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 shrink-0">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-black text-base sm:text-lg md:text-xl tracking-tight">IEEE Publication</h3>
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" /> {PUBLICATION.venue} · {PUBLICATION.year}
              </span>
            </div>
          </div>
          <p className="text-white font-semibold text-xs sm:text-sm md:text-base leading-snug mb-2 sm:mb-3">{PUBLICATION.title}</p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{PUBLICATION.description}</p>
        </motion.div>
      </div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-900/20 p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] border border-white/5"
      >
        <p className="section-label mb-1">Work Experience</p>
        <h3 className="text-white font-black text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 flex items-center gap-3">
          <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-slate-400 rounded-full shrink-0" />
          Experience
        </h3>
        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="relative pl-5 sm:pl-8 md:pl-10 border-l-2 border-slate-800">
              <div className="absolute -left-[9px] sm:-left-[11px] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-500 ring-4 ring-slate-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <h4 className="font-black text-white text-base sm:text-lg md:text-xl tracking-tight flex items-center gap-2 flex-wrap">
                  <Briefcase className="w-4 h-4 text-slate-400 shrink-0" aria-hidden />
                  {exp.role}
                </h4>
                <span className="text-[10px] sm:text-sm text-slate-500 font-bold shrink-0">{exp.period}</span>
              </div>
              <p className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs sm:text-sm">{exp.company}</p>
              <ul className="grid grid-cols-1 gap-2 sm:gap-3">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5 items-start bg-slate-800/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      {CERTIFICATIONS && CERTIFICATIONS.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <p className="section-label mb-3">Recognition & Certifications</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="bg-slate-900/40 border border-white/5 rounded-xl p-3 sm:p-4 flex items-start gap-2.5 sm:gap-3">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-white font-bold text-xs sm:text-sm truncate">{cert.name}</p>
                  <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
                  <p className="text-slate-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mt-1">{cert.type}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
