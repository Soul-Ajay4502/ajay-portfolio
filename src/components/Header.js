import React from "react";
import { Div, Flex } from "../style/StyledElements";
import './componentsStyles/Header.css'


const Header = ({ themeToggler,...rest }) => {

    return (
        <Flex
            width='80%'
            height='40px'
            // p='6'
            borderRadius='10px'
            textAlign='center'
            className="glass-container"
            justifyContent='space-around'
            {...rest}
        >
            <Flex justifyContent='left' alignItems='center' width='90%'>
                AJAYRAJ A R
            </Flex>
            <Div>
            {themeToggler}
            </Div>
            {/* <Div>
            </Div> */}
        </Flex>
    )
}

export default Header;
