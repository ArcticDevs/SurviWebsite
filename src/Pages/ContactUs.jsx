import React from "react";
import service_profile_1 from "../assets/service_profile_1.jpg";
import { MdFormatQuote } from "react-icons/md";
import service_grid_1 from "../assets/service_grid_1.png";
import service_grid_2 from "../assets/service_grid_2.png";
import service_grid_3 from "../assets/service_grid_3.png";
import service_grid_4 from "../assets/service_grid_4.png";
import { Link } from "react-router-dom";
import { BsCalendarPlus, BsClockHistory } from "react-icons/bs";
import "../styles/pages/ContactUs.css";
import "../styles/pages/BlogRead.css";
import useBreakpoints from "../customHooks/useBreakpoints";

const ContactUs = () => {
  const { isMd, isTm, isSm, isXs } = useBreakpoints();

  return (
    <div className="row container-fluid">
      <div className="blog_section_1">
        <h1
          className="text-center section_head"
          style={{ marginTop: "-110px" }}
        >
          Contact Us
        </h1>
        <div className="underline mt-4">
          <div className="underline-middleline"></div>
          <div className="underline-leftcircle"></div>
          <div className="underline-rightcircle"></div>
        </div>
      </div>
      <div className={`blog_read___section_3 p-0 shadow col-xxl-9 col-xl-9 col-lg-9 col-md-10 col-sm-12 col-11 mx-auto ${isMd || isTm || isSm || isXs ? "w-100 ms-2" : ""}`}>
        <div className="blog_calendar_grid" >
          <div className="blog_calendar_head">
            <BsCalendarPlus className="calendar_icon" />
            <h2>LOCATION</h2>
            <p className="text-center">
              &nbsp;MASON, 750 LEXINGTON, 9TH FLOOR, NY,&nbsp;
              <br /> &nbsp;NY 10022 PO BOX 31&nbsp;
            </p>
          </div>
          <div className="blog_calendar_head">
            <BsClockHistory className="calendar_icon" />
            <h2>CALL US</h2>
            <p className="text-center">
              PHONE: +1 (765) 536 72823 <br />
              FAX: +1 (735) 465 3245
            </p>
          </div>
        </div>
        <div
          style={{ height: "40vw", backgroundColor: "#c4c4c4" }}
        ></div>
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10 col-sm-12 col-11 mx-auto my-3">
          <h3
            style={{
              font: "24px / 30px Poppins, sans-serif",
              margin: "20px 0",
              textTransform: "uppercase",
            }}
          >
            Drop us a line*
          </h3>

          <div className="d-flex justify-content-between flex-xxl-row flex-xl-row flex-lg-row flex-column flex-md-column flex-sm-column">
            <input
              type="text"
              placeholder="Your Name *"
              className={`contact-us-input  ${
                isMd || isTm || isSm || isXs ? "w-100" : "w-50"
              }`}
            />
            <input
              type="email"
              placeholder="Email Address *"
              className={`contact-us-input  ${
                isMd || isTm || isSm || isXs ? "w-100" : "w-50 ms-4"
              }`}
            />
          </div>
          <div className="d-flex justify-content-between flex-xxl-row flex-xl-row flex-lg-row flex-column flex-md-column flex-sm-column">
            <input
              type="number"
              placeholder="Mobile No *"
              className={`contact-us-input  ${
                isMd || isTm || isSm || isXs ? "w-100" : "w-50"
              }`}
            />
            <input
              type="email"
              placeholder="Subject *"
              className={`contact-us-input  ${
                isMd || isTm || isSm || isXs ? "w-100" : "w-50 ms-4"
              }`}
            />
          </div>
          <textarea
            placeholder="Message *"
            className="w-100 contact-us-textarea"
          ></textarea>

          <button className="contact-us-btn my-3">Submit now</button>
        </div>
      </div>
      <div className="service-section-5 ms-2">
        <div className="service-sec5-header">
          <h1 className="text-center section_head" style={{color:'#fff'}}>WHY CHOOSING US?</h1>
          <div className="underline mt-4">
            <div className="underline-middleline underline-when-yellowbg"></div>
            <div className="underline-leftcircle underline-when-yellowbg"></div>
            <div className="underline-rightcircle underline-when-yellowbg"></div>
          </div>
        </div>
        <div className="service-sec5--block">
          <div className="service-sec5--block-head">
            <div className="block-item">
              <img src={service_grid_1} alt="" />
              <h3>325</h3>
              <h5>Clients</h5>
            </div>
            <div className="block-item">
              <img src={service_grid_2} alt="" />
              <h3>2056</h3>
              <h5>Projects</h5>
            </div>
            <div className="block-item">
              <img src={service_grid_3} alt="" />
              <h3>560</h3>
              <h5>Workers</h5>
            </div>
            <div className="block-item">
              <img src={service_grid_4} alt="" />
              <h3>156</h3>
              <h5>Coffee</h5>
            </div>
          </div>
          {/* <div className="service-sec5--block-mid">
            <div className="block-mid">
              <h3>
                Find out What Our Clients Say About us?{" "}
                <Link to="/">Do want to Learn More</Link>
              </h3>
            </div>
          </div> */}
          {/* <div className="service-sec5--block-end">
            <div className="card block-end">
              <div className="card-head">
                <MdFormatQuote />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our object in the construction of the state is the greatest
                  happiness of the whole
                </p>
                <img src={service_profile_1} alt="" />
                <h2 className="card-profile-name">SARA MORDOC</h2>
                <h2 className="card-profile-job">CEO at Compaxit</h2>
              </div>
            </div>
            <div className="card block-end">
              <div className="card-head">
                <MdFormatQuote />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our object in the construction of the state is the greatest
                  happiness of the whole
                </p>
                <img src={service_profile_1} alt="" />
                <h2 className="card-profile-name">SARA MORDOC</h2>
                <h2 className="card-profile-job">CEO at Compaxit</h2>
              </div>
            </div>
            <div className="card block-end">
              <div className="card-head">
                <MdFormatQuote />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our object in the construction of the state is the greatest
                  happiness of the whole
                </p>
                <img src={service_profile_1} alt="" />
                <h2 className="card-profile-name">SARA MORDOC</h2>
                <h2 className="card-profile-job">CEO at Compaxit</h2>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
