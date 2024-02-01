import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';

const Work = () => {
  return (
    <section className='section lg:h-screen' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work.</h2>
              <p className='max-w-sm mb-10'>Explore my diverse portfolio, a testament to my skills and knowledge in web development. Each project is crafted with precision and creativity, showcasing a blend of technical expertise and innovative thinking.</p>
              <button className='btn btn-sm'>View all projects</button>
            </div>

            <a href='https://netflixclone-web31.netlify.app'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500 w-full md:w-[600px] h-[350px]' src={Project1} alt="Project 1" />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity group-hover:opacity-100'>
                  <span className='text-gradient text-base md:text-lg lg:text-xl xl:text-2xl'>Netflix clone</span>
                  <p className='text-base md:text-lg lg:text-xl xl:text-2xl text-white'>Embark on a cinematic journey with Movie Hub, an impressive Netflix clone developed using ReactJS, Axios, and seamlessly integrated with The Movie Database (TMDb) API. Immerse yourself in a visually stunning and user-friendly environment that allows you to explore a vast collection of movies and TV shows, complete with embedded YouTube trailers for an enhanced viewing experience.</p>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-[4.5rem]'
          >
            <a href='#'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500 w-full md:w-[600px]' src={Project2} alt="Project 2" />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity group-hover:opacity-100'>
                  <span className='text-gradient text-base md:text-lg lg:text-xl xl:text-2xl'>Portfolio</span>
                  <p className='text-base md:text-lg lg:text-xl xl:text-2xl text-white'>Designed and developed a dynamic portfolio website using React.js and Tailwind CSS, showcasing a blend of creativity and technical expertise. Implemented responsive design strategies to ensure seamless functionality across different devices, enhancing the accessibility and user experience. Leveraged React.js for efficient component-based architecture, resulting in an interactive and visually appealing online portfolio</p>
                </div>
              </div>
            </a>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500 w-full md:w-[600px]' src={Project3} alt="Project 3" />
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity group-hover:opacity-100'>
                <span className='text-gradient text-base md:text-lg lg:text-xl xl:text-2xl'>Restaurant website</span>
                <p className='text-base md:text-lg lg:text-xl xl:text-2xl text-white'>Developed a visually appealing and user-friendly restaurant website UI using HTML, CSS, and JavaScript. Implemented responsive design principles to ensure optimal user experience across various devices. Demonstrated proficiency in front-end development by combining aesthetic design with functional interactivity to enhance the overall user journey</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;