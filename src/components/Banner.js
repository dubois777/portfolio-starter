import React from 'react';

//images
import Image from '../assets/IMG_7075.png'
//icons
import {FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa'
// type animation
import {TypeAnimation} from'react-type-animation'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

import { Link } from 'react-scroll';
import Work from './Work';

const Banner = () => {
  return <section className='min-h-[85hv] lg:min-h-[78vh] flex items-center' id='home'>
  <div className='container mx-auto'>
{/* text */}
<div className='flex-1 text-center font-secondary lg:text-left'>
  <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} 
  viewport={{once: false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Dubois Media <span>Development</span></motion.h1>
  </div>
  <motion.div variants={fadeIn('down', 0.3)}
  initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
  <span className='mr-4 text-white'>DMD is een</span>
  <TypeAnimation sequence={[
    'Developer', 
    2000,
    'Designer', 
    2000,
    'Creator', 
    2000
  ]} speed={50} 
  className='text-accent' wrapper='span' repeat={Infinity}/>
  </motion.div>
  <motion.p variants={fadeIn('left', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
  Hallo! Wij zijn Dubois Media Development en wij kunnen een verbluffende website maken voor uw bedrijf!
   <br />Neem gerust contact met ons op zodat wij u zo  <br />spoedig mogelijk kunnen helpen!
  </motion.p>
  <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
    <button className='btn btn-lg'>Contact </button>
    <Link to='work' className=' text-gradient btn-link'>portfolio</Link>
  </div>
  {/* socials */}
  <div className='flex text-[20px] gap-x-6 mx-w-max mx-auto lg:mx-0'>
<a target='_blank' href='https://www.instagram.com/dubois_media_development/'>
  <FaInstagram />
</a>
<a target='_blank' href='https://www.linkedin.com/in/lander-vanhout-1139b1276/'>
  <FaLinkedin />
</a>
<a target='_blank' href='https://www.facebook.com/profile.php?id=100090945065504'>
  <FaFacebook />
</a>
  </div>
  <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
{/* image */}
<img className='m-16' src={Image} alt='' />
  </div>
  </div>
    </section>;
};

export default Banner;
