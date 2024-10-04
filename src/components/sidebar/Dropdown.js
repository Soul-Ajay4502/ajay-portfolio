import { Div, Flex, Span } from '../../style/StyledElements';
import { NavItem } from '../../style/StyledComponents';
import { ReactComponent as DownArrow } from '../../assets/icon/DoubleDownArrow.svg';
import { ReactComponent as UpArrow } from '../../assets/icon/DoubleUpActiveArrow.svg';

const DropDown = ({ item, toggleMenu, options, isOpen }) => {
    return (
        <Div>
            <Flex
                alignItems='center'
                justifyContent='space-between'
                fontSize={{ xs: '20px', md: '24px' }}
                fontWeight='500'
                borderBottom='1px solid #383838'
                py='5'
                onClick={toggleMenu}
                pr='4'
            >
                <Span>{item}</Span>
                {isOpen ? <UpArrow /> : <DownArrow />}
            </Flex>
            <Div display={isOpen ? 'block' : 'none'}>
                {options.map(({ onSelect, title, about, ...rest }) => (
                    <NavItem
                        alignItems='center'
                        onClick={onSelect}
                        borderBottom='1px solid #383838'
                        {...rest}
                    >
                        <Div color='white'>{title}</Div>
                        <Span fontSize='12px' color='#CCC4C4'>
                            {about}
                        </Span>
                    </NavItem>
                ))}
            </Div>
        </Div>
    );
};

export default DropDown;
