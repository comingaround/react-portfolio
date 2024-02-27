import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Shouter.css";

function Shouter() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return(
        <div className="shouter">
            <div className='tech-skills' >
                <p>Technologies:</p>
                <ul>
                <li>HTML/CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li style={{marginLeft: '20px'}}>Next.js (beginner)</li>
                        <li style={{marginLeft: '20px'}}>TypeScript (beginner)</li>
                        <li>WordPress</li>
                        <li style={{marginLeft: '20px'}}>WooCommerce</li>
                        <li>SQL</li>
                        <li>Rest APi</li>
                        <li>SEO (basics)</li>
                        <li>UI/UX (basics)</li>
                </ul>
            </div>
                <section>
                    <h3>As a graduate of <br /> <span>Vilnius Coding School</span> I've rapidly honed my web development skills over an intensive year of independent projects.</h3>
                    <div>
                        <p>Since graduating, I've rapidly scaled the web development ladder, delivering everything from responsive sites to dynamic user interfaces, adhering to industry best practices. Each project has honed my coding precision and creative flair, showcasing my adaptability and focus on high standards.</p>
                        <Link to="/about" onClick={scrollToTop}>Resume</Link>
                    </div>
                </section>
        </div>
    );
}

export default Shouter;
