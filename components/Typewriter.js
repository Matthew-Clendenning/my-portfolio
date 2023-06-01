"use client"

import React, {useState, useEffect, useRef} from 'react'

const Typewriter = ({text}) => {
    const index = useRef(0);

    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        if (index.current < text) {
            setTimeout();
        }
        setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current));
            index.current += 1;
        }, 100);
        }, [currentText]);

    return (
        <h1>{currentText}</h1>
    );
};

export default Typewriter;