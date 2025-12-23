'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Database,
  Wrench,
  Brain,
  Palette,
  Users,
  Zap,
  ExternalLink,
} from 'lucide-react';

import Starfield from '@/components/Starfield';
import Navigation from '@/components/Navigation';
import Terminal, { TerminalLine } from '@/components/Terminal';
import ProjectCard from '@/components/ProjectCard';
import { SkillCategory } from '@/components/SkillBar';
import TimelineItem from '@/components/Timeline';

// Typing effect hook
function useTypingEffect(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
}

// Skills data
const skillsData = [
  {
    title: 'Languages',
    icon: <Code2 className="w-5 h-5" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Dart', 'SQL', 'Python'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Zap className="w-5 h-5" />,
    skills: ['ReactJS', 'NextJS', 'Express.js', 'NestJS', 'Flutter', 'Electron', 'TailwindCSS', 'Three.js'],
  },
  {
    title: 'Databases & Tools',
    icon: <Database className="w-5 h-5" />,
    skills: ['PostgreSQL', 'Firebase', 'Supabase', 'Prisma', 'Kibana'],
  },
  {
    title: 'DevOps & CI/CD',
    icon: <Wrench className="w-5 h-5" />,
    skills: ['Git', 'Jenkins', 'Vercel', 'Docker'],
  },
  {
    title: 'AI Tools',
    icon: <Brain className="w-5 h-5" />,
    skills: ['Cursor', 'Claude Code', 'Gemini', 'ChatGPT', 'v0.dev'],
  },
  {
    title: 'Design & Collaboration',
    icon: <Palette className="w-5 h-5" />,
    skills: ['Figma', 'Draw.io', 'Slack', 'Discord'],
  },
];

// Projects data
const projectsData = [
  {
    title: 'Job Matching AI',
    description: 'AI-powered job matching application using RAG and vector search technology to analyze resumes and match with relevant opportunities.',
    tech: ['Next.js', 'TypeScript', 'Google Gemini', 'RAG', 'IndexedDB'],
    role: 'Full Stack Developer',
    featured: true,
  },
  {
    title: 'Crypto News Analysis',
    description: 'AI-powered crypto news aggregator with sentiment analysis and trending scores using Google Gemini API.',
    tech: ['Next.js', 'Supabase', 'Google Gemini API', 'RSS Parser'],
    role: 'Full Stack Developer',
    featured: true,
  },
  {
    title: 'WebRecord Sound App',
    description: 'Browser-based audio recording with IndexedDB storage, Firebase auth, and privacy-first approach.',
    tech: ['React', 'TypeScript', 'IndexedDB', 'Firebase'],
    role: 'Full Stack Developer',
    featured: true,
  },
  {
    title: 'WEB Planning Generator',
    description: 'AI-powered website planning tool with project discovery documents and Mermaid diagram generation.',
    tech: ['Next.js', 'Google Gemini API', 'Mermaid.js', 'shadcn/ui'],
    role: 'Front-End Developer',
  },
  {
    title: 'Crypto Sentiment Analysis',
    description: 'Analyze cryptocurrency sentiment using AI to make better investment decisions with real-time RSS feeds.',
    tech: ['Next.js', 'NestJS', 'Three.js', 'Supabase'],
    role: 'Full Stack Developer',
  },
  {
    title: 'CryptoTracker',
    description: 'Modern cryptocurrency tracking with categorized views, search functionality, and 7-day price charts.',
    tech: ['Next.js', 'TypeScript', 'Recharts', 'TailwindCSS'],
    role: 'Front-End Developer',
  },
];

// Experience data
const experienceData = [
  {
    company: 'iApp Technology',
    role: 'Full Stack Developer',
    period: 'Feb 2023 - Present',
    current: true,
    description: [
      'Developed APIs for drone data transmission to mobile and web platforms',
      'Built full-stack solutions for project risk assessment with Python logic',
      'Converted mobile codebase into web applications using Next.js',
      'Built Electron apps targeting macOS and Windows',
      'Implemented authentication flows with JWT for user protection',
    ],
    projects: ['NBTC Drone Data', 'ACT Phase 1 & 2', 'iApp Speech Flow', 'huboftalent', 'wellness-chatbot'],
  },
  {
    company: 'Vertobase Co., Ltd.',
    role: 'Front-end Developer',
    period: 'Mar 2022 - Dec 2022',
    current: false,
    description: [
      'Built front-end interfaces from designs using React and Next.js',
      'Developed Flutter mobile app features including PIN login system',
      'Collaborated with design and backend teams for seamless integration',
    ],
    projects: ['Zignway App'],
  },
];

export default function Home() {
  const { displayText: heroText, isComplete: heroComplete } = useTypingEffect(
    'Full Stack Developer',
    80,
    500
  );
  const { displayText: missionText } = useTypingEffect(
    'Building digital experiences across the universe of web',
    40,
    2000
  );

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[var(--void-black)] relative">
      <Starfield />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Terminal title="mission_control.sh" className="max-w-2xl mx-auto">
              <TerminalLine prompt="$" command="whoami" />
              <div className="mb-4">
                <span className="text-[var(--starlight-cyan)]">&gt; </span>
                <span className="text-[var(--star-white)] font-bold text-xl">
                  {heroText}
                  {!heroComplete && <span className="animate-blink">|</span>}
                </span>
              </div>

              <TerminalLine prompt="$" command="cat mission.txt" />
              <div className="mb-6">
                <span className="text-[var(--starlight-cyan)]">&gt; </span>
                <span className="text-[var(--moon-gray)]">
                  {missionText}
                  <span className="animate-blink">|</span>
                </span>
              </div>

              <div className="code-block mb-6">
                <div className="code-comment">// astronaut.json</div>
                <div>
                  <span className="text-[var(--supernova-pink)]">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[var(--cosmic-blue)]">&quot;name&quot;</span>
                  <span className="text-[var(--star-white)]">: </span>
                  <span className="text-[var(--matrix-green)]">&quot;Suthep Jantawee&quot;</span>
                  <span className="text-[var(--star-white)]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[var(--cosmic-blue)]">&quot;role&quot;</span>
                  <span className="text-[var(--star-white)]">: </span>
                  <span className="text-[var(--matrix-green)]">&quot;Full Stack Developer&quot;</span>
                  <span className="text-[var(--star-white)]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[var(--cosmic-blue)]">&quot;experience&quot;</span>
                  <span className="text-[var(--star-white)]">: </span>
                  <span className="text-[var(--comet-orange)]">&quot;3+ years&quot;</span>
                  <span className="text-[var(--star-white)]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[var(--cosmic-blue)]">&quot;status&quot;</span>
                  <span className="text-[var(--star-white)]">: </span>
                  <span className="text-[var(--matrix-green)]">&quot;Available for missions&quot;</span>
                </div>
                <div>
                  <span className="text-[var(--supernova-pink)]">{'}'}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="btn-cosmic flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  View Missions
                </a>
                <a href="#contact" className="btn-outline-cosmic flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Signal
                </a>
              </div>
            </Terminal>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-[var(--moon-gray)]">
              <span className="text-xs font-mono">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-8 rounded-full border border-[var(--moon-gray)] flex justify-center pt-2"
              >
                <div className="w-1 h-2 rounded-full bg-[var(--nebula-purple)]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-sm text-[var(--nebula-purple)] mb-2 block">
              {'// SECTION: ABOUT'}
            </span>
            <h2 className="section-title text-gradient">Mission Briefing</h2>
            <p className="section-subtitle mx-auto">
              Get to know the developer behind the code
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Terminal title="README.md" className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div>
                  <span className="text-[var(--supernova-pink)]"># </span>
                  <span className="text-[var(--star-white)] font-bold text-lg">Hi, I&apos;m Suthep Jantawee</span>
                </div>

                <p className="text-[var(--moon-gray)] leading-relaxed">
                  I&apos;m a <span className="text-[var(--starlight-cyan)]">Full Stack Developer</span> with{' '}
                  <span className="text-[var(--matrix-green)]">3+ years</span> of experience in web development.
                  I&apos;m passionate about building intuitive interfaces, exploring modern frameworks,
                  and leveraging AI tools to enhance developer workflows.
                </p>

                <p className="text-[var(--moon-gray)] leading-relaxed">
                  Currently seeking opportunities as a{' '}
                  <span className="text-[var(--nebula-purple)]">Front-End Developer</span>,{' '}
                  <span className="text-[var(--nebula-purple)]">Back-End Developer</span>, or{' '}
                  <span className="text-[var(--nebula-purple)]">Full Stack Developer</span>.
                </p>

                <div className="pt-4 border-t border-[var(--nebula-purple)]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[var(--supernova-pink)]">## </span>
                    <span className="text-[var(--star-white)]">Soft Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Creativity', 'Critical Thinking', 'Problem Solving', 'Communication', 'Teamwork'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-mono rounded-lg bg-[var(--nebula-purple)]/10 text-[var(--nebula-purple)] border border-[var(--nebula-purple)]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Terminal>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-sm text-[var(--nebula-purple)] mb-2 block">
              {'// SECTION: SKILLS'}
            </span>
            <h2 className="section-title text-gradient">Ship Systems</h2>
            <p className="section-subtitle mx-auto">
              Technologies and tools powering my development journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-sm text-[var(--nebula-purple)] mb-2 block">
              {'// SECTION: PROJECTS'}
            </span>
            <h2 className="section-title text-gradient">Mission Archive</h2>
            <p className="section-subtitle mx-auto">
              Explore my journey through personal experiments and professional achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                role={project.role}
                featured={project.featured}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-sm text-[var(--nebula-purple)] mb-2 block">
              {'// SECTION: EXPERIENCE'}
            </span>
            <h2 className="section-title text-gradient">Career Trajectory</h2>
            <p className="section-subtitle mx-auto">
              My professional journey through the tech universe
            </p>
          </motion.div>

          <div>
            {experienceData.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                description={exp.description}
                projects={exp.projects}
                current={exp.current}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-sm text-[var(--nebula-purple)] mb-2 block">
              {'// SECTION: CONTACT'}
            </span>
            <h2 className="section-title text-gradient">Transmission Center</h2>
            <p className="section-subtitle mx-auto">
              Launch a conversation with me. I&apos;m always excited to work on innovative projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Terminal title="contact_info.sh">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--nebula-purple)]/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[var(--nebula-purple)]" />
                    </div>
                    <div>
                      <span className="text-xs text-[var(--moon-gray)] font-mono block">Email</span>
                      <a
                        href="mailto:bananammm0001@gmail.com"
                        className="text-[var(--star-white)] hover:text-[var(--starlight-cyan)] transition-colors"
                      >
                        bananammm0001@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--cosmic-blue)]/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[var(--cosmic-blue)]" />
                    </div>
                    <div>
                      <span className="text-xs text-[var(--moon-gray)] font-mono block">Phone</span>
                      <a
                        href="tel:0901834036"
                        className="text-[var(--star-white)] hover:text-[var(--starlight-cyan)] transition-colors"
                      >
                        090-183-4036
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--matrix-green)]/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--matrix-green)]" />
                    </div>
                    <div>
                      <span className="text-xs text-[var(--moon-gray)] font-mono block">Location</span>
                      <span className="text-[var(--star-white)]">Bangkok, Thailand</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--nebula-purple)]/20">
                    <span className="text-xs text-[var(--moon-gray)] font-mono block mb-3">
                      Follow My Journey
                    </span>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[var(--deep-space)] border border-[var(--nebula-purple)]/20 flex items-center justify-center text-[var(--moon-gray)] hover:text-[var(--star-white)] hover:border-[var(--nebula-purple)]/50 transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[var(--deep-space)] border border-[var(--nebula-purple)]/20 flex items-center justify-center text-[var(--moon-gray)] hover:text-[var(--star-white)] hover:border-[var(--nebula-purple)]/50 transition-all"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Terminal>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-mono text-sm text-[var(--matrix-green)] mb-4">
                  {'>'} Send Transmission
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-[var(--moon-gray)] font-mono block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[var(--void-black)] border border-[var(--nebula-purple)]/20 text-[var(--star-white)] font-mono text-sm focus:border-[var(--nebula-purple)] focus:outline-none focus:ring-1 focus:ring-[var(--nebula-purple)]/50 transition-all"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[var(--moon-gray)] font-mono block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[var(--void-black)] border border-[var(--nebula-purple)]/20 text-[var(--star-white)] font-mono text-sm focus:border-[var(--nebula-purple)] focus:outline-none focus:ring-1 focus:ring-[var(--nebula-purple)]/50 transition-all"
                      placeholder="Enter your email..."
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[var(--moon-gray)] font-mono block mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--void-black)] border border-[var(--nebula-purple)]/20 text-[var(--star-white)] font-mono text-sm focus:border-[var(--nebula-purple)] focus:outline-none focus:ring-1 focus:ring-[var(--nebula-purple)]/50 transition-all resize-none"
                      placeholder="Enter your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus !== 'idle'}
                    className="w-full btn-cosmic flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formStatus === 'idle' && (
                      <>
                        <Send className="w-4 h-4" />
                        Send Transmission
                      </>
                    )}
                    {formStatus === 'sending' && (
                      <>
                        <Rocket className="w-4 h-4 animate-pulse" />
                        Launching...
                      </>
                    )}
                    {formStatus === 'sent' && (
                      <>
                        <span className="text-[var(--matrix-green)]">Mission Accomplished!</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[var(--nebula-purple)]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Status Bar */}
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--moon-gray)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--matrix-green)]" />
                <span>Online</span>
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Bangkok, Earth</span>
              </div>
              <span>|</span>
              <span>v2.0.25</span>
            </div>

            {/* Copyright */}
            <div className="text-xs font-mono text-[var(--moon-gray)]">
              <span>&copy; 2024 Suthep Jantawee. All rights reserved.</span>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--moon-gray)] hover:text-[var(--star-white)] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--moon-gray)] hover:text-[var(--star-white)] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:bananammm0001@gmail.com"
                className="text-[var(--moon-gray)] hover:text-[var(--star-white)] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ASCII Art Footer */}
          <div className="mt-6 text-center">
            <pre className="text-[var(--moon-gray)]/30 text-[8px] leading-tight font-mono hidden md:block">
{`    *  .  *       .   *   .    *    .  *    .   *
 .    *    .  *    .    *   .  *  .    *  .    *
   .    *   .   *    .   *  .    *   .    * .
      *   .    *  🚀  .   *    .  *    .   *`}
            </pre>
          </div>
        </div>
      </footer>
    </main>
  );
}
