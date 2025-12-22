import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileDown, 
  Linkedin, 
  Github, 
  Mail, 

} from 'lucide-react';

import { RippleButton } from '../ui/ripple-button';

const links = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/bhumi-bansal-6082a6265/',
    color: 'text-[#0077B5] hover:text-[#0077B5]/80',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/bhumibansal06',
    color: 'text-foreground hover:text-foreground/80 dark:text-foreground dark:hover:text-foreground/80',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:bhumibansal0611@gmail.com',
    color: 'text-accent hover:text-accent/80',
  },
];

export const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Connect
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-4">
            Resume & Links
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Download my resume or connect with me on various platforms
          </p>
        </motion.div>

        <div className="flex justify-center gap-8">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-3 rounded-full ${link.color} transition-colors`}
              aria-label={link.name}
              title={link.name}
            >
              <link.icon className="w-8 h-8" />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.name}
                <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></span>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
        <RippleButton 
          className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all text-foreground dark:text-white"
          onClick={() => window.open('https://drive.google.com/file/d/1nPaGRqyQ9YBQkVKbYQiyhu6o5jNru6IS/view', '_blank')}
        >
          <span className="flex items-center gap-3">
            <FileDown size={20} className="flex-shrink-0" />
            <span>View Resume</span>
          </span>
        </RippleButton>
        </motion.div>
      </div>
    </section>
  );
};