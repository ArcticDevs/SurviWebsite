import React from "react";
import "../styles/SubscribeNewsFooter.css";
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { TbSend } from "react-icons/tb";

const SubscribeNewsFooter = () => {
  return (
    <div className="container-fluid">
      <div className="SNF_container3 py-5">
        <div className="SNF_container3-content">
          <h2 className="SNF_container3-title mt-5">Subscribe to Newsletter</h2>
          <p className="SNF_container3-text mt-4">
            If you can show people how to build castles, make sure you
            <br />
            do not neglect building and nurturing your own.
          </p>
          <div className="SNF_underline mt-2 mb-5">
            <div className="SNF_underline-middleline"></div>
            <div className="SNF_underline-leftcircle"></div>
            <div className="SNF_underline-rightcircle"></div>
          </div>
          <div className="SNF_container3-form mt-5">
            <input
              type="text"
              maxlength="256"
              name="name-2"
              placeholder="Enter your email..."
              className="SNF_input"
            />
            <button className="SNF_input-btn">Get Started</button>{" "}
          </div>

          <div className="SNF_socials mt-5">
            <a href="#" className="SNF_socials-icon SNF_socials-1"></a>
            <a href="#" className="SNF_socials-icon SNF_socials-2"></a>
            <a href="#" className="SNF_socials-icon SNF_socials-3"></a>
            <a href="#" className="SNF_socials-icon SNF_socials-4"></a>
            <a href="#" className="SNF_socials-icon SNF_socials-5"></a>
          </div>
        </div>
      </div>
      <div className="SNF_container4 mb-5 col-9 mx-auto">
        <div className="SNF_container4-first">
          <h1 className="SNF_container4-h1">About Ibuild</h1>
          <p className="SNF_container4-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor.
          </p>
        </div>
        <div className="SNF_container4-second">
          <h1 className="SNF_container4-h1">California</h1>
          <div className="d-flex mb-4">
            <GoLocation className="SNF_container4-icon" />
            <div className="SNF_container4-text">San Francisco, CA 94111</div>
          </div>
          <div className="d-flex mb-4">
            <IoCallOutline className="SNF_container4-icon" />
            <div className="SNF_container4-text">+1 202 234 567 890</div>
          </div>
          <div className="d-flex mb-4">
            <TbSend className="SNF_container4-icon" />
            <div className="SNF_container4-text">ibuild@gmail.com</div>
          </div>
        </div>
        <div className="SNF_container4-third">
          <h1 className="SNF_container4-h1">New york</h1>
          <div className="d-flex mb-4">
            <GoLocation className="SNF_container4-icon" />
            <div className="SNF_container4-text">Manhattan, NY 10001</div>
          </div>
          <div className="d-flex mb-4">
            <IoCallOutline className="SNF_container4-icon" />
            <div className="SNF_container4-text">+1 202 234 567 890</div>
          </div>
          <div className="d-flex mb-4">
            <TbSend className="SNF_container4-icon" />
            <div className="SNF_container4-text">ibuild@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsFooter;
