import React from 'react'
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";


export default function Skills() {
  return (
    <div className='w-full'>
      <h1 className='text-7xl font-bold text-center'>
        My Skills
      </h1>
      <div className='grid grid-cols-1 ms:grid-cols-2 md:grid-cols-3  items-center  md:flex-row md:items-start  justify-between p-20 gap-10'>
        <div className='flex flex-col  justify-center rounded bg-gray-900 p-10 items-center gap-3 w-full '>
          <h1>
            HTML
          </h1>
          <div class="flex justify-between mb-1">
            <FaHtml5  size={50} className='hover:fill-orange-400 hover:animate-spin'/>
          </div>
        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-full '>
          <h1>JAVASCRIPT</h1>
          <div class="flex justify-between mb-1">
            <IoLogoJavascript size={50} className='hover:fill-orange-400 hover:animate-spin'/>
          </div>
        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-full '>
          <h1>CSS/tailwind</h1>
          <div class="flex justify-between mb-1">
            <FaCss3Alt size={50} className='hover:fill-orange-400 hover:animate-spin'/>
            <RiTailwindCssFill size={50} className='hover:fill-orange-400 hover:animate-spin'></RiTailwindCssFill>
          </div>
         
        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-full '>
          <h1>DOCKER</h1>
          <div class="flex justify-between mb-1">
            <FaDocker size={50} className='hover:fill-orange-400 hover:animate-spin'></FaDocker>
          </div>
        </div>
  
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-full '>
          <h1>ReactJs</h1>
          <div class="flex justify-between mb-1">
              <RiReactjsFill size={50} className='hover:fill-orange-400 hover:animate-spin'></RiReactjsFill>
          </div>
        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-full '>
          <h1>NestJs</h1>
          <div class="flex justify-between mb-1">
            <SiNestjs size={50} className='hover:fill-orange-400 hover:animate-spin'></SiNestjs>
          </div>
       
        </div>
      </div>
    </div>
  )
}
