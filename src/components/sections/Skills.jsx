import React from 'react';
import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: "Applied Machine Learning & Generative AI",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "LangChain", icon: "🦜" },
      { name: "PyTorch", icon: "🔥" },
      { name: "MLflow", icon: "📊" },
      { name: "RAG Pipeline", icon: "🤖" },
      { name: "Transformers", icon: "🤗" },
      { name: "Weights & Biases", icon: "📉" },
      { name: "NumPy", icon: "🔢" },
      { name: "FAISS", icon: "🔍" },
      { name: "OpenCV", icon: "👁️" },
      { name: "Pandas", icon: "🐼" },
      { name: "HuggingFace", icon: "🤗" },
      { name: "PaddleOCR", icon: "📄" },
      { name: "OpenAI", icon: "🧠" }
    ]
  },
  {
    title: "Software Engineering & Deployment",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Flutter", icon: "💙" },
      { name: "Node.js", icon: "🟢" },
      { name: "Dart", icon: "🎯" },
      { name: "Git", icon: "📦" },
      { name: "React", icon: "⚛️" },
      { name: "MySQL", icon: "🐬" },
      { name: "Java", icon: "☕" },
      { name: "Next.js", icon: "▲" },
      { name: "Firebase", icon: "🔥" },
      { name: "Tailwind CSS", icon: "🌬️" },
      { name: "Supabase", icon: "⚡" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "SQLite", icon: "🗄️" }
    ]
  }
];

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-8">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-gray-500 text-lg">
          A versatile stack managing the entire AI product lifecycle, from model training to full-stack deployment.
        </p>
      </motion.div>
      
      {SKILL_CATEGORIES.map((category, categoryIndex) => (
        <div key={category.title}>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4"
          >
            {category.title}
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (categoryIndex * 0.1) + (index * 0.03) }}
                className="group relative px-5 py-2.5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all cursor-default flex items-center gap-2"
              >
                <span className="text-lg opacity-80 group-hover:scale-110 transition-transform">{skill.icon}</span>
                <span className="font-medium text-gray-700 bg-clip-text group-hover:text-blue-600 transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
