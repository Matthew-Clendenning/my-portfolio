"use client"

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='sticky left-0 right-0 bottom-0 top-0 w-full h-20 shadow-xl z-[9999] bg-[#ecf0f3]'>
        <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
            <h2 className='text-[#004a7e]'>
                <Link href="/">
                    MC
                </Link>
            </h2>
            <div>
                <ul class="hidden md:flex">
                    <li className="ml-10 text-sm uppercase relative">
                        <Link href="/" className="before:block before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#003860] before:transition-all before:duration-300 before:ease-in-out before:hover:w-full">Home</Link>
                    </li>
                    <li className="ml-10 text-sm uppercase relative">
                        <Link href="/" className="before:block before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#003860] before:transition-all before:duration-300 before:ease-in-out before:hover:w-full">About</Link>
                    </li>
                    <li className="ml-10 text-sm uppercase relative">
                        <Link href="/" className="before:block before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#003860] before:transition-all before:duration-300 before:ease-in-out before:hover:w-full">Skills</Link>
                    </li>
                    <li className="ml-10 text-sm uppercase relative">
                        <Link href="/" className="before:block before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#003860] before:transition-all before:duration-300 before:ease-in-out before:hover:w-full">Projects</Link>
                    </li>
                    <li className="ml-10 text-sm uppercase relative">
                        <Link href="/" className="before:block before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#003860] before:transition-all before:duration-300 before:ease-in-out before:hover:w-full">Contact</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={30} />
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div 
                className={
                nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
            >
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <h1>MC</h1>
                        <div onClick={handleNav} className='rounded-full shadow-md shadow-gray-400 p-2 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-black my-4'>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar