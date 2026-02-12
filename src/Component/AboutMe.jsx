import React from 'react'
import myProfile from './../assets/Images/_DSC0551-removebg-preview.png'

export default function AboutMe() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-center' data-aos='zoom-in'>
                <h1 className='text-7xl font-bold'>About me</h1>
            </div>
            <div className='w-full flex flex-col md:flex-row  justify-center items-center p-5'>
                <div className='md:w-1/2 flex-8 flex justify-center bg-opacity-80 '>
                <div className='bg-transparent'>
                    <img src={myProfile} className='border-b-8 border-secondryColor rounded-lg'>
                    </img>
                </div>
                </div>
                <div className='md:w-1/2 flex items-center justify-center'>
                    <p className='p-5 text-center text-xl' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        My passion for frontend development, particularly with React.js, stems from my strong background in JavaScript, CSS, HTML, SQL, C, and C++. I have extensive experience in backend development, including using the NestJS framework.
                        I am passionate about creating interfaces that are engaging and user-friendly, and I use my skills to build robust and scalable applications. I am enthusiastic about contributing to innovative projects and making a meaningful impact with my technical expertise.
                    </p>
                </div>
            </div>
        </div>
    )
}
