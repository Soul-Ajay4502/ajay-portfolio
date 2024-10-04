import React from 'react';
import { Div, Flex } from '../../style/StyledElements';
import down from '../../asset/images/Down.png';
import { useState } from 'react';
import Service from '../../pages/riskAnalytics/Service';
import Solution from '../../pages/riskAnalytics/Solution';
import OpenPages from '../../pages/riskAnalytics/OpenPages';

function Dropdown() {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);

    const service = () => {
        setToggle1(!toggle1);
    };
    const solution = () => {
        setToggle2(!toggle2);
    };
    const benefits = () => {
        setToggle3(!toggle3);
    };

    return (
        <Div color='#3368D2' fontSize='20px' mt='6' pl='5'pr='5'>
            <Flex pb='5' style={{borderBottom:'1px solid #FFFFFF80'}}>
                <Div>Our Services</Div>
                <Div ml='auto' onClick={service}>
                    <img width='100%' src={down} />
                </Div>
            </Flex>
            {toggle1 ? (
                <Div width='100%' color='#FFFFFF'>
                    <Service />
                </Div>
            ) : (
                ''
            )}
            
            <Flex mt='5'pb='5' style={{ alignItems: 'center',borderBottom:'1px solid #FFFFFF80' }}>
                <Div>Risk Solutions we Implement</Div>
                <Div  ml='auto' onClick={solution}>
                    <img width='100%' src={down} />
                </Div>
            </Flex>
            {toggle2 ? (
                <Div width='100%' color='#FFFFFF'>
                    <Solution />
                </Div>
            ) : (
                ''
            )}
            
            <Flex mt='5'mb='7'>
                <Div>Open Pages Benefits</Div>
                <Div  ml='auto' onClick={benefits}>
                    <img width='100%' src={down} />
                </Div>
            </Flex>
            {toggle3 ? (
                <Div width='100%' color='#FFFFFF'>
                    <OpenPages />
                </Div>
            ) : (
                ''
            )}
        </Div>
    );
}

export default Dropdown;
