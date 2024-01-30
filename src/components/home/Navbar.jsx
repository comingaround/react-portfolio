import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import "./NavInvert.css";

function Navbar({ invertStyle = false, onEmailClick }) {

    const [burgerOn, setBurgerOn] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const toggleBurger = () => {
        setBurgerOn(!burgerOn);
    };
    const location = useLocation();
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scrollToCaseStudies = (event) => {
        event.preventDefault(); 
        const performScroll = () => {
            const caseStudies = document.querySelector('.case-studies');
            if (caseStudies) {
                const caseStudiesTop = caseStudies.getBoundingClientRect().top + (window.scrollY - 12);
                window.scrollTo({ top: caseStudiesTop, behavior: 'smooth' });
            }
        };
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(performScroll, 100);
        } else {
            performScroll();
        }
    }; 

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        if (screenWidth > 776) {
            setBurgerOn(false);
        } else {
            setBurgerOn(true);
        }
        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth]);


    return (
        
        <div className={invertStyle ? 'nav-invert' : ''}>
            <nav style={{ display: burgerOn ? 'none' : 'block', position: burgerOn ? 'static' : 'absolute' }}>
                <ul onClick={() => screenWidth < 776 && toggleBurger()}>
                {invertStyle ? (
                    <li className={location.pathname === "/" ? "active-pathway" : ""} onClick={location.pathname === "/" ? scrollToTop : null}>
                        {location.pathname === "/" ? (
                            <svg className={location.pathname === "/" ? "active-pathway" : ""} xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
                                <path d="M0 1L14 1" stroke="white" stroke-width="1.56287"/>
                                <path d="M6.47097 3.035C6.59625 2.90973 6.76615 2.83936 6.94331 2.83936C7.12048 2.83935 7.29038 2.90973 7.41565 3.035L12.3967 8.01603L11.452 8.96071L7.61014 5.11885L7.61308 21.785L6.27964 21.785L6.2767 5.11864L2.73521 8.66013L1.79053 7.71545L6.47097 3.035Z" fill="white"/>
                            </svg>
                        ) : (
                            <Link to="/" className={location.pathname === "/" ? "active-pathway" : ""} onClick={location.pathname === "/about" ? scrollToTop : null}>Home</Link>
                        )}
                    </li>
                ) : (
                    <li className={location.pathname === "/" ? "active-pathway" : ""}>
                        <Link to="/" className={location.pathname === "/" ? "active-pathway" : ""}>Home</Link>
                    </li>
                )}                    
                    <li onClick={scrollToCaseStudies}><a href="">Case Studies</a></li>
                {invertStyle ? (
                    <li className={location.pathname === "/about" ? "active-pathway" : ""} onClick={location.pathname === "/about" ? scrollToTop : null}>
                        {location.pathname === "/about" ? (
                            <svg className={location.pathname === "/about" ? "active-pathway" : ""} xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
                                <path d="M0 1L14 1" stroke="white" stroke-width="1.56287"/>
                                <path d="M6.47097 3.035C6.59625 2.90973 6.76615 2.83936 6.94331 2.83936C7.12048 2.83935 7.29038 2.90973 7.41565 3.035L12.3967 8.01603L11.452 8.96071L7.61014 5.11885L7.61308 21.785L6.27964 21.785L6.2767 5.11864L2.73521 8.66013L1.79053 7.71545L6.47097 3.035Z" fill="white"/>
                            </svg>
                        ) : (
                            <Link to="/about" className={location.pathname === "/about" ? "active-pathway" : ""} onClick={location.pathname === "/" ? scrollToTop : null}>Resume</Link>
                        )}
                    </li>
                ) : (
                    <li className={location.pathname === "/about" ? "active-pathway" : ""}>
                        <Link to="/about" className={location.pathname === "/about" ? "active-pathway" : ""}>Resume</Link>
                    </li>
                )}
                    <li><a href="https://github.com/comingaround" target="_blank">Github 
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4299 0C11.5811 0 11.7261 0.0600592 11.833 0.166965C11.9399 0.273871 12 0.418867 12 0.570055V6.58154H10.8599V1.94489L0.804652 12.0037L0 11.199L10.0554 1.14011H5.78121V0H11.4299Z" fill="#131417"/>
                    </svg>
                    </a></li>
                </ul>
            </nav>
            <div className="nav-buttons">
                    <div className="contact-button">
                        <a href="" onClick={onEmailClick}>Contact</a>
                    </div>
                <div id="burger" onClick={toggleBurger}>
                  <div className="burger-on" style={{ display: burgerOn ? 'block' : 'none' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" viewBox="0 0 24 13" fill="none">
                          <path d="M0 1H24" stroke="black"/>
                          <path d="M0 12H24" stroke="black"/>
                          <path d="M0 6.5H24" stroke="black"/>
                      </svg>
                  </div>
                  <div className="burger-off" style={{ display: burgerOn ? 'none' : 'block' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 18 19" fill="none">
                          <path d="M0.514648 17.9853L17.4852 1.01473" stroke="black"/>
                          <path d="M17.4854 17.9853L0.514789 1.01473" stroke="black"/>
                      </svg>
                  </div>
              </div>
            </div>
        </div>     
    );
  }
  
  export default Navbar;


