import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./CaseStudies.css";

function CaseStudies() {
    return(
        <div className="case-studies">
            {/* <div className="case-studies-preview">
                <section>
                    <iframe
                        src="https://www.miromax.lt/"
                        title="Website Preview"
                        width="100%"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                    ></iframe>
                    <a href="https://www.miromax.lt/" target="_blank"></a>
                </section>
                <div className='case-studies-1'>
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
            </div> */}
            <div className="case-studies-preview">
                <section>
                    <iframe
                        src="https://comingaround.github.io/template-oaze/"
                        title="Website Preview"
                        width="100%"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                    ></iframe>
                    <a href="https://comingaround.github.io/template-oaze/" target="_blank"></a>
                </section>
                <div className='case-studies-2'>
                    <div>
                        <div>
                            <h1>Juvelyrikos Oazė</h1>
                            <h1 style={{opacity: '0.6'}}>Branded eCommerce <br /> Experience</h1>
                        </div>
                        <p style={{opacity: '0.6'}}>Year 2024</p>
                    </div>
                    <a href="https://comingaround.github.io/template-oaze/" target="_blank">
                        Juvelyrikos Oazė
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ marginLeft: '8px' }}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4299 0C11.5811 0 11.7261 0.0600593 11.833 0.166965C11.9399 0.273872 12 0.418867 12 0.570055V6.58155H10.8599V1.94489L0.804653 12.0037L0 11.199L10.0554 1.14011H5.78121V0H11.4299Z" fill="white"/>
                        </svg>
                    </a>  
                </div>
            </div>            
            <div className="case-studies-preview">
                <section>
                    <iframe
                        src="https://www.miromax.lt/"
                        title="Website Preview"
                        width="100%"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                    ></iframe>
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
