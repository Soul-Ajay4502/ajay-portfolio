const lineHeights = [1, 1.25, 1.5];
const radii = [
    '0px',
    '2px',
    '4px',
    '8px',
    '10px',
    '16px',
    '24px',
    '36px',
    '48px',
];

const space = [0, 4, 8, 10, 16, 24, 32, 48, 64, 128, 256];

export const lightTheme = {
    backgroundColor: "#F2F5F9",
    bg:'#fff',
    color: "#000000"
  };
  
  export const darkTheme = {
    backgroundColor: "#000",
    bg:'#2e2d29',
    color: "#ffffff"
  };
  

const theme = {
    breakpoints: {},

    space,
    fontSizes: {},
    lineHeights,
    fonts: {
        normal: 'Roboto, sans-serif',
        heading: 'Epilogue, san-serif',
        inter: 'Inter, sans-serif',
    },
    colors: {
        blue: {
            primary: '#3368D2',
            900: '#80a7ff',
            800: '#8C97CC',
            100: '#F9FCFF',
        },
        primary: '#495ABA',
        dark: '#0e0e0e',
        muted: '#FFFFFF99',
    },

    radii,
};

const fontSizes = [
    '.65rem',
    '1rem',
    '1.1rem',
    '1.2rem',
    '1.4rem',
    '1.6rem',
    '2.2rem',
    '3rem',
    '4.4rem',
];

theme.fontSizes.heading = fontSizes[8];
theme.fontSizes.display1 = fontSizes[7];
theme.fontSizes.display2 = fontSizes[6];
theme.fontSizes.display3 = fontSizes[5];
theme.fontSizes.display4 = fontSizes[4];
theme.fontSizes.display5 = fontSizes[3];
theme.fontSizes.display6 = fontSizes[2];
theme.fontSizes.normal = fontSizes[1];
theme.fontSizes.small = '.7rem';
theme.fontSizes.smaller = fontSizes[0];

theme.breakpoints.xs = '320px';
theme.breakpoints.sm = '480px';
theme.breakpoints.md = '767px';
theme.breakpoints.lg = '1025px';
theme.breakpoints.xl = '1200px';
theme.breakpoints.xxl = '1400px';

export default theme;
