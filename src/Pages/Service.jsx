import React from 'react'
import "../styles/pages/Service.css"
import service_1 from '../assets/home/service_1.png'
import service_2 from '../assets/home/service_2.png'
import service_3 from '../assets/home/service_3.png'
import service_4 from '../assets/home/service_4.png'
import service_video from '../assets/home/service_video.jpg'
import service_profile_1 from '../assets/service_profile_1.jpg'
import service_profile_2 from '../assets/service_profile_2.jpg'
import { MdFormatQuote } from 'react-icons/md'
import service_grid_1 from '../assets/service_grid_1.png'
import service_grid_2 from '../assets/service_grid_2.png'
import service_grid_3 from '../assets/service_grid_3.png'
import service_grid_4 from '../assets/service_grid_4.png'
import WorkImage_1 from '../assets/home/work_1.jpg';
import WorkImage_3 from '../assets/home/work_3.jpg';
import { FiPlus } from 'react-icons/fi';
import Image_1 from '../assets/home/image_1.png'
import Image_2 from '../assets/home/image_2.png'
import Image_3 from '../assets/home/image_3.png'
import Image_4 from '../assets/home/image_4.png'
import Image_5 from '../assets/home/image_5.png'
import { GrPlayFill } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Service = () => {
    return (
        <div className='container-fluid'>
            {/* <div className='service-section-1'>
                <h1 className='text-center section_head'>Services</h1>
                <div className="underline mt-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
            </div> */}
            <div className='service-section-2'>
                <h1 className='text-center section_head'>Our Services</h1>
                <div className="underline mt-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
                <div className='container text-center section_2___grid'>
                    <div className="card border-0 hover-card">
                        <img src={service_1} className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Architecture</h5>
                            <p className="card-text">The skills, knowledge and experience is what we make of this. The craftsmanship given by a professional gives a home its value as well as its character. And we aim at providing these skills to you.</p>
                            {/* <a href="/">Read More</a> */}
                        </div>
                    </div>
                    <div className="card-video border-0">
                        <img src={service_video} alt="video_image" />
                        <a href='/' className="video-btn">
                            <GrPlayFill className='video-btn-icon' />
                        </a>
                    </div>
                    <div className="card border-0 hover-card">
                        <img src={service_2} className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Vision</h5>
                            <p className="card-text">The vision of our company is to take the real estate industry in the areas that have never been explored before and change the overall scenario of real estate sector in the emerging areas. The Mission of our company is to help people to create realm of their own for a highly satisfying and successful life. </p>
                            {/* <a href="/">Read More</a> */}
                        </div>
                    </div>
                    <div className="card border-0 hover-card">
                        <img src={service_3} className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Goal</h5>
                            <p className="card-text">Our goal is to secure a place of prominence in the real estate industry and more importantly, in the hearts of the people.  To achieve benchmark in quality that touches every walk of life and human needs, and to live up to the expectations and discerning commitment of quality and customer satisfaction.</p>
                            {/* <a href="/">Read More</a> */}
                        </div>
                    </div>
                    <div className="card border-0 hover-card">
                        <img src={service_4} className="card_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Aim</h5>
                            <p className="card-text">Our aim is to provide what you wish for. A mode to achieve and fulfill your dreams. Comfort that holds up no doubt and a beginning  to your dream life.</p>
                            {/* <a href="/">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-section-3 section_6">
                <img src={Image_1} alt="" />
                <img src={Image_2} alt="" />
                <img src={Image_3} alt="" />
                <img src={Image_4} alt="" />
                <img src={Image_5} alt="" />
            </div>
            <div className="service-section-4 section_3">
                <div className="background_parallax"></div>
                <h1 className='text-center section_head'>What We Offer</h1>
                <div className="underline mt-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
                <div className='container-fluid section_3___grid px-5'>
                    <div className='row d-flex gap-2 justify-content-center'>
                        <div className="card rounded-0 col-lg">
                            <img src={WorkImage_1} className="card-img-top rounded-0 w-100" alt="Work_Image" />
                            <div className="card-body-cont">
                                <div className="card-body hover-card">
                                    <h5 className="card-title">Survi Pristine</h5>
                                    <p className="card-text">With Pioneering innovation in gated communities, we at SURVI Group have been holding an unwavering vision to offer a sustainable balance between affordability and luxury.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card rounded-0 col-lg">
                            <img src={WorkImage_1} className="card-img-top rounded-0 w-100" alt="Work_Image" />
                            <div className="card-body-cont">
                                <div className="card-body hover-card">
                                    <h5 className="card-title">Survi Pristine</h5>
                                    <p className="card-text">With Pioneering innovation in gated communities, we at SURVI Group have been holding an unwavering vision to offer a sustainable balance between affordability and luxury.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card rounded-0 col-lg">
                            <img src={WorkImage_3} className="card-img-top" alt="Work_Image" />
                            <div className="card-body-cont">
                                <div className="card-body hover-card">
                                    <h5 className="card-title">Survi Prive</h5>
                                    <p className="card-text">
                                        Survi Prive is here to dazzle the commercial city with its high-end architecture and a prime location.
                                        {/* <br /><br /> */}{" "}
                                        It’s not just another commercial building but a whole eco-system that glitters of sophistication and grandeur.
                                    </p>
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
            <div className="service-section-5">
                <div className='service-sec5-header'>
                    <h1 className='text-center section_head'>WHY CHOOSING US?</h1>
                    <div className="underline mt-4">
                        <div className="underline-middleline"></div>
                        <div className="underline-leftcircle"></div>
                        <div className="underline-rightcircle"></div>
                    </div>
                </div>
                <div className='service-sec5--block'>
                    <div className='service-sec5--block-head'>
                        <div className='block-item'>
                            <img src={service_grid_1} alt="" />
                            <h3>325</h3>
                            <h5>Clients</h5>
                        </div>
                        <div className='block-item'>
                            <img src={service_grid_2} alt="" />
                            <h3>2056</h3>
                            <h5>Projects</h5>
                        </div>
                        <div className='block-item'>
                            <img src={service_grid_3} alt="" />
                            <h3>560</h3>
                            <h5>Workers</h5>
                        </div>
                        <div className='block-item'>
                            <img src={service_grid_4} alt="" />
                            <h3>156</h3>
                            <h5>Coffee</h5>
                        </div>
                    </div>
                    <div className='service-sec5--block-mid'>
                        <div className='block-mid'>
                            <h3>Find out What Our Clients Say About us? <Link to="/">Do want to Learn More</Link></h3>
                        </div>
                    </div>
                    <div className='service-sec5--block-end'>
                        <div className='card block-end'>
                            <div className="card-head">
                                <MdFormatQuote />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole</p>
                                <img src={service_profile_1} alt="" />
                                <h2 className='card-profile-name'>SARA MORDOC</h2>
                                <h2 className='card-profile-job'>CEO at Compaxit</h2>
                            </div>
                        </div>
                        <div className='card block-end'>
                            <div className="card-head">
                                <MdFormatQuote />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole</p>
                                <img src={service_profile_1} alt="" />
                                <h2 className='card-profile-name'>SARA MORDOC</h2>
                                <h2 className='card-profile-job'>CEO at Compaxit</h2>
                            </div>
                        </div>
                        <div className='card block-end'>
                            <div className="card-head">
                                <MdFormatQuote />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole</p>
                                <img src={service_profile_1} alt="" />
                                <h2 className='card-profile-name'>SARA MORDOC</h2>
                                <h2 className='card-profile-job'>CEO at Compaxit</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service