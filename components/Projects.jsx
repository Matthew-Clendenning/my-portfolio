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
            <div className='grid lg:grid-cols-2 sm:gap-8 gap-10 mb-48 sm:mb-96'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 md:hover:scale-105 md:ease-in-out md:duration-500 bg-gradient-to-r from-[#ecf0f3] to-[#346f99]'>
                    <Link href="https://gerrardgroupinc.netlify.app/" target="_blank">
                        <Image src={gerrardPic} alt="gerrard machinery website"/>
                    </Link>
                </div>
                <div className='sm:max-w-none sm:m-0 max-w-[400px] mx-auto grid content-center justify-center lg:gap-8 gap-10'>
                    <div className='grid gap-6'>
                        <h3 className='font-bold lg:text-left text-center'>Gerrard Machinery Company</h3>
                        <p className='text-gray-800 lg:text-left text-center'>
                            Custom design, implemented in Astro and Reactjs. A interactive and responsive site
                            for the Gerrard Machinery business. A website that showcases machinery and their details.
                            All fundamentals are here, UI/UX, SEO, performance, accessibility, etc.
                        </p>
                    </div>
                    <div className='flex lg:justify-normal justify-center gap-6'>
                        <div className='flex items-center gap-4'>
                            {/*<div className='grid'>
                                <h4 className=''>Tech Stack</h4>
                                <div className='flex gap-2'>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={htmlPic} alt="html picture" width="26" height="26"/></span>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={jsPic} alt="javascript picture" width="26" height="26"/></span>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={reactImg} alt="react picture" width="26" height="26"/></span>
                                </div>
                            </div>*/}
                            <h4 className='p-2 h-max text-white bg-[#22334a] rounded-lg shadow-md shadow-gray-400 cursor-pointer sm:hover:shadow-blue-500/50 sm:hover:shadow-lg sm:hover:scale-105 sm:ease-in sm:duration-150'>
                                <Link href="https://gerrardgroupinc.netlify.app/" target='_blank'>
                                    View Site
                                </Link>
                            </h4>
                            <span className='text-2xl rounded-full shadow-md shadow-gray-400 p-2 cursor-pointer sm:hover:scale-105 sm:ease-in sm:duration-150'>
                                <Link href="https://github.com/Matthew-Clendenning/gerrardgroupinc" target='_blank'>
                                    <BsGithub />
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 sm:gap-8 gap-10'>
                <div className='lg:order-last relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 md:hover:scale-105 md:ease-in-out md:duration-500 bg-gradient-to-r from-[#346f99] to-[#ecf0f3]'>
                    <Link href="https://mystudentloanscalculator.com/" target="_blank">
                        <Image src={loansPic} alt="student loans calculator"/>
                    </Link>
                </div>
                <div className='sm:max-w-none sm:m-0 max-w-[400px] mx-auto grid content-center justify-center lg:gap-8 gap-10'>
                    <div className='grid gap-6'>
                        <h3 className='font-bold lg:text-left text-center'>Student Loans Calculator</h3>
                        <p className='text-gray-800 lg:text-left text-center'>
                            Custom design, implemented in vanilla HTML5, CSS3 and Javascript. Focused on utilizing 
                            Javascript to manipulate the DOM and less on design. This calculator takes various inputs
                            from the user to calculate the amount of money they have to pay per month for their loans.
                        </p>
                    </div>
                    <div className='flex lg:justify-normal justify-center gap-6'>
                        <div className='flex items-center gap-4'>
                            {/*<div className='grid'>
                                <h4 className=''>Tech Stack</h4>
                                <div className='flex gap-2'>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={htmlPic} alt="html picture" width="26" height="26"/></span>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={jsPic} alt="javascript picture" width="26" height="26"/></span>
                                    <span className='p-1.5 rounded-xl shadow-md shadow-gray-400 w-max'><Image src={reactImg} alt="react picture" width="26" height="26"/></span>
                                </div>
                            </div>*/}
                            <h4 className='p-2 h-max text-white bg-[#1385ff] rounded-lg shadow-md shadow-gray-400 cursor-pointer sm:hover:shadow-blue-500/50 sm:hover:shadow-lg sm:hover:scale-105 sm:ease-in sm:duration-150'>
                                <Link href="https://mystudentloanscalculator.com/" target='_blank'>
                                    View Site
                                </Link>
                            </h4>
                            <span className='text-2xl rounded-full shadow-md shadow-gray-400 p-2 cursor-pointer sm:hover:scale-105 sm:ease-in sm:duration-150'>
                                <Link href="https://github.com/Matthew-Clendenning/MyStudentLoanCalculator" target='_blank'>
                                    <BsGithub />
                                </Link>
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