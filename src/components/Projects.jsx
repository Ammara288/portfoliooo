import React from 'react'
import mongoDB from '../assets/mongoDB.png'
import express from '../assets/express.png'
import reactjs from '../assets/reactjs.png'
import nodejs from '../assets/nodejs.png'
import python from '../assets/python.png'
import cpp from '../assets/cpp.png'

export default function Projects() {
    const cardItems=[
        {
            id:1,
            logo:mongoDB,
            name:"MongoDB"
        },
          {
            id:2,
            logo:express,
            name:"Express.js"
        },
          {
            id:3,
            logo:reactjs,
            name:"React.js"
        },
          {
            id:4,
            logo:nodejs,
            name:"Node.js"
        },
          {
            id:5,
            logo:python,
            name:"Python"
        },
           {
            id:6,
            logo:cpp,
            name:"C++"
        }
    ]
  return (
    <div name='Projects' className=' max-w-screen-2xl container mx:auto px:4 md:px-20 mt-10'>
   <div>
    <h1 className='text-3xl font-bold mb-5'>
        projects
    </h1>
    <span className='underline font-semibold'>Featured Projects</span>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
        {
        cardItems.map(({id,logo,name})=>(
            <div  className='md:w-[300px] md:h-[300px]  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full ' alt="" />
                <div className='font-bold text-xl mb-2'>
                    <div>{name}</div>
                    <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div className='px-6 py-4 space-x-3 justify-around'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
            </div>
            </div>
        ))
    }
    </div>
   </div>
    </div>
    
  )
}
