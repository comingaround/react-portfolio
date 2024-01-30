import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./AboutHeader.css";

function AboutHeader({ onEmailClick }) {
    return(
        <div className="about-header">
            <div className='contact_line'>
                <a href="" draggable="false">aleksim.com</a>
                <a href="" onClick={onEmailClick}>hello@aleksim.com</a>
            </div>
            <div>
                <p>Enthusiastic junior front-end developer with a strong foundation in HTML, CSS, and JavaScript. Experienced in building responsive web applications using React and Vue. Eager to bring my passion for user-centric design to XYZ Company.</p>
            </div>
        </div>
    );
}

export default AboutHeader;