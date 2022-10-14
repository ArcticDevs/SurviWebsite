import React from 'react'
import "../styles/components/Footer.css"
import { GoLocation } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';

const Footer = () => {
    return (
        <div className="container-fluid">
        <div className="footer container-fluid">
            <div className="footer_left d-flex flex-column">
                <h1>About Ibuild</h1>
                <div className='d-flex gap-2 footer_left___grid'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                        viverra ornare, eros dolor.
                    </p>
                </div>
            </div>
            <div className="footer_mid d-flex flex-column">
                <h1 className="">California</h1>
                <div className="d-flex mb-4 align-items-center">
                    <GoLocation />
                    <p className='ms-3'>San Francisco, CA 94111</p>
                </div>
                <div className="d-flex mb-4 align-items-center">
                    <FiPhone />
                    <p className='ms-3'>+1 202 234 567 890</p>
                </div>
                <div className="d-flex mb-4 align-items-center">
                    <SiMinutemailer />
                    <p className='ms-3'>ibuild@gmail.com</p>
                </div>
            </div>
            <div className="footer_right d-flex flex-column">
                <h1 className="">New York</h1>
                <div className="d-flex mb-4 align-items-center">
                    <GoLocation />
                    <p className='ms-3'>San Francisco, CA 94111</p>
                </div>
                <div className="d-flex mb-4 align-items-center">
                    <FiPhone />
                    <p className='ms-3'>+1 202 234 567 890</p>
                </div>
                <div className="d-flex mb-4 align-items-center">
                    <SiMinutemailer />
                    <p className='ms-3'>ibuild@gmail.com</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer