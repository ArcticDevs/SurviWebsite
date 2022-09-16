import React, { useState, useEffect } from "react";
import SubscribeNewsFooter from "../components/SubscribeNewsFooter";
import "../styles/Blog.css";
import {useNavigate} from 'react-router-dom';

const App = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="container-fluid px-4 mt-5">
        <div className="row">
          <div className="blog_container1 mb-5">
            <div className="blog_container pt-5">
              <div className="blog_content">
                <h1 className="blog_text pt-5">blog</h1>
                <div className="blog_underline mt-4">
                  <div className="blog_underline-middleline"></div>
                  <div className="blog_underline-leftcircle"></div>
                  <div className="blog_underline-rightcircle"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog_container2 mt-5 pb-5">
            {[...Array(5)].map((elementInArray, index) => (
              <div key={index} className="blog_card col-xl-9 col-lg-10 col-md-12 col-sm-10 col-12">
                <img
                  className="blog_card-image"
                  loading="lazy"
                  src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2ced778c2b17fbb9bf5c8c_photo-1506862047911-9815cdcb77c2-(1).jpg"
                  alt="card"
                  onClick={() => navigate('/post/the-history-of-web-design')}
                />
                <h1 className="blog_card-title">The History Of Mason</h1>
                <p className="blog_card-text">
                  Our object in the construction of the state is the greatest
                  happiness of the whole, and not that of any one class.
                </p>
                <span className="blog_card-readmore" onClick={() => navigate('/post/the-history-of-web-design')}>Read more</span>
              </div>
            ))}
          </div>
          <SubscribeNewsFooter />
        </div>
      </div>
    </>
  );
};

export default App;
