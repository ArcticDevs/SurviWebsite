import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/nav_logo.png'
import symbol from '../assets/logo.png'
import useBreakpoints from '../customHooks/useBreakpoints'
import { motion } from "framer-motion";

const slashMotion = {
    rest: { opacity: 1, x: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
        opacity: [0, 1],
        x: [-80, 0],
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeIn"
        }
    }
};

const Navbar = () => {

    const { isXl } = useBreakpoints();

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-xl">
                <div className="container-fluid mx-auto nav_cont">
                    <Link to="/">
                        <motion.div className="navbar-brand d-flex gap-1 align-items-center" initial="rest" whileHover="hover" animate="rest">
                            <img src={symbol} alt="" />
                            <motion.img src={logo} alt="" variants={slashMotion} />
                        </motion.div>
                    </Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 nav_list" style={{ marginLeft: 'auto' }}>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown_btn active" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                    <AiOutlineDown className="arrow_icon" />
                                </Link>
                                <ul className="dropdown-menu rounded-0 border-0" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item active" to="/">Home v1.1</Link></li>
                                    <li><Link className="dropdown-item" to="/">Home v1.2</Link></li>
                                    <li><Link className="dropdown-item" to="/">Home v1.3</Link></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact</Link>
                            </li>
                            {/* {!isXl &&
                                <li className="ms-5">
                                    <button className='btn rounded-0 nav_btn'>Hire us Now</button>
                                </li>
                            } */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar