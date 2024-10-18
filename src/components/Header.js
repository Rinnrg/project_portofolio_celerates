import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/gambar/logo r.png'; 


const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100vw;
  max-width: 1300px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: background-color 0.4s ease, box-shadow 0.4s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled(motion.svg)` /* Menggunakan motion.svg untuk animasi pada logo */
  width: 40px;  /* Ukuran logo */
  height: 40px; /* Ukuran logo */
  margin-right: 10px; /* Jarak antara logo dan teks */
`;

const LogoText = styled(ScrollLink)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(ScrollLink)`
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #007bff;
    transform: translateY(-3px);
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 2px;
      background: #007bff;
      transform: scaleX(1);
      transition: transform 0.3s ease;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: transparent;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
`;

const CTAButton = styled(ScrollLink)`
  padding: 0.6rem 1.2rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <LogoWrapper>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img src={logo} alt="Logo R" width="40" height="40" to="hero" smooth={true} duration={500} /> <motion.img/>
        </motion.div>
        <LogoText to="hero" smooth={true} duration={500}>Portfolio</LogoText>
      </LogoWrapper>
      <Nav>
        <NavLink to="about" smooth={true} duration={500}>Tentang Saya</NavLink>
        <NavLink to="experience" smooth={true} duration={500}>Pengalaman</NavLink>
        <NavLink to="Projects" smooth={true} duration={500}>Proyek</NavLink>      
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
