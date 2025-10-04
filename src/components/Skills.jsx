import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase,FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiExpo } from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Expo", icon: <SiExpo size={50} /> },
    { id: 5, name: "Supabase DB", icon: <FaDatabase size={50} /> },
    { id: 6, name: "TypeScript", icon: <TbBrandTypescript size={50} /> },
    { id: 7, name: "Postgresql", icon: <BiLogoPostgresql size={50} /> },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 10, name: "Figma", icon: <CgFigma size={50} /> },
  ]);

   // Split skills into two rows
  const firstRow = skills.slice(0,5);
  const secondRow = skills.slice(5, 10);


  const [experiences] = useState([
    {
      id: 1,
      company: "WyzLab Solutions",
      role: "Full-stack Developer Intern",
      period: "June 2025 - Sept 2025",
      description:
        "At WyzLab Solutions, I led the development of an MVP for an eLearning SaaS platform with a scalable, multi-tenant architecture. Built core features such as content creation, gamified learning, and subscription management, with integrated monetization and third-party services for future growth.",
      logo: "/assets/1.png",
    },
    {
      id: 2,
      company: "Kippap Learning Corp.",
      role: "Software Developer Intern",
      period: "Feb 2025 - Apr 2025",
      description:
        "At Kippap Learning Corp., I served as a Software Developer Intern, where I collaborated with their mobile team to build and maintain apps using Flutter and Dart. Followed Agile practices and contributed to sprint activities. Designed and developed a React Native Expo prototype to showcase core features for business and investor presentations.",
      logo: "/assets/2.svg",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* First Row - Infinite Left Scroll */}
        <div className="relative overflow-hidden py-8 h-48 lg:h-56">
          <motion.div
            className="absolute flex gap-5"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...firstRow, ...firstRow].map((skill, index) => (
              <div
                key={`first-${skill.id}-${index}`}
                className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              >
                {skill.icon}
                <p className="text-lg font-bold">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Infinite Right Scroll */}
        <div className="relative overflow-hidden py-8 h-48 lg:h-56">
          <motion.div
            className="absolute flex gap-5"
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...secondRow, ...secondRow].map((skill, index) => (
              <div
                key={`second-${skill.id}-${index}`}
                className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              >
                {skill.icon}
                <p className="text-lg font-bold">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16 "  id="about">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
