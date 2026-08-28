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
  about: {
    title: 'About Me',
    pageTitle: 'About Me — Chandril Mallick | AI Full-Stack Developer',
    description: 'Learn about Chandril Mallick — B.Tech CSE student, AI Engineer, Samsung AI Intern & IEEE Researcher.',
    Content: About,
  },
  journey: {
    title: 'My Story',
    pageTitle: 'My Story & Experience — Chandril Mallick',
    description: 'Journey of Chandril Mallick from CLI tools to production RAG systems, Samsung Internship & FlyRank AI.',
    Content: Journey,
  },
  startups: {
    title: 'Building the Future',
    pageTitle: 'PathShala AI & Startups — Chandril Mallick',
    description: 'PathShala AI — Voice-first Bengali AI exam copilot for JEE, NEET, WBJEE & UPSC.',
    Content: Startups,
  },
  projects: {
    title: 'Featured Projects',
    pageTitle: 'AI Projects & RAG Systems — Chandril Mallick',
    description: 'Dabba AI local RAG platform, SmartSant-IoT medical prediction, FastAPI & PyTorch projects.',
    Content: Projects,
  },
  skills: {
    title: 'Technical Skills',
    pageTitle: 'Technical Skills & Tech Stack — Chandril Mallick',
    description: 'Tech stack: RAG, LangChain, PyTorch, FastAPI, React, Tailwind CSS, FAISS, Docker, NLP.',
    Content: Skills,
  },
  contact: {
    title: 'Get in Touch',
    pageTitle: 'Contact & Hire — Chandril Mallick | Kolkata, India',
    description: 'Get in touch with Chandril Mallick for AI engineering roles, consulting, or project collaborations.',
    Content: Contact,
  },
  terminal: {
    title: 'Interactive Console',
    pageTitle: 'Interactive Developer Console — Chandril Mallick',
    description: 'Interactive UNIX CLI terminal console to query Chandril Mallick’s projects, stack & research.',
    Content: TerminalConsole,
  },
};

function App() {
  // Read initial section from URL hash if present (#projects, #startups, etc.)
  const getInitialSection = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return SECTION_CONFIG[hash] ? hash : 'home';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const isModalOpen = activeSection !== 'home' && SECTION_CONFIG[activeSection];
  const section = SECTION_CONFIG[activeSection];

  // Dynamic SEO document title & URL hash sync
  useEffect(() => {
    if (activeSection === 'home') {
      document.title = 'Chandril Mallick — AI Engineer, Full-Stack Developer & Founder';
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else if (SECTION_CONFIG[activeSection]) {
      document.title = SECTION_CONFIG[activeSection].pageTitle;
      window.history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

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
