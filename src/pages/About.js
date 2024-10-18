import React, { useEffect } from 'react'; 
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './Variants';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import myPhoto from '../assets/gambar/rino.JPG'; 


const AboutSection = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  color: #333;
  min-height: 100vh; /* Mengatur tinggi minimal seperti hero */
`;


const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Maksimal lebar untuk menjaga layout tetap rapi */
  margin: 0 auto;
`;


const AboutImage = styled(motion.img)`
  width: 40%; /* Lebar gambar */
  border-radius: 8px; /* Rounded corners */
  margin-right: 2rem; /* Jarak antara gambar dan teks */
`;


const AboutContent = styled.div`
  flex: 1; /* Agar konten mengisi sisa ruang */
  max-width: 600px; /* Maksimal lebar konten untuk menjaga layout tetap rapi */
`;


const AboutTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;


const AboutDescription = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
`;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh(); 
  }, []);

  return (
    <AboutSection
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <AboutContainer>
        <AboutImage
          src={myPhoto}
          alt="Rino"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          data-aos="fade-right" 
        />
        <AboutContent>
          <AboutTitle
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            data-aos="fade-left" 
          >
            Tentang Saya
          </AboutTitle>
          <AboutDescription
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 1 }}
            data-aos="fade-left" 
          >
            Halo! Saya Rino Raihan G, seorang graphic designer, UI/UX designer, dan programmer yang bersemangat. Dengan latar belakang yang kaya dalam desain visual dan pengembangan perangkat lunak, saya memiliki kemampuan unik untuk menggabungkan kreativitas dan teknologi dalam setiap proyek yang saya kerjakan. Sebagai graphic designer, saya terinspirasi oleh warna, tipografi, dan komposisi, menciptakan desain yang tidak hanya menarik secara visual tetapi juga menyampaikan pesan dengan jelas. Saya percaya bahwa desain yang baik harus mampu menghidupkan ide-ide dan emosi.
          </AboutDescription>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
