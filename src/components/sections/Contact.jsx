import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Globe, FileDown } from 'lucide-react';
import { PROFILE } from '../../data/profile';

const PHONE_HREF = `tel:${PROFILE.phone.replace(/[^\d+]/g, '')}`;

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-10 px-1"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Let&apos;s work together</h3>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Open to internships, research collaborations, and AI engineering roles.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
      >
        <a
          href={`mailto:${PROFILE.email}`}
          className="flex items-center gap-3 p-4 modern-glass rounded-2xl text-slate-300 hover:text-white hover:border-blue-500/30 transition-all text-sm font-medium"
        >
          <Mail className="w-5 h-5 text-blue-400 shrink-0" />
          <span className="truncate">{PROFILE.email}</span>
        </a>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-3 p-4 modern-glass rounded-2xl text-slate-300 hover:text-white hover:border-blue-500/30 transition-all text-sm font-medium"
        >
          <Phone className="w-5 h-5 text-blue-400 shrink-0" />
          <span>{PROFILE.phone}</span>
        </a>
        <div className="sm:col-span-2 flex items-center gap-3 p-4 modern-glass rounded-2xl text-slate-400 text-sm">
          <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
          {PROFILE.location}
        </div>
        <a
          href={PROFILE.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:col-span-2 flex items-center justify-center gap-2 p-4 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30 font-black text-sm uppercase tracking-wider transition-all"
        >
          <FileDown className="w-4 h-4" />
          Download Resume (PDF)
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="modern-glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl"
      >
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
          }}
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-1.5">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              required
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-base"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1.5">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              required
              type="email"
              inputMode="email"
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-base"
              placeholder="hello@example.com"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium resize-none text-base"
              placeholder="Tell me about your opportunity..."
            />
          </div>
          <button
            type="submit"
            className="touch-target w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-base sm:text-lg transition-all active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center flex-wrap gap-4 mt-8"
      >
        {[
          { icon: Linkedin, label: 'LinkedIn', href: PROFILE.linkedin },
          { icon: Github, label: 'GitHub', href: PROFILE.github },
          { icon: Globe, label: 'Website', href: PROFILE.portfolio },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target flex flex-col items-center gap-1.5 p-3 modern-glass rounded-2xl text-slate-400 hover:text-blue-400 transition-all min-w-[4.5rem]"
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
