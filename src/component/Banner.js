import React from 'react';
import Image from '../assets/web.png'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Banner = () => {
  return <section className=' lg:h-screen  flex items-start ' id='home'> 
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left pt-5'>
          <motion.h1 
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
            Jeevitha
          </motion.h1>

          <motion.div 
          variants={fadeIn('up',0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}} 
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-medium uppercase leading-[1]'>

            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'developer',
              2000,
              'designer',
              2000,
            ]}
            speed={50} 
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>

          <motion.p 
           variants={fadeIn('up',0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false,amount:0.7}}
           className='mb-8 max-w-lg mx-auto lg:mx-0'>
           Hi there! 👋 I'm a passionate developer and designer on a mission to create impactful digital experiences. With a love for clean code and an eye for aesthetics, I bring a balanced blend of technical expertise and creative flair to every project. From lines of code to pixel-perfect designs, I thrive on turning ideas into seamless, user-friendly solutions. Let's collaborate and bring your vision to life!
          </motion.p>

          <motion.div 
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false,amount:0.8}} 
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My portfolio</a>
          </motion.div>

          <motion.div 
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}} 
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.linkedin.com/in/jeevitha-ravichandran-0ba293220/'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/Jeevitha3105'>
              <FaGithub />
            </a>
            
            
          </motion.div>
        </div>

        <motion.div 
          variants={fadeIn('down',0.5)} 
          initial="hidden" 
          whileInView={'show'}  
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
          <img src={Image}/>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;