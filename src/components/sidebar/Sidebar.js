import { useNavigate } from 'react-router-dom';
import { Button, Div, Flex, Link, Span } from '../../style/StyledElements';
import { useState } from 'react';
import { ReactComponent as Call } from '../../assets/icon/CallPhone.svg';
import { ReactComponent as Email } from '../../assets/icon/SolidEmail.svg';
import DropDown from './Dropdown';
import PdfDownload from '../pdfDownloader';
import { useTheme } from '../../context/ThemeContext';
import { FaRegCircleLeft } from "react-icons/fa6";
import { borderBottom, shadow } from 'styled-system';

function Sidebar({ show, closeSidebar }) {
    const navigate = useNavigate();
    const [openedMenu, setOpenedMenu] = useState(null);
    const { contextCurrentSection, themeStyles, theme } = useTheme();

    const linkBg = {
        light: {
            bg: 'linear-gradient(167deg, #2299C7 18%, #A7CEFF 57%)',
            shadow: 'rgba(6, 0, 0, 0.5) -1px 8px 9px'
        }
        ,
        dark: { bg: '#000', shadow: '' }
    }

    return (
        <Flex
            {...styles.container}
            bg={themeStyles.backgroundColor}
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
                    top='-50px'
                    left='-10px'
                    fontSize='30px'
                    onClick={closeSidebar}
                    borderRadius='80px'
                    px='10px'
                    height='46px'
                    justifyContent='center'
                    alignItems='center'
                >
                    <FaRegCircleLeft />
                    {/* &times; */}
                </Flex>
                <Link style={{ background: linkBg[theme].bg,
                     borderTopRightRadius: '20px', 
                     borderTopLeftRadius: '20px' ,
                     marginTop:'10px'
                     }} smooth to='tel:+919846027693' onClick={() => { closeSidebar(); contextCurrentSection({ section: 'section1' }) }} {...styles.link}>
                    <Flex alignItems='center'>
                        <Call />
                        <Span pl='3'>+91-9846027693</Span>
                    </Flex>
                </Link>

                <Link style={{ background: linkBg[theme].bg, border: 'none' }} smooth to='mailto:rajay5767@gmail.com' onClick={() => { closeSidebar(); contextCurrentSection({ section: 'section2' }) }} {...styles.link}>
                    <Flex alignItems='center'>
                        <Email />
                        <Span pl='3'>rajay5767@gmail.com</Span>
                    </Flex>
                </Link>
                <Link style={{
                    background: linkBg[theme].bg,
                    borderBottomRightRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    boxShadow: linkBg[theme].shadow,
                    borderBottom:'none'
                }} smooth to='https://www.linkedin.com/in/ajayraj-a-r' onClick={() => { closeSidebar(); contextCurrentSection({ section: 'section3' }) }} {...styles.link}>
                    <Flex alignItems='center'>
                        <Flex
                            borderRadius='100px'
                            px='2px'
                            alignItems='center'
                        ><Div fontWeight='700' fontSize='20px' color='#fff'>In</Div>
                        </Flex>
                        <Span pl='3' color='#fff'>Ajayraj A R</Span>
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
        // bg: 'dark',
        position: 'fixed',
        zIndex: '10001',
        bottom: '0',
        flexDirection: 'column',
        p: { xs: '4', sm: '6', md: '7' },
        backgroundColor: '#15171A',
        fontFamily: 'inter',
        overflowY: 'auto',
        justifyContent: 'space-between'
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
