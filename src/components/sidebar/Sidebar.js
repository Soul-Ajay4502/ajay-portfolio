import { useNavigate } from 'react-router-dom';
import { Button, Div, Flex, Link, Span } from '../../style/StyledElements';
import { useState } from 'react';
import { ReactComponent as Call } from '../../assets/icon/CallPhone.svg';
import { ReactComponent as Email } from '../../assets/icon/SolidEmail.svg';
import DropDown from './Dropdown';
import PdfDownload from '../pdfDownloader';
import { useTheme } from '../../context/ThemeContext';
import { justifyContent } from 'styled-system';

function Sidebar({ show, closeSidebar }) {
    const navigate = useNavigate();
    const [openedMenu, setOpenedMenu] = useState(null);
    const { contextCurrentSection } = useTheme();

    const toggleMenu = (item) => {
        if (openedMenu === item) {
            setOpenedMenu(null);
            return;
        }
        setOpenedMenu(item);
    };

    return (
        <Flex
            {...styles.container}
            style={{
                transform: show ? 'translateX(0%)' : 'translateX(-100%)',
                transition: '.15s ease-out',
            }}
        >
            <Div 
            mt='150px'
            position='relative'
            >
                <Flex 
                position='absolute' 
                top='-110px' 
                right='25px'
                fontSize='43px'
                onClick={closeSidebar}
                border='2px solid rgba(255, 255, 255, 0.3)'
                bg='rgba(140, 86, 36, 0.5)'
                borderRadius='80px'
                px='10px'
                height='46px'
                justifyContent='center'
                alignItems='center'
                >
                &times;
                </Flex>
                <Link smooth to='tel:+919846027693' onClick={() => { closeSidebar(); contextCurrentSection({ section: 'section1' }) }} {...styles.link}>
                    <Flex alignItems='center'>
                        <Call />
                        <Span pl='3'>+91-9846027693</Span>
                    </Flex>
                </Link>

                <Link smooth to='mailto:rajay5767@gmail.com' onClick={() => { closeSidebar(); contextCurrentSection({ section: 'section2' }) }} {...styles.link}>
                    <Flex alignItems='center'>
                        <Email />
                        <Span pl='3'>rajay5767@gmail.com</Span>
                    </Flex>
                </Link>
                <Link smooth to='https://www.linkedin.com/in/ajayraj-a-r' onClick={() => { closeSidebar(); contextCurrentSection({ section: 'section3' }) }} {...styles.link}>
                    <Flex alignItems='center'>
                        <Flex
                            borderRadius='100px'
                            px='2px'
                            alignItems='center'
                        ><Div fontWeight='700' fontSize='20px' color='#fff'>In</Div>
                        </Flex>
                        <Span pl='3'>Ajayraj A R</Span>
                    </Flex>
                </Link>
            </Div>
            <PdfDownload />
        </Flex>
    );
}

export default Sidebar;

const styles = {
    container: {
        width: '93%',
        minHeight: '100vh',
        height: '100vh',
        flexWrap: 'nowrap',
        bg: 'dark',
        position: 'fixed',
        zIndex: '10001',
        bottom: '0',
        flexDirection: 'column',
        p: { xs: '4', sm: '6', md: '7' },
        backgroundColor: '#15171A',
        fontFamily: 'inter',
        overflowY: 'auto',
        justifyContent:'space-between'
    },
    link: {
        fontSize: { xs: '20px', md: '24px' },
        fontWeight: '500',
        borderBottom: '1px solid #383838',
        display: 'block',
        py: '5',
    },
    button: {
        borderRadius: '10px',
        pl: '5',
        pr: '5',
        py: '3',
        letterSpacing: '1px',
        background: '#2299B1',
        fontSize: '14px',
        width: '100%',
        mt: '6',
    },
};
