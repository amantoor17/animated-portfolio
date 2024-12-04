
import profilePic from '../assets/A2.jpg';
import {HERO_CONTENT} from "../constants";
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';


const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const photoAnimate = {
    hidden: {
        opacity: 0,
        x: -1000
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 1,        
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100, },
    visible: { opacity:1, x:0, transition: { duration: 0.5 } },
}
const Hero = () => {

  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center items-center lg:p-8'>
                {/* <Spline scene="https://prod.spline.design/MAi0j-oYCbmsGarG/scene.splinecode" /> */}
                    <motion.img src={profilePic}
                    alt='Aman'
                    className='border border-stone-900 ring-violet-300 ring-1 shadow-fuchsia-950 shadow-2xl '
                    width={400}
                    height={400}
                    drag
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0}}
                    dragElastic={0.5}
                    variants={photoAnimate}
                    initial="hidden"
                    animate="visible"
                    />
                </div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className='flex flex-col items-center lg:items-start mt-10'>
                    <motion.h2 
                    variants={childVariants}
                    className='pb-2 select-none lg:text-8xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Aman Toor
                    </motion.h2>
                    <motion.span 
                    variants={childVariants}
                    className='bg-gradient-to-r select-none from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Full-Stack Developer
                    </motion.span>
                    <motion.p 
                    variants={childVariants}
                    className='my-2 max-w-lg py-6 select-none text-xl leading-relaxed tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a 
                    variants={childVariants}
                    href='https://amantoor17.github.io/resume/CV_AmanToor_IT_9717665748.pdf'
                    target='_blank'
                    className='p-3 pl-8 select-none uppercase text-sm mb-10before:ease relative h-12 w-40 overflow-hidden border
                    border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0
                    before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700
                    hover:shadow-green-500 hover:before:-translate-x-40'>
                        Know More
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero