import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import htmlPic from '../public/html.png'
import gerrardPic from '../public/gerrardmachinery.jpeg'
import loansPic from '../public/studentloanscalc.jpeg'
import jsPic from '../public/javascript.png'
import reactImg from '../public/react.png'
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tacking-wide uppercase text-[#004a7e]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 sm:gap-0 gap-10'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group sm:hover:scale-105 sm:ease-in-out sm:duration-500 bg-gradient-to-r from-[#ecf0f3] to-[#346f99]'>
                    <Link href="https://gerrardgroupinc.netlify.app/" target="_blank">
                        <Image src={gerrardPic} alt="gerrard machinery website"/>
                    </Link>
                </div>
                <div className='grid content-between justify-center sm:gap-0 gap-10'>
                    <div className='grid gap-6'>
                        <h2 className='sm:text-left text-center'>Gerrardgroupinc.com</h2>
                        <h3 className='sm:text-left text-center'>blah blah blah blah blah blah</h3>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex items-end gap-10'>
                            <h4 className='p-2 h-max rounded-lg bg-gray-300'>View Site</h4>
                            <div className='grid'>
                                <h4>Tech-Stack</h4>
                                <div className='flex gap-2'>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={htmlPic} alt="html picture" width="26" height="26"/></span>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={jsPic} alt="javascript picture" width="26" height="26"/></span>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={reactImg} alt="react picture" width="26" height="26"/></span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-end'>
                            <span className='rounded-full shadow-md shadow-gray-400 p-1.5 cursor-pointer hover:scale-110 ease-in duration-150'>
                                <BsGithub className='w-[26px] h-[26px]'/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects