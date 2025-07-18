import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";
import Button from "./Button";

const projects = [
  {
    id: 1,
    title: "ClothesMinded",
    description: "Startup fashion prototype app designed to help users create personalized avatars, manage wardrobes, and virtually try on outfits with features like 2D outfit pairing.",
    image: "/assets/icon.png",
    link: "https://drive.google.com/file/d/1fgsQJV47U0NsFw36Od5ypGxjqmY8r0iy/view?usp=sharing",
    figmaLink: "https://www.figma.com/design/PwiDCNzUiFKckFsUSsgarG/ClothesMinded?node-id=0-1&t=NO3PS1tB5TyUKc8L-1"
  },
  {
    id: 2,
    title: "Dreamify",
    description: "A dream journal mobile app where NLP meets the subconscious. Using stable diffusion model, the app processes user entries and generates visual interpretations of their dreams.",
    image: "/assets/dream.png",
    link: "https://drive.google.com/file/d/1LrUhYB0WXG819mBcOgoLCFEc46B3iSXA/view?usp=drive_link",
    figmaLink: "https://www.figma.com/design/gHWMJLVrQPyzQJKHiWf1ac/-CMSC-176NLP--Dreamify?node-id=31-63&t=9rCi2atIaRDvstvb-1"
  },
  {
    id: 3,
    title: "Dormitory Management System",
    description: "A CRUD project developed for our CMSC 127 (Database Systems) course at the University of the Philippines Cebu. The system supports core functionalities such as room assignments, occupancy tracking, and resident information management.",
    image: "/assets/expo.jpg",
    link: "https://upc-dorm.vercel.app/",
    figmaLink: "https://figma.com/your-figma-link-3"
  }
];

export default function Projects() {
  return (
    <div className="bg-[#020817] px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        Top 3 <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A] group-hover:text-white transition-colors duration-300">
                {project.description}
              </p>
              
              {/* Link icons container */}
              <div className="flex items-center space-x-4 mt-3">
                <a href={project.link} className="text-white hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <TbExternalLink size={30} />
                </a>
                <a href={project.figmaLink} className="text-white hover:text-purple-500 transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaFigma size={30} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "See More" button */}
      <div className="flex justify-center mt-10">
        <Button href="https://github.com/leidc024" variant="solid" size="lg" className="group">
          See More
          <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}