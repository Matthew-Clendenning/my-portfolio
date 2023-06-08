import Image from 'next/image'
import React from 'react'
import contactImg from '../public/contact-img.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
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
                                    <Link href="https://www.linkedin.com/in/matthew-clendenning-9b9746267/" target='_blank'>
                                        <FaLinkedinIn />
                                    </Link>
                                </div>
                                <div className='text-xl rounded-full shadow-md shadow-gray-400 p-3 sm:hover:scale-110 sm:ease-in sm:duration-150'>
                                    <Link href="https://github.com/Matthew-Clendenning?tab=repositories" target='_blank'>
                                        <BsGithub />
                                    </Link>
                                </div>
                                <div className='text-xl rounded-full shadow-md shadow-gray-400 p-3 sm:hover:text-[#0072C6] sm:hover:scale-110 sm:ease-in sm:duration-150'>
                                    <Link href="mailto:matthewclendenning@outlook.com" target='_blank'>
                                        <AiOutlineMail />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact