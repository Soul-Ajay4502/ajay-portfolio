import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { HashLink as Link } from 'react-router-hash-link';
import { Div, Flex } from './style/StyledElements';
import Hero from './pages/Hero';
import TechStack from './pages/TechStack';
import Works from './pages/Works';
import { VscAccount, VscGear, VscGithubProject } from "react-icons/vsc";
import './App.css'


// Section Data Array
const sectionData = [
  { id: 'section1', title: 'Section 1', content: <Hero />, icon: <Div><Div pl='2'><VscAccount /></Div> Hero</Div> },
  { id: 'section2', title: 'Section 2', content: <TechStack />, icon: <Div><Div pl='2'><VscGear /></Div> Tech</Div> },
  { id: 'section3', title: 'Section 3', content: <Works />, icon: <Div><Div pl='12px'><VscGithubProject /></Div> Works</Div> }
];

// Header Component
const Header = ({ activeSection, theme }) => {
  const boderBg = {
    light: '#000',
    dark: '#fff'
  }
  return (
    <Flex flexDirection='column' height='300px' justifyContent='space-between'>
      {sectionData.map((section) => (
        <Flex
          key={section.id}
          className={activeSection === section.id ? 'active' : ''}
          // borderBottom={activeSection === section.id ? `4px solid ${boderBg[theme]}` : ''}
          width='30%'
          justifyContent='center'
        >
          <Link
            smooth to={`#${section.id}`}
            style={{ textDecoration: 'none' }}
          >
            {/* {activeSection === section.id?section.icon:section.title} */}
            {section.icon}
          </Link>
          {activeSection === section.id && <Div width='50px' height='5px' bg={boderBg[theme]} borderRadius='200px' />}
        </Flex>
      ))}
    </Flex>
  );
};

// App Component
const App = () => {

  const [activeSection, setActiveSection] = useState(sectionData[0].id);
  const { theme, toggleTheme, themeStyles, section } = useTheme();
  const [sidebarIsOpen, setShowSidebar] = useState(false);




  useEffect(() => {

    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = sectionData[0].id; // Default to the first section


      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionTopPadding = {
    section1: { md: '140px', sm: '180px', xs: '255px', lg: '200px', xl: '130px', xxl: '250px' },
    section2: { md: '0', sm: '0', xs: '150px', lg: '170px', xl: '100px', xxl: '220px' },
    section3: { md: '0', sm: '0', xs: '0', lg: '170px', xl: '100px', xxl: '220px' },

  }


  return (
    <>
      <Div
        position='fixed'
        width='10%'
        zIndex='10'
        right='-80px'
        top='30%'
        display={{ lg: 'block', md: 'none' }}
      >
        <Header activeSection={activeSection} theme={theme} />
      </Div>
      {/* Content of the page */}
      <div className="content">
        {sectionData.map(({ id, title, content }) => (
          <Div
            key={id}
            id={id}
            className="section"
            pt={{
              md: sectionTopPadding[id].md, 
              sm: sectionTopPadding[id].sm,
              xs: sectionTopPadding[id].xs,
              lg: sectionTopPadding[id].lg,
              xl: sectionTopPadding[id].xl,
              xxl: sectionTopPadding[id].xxl
            }}
          >
            <>{content}</>
          </Div>
        ))}
      </div>
    </>
  );
};

export default App;
