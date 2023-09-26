import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from '../variants';
//img
import img1 from '../assets/le-freak.png'
import img2 from '../assets/Screenshot 2023-08-12 at 17-28-14 Kunstgallerij.png'
import img3 from '../assets/portfolio-img3.png'


import Banner from './Banner';

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
<div className='flex flex-col lg:flex-row gap-x-10'>
  <motion.div
  variants={fadeIn('down', 0.3)}
  initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}


  className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
{/* text */}
  <div><h2 className='h2 leading-tight text-accent'> My work</h2>
  <p className='max-w-sm mb16'>Hier ziet u een deel van mijn werken die ik gemaakt heb. Voor verder informatie heb ik als je op het type design klikt, een video met uitleg erbij gestoken zodat u weet op basis van wat ik mijn websites bouw, hoe ik mijn beslissingen neem en te werk ga.    </p>
  {/* <button className='btn btn-sm'>View all projects</button> */}
  </div>
  {/* image */}
  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    {/* overlay */}
    <div className='group-hover:bg-black/70 w-full h-full absolute
    z-40 transition-all duration-300'></div>
    {/* img */}
<img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />    
    {/* pretitle */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
      <span className='text-gradient'>
      <a href='https://www.youtube.com/watch?v=RcgcqzDgICE' target='_blank'>
       Portfolio website design  </a>
      </span>
      </div>
     {/* title */}
     <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
    
   <span className='text-3xl text-white'>Le Freak</span>

     </div>
  </div>
  </motion.div>
    <motion.div className='flex-1'
    variants={fadeIn('left', 0.3)}
    initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    {/* overlay */}
    <div className='group-hover:bg-black/70 w-full h-full absolute
    z-40 transition-all duration-300'></div>
    {/* image */}
    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
  <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
  
    </div>
    {/* pretitle */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
     <a href="https://www.youtube.com/watch?v=hd_OXqrsrqg" target="_blank"> <span className='text-gradient'>
     Art webshop design
      </span></a>
      </div>
     {/* title */}
     <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
 <span className='text-3xl text-white'>vanjelle</span>
     </div>
  </div>
</motion.div>
    </div>
      </div>
    </section>;
};

export default Work;
