import React, { useState } from 'react';
import "./ContactForm.css";

function ContactForm({ onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', help: '', date: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-form">
            <div>
                <h2>Use this form to describe your project</h2>
                <svg id="contact-form-off" onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path d="M0.514648 17.9853L17.4852 1.01473" stroke="black"/>
                    <path d="M17.4854 17.9853L0.514789 1.01473" stroke="black"/>
                </svg>  
            </div>
            <form action="https://formspree.io/f/xgegazdp" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Hi, my name is</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" onChange={handleChange} required />
                    <label htmlFor="email">You can answer me on this email</label>
                    <input type="email" id="email" name="_replyto" placeholder="email@example.com" onChange={handleChange} required />
                    <label htmlFor="help">I am looking for help with a</label>
                    <input type="text" id="help" name="help" placeholder="e.g., website design" onChange={handleChange} />
                    <label htmlFor="date">and I need it done by</label>
                    <input type="date" id="date" name="date" onChange={handleChange} />
                </div>
                <input type="hidden" name="_subject" value="New submission from Contact Form!"/>
                <button type="submit">Contact Us</button>
            </form>
            <div>
                <a href="https://www.linkedin.com/in/aleksandr-simonov-6b1a74238" target='_blank'>LinkedIn</a>
                <a href="https://www.facebook.com/aleksandras.simonov/" target='_blank'>Facebook</a>
                <a href="mailto:hello@aleksim.com" target='_blank'>hello@aleksim.com</a>
            </div>
        </div>
    );
}

export default ContactForm;
