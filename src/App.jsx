import { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Startups from './components/sections/Startups';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

import Contact from './components/sections/Contact';
import TerminalConsole from './components/sections/TerminalConsole';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import SectionModal from './components/SectionModal';
import { AnimatePresence, motion } from 'framer-motion';
import { playSound } from './lib/sound';

const SECTION_CONFIG = {
  about: { title: 'About Me', Content: About },
  journey: { title: 'My Story', Content: Journey },
  startups: { title: 'Building the Future', Content: Startups },
  projects: { title: 'Featured Projects', Content: Projects },
  skills: { title: 'Technical Skills', Content: Skills },

  contact: { title: 'Get in Touch', Content: Contact },
  terminal: { title: 'Interactive Console', Content: TerminalConsole },
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const isModalOpen = activeSection !== 'home' && SECTION_CONFIG[activeSection];
  const section = SECTION_CONFIG[activeSection];

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
      return undefined;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleNavigate = (sectionId) => {
    playSound(sectionId === 'home' ? 'click' : 'pop');
    setActiveSection(sectionId);
  };

  const closeModal = () => {
    playSound('click');
    setActiveSection('home');
  };

  return (
    <div className="min-h-[100dvh] bg-brand-bg text-brand-dark font-sans overflow-x-hidden relative">
      <CustomCursor />
      <FluidBackground />
      <Header onAbout={() => handleNavigate('about')} />

      <main className="relative z-0 min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <Hero key="hero" onNavigate={handleNavigate} />}
        </AnimatePresence>

        <AnimatePresence>
          {isModalOpen && (
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-brand-dark/20 backdrop-blur-sm cursor-default"
              onClick={closeModal}
              aria-label="Close section"
            />
          )}
        </AnimatePresence>

        {section && (
          <SectionModal title={section.title} active={isModalOpen} onClose={closeModal}>
            <section.Content />
          </SectionModal>
        )}
      </main>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} hidden={isModalOpen} />
    </div>
  );
}

export default App;
