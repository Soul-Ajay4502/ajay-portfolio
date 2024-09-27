import React from 'react';
import { Flex } from '../style/StyledElements';
import { AnimePill } from '../style/StyledComponents';
import { Download } from '../assets/icon';

const PdfDownload = () => {
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // Update with your actual file name
        link.download = 'ResumeAjay_Fullstack_developer.pdf'; // The name for the downloaded file
        link.click();
    };

    return (
        <>
            <AnimePill
                p='2'
                bg='#35a2f0'
                borderRadius='10px'
                textAlign='center'
                onClick={downloadPdf}
                justifyContent='center'
                alignItems='center'
                width='47%'
            >
                <Download /> Resume
            </AnimePill>
        </>
    );
};

export default PdfDownload;
