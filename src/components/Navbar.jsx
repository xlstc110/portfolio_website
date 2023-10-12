import React, { useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from "../constants";
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(""); 
  const [toggle, setToggle] = useState(false); 


  return (
    // the className will be a dynomic template string
    <div className={`${styles.paddingX} w-full flex item-center 
    py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center
      max-w7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' 
        onClick={() => {
          setActive("");
          // scroll the page till top
          window.scrollTo(0,0);
        }}>
          {/* Change the value of W- and H- to adjust logo size */}
          <img src={logo} alt="logo" className="w-20 h-20 object-contain"></img>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Robbie Weeks <span>| Java | Spring Boot | JavaScript | React</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} 
            hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        
        {/* display on mobile devices */}
        <div className='sm:hidden flex flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] 
            object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)}/>

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 
            right-0 mx-4 my-2 min-w-[140px]`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
              </li>
          ))}
        </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar