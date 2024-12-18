import React from 'react'
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className=' borber-b pb-4'>
       <motion.h1
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 1.5 }}
       className=" my-20 text-4xl font-normal mb-10 text-center text-white">Projects</motion.h1>
       <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='2-full lg:w-1/4'>
                <img src={project.image} 
                width={150} 
                height={150} 
                alt={project.title} 
                className='mb-6 rounded'
                />
                </motion.div>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className=' mb-2 text-white font-semibold'>{project.title}</h6>
                    <p className='text-neutral-200 font-extralight'>{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2  bg-neutral-600 rounded font-bold py-1 px-2 text-green-200'>
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
       </div>
    </div>
  )
}

export default Projects