import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen px-2 flex items-center'>
        <div className='max-w-[1240px] m-auto md:grid gap-8'>
            <div className='col-span-2'>
                <h3>About Me</h3>
                <p>I'm a student at Saint Louis 
                    University, currently acquiring 
                    my Bachelors Degree in Computer 
                    Science. My main area of focus 
                    is in Front-End development 
                    and/or Full-Stack development.
                </p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About