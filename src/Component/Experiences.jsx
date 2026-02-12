import React from 'react'
import pingpong from './../assets/Images/7b588b82-52eb-4fba-97ea-140e3668541e.png'
import InceptionIMage from './../assets/Images/Orchestration Docker dans une ville futuriste.png'
import IrcIMage from './../assets/Images/92c74309-ebdd-4e48-8730-dbe36887bfe4.png'
import StageIMage from './../assets/Images/abca8ce6-21b5-40ed-a24a-3a2f4589f852.png'

export default function Experiences() {
  return (
    <div className='w-full'>
      <h1 className='text-7xl font-bold text-center' data-aos='zoom-in'>
        Experiences
      </h1>
      <div className='flex justify-center'>
      <div className='grid  grid-cols-1 items-center ms:grid-cols-1 md:grid-cols-2 gap-10 justify-between p-20'>
        <div className='flex flex-col  gap-3  bg-gray-900 p-5 m-2 md:w-[700px] md:h-[500px] border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <div className='h-[300px] w-full flex '>  
          <img src={pingpong} className='h-[300px] w-full object-cover'></img>
          </div>
          <h1 className='ms:text-xl w-full font-bold text-secondryColor'>ft_trensendance:game ping pong platforme web</h1>
          <p >
            Regarding the realization of the project of creating a table tennis game including a
            real-time discussion feature between players I focused my efforts on the analysis of two key aspects of chat (live chat and channel).
          </p>
          <div className='flex gap-3'>
             <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
               ReactJs
            </span>
            <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
              NestJs</span>
            <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
              Socket.io</span>
            <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
              Docker</span>
          </div>
        </div>
        <div className='flex flex-col  gap-3  bg-gray-900 p-5 m-2 md:w-[700px] md:h-[500px] border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <div className='h-[300px] w-full flex '>  
          <img src={InceptionIMage} className='h-[300px] w-full object-cover'></img>
          </div>
          <h1 className='ms:text-xl  font-bold text-secondryColor'>Inception : set up a small infrastructure</h1>
          <p>
            As part of this project, I gained a key competency in container management using Docker images,
            which are predefined and pre-built templatesconfigured,
            I am now able to use existing Docker images to run applications and build my own custom Docker images.
          </p>
          <div className='flex gap-3'>
            <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
              docker-compse
            </span>
            <span className='font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
              Dockerfile
            </span>
             <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
               virtual Machine
            </span>
          </div>
        </div>
        <div className='flex flex-col  gap-3  bg-gray-900 p-5 m-2 md:w-[700px] md:h-[500px] border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <div className='h-[350px] w-full flex'>  
           <img src={IrcIMage} className='h-[320px] w-full object-cover'></img>
           </div>
          <h1 className=' ms:text-xl  font-bold text-secondryColor'>ft_irc: Create a IRC Server</h1>
          <p >
            Design and implementation of an IRC server reproducing the main functionalities (connection, channel management, messaging). 
          </p>
          <div className='flex gap-3 justify-self-end'>
             <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
               C++
            </span>
          </div>
        </div>

         <div className='flex flex-col gap-3  bg-gray-900 p-5 m-2 md:w-[700px] md:h-[510px] border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <div className='h-[300px] w-full flex'>
          <img src={StageIMage} className='h-[290px] w-full object-cover'></img>
          </div>
          <h1 className=' ms:text-xl  font-bold text-secondryColor'>Full-Stack Developer Intern</h1>
          <p>
            Developed dynamic service forms, implemented data export (Excel, PDF, CSV), and secured role-based access (admin, super admin, user).
            Enhanced security with a protected password 
            reset system and improved architecture by separating media from source code. Built a data migration solution to streamline deployment.
          </p>
          <div className='flex gap-3'>
             <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
               JavaScript
            </span>
            <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
              HTML/CSS
            </span>
            <span className=' font-bold text-secondryColor text-center pr-5 border-1 bg-[white] p-1 rounded-[4px]'>
            PHP/Symfony
            </span>
          </div>
             {/* <span className=' font-bold text-secondryColor text-center'>
               C
            </span> */}
        </div>
        
        {/* <div className='flex flex-col  gap-5  bg-gray-900 p-2 m-2 w-full md:h-96 border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <h1 className='text-center ms:text-xl  font-bold text-secondryColor'>CUB3D: 3D game</h1>
          <p className='text-center '>
            This project is a three-dimensional game entirely developed in C language,
            based on an outdated graphic library called mini-libx. It is broadcast using raycasting technology, which gives a satisfying 3D realism illusion.
          </p>
             <span className=' font-bold text-secondryColor text-center'>
               C
            </span>
        </div> */}
        {/* <div className='flex flex-col  gap-5  bg-gray-900 p-2 m-2 w-full md:h-96 border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <h1 className='text-center ms:text-xl  font-bold text-secondryColor'>End of studies project:</h1>
          <p className='text-center'>
            the modelling and simulation of a photovoltaic system connected to the network.
            Mini project: private school websites with  
          </p>
          <span className=' font-bold text-secondryColor text-center'>HTML, CSS, JAVASCRIPT</span>
        </div> */}
      </div>

      </div>
    </div>
  )
}
