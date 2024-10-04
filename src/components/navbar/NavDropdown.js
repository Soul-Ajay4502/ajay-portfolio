import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const DropdownContainer = styled.div`
    position: relative;
    height: 100%;
    display: inline-block;
`;

const DropdownButton = styled.button`
    background-color: transparent;
    font-size: inherit;
    border: none;
    height: 100%;
    cursor: pointer;
`;

const DropdownContent = styled.div`
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: absolute;
    width: max-content;
    border-radius: 13px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
    z-index: 1;
    padding: 12px;
    top: 235%;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`;

const NavDropdown = ({ options, children, isOpened, closeMenu, openMenu }) => {
    const dropdownRef = useRef(null);
    const{themeStyles}=useTheme()

    useEffect(() => {
        const handler = (event) => {
            if (
                isOpened &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [isOpened]);

    return (
        <DropdownContainer>
            <DropdownButton onMouseOver={openMenu}>{children}</DropdownButton>
            <DropdownContent 
            open={isOpened} ref={dropdownRef}
            style={{color:themeStyles.color }}
           >
                {options.map((option, index) => (
                    <div key={index} onClick={closeMenu}>
                        {option}
                    </div>
                ))}
            </DropdownContent>
        </DropdownContainer>
    );
};
export default NavDropdown;
