import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, User } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges with elegant code solutions',
    },
    {
      icon: Lightbulb,
      title: 'Quick Learner',
      description: 'Constantly exploring new technologies and frameworks',
    },
    {
      icon: Rocket,
      title: 'Builder',
      description: 'Passionate about creating projects that make an impact',
    },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            About Me
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-4">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Animated border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              
              {/* Profile placeholder */}
              <div className="absolute inset-4 rounded-full bg-secondary border border-border flex items-center justify-center overflow-hidden group-hover:border-primary/50 transition-colors">
                <User size={80} className="text-muted-foreground" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-1/4 px-4 py-2 rounded-xl glass-card text-sm font-medium"
              >
                🎓 2nd Year
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">2nd-year Engineering student</span> with 
              a deep passion for technology and innovation. Currently pursuing my degree in 
              <span className="text-primary"> Computer Science / Electronics Engineering</span>, I spend 
              my time building projects, learning new frameworks, and exploring the ever-evolving 
              world of software development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me participating in hackathons, contributing to 
              open-source projects, or diving deep into new programming concepts. I believe in 
              continuous learning and love collaborating with fellow developers.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl glass-card text-center hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
