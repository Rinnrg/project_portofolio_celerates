import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { AiFillInstagram } from 'react-icons/ai'; 
import { IoLogoWhatsapp } from 'react-icons/io'; 

const ContactSection = styled(motion.section)`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333; /* Adjusted color for contrast */
`;

const IconButtonContainer = styled.div`
  display: flex;
  gap: 2rem; /* Spacing between icons */
  justify-content: center; /* Centering the icons */
`;

const IconButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: transparent; /* Transparent background */
  color: #007bff; /* Blue color for the icons */
  border: 2px solid #007bff; /* Blue outline */
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none; /* Remove underline from links */

  &:hover {
    background-color: #007bff; /* Blue background on hover */
    color: white; /* Change icon color to white on hover */
    transform: scale(1.1); /* Slight scaling effect */
  }
`;

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <ContactSection
      id="contact"
      data-aos="fade-up"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <ContactTitle
        id="contact-title"
        data-aos="fade-up"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Hubungi Saya
      </ContactTitle>

      <IconButtonContainer>
        <IconButton
          href="rinogumilang2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope size={24} />
        </IconButton>
        <IconButton
          href="https://wa.me/6281231233415"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoLogoWhatsapp size={24} />
        </IconButton>
        <IconButton
          href="www.linkedin.com/in/rino-raihan-g"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin size={24} />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/rinn_rg"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiFillInstagram size={24} />
        </IconButton>
        <IconButton
          href="https://github.com/Rinnrg"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub size={24} />
        </IconButton>
      </IconButtonContainer>
    </ContactSection>
  );
};

export default Contact;
