import React from 'react';
import { motion } from "framer-motion"

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="text-white text-center bg-transparent max-w-screen-md px-4">
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-6xl font-thin mb-8 bg-transparent">About Me</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center lg:justify-start">
          <p className="text-lg font-light leading-relaxed lg:text-2xl">
            I am a driven and curious person, recently graduated from Purdue University of Fort Wayne with a Bachelor's in Computer Science, and eager to bridge creativity and technology through software development. With a keen interest in designing innovative solutions, I focus on developing scalable web applications, optimizing user experiences, and exploring the exciting world of game development. My journey in coding has not only sharpened my technical skills in languages like Java, Python, and JavaScript, but it has also fostered a deep appreciation for teamwork and continuous learning. When I’m not coding, I enjoy diving into new technologies and expanding my knowledge to stay ahead in this ever-evolving field.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
