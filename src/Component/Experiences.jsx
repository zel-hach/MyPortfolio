import React from 'react'

export default function Experiences() {
  return (
    <div className=' '>
      <h1 className='text-7xl font-bold text-center'>
        Experiences
      </h1>
      <div className='flex flex-col  items-center  md:items-start md:flex-row justify-between p-20'>
        <div className='flex flex-col gap-5 rounded bg-gray-900 p-5 m-2 w-96 h-96'>
          <h1 className='text-center text-xl text-purple-400 font-bold'>ft_trensendance:game ping pong platforme web</h1>
          <p className='text-center font-mono text-gray-50'>
            Regarding the realization of the project of creating a table tennis game including a
            real-time discussion feature between players I focused my efforts on the analysis of two key aspects of chat (live chat and channel).
            <br></br> <span className='text-cyan-900 font-bold'>
              use: ReactJs/NestJs/Socket.io
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-5 rounded bg-gray-900 p-5 m-2 w-96 h-96'>
          <h1 className='text-center text-xl text-purple-400 font-bold'>Inception : set up a small infrastructure</h1>
          <p className='text-center font-mono text-gray-50'>
            As part of this project, I gained a key competency in container management using Docker images,
            which are predefined and pre-built templatesconfigured,
            I am now able to use existing Docker images to run applications and build my own custom Docker images.
            <br></br> <span className='text-cyan-900 font-bold'>
              use:docker-compse,Dockerfile,virtual Machine
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-5 rounded bg-gray-900 p-5 m-2 w-96 h-96'>
          <h1 className='text-center text-xl text-purple-400 font-bold'>ft_irc: Create a IRC Server</h1>
          <p className='text-center font-mono text-gray-50'>
            The objective of this project is to reproduce the functioning of an IRC server.
            <br></br> <span className='text-cyan-900 font-bold'>
              use: C++
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-5 rounded bg-gray-900 p-5 m-2 w-96 h-96'>
          <h1 className='text-center text-xl text-purple-400 font-bold'>CUB3D: 3D game</h1>
          <p className='text-center font-mono text-gray-50'>
            This project is a three-dimensional game entirely developed in C language,
            based on an outdated graphic library called mini-libx. It is broadcast using raycasting technology, which gives a satisfying 3D realism illusion.
            <br></br> <span className='text-cyan-900 font-bold'>
              use: C
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-5 rounded bg-gray-900 p-5 m-2 w-96 h-96'>
          <h1 className='text-center text-xl text-purple-400 font-bold'>End of studies project:</h1>
          <p className='text-center font-mono text-gray-50'>
            the modelling and simulation of a photovoltaic system connected to the network.
            Mini project: private school websites with  <br></br> <span className='text-cyan-900 font-bold'>HTML, CSS, JAVASCRIPT</span>
          </p>
        </div>
      </div>
    </div>
  )
}
