import React from 'react'
import Link from 'next/link';
import aboutPic from '../public/about-pic.png'
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py-16 bg-gradient-to-r from-[#ecf0f3] to-[#346f99] relative clip-path'>
        <div className='max-w-[1240px] m-auto md:grid items-center p-5 justify-items-center md:justify-items-end grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-xl tacking-wide uppercase text-[#004a7e]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    Hello! I'm Matthew Clendenning, a passionate front-end developer that wants to
                    create visually appealing interactive web applications. I have 1 year of
                    experience along with a solid foundation of various front-end technologies.
                </p>
                <p className='py-2 text-gray-600'>
                    I began my developer journey with a curiosity about how websites operated. For the past
                    year I have learned and cultivated a deep understanding of HTML5, CSS3, and Javascript.
                </p>
                <p className='py-2 text-gray-600'>
                    I invite you to take a look at my <Link href="/#projects"><span className='bg-gray-200 hover:bg-[#004a7e] hover:text-white underline underline-offset-1'>projects</span></Link>, and please contact me about any business
                    inquiries!
                </p>
            </div>
            <div className='flex justify-center rounded-lg drop-shadow-4xl md:hover:scale-105 md:ease-in md:duration-300'>
                <Image src={aboutPic} width='210' height='200' alt="person coding"/>
            </div>
        </div>
    </div>
  )
}

export default About