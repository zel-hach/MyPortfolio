import React from 'react'
import developer from './../assets/Images/clf6810ef000gmi08sa7qop9c_1.jpeg'
import Contact from './Contact'

export default function Touch() {
  return (
    <div>
      <h1 className='text-7xl font-bold text-center'>
        Contact me
      </h1>
      <div className='flex justify-center items-center py-6'>
        <Contact></Contact>
      </div>
      <div className='flex flex-col md:flex-row p-9'> 
      <div>
     
        <img src={developer} className='rounded-full z-40 shadow-2xl'></img>
      </div>
      <form className='w-full flex flex-col gap-5'>
        <div className='w-full flex flex-col md:flex-row justify-center gap-20'>
          <div className='flex flex-col'>
            <label className='invisible'>First Name:</label>
            <input type='text' placeholder='First Name' className='rounded p-2 bg-inherit text-white border-b-2 border-secondryColor  outline-none'></input>
          </div>
          <div className='flex flex-col'>
            <label className='invisible'>Last Name:</label>
            <input type='text' placeholder='Last Name' className='rounded p-2 bg-inherit text-white border-b-2 border-secondryColor outline-none'></input>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-20'>
          <div className='flex flex-col '>
            <label className='invisible'>Email:</label>
            <input type='text' placeholder='Email ' className='rounded p-2 bg-inherit text-white border-b-2 border-secondryColor outline-none'></input>
          </div>
          <div className='flex flex-col'>
            <label className='invisible'>Number phone: </label>
            <input type='text' placeholder='Number phone' className='rounded p-2 bg-inherit text-white border-b-2 border-secondryColor outline-none'></input>
          </div>
        </div>
        <div className='flex flex-col items-center w-full h-40 px-24'>
          <label className='invisible'>message</label>
          <textarea className='bg-inherit text-white border-2  border-secondryColor  px-5 pb-5 rounded outline-none w-full h-full' placeholder='your message'></textarea>
        </div>
        <div className='flex justify-center'>
          <button className=' py-3 px-6 bg-secondryColor rounded'>send</button>
        </div>
     
      </form>
      </div>
    </div>
  )
}
