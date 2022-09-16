import React from 'react'
import "../styles/Footer.css"
import { GoLocation } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left d-flex flex-column">
                <h1>About Ibuild</h1>
                <div className='d-flex gap-2 footer_left___grid'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                        viverra ornare, eros dolor.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                        viverra ornare, eros dolor.
                    </p>
                </div>
            </div>
            <div className="footer_right d-flex flex-column">
                <h1 className="">California</h1>
                <div className="d-flex mb-4 align-items-center">
                    <GoLocation />
                    {/* <img
                        src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2325caa27ff2351f749_icons8-marker-80.png"
                        alt=""
                        className="blog_container4-img"
                    /> */}
                    <p className='ms-3'>San Francisco, CA 94111</p>
                </div>
                <div className="d-flex mb-4 align-items-center">
                    {/* <img
                        src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2310c31f0a08a21cd3a_icons8-phone-80.png"
                        alt=""
                        className='blog_container4-img'
                    /> */}
                    <FiPhone />
                    <p className='ms-3'>+1 202 234 567 890</p>
                </div>
                <div className="d-flex mb-4 align-items-center">
                    {/* <img
                        src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2312cfebf720c55ba05_icons8-email-send-80.png"
                        alt=""
                        className='blog_container4-img'
                    /> */}
                    <SiMinutemailer />
                    <p className='ms-3'>ibuild@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer