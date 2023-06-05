import Image from 'next/image'
import React from 'react'
import Gerrard from '../public/gerrardmachinery.jpg'
import Html from '../public/html.png'
import Js from '../public/javascript.png'
import reactImg from '../public/react.png'

const Projects = () => {
  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h3 className='uppercase text-2xl tracking-wide text-[#004a7e] pb-2'>Projects</h3>
            <div className='grid md:grid-cols-2 gap-14'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in-out duration-500 hover:bg-gradient-to-r from-[#004a7e] to-[#709dff]'>
                    <Image src={Gerrard} alt="gerrard machinery website"/>
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
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={Html} alt="html picture" width="38" height="38"/></span>
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={Js} alt="javascript picture" width="38" height="38"/></span>
                                <span className='p-1.5 rounded-xl shadow-lg shadow-gray-400 w-max'><Image src={reactImg} alt="react picture" width="38" height="38"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects