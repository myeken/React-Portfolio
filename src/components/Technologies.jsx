import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    inital: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className='my-20 text-center text-4xl font-extralight text-white'>Technologies</motion.h2>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="inital"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' /> {/* React */}
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="inital"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-600' /> {/* MongoDB */}
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="inital"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-500' /> {/* Node.js */}
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="inital"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPython className='text-7xl text-blue-500' /> {/* Python */}
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="inital"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className='text-7xl text-blue-700' /> {/* Java */}
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="inital"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiJavascript className='text-7xl text-yellow-400' /> {/* JavaScript */}
        </motion.div>
        <motion.div 
        variants={iconVariants(5.5)}
        initial="inital"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiHtml5 className='text-7xl text-orange-500' /> {/* HTML5 */}
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="inital"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiCss3 className='text-7xl text-blue-400' /> {/* CSS3 */}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
