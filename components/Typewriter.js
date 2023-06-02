"use client"
import React from 'react';
import TypeWriter from 'typewriter-effect';
import Type from 'typewriter-effect';

export default function TypingEffect() {
    return (
        <div>
            <h1>
                <TypeWriter
                    onInit={(typewriter) => {
                    typewriter.changeDelay(100)
                    typewriter.typeString('Matthew Clendenning')
                        .start()
                    }}
                />
            </h1>
            <h2 className='my-4'>
                <Type
                    onInit={(type) => {
                    type.changeDelay(100)
                    type.pauseFor(2300)
                    type.typeString('Front-end Developer')
                        .start()
                    }}
                />
            </h2>
        </div>
    )
}