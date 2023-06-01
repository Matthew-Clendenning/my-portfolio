import React from 'react'
import Typewriter from './Typewriter'

const main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <Typewriter 
                    text={"Matthew Clendenning"} 
                />
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Something Together</p>
            </div>
        </div>
    </div>
  )
}

export default main