import React from 'react';
import HomeImage from '../Assets/home.png';
import WorkImage_1 from '../Assets/work_1.jpg';
import WorkImage_2 from '../Assets/work_2.jpg';
import WorkImage_3 from '../Assets/work_3.jpg';
import "../styles/Home.css"
import { FiPlus } from 'react-icons/fi';
import Image_1 from '../Assets/image_1.png'
import Image_2 from '../Assets/image_2.png'
import Image_3 from '../Assets/image_3.png'
import Image_4 from '../Assets/image_4.png'
import Image_5 from '../Assets/image_5.png'
import SubscribeNewsFooter from '../Components/SubscribeNewsFooter';

const Home = () => {
    return (
        <div className='container-fluid'>
            <div className="section_1">
                <div className='section_1___box'>
                    <h1>WE TAKE YOUR DREAM HOME AND MAKE IT REAL</h1>
                    <h6 className='my-3'>Your stunning website is just a few clicks away. It's easy and free</h6>
                    <button type='button' className='btn bg-white text-warning rounded-0' style={{ padding: '12px 25px', fontSize: '12px' }}>Get a Free Quote</button>
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
                        <h2>WHAT THEY SAY</h2>
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
                <SubscribeNewsFooter/>
            </div>
        </div>
    )
}

export default Home