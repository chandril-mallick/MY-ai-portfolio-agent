import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/profile';

const CATEGORY_COLORS = ['#0F9D8A', '#14B8A6', '#059669', '#0D9488', '#0E7490'];

export default function Skills() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Flatten skills for the particle map
  const allSkills = SKILL_CATEGORIES.flatMap((cat, catIndex) => 
    cat.skills.map(skill => ({
      ...skill,
      category: cat.title,
      catIndex
    }))
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 pb-4 sm:pb-10 h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto px-2 shrink-0"
      >
        <p className="section-label mb-2 sm:mb-3">Technical Arsenal</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-heading tracking-tight mb-2 sm:mb-3">
          Interactive <span className="gradient-text">Skill Map</span>
        </h2>
        <p className="text-brand-body text-sm sm:text-base leading-relaxed">
          Drag the skill nodes around to interact with the particle map.
        </p>
      </motion.div>

      <div 
        ref={containerRef}
        className="relative w-full h-[50vh] min-h-[400px] border border-brand-border/60 bg-white rounded-3xl overflow-hidden cursor-crosshair flex items-center justify-center"
        style={{ boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)' }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#94A3B808_1px,transparent_1px),linear-gradient(to_bottom,#94A3B808_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Particle Cloud */}
        {dimensions.width > 0 && allSkills.map((skill, index) => {
          const randomX = Math.sin(index * 13.5) * (dimensions.width / 3);
          const randomY = Math.cos(index * 11.2) * (dimensions.height / 3);
          const accentColor = CATEGORY_COLORS[skill.catIndex % CATEGORY_COLORS.length];
          
          return (
            <motion.div
              key={skill.name}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{ 
                x: randomX, 
                y: randomY, 
                opacity: 1, 
                scale: 1 
              }}
              whileHover={{ scale: 1.15, zIndex: 50 }}
              whileDrag={{ scale: 1.2, zIndex: 100, cursor: 'grabbing' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: index * 0.03,
              }}
              className="absolute px-4 py-2 sm:px-5 sm:py-2.5 rounded-full backdrop-blur-md border shadow-premium flex flex-col items-center justify-center gap-0.5 cursor-grab group select-none"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: `${accentColor}20`,
                color: '#0F172A',
              }}
            >
              <span className="text-xs sm:text-sm font-black tracking-tight whitespace-nowrap">{skill.name}</span>
              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest" style={{ color: accentColor }}>{skill.category}</span>
            </motion.div>
          );
        })}
      </div>
      
      {/* Legend */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 shrink-0"
      >
        {SKILL_CATEGORIES.map((cat, i) => (
          <div key={cat.title} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[i % CATEGORY_COLORS.length] }} />
            <span className="text-[10px] sm:text-xs font-bold text-brand-body uppercase tracking-widest">{cat.title}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
