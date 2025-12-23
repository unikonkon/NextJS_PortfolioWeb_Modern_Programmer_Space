'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm text-[var(--star-white)]">{name}</span>
        <span className="font-mono text-xs text-[var(--moon-gray)]">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay: delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay?: number;
}

export function SkillCategory({ title, icon, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-xl p-5"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--nebula-purple)]/30 to-[var(--cosmic-blue)]/30 flex items-center justify-center text-[var(--starlight-cyan)]">
          {icon}
        </div>
        <h3 className="font-mono text-sm font-semibold text-[var(--star-white)]">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[var(--void-black)] text-[var(--star-white)] border border-[var(--nebula-purple)]/20 hover:border-[var(--nebula-purple)]/50 hover:bg-[var(--nebula-purple)]/10 transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
