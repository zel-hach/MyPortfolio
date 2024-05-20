import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Component/Home'
import AboutMe from './Component/AboutMe'
import Skills from './Component/Skills'
import Experiences from './Component/Experiences'
import Touch from './Component/Touch'
import NavBar from './Component/NavBar'
import LandingPage from './landingPage'

function App() {
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
