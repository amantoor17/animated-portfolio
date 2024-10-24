import React from 'react'
import { FaCss3, FaFigma, FaHtml5 } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { RiJavascriptFill, RiReactjsLine } from 'react-icons/ri'
import { SiCplusplus, SiGooglefonts } from 'react-icons/si'
import { TbBrandTailwind } from 'react-icons/tb'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 
        whileInView={{ opacity: 1, y:0 }}
        initial={{ opacity: 0, y:-100 }}
        transition={{ duration: 0.5 }}
        className='my-20 select-none text-center text-4xl uppercase' id='technologies'>
            Technologies
        </motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x:-100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(2.5)}
            >
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(3)}
            className='p-4'>
                <RiJavascriptFill className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(5)}    
            className='p-4'>
                <TbBrandTailwind className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(2)}  
            className='p-4'>
                <FaHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(6)}
            className='p-4'>
                <FaCss3 className='text-7xl text-blue-400'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(4)}
            className='p-4'>
                <GrGithub className='text-7xl text-gray-400'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(2.5)}
            className='p-4'>
                <SiCplusplus className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(3)}
            className='p-4'>
                <FaFigma className='text-7xl text-pink-400'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            drag
            variants={iconVariants(5)}
            className='p-4'>
                <SiGooglefonts className='text-7xl text-red-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies