import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const education = [
    {
      id: 1,
      year: "2016 - 2022",
      institution: "Pasig City Science Highschool",
      degree: "Highschool Diploma",
      description: "City Scholar"
    },
    {
      id: 2,
      year: "2022 - 2026",
      institution: "University of the Philippines Cebu",
      degree: "Bachelor of Science in Computer Science",
      description: "CHED Center of Excellence in IT"
    },
    {
      id: 3,
      year: "2025 - Present",
      institution: "Self-Directed Learning",
      degree: "Continuous Education",
      description: "Ongoing learning through online courses, Hackathons, and building personal projects."
    }
  ];

  return (
    <div className="px-5 lg:px-28">
      <motion.h2
        className="lg:text-4xl text-2xl mb-10 lg:mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Education</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 lg:left-1/2 h-full w-0.5 bg-gray-200"></div>

        {education.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative mb-10 pl-10 lg:pl-0 lg:w-1/2 lg:mx-auto"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              marginLeft: index % 2 !== 0 ? "auto" : 0,
              marginRight: index % 2 === 0 ? "auto" : 0,
            }}
          >
            {/* Timeline dot */}
            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-black -translate-x-1/2 lg:left-1/2"></div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold bg-green-500 text-white px-3 py-1 rounded-full">
                  {item.year}
                </span>
              </div>
              <h3 className="text-lg font-bold">{item.institution}</h3>
              <p className="text-gray-600 font-medium mb-2">{item.degree}</p>
              <p className="text-gray-500 text-sm/6">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}