import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const services=[
  {
    degree:'Master of computer science',
    year:'2022-2024',
    college:
      'Shri nehru maha vidhyalaya college of arts and science',
    percentage:'82%'
  },
  {
    degree:'Bachelor of computer technology',
    year:'2019-2022',
    college:
      'Shri nehru maha vidhyalaya college of arts and science',
    percentage:'80%'
  },
  
]

const Services = () => {
  return(
  <section className='section lg:h-screen ' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-36 lg:flex-row'>
        <motion.div 
         variants={fadeIn('right',0.3)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once:false,amount:0.3}}
         className='flex-1'>
          <h2 className='h2 text-accent mb-6 '>Experience</h2>
          <h3 className='h3 max-w-[455px] mb-10'>
            I'm a Front-end Developer intern in TheDotTech company
          </h3>
          <p>As a Frontend Developer Intern at The Dot Tech Company, I worked on creating user-friendly and responsive web interfaces. My role involved collaborating with a dynamic team, implementing website features, and ensuring a seamless user experience. </p>
          <br />
          <p>During this internship, I gained practical hands-on experience with HTML, CSS, and JavaScript, proficient in the React framework. Moreover, my contributions to the JK Construction project provided me with a deeper understanding of industry-specific nuances, such as optimizing user interfaces for the construction sector.</p>
          
        </motion.div>

        <motion.div 
        variants={fadeIn('left',0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false,amount:0.3}}
        className='flex-1'>
          <div>
            <h2 className='h2 text-accent mb-6 '>Education</h2>
            {services.map((service,index)=>{
              const {degree,college,percentage,year}=service;
              return(
                <div className='border-b border-white/20 h-[150px] mb-[38px] flex'
                key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>
                      {degree}
                    </h4>
                    <h2 className='text-[15px] tracking-wider font-primary font-semibold mb-2'>Degree Completion: {year}</h2>
                    <p className='font-secondary leading-tight'>
                      {college}
                    </p>
                    <p className='font-secondary leading-tight'>
                        Percentage: {percentage}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  );
};

export default Services;