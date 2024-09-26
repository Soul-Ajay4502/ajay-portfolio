import styled from 'styled-components';
import { Button, Div, Ul } from './StyledElements';
// import DoubleArrowIcon from '../asset/icons/NavDropdownHighIcon.svg';

const Runner = styled(Div)`
    white-space: nowrap;
    will-change: transform;
    animation: ${({ direction, time }) =>
        `marquee-${direction ?? 'left'} ${time ?? '30s'} linear infinite`};

    @keyframes marquee-left {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    @keyframes marquee-right {
        0% {
            transform: translateX(-50%);
        }
        100% {
            transform: translateX(0%);
        }
    }
`;
//  background: linear-gradient(92.54deg, #455db6 6.21%, #fff9  85.59%);
//    background: linear-gradient(92.54deg, #FF9C1A 6.21%, #EC1B09  85.59%);

const AnimePill = styled(Button)`
    border: 2px solid white;
    border-radius: 50px;
    transition: all 0.3s ease-in;
    box-shadow: -1px 2px 1px 0px #999;
    &:hover {
        transform: scale(1.01) translate(5px, -2px) skewX(1deg);
        box-shadow: -3px 3px 1px 0px #888;
    }
`;

const ArrowedUL = styled(Ul)`
    list-style: none;
    li {
        padding-left: 1.7rem;
        text-indent: -1.5em;
    }
    li::before {
        content: '👉 ';
    }
`;
const ScrollArea = styled(Div)`
    ::-webkit-scrollbar {
        display: none;
    }
`;

// const NavItem = styled(Div)`
//     padding: 16px 12px;
//     padding-right: 45px;
//     position: relative;
//     cursor: pointer;
//     ::after {
//         content: url(${DoubleArrowIcon});
//         position: absolute;
//         display: inline-flex;
//         right: 0;
//         visibility: hidden;
//         align-items: center;
//         justify-content: end;
//         height: 100%;
//         width: 100%;
//         top: 0;
//         z-index: -1;
//         box-sizing: border-box;
//         padding-right: 10px;
//     }
//     &:hover {
//         ::after {
//             visibility: visible;
//             border-radius: 7px;
//             border: 1px solid rgba(255, 255, 255, 0.06);
//             background: linear-gradient(
//                 94deg,
//                 rgba(33, 77, 162, 0.17) 0%,
//                 #212831 79.56%
//             );
//             box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
//         }
//         background: linear-gradient(180deg, #6d99e5 0%, #9962e6 100%);
//         background-clip: text;
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//     }
// `;

export { Runner, AnimePill, ArrowedUL, ScrollArea };
