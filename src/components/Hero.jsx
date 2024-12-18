import React from 'react';
import AboutMePhoto2 from '../assets/projects/AboutMePhoto2.jpg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  }
})

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 pl-8">
          <div className="flex flex-col items-center lg:items-start">
            {/* Heading */}
            <motion.h1 
            variants={container(0)}
            initial='hidden'
            animate='visible'
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl leading-[1.2]">
              Hi there!
            </motion.h1>
            {/* Subheading with Gradient */}
            <motion.span
            variants={container(1)}
            initial='hidden'
            animate='visible' className="bg-gradient-to-r from-green-400 via-slate-300 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight">
              Aspiring Full-Stack Developer
            </motion.span>
            {/* Description */}
            <motion.p
            variants={container(1.2)}
            initial='hidden'
            animate='visible' 
            className="my-2 max-w-2xl py-6 text-lg font-light lg:text-2xl leading-relaxed">
              I am Michael Nguyen, a Computer Science student at Purdue University Fort Wayne with a passion for
              innovative problem-solving and developing impactful software solutions. Experienced in full-stack
              development, game design, and responsive UI/UX, with expertise in Java, Python, JavaScript, and the MERN stack.
            </motion.p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x:100, opacity: 0 }}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 1, delay: 1.5}}
              src={AboutMePhoto2}
              alt="Photo of Me"
              className="mx-1 w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
