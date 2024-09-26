import React from "react";
import { Div, Flex } from "../style/StyledElements";
import { Runner, AnimePill, ArrowedUL, ScrollArea, } from '../style/StyledComponents'


const IconCard = ({ icon = <></>, showText = 'false', text = '', ...rest }) => {

    return (
        <AnimePill {...rest}><Div p='2'> {icon}</Div></AnimePill>
    )
}

export default IconCard;
