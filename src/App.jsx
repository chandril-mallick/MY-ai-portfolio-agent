import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Fun from './components/sections/Fun';
import Contact from './components/sections/Contact';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const SectionModal = ({ title, active, onClose, children }) => {
  if (!active) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4 sm:pb-24 md:pb-28 pointer-events-none safe-top"
    >
      <div className="bg-slate-900/95 sm:bg-slate-900/80 backdrop-blur-3xl w-full sm:max-w-6xl h-[92dvh] sm:h-full sm:max-h-[85dvh] rounded-t-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col pointer-events-auto relative safe-bottom">
        <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-white/20" aria-hidden />
        </div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        <div className="px-4 py-4 sm:p-6 md:p-8 border-b border-white/5 flex justify-between items-center gap-3 bg-white/5 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-600 rounded-full shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight truncate">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="touch-target p-2.5 sm:p-3 hover:bg-white/10 rounded-2xl transition-all text-slate-400 hover:text-white group shrink-0"
            aria-label="Close"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 md:p-12 scroll-smooth overscroll-contain">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-[100dvh] bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <CustomCursor />
      <FluidBackground />
      <Header />

      <main className="relative z-0 min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <Hero key="hero" onNavigate={setActiveSection} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeSection !== 'home' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => setActiveSection('home')}
              aria-hidden
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          <SectionModal key="about" title="About Me" active={activeSection === 'about'} onClose={() => setActiveSection('home')}>
            <About />
          </SectionModal>

          <SectionModal key="projects" title="Featured Projects" active={activeSection === 'projects'} onClose={() => setActiveSection('home')}>
            <Projects />
          </SectionModal>

          <SectionModal key="skills" title="Technical Skills" active={activeSection === 'skills'} onClose={() => setActiveSection('home')}>
            <Skills />
          </SectionModal>

          <SectionModal key="fun" title="Fun & Interests" active={activeSection === 'fun'} onClose={() => setActiveSection('home')}>
            <Fun />
          </SectionModal>

          <SectionModal key="contact" title="Get in Touch" active={activeSection === 'contact'} onClose={() => setActiveSection('home')}>
            <Contact />
          </SectionModal>
        </AnimatePresence>
      </main>

      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
    </div>
  );
}

export default App;
