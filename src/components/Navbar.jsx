
import Pic from '../assets/picture.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from 'react';
import {Link} from 'react-scroll'
export default function Navbar() {

   const [menu, setMenu] = useState(false);
     const items = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Experience" },
    { id: 6, text: "Skills" },
  ];
  return (
    <>
    <div  className='max-w-screen-2xl container mx:auto px:4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-emerald-500'> 
      <div className='flex justify-between items-center py-4 h-16'>
        <div className='flex space-x-2'>
<img src={Pic} className='h-12 w-12 rounded full' alt="" />
<h1 className='font-semibold text-xl cursor-pointer'>Ammara <span className='text-blue-500 text-2xl'>Batool</span>
<p className='text-sm'>Web Developer</p>
</h1>
        </div>
        {/* desktop*/}
        <div>
          <ul className='hidden md:flex space-x-8 '>
               {items.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200  cursor-pointer"
                >
                 <Link to={text}
                 smooth={true}
                 duration={500}
                 offset={70}
                 activeClass='active'
                 > {text}</Link>
                </li>
              ))}
          </ul>
          <div onClick={()=>setMenu(!menu)} className='md:hidden'>
          {menu?<IoCloseSharp size={24}/>:<AiOutlineMenu size={24}/>
}
</div>
        </div>
      </div>
      {/* mobile */}
      {
        menu && (
              <div  className='bg-white'>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center text-xl space-y-3'>
          {items.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                   <Link
                   onClick={()=>setMenu(!menu)}
                   to={text}
                 smooth={true}
                 duration={500}
                 offset={70}
                 activeClass='active'
                 > {text}</Link>
                </li>
              ))}
        </ul>
      </div>
        )
          
      }
    </div>
    </>
  )
}




