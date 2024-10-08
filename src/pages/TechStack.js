// src/components/TechStack.js
import React from "react";
import { Div, Flex } from "../style/StyledElements";
import TechStacsRunner from "../components/TechStacsRunner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { useTheme } from "../context/ThemeContext";

function TechCard({ tech,...rest }) {
  return (
    <Div style={cardStyle} {...rest}>
      <img
        // src={tech.img[0] || "https://via.placeholder.com/150"} // Default image if none is provided
        src={`https://skillicons.dev/icons?i=${tech.icon}${tech.id === '4' ? '&theme=light' : ''}`}
        border={tech.id === '4' ?'2px solid':''}
        alt={tech.name}
        style={imageStyle}
      />
      <Div style={contentStyle}>
        <h3>{tech.name}</h3>
        <p>{tech.desc || "A powerful tool for modern development."}</p>
      </Div>
    </Div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "16px",
  width: "85%",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-in-out",
};

const imageStyle = {
  height: "100px",
  objectFit: "cover",
  borderRadius: "50px",
};

const contentStyle = {
  marginTop: "10px",
};

const flexContainerStyle = {
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

function TechStack() {
  const { themeStyles } = useTheme()
  const techObject = [
    {
      id: "1",
      name: "React JS",
      desc: "A JavaScript library for building user interfaces.",
      icon: 'react'
    },
    {
      id: "2",
      name: "Node.js",
      desc: "A JavaScript runtime built on Chrome's V8 engine.",
      icon: 'nodejs'
    },
    {
      id: "3",
      name: "MySQL",
      desc: "An open-source relational database management system.",
      img: ["https://via.placeholder.com/300x150"],
      icon: 'mysql'
    },
    
    {
      id: "4",
      name: "React Native",
      desc: "A framework for building native apps using React.",
      icon: 'react'
    },
    // Add more tech stacks if needed
  ];

  return (
    <Div className="glass-container-tech" px='20px'>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Main Stack</h2>
      <Flex display={{sm:'flex',xs:'none'}} style={flexContainerStyle} pb='6' >
        {techObject.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </Flex>
      <Div width='100%' display={{lg:'none',md:'none',sm:'none',xs:'block'}}>
        <Flex style={flexContainerStyle} pb='6' >
          <Div 
          width='70%'
           position='relative'>
            <Swiper
              effect={'cube'}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectCube, Pagination]}
              className="mySwiper"
            >
              {techObject.map((tech) => (
                <SwiperSlide>
                  <TechCard height='240px' key={tech.id} tech={tech} />
                </SwiperSlide>

              ))}
            </Swiper>
            <Div
              position='absolute'
              width='64px'
              height='12px'
              bg={themeStyles.bg}
              right='36%'
              bottom='10px'
              borderRadius='10px'
            />
          </Div>
        </Flex>
      </Div>
      <Div mt='9'>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Tech Stack</h2>
        </Div>
      <TechStacsRunner />
    </Div>
  );
}

export default TechStack;
