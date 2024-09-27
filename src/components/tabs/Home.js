import React from 'react';
import { Div, Flex, H2, Para } from '../../style/StyledElements';
import { useTheme } from "../../context/ThemeContext";

const Card = ({ children, ...rest }) => {
    return (
        <Div {...rest}>
            {children}
        </Div>
    )
}

const HomeTab = () => {
    const { themeStyles, theme } = useTheme();

    const cardData = [{
        id: 1,
        title: 'Web Development',
        desc: `As a developer, I find myself most 
                captivated by the power and flexibility of 
                React.js. I'm always eager to dive into new
                projects that leverage React.js and 
                discover innovative ways to create fast, 
                scalable, and user-friendly applications.`
    },
    {
        id: 2,
        title: 'Mobile App Development',
        desc: `With a focus on user-centric design and innovative technologies, 
        I thrive on crafting intuitive and efficient mobile applications that positively impact people's lives. 
        Let's collaborate to turn ideas into reality and shape the future of mobile experiences together!`
    },
    {
        id: 3,
        title: 'RESTful APIs',
        desc: `With a focus on robust architecture and seamless integration, 
        I thrive on designing and developing RESTful APIs that enhance application 
        functionality and performance. My passion lies in creating efficient, scalable solutions 
        that facilitate smooth communication between systems.`
    },
    {
        id: 4,
        title: 'Web Site Development',
        desc: `With a focus on responsive design and user experience, 
        I thrive on creating dynamic and engaging websites that captivate audiences. I’m passionate about utilizing 
        the latest technologies and best practices in web development to deliver high-quality, scalable solutions. `
    }
    ]

    return (
        <Div
            px='8'
            py='4'
            borderRadius='10px'
            bg={themeStyles.bg}>
            <Div my='2'>
                <H2>ABOUT ME</H2>
                <Para textAlign='justify'>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                    full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                    My journey in the world of web development has been nothing short of exhilarating, and
                    I constantly strive to enhance my skills and embrace emerging trends in the industry.</Para>
            </Div>
            <Div my='2'>
                <H2>WHAT I DO</H2>
            </Div>
            <Flex
                justifyContent='space-between'
            >
                {cardData.map(({ id, title, desc }) => (
                    <Card
                        key={id} width='48%'
                        color={(id === 1 || id === 4) && 'black'}
                        bg={(id === 1 || id === 4) ? '#FFEBD1' : themeStyles.backgroundColor}
                        borderRadius='10px'
                        mb='6'
                    >
                        <Div
                            p='4'
                        >
                            <Div>
                                <H2>{title}</H2>
                            </Div>
                            <Div 
                            pt='2'
                            textAlign='justify' 
                            fontSize='12px'
                            >
                                <Para>{desc}</Para>
                            </Div>
                        </Div>
                    </Card>
                ))}
            </Flex>
        </Div>
    )
}
export default HomeTab;