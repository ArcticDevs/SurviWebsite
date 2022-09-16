import React from "react";
import "../styles/BlogRead.css";
import "../styles/Blog.css";
import { BsCalendarPlus, BsClockHistory } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SubscribeNewsFooter from "../components/SubscribeNewsFooter";

const BlogRead = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="blogread_container1">
          <h1 className="blogread_container1-title">The History Of Mason</h1>
          <div className="blog_underline mt-4">
            <div className="blog_underline-middleline"></div>
            <div className="blog_underline-leftcircle"></div>
            <div className="blog_underline-rightcircle"></div>
          </div>
        </div>
        <div className="blogread_container2">
          <div className="blogread_container2-first col-xl-9 col-lg-12 col-md-10 col-sm-10 col-12 mx-auto">
            <div className="blogread_container2-first--box">
              <div className="blogread_container2-first--left">
                <BsCalendarPlus className="blogread_icon" />
                <h1>Jan 25, 2020</h1>
                <div>Creation Date</div>
              </div>
              <div className="blogread_container2-first--right">
                <BsClockHistory className="blogread_icon" />
                <h1>3:45 min</h1>
                <div>Reading Time</div>
              </div>
            </div>
            <div>
              <img
                src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2ced778c2b17fbb9bf5c8c_photo-1506862047911-9815cdcb77c2-(1).jpg"
                alt="blog"
                className="blogread_img1 img-fluid"
              />
            </div>
          </div>
          <div className="blogread_container2-second col-xl-9 col-lg-12 col-md-12 col-sm-10 col-12 mx-auto">
            <h2 className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              The History Of Mason
            </h2>
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              I was selling stuff probably since I could remember, like 6 or 7
              years old. I was always out there helping my mom and dad sell
              watches, glasses, CDs, DVDs, stuff like that. Whatever we could
              put our hands on. I did it until I was around 17. But I was just
              doing it because I had to. There was no other option. Blow the
              dust off the clock. Your watches are behind the times. Throw open
              the heavy curtains which are so dear to you - you do not even
              suspect that the day has already dawned outside.
            </p>
            <h3 className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              New Digital Performance
            </h3>
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              I have a large watch collection, and classic watches are
              especially important to me. I had a silver Rolex, and I actually
              gave it to my little brother. He wears it every day. He's an
              actor, so whenever he goes to an audition, he can look down, see
              it, and it gives him confidence. It was a great thing to pass on.
            </p>
            <br />
            <img
              src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2f8a6eff293b37bc0437bd_photo-1527335988388-b40ee248d80c-(1).jpg"
              alt=""
              className="blogread_img2 img-fluid"
            />
            <br />{" "}
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              When we are fearful and worried all the time, we are living as if
              we don't believe that we have a strong and able Shepherd who is
              tenderhearted toward us, who only leads us to good places, who
              protects us and lovingly watches over us.
            </p>
            <h3 className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              Simple &amp; Efficient
            </h3>
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              Lobortis fames justo placerat habitant pharetra duis purus aliquet
              ridiculus. Per a viverra. Mus malesuada interdum adipiscing. Duis
              lobortis eros libero gravida. Mus tempor massa in. Vestibulum
              morbi rhoncus lectus inceptos quisque, magnis posuere dis,
              sagittis dictum. Pulvinar convallis, vestibulum platea tellus nibh
              elit eget justo, lacus torquent dolor mattis purus blandit justo
              cursus quam eros ad auctor facilisi nisl elit Et Enim. Suscipit in
              nunc sollicitudin potenti sit nascetur interdum. Penatibus sodales
              lorem posuere class blandit rhoncus magnis nullam.
            </p>
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              Pretium Faucibus quisque felis magna neque, mattis risus tortor
              Class egestas varius. Facilisis luctus magnis sollicitudin mollis
              blandit scelerisque condimentum non eget Nostra posuere. Blandit
              varius neque scelerisque lobortis sapien. Pharetra magnis blandit
              massa fermentum blandit urna class augue. Mauris ornare molestie
              parturient rutrum dis non hymenaeos ligula luctus. Pretium nam
              sociosqu pellentesque cras inceptos. Natoque magnis. Fusce litora
              ut ridiculus aptent eleifend risus platea varius. Tempor nulla
              turpis dapibus blandit, magna risus malesuada. Bibendum ultricies
              purus nostra maecenas auctor aliquam aliquam tellus, aenean.
              Habitant vestibulum taciti vestibulum posuere lectus turpis lorem
              lacus, ad egestas leo convallis eleifend dictum vehicula, a
              pretium magna adipiscing enim orci erat. Ac etiam vestibulum nisi
              vel molestie a pretium.
            </p>
            <br />
            <img
              src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2f8a4394e2db4ca184eb63_photo-1508450859948-4e04fabaa4ea-(1).jpg"
              alt=""
              className="blogread_img2 img-fluid"
            />
            <br />
            <blockquote className="blogread_container2-second--quote col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              Mathematics as an expression of the human mind reflects the active
              will, the contemplative reason, and the desire for aesthetic
              perfection. Its basic elements are logic and intuition, analysis
              and construction, generality and individuality.
            </blockquote>
            <br />{" "}
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              I think that just because the show is titled 'Awkward Black Girl'
              and it is a predominantly black cast doesn't mean that you
              shouldn't be able to relate to these people. We're all human
              beings. We all essentially go through the same things when it
              comes down to it, so I don't I think that should limit who watches
              it.
            </p>
            <br />
            <h5 className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              Template Features:
            </h5>
            <ul className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              <li>Beautifully Designed</li>
              <li>Fully Responsive</li>
              <li>CMS Content</li>
              <li>Smooth Interactions</li>
            </ul>
            <br />{" "}
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              I think that just because the show is titled{" "}
              <strong>'Awkward Black Girl'</strong> and it is a predominantly
              black cast doesn't mean that you shouldn't be able to relate to
              these people. We're all human beings. We all essentially go
              through the same things when it comes down to it, so I don't I
              think that should limit who watches it.
            </p>
            <br />{" "}
            <h4 className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              Perfect Bulding for Creative People
            </h4>
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              Now we live in this DVD, iTunes, Hulu age, and show creators and
              networks are realizing that and letting shows develop on those
              terms rather than 'We gotta just punch it week to week, man.' Now
              they're like, 'What will happen if someone watches the entire
              show?'
            </p>
            <p className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
              <br /> Sapien lacus viverra neque eu dapibus dictum lacinia montes
              lobortis nonummy vestibulum. Curae; hymenaeos lacus penatibus.
              Natoque malesuada erat, consequat. Porttitor cubilia quam orci
              sollicitudin ante penatibus nullam, faucibus conubia sagittis
              lobortis accumsan eleifend lectus nunc. Congue ipsum morbi.
              Taciti. Vestibulum vitae sodales placerat dui. Sociosqu sodales
              lacinia. Imperdiet, malesuada sed eget lorem augue,{" "}
              <strong>blandit fames nonummy mauris libero</strong> tristique in
              nisl ante. Sapien. Lorem neque egestas auctor ut. Augue ligula
              magna est fames risus. Aliquet ut nostra in tempor sapien per
              pretium sem, nonummy consectetuer velit sagittis facilisis
              scelerisque erat. Lacinia aliquet risus dolor est vestibulum.
              Lorem gravida nibh eros aptent nec arcu penatibus nunc senectus
              justo diam id diam primis duis fringilla tempor per pharetra
              euismod netus porta habitant in semper venenatis. Dis a dis ornare{" "}
              <strong>
                <em>sociis blandit velit dictum dictum ligula</em>
              </strong>{" "}
              ridiculus suscipit sem. Leo tempus laoreet metus gravida ultrices
              etiam. A tincidunt accumsan hymenaeos malesuada imperdiet ultrices
              odio aptent viverra quam Etiam vestibulum proin vel elit pede
              metus class tortor cras facilisis cursus feugiat, est ipsum
              potenti, ultrices lorem curae; volutpat euismod ac donec
              consectetuer.
            </p>
          </div>
        </div>
        <div className="section_4">
          <div className="section_4___background"></div>
          <div className="row section_4___row text-center">
            <div className="card col-lg-4">
              <div className="card-head"></div>
              <div className="card-body">
                <p className="card-text">
                  Our object in the construction of the state is the greatest
                  happiness of the whole
                </p>
                <img src="" alt="" />
                <h2 className="card-profile-name">SARA MORDOC</h2>
                <h2 className="card-profile-job">CEO at Compaxit</h2>
              </div>
            </div>
            <div className="card col-lg-4">
              <div className="card-head"></div>
              <div className="card-body">
                <p className="card-text">
                  Our object in the construction of the state is the greatest
                  happiness of the whole
                </p>
                <img src="" alt="" />
                <h2 className="card-profile-name">MARIA MORIO</h2>
                <h2 className="card-profile-job">CEO at Compaxit</h2>
              </div>
            </div>
            <div className="btn_card col-lg-4">
              <h2>WHAT THEY SAY</h2>
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
          </div>
        </div>
        <div className="section_5 blogread_related-space">
          <h1 className="text-center">RELATED POSTS</h1>
          <div className="underline mt-4">
            <div className="underline-middleline"></div>
            <div className="underline-leftcircle"></div>
            <div className="underline-rightcircle"></div>
          </div>
          <div className="blog_container2 blogread_related-cards">
            {[...Array(2)].map((elementInArray, index) => (
              <div
                key={index}
                className="blog_card col-xl-9 col-lg-10 col-md-10 col-sm-10 col-12"
              >
                <img
                  className="blog_card-image"
                  loading="lazy"
                  src="https://assets.website-files.com/5e2c8d5486f41720cf19080f/5e2ced778c2b17fbb9bf5c8c_photo-1506862047911-9815cdcb77c2-(1).jpg"
                  alt="card"
                  onClick={() => navigate("/post/the-history-of-web-design")}
                />
                <h1 className="blog_card-title">The History Of Mason</h1>
                <p className="blog_card-text">
                  Our object in the construction of the state is the greatest
                  happiness of the whole, and not that of any one class.
                </p>
                <span
                  className="blog_card-readmore"
                  onClick={() => navigate("/post/the-history-of-web-design")}
                >
                  Read more
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SubscribeNewsFooter />
    </div>
  );
};

export default BlogRead;
