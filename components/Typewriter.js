"use client"
import React from 'react';
import TypeWriter from 'typewriter-effect';

export default function TypingEffect() {
    return (
        <div>
            <h2>
                <TypeWriter
                    onInit={(typewriter) => {
                    typewriter.changeDelay(80)
                    typewriter.typeString('Hello')
                    typewriter.pauseFor(500)
                    typewriter.deleteAll(100)
                    typewriter.pauseFor(100)
                    typewriter.typeString('I\'m Matthew Clendenning')
                        .start()
                    }}
                />
            </h2>
            <h3 className='my-2'>
                <TypeWriter
                    onInit={(typewriter) => {
                    typewriter.changeDelay(80)
                    typewriter.pauseFor(4800)
                    typewriter.typeString('A Front-end Developer')
                        .start()
                    }}
                />
            </h3>
        </div>
    )
}