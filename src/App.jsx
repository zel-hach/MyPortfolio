import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Component/Home'
import AboutMe from './Component/AboutMe'
import Skills from './Component/Skills'
import Experiences from './Component/Experiences'
import Touch from './Component/Touch'
import NavBar from './Component/NavBar'
import LandingPage from './landingPage'
import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])
  return (
    <div className='w-full flex flex-col'>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
