'use client';

import { motion } from 'framer-motion';
import { Rocket, Building2, Calendar, ChevronRight } from 'lucide-react';

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  projects?: string[];
  current?: boolean;
  index: number;
}

export default function TimelineItem({
  company,
  role,
  period,
  description,
  projects,
  current = false,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--nebula-purple)] via-[var(--cosmic-blue)] to-transparent" />

      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-[var(--void-black)] border-2 border-[var(--nebula-purple)] flex items-center justify-center">
        {current && (
          <div className="w-2 h-2 rounded-full bg-[var(--matrix-green)] animate-pulse" />
        )}
      </div>

      {/* Content Card */}
      <div className="glass-card rounded-xl p-5 ml-4">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-[var(--nebula-purple)]" />
              <h3 className="font-semibold text-[var(--star-white)]">{company}</h3>
              {current && (
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[var(--matrix-green)]/10 text-[var(--matrix-green)] rounded-full border border-[var(--matrix-green)]/30">
                  Current
                </span>
              )}
            </div>
            <p className="text-sm text-[var(--starlight-cyan)] font-mono">{role}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-[var(--moon-gray)] font-mono">
            <Calendar className="w-3 h-3" />
            {period}
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--moon-gray)]">
              <ChevronRight className="w-4 h-4 text-[var(--nebula-purple)] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div className="pt-3 border-t border-[var(--nebula-purple)]/10">
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-3 h-3 text-[var(--comet-orange)]" />
              <span className="text-xs font-mono text-[var(--moon-gray)]">Projects:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {projects.map((project) => (
                <span
                  key={project}
                  className="px-2 py-1 text-xs font-mono rounded bg-[var(--comet-orange)]/10 text-[var(--comet-orange)] border border-[var(--comet-orange)]/20"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
