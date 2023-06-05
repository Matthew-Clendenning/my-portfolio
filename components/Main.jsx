import React from 'react';
import Typewriter from './Typewriter';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='transition ease-in-out delay-300 animate-fadeIn'>
                <Typewriter />
                <p className='p-2 text-gray-600 md:max-w-[70%] m-auto'>I'm a front-end web developer 
                  specializing in building and 
                  (occasionally designing) 
                  exceptional digital experiences.
                  Currently, I'm focused on building 
                  front-end web applications.
                </p>
                <div className='flex items-center justify-evenly max-w-[330px] m-auto py-4 mb-14'>
                  <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:text-[#0077B5] hover:scale-110 ease-in duration-150'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <BsGithub />
                  </div>
                  <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:text-[#0072C6] hover:scale-110 ease-in duration-150'>
                    <AiOutlineMail />
                  </div>
                </div>
                <h3 className='uppercase text-center text-2xl tracking-wide text-[#004a7e] pb-2'>Skills</h3>
                <div className='sm:max-w-[550px] max-w-[280px] m-auto'>
                  <Marquee >
                      <div className='flex py-8'>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg md:hover:scale-110 md:ease-in-out md:duration-300'>
                              <Image 
                                  src="../public/html.png"
                                  alt=""
                                  width="48"
                                  height="48"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg md:hover:scale-110 md:ease-in-out md:duration-300'>
                              <Image 
                                  src="../public/css.png"
                                  alt=""
                                  width="48"
                                  height="48"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg md:hover:scale-110 md:ease-in-out md:duration-300'>
                              <Image 
                                  src="../public/javascript.png"
                                  alt=""
                                  width="48"
                                  height="48"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg md:hover:scale-110 md:ease-in-out md:duration-300'>
                              <Image 
                                  src="../public/tailwind.png"
                                  alt=""
                                  width="48"
                                  height="48"
                              />
                          </div>
                          <div className='sm:mr-12 mr-8 p-2 rounded-xl shadow-lg md:hover:scale-110 md:ease-in-out md:duration-300'>
                              <Image 
                                  src="../public/nextjs.png"
                                  alt=""
                                  width="48"
                                  height="48"
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