import React, { useState, useEffect } from "react";
import '../styles/Blog.css';

const App = () => {
    return (
        <>
            <div className="container-fluid px-4 mt-5">
                <div className="row">
                    <div className="blog_container1 mb-5">
                        <div className="blog_container pt-5">
                            <div className="blog_content">
                                <h1 className="blog_text pt-5">blog</h1>
                                <div className="blog_underline mt-4">
                                    <div className="blog_underline-middleline"></div>
                                    <div className="blog_underline-leftcircle"></div>
                                    <div className="blog_underline-rightcircle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_container2 mt-5 pb-5">
                        <div className="blog_card col-xl-9 col-lg-10 col-md-12 col-sm-10 col-12">
                            <img
                                className="blog_card-image"
                                loading="lazy"
                                src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2ced778c2b17fbb9bf5c8c_photo-1506862047911-9815cdcb77c2-(1).jpg"
                                alt="card"
                            />
                            <h1 className="blog_card-title">The History Of Mason</h1>
                            <p className="blog_card-text">
                                Our object in the construction of the state is the greatest
                                happiness of the whole, and not that of any one class.
                            </p>
                            <span className="blog_card-readmore">Read more</span>
                        </div>
                        <div className="blog_card col-xl-9 col-lg-10 col-md-12 col-sm-10 col-12">
                            <img
                                className="blog_card-image"
                                loading="lazy"
                                src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2ced778c2b17fbb9bf5c8c_photo-1506862047911-9815cdcb77c2-(1).jpg"
                                alt="card"
                            />
                            <h1 className="blog_card-title">The History Of Mason</h1>
                            <p className="blog_card-text">
                                Our object in the construction of the state is the greatest
                                happiness of the whole, and not that of any one class.
                            </p>
                            <span className="blog_card-readmore">Read more</span>
                        </div>
                        <div className="blog_card col-xl-9 col-lg-10 col-md-12 col-sm-10 col-12">
                            <img
                                className="blog_card-image"
                                loading="lazy"
                                src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2ced778c2b17fbb9bf5c8c_photo-1506862047911-9815cdcb77c2-(1).jpg"
                                alt="card"
                            />
                            <h1 className="blog_card-title">The History Of Mason</h1>
                            <p className="blog_card-text">
                                Our object in the construction of the state is the greatest
                                happiness of the whole, and not that of any one class.
                            </p>
                            <span className="blog_card-readmore">Read more</span>
                        </div>
                        <div className="blog_card col-xl-9 col-lg-10 col-md-12 col-sm-10 col-12">
                            <img
                                className="blog_card-image"
                                loading="lazy"
                                src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2ced778c2b17fbb9bf5c8c_photo-1506862047911-9815cdcb77c2-(1).jpg"
                                alt="card"
                            />
                            <h1 className="blog_card-title">The History Of Mason</h1>
                            <p className="blog_card-text">
                                Our object in the construction of the state is the greatest
                                happiness of the whole, and not that of any one class.
                            </p>
                            <span className="blog_card-readmore">Read more</span>
                        </div>
                        <div className="blog_card col-xl-9 col-lg-10 col-md-12 col-sm-10 col-12">
                            <img
                                className="blog_card-image"
                                loading="lazy"
                                src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2ced778c2b17fbb9bf5c8c_photo-1506862047911-9815cdcb77c2-(1).jpg"
                                alt="card"
                            />
                            <h1 className="blog_card-title">The History Of Mason</h1>
                            <p className="blog_card-text">
                                Our object in the construction of the state is the greatest
                                happiness of the whole, and not that of any one class.
                            </p>
                            <span className="blog_card-readmore">Read more</span>
                        </div>
                    </div>
                    <div className="blog_container3 py-5">
                        <div className="blog_container3-content">
                            <h2 className="blog_container3-title mt-5">
                                Subscribe to Newsletter
                            </h2>
                            <p className="blog_container3-text mt-4">
                                If you can show people how to build castles, make sure you
                                <br />
                                do not neglect building and nurturing your own.
                            </p>
                            <div className="blog_underline mt-2 mb-5">
                                <div className="blog_underline-middleline"></div>
                                <div className="blog_underline-leftcircle"></div>
                                <div className="blog_underline-rightcircle"></div>
                            </div>
                            <div className="blog_container3-form mt-5">
                                <input
                                    type="text"
                                    maxlength="256"
                                    name="name-2"
                                    placeholder="Enter your email..."
                                    className="blog_input"
                                />
                                <button className="blog_input-btn">Get Started</button>{" "}
                            </div>

                            <div className="blog_socials mt-5">
                                <a href="#" className="blog_socials-icon blog_socials-1"></a>
                                <a
                                    href="#"
                                    className="blog_socials-icon blog_socials-2"
                                    id="A_3"
                                ></a>
                                <a
                                    href="#"
                                    className="blog_socials-icon blog_socials-3"
                                    id="A_4"
                                ></a>
                                <a
                                    href="#"
                                    className="blog_socials-icon blog_socials-4"
                                    id="A_5"
                                ></a>
                                <a
                                    href="#"
                                    className="blog_socials-icon blog_socials-5"
                                    id="A_6"
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="blog_container4 mb-5 col-9 mx-auto">
                        <div className="blog_container4-first">
                            <h1 className="blog_container4-h1">About Ibuild</h1>
                            <p className="blog_container4-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                                viverra ornare, eros dolor.
                            </p>
                        </div>
                        <div className="blog_container4-second">
                            <h1 className="blog_container4-h1">California</h1>
                            <div className="d-flex mb-4">
                                <img
                                    src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2325caa27ff2351f749_icons8-marker-80.png"
                                    alt=""
                                    className="blog_container4-img"
                                />
                                <div className='blog_container4-text'>San Francisco, CA 94111</div>
                            </div>
                            <div className="d-flex mb-4">
                                <img
                                    src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2310c31f0a08a21cd3a_icons8-phone-80.png"
                                    alt=""
                                    className='blog_container4-img'
                                />

                                <div className='blog_container4-text'>+1 202 234 567 890</div>
                            </div>
                            <div className="d-flex mb-4">
                                <img
                                    src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2312cfebf720c55ba05_icons8-email-send-80.png"
                                    alt=""
                                    className='blog_container4-img'
                                />
                                <div id="DIV_21">
                                    <div className='blog_container4-text'>ibuild@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="blog_container4-third">
                            <h1 className="blog_container4-h1">New york</h1>
                            <div className="d-flex mb-4">
                                <img
                                    src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2325caa27ff2351f749_icons8-marker-80.png"
                                    alt=""
                                    className='blog_container4-img'
                                />
                                <div className='blog_container4-text'>Manhattan, NY 10001</div>
                            </div>
                            <div className="d-flex mb-4">
                                <img
                                    src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2310c31f0a08a21cd3a_icons8-phone-80.png"
                                    alt=""
                                    className='blog_container4-img'
                                />
                                <div className='blog_container4-text'>+1 202 234 567 890</div>
                            </div>
                            <div className="d-flex mb-4">
                                <img
                                    src="https://assets.website-files.com/5e18b950687bae113b6f6888/5e1de2312cfebf720c55ba05_icons8-email-send-80.png"
                                    alt=""
                                    className='blog_container4-img'
                                />
                                <div className='blog_container4-text'>ibuild@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;