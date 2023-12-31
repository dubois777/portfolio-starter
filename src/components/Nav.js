import React from 'react';
//import icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText} from 'react-icons/bs'
//link
import {Link} from 'react-scroll'


const Nav = () => {
  return <nav className='fixed bottom-2 1g:bottom-0 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      {/* nav inner*/}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl 
      rounded-full max-w-[460px] items-center
      mx-auto px-5 flex justify-between text-2xl text-white/50'>
        <Link to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}>
        <BiHomeAlt />
        </Link>
        <Link to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'
        activeClass='active'
        smooth={true}
        spy={true}>
        <BiUser />
        </Link>
        <Link to='services'  className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'
        activeClass='active'
        smooth={true}
        spy={true}>
        <BsClipboardData />
        </Link>
        <Link to='work'  className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'
        activeClass='active'
        smooth={true}
        spy={true}>
        <BsBriefcase/>
        </Link>
        <Link to='contact'  className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'
        activeClass='active'
        smooth={true}
        spy={true}>
        <BsChatSquareText/>
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
