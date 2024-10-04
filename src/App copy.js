// src/components/App.js
import React from "react";
import { useTheme } from "./context/ThemeContext";
import PortFolio from "./pages";
import { Div, Flex } from "./style/StyledElements";
import { Moon, Sun } from './assets/icon'
import Header from "./components/Header";
import TechStacsRunner from "./components/TechStacsRunner";
import SplashScreen from "./components/SplashScreen";

function App() {
  const { theme, toggleTheme, themeStyles } = useTheme();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <SplashScreen />
      ) :
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
          <Div >
            <Div
              position='fixed'
              width='100%'
              zIndex='10'
            >
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
                <Header themeToggler={<Div onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun /> : <Moon />}
                </Div>}
                />
              </Flex>
            </Div>
            <Div
              width='100%'
              pt='9'
              position='fixed'
              className="glass-container-tech"
            >
              <TechStacsRunner />
            </Div>
          </Div>
          <Flex
            width='100%'
            justifyContent='right'
            pt='15%'
          />
          <PortFolio />
        </Div>}
    </>
  );
}

export default App;
