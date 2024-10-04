import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Marquee from "react-fast-marquee";
import './componentsStyles/TechStacsRunner.css';
import styled from 'styled-components';
import { Flex, Img, Span } from '../style/StyledElements'; // Assuming you have a Card component

const Card = styled.div`
    width: 300px;
    padding: 20px;
    background-color: ${(props) => props.bgColor || '#fff'};
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    text-align: center;
    position:relative;
`;

const CardClose= styled.div`
    position:absolute;
    font-size: 24px;
    color: ${(props) => props.color || '#333'};
    right:16px;
    top:8px;
    cursor:pointer;

`;

 const CardTitle = styled.h3`
    font-size: 24px;
    color: ${(props) => props.color || '#333'};
`;

 const CardDescription = styled.p`
    font-size: 16px;
    color: ${(props) => props.color || '#666'};
`;


const TechStacsRunner = () => {
    const { themeStyles } = useTheme();
    const [hoveredSkill, setHoveredSkill] = useState(null);  // State to track hovered skill
    const [selectedSkill, setSelectedSkill] = useState(null);  // State to track selected skill (for showing card)

    const skills = [
        { id: 1, title: 'React', icon: 'react', description: 'A JavaScript library for building user interfaces, particularly for single-page applications using reusable components.' },
        { id: 2, title: 'HTML', icon: 'html', description: 'The standard markup language used for structuring web content.' },
        { id: 3, title: 'CSS', icon: 'css', description: 'A style sheet language used to describe the presentation and design of web pages.' },
        { id: 4, title: 'JavaScript', icon: 'js', description: 'A versatile programming language that enables dynamic interactivity on websites.' },
        { id: 5, title: 'Bootstrap', icon: 'bootstrap', description: 'A front-end framework for building responsive, mobile-first websites with pre-designed components.' },
        { id: 6, title: 'Material UI', icon: 'materialui', description: 'A React component library implementing Google’s Material Design to create modern and clean UIs.' },
        { id: 7, title: 'Android Studio', icon: 'androidstudio', description: 'The official IDE for Android app development, providing tools and a flexible development environment.' },
        { id: 8, title: 'Postman', icon: 'postman', description: 'An API testing tool used to design, test, and monitor APIs efficiently.' },
        { id: 9, title: 'Figma', icon: 'figma', description: 'A collaborative design tool used for UI/UX design and prototyping.' },
        { id: 10, title: 'Firebase', icon: 'firebase', description: 'A platform for building web and mobile applications, offering features like databases, hosting, and authentication.' },
        { id: 11, title: 'GitHub', icon: 'github', description: 'A Git-based platform for version control, collaboration, and code management.' },
        { id: 12, title: 'VSCode', icon: 'vscode', description: 'A powerful, lightweight code editor with support for many programming languages and extensions.' },
        { id: 13, title: 'NPM', icon: 'npm', description: 'The package manager for Node.js, used to install and manage libraries and dependencies in JavaScript projects.' },
        { id: 14, title: 'Netlify', icon: 'netlify', description: 'A platform for continuous deployment and hosting of static websites and web applications.' },
        { id: 15, title: 'Bitbucket', icon: 'bitbucket', description: 'A Git repository hosting service used for source code collaboration and version control.' },
        { id: 16, title: 'Github Actions', icon: 'githubactions', description: 'A CI/CD tool integrated with GitHub for automating development workflows, such as testing and deployment.' },
        { id: 17, title: 'MySQL', icon: 'mysql', description: 'An open-source relational database management system widely used for managing structured data.' },
        { id: 18, title: 'Node Js', icon: 'nodejs', description: 'A JavaScript runtime environment that allows server-side programming to create scalable applications.' }
    ];

     
    // Handlers to set the hovered skill
    const handleMouseOver = (skillId) => {
        setHoveredSkill(skillId);
    };

    const handleMouseOut = () => {
        setHoveredSkill(null);
    };

    // Handler to set the selected skill when clicked
    const handleSkillClick = (skill) => {
        if(skill.id===selectedSkill?.id)
            {
                setSelectedSkill(null)
                return;
            }
        setSelectedSkill(skill);
    };

    return (
        <Flex className='condainer' margin={{lg:'0px 120px'}}>
            <Marquee
                speed={70}
                delay={0}
                gradientColor={themeStyles.backgroundColor}
                gradient={true}
                gradientWidth={70}
                pauseOnHover={true}
                play={!selectedSkill}
            >
                {skills.map(skill => (
                    <div
                        key={skill.id}
                        className="tooltip-container"
                        onMouseOver={() => handleMouseOver(skill.id)}
                        onMouseOut={handleMouseOut}
                        onClick={() => handleSkillClick(skill)}  // Handle skill click
                        style={{ cursor: 'pointer' }}
                    >
                        <Img
                            width={{lg:"80px",md:'60px',sm:'40px'}}
                            src={`https://skillicons.dev/icons?i=${skill.icon}`}
                            alt={skill.title}
                            className="skill-icon"
                        />
                        {hoveredSkill === skill.id && (
                            <Span className="tooltip-text"
                            >
                                {skill.title}
                            </Span>
                        )}
                    </div>
                ))}
            </Marquee>

            {selectedSkill && ( 
                <Card 
                // bgColor={themeStyles.cardBackground}
                className='tech-glass-container'
                >
                    <CardClose onClick={() => setSelectedSkill(null)}>&times;</CardClose>
                    <CardTitle>{selectedSkill.title}</CardTitle>
                    <CardDescription>{selectedSkill.description}</CardDescription>
                </Card>
            )}
        </Flex>
    );
};

export default TechStacsRunner;
