import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const timerId = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Vilnius' }));
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return(
        <footer>
            <div>
                <p>{currentTime}</p>
                <p>Portfolio 2023 - <span>{currentYear}</span></p>
                <a href="https://www.google.com/maps/d/u/0/viewer?mid=1mAs05JxfVndMF1oyJ11yZS-JNoE&hl=en_US&ll=54.67388960999664%2C25.115677000000005&z=12" target="_blank">54.6872° N, 25.2797° E</a>
            </div>
            <div>
                <p>Let's create together. Reach out.</p>
                <a href="">hello@aleksim.com</a>
            </div>
            <div>
                <p>© All rights reserved.</p>
                <a href="aleksim.com">aleksim.com</a>
            </div>
        </footer>
    );
}

export default Footer;