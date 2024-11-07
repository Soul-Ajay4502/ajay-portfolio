"use strict";(self.webpackChunkajay_portfolio=self.webpackChunkajay_portfolio||[]).push([[967],{5967:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var r,i,o,l=n(5043),s=n(5475),a=n(3216),c=n(6174);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(null,arguments)}function p(e,t){let{title:n,titleId:s,...a}=e;return l.createElement("svg",d({width:17,height:20,viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},a),n?l.createElement("title",{id:s},n):null,r||(r=l.createElement("path",{d:"M14.4167 5.34036L14.4167 14.029C14.4167 14.4775 14.8092 14.8696 15.2573 14.8696C15.7058 14.8696 16.098 14.4771 16.098 14.029L16.0984 5.34036C16.0984 4.89187 15.7058 4.49969 15.2577 4.49969C14.8092 4.49969 14.4167 4.89188 14.4167 5.34036H14.4167Z",fill:"white"})),i||(i=l.createElement("path",{d:"M7.6175 0.948822L7.6175 18.3258C7.6175 18.7743 8.01008 19.1665 8.45817 19.1665C8.90666 19.1665 9.29883 18.7739 9.29883 18.3258L9.29883 0.948822C9.29883 0.500333 8.90626 0.108158 8.45817 0.108158C8.00968 0.108158 7.6175 0.500343 7.6175 0.948822V0.948822Z",fill:"white"})),o||(o=l.createElement("path",{d:"M0.666576 0.948822L0.666576 18.3258C0.666576 18.7743 1.05915 19.1665 1.50724 19.1665C1.95573 19.1665 2.3479 18.7739 2.3479 18.3258L2.3479 0.948822C2.3479 0.500333 1.95533 0.108158 1.50724 0.108158C1.05875 0.108158 0.666576 0.500343 0.666576 0.948822V0.948822Z",fill:"white"})))}const x=l.forwardRef(p);n.p;var h=n(5464),C=n(9657);function u(){return{isDesktop:(0,C.Ub)({minWidth:1024}),isTablet:(0,C.Ub)({minWidth:768,maxWidth:1023}),isMobile:(0,C.Ub)({maxWidth:767}),isBigMobile:(0,C.Ub)({minWidth:480,maxWidth:767})}}var f=n(7902),g=n(579);const m=h.Ay.div`
    position: relative;
    height: 100%;
    display: inline-block;
`,b=h.Ay.button`
    background-color: transparent;
    font-size: inherit;
    border: none;
    height: 100%;
    cursor: pointer;
`,j=h.Ay.div`
    display: ${e=>e.open?"block":"none"};
    position: absolute;
    width: max-content;
    border-radius: 13px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
    z-index: 1;
    padding: 12px;
    top: 235%;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`,w=e=>{let{options:t,children:n,isOpened:r,closeMenu:i,openMenu:o}=e;const s=(0,l.useRef)(null),{themeStyles:a}=(0,f.D)();return(0,l.useEffect)((()=>{const e=e=>{r&&s.current&&!s.current.contains(e.target)&&i()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[r]),(0,g.jsxs)(m,{children:[(0,g.jsx)(b,{onMouseOver:o,children:n}),(0,g.jsx)(j,{open:r,ref:s,style:{color:a.color},children:t.map(((e,t)=>(0,g.jsx)("div",{onClick:i,children:e},t)))})]})};const y=n.p+"static/media/NavDropdownHighIcon.f4d616cf6ee6639a4f0084800aa92434.svg",v=((0,h.Ay)(c.i)`
    white-space: nowrap;
    will-change: transform;
    animation: ${e=>{let{direction:t,time:n}=e;return`marquee-${null!==t&&void 0!==t?t:"left"} ${null!==n&&void 0!==n?n:"30s"} linear infinite`}};

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
`,(0,h.Ay)(c.$n)`
    border: 2px solid white;
    border-radius: 50px;
    transition: all 0.3s ease-in;
    box-shadow: -1px 2px 1px 0px #999;
    &:hover {
        transform: scale(1.01) translate(5px, -2px) skewX(1deg);
        box-shadow: -3px 3px 1px 0px #888;
    }
`,(0,h.Ay)(c.Ul)`
    list-style: none;
    li {
        padding-left: 1.7rem;
        text-indent: -1.5em;
    }
    li::before {
        content: '👉 ';
    }
`,(0,h.Ay)(c.i)`
    ::-webkit-scrollbar {
        display: none;
    }
`,(0,h.Ay)(c.i)`
    padding: 16px 12px;
    padding-right: 45px;
    position: relative;
    cursor: pointer;
    ::after {
        content: url(${y});
        position: absolute;
        display: inline-flex;
        right: 0;
        visibility: hidden;
        align-items: center;
        justify-content: end;
        height: 100%;
        width: 100%;
        top: 0;
        z-index: -1;
        box-sizing: border-box;
        padding-right: 10px;
    }
    &:hover {
        ::after {
            visibility: visible;
            border-radius: 7px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            background: linear-gradient(
                94deg,
                rgba(33, 77, 162, 0.17) 0%,
                #212831 79.56%
            );
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
        }
        
        color:#fff;
        background: linear-gradient(180deg, #6d99e5 0%, #9962e6 100%);
        background-clip: text;
        -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
    }
`);var L,k,E;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(null,arguments)}function A(e,t){let{title:n,titleId:r,...i}=e;return l.createElement("svg",M({width:13,height:18,viewBox:"0 0 13 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,L||(L=l.createElement("g",{clipPath:"url(#clip0_5997_16442)"},l.createElement("path",{d:"M11.2133 3.29357L6.92033 7.58657L2.62733 3.29357C2.43873 3.11141 2.18612 3.01062 1.92393 3.0129C1.66173 3.01517 1.41092 3.12034 1.22551 3.30575C1.0401 3.49116 0.934933 3.74197 0.932655 4.00417C0.930377 4.26636 1.03117 4.51897 1.21333 4.70757L6.21333 9.70757C6.40086 9.89504 6.65516 10.0004 6.92033 10.0004C7.18549 10.0004 7.4398 9.89504 7.62733 9.70757L12.6273 4.70757C12.7228 4.61532 12.799 4.50498 12.8514 4.38297C12.9038 4.26097 12.9314 4.12975 12.9326 3.99697C12.9337 3.86419 12.9084 3.73251 12.8582 3.60962C12.8079 3.48672 12.7336 3.37507 12.6397 3.28117C12.5458 3.18728 12.4342 3.11303 12.3113 3.06275C12.1884 3.01247 12.0567 2.98717 11.9239 2.98832C11.7911 2.98947 11.6599 3.01706 11.5379 3.06947C11.4159 3.12188 11.3056 3.19806 11.2133 3.29357Z",fill:"white"}))),k||(k=l.createElement("g",{clipPath:"url(#clip1_5997_16442)"},l.createElement("path",{d:"M11.2133 9.29357L6.92033 13.5866L2.62733 9.29357C2.43873 9.11141 2.18612 9.01062 1.92393 9.0129C1.66173 9.01517 1.41092 9.12034 1.22551 9.30575C1.0401 9.49116 0.934933 9.74197 0.932655 10.0042C0.930377 10.2664 1.03117 10.519 1.21333 10.7076L6.21333 15.7076C6.40086 15.895 6.65516 16.0004 6.92033 16.0004C7.18549 16.0004 7.4398 15.895 7.62733 15.7076L12.6273 10.7076C12.7228 10.6153 12.799 10.505 12.8514 10.383C12.9038 10.261 12.9314 10.1298 12.9326 9.99697C12.9337 9.86419 12.9084 9.73251 12.8582 9.60962C12.8079 9.48672 12.7336 9.37507 12.6397 9.28117C12.5458 9.18728 12.4342 9.11303 12.3113 9.06275C12.1884 9.01247 12.0567 8.98717 11.9239 8.98832C11.7911 8.98947 11.6599 9.01706 11.5379 9.06947C11.4159 9.12188 11.3056 9.19806 11.2133 9.29357Z",fill:"white"}))),E||(E=l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_5997_16442"},l.createElement("rect",{width:12,height:12,fill:"white",transform:"translate(0.919922)"})),l.createElement("clipPath",{id:"clip1_5997_16442"},l.createElement("rect",{width:12,height:12,fill:"white",transform:"translate(0.919922 6)"})))))}const R=l.forwardRef(A);n.p;var I,S,O,Z;function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(null,arguments)}function z(e,t){let{title:n,titleId:r,...i}=e;return l.createElement("svg",F({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,I||(I=l.createElement("path",{d:"M20.2499 14.93V18.23C20.2499 19.46 19.1599 20.4 17.9399 20.23C10.5999 19.21 4.78991 13.4 3.76991 6.06C3.59991 4.84 4.53991 3.75 5.76991 3.75H9.06991C9.55991 3.75 9.97991 4.1 10.0599 4.58L10.4499 6.77C10.5899 7.54 10.2699 8.32 9.62991 8.77L7.77991 10.36C9.20991 12.77 11.2399 14.78 13.6599 16.2L15.2299 14.38C15.6799 13.74 16.4599 13.42 17.2299 13.56L19.4199 13.95C19.8999 14.04 20.2499 14.45 20.2499 14.94V14.93Z",fill:"white",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),S||(S=l.createElement("path",{d:"M20.1198 10.0299C20.1198 6.65992 17.3898 3.91992 14.0098 3.91992",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),O||(O=l.createElement("path",{d:"M16.6798 10.0299C16.6798 8.54986 15.4798 7.35986 14.0098 7.35986",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Z||(Z=l.createElement("path",{d:"M20.2499 14.93V18.23C20.2499 19.46 19.1599 20.4 17.9399 20.23C10.5999 19.21 4.78991 13.4 3.76991 6.06C3.59991 4.84 4.53991 3.75 5.76991 3.75H9.06991C9.55991 3.75 9.97991 4.1 10.0599 4.58L10.4499 6.77C10.5899 7.54 10.2699 8.32 9.62991 8.77L7.77991 10.36C9.20991 12.77 11.2399 14.78 13.6599 16.2L15.2299 14.38C15.6799 13.74 16.4599 13.42 17.2299 13.56L19.4199 13.95C19.8999 14.04 20.2499 14.45 20.2499 14.94V14.93Z",fill:"white",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const D=l.forwardRef(z);n.p;var W,_;function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(null,arguments)}function B(e,t){let{title:n,titleId:r,...i}=e;return l.createElement("svg",V({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,W||(W=l.createElement("path",{d:"M11.5 15.5C13.433 15.5 15 13.933 15 12C15 10.067 13.433 8.5 11.5 8.5C9.567 8.5 8 10.067 8 12C8 13.933 9.567 15.5 11.5 15.5Z",stroke:"white",strokeWidth:2,strokeMiterlimit:10})),_||(_=l.createElement("path",{d:"M16.1332 19.9969C14.8955 20.6379 13.49 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 12.8234 20.8894 13.6209 20.6823 14.3786C20.3763 15.4981 19.2674 16.1349 18.1068 16.1349V16.1349C16.3909 16.1349 15 14.744 15 13.0282V8.5",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const P=l.forwardRef(B);n.p;const N=function(e){let{isMenuOpened:t,closeMenu:n,openMenu:r,...i}=e;const{theme:o}=(0,f.D)(),l={light:"#000",dark:"transparent"};return(0,g.jsx)(w,{isOpened:t,closeMenu:n,openMenu:r,options:[(0,g.jsx)("a",{href:"tel:+919633160059",style:{textDecoration:"none",color:"inherit"},children:(0,g.jsxs)(v,{as:c.so,alignItems:"center",children:[(0,g.jsx)(c.so,{bg:l[o],borderRadius:"100px",p:"1px",alignItems:"center",children:(0,g.jsx)(D,{})}),(0,g.jsx)(c.L9,{pl:"3",children:"+91-9846027693"})]})}),(0,g.jsx)("a",{href:"mailto:rajay5767@gmail.com",style:{textDecoration:"none",color:"inherit"},children:(0,g.jsxs)(v,{as:c.so,alignItems:"center",children:[(0,g.jsx)(c.so,{bg:l[o],borderRadius:"100px",px:"1px",alignItems:"center",children:(0,g.jsx)(P,{})}),(0,g.jsx)(c.L9,{pl:"3",children:"rajay5767@gmail.com"})]})}),(0,g.jsx)("a",{href:"https://www.linkedin.com/in/ajayraj-a-r",style:{textDecoration:"none",color:"inherit"},children:(0,g.jsxs)(v,{as:c.so,alignItems:"center",children:[(0,g.jsx)(c.so,{bg:l[o],borderRadius:"100px",px:"2px",alignItems:"center",children:(0,g.jsx)(c.i,{fontWeight:"700",fontSize:"20px",color:"#fff",children:"In"})}),(0,g.jsx)(c.L9,{pl:"3",children:"Ajayraj A R"})]})})],children:(0,g.jsx)(c.L9,{children:(0,g.jsxs)(c.so,{...i,children:["Contact Me",(0,g.jsx)(c.L9,{ml:"3",children:(0,g.jsx)(R,{})})]})})})};n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;n.p;var T;function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(null,arguments)}function X(e,t){let{title:n,titleId:r,...i}=e;return l.createElement("svg",H({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,T||(T=l.createElement("path",{d:"M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2Z",fill:"#F2F7FC"})))}const $=l.forwardRef(X);n.p;n.p;n.p;var q;function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(null,arguments)}function J(e,t){let{title:n,titleId:r,...i}=e;return l.createElement("svg",U({fill:"#FFFFFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,q||(q=l.createElement("path",{d:"M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 25 15 C 19.484375 15 15 19.484375 15 25 C 15 30.515625 19.484375 35 25 35 C 30.515625 35 35 30.515625 35 25 C 35 19.484375 30.515625 15 25 15 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"})))}const Y=l.forwardRef(J);n.p;var K;function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(null,arguments)}function Q(e,t){let{title:n,titleId:r,...i}=e;return l.createElement("svg",G({fill:"#1A1A1A",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,K||(K=l.createElement("path",{d:"M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 25 15 C 19.484375 15 15 19.484375 15 25 C 15 30.515625 19.484375 35 25 35 C 30.515625 35 35 30.515625 35 25 C 35 19.484375 30.515625 15 25 15 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"})))}const ee=l.forwardRef(Q),te=(n.p,(0,h.Ay)(c.$n)`
    border-radius: 10px;
    background: linear-gradient(167deg, #2299C7 18%, #A7CEFF 57%);
    color: #222732;
    font-size: 16px;
    &:hover {
        transform: scale(1.01) translate(5px, -2px) skewX(1deg);
        box-shadow: -3px 3px 1px 0px #888;
    }
`),ne=()=>(0,g.jsxs)(te,{ml:{md:"5",xxl:"7"},onClick:()=>{const e=document.createElement("a");e.href="/ajay-portfolio/resume.pdf",e.download="ResumeAjay_Fullstack_developer.pdf",e.click()},py:"10px",px:{xs:"20px",lg:"15px",xl:"20px"},children:[(0,g.jsx)($,{})," Resume"]});(0,h.Ay)(c.$n)`
    border-radius: 10px;
    background: linear-gradient(167deg, #2299C7 18%, #A7CEFF 57%);
    color: #222732;
    font-size: 16px;
    &:hover {
        transform: scale(1.01) translate(5px, -2px) skewX(1deg);
        box-shadow: -3px 3px 1px 0px #888;
    }
`,(0,h.Ay)(c.N_)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    ::after {
        content: '';
        display: ${e=>e.active?"inline-block":"none"};
        width: 5px;
        height: 5px;
        background: white;
        border-radius: 50%;
        margin-top: 8px;
    }
`;const re=function(e){let{toggleSidebar:t,closeSidebar:n}=e;(0,a.Zp)();const{pathname:r}=(0,a.zy)(),{isMobile:i}=u(),[o,s]=(0,l.useState)(null),[d,p]=(0,l.useState)(!1),{themeStyles:h,toggleTheme:C,theme:m}=(0,f.D)();return(0,g.jsx)(c.so,{position:"fixed",top:"0",zIndex:"1001",width:"100%",fontFamily:"inter",justifyContent:"center",children:(0,g.jsxs)(c.so,{px:{xs:"4",md:"7",lg:"4",xl:"45px"},py:{xs:"2",lg:"0"},height:{lg:"80px"},mt:"50px",alignItems:"center",borderRadius:"20px",width:"80%",className:"nav-glass-container",justifyContent:"space-between",position:"relative",children:[(0,g.jsx)(c.N_,{to:"/",onClick:n,color:h.color,children:"AJAYRAJ A R"}),(0,g.jsx)(c.L9,{ml:"auto",display:{lg:"none"},onClick:t,children:(0,g.jsx)(x,{})}),(0,g.jsx)(c.i,{position:"absolute",top:{lg:"23%",md:"-10%"},right:{lg:"50%",sm:"43%",md:"48%",xs:"40%"},children:(0,g.jsx)("button",{className:"mode-toggle",onClick:C,children:"light"===m?(0,g.jsx)(ee,{width:"40px"}):(0,g.jsx)(Y,{width:"40px"})})}),(0,g.jsxs)(c.i,{ml:"auto",fontSize:"16px",display:{xs:"none",lg:"flex"},height:"100%",style:{alignItems:"center"},children:[(0,g.jsx)(c.i,{ml:{md:"4",xxl:"7"},display:"inline",children:(0,g.jsx)(N,{isMenuOpened:"contacts"===o,closeMenu:()=>s(null),openMenu:()=>s("contacts"),color:h.color})}),(0,g.jsx)(ne,{})]})]})})};var ie=n(3156);const oe=function(e){let{show:t,closeSidebar:n}=e;const{contextCurrentSection:r,themeStyles:i,theme:o}=(0,f.D)(),l={light:{bg:"linear-gradient(167deg, #2299C7 18%, #A7CEFF 57%)",shadow:"rgba(6, 0, 0, 0.5) -1px 8px 9px"},dark:{bg:"#000",shadow:""}};return(0,g.jsxs)(c.so,{...le.container,bg:i.backgroundColor,style:{transform:t?"translateX(0%)":"translateX(-100%)",transition:".15s ease-out"},children:[(0,g.jsxs)(c.i,{mt:"205px",position:"relative",children:[(0,g.jsx)(c.so,{position:"absolute",top:"-70px",left:"-10px",fontSize:"30px",onClick:n,borderRadius:"80px",px:"10px",height:"46px",justifyContent:"center",alignItems:"center",children:(0,g.jsx)(ie.tRC,{})}),(0,g.jsx)(c.N_,{style:{background:l[o].bg,borderTopRightRadius:"20px",borderTopLeftRadius:"20px",marginTop:"10px"},smooth:!0,to:"tel:+919846027693",onClick:()=>{n(),r({section:"section1"})},...le.link,children:(0,g.jsxs)(c.so,{alignItems:"center",children:[(0,g.jsx)(D,{}),(0,g.jsx)(c.L9,{pl:"3",children:"+91-9846027693"})]})}),(0,g.jsx)(c.N_,{style:{background:l[o].bg,border:"none"},smooth:!0,to:"mailto:rajay5767@gmail.com",onClick:()=>{n(),r({section:"section2"})},...le.link,children:(0,g.jsxs)(c.so,{alignItems:"center",children:[(0,g.jsx)(P,{}),(0,g.jsx)(c.L9,{pl:"3",children:"rajay5767@gmail.com"})]})}),(0,g.jsx)(c.N_,{style:{background:l[o].bg,borderBottomRightRadius:"20px",borderBottomLeftRadius:"20px",boxShadow:l[o].shadow,borderBottom:"none"},smooth:!0,to:"https://www.linkedin.com/in/ajayraj-a-r",onClick:()=>{n(),r({section:"section3"})},...le.link,children:(0,g.jsxs)(c.so,{alignItems:"center",children:[(0,g.jsx)(c.so,{borderRadius:"100px",px:"2px",alignItems:"center",children:(0,g.jsx)(c.i,{fontWeight:"700",fontSize:"20px",color:"#fff",children:"In"})}),(0,g.jsx)(c.L9,{pl:"3",color:"#fff",children:"Ajayraj A R"})]})})]}),(0,g.jsx)(ne,{})]})},le={container:{width:"93%",minHeight:"100vh",height:"100vh",flexWrap:"nowrap",position:"fixed",zIndex:"10001",bottom:"0",flexDirection:"column",p:{xs:"4",sm:"6",md:"7"},backgroundColor:"#15171A",fontFamily:"inter",overflowY:"auto",justifyContent:"space-between"},link:{fontSize:{xs:"20px",md:"24px"},fontWeight:"500",borderBottom:"1px solid #383838",display:"block",py:"5"},button:{borderRadius:"10px",pl:"5",pr:"5",py:"3",letterSpacing:"1px",background:"#2299B1",fontSize:"14px",width:"100%",mt:"6"}},se=e=>{let{...t}=e;return(0,g.jsxs)(c.so,{width:"99.5%",height:"100px",py:"8",borderRadius:"10px",textAlign:"center",justifyContent:"space-around",className:"footer-glass-container",children:[(0,g.jsxs)(c.i,{children:[(0,g.jsxs)(c.so,{fontSize:{xs:"12px",md:"18px"},children:["Developed by ",(0,g.jsx)(c.lr,{px:"2",fontWeight:"600",children:"  Ajayraj"})]}),(0,g.jsx)(c.so,{py:"4",children:(0,g.jsx)("a",{href:"https://github.com/Soul-Ajay4502",style:{textDecoration:"none",color:"inherit"},children:(0,g.jsx)(c.E9,{width:"40px",src:"https://skillicons.dev/icons?i=github",alt:"github-skillicons",className:"skill-icon"})})})]}),(0,g.jsxs)(c.i,{children:[(0,g.jsx)("a",{href:"tel:+919633160059",style:{textDecoration:"none",color:"inherit"},children:(0,g.jsxs)(c.so,{as:c.so,alignItems:"center",children:[(0,g.jsx)(c.so,{borderRadius:"100px",p:"1px",alignItems:"center",children:(0,g.jsx)(D,{})}),(0,g.jsx)(c.L9,{pl:"3",children:"+91-9846027693"})]})}),(0,g.jsx)("a",{href:"mailto:rajay5767@gmail.com",style:{textDecoration:"none",color:"inherit"},children:(0,g.jsxs)(c.so,{as:c.so,alignItems:"center",children:[(0,g.jsx)(c.so,{borderRadius:"100px",px:"1px",alignItems:"center",children:(0,g.jsx)(P,{})}),(0,g.jsx)(c.L9,{pl:"3",children:"rajay5767@gmail.com"})]})}),(0,g.jsx)("a",{href:"https://www.linkedin.com/in/ajayraj-a-r",style:{textDecoration:"none",color:"inherit"},children:(0,g.jsxs)(c.so,{as:c.so,alignItems:"center",children:[(0,g.jsx)(c.so,{borderRadius:"100px",px:"2px",alignItems:"center",children:(0,g.jsx)(c.i,{fontWeight:"700",fontSize:"20px",color:"#fff",children:"In"})}),(0,g.jsx)(c.L9,{pl:"3",children:"Ajayraj A R"})]})})]})]})};const ae=function(){const[e,t]=(0,l.useState)(!1),n=(0,l.useRef)(null),r=(0,a.zy)(),{isDesktop:i}=u(),{theme:o,themeStyles:s}=(0,f.D)();(0,l.useEffect)((()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[e]),(0,l.useEffect)((()=>{document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,n.current.scrollTop=0}),[r]);const d=()=>{e&&t(!1)};return(0,g.jsxs)(c.i,{bg:s.backgroundColor,color:s.color,className:"main-container",children:[(0,g.jsx)(re,{toggleSidebar:()=>t(!e),closeSidebar:d}),!i&&(0,g.jsx)(oe,{show:e,closeSidebar:d}),(0,g.jsx)(c.i,{ref:n,fontFamily:"normal",children:(0,g.jsx)(a.sv,{})}),(0,g.jsx)(se,{})]})};var ce=n(2943);const de={container:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",backgroundColor:"#000"},logo:{width:"200px",height:"200px"}},pe=()=>(0,g.jsxs)("div",{style:de.container,children:[(0,g.jsx)(c.lr,{color:"#fff",fontFamily:"Silkscreen",fontSize:{lg:"57px",md:"54px",xs:"43px"},fontWeight:"500",children:" AJAYRAJ A R "}),(0,g.jsxs)(c.lr,{color:"#fff",fontFamily:"Silkscreen",fontSize:"17px",py:"2",children:[" ","< Full Stack Developer / >"," "]}),(0,g.jsx)(c.lr,{color:"#fff",fontFamily:"Silkscreen",textAlign:"right",fontSize:"12px",children:"PORTFOLIO"})]});const xe=function(){const[e,t]=l.useState(!0);return l.useEffect((()=>{const e=setTimeout((()=>{t(!1)}),3e3);return()=>clearTimeout(e)}),[]),(0,g.jsx)(g.Fragment,{children:e?(0,g.jsx)(pe,{}):(0,g.jsx)(s.Kd,{children:(0,g.jsx)(a.BV,{children:(0,g.jsx)(a.qh,{path:"/ajay-portfolio",element:(0,g.jsx)(ae,{}),children:(0,g.jsx)(a.qh,{index:!0,element:(0,g.jsx)(ce.A,{})})})})})})}}}]);
//# sourceMappingURL=967.62ea8b80.chunk.js.map