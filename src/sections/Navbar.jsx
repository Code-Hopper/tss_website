import React, { useState, useEffect } from 'react';

// importing files
import logo from "../sections/media/tech_trans_logo.png"

import { Link, Outlet } from "react-router-dom";

import "./vendor/fontawesome/css/all.css"

const Navbar = () => {

  const [isReduced, setReduced] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Change the threshold (50) to a different value as needed
        setReduced(true);
      } else {
        setReduced(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      {/* main navbar */}
      <div className={`navbar-main-2 container-fluid shadow sticky-lg-top z-2 ${isReduced ? 'navbar-reduced-height' : ''}`}>
        <div className="">
          <nav className={`navbar navbar-expand-md navbar-dark ${isReduced ? 'navbar-reduced-height' : ''}`}>

            <Link className="navbar-brand" to="#">
              <img className={`img-fluid org-logo-width ${isReduced ? 'scrolled-logo-width' : ''}`} src={logo} alt="websync logo" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#collapseMenu" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" offcanvas offcanvas-end bg-dark justify-content-md-center align-items-md-center fw-thin
            dropdown-menu-color-items" data-bs-backdrop="static" tabindex="1" id="collapseMenu">
              <div className="offcanvas-header">
                <button type="button" className="btn btn-outline-light" data-bs-dismiss="offcanvas" aria-label="Close"><i className=" fa-solid fa-xmark"></i></button>
                {/* <span className="text-light py-2">Welcome, Get the Best B2B Solution Here</span> */}
              </div>
              <div className="offcanvas-body text-center menu-items-custom">
                <ul className="navbar-nav">
                  <li className="nav-items"><Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-items"><Link className="nav-link" to="/about">About</Link></li>
                  <li className="nav-items"><Link className="nav-link" to="/projects">Projects</Link></li>

                  <li className="nav-items"><Link className="nav-link menu-items-custom" to="/testimonials">Testimonials</Link></li>

                  <li className="nav-items"><Link className="nav-link menu-items-custom" to="/contact">Contact</Link></li>

                  <li className="nav-items d-md-none">
                    <div className="nav-social text-light">
                      <i className="p-2 fa-brands fa-facebook"></i>
                      <i className="p-2 fa-brands fa-instagram"></i>
                      <i className="p-2 fa-brands fa-twitter"></i>
                      <i className="p-2 fa-brands fa-linkedin"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="search-navbar shadow d-none d-md-flex align-items-center">
              {/* <button className='navbar-cta-button'>Explore</button> */}
              <button class={`button ${isReduced ? 'reducced-button' : ''}`}>
                Contact for Support 
                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar