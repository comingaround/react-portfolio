import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./ExpSection.css";
import "../../../documents/aleksandr_simonov.pdf";

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
                        <p>At GetThat.design, I embarked on my professional journey as a Front-End Developer, where I specialized in translating intricate designs from Figma into fully functional websites. This role not only honed my technical skills in web development but also sharpened my ability to implement responsive and aesthetically pleasing interfaces, ensuring an optimal user experience. My contributions were pivotal in bringing creative visions to life, demonstrating my commitment to excellence and innovation in front-end development.</p>
                    </div>
                    <h4 className='exp-work-title'>Aug 2023 → Present</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Front End Developer for Juvelyrikos Oaze</h3>
                        <p>At Juvelyrikos Oazė, I spearheaded the creation of the website's landing page using React, delivering a modern and interactive user experience. This project showcased my skill in utilizing React's component-based architecture for a dynamic and responsive design, effectively highlighting the brand’s offerings and captivating visitors. Through integrating advanced web technologies and adhering to best practices in front-end development, I produced a landing page that not only fulfilled aesthetic and functional goals but also demonstrated my capacity for innovative and efficient project execution.</p>
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
                        <p>For my personal portfolio website, I leveraged React to craft a dynamic and responsive platform that showcases my front-end development projects. This site exemplifies my proficiency with React and my commitment to creating engaging, user-friendly web experiences.</p>
                    </div>
                    <h4 className='exp-work-title'>Jan 2023 → Present</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Front End Developer for MiroMAX</h3>
                        <p>For MiroMax, I undertook the challenge of modernizing a decade-old website by implementing responsive code, ensuring optimal viewing across all mobile devices. This project required a deep dive into existing structures to introduce mobile responsiveness, significantly enhancing user accessibility and interaction with the site.</p>
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
                        <p>In my role as Co-chef at 'Ryžių Jūra', I significantly contributed to the culinary and operational aspects of the establishment. I was instrumental in curating half of the menu, with a special focus on an innovative sushi selection, streamlining kitchen processes for efficiency, and conducting comprehensive training for the staff. This multifaceted position allowed me to blend creativity with management skills, enhancing both the dining experience and workplace productivity.</p>
                    </div>
                    <h4 className='exp-work-title'>Nov 2022 → Apr 2023</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Assisting director for "Wasabi Sushi"</h3>
                        <p>As Assistant Director at Wasabi Sushi, I played a pivotal role in overseeing daily kitchen operations, managing staff, and upholding quality assurance standards. My responsibilities extended beyond culinary tasks to include staff coordination, training, and ensuring that all dishes met our high-quality benchmarks. This role underscored my ability to balance operational management with the commitment to excellence in food preparation and service.</p>
                    </div>
                    <h4>May 2020 → Sept 2022</h4>
                </div>
            </div>
            <div className="exp-work-item education">
                <h6>Education</h6>
                <div>
                    <div>
                        <h3>Vilnius Coding School</h3>
                        <p>Completed an intensive, month-long bootcamp at Vilnius Coding Academy, where I immersed myself in a comprehensive curriculum designed to bolster my front-end development skills. This rigorous program emphasized hands-on learning in HTML, CSS, JavaScript, and React, equipping me with the practical knowledge and technical proficiency required to excel in the fast-paced world of web development.</p>
                    </div>
                    <h4>Sept 2022 → Nov 2022</h4>
                </div>
            </div>
            <div className="exp-work-item education">
                <h6></h6>
                <div>
                    <div>
                        <h3>Bachelor of History, Vilnius University</h3>
                        <p>Pursued Bachelor-level History studies at Vilnius University, where I engaged deeply with historical research, critical analysis, and theoretical perspectives. This experience honed my analytical skills, ability to assess diverse information sources critically, and enhanced my written and oral communication abilities. Although I did not complete the degree, the rigorous academic environment contributed significantly to my personal and professional development.</p>
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
                    <ul>
                        <li>HTML/CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Stripe</li>
                        <li>WordPress/WooCommerce</li>
                        <li>ChatGPT model training</li>
                        <li>SEO basics</li>
                        <li>UI/UX basics</li>
                    </ul>
                </div>
            </div>
            <div className="exp-skills-item">
                <h6></h6>
                <div>
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Critical Thinking: Proficient in applying logical and analytical reasoning to solve complex problems, making well-informed decisions under pressure.</li>
                        <br />
                        <li>Communication: Effective communicator across various platforms and audiences, adept at articulating complex technical concepts in accessible language, ensuring clear and productive exchanges.</li>
                        <br />
                        <li>Stress Management: Demonstrated ability to maintain composure and high performance under tight deadlines, adapting swiftly to changing priorities and managing workplace stress with resilience.</li>
                        <br />
                        <li>Teamwork & management: Skilled in both leading and participating in teams with a focus on productivity, efficiency, and goal achievement. Experienced in project coordination, resource allocation, and fostering a collaborative work environment.</li>
                    </ul>
                </div>
            </div>
            <div className="exp-skills-item">
                <h6></h6>
                <div>
                    <h3>Languages</h3>
                    <ul>
                        <li>English (Proficient)</li>
                        <li>Lithuanian (Native)</li>
                        <li>Russian (Proficient)</li>
                        <li>Polish (Basics)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id='cv-download'>
            <a href="../../../documents/aleksandr_simonov.pdf" download="YourFileName.pdf">Download as PDF</a>
        </div>
       </div>
    );
}

export default ExpSection;