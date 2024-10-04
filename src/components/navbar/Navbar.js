import { Div, Button, Flex, Link, Span } from '../../style/StyledElements';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon/Logo.svg';
import { ReactComponent as LogoSm } from '../../assets/icon/LogoSm.svg';
import { ReactComponent as Hamburger } from '../../assets/icon/Hamburger.svg';
import styled from 'styled-components';
import { useMediaType } from '../Responsiver';
// import ProductDropDown from './ProductDropDown';
import ContactDropdown from './ContactDropdown';
import { useState } from 'react';
// import ServicesDropdown from './ServicesDropdown';
import '../componentsStyles/Nav.css'
import { useTheme } from '../../context/ThemeContext';
import Switch from "react-switch";
import { Download } from '../../assets/icon';
import PdfDownload from '../pdfDownloader';


const CTABTN = styled(Button)`
    border-radius: 10px;
    background: linear-gradient(167deg, #2299C7 18%, #A7CEFF 57%);
    color: #222732;
    font-size: 16px;
    &:hover {
        transform: scale(1.01) translate(5px, -2px) skewX(1deg);
        box-shadow: -3px 3px 1px 0px #888;
    }
`;

const NavLink = styled(Link)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    ::after {
        content: '';
        display: ${(props) => (props.active ? 'inline-block' : 'none')};
        width: 5px;
        height: 5px;
        background: white;
        border-radius: 50%;
        margin-top: 8px;
    }
`;

function Navbar({ toggleSidebar, closeSidebar }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { isMobile } = useMediaType();

    const [openedMenu, setOpenedMenu] = useState(null);
    const [switchChecked, setSwitchChecked] = useState(false);

    const { themeStyles, toggleTheme } = useTheme()

    return (
        <Flex
            // px={{ lg: '60px', xl: '100px', xxl: '128px' }}
            position='fixed'
            top='0'
            zIndex='1001'
            width='100%'
            fontFamily='inter'
            justifyContent='center'

        >
            <Flex
                px={{ xs: '4', md: '7', lg: '4', xl: '45px' }}
                py={{ xs: '2', lg: '0' }}
                height={{ lg: '80px' }}
                mt='50px'
                alignItems='center'
                // bg={{ xs: '#15171A', lg: '#222732' }}
                borderRadius='20px'
                width='80%'
                className='nav-glass-container'
                justifyContent='space-between'
                position='relative'

            >
                <Link to='/' onClick={closeSidebar} color={themeStyles.color}>
                    {/* {isMobile ? <LogoSm /> : <Logo />} */}
                    AJAYRAJ A R
                </Link>

                <Span
                    ml='auto'
                    display={{ lg: 'none' }}
                    onClick={toggleSidebar}
                >
                    <Hamburger />
                </Span>
                <Div
                    position='absolute'
                    top={{ lg: '35%', md: '18%' }}
                    right={{ lg: '50%', sm: '43%', md: '48%', xs: '40%' }}
                >
                    <Switch
                        onChange={() => { toggleTheme(); setSwitchChecked(!switchChecked) }}
                        checked={switchChecked}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        offColor='#E0F6FA'
                        onColor='#000'
                    />
                </Div>
                <Div
                    ml='auto'
                    fontSize='16px'
                    display={{ xs: 'none', lg: 'flex' }}
                    height='100%'
                    style={{ alignItems: 'center' }}
                >

                    <Div ml={{ md: '4', xxl: '7' }} display='inline'>
                        <ContactDropdown
                            isMenuOpened={openedMenu === 'contacts'}
                            closeMenu={() => setOpenedMenu(null)}
                            openMenu={() => setOpenedMenu('contacts')}
                            color={themeStyles.color}
                        />
                    </Div>
                    <PdfDownload/>
                </Div>
            </Flex>
        </Flex>
    );
}

export default Navbar;
