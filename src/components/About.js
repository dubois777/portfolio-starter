import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion'
//variant
import {fadeIn} from '../variants'

import Work from './Work';
import { Link } from 'react-scroll';

import {img} from '../assets/IMG_7075.jpg'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:itmes-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
        mix-blend-lighten bg-top'
        ></motion.div>
          {/* text */}
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About us .</h2>
            <h3 className='h3 mb-4'>De agency genaamd Dubois Media Development (DMD), zal
              <br/> prachtige websites voor u maken, zoals deze! Twijfel niet om contact met ons op te nemen <br/>
              want DMD zal uw bedrijf drastisch verbeteren. </h3>
              <div className='flex'>
                <div>

      <div className='text-[40px] font-tertiary text-gradient mb-2'>
        {
          inView?
          <CountUp start={0} end={10} duration={8} /> : null 
        
        }
      </div>
      <div className='font-primary text-sm tracking-[2px]'>
       Succesvolle <br/>
       Projecten
      </div>
    </div>
          </div>
          <div className='flex gap-x-8 items-center'>
        <Link to='contact'  ><button className='btn btn-lg'>
Contact
          </button></Link>
          <Link to='work' className='text-grandient btn btn-link'>
             portfolio
          </Link>
          </div>
      </motion.div>
                </div>
              </div>
    </section>;
};

export default About;
