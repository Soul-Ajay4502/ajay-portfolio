import { Div, Flex, Link, Span } from '../../style/StyledElements';
import NavDropdown from './NavDropdown';
import { NavItem } from '../../style/StyledComponents';
import { ReactComponent as DownArrow } from '../../asset/icons/DoubleDownArrow.svg';

const ProductLink = ({ link, product, about }) => (
    <a
        display='block'
        width='100%'
        style={{
            textDecoration: 'none',
            color: 'inherit',
        }}
        target='_blank'
        href={link}
    >
        <NavItem alignItems='center'>
            <Div color='white'>{product}</Div>
            <Span fontSize='12px' color='#CCC4C4'>
                {about}
            </Span>
        </NavItem>
    </a>
);

function ProductDropDown({ isMenuOpened, closeMenu, openMenu }) {
    return (
        <NavDropdown
            isOpened={isMenuOpened}
            closeMenu={closeMenu}
            openMenu={openMenu}
            options={[
                <ProductLink
                    link='https://kobleapp.uk/'
                    product='Koble'
                    about='Community Building Application'
                />,
                <ProductLink
                    link='https://www.streamhall.uk/'
                    product='Streamhall Credit'
                    about='Corporate Trainer'
                />,
                <ProductLink
                    link='https://garbagedetective.com/'
                    product='Garbage Detective'
                    about='Garbage Surveillance Specialist'
                />,
            ]}
        >
            <Link to='/products'>
                <Flex color='white'>
                    Products
                    <Span ml='3'>
                        <DownArrow />
                    </Span>
                </Flex>
            </Link>
        </NavDropdown>
    );
}

export default ProductDropDown;
