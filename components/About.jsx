"use client"
import React from 'react'
import { Link as Scroll } from 'react-scroll'
import aboutPic from '../public/about-pic.png'
import Image from 'next/image'

const About = () => {
  return (
    <>
        <div id='about' className='w-full md:h-screen flex items-center py-16 bg-gradient-to-r from-[#ecf0f3] to-[#4a87b3] relative clip-path'>
            <div className='max-w-[1240px] m-auto md:grid items-center p-5 justify-items-center md:justify-items-end grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='text-xl tacking-wide uppercase text-[#004a7e]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-800'>
                        Hello! I'm Matthew Clendenning, an aspiring software engineer with experience building web applications,
                         mobile games, and backend services. I have a few years of hands-on development experience
                         and a strong foundation in modern software engineering principles.
                    </p>
                    <p className='py-2 text-gray-800'>
                        My journey began with curiosity about hoe software works beneath the surface. Since then, I've gained practical
                        experience with JavaScript, React, Java, C#, Python, and other core technologies. This allows me to work confidently
                        across the stack and deliver reliable, user-focused solutions.
                    </p>
                    <p className='py-2 text-gray-800'>
                        Feel free to explore my <Scroll to="projects" spy={true} smooth={true} offset={-40} duration={500}><span className='font-bold p-0.5 cursor-pointer rounded-sm underline underline-offset-3'>projects</span></Scroll>,
                        and don't hesitate to reach out about collaboration or business opportunities!
                    </p>
                </div>
                <div className='flex justify-center rounded-lg drop-shadow-4xl sm:hover:scale-105 sm:ease-in sm:duration-300'>
                    <Image 
                        src={aboutPic} 
                        width={250}
                        alt="person coding"
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default About