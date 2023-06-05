import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import htmlPic from '../public/html.png'
import gerrardPic from '../public/gerrardmachinery.jpeg'
import loansPic from '../public/studentloanscalc.jpeg'
import jsPic from '../public/javascript.png'
import reactImg from '../public/react.png'

const Projects = () => {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tacking-wide uppercase text-[#004a7e]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-14'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in-out duration-500 hover:bg-gradient-to-r from-[#004a7e] to-[#709dff]'>
                    <Link href="https://gerrardgroupinc.netlify.app/" target="_blank">
                        <Image src={gerrardPic} width="552" height="280" alt="gerrard machinery website"/>
                    </Link>
                </div>
                <div className='grid gap-10'>
                    <h3>
                        blah blah blah
                        blah blah blah
                        blah blah blah
                        blah blah blah
                        blah blah blah
                        blah blah blah
                    </h3>
                    <div className='flex items-end'>
                        <div className='grid'>
                            <h4>Tech-Stack</h4>
                            <div className='flex gap-2'>
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={htmlPic} alt="html picture" width="38" height="38"/></span>
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={jsPic} alt="javascript picture" width="38" height="38"/></span>
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={reactImg} alt="react picture" width="38" height="38"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-14 mt-80'>
                <div className='grid gap-10'>
                    <h3>
                        blah blah blah
                        blah blah blah
                        blah blah blah
                        blah blah blah
                        blah blah blah
                        blah blah blah
                    </h3>
                    <div className='flex items-end'>
                        <div className='grid'>
                            <h4>Tech-Stack</h4>
                            <div className='flex gap-2'>
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={htmlPic} alt="html picture" width="38" height="38"/></span>
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={jsPic} alt="javascript picture" width="38" height="38"/></span>
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={reactImg} alt="react picture" width="38" height="38"/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in-out duration-500 hover:bg-gradient-to-r from-[#709dff] to-[#004a7e]'>
                    <Link href="https://mystudentloanscalculator.com/" target="_blank">
                        <Image src={loansPic} width="552" height="280" alt="student loans calculator"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects