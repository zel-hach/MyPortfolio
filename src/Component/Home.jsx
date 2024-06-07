import React, { useEffect, useRef, useState } from 'react'


import Lottie from 'lottie-web';
import myLottie from './../assets/Animation - 1715870869259.json';
import Contact from './Contact';



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
        <h1 className='text-3xl md:text-7xl mt-40 w-full text-center' data-aos='fade-up'>Hello I'm <span className=''>zineb EL hachimi</span></h1>
        <p className='text-2xl text-center' data-aos='fade-up'>FullStack developer Reactjs/NestJs</p>
        <Contact></Contact>
      </div>
      <div className='flex justify-center w-1/2' data-aos='zoom-in'>
        <div ref={lottieRef} />
      </div>
    </div>
  )
}
