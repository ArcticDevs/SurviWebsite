import React from 'react';
import HomeImage from '../assets/home.jpg';
import WorkImage_1 from '../assets/work_1.jpg';
import WorkImage_2 from '../assets/work_2.jpg';
import WorkImage_3 from '../assets/work_3.jpg';
import "../styles/Home.css"
import { FiPlus } from 'react-icons/fi';
import Image_1 from '../assets/image_1.png'
import Image_2 from '../assets/image_2.png'
import Image_3 from '../assets/image_3.png'
import Image_4 from '../assets/image_4.png'
import Image_5 from '../assets/image_5.png'

const Home = () => {
    return (
        <div className='container-fluid'>
            <div className="section_1">
                <div className='section_1___box'>
                    <h1>WE TAKE YOUR DREAM HOME AND MAKE IT REAL</h1>
                    <h6 className='my-3'>Your stunning website is just a few clicks away. It's easy and free</h6>
                    <button type='button' className='btn bg-white text-primary rounded-0' style={{ padding: '12px 25px', fontSize: '12px' }}>Get a Free Quote</button>
                </div>
                <img src={HomeImage} alt="home_image" />
            </div>
            <div className="section_2">
                <h1 className='text-center'>Our Services</h1>
                <div className="underline mt-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
                <div className='container text-center section_2___grid'>
                    <div className="card border-0">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Renovation</h5>
                            <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div className="card card-video border-0">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Renovation</h5>
                            <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div className="card border-0">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Renovation</h5>
                            <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div className="card border-0">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Renovation</h5>
                            <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div className="card border-0">
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Renovation</h5>
                            <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_3">
                <h1 className='text-center'>What We Offer</h1>
                <div className="underline mt-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
                <div className='container section_3___grid'>
                    <div className='row'>
                        <div className="card rounded-0 col-lg-4">
                            <img src={WorkImage_1} className="card-img-top rounded-0 w-100" alt="Work_Image" />
                            <div className="card-body-cont">
                                <div className="card-body hover-card">
                                    <h5 className="card-title">Renovation</h5>
                                    <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card rounded-0 col-lg-4">
                            <img src={WorkImage_2} className="card-img-top" alt="Work_Image" />
                            <div className="card-body-cont">
                                <div className="card-body hover-card">
                                    <h5 className="card-title">Renovation</h5>
                                    <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card rounded-0 col-lg-4">
                            <img src={WorkImage_3} className="card-img-top" alt="Work_Image" />
                            <div className="card-body-cont">
                                <div className="card-body hover-card">
                                    <h5 className="card-title">Renovation</h5>
                                    <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/" className='section_3___service_btn'>
                    <div className="box">
                        <FiPlus />
                    </div>
                    <span>
                        View More Services
                    </span>
                </a>
            </div>
            <div className="section_4">
                <div className="section_4___background"></div>
                <div className='row section_4___row text-center'>
                    <div className="card col-lg-4">
                        <div className="card-head"></div>
                        <div className="card-body">
                            <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole</p>
                            <img src="" alt="" />
                            <h2 className='card-profile-name'>SARA MORDOC</h2>
                            <h2 className='card-profile-job'>CEO at Compaxit</h2>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-head"></div>
                        <div className="card-body">
                            <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole</p>
                            <img src="" alt="" />
                            <h2 className='card-profile-name'>MARIA MORIO</h2>
                            <h2 className='card-profile-job'>CEO at Compaxit</h2>
                        </div>
                    </div>
                    <div className='btn_card col-lg-4'>
                        <h2>WHAT THAY SAY</h2>
                        <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                        <a href="/" className='section_3___service_btn'>
                            <div className="box">
                                <FiPlus />
                            </div>
                            <span>
                                View More Services
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="section_5">
                <h1 className='text-center'>Our Projects</h1>
                <div className="underline mt-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
            </div>
            <div className="section_6">
                <img src={Image_1} alt="" />
                <img src={Image_2} alt="" />
                <img src={Image_3} alt="" />
                <img src={Image_4} alt="" />
                <img src={Image_5} alt="" />
            </div>
            <div className="section_7">
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
    )
}

export default Home