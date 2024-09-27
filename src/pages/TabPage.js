import React from "react";
import Tabs from "../components/Tabs";
import { Flex } from "../style/StyledElements";
import {
  Home, Resume, Work, Contact, HomeActive, ResumeActive, WorkActive, ContactActive
} from '../assets/icon'
import HomeTab from "../components/tabs/Home";
import ResumeTab from "../components/tabs/Resume";
import WorkTab from "../components/tabs/Work";
import ContactTab from "../components/tabs/Contact";




function TabPage() {
  const tabData = [
    { activeTab: <HomeActive />, inActiveTab: <Home />, content: <HomeTab/> },
    // { activeTab: <ResumeActive />, inActiveTab: <Resume />, content:<ResumeTab/> },
    { activeTab: <WorkActive />, inActiveTab: <Work />, content: <WorkTab/> },
    { activeTab: <ContactActive />, inActiveTab: <Contact />, content: <ContactTab/> }
  ];

  return (
    <Flex 
    width='84%' 
    >
      <Tabs tabs={tabData} />
    </Flex>
  );
}

export default TabPage;
