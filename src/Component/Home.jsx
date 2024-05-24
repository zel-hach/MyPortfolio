import React, { useEffect, useRef, useState } from 'react'
import img from './../assets/Images/1-GLOBAL-REACH.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquarePhone } from "react-icons/fa6";
import Lottie from 'lottie-web';
import myLottie from './../assets/Animation - 1715870869259.json';



export default function Home() {
  const lottieRef = useRef(null);
  const popUpRef = useRef(null);
  const popUpRef1 = useRef(null);

  const [popUp,setPopUp] = useState(false);
  const [popUpNum,setPopUpNum] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      const animation = Lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: myLottie,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  const CustomPopUp = (e) =>{
    e.stopPropagation();
    if(popUpNum)
      setPopUpNum(false)
    setPopUp(true)
    var popup = document.getElementById("myPopup");
    popup?.classList.toggle("show");
  }
  const CustomPopUpNum = (e) =>{
    e.stopPropagation();
    if(popUp)
      setPopUp(false)
    setPopUpNum(true)
    var popup = document.getElementById("myPopupNum");
    popup?.classList.toggle("show");
  }
  useEffect(() =>{
    const handleOutsideClick = (event) => {
      if (popUp)
        setPopUp(false);
      if (popUpNum)
        setPopUpNum(false);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  },[popUp,popUpNum]);
  
  return (
    <div className='w-full flex flex-col  md:flex-row items-center justify-center' >
      <div className='flex flex-col items-center justify-center w-1/2'>
        <h1 className='text-3xl md:text-7xl mt-40 w-full text-center'>Hello I'm zineb EL hachimi</h1>
        <p className='text-2xl text-center'>FullStack developer Reactjs/NestJs</p>
        <div className='flex justify-between gap-6'>
          <div className=''>
            <a href='https://linkedin.com/in/zineb-elhachimi-9134651a1/'><FaLinkedin size="30" fill='#0b4464'/></a>
          </div>
          <div>
            <a href='https://github.com/zel-hach'><FaGithub size="30" fill='#0b4464'/></a>
          </div>
          <div className='popUp' onMouseEnter={CustomPopUp} ref={popUpRef}>
            <BiLogoGmail size="30" fill='#0b4464'/>
            {popUp && <p className='popUptext' id='myPopup'>elhachimizineb1509@gmail.com</p>}
          </div>
          <div className='popUp' onMouseEnter={CustomPopUpNum} ref={popUpRef1}>
            <FaSquarePhone size="30" fill='#0b4464' />
            {popUpNum && <p className='popUptext' id='myPopupNum'>0694492216</p>}
          </div>
        </div>
      </div>
      <div className='flex justify-center w-1/2'>
        <div ref={lottieRef} />
      </div>
    </div>
  )
}
