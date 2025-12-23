'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Marquee, MarqueeItem, MarqueeFade, MarqueeContent } from '@/components/ui/marquee';
import { cn } from '@/lib/utils';

const skillIcons = {
  javascript: {
    name: "JavaScript",
    icon: (
      <img 
        src="https://imgs.search.brave.com/kcnmC5w1Szb6NYiijNm0y2mtmEtnL7W4FM5BcjyC36k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1q/YXZhc2NyaXB0LTNk/LWljb24tcG5nLWRv/d25sb2FkLTc1Nzc5/OTEucG5n" 
        alt="JavaScript" 
        className="w-15 h-15"
      />
    ),
   
  },
  typescript: {
    name: "TypeScript",
   icon: (
      <img 
        src="https://imgs.search.brave.com/wB82pXuEQeak7pp31L0nwG_L-tyMR0Z9CnMXaZ0kmpE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS10/eXBlc2NyaXB0LTNk/LWljb24tcG5nLWRv/d25sb2FkLTc1Nzc5/OTIucG5n" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
   
  },
  python: {
    name: "Python",
   icon: (
      <img 
        src="https://imgs.search.brave.com/CZnqmwzD9lbb49e3MaIPCzhBVaNr95xZgVwncCRY7XA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvcHl0aG9u/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTI3Mzgz/MC5wbmc" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
    
  },
  react: {
    name: "React",
   icon: (
      <img 
        src="https://imgs.search.brave.com/iMl92_gpRl9BCXVJ9_4jLP2GvRBpcZ7EiMPBQZVXKy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy8xMjgvcmVhY3Qt/MTI4LnBuZw" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
   
  },
  nextjs: {
    name: "Next.js",
   icon: (
      <img 
        src="https://imgs.search.brave.com/C9sOBdg8PXHdzxsPA7c_yL_X7_rukWp_hWK1cIVzj20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ0LzIvbmV4dC1q/cy1pY29uLWxvZ28t/cG5nX3NlZWtsb2dv/LTQ0OTgyNS5wbmc" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
    
  },
  tailwind: {
    name: "Tailwind CSS",
   icon: (
      <img 
        src="https://imgs.search.brave.com/7wxOnNeqVrDFiAZF9uPOwAH3ZvImYx1W7MAT6cVQNqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDY3LzU2/NS80MzMvbm9uXzJ4/L3RhaWx3aW5kLWNz/cy1sb2dvLXJvdW5k/ZWQtZnJlZS1wbmcu/cG5n" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
   
  },
  node: {
    name: "Node.js",
   icon: (
      <img 
        src="https://imgs.search.brave.com/qeFY8iqdX8B4RqAC_ORWhXz9vTtxt3WAMWuwwzVJXng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvbm9k/ZWpzLTEtbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
   
  },
  express: {
    name: "Express",
   icon: (
      <img 
        src="https://icon.icepanel.io/Technology/png-shadow-512/Express.png" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
    
  },
  git: {
    name: "Git & GitHub",
   icon: (
      <img 
        src="https://imgs.search.brave.com/0edry4AIDw_Lh_Kfl3dc3pRB-7UC587rcUzmUiov9oU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1n/aXRodWItM2QtaWNv/bi1wbmctZG93bmxv/YWQtNzUxNjgzNy5w/bmc" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
    
  },
  docker: {
    name: "Docker",
    icon: (
      <img 
        src="https://imgs.search.brave.com/egI2VrkAPRuKmg5HD5T0xP24qP99iyO-mRp50cw6FKw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9kb2NrZXIt/aWNvbi5wbmc" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
    
  },
  aws: {
    name: "AWS",
   icon: (
      <img 
        src="https://imgs.search.brave.com/IVn6LoihCadeG7kLOjuHgJOa800nsb2sfcXPg6zwgXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvQXdz/LUxvZ28tUE5HLUlt/YWdlLnBuZw" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
    
  },
  vscode: {
    name: "VS Code",
   icon: (
      <img 
        src="https://imgs.search.brave.com/U3Nmv7MlQnzOVFz4VCxoCG1y_8Iyr-2nFHakyGl-TWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3Mvdi84/My92cy1jb2RlLnN2/Zw" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
    
  },
  c: {
    name: "C",
   icon: (
      <img 
        src="https://imgs.search.brave.com/xJACZkuoSeRzpS0sA-vxe6c_uzbXSZN00ROKXyrBHs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9jLXByb2dy/YW0taWNvbi5wbmc" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
   
  },
  java: {
    name: "Java",
   icon: (
      <img 
        src="https://imgs.search.brave.com/Fi_FpMp_GH2w9zhhN2YqKjziUcQn2axPqc8UQ7vSKhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9qYXZhLWxvZ28t/MS5wbmc" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
   
  },
  figma: {
    name: "Figma",
   icon: (
      <img 
        src="https://imgs.search.brave.com/ebiND_c3W1fQe5d7YWL72A3RIuQ57x38mPgFq4NCsQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvRmln/bWEtTG9nby1QTkct/SW1hZ2UucG5n" 
        alt="JavaScript" 
       className="w-15 h-15 rounded"
      />
    ),
    
  }
}

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 90, icon: 'javascript' },
      { name: 'TypeScript', level: 85, icon: 'typescript' },
      { name: 'React', level: 90, icon: 'react' },
      { name: 'Next.js', level: 80, icon: 'nextjs' },
      { name: 'Tailwind CSS', level: 85, icon: 'tailwind' },
      { name: 'Figma', level: 75, icon: 'figma' }
    ]
  },
  {
    title: 'Backend & Programming',
    skills: [
      { name: 'Node.js', level: 85, icon: 'node' },
      { name: 'Express', level: 80, icon: 'express' },
      { name: 'Python', level: 75, icon: 'python' },
      { name: 'Java', level: 80, icon: 'java' },
      { name: 'C', level: 70, icon: 'c' },
      { name: 'Docker', level: 70, icon: 'docker' },
      { name: 'AWS', level: 65, icon: 'aws' },
      { name: 'Git', level: 90, icon: 'git' },
      { name: 'Vs Code', level:95, icon: 'vscode'}
    ]
  }
]

export const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Convert skillIcons to an array for the marquee
  const allSkills = Object.values(skillIcons);
  
  // Duplicate the array to create a continuous loop effect
  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <section ref={ref} id="skills" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
             <span className="text-primary text-sm font-medium uppercase tracking-widest">
           Expertise
          </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
             Skills & Technologies
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
             Technologies and tools I've been working with
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Marquee>
            <MarqueeFade side="left" className="w-24 md:w-32" />
            <MarqueeFade side="right" className="w-24 md:w-32" />
            <MarqueeContent speed={40} className="py-4">
              {marqueeSkills.map((skill, index) => (
                <MarqueeItem key={`${skill.name}-${index}`} className="mx-6">
                  <div className="group flex flex-col items-center justify-center w-24 h-24 p-4 transition-all duration-300 hover:-translate-y-1 relative">
                    <div className="w-15 h-15 flex items-center justify-center mb-2">
                      {skill.icon}
                    </div>
                    <div className="
                      absolute -bottom-2 left-1/2 -translate-x-1/2 transform translate-y-2
                      bg-gray-900 text-white text-xs px-2 py-1 rounded
                      opacity-0 group-hover:opacity-100 transition-all duration-200
                      whitespace-nowrap pointer-events-none z-10
                      group-hover:translate-y-0
                    ">
                      {skill.name}
                    </div>
                  </div>
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </motion.div>

       
      </div>
    </section>
  )
}
