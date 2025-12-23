'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  role: string;
  featured?: boolean;
  codeUrl?: string;
  demoUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tech,
  role,
  featured = false,
  codeUrl,
  demoUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card holographic rounded-xl p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--nebula-purple)] to-[var(--cosmic-blue)] flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              {featured && (
                <span className="text-[10px] font-mono text-[var(--matrix-green)] uppercase tracking-wider">
                  Featured Mission
                </span>
              )}
              <h3 className="font-semibold text-[var(--star-white)] group-hover:text-gradient transition-all">
                {title}
              </h3>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[var(--moon-gray)] hover:text-[var(--star-white)]"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[var(--moon-gray)] hover:text-[var(--starlight-cyan)]"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Role Badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-[var(--nebula-purple)]/10 text-[var(--nebula-purple)] border border-[var(--nebula-purple)]/20 w-fit mb-3">
          {role}
        </span>

        {/* Description */}
        <p className="text-sm text-[var(--moon-gray)] flex-grow mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-mono rounded bg-[var(--deep-space)] text-[var(--starlight-cyan)] border border-[var(--starlight-cyan)]/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--nebula-purple)]/10 via-transparent to-[var(--cosmic-blue)]/10" />
        </div>
      </div>
    </motion.div>
  );
}
