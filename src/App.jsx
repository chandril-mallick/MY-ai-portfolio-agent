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

// Modal Wrapper for Sections
const SectionModal = ({ title, active, children }) => {
  if (!active) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 flex items-center justify-center p-4 pb-24 md:p-12 md:pb-32 pointer-events-none"
    >
      <div className="bg-white/90 backdrop-blur-xl w-full max-w-5xl h-full max-h-[85vh] rounded-3xl shadow-2xl border border-white/50 overflow-hidden flex flex-col pointer-events-auto">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white/50 shrink-0">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-transparent text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden relative cursor-none">
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
          <SectionModal key="about" title="About Me" active={activeSection === 'about'}>
            <About />
          </SectionModal>
          
          <SectionModal key="projects" title="Featured Projects" active={activeSection === 'projects'}>
            <Projects />
          </SectionModal>
          
          <SectionModal key="skills" title="Technical Skills" active={activeSection === 'skills'}>
            <Skills />
          </SectionModal>
          
          <SectionModal key="fun" title="Fun & Interests" active={activeSection === 'fun'}>
            <Fun />
          </SectionModal>
          
          <SectionModal key="contact" title="Get in Touch" active={activeSection === 'contact'}>
            <Contact />
          </SectionModal>
        </AnimatePresence>
      </main>

      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
    </div>
  );
}

export default App;
