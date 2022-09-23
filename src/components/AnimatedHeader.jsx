import React from 'react'
import { motion } from 'framer-motion';
import '../styles/AnimatedHeader.css';

const AnimatedHeader = () => {

    return (
            <ul className='animated-box'>
                {[...Array(12)].map((val, index) =>
                    <li key={index}></li>
                )}
            </ul>
    )
}

export default AnimatedHeader