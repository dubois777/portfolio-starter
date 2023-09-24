import React from 'react';
import Work from './Work';
import { Link } from 'react-scroll';
//images
import Logo from '../assets/logo.svg'


const Header = () => {
  return <header className=' py-8'>
  <div className='container mx-auto '></div>
  <div className='flex justify-between items-center'>
    {/* logo */}
    <a href='#'>
      <p></p>
    </a>
    {/* BUTTON */}
    <Link to='contact' ><button className='btn btn-sm flex-1'>Work with us</button></Link>
  </div>
  </header>

};

export default Header;
