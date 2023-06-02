import React from 'react';
import Typewriter from './Typewriter';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <Typewriter />
            </div>
        </div>
    </div>
  )
}

export default Main