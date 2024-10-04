import { Div, Flex, Link, Span } from '../../style/StyledElements';
import NavDropdown from './NavDropdown';
import { NavItem } from '../../style/StyledComponents';
import { ReactComponent as DownArrow } from '../../asset/icons/DoubleDownArrow.svg';

function ServicesDropdown({ isMenuOpened, closeMenu, openMenu }) {
    const Service = ({ service, about, url, ...rest }) => {
        return (
            <NavItem
                as={Link}
                to={url}
                display='flex'
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                {...rest}
            >
                <Div color='white'>{service}</Div>
                <Span fontSize='12px' mt='1' color='#CCC4C4'>
                    {about}
                </Span>
            </NavItem>
        );
    };

    return (
        <NavDropdown
            isOpened={isMenuOpened}
            closeMenu={closeMenu}
            openMenu={openMenu}
            options={[
                <Flex
                    justifyContent='space-between'
                    width={{ lg: '45vw', xl: '40vw', xxl: '36vw' }}
                >
                    <Service
                        width='47%'
                        url='services/risk-analytics'
                        service='Risk Analytics'
                        about='Quantified Risk'
                    />
                    <Div bg='rgba(195, 195, 195, 0.23)' width='1px' mt='5' />
                    <Service
                        width='47%'
                        url='services/ai-ml/nlp'
                        service='Natural Language Processing'
                        about='Linguistic Insight Engine'
                    />
                </Flex>,
                <Flex
                    justifyContent='space-between'
                    width={{ lg: '45vw', xl: '40vw', xxl: '36vw' }}
                >
                    <Service
                        width='47%'
                        url='services/predictive-analytics'
                        service='Predictive Analytics'
                        about='Forecasting Excellence'
                    />
                    <Div bg='rgba(195, 195, 195, 0.23)' width='1px' />
                    <Service
                        width='47%'
                        url='services/ai-ml/edge-process'
                        service='Edge Computing'
                        about='Empowering Vision'
                    />
                </Flex>,
                <Flex
                    justifyContent='space-between'
                    width={{ lg: '45vw', xl: '40vw', xxl: '36vw' }}
                >
                    <Service
                        width='47%'
                        url='services/ai-ml'
                        service='AI & ML'
                        about='Quantified Risk'
                    />
                    <Div bg='rgba(195, 195, 195, 0.23)' width='1px' />
                    <Service
                        width='47%'
                        url='services/web-dev'
                        service={
                            <Span>
                                Web & Mobile Application <br /> Development
                            </Span>
                        }
                        about='Dynamic App Solutions'
                    />
                </Flex>,
                <Flex
                    justifyContent='space-between'
                    width={{ lg: '45vw', xl: '40vw', xxl: '36vw' }}
                >
                    <Service
                        width='47%'
                        url='services/internet-apps'
                        service='Internet of things'
                        about='Smart Connectivity'
                    />
                    <Div bg='rgba(195, 195, 195, 0.23)' width='1px' />
                    <Service
                        width='47%'
                        url='services/UI'
                        service={'UI/UX Consultancy'}
                        about='Optimized User Journeys'
                    />
                </Flex>,
                <Flex
                    width={{ lg: '45vw', xl: '40vw', xxl: '36vw' }}
                    justifyContent='space-between'
                >
                    <Service
                        width='47%'
                        url='services/generative-ai'
                        service='Generative AI'
                        about='Empowering Creative Minds'
                    />
                    <Div bg='rgba(195, 195, 195, 0.23)' width='1px' mb='5' />
                    <Div width='47%' />
                </Flex>,
            ]}
        >
            <Link to='services'>
                <Flex color='white'>
                    Services
                    <Span ml='3'>
                        <DownArrow />
                    </Span>
                </Flex>
            </Link>
        </NavDropdown>
    );
}

export default ServicesDropdown;
