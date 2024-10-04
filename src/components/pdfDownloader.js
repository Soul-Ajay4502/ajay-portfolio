import React from 'react';
import { Button } from '../style/StyledElements';
import { Download } from '../assets/icon';
import styled from 'styled-components';

const CTABTN = styled(Button)`
    border-radius: 10px;
    background: linear-gradient(167deg, #2299C7 18%, #A7CEFF 57%);
    color: #222732;
    font-size: 16px;
    &:hover {
        transform: scale(1.01) translate(5px, -2px) skewX(1deg);
        box-shadow: -3px 3px 1px 0px #888;
    }
`;

const PdfDownload = () => {
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // Update with your actual file name
        link.download = 'ResumeAjay_Fullstack_developer.pdf'; // The name for the downloaded file
        link.click();
    };

    return (
        <CTABTN
        ml={{ md: '5', xxl: '7' }}
        onClick={downloadPdf}
        py='10px'
        px={{ xs: '20px', lg: '15px', xl: '20px' }}
    >
                <Download /> Resume
           
        </CTABTN>
    );
};

export default PdfDownload;
