import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'

const About = () => {
 
  return <section className='section lg:h-screen ' id='about'  >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:justify-start lg:gap-x-20 lg:gap-y-0'>

        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        > 
        </motion.div>
        
        <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Front-end and web Developer</h3>
          <p className=''>I'm a passionate individual with a solid understanding of front-end and web technologies, specialising in MERN stack web development. Currently pursuing a Master's degree in Computer Science, I am dedicated to honing my skills and staying abreast of the latest industry trends.</p>
            <h3 className='h3 my-2'>What I Bring to the Table:</h3>
            <p>Proficiency in front-end technologies and MERN stack development.</p>
            <p> A commitment to continuous learning and self-improvement.</p>
            <p>Creative problem-solving skills and a keen eye for detail.</p>

          <div className='flex gap-x-8 items-center pt-10'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </div> 
         
        </motion.div>
      </div>
    </div>
  </section>
};

export default About;