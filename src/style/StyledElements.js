import styled from 'styled-components';
import theme from './theme';
import { Link as RouterLink } from 'react-router-dom';
import { NavLink as RouterNavLink } from 'react-router-dom';

import {
    space,
    layout,
    color,
    flexbox,
    flex,
    border,
    typography,
    background,
    position,
    textStyle,
    shadow,
    compose,
} from 'styled-system';
import { grid } from 'styled-system';
import { system } from 'styled-system';

const customProps = system({
    textDecoration: true,
    cursor: true,
    textTransform: true,
});

const basicStyleConfig = compose(
    space,
    layout,
    color,
    shadow,
    border,
    typography,
    position,
    background,
    textStyle,
    customProps
);

const Div = styled.div`
    ${basicStyleConfig}
`;
const Nav = styled.nav`
    position: fixed;
    top: 0;
    ${basicStyleConfig}
`;
const Para = styled.p`
    margin: 0;
    ${basicStyleConfig}
`;
const Span = styled.span`
    ${basicStyleConfig}
`;

const Flex = styled(Div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => (props.center ? 'center' : '')};
    align-items: ${(props) => (props.center ? 'center' : '')};
    ${flexbox}
    ${layout}
`;

const Col = styled(Flex)`
    padding: ${(props) => '0 ' + (theme.space[props.gap] ?? '0') + 'px'};
    ${flex};
    ${space};
    ${layout}
`;
const Grid = styled(Div)`
    display: grid;
    ${grid}
    ${flexbox}
    ${layout}
`;

const Input = styled.input`
    border-radius: 10px;
    padding: 12px;
    font-family: inherit;
    border: 1px solid #00000050;
    &:focus-visible {
        outline: none;
    }
    width: 100%;
    ${basicStyleConfig}
`;
const Label = styled.label`
    ${basicStyleConfig}
`;
const Textarea = styled.textarea`
    border-radius: 6px;
    padding: 12px;
    border: 1px solid #00000050;
    font-family: inherit;
    &:focus-visible {
        outline: none;
    }
    width: 100%;
    ${basicStyleConfig}
`;

const Button = styled.button`
    padding: 6px 8px;
    border-radius: 8px;
    background: ${theme.colors.primary};
    color: white;
    font-size: 0.9em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    &:disabled {
        opacity: 0.8;
        cursor: initial;
    }
    border: none;
    ${basicStyleConfig}
`;

const headings = {};
const hs = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

hs.forEach((h) => {
    headings[h] = styled[h]`
        color: ${theme.colors.black};
        margin: 0;
        ${basicStyleConfig}
    `;
});

const H1 = headings.h1;
const H2 = headings.h2;
const H3 = headings.h3;
const H4 = headings.h4;
const H5 = headings.h5;
const H6 = headings.h6;

const Link = styled(RouterLink)`
    text-decoration: none;
    color: white;
    &:hover {
        color: ${theme.colors.blue[900]};
    }
    ${basicStyleConfig}
`;

const NavLink = styled(RouterNavLink)`
    text-decoration: none;
    &:hover {
        color: ${theme.colors.blue[900]};
    }
    ${basicStyleConfig}
`;

const Hr = styled.hr`
    border: none;
    border-top: 1px solid;
    background-color: transparent;
    border-color: ${(props) =>
        theme.colors[props.color] || props.color || '#dbdbdb'};
    ${space}
    ${layout}
`;
const Img = styled.img`
    width: 100%;
    ${basicStyleConfig}
`;
const Picture = styled.picture`
    ${space}
    ${border}
    ${layout}
    ${shadow}
`;
const Ul = styled.ul`
    ${basicStyleConfig}
`;
const Ol = styled.ol`
    ${basicStyleConfig}
`;
const Li = styled.li`
    ${basicStyleConfig}
`;
export {
    Div,
    Flex,
    Col,
    Para,
    Span,
    Input,
    Label,
    Textarea,
    Button,
    Link,
    NavLink,
    Grid,
    Hr,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Img,
    Picture,
    Nav,
    Ul,
    Ol,
    Li,
};
