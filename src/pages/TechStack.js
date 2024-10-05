// src/components/TechStack.js
import React from "react";
import { Div, Flex } from "../style/StyledElements";
import TechStacsRunner from "../components/TechStacsRunner";

function TechCard({ tech }) {
  return (
    <Div style={cardStyle}>
      <img
        // src={tech.img[0] || "https://via.placeholder.com/150"} // Default image if none is provided
        src={`https://skillicons.dev/icons?i=${tech.icon}`}
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
  width: "200px",
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
      <Flex style={flexContainerStyle} pb='6' >
        {techObject.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </Flex>
      <Div mt='9'>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Tech Stack</h2>
        </Div>
      <TechStacsRunner />
    </Div>
  );
}

export default TechStack;
