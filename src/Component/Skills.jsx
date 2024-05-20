import React from 'react'

export default function Skills() {
  return (
    <div className=''>
      <h1 className='text-7xl font-bold text-center'>
        My Skills
      </h1>
      <div className='flex flex-col  items-center md:flex-row md:items-start  justify-between p-20 gap-10'>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-2/3'>
          <h1>
            HTML
          </h1>
          <div class="flex justify-between mb-1">
            <span className="text-5xl font-medium text-blue-700 dark:text-white">90%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
            <div class="bg-purple-400 h-5 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-2/3'>
          <h1>JAVASCRIPT</h1>
          <div class="flex justify-between mb-1">
            <span className="text-5xl font-medium text-blue-700 dark:text-white">90%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
            <div class="bg-purple-400 h-5 rounded-full" style={{ width: "90%" }}></div>
          </div>

        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-2/3'>
          <h1>CSS/tailwind</h1>
          <div class="flex justify-between mb-1">
            <span className="text-5xl font-medium text-blue-700 dark:text-white">80%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
            <div class="bg-purple-400 h-5 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-2/3'>
          <h1>DOCKER</h1>
          <div class="flex justify-between mb-1">
            <span className="text-5xl font-medium text-blue-700 dark:text-white">60%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
            <div class="bg-purple-400 h-5 rounded-full" style={{ width: "60%" }}></div>
          </div>
        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-2/3'>
          <h1>ReactJs</h1>
          <div class="flex justify-between mb-1">
            <span className="text-5xl font-medium text-blue-700 dark:text-white">80%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
            <div class="bg-purple-400 h-5 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className='flex flex-col justify-center rounded bg-gray-900 p-10 items-center gap-3 w-2/3'>
          <h1>NestJs</h1>
          <div class="flex justify-between mb-1">
            <span className="text-5xl font-medium text-blue-700 dark:text-white">80%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
            <div class="bg-purple-400 h-5 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
