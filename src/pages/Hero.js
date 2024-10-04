import React from 'react';
import styled from 'styled-components';
import { Div, Flex, Img } from '../style/StyledElements';
import AjayImage from '../assets/images/PHOTO-AJAYRAJ.jpeg'
import Modal from '../components/Modal';
import PdfViewer from '../components/PdfViewer';

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

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
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
            <Div overflow='hidden' width='160px' borderRadius='20px' bg='#fff'>
            <Img src={AjayImage} height={'100%'}/>
            </Div>
        
        </Flex>
        <HeroTitle>Welcome to Our Platform</HeroTitle>
        <HeroDescription>Discover here and make the best of your experience!</HeroDescription>
        <Div display={{lg:'block',md:'none',sm:'none',xs:'none'}}><HeroButton onClick={() => setShowModal(!showModal)} >View Resume</HeroButton></Div>
      </HeroContent>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
          <PdfViewer />
        </Modal >
    </HeroSection>
  );
};

export default Hero;
