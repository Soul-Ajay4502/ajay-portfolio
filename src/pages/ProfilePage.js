import React, { useState } from "react";
import { Div, Flex, Para } from "../style/StyledElements";
import { useTheme } from "../context/ThemeContext";
import IconCard from "../components/IconCard";
import { GitLogo, LinkedInLogo, FbLogo, Phone, Mail, Location, Eye } from '../assets/icon'
import PdfDownload from "../components/pdfDownloader";
import PdfViewer from "../components/PdfViewer";
import Modal from "../components/Modal";
import { AnimePill } from "../style/StyledComponents";

const ContactInfo = () => {
  return (
    <Div>
      <Flex alignItems='center' p='20px' >
        <Phone />
        <Div pl='5px'>
          <Para>Phone</Para>
          <Para>+91 9846027693</Para>
        </Div>
      </Flex>
      <Flex alignItems='center' mx='20px' borderTop='1px solid #E3E3E3' borderBottom='1px solid #E3E3E3' py='20px'>
        <Mail />
        <Div pl='5px'>
          <Para>Email</Para>
          <Para>rajay5767@gmai.com</Para>
        </Div>
      </Flex>
      <Flex alignItems='center' p='20px'>
        <Location />
        <Div pl='5px'>
          <Para>Location</Para>
          <Para>Kochi,Ernakulam,Kerala</Para>
        </Div>
      </Flex>

    </Div>
  );
};
const ProfilePage = () => {

  const { theme, themeStyles } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const bgObject = {
    light: 'linear-gradient(92.54deg, #455db6 6.21%, #fff9  85.59%)',
    dark: 'linear-gradient(92.54deg, #FF9C1A 6.21%, #EC1B09  85.59%)'
  }

  return (

    <Flex
      bg={themeStyles.bg}
      width='25%'
      borderRadius='10px'
      justifyContent='center'
      // height='80%'
      pb='6'
    >
      <Div width='100%'>
        <Div textAlign='center'>
          <p>AJAYRAJ</p>
          <p>Full Stack Developer</p></Div>
        <Flex py='4' justifyContent='space-between' width='80%' mx='30px'>
          <IconCard icon={<GitLogo />} width='60px' background={bgObject[theme]} />
          <IconCard icon={<LinkedInLogo />} width='60px' background={bgObject[theme]} />
          <IconCard icon={<FbLogo />} width='60px' background={bgObject[theme]} />
        </Flex>
      </Div>

      <Div borderRadius='10px' bg={themeStyles.backgroundColor}
        // height='80%' 
        width='80%'>
        <ContactInfo />
      </Div>
      <Flex height='30px' width='80%' pt='4' justifyContent='space-between'>
        <PdfDownload />
        <AnimePill
          width='47%'
          justifyContent='center'
          alignItems='center'
          onClick={() => setShowModal(!showModal)}>
          <Flex>
            <Eye />
            <Para pl='2'>Resume</Para>
          </Flex>
        </AnimePill>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <PdfViewer />
        </Modal >
      </Flex>
    </Flex>

  );
}

export default ProfilePage;
