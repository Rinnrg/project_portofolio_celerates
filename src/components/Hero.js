import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import AOS from 'aos'; 
import 'aos/dist/aos.css';


const moveRightLeft = keyframes`
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
`;

const gradientNoise = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HeroSection = styled.section.attrs({
  id: 'hero', 
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(150deg, #007bff, #ffffff, #cccccc, #007bff);
  background-size: 200% 200%;
  animation: ${gradientNoise} 50s ease infinite;
  color: gradient(120deg, #ffffff, #000);
  text-align: center;
  padding-top: 3rem;
  position: relative;
  overflow: hidden;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 1000;
  margin-bottom: 0rem;
  position: relative;
  z-index: 3; /* Pastikan di atas blur dan text running */
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #555;
  z-index: 3;
`;

const BlurEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(255, 255, 255, 0.3); /* Efek blur ringan */
  filter: blur(60px); /* Efek blur */
  z-index: 2; /* Efek blur berada di atas text running */
`;

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, #fafafa, transparent);
  z-index: 4; /* Di atas background tapi di bawah teks */
`;

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);


  return (
    <HeroSection>
      <HeroTitle
        data-aos="fade-up"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome To My Portfolio
      </HeroTitle>

      <HeroSubtitle
        data-aos="fade-up"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Graphic Designer | UI/UX Designer | Programmer
      </HeroSubtitle>

      <BlurEffect />

      

      <BottomGradient />
    </HeroSection>
  );
};

export default Hero;
