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

// Modal Wrapper for Sections
const SectionModal = ({ title, active, onClose, children }) => {
  if (!active) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed inset-0 z-40 flex items-center justify-center p-4 pb-24 md:p-12 md:pb-32 pointer-events-none"
    >
      <div className="bg-slate-900/80 backdrop-blur-3xl w-full max-w-6xl h-full max-h-[85vh] rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col pointer-events-auto relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
             <h2 className="text-3xl font-black text-white tracking-tight">{title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-white/10 rounded-2xl transition-all text-slate-400 hover:text-white group"
          >
            <X className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 md:p-12 scroll-smooth no-scrollbar">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-hidden relative cursor-none">
      <CustomCursor />
      <FluidBackground />
      <Header />
      
      <main className="relative z-0 h-screen w-screen overflow-hidden">
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
                className="fixed inset-0 z-30 bg-gray-50/80 backdrop-blur-sm" 
                onClick={() => setActiveSection('home')} 
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
