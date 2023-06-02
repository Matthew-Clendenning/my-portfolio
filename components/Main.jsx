import React from 'react';
import Typewriter from './Typewriter';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <Typewriter />
                <p className='transition ease-in-out delay-150 animate-fadeIn py-2 text-gray-600 max-w-[70%] m-auto'>I'm a front-end web developer 
                  specializing in building and 
                  (occasionally designing) 
                  exceptional digital experiences.
                  Currently, I'm focused on building 
                  front-end web applications.
                </p>
                <div className='flex items-center justify-evenly max-w-[330px] m-auto py-4'>
                  <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:text-[#0077B5] hover:scale-110 ease-in duration-150'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <BsGithub />
                  </div>
                  <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:text-[#0072C6] hover:scale-110 ease-in duration-150'>
                    <AiOutlineMail />
                  </div>
                  <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <BsFillPersonLinesFill />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main