import React from 'react'
import AnimatedSubscribe from './AnimatedSubscribe'
import '../styles/components/Subscribe.css'
import { GrFacebookOption, GrTwitter, GrGooglePlus, GrInstagram } from 'react-icons/gr'
import { BsBehance } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const Subscribe = () => {
    return (
        <div>
            <div className="subscribe-section">
                <AnimatedSubscribe />
                <h2 className="text-center">
                    Subscribe to Newsletter
                </h2>
                <p className="text-center mt-4">
                    If you can show people how to build castles, make sure you
                    <br />
                    do not neglect building and nurturing your own.
                </p>
                <div className="underline mt-2 mb-5">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
                <div className="subscribe-form d-flex text-center mx-auto">
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <FiMail />
                        </span>
                        <input type="email" className="form-control subscribe_input shadow-none" placeholder="Enter your Email" />
                    </div>
                    <button className="blog_input-btn ms-md-3">Get Started</button>{" "}
                </div>
                <div className="subscribe_section___social_icons mt-5">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <GrFacebookOption />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <GrTwitter />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <GrGooglePlus />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <GrInstagram />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <BsBehance />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Subscribe