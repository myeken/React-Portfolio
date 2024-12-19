import React from 'react'
import { CONTACT } from '../constants'
import { motion} from "framer-motion"

const Contact = () => {
  return (
    <div className=' pb-20'>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl text-white font-extralight'>Get in Touch!</motion.h1>
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 2 }}
        className='text-center tracking-tighter'>
            <motion.p className='my-4'>{CONTACT.address}</motion.p>
            <motion.p className='my-4'>{CONTACT.phoneNo}</motion.p>
            <motion.a href='#' className='border-b'>{CONTACT.email}</motion.a>
        </motion.div>
    </div>
  )
}

export default Contact