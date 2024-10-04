import { Div, Flex, Span } from '../../style/StyledElements';
import NavDropdown from './NavDropdown';
import { NavItem } from '../../style/StyledComponents';
import { ReactComponent as DownArrow } from '../../assets/icon/DoubleDownArrow.svg';
import { ReactComponent as Call } from '../../assets/icon/CallPhone.svg';
import { ReactComponent as Email } from '../../assets/icon/SolidEmail.svg';
import { useTheme } from '../../context/ThemeContext';

function ContactDropdown({ isMenuOpened, closeMenu, openMenu, ...rest }) {
    const{theme}=useTheme();
    const bg={
        light:'#000',
        dark:'transparent'
    }
    return (
        <NavDropdown
            isOpened={isMenuOpened}
            closeMenu={closeMenu}
            openMenu={openMenu}
            options={[
                <a
                    href='tel:+919633160059'
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    <NavItem as={Flex} alignItems='center'>
                    <Flex
                             bg={bg[theme]}
                            borderRadius='100px'
                            p='1px'
                            alignItems='center'
                        ><Call />
                        </Flex>
                        <Span pl='3'>+91-9846027693</Span>
                    </NavItem>
                </a>,
                <a
                    href='mailto:rajay5767@gmail.com'
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    <NavItem as={Flex} alignItems='center'>
                        <Flex
                             bg={bg[theme]}
                            borderRadius='100px'
                            px='1px'
                            alignItems='center'
                        >
                            <Email />
                        </Flex>
                        <Span pl='3'>rajay5767@gmail.com</Span>
                    </NavItem>
                </a>,
                <a
                    href='https://www.linkedin.com/in/ajayraj-a-r'
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    <NavItem as={Flex} alignItems='center'>
                    <Flex
                             bg={bg[theme]}
                            borderRadius='100px'
                            px='2px'
                            alignItems='center'
                        ><Div fontWeight='700' fontSize='20px' color='#fff'>In</Div>
                        </Flex>
                        <Span pl='3'>Ajayraj A R</Span>
                    </NavItem>
                </a>,
            ]}
        >
            <Span>
                <Flex {...rest}>
                    Contact Us
                    <Span ml='3'>
                        <DownArrow />
                    </Span>
                </Flex>
            </Span>
        </NavDropdown>
    );
}

export default ContactDropdown;
