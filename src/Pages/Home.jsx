import { useState } from "react";
import WorkImage_1 from "../assets/home/work_1.jpg";
import useBreakpoints from "../customHooks/useBreakpoints";
import WorkImage_3 from "../assets/home/work_3.jpg";
import "../styles/pages/Home.css";
import { FiPlus } from "react-icons/fi";
import Image_1 from "../assets/home/image_1.png";
import Image_2 from "../assets/home/image_2.png";
import Image_3 from "../assets/home/image_3.png";
import Image_4 from "../assets/home/image_4.png";
import Image_5 from "../assets/home/image_5.png";
import service_1 from "../assets/home/service_1.png";
import service_2 from "../assets/home/service_2.png";
import service_3 from "../assets/home/service_3.png";
import service_4 from "../assets/home/service_4.png";
import service_video from "../assets/home/service_video.jpg";
import service_profile_1 from "../assets/service_profile_1.jpg";
import service_profile_2 from "../assets/service_profile_2.jpg";
import { MdFormatQuote } from "react-icons/md";
import { GrPlayFill } from "react-icons/gr";
import project_1 from "../assets/home/project_1.jpg";
import project_2 from "../assets/home/project_2.jpg";
import project_3 from "../assets/home/project_3.jpg";
import project_4 from "../assets/home/project_4.jpg";
import project_5 from "../assets/home/project_5.jpg";
import project_6 from "../assets/home/project_6.jpg";
import SlideModal from "../components/SlideModal";
import Subscribe from "../components/Subscribe";

const projectData = [
  {
    carouselImage: [project_1, project_2, project_3],
    image: project_1,
    title: "Project 1",
  },
  {
    carouselImage: [project_2, project_3, project_4],
    image: project_2,
    title: "Project 2",
  },
  {
    carouselImage: [project_3, project_4, project_5],
    image: project_3,
    title: "Project 3",
  },
  {
    carouselImage: [project_4, project_5, project_6],
    image: project_4,
    title: "Project 4",
  },
  {
    carouselImage: [project_5, project_6, project_1],
    image: project_5,
    title: "Project 5",
  },
  {
    carouselImage: [project_6, project_1, project_2],
    image: project_6,
    title: "Project 6",
  },
];

