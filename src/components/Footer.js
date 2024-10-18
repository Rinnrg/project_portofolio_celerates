import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  padding: 1.5rem 2rem;
  text-align: center;
  background-color: #333;
  color: #fff;
  position: relative;
  bottom: 0;
  width: 100vw; /* Full width */
  max-width: 1285px; /* Same max-width as the header */
  margin: 0 auto; /* Centering the footer */
`;

const Footer = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2024 Rino Raihan G Portfolio | All Rights Reserved</p>
    </FooterContainer>
  );
};

export default Footer;
