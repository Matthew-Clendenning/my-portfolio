"use client"
import Image from 'next/image'
import React from 'react'
import contactImg from '../public/contact-img.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll' 
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-wide uppercase text-[#004a7e]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 sm:justify-center gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div className='p-4 lg:p-0'>
                            <Image 
                                className='rounded-2xl sm:hover:scale-105 ease-in duration-300' 
                                src={contactImg}
                                loading='lazy'
                                placeholder='blur'
                            />
                        </div>
                        <div>
                            <h2 className='py-8 pb-2'>Matthew Clendenning</h2>
                            <p className='font-bold underline underline-offset-4'>Front-End Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center gap-4 md:gap-0 md:justify-evenly py-4'>
                                <div className='text-xl rounded-full shadow-md shadow-gray-400 p-3 sm:hover:text-[#0077B5] sm:hover:scale-110 sm:ease-in sm:duration-150'>
                                    <Link title="LinkedIn profile" href="https://www.linkedin.com/in/matthew-clendenning-9b9746267/" target='_blank'>
                                        <FaLinkedinIn />
                                    </Link>
                                </div>
                                <div className='text-xl rounded-full shadow-md shadow-gray-400 p-3 sm:hover:scale-110 sm:ease-in sm:duration-150'>
                                    <Link title="Github account" href="https://github.com/Matthew-Clendenning?tab=repositories" target='_blank'>
                                        <BsGithub />
                                    </Link>
                                </div>
                                <div className='text-xl rounded-full shadow-md shadow-gray-400 p-3 sm:hover:text-[#0072C6] sm:hover:scale-110 sm:ease-in sm:duration-150'>
                                    <Link title="Email" href="mailto:matthewclendenning@outlook.com" target='_blank'>
                                        <AiOutlineMail />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name:</label>
                                    <input 
                                        title="Enter your name"
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text' 
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number:</label>
                                    <input 
                                        title="Enter your phone number"
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text' 
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email:</label>
                                <input 
                                    title="Enter your email"
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type='email' 
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject:</label>
                                <input 
                                    title="Enter a subject"
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type='email' 
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message:</label>
                                <textarea 
                                    title="Enter your message" 
                                    className='border-2 rounded-lg p-3 border-gray-300' 
                                    rows='10'>
                                </textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Scroll title="Back to top" to='home' spy={true} smooth={true} offset={-100} duration={500}>
                    <div className='cursor-pointer text-xl rounded-full shadow-md shadow-gray-400 p-3 sm:hover:text-[#0077B5] sm:hover:scale-110 sm:ease-in sm:duration-150'>
                        <HiOutlineChevronDoubleUp className='text-[#004a7e]' size={30}/>
                    </div>
                </Scroll>
            </div>
        </div>
    </div>
  )
}

export default Contact