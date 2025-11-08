import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import java from '../assets/java.png'
import oracle from '../assets/oracle.png'
import javascript from '../assets/javascript.png'
import springboot from '../assets/springboot.png'
export default function Experience() {
    const cardItems=[
        {
            id:1,
            logo:html,
            name:"Html5"
        },
          {
            id:2,
            logo:css,
            name:"Css3"
        },
          {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
          {
            id:4,
            logo:oracle,
            name:"Oracle DB"
        },
          {
            id:5,
            logo:java,
            name:"Java"
        },
           {
            id:6,
            logo:springboot,
            name:"Spring Boot"
        }
    ]
  return (
    <div name='Experience' className=' max-w-screen-2xl container mx:auto px:4 md:px-20 mt-10 my-16'>
   <div>
    <h1 className='text-3xl font-bold mb-5'>
        Experience
    </h1>
    <p >I've more than 2 years of experience in below technologies</p>
    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
        {
        cardItems.map(({id,logo,name})=>(
            <div  className='flex flex-col items-center justify-center  rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[150px] rounded-full ' alt="" />
                <div >
                    <div>{name}</div>
                   
            </div>
           
            </div>
        ))
    }
    </div>
   </div>
    </div>
  )
}

