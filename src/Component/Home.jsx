import React, { useEffect, useRef, useState } from 'react'


import Lottie from 'lottie-web';
import myLottie from './../assets/Animation - 1715870869259.json';
import Contact from './Contact';



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
    <div className='w-full flex flex-col  md:flex-row items-center justify-center' >
      <div className='flex flex-col items-center justify-center w-1/2'>
        <h1 className='text-3xl md:text-6xl mt-40 w-full text-center' data-aos='fade-up'>Hello I'm <span className=' text-secondryColor'>zineb EL hachimi</span></h1>
        <p className='text-xl text-center font-serif' data-aos='fade-up'>FullStack developer Reactjs/NestJs</p>
        <Contact></Contact>
      </div>
      <div className='flex justify-center w-1/2' data-aos='zoom-in'>
        <div ref={lottieRef} />
      </div>
    </div>
  )
}
