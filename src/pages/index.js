import React from "react";
import TabPage from "./TabPage";
// import ProfilePage from "./ProfilePage";
import { Flex } from "../style/StyledElements";


function PortFolio() {
    return (
        <Flex 
        justifyContent='center'
        >
            {/* <ProfilePage /> */}
            <TabPage />
        </Flex>
    );
}

export default PortFolio;
