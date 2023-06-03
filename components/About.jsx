import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen px-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto sm:grid justify-items-center grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h3 className='uppercase text-xl tracking-widest text-[#004a7e]'>About Me</h3>
                <p className='py-2 text-gray-600'>I'm a student at Saint Louis 
                    University, currently acquiring 
                    my Bachelors Degree in Computer 
                    Science. My main area of focus 
                    is in Front-End development 
                    and/or Full-Stack development.
                </p>
                <p className='py-2 text-gray-600'>I'm a student at Saint Louis 
                    University, currently acquiring 
                    my Bachelors Degree in Computer 
                    Science. My main area of focus 
                    is in Front-End development 
                    and/or Full-Stack development.
                </p>
                <p className='py-2 text-gray-600'>I'm a student at Saint Louis 
                    University, currently acquiring 
                    my Bachelors Degree in Computer 
                    Science. My main area of focus 
                    is in Front-End development 
                    and/or Full-Stack development.
                </p>
            </div>
            <div>
                <Image
                    src="/../public/assets/about-pic.png"
                    width='200'
                    height='100'
                />
            </div>
        </div>
    </div>
  )
}

export default About