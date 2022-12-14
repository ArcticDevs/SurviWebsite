import React from "react";
import AnimatedSubscribe from "./AnimatedSubscribe";
import "../styles/components/Subscribe.css";
import {
  GrWhatsapp,
  GrLinkedin,
  GrGooglePlus,
  GrInstagram,
} from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Subscribe = () => {
  return (
    <div>
      <div className="subscribe-section">
        <AnimatedSubscribe />
        <h2 className="text-center">Subscribe to Newsletter</h2>
        <p className="text-center mt-4">
          Owning a home is a keystone of wealth… both financial affluence and
          emotional security.
        </p>
        <div className="underline mt-2">
          <div className="underline-middleline"></div>
          <div className="underline-leftcircle"></div>
          <div className="underline-rightcircle"></div>
        </div>
        <div className="subscribe-form d-flex text-center mx-auto">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FiMail />
            </span>
            <input
              type="email"
              className="form-control subscribe_input shadow-none"
              placeholder="Enter your Email"
            />
          </div>
          <button className="blog_input-btn ms-md-3">Get Started</button>{" "}
        </div>
        <div className="subscribe_section___social_icons mt-5">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <GrLinkedin />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <GrGooglePlus />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <GrInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
