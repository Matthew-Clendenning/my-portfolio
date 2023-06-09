import React from 'react';
import Link from 'next/link'
import Typewriter from './Typewriter';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import htmlPic from '../public/html.png'
import cssPic from '../public/css.png'
import jsPic from '../public/javascript.png'
import nextPic from '../public/nextjs.png'
import tailPic from '../public/tailwind.png'
import reactPic from '../public/react.png'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <Typewriter />
                <p className='p-2 text-gray-600 md:max-w-[70%] m-auto'>I'm a front-end web developer 
                  specializing in building and 
                  (occasionally designing) 
                  exceptional digital experiences.
                  Currently, I'm focused on building 
                  front-end web applications.
                </p>
                <div className='flex items-center justify-evenly max-w-[330px] m-auto py-4 mb-14'>
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
                <h3 className='uppercase text-center text-2xl tracking-wide text-[#004a7e] pb-2'>Skills</h3>
                <div className='sm:max-w-[550px] max-w-[280px] m-auto'>
                  <Marquee >
                      <div className='flex py-8'>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg shadow-gray-400 sm:hover:scale-110 sm:ease-in-out sm:duration-300'>
                              <Image 
                                  src={htmlPic}
                                  alt="html image"
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg shadow-gray-400 sm:hover:scale-110 sm:ease-in-out sm:duration-300'>
                              <Image 
                                  src={cssPic}
                                  alt="css image"
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg shadow-gray-400 sm:hover:scale-110 sm:ease-in-out sm:duration-300'>
                              <Image 
                                  src={jsPic}
                                  alt="javascript image"
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg shadow-gray-400 sm:hover:scale-110 sm:ease-in-out sm:duration-300'>
                              <Image 
                                  src={tailPic}
                                  alt="tailwind image"
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg shadow-gray-400 sm:hover:scale-110 sm:ease-in-out sm:duration-300'>
                              <Image 
                                  src={nextPic}
                                  alt="nextjs image"
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg shadow-gray-400 sm:hover:scale-110 sm:ease-in-out sm:duration-300'>
                              <Image 
                                  src={reactPic}
                                  alt="react image"
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                          </div>
                      </div>
                  </Marquee>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main