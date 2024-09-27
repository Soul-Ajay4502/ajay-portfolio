// src/components/Tabs.js
import React, { useState } from "react";
import { Flex, Div } from '../style/StyledElements'
import { useTheme } from "../context/ThemeContext";
import ProfilePage from "../pages/ProfilePage";


const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab
  const { themeStyles } = useTheme();

  return (
    <Div width='100%'>
      <Flex width='100%' justifyContent='right'>
        <Flex
          width='30%'
          alignItems='center'
          justifyContent='space-around'
          bg={themeStyles.bg} p='2'
          borderRadius='10px'>
          {tabs.map((tabItem, index) => (
            <div
              key={index}
              style={{cursor:'pointer'}}
              onClick={() => setActiveTab(index)}
            >
              {activeTab === index ? tabItem.activeTab : tabItem.inActiveTab}
            </div>
          ))}
        </Flex>
      </Flex>
      {/* Tab Content */}
      <Flex marginTop= "20px" justifyContent='space-between'>
      <ProfilePage/>
      <Div width='70%' ml='6'>
        {tabs[activeTab].content}
      </Div>
      </Flex>
    </Div>
  );
};

export default Tabs;
