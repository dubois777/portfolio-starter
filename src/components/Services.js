import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';

//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from '../variants';

import img5 from '../assets/IMG_7078.jpg'

import { Link } from 'react-scroll';

//services data
const services = [
  {
    name: 'UI/UX design',
    description:
    "Dubois Media Development ontwerpt jouw website op basis van wat jij wilt en hebt gevraagd!",
  

  },

  {
    name: 'ontwikkeling',
    description:
    "Dubois Media Development ontwikkelt je website met een aantal verschillende programmeertalen en schrijft alle code vanaf nul, waardoor elke website uniek en anders is in plaats van een veelgebruikt website template. ",
   

  },

  {
    name: 'onderhoud',
    description:
    'Dubois Media Development bied u een onderhouds abbonnement aan voor als u ooit iets zou willen veranderen/wijzigen aan uw website, dan bent u hiervoor al verzekert.',
    

  }
]


const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image*/}
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
        
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'><h1 className='h1 text-white'>What</h1> Dubois Media Development does</h2>
          <h3 className='h3 max-w-[455px] mb-16'>DMD maakt bijzondere en mooie websites voor uw bedrijf! <br/>
          Dubois Media Development zorgt voor gebruiksvriendelijkheid in uw website zodat u meer succes zal krijgen op uw bedrijf! </h3>
        <Link to='work' >  <button className='btn btn-sm'>
           Our Work
          </button></Link>
        </motion.div>
        {/* services*/}
        <div className='flex-1'>
          {/* service list */}
          <motion.div
  variants={fadeIn('right', 0.3)}
  initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
  

           >
            {services.map((service, index) =>{
              // destructure service
              const{name, description, link} =service;
              return(
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>

               <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider
                font-primary font-semibold mb-6'>{name}</h4>
                <p className='font-secondary leading-tight'>{description}</p></div>
               <div className='flex flex-col flex-1 items-end'>
<a href='' className='text-gradient text-sm'>{link}</a>
               </div>
                </div>
          );
          })}
            </motion.div>
          </div>
      </div>
    </div>
    </section>;
};

export default Services;
