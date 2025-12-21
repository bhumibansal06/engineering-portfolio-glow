import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science / Electronics',
    institution: 'Your Engineering College',
    location: 'City, Country',
    period: '2023 - 2027',
    description: 'Currently pursuing my engineering degree with focus on software development, data structures, and system design.',
    highlights: ['CGPA: 8.5/10', 'Dean\'s List', 'Technical Club Member'],
    current: true,
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'Your High School Name',
    location: 'City, Country',
    period: '2021 - 2023',
    description: 'Completed higher secondary with Science stream, focusing on Physics, Chemistry, and Mathematics.',
    highlights: ['Percentage: 92%', 'Science Olympiad Winner'],
    current: false,
  },
  {
    degree: 'Secondary Education (10th)',
    institution: 'Your School Name',
    location: 'City, Country',
    period: '2019 - 2021',
    description: 'Foundation education with excellent academic performance and active participation in extracurriculars.',
    highlights: ['Percentage: 95%', 'School Topper'],
    current: false,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Academic Journey
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-4">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 -translate-x-1/2 ${
                    item.current
                      ? 'bg-primary border-primary/30 glow-primary'
                      : 'bg-secondary border-border'
                  }`}
                />

                {/* Content card */}
                <div
                  className={`glass-card p-6 rounded-2xl hover:border-primary/50 transition-all ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  {item.current && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      Current
                    </span>
                  )}

                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-semibold text-lg">{item.degree}</h3>
                  </div>

                  <h4 className="text-foreground font-medium mb-2">{item.institution}</h4>

                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
