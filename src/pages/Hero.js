import React from 'react';
import styled from 'styled-components';
import { Div, Flex, Img } from '../style/StyledElements';
import AjayImage from '../assets/images/PHOTO-AJAYRAJ.jpeg'
import Modal from '../components/Modal';
import PdfViewer from '../components/PdfViewer';
import './pageStyles/Hero.css'

// Styled Components
const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;
`;

const HeroButton = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Hero = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <HeroSection>
      <HeroContent>
        <Flex justifyContent='center'>
          <Div
          // overflow='hidden'
          //  width='160px' 
          //  borderRadius='20px'
          //   bg='#fff'
          >
            <Img className='profile-picture' src={AjayImage} />
          </Div>

        </Flex>
        {/* <HeroTitle>Welcome to Our Platform</HeroTitle>
        <HeroDescription>Discover here and make the best of your experience!</HeroDescription> */}
        <p className="intro">Hello, I'm Ajayraj A R 👋🏼</p>
        <div className="about">
          <div className='about-layout'>
            <div className='about-content'>
              <p className='main-heading'>About Me</p>
              <p className="role">Full Stack Developer</p>
              <p className="description">I like to craft solid and scalable products with great user experiences.</p>

              <p className='sub-heading'>
                A dedicated Full-stack Developer based in India📍
              </p>
              <p className='sub-text'>
                Hello! I'm Ajayraj A R, a dedicated Software Engineer with over 1.5 years of experience in React Native, React,Node js,MySQL, specializing in both front-end and back-end technologies. I have a strong background in feature integration, performance tuning, and resolving issues to enhance product stability. Proficient in React Native,Node js,MySQL, React, JavaScript, and API integrations, I am passionate about creating innovative solutions that improve user experiences and drive digital transformation. My commitment to leading junior developers reflects my dedication to advancing in software engineering.
              </p>
            </div>
          </div>
        </div>
        <Div display={{ lg: 'block', md: 'none', sm: 'none', xs: 'none' }}><HeroButton onClick={() => setShowModal(!showModal)} >View Resume</HeroButton></Div>
      </HeroContent>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <PdfViewer />
      </Modal >
    </HeroSection>
  );
};

export default Hero;
