import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 90 },
      { name: 'Java', level: 95 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'TailwindCSS', level: 95 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 75 },
    ],
  },
  {
    title: 'Core Skills',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 80 },
      { name: 'System Design', level: 70 },
      { name: 'Agile/Scrum', level: 75 },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I've been working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl glass-card"
            >
              <h3 className="font-heading font-semibold text-xl mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-white to-cyan-700 relative"
                      >
                        <div className="absolute inset-0 bg-shimmer animate-shimmer" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
