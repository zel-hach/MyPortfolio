import React from 'react'
import myProfile from './../assets/Images/IMG_6737.jpg'

export default function AboutMe() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-center'>
                <h1 className='md:text-7xl font-bold'>About me</h1>
            </div>
            <div className='w-full flex flex-col md:flex-row  justify-center items-center'>
                <div className='w-1/2 flex-8 flex justify-center'>
                    <img src={myProfile} className='w-96 h-96 rounded-full m-3'></img>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <p className='text-2xl p-10 text-center '>
                        My passion for frontend development, particularly with React.js, stems from my strong background in JavaScript, CSS, HTML, SQL, C, and C++. I have extensive experience in backend development, including using the NestJS framework.
                        I am passionate about creating interfaces that are engaging and user-friendly, and I use my skills to build robust and scalable applications. I am enthusiastic about contributing to innovative projects and making a meaningful impact with my technical expertise.
                    </p>
                </div>
            </div>
        </div>
    )
}
