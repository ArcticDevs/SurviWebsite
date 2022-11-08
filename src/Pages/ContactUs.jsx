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
    <div className="row container-fluid mb-5">
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
              <span style={{cursor:'pointer'}}>PHONE: +1 (765) 536 72823</span>  <br />
              <span style={{cursor:'pointer'}}>FAX: +1 (735) 465 3245</span> 
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
    </div>
  );
};

export default ContactUs;
