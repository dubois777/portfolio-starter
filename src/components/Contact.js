import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from '../variants';


const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
         variants={fadeIn('up', 0.3)}
         initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
        
        className='flex-1'>
          <div>
            <h4 className='text-xl text-[35px] lg:text-[50px] uppercase text-accent font-medium mb-2
            tracking-wide'>Get in touch :)</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> togheter!</h2>
          </div>
        </motion.div>
         {/* form */}
         <motion.form action="https://formsubmit.co/lander.vanhout@gmail.com" method="POST" 
          variants={fadeIn('down', 0.3)}
          initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
         
         className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <div className='input-box'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:
          text-white focus:border-accent transitoin-all' type='text' name="email"
          placeholder='uw e-mail adres'/>

<input className='bg-transparent border-b py-3 outline-none w-full placeholder:
          text-white focus:border-accent transitoin-all' type='text'name="name" 
          placeholder='uw naam'/>

<input className='bg-transparent border-b py-3 outline-none w-full placeholder:
          text-white focus:border-accent transitoin-all' type='text' 
       name="phone number"   placeholder='uw telefoon nummer'/>

          <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:
          text-white focus:border-accent transitoin-all resize-none mb-12' name='message' placeholder='uw bericht'></textarea>

          <button className='btn btn-lg'>Verstuur bericht</button>
          </div>
         </motion.form>
      </div>
    </div>
    </section>;
};

export default Contact;