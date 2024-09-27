import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Marquee from "react-fast-marquee";
import './componentsStyles/TechStacsRunner.css';
import { Flex, Span } from '../style/StyledElements';

const TechStacsRunner = () => {
    const { themeStyles } = useTheme();
    const [hoveredSkill, setHoveredSkill] = useState(null);  // State to track hovered skill

    const skills = [
        { id: 1, title: 'React', icon: 'react' },
        { id: 2, title: 'HTML', icon: 'html' },
        { id: 3, title: 'CSS', icon: 'css' },
        { id: 4, title: 'JavaScript', icon: 'js' },
        { id: 5, title: 'Bootstrap', icon: 'bootstrap' },
        { id: 6, title: 'Material UI', icon: 'materialui' },
        { id: 7, title: 'Android Studio', icon: 'androidstudio' },
        { id: 8, title: 'Postman', icon: 'postman' },
        { id: 9, title: 'Figma', icon: 'figma' },
        { id: 10, title: 'Firebase', icon: 'firebase' },
        { id: 11, title: 'GitHub', icon: 'github' },
        { id: 12, title: 'VSCode', icon: 'vscode' },
        { id: 13, title: 'NPM', icon: 'npm' },
        { id: 14, title: 'Netlify', icon: 'netlify' },
        { id: 15, title: 'Bitbucket', icon: 'bitbucket' },
        { id: 16, title: 'Github Actions', icon: 'githubactions' },
        { id: 17, title: 'MySQL', icon: 'mysql' },
        { id: 18, title: 'Node Js', icon: 'nodejs' }



    ];

    // Handlers to set the hovered skill
    const handleMouseOver = (skillId) => {
        setHoveredSkill(skillId);
    };

    const handleMouseOut = () => {
        setHoveredSkill(null);
    };

    return (
        <Flex className='condainer'>
            <Marquee
                speed={70}
                delay={0}
                gradientColor={themeStyles.backgroundColor}
                gradient={true}
                gradientWidth={70}
                pauseOnHover={true}
            >
                {skills.map(skill => (
                    <div
                        key={skill.id}
                        className="tooltip-container"
                        onMouseOver={() => handleMouseOver(skill.id)}
                        onMouseOut={handleMouseOut}
                    >
                        <img
                            width="80px"
                            src={`https://skillicons.dev/icons?i=${skill.icon}`}
                            alt={skill.title}
                            className="skill-icon"
                        />
                        {hoveredSkill === skill.id && (
                            <Span className="tooltip-text"
                            >
                                {skill.title}
                            </Span> // Tooltip only appears when hovered
                        )}
                    </div>
                ))}
            </Marquee>
        </Flex>
    );
};

export default TechStacsRunner;
