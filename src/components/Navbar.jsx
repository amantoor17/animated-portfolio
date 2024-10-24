import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "../assets/Tdoubleor.png"
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 border-b border-stone-700'>
      <div className='flex flex-shrink-0 items-center'>
        <motion.img src={logo} className="hover:-rotate-12 ease-in duration-100 " width={100} height={100} alt="Logo" 
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0}}
        dragElastic={0.5}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-7 text-2xl" >
        <a className='text-3xl select-none text-pink-200' href="#technologies">TECHNOLOGIES</a>
        <a className='text-3xl select-none text-pink-200' href="#projects">PROJECTS</a>
        <a className='text-3xl select-none text-pink-200' href="#contact">CONTACT</a>
        <a href="https://www.linkedin.com/in/aman-toor-4578b383/"
        className="hover:scale-150 ease-in duration-100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/amantoor17/"
        className="hover:scale-150 ease-in duration-100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
          <FaGithub/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar