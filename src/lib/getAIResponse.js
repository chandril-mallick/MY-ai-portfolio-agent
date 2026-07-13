import { PROFILE, SUMMARY } from '../data/profile';

export function getAIResponse(text) {
  const q = text.toLowerCase().trim();

  if (q.includes('dabba') || q.includes('study copilot') || q.includes('copilot')) {
    return {
      content:
        'Dabba AI (Study Copilot) is my privacy-first educational platform with RAG over 10,000+ documents, local Gemma 3:1B inference, and 40% faster retrieval. Opening projects…',
      target: 'projects',
    };
  }
  if (q.includes('pathshala')) {
    return {
      content:
        'PathShala AI is a voice-first AI tutor specifically designed for competitive exams like JEE, NEET, WBJEE & UPSC in Bengali. It supports voice learning and explanations in Bengali. Opening Ventures…',
      target: 'startups',
    };
  }
  if (q.includes('smartsant') || (q.includes('health') && !q.includes('about'))) {
    return {
      content:
        'SmartSant-IoT is a multi-modal healthcare AI system — 93%+ UTI accuracy, FastAPI deployment, and SHAP/Grad-CAM explainability. See Projects for details.',
      target: 'projects',
    };
  }
  if (q.includes('samsung') || (q.includes('intern') && !q.includes('internet'))) {
    return {
      content:
        'AI Intern at Samsung Innovation Campus (Sep–Nov 2025): NLP pipelines, FastAPI model APIs, and dataset curation. Full details in About.',
      target: 'about',
    };
  }
  if (q.includes('ieee') || q.includes('publication') || q.includes('paper')) {
    return {
      content:
        'IEEE 2026 co-author on IoT-enabled multimodal sanitation for health monitoring — 94% classification accuracy. See About & Achievements.',
      target: 'about',
    };
  }
  if (q.includes('hire') || q.includes('why should')) {
    return {
      content: `${PROFILE.name} ships end-to-end AI: RAG at scale, FastAPI backends, IEEE research, Samsung internship, Top 1,000 innovator & HP Dreams Top 25.`,
      target: 'about',
    };
  }
  if (q.includes('achievement') || q.includes('award') || q.includes('hackathon') || q.includes('hp')) {
    return {
      content:
        'Top 1,000 innovator, HP Dreams Unlocked Top 25, Hack4Delhi, CONVOLVE 4.0, Code Clash. Opening achievements…',
      target: 'fun',
    };
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
    return {
      content: `Reach me at ${PROFILE.email} · ${PROFILE.phone} · ${PROFILE.location}. LinkedIn & GitHub in Contact.`,
      target: 'contact',
    };
  }
  if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
    return {
      content:
        'Python, FastAPI, React, LangChain, FAISS, PyTorch, Docker — full stack AI from embeddings to deployment.',
      target: 'skills',
    };
  }
  if (q.includes('education') || q.includes('university') || q.includes('brainware')) {
    return {
      content: 'B.Tech CSE at Brainware University, Kolkata (2023–2027). Coursework in AI, DSA, DBMS, and OS.',
      target: 'about',
    };
  }
  if (q.includes('about') || q.includes('who') || q.includes('bio') || q === 'me') {
    return { content: `${SUMMARY.slice(0, 220)}…`, target: 'about' };
  }
  if (q.includes('project') || q.includes('work') || q.includes('build')) {
    return {
      content: 'Flagship builds: Dabba AI (Study Copilot) and SmartSant-IoT. Loading projects…',
      target: 'projects',
    };
  }
  if (q.includes('research') || q.includes('iot')) {
    return {
      content: 'Research spans IEEE IoT health publication and SmartSant-IoT multi-modal disease prediction. See Projects & About.',
      target: 'about',
    };
  }

  return {
    content:
      'I can help with Dabba AI, SmartSant-IoT, Samsung internship, IEEE publication, skills, or contact. Try "Tell me about Dabba AI".',
    target: 'about',
  };
}
