import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Phone from '../assets/phone.png'
import Address from '../assets/address.png'
import Gmail from '../assets/gmail.png'
const Contact = () => {
  return(
  <section className='py-20 lg:section lg:pt-56 lg:h-screen ' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false,amount:0.3}}  
        className='flex-1 flex flex-col justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together!
            </h2>
          </div>
          <div className='lg:-ml-32 ml-0  py-5'>
            <div className='flex flex-row pb-5 gap-5'>
              <motion.img 
              variants={fadeIn('right',0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false,amount:0.3}}  
              src={Gmail} className='w-7 h-7'/>
              <motion.h2
              variants={fadeIn('left',0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false,amount:0.3}}>
              jeevigv880@gmail.com
              </motion.h2>
            </div>
            <div className='flex flex-row pb-5 gap-5'>
              <motion.img 
              variants={fadeIn('right',0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false,amount:0.3}}  
              src={Phone} className='w-7 h-7'/>
              <motion.h2 
              variants={fadeIn('left',0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false,amount:0.3}}  >
              8870027261
              </motion.h2>
            </div>
            <div className='flex flex-row gap-5'>
              <motion.img 
              variants={fadeIn('right',0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false,amount:0.3}}  
              src={Address} className='w-7 h-7'/>
              <motion.h2 
              variants={fadeIn('left',0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false,amount:0.3}}  >
              Coimbatore, Tamil Nadu
              </motion.h2>
            </div>
          </div>
        </motion.div>

        <motion.form 
        variants={fadeIn('left',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false,amount:0.3}} 
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
            type='text'
            placeholder='Your name' 
          />
          <input 
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type='text'
          placeholder='Your email' 
          />
          <textarea
            className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
            placeholder='your message'>
          </textarea>
          <button className='btn btn-lg'>Send message</button>
        </motion.form>
      </div>
    </div>
  </section>
  );
};

export default Contact;