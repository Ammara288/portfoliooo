import React from 'react'
import Pic from '../assets/picture.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { ReactTyped,Typed } from "react-typed";
export default function Home() {
  return (
    <>
      <div name='Home' className='max-w-screen-2xl container mx:auto px:4 md:px-20 my-20'>
     <div className='flex flex-col md:flex-row'>
         <div className='md:w-1/2 mt-12 md:mt-24 space-y-2  order-2 md:order-1'>
             <span className='text-xl'>Welcome To my Portfolio</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello, I'm a</h1>
          
               <ReactTyped
               className='text-red-700 font-bold'
          strings={["Developer","Coder","Programmer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
                <br />
                  <p className='text-sm md:text-md text-justify'>
          I am a passionate Web Developer with a strong focus on creating responsive and user-friendly websites. I love turning ideas into interactive digital experiences using technologies like HTML, CSS, JavaScript, React, and Node.js. My goal is to keep learning new tools and build creative, efficient, and modern web applications.
                  </p>
            <br />
            {/*Social media icons */}
            <div className='flex justify-between'>
               <div className='space-y-2'>
              <h1 className='font-bold'>Avaiable on</h1>
            <ul className='flex space-x-5'>
              <li>
                  <FaSquareFacebook  className='text-2xl cursor-pointer'/>
              </li>
              <li>
                     <FaLinkedin className='text-2xl cursor-pointer' />
              </li>
              <li>
                  <IoLogoYoutube className='text-2xl cursor-pointer' />
              </li>
              <li>
                 <FaWhatsappSquare className='text-2xl cursor-pointer' />
              </li>
            </ul>
            </div>
            <div className='space-y-2'>
               <h1 className='font-bold'>Currently working on</h1>
            <ul className='flex space-x-5'>
              <li>
                  <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full '/>
              </li>
              <li>
                    <SiExpress  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full '/>
              </li>
              <li>
                  <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' />
              </li>
              <li>
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' />
              </li>
            </ul>
            </div>
            </div>
            
         </div>
        <div className='md:w-1/2  md:ml-48 md:mt-20 mt-8 order-1'>
          <img src={Pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>
     </div>
     </div> 
        
    </>
  )
}

