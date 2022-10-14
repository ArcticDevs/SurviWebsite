import React from 'react'
import about from '../assets/about.jpg'
import '../styles/pages/About.css'
import useBreakpoints from '../customHooks/useBreakpoints'
import { Link } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import about_tab_1 from '../assets/about_tab_1.jpg'
import service_1 from '../assets/home/service_1.png'
import service_2 from '../assets/home/service_2.png'
import service_3 from '../assets/home/service_3.png'
import { FiPlus } from 'react-icons/fi';
import service_video from '../assets/home/service_video.jpg'
import { GrPlayFill } from 'react-icons/gr'
import service_profile_1 from '../assets/service_profile_1.jpg'
import service_profile_2 from '../assets/service_profile_2.jpg'
import { MdFormatQuote } from 'react-icons/md'
import { GrFacebookOption, GrTwitter, GrGooglePlus, GrInstagram } from 'react-icons/gr'
import { BsBehance } from 'react-icons/bs'
import Subscribe from '../components/Subscribe'

const tabGridData = [
	{
		id: 1,
		title: "Planning Management",
		image: about_tab_1,
		subData: [
			{
				id: "sub1",
				subTitle: "Find builder and subs",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub2",
				subTitle: "Architecture Design",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub3",
				subTitle: "Design Process",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub4",
				subTitle: "Design Process",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
	},
	{
		id: 2,
		title: "Renovation & Improvements",
		image: about_tab_1,
		subData: [
			{
				id: "sub5",
				subTitle: "Find builder and subs",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub6",
				subTitle: "Architecture Design",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub7",
				subTitle: "Design Process",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub8",
				subTitle: "Design Process",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
	},
	{
		id: 3,
		title: "Architecture and Design",
		image: about_tab_1,
		subData: [
			{
				id: "sub9",
				subTitle: "Find builder and subs",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub10",
				subTitle: "Architecture Design",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub11",
				subTitle: "Design Process",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
			{
				id: "sub12",
				subTitle: "Design Process",
				subBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
	},
]

const TabContentData = ({ item }) => {
	return (
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingOne">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + item.id} aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
					{item.subTitle}
				</button>
			</h2>
			<div id={item.id} class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
				<div class="accordion-body">
					{item.subBody}
				</div>
			</div>
		</div>
	)
}

const About = () => {

	const { isXl } = useBreakpoints()

	return (
		<div className='container-fluid about-page'>
			<div className='about-section-1-wrap'>
				<div className="about-section-1">
					<div className='about-sec1-content'>
						<h1>About us</h1>
						<p>Your stunning website is just a few clicks away. It's easy and free</p>
						<button>Purchase Now</button>
					</div>
					<div className='about-sec1-image'>
						<img src={about} alt="" />
					</div>
				</div>
			</div>
			<div className='about-section-2'>
				<div className='about-sec2-left-wrap'>
					<div className='about-sec2-left'>
						<h3>WITH NO POSITIVITY, THERE IS NO HOPE; WITH NO NEGATIVITY, THERE IS NO IMPROVEMENT.</h3>
						<div className='about-sec2--badge'>
							<h4>Find out What Our Clients Say About us?</h4>
							<Link to="/about">Do want to Learn More</Link>
						</div>
					</div>
				</div>
				<div className='about-sec2-right'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Nunc ut sem vitae risus tristique posuere.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
				</div>
			</div>
			<div className="about-section-3 mb-5">
				<div className='about-sec3--head'>
					<h1 className='text-center section_head m-0'>Our Core Features</h1>
					<div className="underline mt-4">
						<div className="underline-middleline"></div>
						<div className="underline-leftcircle"></div>
						<div className="underline-rightcircle"></div>
					</div>
				</div>
				<div className='about-sec3--tabs-wrap'>
					<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" justify>
						{tabGridData.map((val, index) =>
							<Tab eventKey={val.id} title={val.title} key={val.id} tabClassName="about-sec3--tab-title">
								<div className='about-sec3--tab-block'>
									<div className='about-sec3--tab-image'>
										<img src={val.image} alt="" />
									</div>
									<div className='about-sec3--tab-content'>
										<div class="accordion accordion-flush" id="accordionExample">
											{val.subData.map((subItem, index) =>
												<TabContentData item={subItem} />
											)}
										</div>
									</div>
								</div>
							</Tab>
						)}
					</Tabs>
					<div className='about-sec3-card-grid'>
						<div className='about-sec3-card card'>
							<img className='card-img' src={service_1} alt="" />
							<div className='card-body'>
								<h3 className='card-title'>RENOVATION</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
								<Link to="#">Read More</Link>
							</div>
						</div>
						<div className='about-sec3-card card'>
							<img className='card-img' src={service_2} alt="" />
							<div className='card-body'>
								<h3 className='card-title'>Architecture</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
								<Link to="#">Read More</Link>
							</div>
						</div>
						<div className='about-sec3-card card'>
							<img className='card-img' src={service_3} alt="" />
							<div className='card-body'>
								<h3 className='card-title'>Planning</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
								<Link to="#">Read More</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-section-4">
				<div className='about-sec4-content--wrap'>
					<div className='about-sec4-content'>
						<h2>CREATE WITH THE HEART, BUILD WITH THE MIND.</h2>
						<p>The whole difference between construction and creation is exactly this: that a thing constructed can only be loved after it is constructed; but a thing created is loved before it exists.</p>
						<a href="/" className='box-btn--wrap'>
							<div className="box-icon">
								<FiPlus />
							</div>
							<span>
								Hire us Now
							</span>
						</a>
					</div>
				</div>
				<div className='about-sec4-image'>
					<img src={service_video} alt="" />
					<a href='/' className="video-btn">
						<GrPlayFill className='video-btn-icon' />
					</a>
				</div>
			</div>
			<div className="about-section-5">
				<div className='row about-section-5--row text-center'>
					{isXl ?
						<>
							<div className='btn_card col-lg-4'>
								<h2>WHAT THEY SAY</h2>
								<div className="underline mt-4 mx-0 mb-0">
									<div className="underline-middleline"></div>
									<div className="underline-leftcircle"></div>
									<div className="underline-rightcircle"></div>
								</div>
								<p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
								<a href="/" className='box-btn--wrap'>
									<div className="box-icon">
										<FiPlus />
									</div>
									<span>
										View More Services
									</span>
								</a>
							</div>
							<div className="card col-4 col hover-card">
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
							<div className="card col-4 col hover-card">
								<div className="card-head">
									<MdFormatQuote />
								</div>
								<div className="card-body">
									<p className="card-text">Our object in the construction of the state is the greatest happiness of the whole</p>
									<img src={service_profile_2} alt="" />
									<h2 className='card-profile-name'>MARIA MORIO</h2>
									<h2 className='card-profile-job'>CEO at Compaxit</h2>
								</div>
							</div>
						</>
						:
						<>
							<div className="card col-4 col hover-card">
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
							<div className="card col-4 col hover-card">
								<div className="card-head">
									<MdFormatQuote />
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
								<div className="underline mt-4 mx-0 mb-0">
									<div className="underline-middleline"></div>
									<div className="underline-leftcircle"></div>
									<div className="underline-rightcircle"></div>
								</div>
								<p className="card-text">Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.</p>
								<a href="/" className='box-btn--wrap'>
									<div className="box-icon">
										<FiPlus />
									</div>
									<span>
										View More Services
									</span>
								</a>
							</div>
						</>
					}
				</div>
			</div>
			<div className="about-section-6">
				<div>
					<h1 className='text-center section_head m-0'>Our Professionals</h1>
					<div className="underline mt-4">
						<div className="underline-middleline"></div>
						<div className="underline-leftcircle"></div>
						<div className="underline-rightcircle"></div>
					</div>
				</div>
				<div className='about-sec6--grid'>
					<div className='about-sec6-card card'>
						<img src={service_profile_1} className="card-img" alt="" />
						<div className='card-body'>
							<h3>MAREK MORDOC</h3>
							<h6>Manager</h6>
						</div>
						<div>
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
					<div className='about-sec6-card card'>
						<img src={service_profile_2} className='card-img' alt="" />
						<div className='card-body'>
							<h3>TOMMY MORIO</h3>
							<h6>Worker</h6>
						</div>
						<div>
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
					<div className='about-sec6-card card'>
						<img src={service_profile_1} className='card-img' alt="" />
						<div className='card-body'>
							<h3>EDUARD CORTON</h3>
							<h6>Cheif Worker</h6>
						</div>
						<div>
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
				</div>
			</div>
			<Subscribe />
		</div>
	)
}

export default About