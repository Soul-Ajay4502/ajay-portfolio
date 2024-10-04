import { useNavigate } from 'react-router-dom';
import { Button, Div, Flex, Link, Span } from '../../style/StyledElements';
import { useState } from 'react';
import { ReactComponent as Call } from '../../assets/icon/CallPhone.svg';
import { ReactComponent as Email } from '../../assets/icon/SolidEmail.svg';
import DropDown from './Dropdown';
import PdfDownload from '../pdfDownloader';
import { useTheme } from '../../context/ThemeContext';

function Sidebar({ show, closeSidebar }) {
    const navigate = useNavigate();
    const [openedMenu, setOpenedMenu] = useState(null);
    const {contextCurrentSection}=useTheme();

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
            <Div mt='150px'>
                <Link smooth to='#section1' onClick={()=>{closeSidebar();contextCurrentSection({section:'section1'})}} {...styles.link}>
                    Hero
                </Link>
               
                <Link smooth to='#section2' onClick={()=>{closeSidebar();contextCurrentSection({section:'section2'})}} {...styles.link}>
                    Tech stack
                </Link>
                <Link smooth to='#section3' onClick={()=>{closeSidebar();contextCurrentSection({section:'section3'})}} {...styles.link}>
                    Works
                </Link>
                <DropDown
                    item='Contact'
                    toggleMenu={() => toggleMenu('Contact Us')}
                    isOpen={openedMenu === 'Contact Us'}
                    options={[
                        {
                            width: { sm: '60%' },
                            onSelect: () =>
                                (window.location.href = 'tel:+919846027693'),
                            title: (
                                <Flex alignItems='center'>
                                    <Call />
                                    <Span pl='3'>+91-9846027693</Span>
                                </Flex>
                            ),
                        },
                        {
                            width: { sm: '60%' },
                            onSelect: () =>
                                (window.location.href =
                                    'mailto:rajay5767@gmail.com'),
                            title: (
                                <Flex alignItems='center'>
                                    <Email />
                                    <Span pl='3'>rajay5767@gmail.com</Span>
                                </Flex>
                            ),
                        },
                    ]}
                />
            </Div>
            <PdfDownload/>
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
