import Navbar from "../components/home/Navbar";
import Header from "../components/home/Header";
import CaseStudies from "../components/home/CaseStudies";
import Shouter from "../components/home/Shouter";
import Footer from "../components/home/Footer";
import ContactForm from "../components/home/ContactForm";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';



const Home = () => {
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
      <Header onEmailClick={handleEmailClick} />
      <CaseStudies />
      <Shouter />
      <Footer />
      <Navbar invertStyle={true}/>
      {showContactForm && <ContactForm onClose={handleCloseForm} />}
    </>
  )
}

export default Home;