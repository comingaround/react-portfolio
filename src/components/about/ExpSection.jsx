import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./ExpSection.css";

function ExpSection(){
    return(
       <div className="exp-section">
        <div className="exp-work">
            <div className="exp-work-item">
                <h6>Work Experience</h6>
                <div>
                    <div>
                        <h6>Freelance</h6>
                        <h3>Front End Developer for GetThat.Design</h3>
                        <p>Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.</p>
                    </div>
                    <h4>Aug 2023 → Present</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Front End Developer for Juvelyrikos Oaze</h3>
                        <p>Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.</p>
                    </div>
                    <h4>Jun 2023 → Nov 2023</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h6>Personal Projects</h6>
                        <h3>Personal Portfolio Website</h3>
                        <p>Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.</p>
                    </div>
                    <h4>Jan 2023 → Present</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Front End Developer for MiroMAX</h3>
                        <p>Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.</p>
                    </div>
                    <h4>Jul 2023 → Feb 2024</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h6>Other Professional Experience</h6>
                        <h3>Co-Chef for “Ryžių Jūra”</h3>
                        <p>Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.</p>
                    </div>
                    <h4>Nov 2022 → Apr 2023</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Assisting director for "Wasabi Sushi"</h3>
                        <p>Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.</p>
                    </div>
                    <h4>May 2020 → Sept 2022</h4>
                </div>
            </div>
            <div className="exp-work-item education">
                <h6>Education</h6>
                <div>
                    <div>
                        <h3>Vilnius Coding School</h3>
                        <p>Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.</p>
                    </div>
                    <h4>Sept 2022 → Nov 2022</h4>
                </div>
            </div>
            <div className="exp-work-item education">
                <h6></h6>
                <div>
                    <div>
                        <h3>Bachelor of History, Vilnius University</h3>
                        <p>Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.</p>
                    </div>
                    <h4>Sept 2012 → Mar 2016</h4>
                </div>
            </div>
        </div>
        <div className="exp-skills">
            <div className="exp-skills-item">
                <h6>Skills</h6>
                <div>
                    <h3>Core Technical Skills</h3>
                    <p>Webflow provides extensive design control, allowing users to customize every aspect of their websites. From typography and layouts to animations and interactions, users have the flexibility to create unique and visually appealing designs.</p>
                </div>
            </div>
            <div className="exp-skills-item">
                <h6></h6>
                <div>
                    <h3>Supporting Skills</h3>
                    <p>Webflow provides extensive design control, allowing users to customize every aspect of their websites. From typography and layouts to animations and interactions, users have the flexibility to create unique and visually appealing designs.</p>
                </div>
            </div>
            <div className="exp-skills-item">
                <h6></h6>
                <div>
                    <h3>Soft Skills</h3>
                    <p>Webflow provides extensive design control, allowing users to customize every aspect of their websites. From typography and layouts to animations and interactions, users have the flexibility to create unique and visually appealing designs.</p>
                </div>
            </div>
        </div>
        <div id='cv-download'>
            <a href="path/to/your/file.pdf" download="YourFileName.pdf">Download as PDF</a>
        </div>
       </div>
    );
}

export default ExpSection;