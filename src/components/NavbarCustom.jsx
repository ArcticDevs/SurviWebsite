import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/Navbar.css";
import Logo from "../assets/logo.png";
import navLogo from "../assets/nav_logo.png";
import useBreakpoints from "../customHooks/useBreakpoints";

const Navbar = () => {
  const { isMd } = useBreakpoints();
  const navigate = useNavigate();

  // const [showSearch, setShowSearch] = useState(false)
  // const [showSearchClose, setShowSearchClose] = useState(false)
  // const [searchValue, setSearchValue] = useState("")

  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <header id="header">
      <nav className="mobile">
        <div className="nav-logo-section">
          <div
            className="nav-logo d-flex align-items-center"
            onClick={() => {
              navigate("/");
              setShowMobMenu(false);
            }}
          >
            <img src={Logo} alt="Logo" />
            <img src={navLogo} alt="navlogo" />
          </div>
          <div
            className={`menu-btn-wrapper ${showMobMenu && "active"}`}
            onClick={() => {
              setShowMobMenu(!showMobMenu);
            }}
          >
            <div className="menu-btn-bar"></div>
            <div className="menu-btn-bar"></div>
            <div className="menu-btn-bar"></div>
          </div>
        </div>
        <div className="mob-menu-container">
          <div className={`mob-menu ${showMobMenu && "show-mob-menu"}`}>
            <ul className="nav-links-section">
              <li
                onClick={() => {
                  setShowMobMenu(false);
                }}
                className="nav-item"
              >
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li
                onClick={() => {
                  setShowMobMenu(false);
                }}
                className="nav-item"
              >
                <Link to="/service" className="nav-link">
                  Services
                </Link>
              </li>
              <li
                onClick={() => {
                  setShowMobMenu(false);
                }}
                className="nav-item"
              >
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li
                onClick={() => {
                  setShowMobMenu(false);
                }}
                className="nav-item"
              >
                <Link to="/blog" className="nav-link">
                  Blog{" "}
                </Link>
              </li>
              <li
                onClick={() => {
                  setShowMobMenu(false);
                }}
                className="nav-item"
              >
                <Link to="/contactus" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
