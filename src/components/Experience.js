import React, { useEffect } from 'react'; 
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ExperienceSection = styled(motion.section)`
  padding: 5rem 2rem;
  color: #333;
  background-color: #f9f9f9; /* Background color for contrast */
`;


const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;


const ExperienceTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;


const ExperienceItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff; /* White background for items */
`;


const Position = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;


const Details = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Experience = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <ExperienceSection
      id="experience"
      data-aos="fade-up" 
    >
      <ExperienceContainer>
        <ExperienceTitle data-aos="fade-down">Pengalaman</ExperienceTitle>

        <ExperienceItem data-aos="fade-up">
          <Position>(Himti Unesa) Staff Departemen Komunikasi & Informasi </Position>
          <Details>
            Maret 2024 - Desember 2024: Bertanggung jawab membantu staff terhadap segala informasi di lingkup jurusan Teknik Informatika maupun di luar jurusan 
          </Details>
        </ExperienceItem>

        <ExperienceItem data-aos="fade-up" data-aos-delay="100">
          <Position>(Google Developer Student Club Unesa) Division Content Editor</Position>
          <Details>
          Oktober 2023 - Desember 2024 : Bertanggung jawab dalam content - content yang meliputi desain feed di Google Developer Student Club Unesa (GDSC Unesa). 
          </Details>
        </ExperienceItem>

        <ExperienceItem data-aos="fade-up" data-aos-delay="200">
          <Position>(HMP PTI) Kepala Departemen Komunikasi & Informasi</Position>
          <Details>
            Maret 2023 - Desember 2023: Bertanggung jawab membantu staff terhadap segala informasi di lingkup jurusan Teknik Informatika maupun di luar jurusan 
          </Details>
        </ExperienceItem>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
