import Navbar from "../components/home/Navbar";
import AboutHeader from "../components/about/AboutHeader";
import ExpSection from "../components/about/ExpSection";
import Footer from "../components/home/Footer";
import ContactForm from "../components/home/ContactForm";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const About = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleEmailClick = (event) => {
    event.preventDefault();
    setShowContactForm(!showContactForm);
  };
  const handleCloseForm = () => {
    setShowContactForm(false);
  };
  return (
    <>
        <Navbar onEmailClick={handleEmailClick} />
        <AboutHeader onEmailClick={handleEmailClick} />
        <ExpSection />
        <Footer />
        <Navbar invertStyle={true}/>
        {showContactForm && <ContactForm onClose={handleCloseForm} />}
    </>
  )
}

export default About;