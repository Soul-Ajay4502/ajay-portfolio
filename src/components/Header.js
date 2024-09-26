import React from "react";
import { Div, Flex } from "../style/StyledElements";
import { Runner, AnimePill, ArrowedUL, ScrollArea, } from '../style/StyledComponents'
import './Header.css'


const Header = ({ themeToggler,...rest }) => {

    return (
        <Flex
            width='80%'
            p='6'
            borderRadius='10px'
            className="glass-container"
            justifyContent='space-around'
            {...rest}
        >
            <Div >
                AJAY
            </Div>
            <Div>
            {themeToggler}
            </Div>
            <Div>
            </Div>
        </Flex>
    )
}

export default Header;
