// src/components/App.js
import React from "react";
import { useTheme } from "./context/ThemeContext";
import PortFolio from "./pages";
import { Div, Flex } from "./style/StyledElements";
import { Moon } from './assets/icon'
import Header from "./components/Header";

function App() {
  const { theme, toggleTheme, themeStyles } = useTheme();
  return (
    <Div
      pb='28px'
      style={{
        backgroundColor: themeStyles.backgroundColor,
        color: themeStyles.color,
        height: "100%",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center"
      }}
    >
      <Div
        position='fixed'
        width='100%' >
        <Div
          width='100%'
          bg={themeStyles.backgroundColor}
          height='10px'
        />
        <Flex
          // position='fixed'
          width='100%'
          justifyContent='center'
          top='2'
        >
          <Header themeToggler={<Div onClick={toggleTheme}>D</Div>} />
        </Flex>
      </Div>
      <Flex
        width='100%'
        justifyContent='right'
        pt='9'
      >
      </Flex>
      <PortFolio />
    </Div>
  );
}

export default App;
