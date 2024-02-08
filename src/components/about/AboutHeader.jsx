import React, { useState, useRef, useEffect } from 'react';
import "./AboutHeader.css";

function AboutHeader({ onEmailClick }) {
    return(
        <div className="about-header">
            <div className='contact_line'>
                <a href="" draggable="false">aleksim.com</a>
                <a href="" onClick={onEmailClick}>hello@aleksim.com</a>
            </div>
            <div>
                <p>A highly motivated and talented Front-end Developer with a solid foundation in HTML, CSS, and JavaScript, and a demonstrated ability to learn and apply new technologies quickly. I specialize in creating responsive web applications using React and Bootstrap frameworks, and have a keen eye for design and user experience.</p>
            </div>
        </div>
    );
}

export default AboutHeader;