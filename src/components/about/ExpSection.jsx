import React, { useState, useRef, useEffect } from 'react';
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
                        <p>As a Front-End Developer at a digital design studio GetThat.Design, I learned how to turn creative, intricate designs on Figma into functional and responsive websites. During this time I have sharpened my technical skills in web development and got a better understanding of how to create user-friendly interfaces. </p>
                    </div>
                    <h4 className='exp-work-title'>Aug 2023 → Present</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Front End Developer for Mik.lt</h3>
                        <p>For MiroMax, took the challenge of modernizing a decade-old websites by implementing responsive code, ensuring consisten design across all mobile devices. This task required me to take a deep dive into existing inadequate code structures and introduce more modern front-end development practices.</p>
                    </div>
                    <h4>Jul 2023 → Present</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Front End Developer for Juvelyrikos Oaze</h3>
                        <p>At Juvelyrikos Oaze I led the development of their business website using React and TypeScript. I used different components to make the design dynamic and responsive and aimed to follow only the best practices in front-end development. The end result - a landing page that fulfilled both aesthetic and functional goals, together demonstrating  my capacity for innovative and efficient project execution.</p>
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
                        <p>I used React to create my personal portfolio website where I could showcase my front-end development projects. My main goal was to create a simple, compelling and consistent user experience on different devices.</p>
                    </div>
                    <h4 className='exp-work-title'>Dec 2023 → Feb 2024</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h6>Other Professional Experience</h6>
                        <h3>Co-Chef for “Ryžių Jūra”</h3>
                        <p>As Co-chef at 'Ryžių Jūra', I contributed significantly to the development of culinary and operational procceses. I was responsible for curating half of the restaurant's menu, with a special focus on innovative sushi selection, streamlining kitchen operations, and conducting extensive training for the staff.  This position allowed me to combine my creativity and management skills, that elevate both the dining experience and workplace productivity.</p>
                    </div>
                    <h4 className='exp-work-title'>Nov 2022 → Apr 2023</h4>
                </div>
            </div>
            <div className="exp-work-item">
                <h6></h6>
                <div>
                    <div>
                        <h3>Assisting director for "Wasabi Sushi"</h3>
                        <p>As Assistant Director at Wasabi Sushi my responsibilities consisted of overseeing daily kitchen operations, managing staff, and quality control to meet restaurant’s particularly high standards. In this role I succeded in balancing the operational management with the commitment to excellence in food preparation and customer service.</p>
                    </div>
                    <h4>May 2020 → Sept 2022</h4>
                </div>
            </div>
            <div className="exp-work-item education">
                <h6>Education</h6>
                <div>
                    <div>
                        <h3>Vilnius Coding School</h3>
                        <p>I have completed a month-long front-end development bootcamp at Vilnius Coding School. This intensive program emphasized hands-on learning in HTML, CSS, JavaScript, and React, equipping me with the practical knowledge and fundamental technical expertise required to jumpstart in the fast-paced world of web development.</p>
                    </div>
                    <h4>Sept 2022 → Nov 2022</h4>
                </div>
            </div>
            <div className="exp-work-item education">
                <h6></h6>
                <div>
                    <div>
                        <h3>Bachelor of History, Vilnius University</h3>
                        <p>Pursued Bachelor-level History studies at Vilnius University, where I engaged deeply with historical research, critical analysis, and different theoretical perspectives. During this time I advanced my  analytical skills, ability to assess diverse information sources critically and substantially improved my written and oral communication abilities. Although I did not complete my studies, the rigorous academic environment contributed significantly to my personal and professional development.</p>
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
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li style={{marginLeft: '20px'}}>Next.js (beginner)</li>
                        <li style={{marginLeft: '20px'}}>TypeScript (beginner)</li>
                        <li>WordPress</li>
                        <li style={{marginLeft: '20px'}}>WooCommerce</li>
                        <li>SQL</li>
                        <li>Rest Api</li>
                        <li>SEO (basics)</li>
                        <li>UI/UX (basics)</li>
                    </ul>
                </div>
            </div>
            <div className="exp-skills-item">
                <h6></h6>
                <div>
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Critical Thinking: Proficient in applying logical and analytical reasoning to solve complex problems, making well-informed decisions both in low and high pressure situations.</li>
                        <br />
                        <li>Communication: I consider myself effective communicator across various formats and audiences, able to articulate complex concepts in easy to understand, accessible language.</li>
                        <br />
                        <li>Stress Management: I consistently demonstrate an ability to: maintain composure and high performance under tight deadlines, adapt swiftly to changing priorities and manage workplace stress.</li>
                        <br />
                        <li>Teamwork & management: Skilled in both leading and working in teams.  Both as a leader and teammate I focus on efficiency, collaboration, defining and meeting goals. I am experienced in project coordination, resource allocation, and fostering a collaborative work environment.</li>
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
            <a href="/documents/Aleksandr_Simonov_Resume.pdf" download="Aleksandr_Simonov_Resume.pdf">Download as PDF</a>
        </div>
       </div>
    );
}

export default ExpSection;