import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';
import { FeyButton } from "@/components/ui/fey-button";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container-custom text-center relative z-10">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
        >
          Hi, I'm a{' '}
          <span className="gradient-text">2nd Year</span>
          <br />
          Engineering Student
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Passionate about building innovative solutions through code. 
          Exploring the intersection of technology, creativity, and engineering 
          to create impactful digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FeyButton
              onClick={() => scrollToSection('projects')}
              className="group-hover:scale-105 transition-transform"
            >
              View Projects
            </FeyButton>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="group"
          >
            <button className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#333333]/40 bg-transparent px-8 py-3 text-sm font-semibold text-[#111111] dark:text-white cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white hover:rounded-[12px] active:scale-[0.95]">
              <span className="relative z-[1] group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
                Contact Me
              </span>
              <Mail className="w-4 h-4 stroke-[#111111] dark:stroke-white group-hover:stroke-white transition-all duration-300" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111111] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>

    
    </section>
  );
};
