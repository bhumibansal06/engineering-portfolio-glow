import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileDown, 
  Linkedin, 
  Github, 
  Mail, 
  Twitter,
  Globe,
  ExternalLink
} from 'lucide-react';

const links = [
  {
    name: 'Resume',
    description: 'Download my resume',
    icon: FileDown,
    href: '#',
    color: 'from-primary to-primary/80',
    action: 'Download',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'from-[#0077B5] to-[#0077B5]/80',
    action: 'Connect',
  },
  {
    name: 'GitHub',
    description: 'Check out my code',
    icon: Github,
    href: 'https://github.com',
    color: 'from-[#333] to-[#333]/80',
    action: 'Follow',
  },
  {
    name: 'Email',
    description: 'Send me a message',
    icon: Mail,
    href: 'mailto:your.email@example.com',
    color: 'from-accent to-accent/80',
    action: 'Email',
  },
  {
    name: 'Twitter',
    description: 'Follow my updates',
    icon: Twitter,
    href: 'https://twitter.com',
    color: 'from-[#1DA1F2] to-[#1DA1F2]/80',
    action: 'Follow',
  },
  {
    name: 'Portfolio',
    description: 'Visit my personal site',
    icon: Globe,
    href: '#',
    color: 'from-primary to-accent',
    action: 'Visit',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl glass-card hover:border-primary/50 transition-all flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <link.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-grow min-w-0">
                <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {link.description}
                </p>
              </div>

              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>

        {/* Featured Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(var(--primary) / 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all"
          >
            <FileDown size={20} />
            Download Full Resume (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
