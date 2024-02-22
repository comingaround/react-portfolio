import React, { useState, useRef, useEffect } from 'react';
import "./CaseStudies.css";

function CaseStudies() {
    return(
        <div className="case-studies">
            <div className="case-studies-preview">
                <section>
                    <img src="/caseStudies/aurora.png" alt="1 " />
                    <a href="https://github.com/comingaround/aurora-next-ts" target="_blank"></a>
                </section>
                <div className='case-studies-2'>
                    <div>
                        <div>
                            <h1>Aurora</h1>
                            <h1 style={{opacity: '0.6'}}>Exceptional furniture <br /> for Every Home</h1>
                        </div>
                        <p style={{opacity: '0.6'}}>Year 2024</p>
                    </div>
                    <a href="https://github.com/comingaround/aurora-next-ts" target="_blank">
                        Aurora
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ marginLeft: '8px' }}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4299 0C11.5811 0 11.7261 0.0600593 11.833 0.166965C11.9399 0.273872 12 0.418867 12 0.570055V6.58155H10.8599V1.94489L0.804653 12.0037L0 11.199L10.0554 1.14011H5.78121V0H11.4299Z" fill="white"/>
                        </svg>
                    </a>  
                </div>
            </div> 
            <div className="case-studies-preview">
                <section>
                    <img src="/caseStudies/oaze.png" alt="1 " />
                    <a href="https://github.com/comingaround/oaze-next-ts" target="_blank"></a>
                </section>
                <div className='case-studies-2'>
                    <div>
                        <div>
                            <h1>Juvelyrikos Oazė</h1>
                            <h1 style={{opacity: '0.6'}}>Branded eCommerce <br /> Experience</h1>
                        </div>
                        <p style={{opacity: '0.6'}}>Year 2024</p>
                    </div>
                    <a href="https://github.com/comingaround/oaze-next-ts" target="_blank">
                        Juvelyrikos Oazė
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ marginLeft: '8px' }}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4299 0C11.5811 0 11.7261 0.0600593 11.833 0.166965C11.9399 0.273872 12 0.418867 12 0.570055V6.58155H10.8599V1.94489L0.804653 12.0037L0 11.199L10.0554 1.14011H5.78121V0H11.4299Z" fill="white"/>
                        </svg>
                    </a>  
                </div>
            </div>            
            <div className="case-studies-preview">
                <section>
                    <img src="/caseStudies/miromax.png" alt="1 " />
                    <a href="https://www.miromax.lt/" target="_blank"></a>
                </section>
                <div className='case-studies-3'>
                    <div>
                        <div>
                            <h1>MiroMAX</h1>
                            <h1 style={{opacity: '0.6'}}>Old website's adaptation <br /> To responsive mobile experience</h1>
                        </div>
                        <p style={{opacity: '0.6'}}>Year 2023</p>
                    </div>
                    <a href="https://www.miromax.lt/" target="_blank">
                        miromax.lt
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ marginLeft: '8px' }}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4299 0C11.5811 0 11.7261 0.0600593 11.833 0.166965C11.9399 0.273872 12 0.418867 12 0.570055V6.58155H10.8599V1.94489L0.804653 12.0037L0 11.199L10.0554 1.14011H5.78121V0H11.4299Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CaseStudies;
