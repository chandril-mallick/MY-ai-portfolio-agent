import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12 px-1"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Let&apos;s work together</h3>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Have a project in mind or just want to chat? I&apos;m always open to new opportunities and collaborations.
        </p>
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
            window.location.href = `mailto:chandrilmallick1@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
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
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="touch-target w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-base sm:text-lg shadow-glow transition-all active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-12"
      >
        {[
          { icon: Mail, label: 'Email', href: 'mailto:chandrilmallick1@gmail.com' },
          { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chandril-mallick-522b61259' },
          { icon: Github, label: 'GitHub', href: 'https://github.com/chandril-mallick' },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target flex flex-col items-center gap-1.5 p-3 modern-glass rounded-2xl text-slate-400 hover:text-blue-400 transition-all"
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
