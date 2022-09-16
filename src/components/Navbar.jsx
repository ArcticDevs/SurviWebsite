import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import useBreakpoints from '../customHooks/useBreakpoints'

const Navbar = () => {

    const { isXl } = useBreakpoints();

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-xl">
                <div className="container-fluid mx-auto nav_cont">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 nav_list" style={{ marginLeft: 'auto' }}>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown_btn active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                    <AiOutlineDown className="arrow_icon" />
                                </a>
                                <ul className="dropdown-menu rounded-0 border-0" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item active" href="/">Home v1.1</a></li>
                                    <li><a className="dropdown-item" href="/">Home v1.2</a></li>
                                    <li><a className="dropdown-item" href="/">Home v1.3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                            {!isXl &&
                                <li className="ms-5">
                                    <button className='btn rounded-0 nav_btn'>Hire us Now</button>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar