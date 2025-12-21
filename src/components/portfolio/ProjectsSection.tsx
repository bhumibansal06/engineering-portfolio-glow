import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Wanderlust',
    description: 'A full-stack travel accommodation platform with secure authentication, listing management, reviews, maps, and payment integration.',
    tech: ['Express.js', 'Node.js', 'MongoDB', 'Razorpay'],
    github: 'https://github.com/bhumibansal06/wanderlust.git',
    live: 'https://stayfinder-57z5.onrender.com/',
    featured: true,
  },
  {
    title: 'BlogPage',
    description: 'A server-rendered blog platform with dynamic pages using Express.js and EJS.',
    tech: ['Node.js', 'Express.js', 'EJS'],
    github: 'https://github.com/bhumibansal06/BlogPage.git',
    live: 'https://blogpage-lovat.vercel.app/',
    featured: true,
  },
  {
    title: 'Posture-coach',
    description: 'A posture monitoring app using JavaScript with real-time feedback and interactive UI.',
    tech: ['JavaScript', 'DOM APIs'],
    github: 'https://github.com/bhumibansal06/posture-coach',
    live: 'https://posturecoach.netlify.app/',
    featured: true,
  },
  {
    title: 'User-Crud-Application',
    description: 'A structured CRUD application built with Express.js and EJS for managing user data.',
    tech: ['Node.js', 'EJS', 'SQL', 'Express.js'],
    github: 'https://github.com/bhumibansal06/User-CRUD-Application',
    featured: false,
  },
  {
    title: 'Aura - Voice Assistant',
    description: 'A Python-based local voice assistant that responds to commands, plays audio, and demonstrates modular voice processing logic.',
    tech: ['Python', 'SpeechRecognition', 'PyAudio', 'TTS'],
    github: 'https://github.com/bhumibansal06/aura-voice-assistant.git',
    live: '#',
    featured: false,
  },
  {
    title: 'Code Snippet Manager',
    description: 'Organize and share code snippets with syntax highlighting, tags, and quick search functionality.',
    tech: ['React', 'Firebase', 'Prism.js'],
    github: '#',
    live: '#',
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            My Work
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
