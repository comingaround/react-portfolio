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
                <p>Driven and dynamic Mid-level Front-end developer, I possess a robust foundation in HTML, CSS, and JavaScript, complemented by hands-on experience in crafting responsive web applications leveraging React and Bootstrap frameworks. With a keen dedication to user-centric design principles, I am poised to contribute my passion and innovative approach to enhancing the digital presence of Your Company.</p>
            </div>
        </div>
    );
}

export default AboutHeader;