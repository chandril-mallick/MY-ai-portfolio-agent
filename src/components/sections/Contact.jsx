import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Globe, FileDown, Calendar, Briefcase, MessageSquare } from 'lucide-react';
import { PROFILE } from '../../data/profile';

const PHONE_HREF = `tel:${PROFILE.phone.replace(/[^\d+]/g, '')}`;

const PRIMARY_CTAS = [
  {
    id: 'contact-resume',
    icon: FileDown,
    label: 'Download Resume',
    sublabel: 'PDF · 2026',
    href: PROFILE.resumeUrl,
    target: '_blank',
    style: 'bg-brand-teal hover:bg-brand-teal-light text-white border-brand-teal shadow-glow',
  },
  {
    id: 'contact-meeting',
    icon: Calendar,
    label: 'Book a Meeting',
    sublabel: '30-min intro',
    href: PROFILE.calendly,
    target: '_blank',
    style: 'bg-white hover:bg-brand-section text-brand-dark border-brand-border',
  },
  {
    id: 'contact-hire',
    icon: Briefcase,
    label: 'Open to Work',
    sublabel: 'AI / Full Stack',
    href: `mailto:${PROFILE.email}?subject=Hiring%20Inquiry`,
    target: '_blank',
    style: 'bg-cta-yellow hover:bg-yellow-300 text-brand-dark border-cta-yellow shadow-glow-yellow',
  },
];

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto w-full pb-4 sm:pb-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6 sm:mb-8">
        <p className="section-label mb-2 sm:mb-3">Let&apos;s Connect</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-heading tracking-tight mb-2 sm:mb-3">
          Have a problem worth <span className="gradient-text">solving?</span>
        </h2>
        <p className="text-brand-body text-xs sm:text-sm md:text-base leading-relaxed">
          Let&apos;s build something meaningful with AI.
        </p>
      </motion.div>

      {/* Primary CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-4 sm:mb-6"
      >
        {PRIMARY_CTAS.map((cta) => {
          const Icon = cta.icon;
          return (
            <a
              key={cta.id}
              id={cta.id}
              href={cta.href}
              target={cta.target}
              rel="noopener noreferrer"
              className={[
                'flex sm:flex-col items-center sm:items-center justify-start sm:justify-center',
                'gap-3 sm:gap-1.5',
                'p-3.5 sm:p-4 md:p-5',
                'rounded-xl sm:rounded-2xl border font-bold transition-all duration-200',
                'sm:text-center active:scale-95',
                cta.style,
              ].join(' ')}
              style={{ boxShadow: cta.id === 'contact-meeting' ? '0 1px 3px rgba(15, 23, 42, 0.04)' : undefined }}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden />
              <div className="sm:text-center">
                <p className="text-sm font-black leading-tight">{cta.label}</p>
                <p className="text-[10px] opacity-70 font-medium leading-tight">{cta.sublabel}</p>
              </div>
            </a>
          );
        })}
      </motion.div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6"
      >
        <a
          href={`mailto:${PROFILE.email}`}
          className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 premium-card text-brand-body hover:text-brand-teal transition-all text-xs sm:text-sm font-medium min-w-0"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal shrink-0" />
          <span className="truncate">{PROFILE.email}</span>
        </a>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 premium-card text-brand-body hover:text-brand-teal transition-all text-xs sm:text-sm font-medium"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal shrink-0" />
          <span>{PROFILE.phone}</span>
        </a>
        <div className="sm:col-span-2 flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 premium-card text-brand-body text-xs sm:text-sm">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal shrink-0" />
          {PROFILE.location}
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="premium-card p-4 sm:p-6 md:p-8 mb-4 sm:mb-6"
      >
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-teal shrink-0" aria-hidden />
          <h3 className="text-xs sm:text-sm font-black text-brand-heading uppercase tracking-widest">Send a Message</h3>
        </div>
        <form
          className="space-y-3 sm:space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
          }}
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="contact-name" className="block text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                type="text"
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-brand-section border border-brand-border text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-teal/50 focus:ring-4 focus:ring-brand-teal/10 transition-all font-medium text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest mb-1.5">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                required
                type="email"
                inputMode="email"
                autoComplete="email"
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-brand-section border border-brand-border text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-teal/50 focus:ring-4 focus:ring-brand-teal/10 transition-all font-medium text-sm"
                placeholder="hello@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-widest mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-brand-section border border-brand-border text-brand-dark placeholder:text-brand-muted focus:outline-none focus:border-brand-teal/50 focus:ring-4 focus:ring-brand-teal/10 transition-all font-medium resize-none text-sm"
              placeholder="Tell me about your opportunity..."
            />
          </div>
          <button
            type="submit"
            className="touch-target w-full py-3 sm:py-4 bg-brand-teal hover:bg-brand-teal-light text-white rounded-lg sm:rounded-xl font-black text-sm sm:text-base transition-all active:scale-[0.98] shadow-glow"
          >
            Send Message →
          </button>
        </form>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center flex-wrap gap-2 sm:gap-3"
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
            className="touch-target flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 premium-card text-brand-body hover:text-brand-teal transition-all"
            aria-label={item.label}
          >
            <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs font-bold">{item.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
