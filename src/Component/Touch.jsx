import React from 'react'

export default function Touch() {
  return (
    <div className=''>
      <h1 className='text-7xl font-bold text-center'>
        Get in touch
      </h1>
      <form className='w-full flex flex-col gap-5'>
        <div className='flex justify-center gap-20'>
          <div className='flex flex-col'>
            <label className='invisible'>First Name:</label>
            <input type='text' placeholder='First Name' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
          </div>
          <div className='flex flex-col'>
            <label className='invisible'>Last Name:</label>
            <input type='text' placeholder='Last Name' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
          </div>
        </div>
        <div className='flex justify-center gap-20'>
          <div className='flex flex-col '>
            <label className='invisible'>Email:</label>
            <input type='text' placeholder='Email ' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
          </div>
          <div className='flex flex-col'>
            <label className='invisible'>Number phone: </label>
            <input type='text' placeholder='Number phone' className='rounded p-2 bg-inherit border-b-2 outline-none'></input>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <label className='invisible'>message</label>
          <textarea className='bg-inherit border-2 px-5 pb-5 rounded outline-none' placeholder='your message'></textarea>
        </div>
        <div className='flex justify-center'>
          <button className='transition duration-150 ease-in-out bg-green-200 p-3 rounded'>envoyer</button>
        </div>
      </form>
    </div>
  )
}
