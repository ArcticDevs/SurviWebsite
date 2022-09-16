import { useState } from 'react';
import Footer from '../components/Footer';
import WorkImage_1 from '../assets/home/work_1.jpg';
import WorkImage_2 from '../assets/home/work_2.jpg';
import WorkImage_3 from '../assets/home/work_3.jpg';
import "../styles/Home.css"
import { FiPlus } from 'react-icons/fi';
import Image_1 from '../assets/home/image_1.png'
import Image_2 from '../assets/home/image_2.png'
import Image_3 from '../assets/home/image_3.png'
import Image_4 from '../assets/home/image_4.png'
import Image_5 from '../assets/home/image_5.png'
import service_1 from '../assets/home/service_1.png'
import service_2 from '../assets/home/service_2.png'
import service_3 from '../assets/home/service_3.png'
import service_video from '../assets/home/service_video.jpg'
import service_profile_1 from '../assets/service_profile_1.jpg'
import service_profile_2 from '../assets/service_profile_2.jpg'
import service_quote from '../assets/service_quote.png'
import { GrFacebookOption, GrTwitter, GrGooglePlus, GrInstagram, GrPlayFill } from 'react-icons/gr'
import { BsBehance } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import project_1 from '../assets/home/project_1.jpg'
import project_2 from '../assets/home/project_2.jpg'
import project_3 from '../assets/home/project_3.jpg'
import project_4 from '../assets/home/project_4.jpeg'
import project_5 from '../assets/home/project_5.jpg'
import project_6 from '../assets/home/project_6.jpeg'
import project_icon from '../assets/home/project_hover.png'
import SlideModal from '../components/SlideModal';

const Home = () => {

    const [projectImageList, setProjectImageList] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const handleProjectClick = (data) => {
        setProjectImageList(data);
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className='container-fluid'>
                <div className="section_1">
                    <div className='section_1___box'>
                        <h1>WE TAKE YOUR DREAM HOME AND MAKE IT REAL</h1>
                        <h6 className='my-3'>Your stunning website is just a few clicks away. It's easy and free</h6>
                        {/* <button type='button' className='btn bg-white text-warning rounded-0' style={{ padding: '12px 25px', fontSize: '12px' }}>Get a Free Quote</button> */}
                    </div>
                    <div className='parallax'></div>
                    {/* <img src={HomeImage} alt="home_image" /> */}
                </div>
                <div className="section_2">
                    <h1 className='text-center'>Our Services</h1>
                    <div className="underline mt-4">
                        <div className="underline-middleline"></div>
                        <div className="underline-leftcircle"></div>
                        <div className="underline-rightcircle"></div>
                    </div>
                    <div className='container gap-3 text-center section_2___grid'>
                        <div className="card border-0">
                            <img src={service_1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Renovation</h5>
                                <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                        <div className="card-video border-0">
                            <img src={service_video} alt="video_image" />
                            <a href='/' className="video-btn">
                                <GrPlayFill className='video-btn-icon' />
                            </a>
                        </div>
                        <div className="card border-0">
                            <img src={service_2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Renovation</h5>
                                <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                        <div className="card border-0">
                            <img src={service_3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Renovation</h5>
                                <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                        <div className="card border-0">
                            <img src={service_1} className="card-img-top" alt="..." />
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
                    {/* <div className="section_4___background"></div> */}
                    <div className='row section_4___row text-center'>
                        <div className="card col-4 col">
                            <div className="card-head">
                                <img src={service_quote} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole</p>
                                <img src={service_profile_1} alt="" />
                                <h2 className='card-profile-name'>SARA MORDOC</h2>
                                <h2 className='card-profile-job'>CEO at Compaxit</h2>
                            </div>
                        </div>
                        <div className="card col-4 col">
                            <div className="card-head">
                                <img src={service_quote} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Our object in the construction of the state is the greatest happiness of the whole</p>
                                <img src={service_profile_2} alt="" />
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
                    <div className='row'>
                        <div className='project' onClick={() => handleProjectClick([project_1, project_2, project_3])}>
                            <img className='project-image' src={project_1} alt="" />
                            <div className='project-hover'>
                                <img src={project_icon} alt="" />
                                <span className='ms-3'>Quick View</span>
                            </div>
                        </div>
                        <div className='project' onClick={() => handleProjectClick([project_2, project_3, project_4])}>
                            <img className='project-image' src={project_2} alt="" />
                            <div className='project-hover'>
                                <img src={project_icon} alt="" />
                                <span className='ms-3'>Quick View</span>
                            </div>
                        </div>
                        <div className='project' onClick={() => handleProjectClick([project_3, project_4, project_5])}>
                            <img className='project-image' src={project_3} alt="" />
                            <div className='project-hover'>
                                <img src={project_icon} alt="" />
                                <span className='ms-3'>Quick View</span>
                            </div>
                        </div>
                        <div className='project' onClick={() => handleProjectClick([project_4, project_5, project_6])}>
                            <img className='project-image' src={project_4} alt="" />
                            <div className='project-hover'>
                                <img src={project_icon} alt="" />
                                <span className='ms-3'>Quick View</span>
                            </div>
                        </div>
                        <div className='project' onClick={() => handleProjectClick([project_5, project_6, project_1])}>
                            <img className='project-image' src={project_5} alt="" />
                            <div className='project-hover'>
                                <img src={project_icon} alt="" />
                                <span className='ms-3'>Quick View</span>
                            </div>
                        </div>
                        <div className='project' onClick={() => handleProjectClick([project_6, project_1, project_2])}>
                            <img className='project-image' src={project_6} alt="" />
                            <div className='project-hover'>
                                <img src={project_icon} alt="" />
                                <span className='ms-3'>Quick View</span>
                            </div>
                        </div>
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
                    <h2 className="text-center mt-5">
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
                            <input type="email" className="form-control subscribe_input" placeholder="Enter your Email" />
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
            <SlideModal imageList={projectImageList} show={showModal} close={handleModalClose} />
            <Footer />
        </>
    )
}

export default Home