const Home = () => {
  const [projectImageList, setProjectImageList] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [viewMore, setViewMore] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const [expandAmenity,setExpandAmenity] = useState({expand:false,index:-1})

  const handleProjectClick = (data, title) => {
    setProjectImageList(data);
    setProjectTitle(title);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setProjectImageList([]);
    setProjectTitle("");
    setShowModal(false);
  };

  const amenities = [
    {
      title: `Interior Features`,
      content: `A home doesn't stop at bedrooms, bathrooms, and a kitchen. Decide whether you would want to make plans for a loft, a den, a home office area, a home theater, a media room, a family room, a gym or workout room, a library, a butler's pantry, a sun room, a basement, guest quarters, or wine storage.`,
    },
    {
      title: `The Importance of Location`,
      content: `The golden rule in real estate is LOCATION.
    You can always add amenities to a home in a good area, but you can't change a bad location. Narrow your list down to your top three to five neighborhoods. Talk to people who live there to find out whether those places are indeed where you might want to live. 
    Let your agent know the ZIP codes you'd like. You can also define the area by street boundaries so your agent can draw a map search. Location types can include a view of coast, city or hills, waterfront, greenbelt, golf course, suburban, city, raised elevation or mountains, cul-de-sac, a dead-end street, or a gated community.
    `,
    },
    {
      title: `Recreational facilities`,
      content: `Houses must offer recreational facilities within premises. These facilities include play areas for kids, swimming pools, or tennis courts. Kids love playing different games and spending their time outside doing fun and recreational activities. A property that provides amenities to support their growth is more appreciated than those who do not offer these facilities. Maintenance and safety of these facilities is an essential factor.`,
    },
    {
      title: `TECHNOLOGY`,
      content: `We live in a modern world, where technology is improving every day. Technology plays an important role when you look at a property. Nowadays, newer homes have also integrated green technology, solar energy systems, home temperature and climate setting, lighting controls, bathroom water temperature control, gas-leak alarm, and high-tech water irrigation systems. These are some of the high-tech amenities that you should look for in a new property.`,
    },
  ];

  const { isXl } = useBreakpoints();

  return (
    <>
      <div className="home-page">
        <div className="section_1">
          <div className="section_1___box">
            <h1>MOULDING A STRUCTURE FOR YOUR DREAMS.</h1>
            <h6 className="my-3">
              As real estate developers, we think that our goal is to build
              landmarks that alter living and working environments, not merely
              create spaces.
            </h6>
            {/* <button type='button' className='btn bg-white text-warning rounded-0' style={{ padding: '12px 25px', fontSize: '12px' }}>Get a Free Quote</button> */}
          </div>
          <div className="parallax"></div>
          {/* <img src={HomeImage} alt="home_image" /> */}
        </div>
        <div className="section_2 ">
          <h1 className="text-center section_head space_below_title">Our Services</h1>
          <div className="underline my-4 space_below_title">
            <div className="underline-middleline"></div>
            <div className="underline-leftcircle"></div>
            <div className="underline-rightcircle"></div>
          </div>
          <div className="container text-center section_2___grid">
            <div className="card border-0 hover-card">
              <img src={service_1} className="card_img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Architecture</h5>
                <p className="card-text">
                  The skills, knowledge and experience is what we make of this.
                  The craftsmanship given by a professional gives a home its
                  value as well as its character. And we aim at providing these
                  skills to you.
                </p>
                {/* <a href="/">Read More</a> */}
              </div>
            </div>
            <div className="card-video border-0">
              <img src={service_video} alt="video_image" />
              <a href="/" className="video-btn">
                <GrPlayFill className="video-btn-icon" />
              </a>
            </div>
            <div className="card border-0 hover-card">
              <img src={service_2} className="card_img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Vision</h5>
                <p className="card-text">
                  The vision of our company is to take the real estate industry
                  in the areas that have never been explored before and change
                  the overall scenario of real estate sector in the emerging
                  areas. The Mission of our company is to help people to create
                  realm of their own for a highly satisfying and successful
                  life.{" "}
                </p>
                {/* <a href="/">Read More</a> */}
              </div>
            </div>
            <div className="card border-0 hover-card">
              <img src={service_3} className="card_img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Goal</h5>
                <p className="card-text">
                  Our goal is to secure a place of prominence in the real estate
                  industry and more importantly, in the hearts of the people. To
                  achieve benchmark in quality that touches every walk of life
                  and human needs, and to live up to the expectations and
                  discerning commitment of quality and customer satisfaction.
                </p>
                {/* <a href="/">Read More</a> */}
              </div>
            </div>
            <div className="card border-0 hover-card">
              <img src={service_4} className="card_img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Aim</h5>
                <p className="card-text">
                  Our aim is to provide what you wish for. A mode to achieve and
                  fulfill your dreams. Comfort that holds up no doubt and a
                  beginning to your dream life.
                </p>
                {/* <a href="/">Read More</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="section_3">
          <div className="background_parallax"></div>
          <h1 className="text-center section_head">What We Offer</h1>
          <div className="underline my-4">
            <div className="underline-middleline"></div>
            <div className="underline-leftcircle"></div>
            <div className="underline-rightcircle"></div>
          </div>
          <div className="container section_3___grid mt-5">
            <div className="row d-flex gap-4 justify-content-center">
              <div className="card rounded-0 col-lg">
                <img
                  src={WorkImage_1}
                  className="card-img-top rounded-0 w-100"
                  alt="Work_Image"
                />
                <div className="card-body-cont">
                  <div className="card-body hover-card">
                    <h5 className="card-title">Survi Pristine</h5>
                    <p className="card-text">
                      With Pioneering innovation in gated communities, we at
                      SURVI Group have been holding an unwavering vision to
                      offer a sustainable balance between affordability and
                      luxury.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card rounded-0 col-lg">
                <img
                  src={WorkImage_3}
                  className="card-img-top"
                  alt="Work_Image"
                />
                <div className="card-body-cont">
                  <div className="card-body hover-card">
                    <h5 className="card-title">Survi Prive</h5>
                    <p className="card-text">
                      Survi Prive is here to dazzle the commercial city with its
                      high-end architecture and a prime location.
                      {/* <br /><br /> */} It’s not just another commercial
                      building but a whole eco-system that glitters of
                      sophistication and grandeur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="/" className="section_3___service_btn">
            <div className="box">
              <FiPlus />
            </div>
            <span>View More Services</span>
          </a>
        </div>

        <div className="section_4 mt-0 mb-0">
          <div className="row section_4___row text-center">
            {isXl ? (
              <>
                <div className="btn_card col-lg-4">
                  <h2>WHAT THEY SAY</h2>
                  <div className="underline my-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                  </div>
                  <p className="card-text">
                    Our object in the construction of the state is the greatest
                    happiness of the whole, and not that of any one class.
                  </p>
                  <a href="/" className="section_3___service_btn">
                    <div className="box">
                      <FiPlus />
                    </div>
                    <span>View More Services</span>
                  </a>
                </div>
                <div className="card col-4 col hover-card">
                  <div className="card-head">
                    <MdFormatQuote />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Our object in the construction of the state is the
                      greatest happiness of the whole
                    </p>
                    <img src={service_profile_1} alt="" />
                    <h2 className="card-profile-name">SARA MORDOC</h2>
                    <h2 className="card-profile-job">CEO at Compaxit</h2>
                  </div>
                </div>
                <div className="card col-4 col hover-card">
                  <div className="card-head">
                    <MdFormatQuote />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Our object in the construction of the state is the
                      greatest happiness of the whole
                    </p>
                    <img src={service_profile_2} alt="" />
                    <h2 className="card-profile-name">MARIA MORIO</h2>
                    <h2 className="card-profile-job">CEO at Compaxit</h2>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="card col-4 col hover-card">
                  <div className="card-head">
                    <MdFormatQuote />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Our object in the construction of the state is the
                      greatest happiness of the whole
                    </p>
                    <img src={service_profile_1} alt="" />
                    <h2 className="card-profile-name">SARA MORDOC</h2>
                    <h2 className="card-profile-job">CEO at Compaxit</h2>
                  </div>
                </div>
                <div className="card col-4 col hover-card">
                  <div className="card-head">
                    <MdFormatQuote />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Our object in the construction of the state is the
                      greatest happiness of the whole
                    </p>
                    <img src={service_profile_2} alt="" />
                    <h2 className="card-profile-name">MARIA MORIO</h2>
                    <h2 className="card-profile-job">CEO at Compaxit</h2>
                  </div>
                </div>
                <div className="btn_card col-lg-4">
                  <h2>WHAT THEY SAY</h2>
                  <div className="underline mt-4 mx-0 mb-0">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                  </div>
                  <p className="card-text">
                    Our object in the construction of the state is the greatest
                    happiness of the whole, and not that of any one class.
                  </p>
                  <a href="/" className="section_3___service_btn">
                    <div className="box">
                      <FiPlus />
                    </div>
                    <span>View More Services</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="section_5">
          <h1 className="text-center section_head">How we stand apart</h1>
          <div className="underline mt-4">
            <div className="underline-middleline"></div>
            <div className="underline-leftcircle"></div>
            <div className="underline-rightcircle"></div>
          </div>
          <div className="row d-flex justify-content-center" style={{marginTop:'-25px'}}>
            <div className="service-section-4 section_3">
              <div className="container-fluid section_3___grid px-5">
                {amenities.map((curr, index) => (
                  index%2 === 0 && index < viewMore && <div className="row d-flex gap-2 justify-content-center">
                    <div className="card rounded-0 col-lg">
                      <img
                        src={WorkImage_1}
                        className="card-img-top rounded-0 w-100"
                        alt="Work_Image"
                      />
                      <div className="card-body-cont">
                        <div
                          className="card-body hover-card"
                          style={{ boxShadow: "inset 0 0 0 1px #c4c4c4" }}
                        >
                          <h5 className="card-title">{amenities[index].title}</h5>
                          <p className="card-text" style={{position:'relative',zIndex:'999'}}>
                          {expandAmenity.expand && expandAmenity.index === index ? amenities[index].content : amenities[index].content.substring(0,170)}{expandAmenity.expand && expandAmenity.index === index ? <span className="text-secondary" onClick={() => setExpandAmenity({expand:false,index:-1})} style={{cursor:'pointer'}}>(read less)</span> : <span className="text-secondary" onClick={() => setExpandAmenity({expand:true,index:index})} style={{cursor:'pointer'}}>...read more</span>}  
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card rounded-0 col-lg">
                      <img
                        src={WorkImage_1}
                        className="card-img-top rounded-0 w-100"
                        alt="Work_Image"
                      />
                      <div className="card-body-cont">
                        <div
                          className="card-body hover-card"
                          style={{ boxShadow: "inset 0 0 0 1px #c4c4c4" }}
                        >
                          <h5 className="card-title">{amenities[index+1].title}</h5>
                          <p className="card-text" style={{position:'relative',zIndex:'999'}}>
                          {expandAmenity.expand && expandAmenity.index === index+1 ? amenities[index+1].content : amenities[index+1].content.substring(0,170)}{expandAmenity.expand && expandAmenity.index === index+1 ? <span className="text-secondary" onClick={() => setExpandAmenity({expand:false,index:-1})} style={{cursor:'pointer'}}>(read less)</span> : <span className="text-secondary" onClick={() => setExpandAmenity({expand:true,index:index+1})} style={{cursor:'pointer'}}>...read more</span>}  
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="section_3___service_btn"
                style={{ cursor: "pointer" }}
                onClick={() => setViewMore(viewMore === 3 ? 1 : viewMore + 1)}
              >
                <div className="box">
                  <FiPlus />
                </div>
                <span>View More Services</span>
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
          <Subscribe />
        </div>
      </div>
      <SlideModal
        imageList={projectImageList}
        projectTitle={projectTitle}
        show={showModal}
        close={handleModalClose}
      />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
