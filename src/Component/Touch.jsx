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
      <form className='w-full flex flex-col gap-10'>
        <div className='w-full flex flex-col md:flex-row justify-center gap-10'>
          <div className='flex flex-col'>
            <input type='text' placeholder='First Name' className='rounded p-2 bg-inherit text-white border-b-2 border-secondryColor  outline-none focus:placeholder-gray-500  focus:placeholder-opacity-0 peer '></input>
            <label className='invisible peer-focus:visible absolute -translate-y-4 text-gray-500'>First Name</label>
          </div>
          <div className='flex flex-col'>
            <input type='text' placeholder='Last Name' className='rounded p-2 bg-inherit text-white border-b-2 border-secondryColor outline-none  focus:placeholder-gray-500  focus:placeholder-opacity-0 peer'></input>
            <label className='invisible  peer-focus:visible absolute -translate-y-4 text-gray-500 '>Last Name</label>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <div className='flex flex-col'>
            <input type='text' placeholder='Email ' className='rounded p-2 bg-inherit text-white border-b-2 border-secondryColor outline-none focus:placeholder-gray-500  focus:placeholder-opacity-0 peer'></input>
            <label className='invisible peer-focus:visible absolute -translate-y-4 text-gray-500 '>Email</label>
          </div>
          <div className='flex flex-col'>
            <input type='text' placeholder='Phone number' className='rounded p-2 bg-inherit text-white border-b-2 border-secondryColor outline-none focus:placeholder-gray-500  focus:placeholder-opacity-0 peer'></input>
            <label className='invisible peer-focus:visible absolute -translate-y-4 text-gray-500 '>Phone number </label>
          </div>
        </div>
        <div className='flex flex-col w-full h-40 md:px-24'>
          <textarea className='bg-inherit text-white border-2  border-secondryColor  px-5 md:pb-5 rounded outline-none w-full h-full focus:placeholder-gray-500  focus:placeholder-opacity-0 peer' placeholder='Enter your message'></textarea>
          <label className='invisible peer-focus:visible absolute -translate-y-7 text-left text-gray-500'>Message </label>
        </div>
        <div className='flex justify-center'>
          <button className=' py-3 px-6 bg-secondryColor rounded'>send</button>
        </div>
      </form>
      </div>
    </div>
  )
}
