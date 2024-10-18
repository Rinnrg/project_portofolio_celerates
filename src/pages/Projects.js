import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import pekaImage from '../assets/gambar/peka.png';
import isc from '../assets/gambar/isc.png';
import gdsc from '../assets/gambar/gdsc 2.png';
import amelio23 from '../assets/gambar/amelio 23.png';
import amelio24 from '../assets/gambar/amelio 24.png';
import klobur from '../assets/gambar/klobur.png';
import wibu from '../assets/gambar/posterwibu.png';
import ts from '../assets/gambar/posterts.png';


const ProjectsSection = styled.section`
  background-color: #f9f9f9;
  padding: 5rem 0;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: transparent; /* Transparent background */
  color: #007bff; /* Default text color: Blue */
  border: 2px solid #007bff; /* Blue outline */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Transition for both background and color */

  &:hover {
    background-color: #007bff; /* Blue background on hover */
    color: white; /* Change text color to white on hover */
    transform: scale(1.1); /* Slight scaling effect */
  }

  &.active {
    background-color: #0056b3;
    color: white; /* Ensure text color is white when active */
  }
`;

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    { title: "Logo PEKA", description: "Logo diatas adalah logo peka untuk sebuah tim saya PKM di unesa", image: pekaImage, category: "logo" },
    { title: "Logo ISC", description: "Logo ini saya buat untuk sebuah proker dari departmen MnB di HMP", image: isc, category: "logo" },
    { title: "Feed GDSC Unesa", description: "Feed diatas adalah sebuah feed postingan dari Google Developer Student Club Unesa yng saya recap jadi satu", image: gdsc, category: "feed design" },
    { title: "Logo Klobur", description: "Logo ini saya buat untuk tim PPK-O dari HMP PTI Unesa yang akan melakukan pengabdian di desa Klobur Madura", image: klobur, category: "logo" },
    { title: "Logo Amelio 23", description: "Logo amelio 2023 ini saya buat untuk memenuhi progam kerja dari departemen Pengembangan Sumberdaya Mahasiswa yang dimana program kerjanya meliputi pengkaderan untuk angkatan 2023", image: amelio23, category: "logo" },
    { title: "Logo Amelio 24", description: "Logo amelio 2024 ini saya buat untuk memenuhi progam kerja dari departemen Pengembangan Sumberdaya Mahasiswa yang dimana program kerjanya meliputi pengkaderan untuk angkatan 2024", image: amelio24, category: "logo" },
    { title: "Poster Techno Shymphony", description: "Poster ini saya buat untuk keberlangsungan acara Techno Shymphoni yang dimana program kerja ini dinaungi oleh departemen Project Event", image: ts, category: "poster" },
    { title: "Poster Web Wibu", description: "Poster ini saya buat untuk memenuhi tugas kuliah yang dimana tugasnya membuat website streaming anime", image: wibu, category: "poster" },
    { title: "Coming Soon", description: "", image: "", category: "" }, 
    
    
  ];
  
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <ProjectsSection id="Projects">
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3.7rem', color: '#333' }}>My Projects</h2>
      
      <FilterButtons>
        <FilterButton 
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </FilterButton>
        <FilterButton 
          className={selectedCategory === 'logo' ? 'active' : ''}
          onClick={() => setSelectedCategory('logo')}
        >
          Logo
        </FilterButton>
        <FilterButton 
          className={selectedCategory === 'feed design' ? 'active' : ''}
          onClick={() => setSelectedCategory('feed design')}
        >
          Feed Design
        </FilterButton>
        <FilterButton 
          className={selectedCategory === 'poster' ? 'active' : ''}
          onClick={() => setSelectedCategory('poster')}
        >
          Poster
        </FilterButton>
      </FilterButtons>

      <PortfolioGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} data-aos="fade-up">
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </PortfolioGrid>
    </ProjectsSection>
  );
};

export default Projects;
