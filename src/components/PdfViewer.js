import React, { useState } from 'react';
import { Div, Button, Flex } from '../style/StyledElements';
import page1 from '../assets/resume/page1.png';
import page2 from '../assets/resume/page2.png';
import page3 from '../assets/resume/page3.png';
import page4 from '../assets/resume/page4.png';

function ResumeViewer() {
    const [pages] = useState(4); // Total number of pages
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true); // State for loader

    const images = [
        { id: 1, path: page1 },
        { id: 2, path: page2 },
        { id: 3, path: page3 },
        { id: 4, path: page4 },
    ];

    const handleNext = () => {
        if (currentPage < pages) {
            setIsLoading(true); // Show loader when changing page
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setIsLoading(true); // Show loader when changing page
            setCurrentPage(currentPage - 1);
        }
    };

    const handleImageLoad = () => {
        setIsLoading(false); // Hide loader when the image is loaded
    };

    return (
        <Div width='100%'>
        
            <img 
                src={images[currentPage - 1].path} 
                alt={`Resume page ${currentPage}`} 
                width='100%'
                loading='lazy'
                onLoad={handleImageLoad} // Hide loader when image loads
                
            />

            {/* Navigation buttons */}
            <Flex justifyContent='center' mt='10px'>
                <Button onClick={handlePrev} disabled={currentPage === 1 || isLoading}>
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
                <Button onClick={handleNext} disabled={currentPage === pages || isLoading}>
                    Next
                </Button>
            </Flex>
        </Div>
    );
}

export default ResumeViewer;
