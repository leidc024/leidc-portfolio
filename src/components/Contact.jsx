import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
  { Icon: BiLogoGmail, href: "mailto:your.email@example.com" },
  { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/leian-carl-dela-cruz-915b2324b/" },
  { Icon: BsGithub, href: "https://github.com/leidc024" },
];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%] w-full flex justify-center'
        >
          <form className='w-full max-w-md space-y-3 lg:space-y-5'>
            <input
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="text"
              placeholder='Your name'
              required
            />
            <input
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="email"
              placeholder='Email'
              required
            />
            <input
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="text"
              placeholder='Your website (If exists)'
            />
            <textarea
              className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full'
              placeholder='How can I help?*'
            ></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                className='bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                Get In Touch
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                {socialLinks.map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0'
        >
          <img src="/assets/hello.svg" alt="Hello" className="w-full max-w-md" />
        </motion.div>
      </div>
    </motion.div>
  );
}
