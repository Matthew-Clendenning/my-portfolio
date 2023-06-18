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
                        Hello! I'm Matthew Clendenning, a passionate front-end developer that wants to
                        create visually appealing interactive web applications. I have 1 year of
                        experience along with a solid foundation of various front-end technologies.
                    </p>
                    <p className='py-2 text-gray-800'>
                        I began my developer journey with a curiosity about how websites operated. For the past
                        year I have learned and cultivated a deep understanding of HTML5, CSS3, and Javascript.
                    </p>
                    <p className='py-2 text-gray-800'>
                        I invite you to take a look at my <Scroll to="projects" spy={true} smooth={true} offset={-40} duration={500}><span className='font-bold p-0.5 cursor-pointer rounded-sm underline underline-offset-3'>projects</span></Scroll>, and please contact me about any business
                        inquiries!
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