import React from "react";
import { Div, Flex, Img, Span } from "../style/StyledElements";
import {ReactComponent as Call} from '../assets/icon/CallPhone.svg'
import { ReactComponent as Email } from '../assets/icon/SolidEmail.svg';



const Footer = ({ ...rest }) => {

    return (
        <Flex
            width='100%'
            height='100px'
            py='8'
            border=' 1px solid rgba(255, 255, 255, 0.3)'
            borderRadius='10px'
            textAlign='center'
            justifyContent='space-around'
        >
            <Flex 
            // justifyContent='left' alignItems='center' 
            // width='40%'
            >
                AJAYRAJ A R
            </Flex>
            <Flex>
                <a
                    href='https://github.com/Soul-Ajay4502'
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    <Img
                        width='40px'
                        src={`https://skillicons.dev/icons?i=github`}
                        alt='github-skillicons'
                        className="skill-icon"
                    />
                </a>

               
            </Flex>
            <Div >
            <a
                    href='tel:+919633160059'
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    <Flex as={Flex} alignItems='center'>
                    <Flex
                            //  bg={bg[theme]}
                            borderRadius='100px'
                            p='1px'
                            alignItems='center'
                        ><Call />
                        </Flex>
                        <Span pl='3'>+91-9846027693</Span>
                    </Flex>
                </a>

                <a
                    href='mailto:rajay5767@gmail.com'
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    <Flex as={Flex} alignItems='center'>
                        <Flex
                            //  bg={bg[theme]}
                            borderRadius='100px'
                            px='1px'
                            alignItems='center'
                        >
                            <Email />
                        </Flex>
                        <Span pl='3'>rajay5767@gmail.com</Span>
                    </Flex>
                </a>

                <a
                    href='https://www.linkedin.com/in/ajayraj-a-r'
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    <Flex as={Flex} alignItems='center'>
                    <Flex
                            //  bg={bg[theme]}
                            borderRadius='100px'
                            px='2px'
                            alignItems='center'
                        ><Div fontWeight='700' fontSize='20px' color='#fff'>In</Div>
                        </Flex>
                        <Span pl='3'>Ajayraj A R</Span>
                    </Flex>
                </a>
            </Div>
        </Flex>
    )
}

export default Footer;