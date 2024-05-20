import React, { useEffect, useRef } from 'react'
import img from './../assets/Images/1-GLOBAL-REACH.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquarePhone } from "react-icons/fa6";
import Lottie from 'lottie-web';
import myLottie from './../assets/Animation - 1715870869259.json';



export default function Home() {
  const lottieRef = useRef(null);

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

  return (
    <div className='w-full flex flex-col  md:flex-row items-center justify-center' id='Home'>
      <div className='flex flex-col items-center justify-center w-1/2'>
        <h1 className='text-3xl md:text-7xl mt-40 w-full text-center'>Hello I'm zineb EL hachimi</h1>
        <p className='text-2xl'>FullStack developer Reactjs/NestJs</p>
        <div className='flex justify-between gap-6'>
          <FaLinkedin size="30"/>
          <FaGithub size="30"/>
          <BiLogoGmail size="30"/>
          <FaSquarePhone size="30"/>
        </div>
      </div>
      <div className='flex justify-center w-1/2'>
         <div ref={lottieRef}  />
      </div>
    </div>
  )
}
