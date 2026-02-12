import React from 'react'
import Home from './Component/Home'
import AboutMe from './Component/AboutMe'
import Skills from './Component/Skills'
import Experiences from './Component/Experiences'
import Touch from './Component/Touch'

export default function LandingPage() {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='w-full flex justify-center items-center' id='Home'>
        <Home></Home>
        </div>
        <div className='w-full flex justify-center' id='AboutMe'>
        <AboutMe></AboutMe>
        </div>
        <div className='w-full flex justify-center' id='Skills'>
        <Skills></Skills>
        </div>
        <div className='w-full flex justify-center' id='Experiences'>
        <Experiences></Experiences>
        </div>
        <div className='w-full flex justify-center' id='Touch'>
          <Touch></Touch>
        </div>
        <div className='pb-2'>
          <p className='text-xs pb-2'>© 2026 Portfolio,EL hachimi zineb. All Rights Reserved.</p>
        </div>
    </div>
  )
}
