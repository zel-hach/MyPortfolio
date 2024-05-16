import React from 'react'
import Home from './Component/Home'
import AboutMe from './Component/AboutMe'
import Skills from './Component/Skills'
import Experiences from './Component/Experiences'
import Touch from './Component/Touch'

export default function LandingPage() {
  return (
    <div>
        <div id='Home'>
        <Home></Home>
        </div>
        <div id='AboutMe'>
        <AboutMe></AboutMe>
        </div>
        <div id='Skills'>
        <Skills></Skills>
        </div>
        <div id='Experiences'>
        <Experiences></Experiences>
        </div>
        <div id='Touch'>
          <Touch></Touch>
        </div>
    </div>
  )
}
