import React from 'react'

export default function Contact() {
  return (
    <>
      <div name='Contact' className='max-w-screen-2xl container mx:auto px:4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form action="" className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div flex flex-col mb-4>
                    <label className='block text-gray-700'>
                        Full Name
                    </label>
                  <input className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:out'
                  id="name"
                  type="text" 
                  placeholder='Enter your full name'
                  />
                </div>
                <div flex flex-col mb-4>
                    <label className='block text-gray-700'>
                        Email Address
                    </label>
                  <input className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:out'
                  id="name"
                  type="text" 
                  placeholder='Enter your email address'
                  />
                </div>
                <div flex flex-col mb-4>
                    <label className='block text-gray-700'>
                        Message
                    </label>
                  <textarea className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:out'
                  id="name"
                  type="text" 
                  placeholder='Enter your message'
                  />
                </div>
                <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>

      </div>
    </>
  )
}
