import React from 'react'

export default function Experiences() {
  return (
    <div className='w-full'>
      <h1 className='text-7xl font-bold text-center' data-aos='zoom-in'>
        Experiences
      </h1>
      <div className='grid  grid-cols-1 items-center ms:grid-cols-1 md:grid-cols-2 gap-10 justify-between p-20'>
        <div className='flex flex-col  gap-5  bg-gray-900 p-2 m-2 w-full md:h-96 border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <h1 className='text-center ms:text-xl w-full font-bold text-secondryColor'>ft_trensendance:game ping pong platforme web</h1>
          <p className='text-center '>
            Regarding the realization of the project of creating a table tennis game including a
            real-time discussion feature between players I focused my efforts on the analysis of two key aspects of chat (live chat and channel).
          </p>
             <span className=' font-bold text-secondryColor text-center'>
               ReactJs, NestJs, Socket.io
            </span>
        </div>
        <div className='flex flex-col  gap-5  bg-gray-900 p-2 m-2 w-full md:h-96 border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <h1 className='text-center ms:text-xl  font-bold text-secondryColor'>Inception : set up a small infrastructure</h1>
          <p className='text-center '>
            As part of this project, I gained a key competency in container management using Docker images,
            which are predefined and pre-built templatesconfigured,
            I am now able to use existing Docker images to run applications and build my own custom Docker images.
          </p>
             <span className=' font-bold text-secondryColor text-center'>
              docker-compse, Dockerfile, virtual Machine
            </span>
        </div>
        <div className='flex flex-col  gap-5  bg-gray-900 p-2 m-2 w-full md:h-96 border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <h1 className='text-center ms:text-xl  font-bold text-secondryColor'>ft_irc: Create a IRC Server</h1>
          <p className='text-center '>
            The objective of this project is to reproduce the functioning of an IRC server.
          </p>
             <span className=' font-bold text-secondryColor text-center'>
               C++
            </span>
        </div>
        <div className='flex flex-col  gap-5  bg-gray-900 p-2 m-2 w-full md:h-96 border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
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
        </div>
        <div className='flex flex-col  gap-5  bg-gray-900 p-2 m-2 w-full md:h-96 border-b-4 border-secondryColor rounded-lg  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <h1 className='text-center ms:text-xl  font-bold text-secondryColor'>End of studies project:</h1>
          <p className='text-center'>
            the modelling and simulation of a photovoltaic system connected to the network.
            Mini project: private school websites with  
          </p>
          <span className=' font-bold text-secondryColor text-center'>HTML, CSS, JAVASCRIPT</span>
        </div>
      </div>
    </div>
  )
}
