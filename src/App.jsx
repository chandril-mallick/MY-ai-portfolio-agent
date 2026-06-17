import { useEffect, useState } from 'react';
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
import SectionModal from './components/SectionModal';
import { AnimatePresence, motion } from 'framer-motion';

const SECTION_CONFIG = {
  about: { title: 'About Me', Content: About },
  projects: { title: 'Featured Projects', Content: Projects },
  skills: { title: 'Technical Skills', Content: Skills },
  fun: { title: 'Achievements', Content: Fun },
  contact: { title: 'Get in Touch', Content: Contact },
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

  const closeModal = () => setActiveSection('home');

  return (
    <div className="min-h-[100dvh] bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <CustomCursor />
      <FluidBackground />
      <Header onAbout={() => setActiveSection('about')} />

      <main className="relative z-0 min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <Hero key="hero" onNavigate={setActiveSection} />}
        </AnimatePresence>

        <AnimatePresence>
          {isModalOpen && (
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-slate-950/70 backdrop-blur-sm cursor-default"
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

      <Navbar activeSection={activeSection} onNavigate={setActiveSection} hidden={isModalOpen} />
    </div>
  );
}

export default App;
