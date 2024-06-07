import React ,{ useEffect, useRef, useState }from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquarePhone } from "react-icons/fa6";
export default function Contact() {
    const popUpRef = useRef(null);
    const popUpRef1 = useRef(null);
  
    const [popUp,setPopUp] = useState(false);
    const [popUpNum,setPopUpNum] = useState(false);
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
    <div className='flex justify-between gap-6' data-aos='fade-up'>
          <div className=''>
            <a href='https://linkedin.com/in/zineb-elhachimi-9134651a1/'><FaLinkedin size="30" fill='#76ABAE'/></a>
          </div>
          <div>
            <a href='https://github.com/zel-hach'><FaGithub size="30" fill='#76ABAE'/></a>
          </div>
          <div className='popUp' onMouseEnter={CustomPopUp} ref={popUpRef}>
            <BiLogoGmail size="30" fill='#76ABAE'/>
            {popUp && <p className='popUptext' id='myPopup'>elhachimizineb1509@gmail.com</p>}
          </div>
          <div className='popUp' onMouseEnter={CustomPopUpNum} ref={popUpRef1}>
            <FaSquarePhone size="30" fill='#76ABAE' />
            {popUpNum && <p className='popUptext' id='myPopupNum'>0694492216</p>}
          </div>
        </div>
  )
}
