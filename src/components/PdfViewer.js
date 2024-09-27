import React, { useState } from 'react';
import { Div, Button, Flex } from '../style/StyledElements';
import page1 from '../assets/resume/page1.png'
import page2 from '../assets/resume/page2.png'
import page3 from '../assets/resume/page3.png'
import page4 from '../assets/resume/page4.png'



function ResumeViewer() {
    const [pages] = useState(4); // Total number of pages
    const [currentPage, setCurrentPage] = useState(1);

    const images = [
        { id: 1, path: page1 },
        { id: 2, path: page2 },
        { id: 3, path: page3 },
        { id: 4, path: page4 },
    ];

    const handleNext = () => {
        if (currentPage < pages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Div width='100%'>
            <img 
            src={images[currentPage - 1].path} 
            alt={`Resume page ${currentPage}`} 
            width={'100%'}
            />

            <Flex justifyContent='center'>
                <Button onClick={handlePrev} disabled={currentPage === 1}>
                    Prev
                </Button>
                <Flex
                    center
                    width='70px'
                    border='1px solid'
                    borderRadius='3'
                    color='blues.primary'
                    mx='3'
                >
                    {currentPage} / {pages}
                </Flex>
                <Button onClick={handleNext} disabled={currentPage === pages}>
                    Next
                </Button>
            </Flex>
        </Div>
    );
}

export default ResumeViewer;
