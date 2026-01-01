import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const hackathons = [
  {
    id: 1,
    name: "MCIA CEB-i Hacks",
    year: "2026",
    placement: "Finalist",
    description: "Team Kawayanan: Built an AI-powered sustainable solution enhcancing MCIA travel experience.",
    link: "https://web.facebook.com/photo.php?fbid=1257907409700598&set=a.627813502709995&type=3",
    image: "/assets/hackathon1.png"
  },
  {
    id: 2,
    name: "Philippine Startup Challenge 9",
    year: "2025",
    placement: "Top 7",
    description: "Developed ClothesMinded - a fashion tech prototype for personalized virtual try-ons.",
    link: "https://web.facebook.com/share/p/1FyRWtSYb6/",
    image: "/assets/startup.jpg"
  },

];

const certifications = [
  {
    id: 1,
    name: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2025",
    credentialLink: "https://www.udemy.com/certificate/UC-b5b74c75-e87e-4bcd-998d-88e151ac2a30/",
    badge: "/assets/aws-badge.png"
  },
  {
    id: 2,
    name: "Google Cybersecurity Professional",
    issuer: "Google",
    date: "2023",
    credentialLink: "https://www.coursera.org/account/accomplishments/specialization/3R3FNXSUREL9",
    badge: "/assets/google-badge.png"
  },
  {
    id: 3,
    name: "Penetration Testing, Threat Hunting, and Cryptography",
    issuer: "IBM",
    date: "2024",
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/HS8GQHZUQ3UK",
    badge: "/assets/meta-badge.png"
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-8 px-5"
      id="achievements"
    >
      {/* Hackathons Section */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-2xl lg:text-4xl text-center mb-10 lg:mb-14">
          🏆 <span className="font-extrabold">Hackathons</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />

              <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-xl hover:border-black transition-all duration-300">
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={hackathon.image}
                    alt={hackathon.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Year Badge - top right */}
                  <span className="absolute top-3 right-3 text-xs font-bold bg-white text-black px-3 py-1 rounded-full shadow-lg">
                    {hackathon.year}
                  </span>

                  {/* Placement Badge - bottom left */}
                  <span className="absolute bottom-3 left-3 text-sm font-bold bg-black text-white px-3 py-1 rounded-full shadow-lg">
                    🏆 {hackathon.placement}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="font-bold text-lg mb-2 group-hover:text-black transition-colors">
                    {hackathon.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {hackathon.description}
                  </p>

                  {/* Link */}
                  {hackathon.link && hackathon.link !== "#" && (
                    <motion.a
                      href={hackathon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      View <HiExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-2xl lg:text-4xl text-center mb-10 lg:mb-14">
          📜 <span className="font-extrabold">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-6 hover:border-black hover:from-white hover:to-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  {/* Certificate Icon */}
                  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaCertificate className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Cert name */}
                    <h3 className="font-bold text-base mb-1 truncate group-hover:text-black transition-colors">
                      {cert.name}
                    </h3>

                    {/* Issuer */}
                    <p className="text-gray-500 text-sm mb-2">
                      {cert.issuer}
                    </p>

                    {/* Date and credential link */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-400">
                        Issued {cert.date}
                      </span>
                      <span className="text-xs font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        View <HiExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
