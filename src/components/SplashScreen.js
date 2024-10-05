// SplashScreen.js
import React from 'react';
import { Para } from '../style/StyledElements';

const SplashScreen = () => {
  return (
    <div style={styles.container}>
      <Para color='#fff' fontFamily='Silkscreen' fontSize={{lg:'57px',md:'54px',xs:'43px'}} fontWeight='500'> AJAYRAJ A R </Para>
      <Para color='#fff' fontFamily='Silkscreen' fontSize='17px' py='2' > {'< Full Stack Developer / >'} </Para>
      <Para color='#fff' fontFamily='Silkscreen' textAlign='right' fontSize='12px'> 
        PORTFOLIO
        </Para>

    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
};

export default SplashScreen;
