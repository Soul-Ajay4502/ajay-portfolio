import React from 'react';
import { Div, H2, Para } from '../../style/StyledElements';
import { useTheme } from "../../context/ThemeContext";

const ContactTab = () => {
    const { themeStyles } = useTheme();

    return (
        <Div px='9' py='4' borderRadius='10px' bg={themeStyles.bg}>
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
        </Div>
    )
}
export default ContactTab;