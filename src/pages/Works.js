// Works.js
import React from "react";
import { Button, Div, Flex, Img, Para } from "../style/StyledElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import amc from '../assets/images/amc.png'
import timer from '../assets/images/timer.png'
import alco from '../assets/images/alco.png'


function WorkCard({ work }) {
    return (
        <Div style={cardStyle}
            // width={{lg:'250px',md:'150px',xs:'80px'}}
            mx='2'
            position='relative'
            overflow='hidden'
        >
            <img
                src={work.img[0] || "https://via.placeholder.com/150"} // Default image if none is provided
                alt={work.name}
                style={imageStyle}
            />
            <Div style={contentStyle} pb='6'>
                {/* <Flex justifyContent='right'> */}
                <Flex
                    position='absolute'
                    fontSize='12px'
                    bg='#cc92f0'
                    borderRadius='15px'
                    p='2'
                    justifyContent='center'
                    width='25%'
                    right='-15px'
                >
                    {work.type}
                </Flex>
                {/* </Flex> */}
                <Flex justifyContent='center' pt='4'>

                    <h3>{work.name}</h3>

                </Flex>
                <Para textAlign='justify' p='4'>{work.desc || "No description provided"}</Para>

            </Div>
            <Flex
                position='absolute'
                bottom='0'
                right={work.liveLink ? '15%' : '7%'}
            >
                {work.liveLink ? <>
                    <a href={work.git} target="_blank" rel="noopener noreferrer">
                        <button style={{...buttonStyle,backgroundColor: "#7812b8",}}>
                            <Flex alignItems='center' justifyContent='center'>
                                <Img
                                    width='20px'
                                    src={`https://skillicons.dev/icons?i=github`}
                                    alt='github-skillicons'
                                    className="skill-icon"
                                    pr='2'
                                />
                                <Div>Code</Div>
                            </Flex>
                        </button>
                    </a>
                    <a href={work.liveLink} target="_blank" rel="noopener noreferrer">
                        <button style={{...buttonStyle,backgroundColor: "#007BFF"}}>Live Link</button>
                    </a>
                </> :
                    <a href={work.git} target="_blank" rel="noopener noreferrer">
                        <Button px='100px' style={{...codeButtonStyle, width:'100%',backgroundColor: "#7812b8"}}>
                            <Flex alignItems='center' justifyContent='center'>
                                <Img
                                    width='20px'
                                    src={`https://skillicons.dev/icons?i=github`}
                                    alt='github-skillicons'
                                    className="skill-icon"
                                    pr='2'
                                />
                                <Div>Code</Div>
                            </Flex>
                        </Button>
                    </a>
                }
            </Flex>
        </Div>
    );
}
const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    height: '90%',
};
const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    border:'1px solid #fff'
};

const contentStyle = {
    marginTop: "12px",
};

const buttonStyle = {
    margin: "8px",
    padding: "8px 16px",
    // backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    height: '75%'
};

const codeButtonStyle = {
    margin: "8px",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    height: '75%'
};
function Works() {
    const workObject = [
        {
            id: "1",
            type: "Web Site",
            name: "Timer Website",
            desc: "A simple yet efficient timer website designed to help users manage time effortlessly. It features automatic tab switching based on user-defined intervals, ensuring productivity across multiple tasks.",
            git: "https://github.com/Soul-Ajay4502/timer-website",
            liveLink: "https://soul-ajay4502.github.io/timer-website/",
            img: [timer],
        },
        {
            id: "2",
            type: "Mobile App",
            name: "AMC Reminder",
            desc: "A mobile application built to manage AMC (Annual Maintenance Contracts) for various resources. Users can set reminders before contract renewals to avoid lapses.",
            git: "https://github.com/Soul-Ajay4502/Amc-Reminder-APP",
            img: [amc],
        },
        {
            id: "4",
            type: "Web App",
            name: "Carbon Design Example",
            desc: "A web application built using IBM's Carbon Design System, showcasing how modern UI components can be integrated into functional web interfaces.",
            git: "https://github.com/example/amc-reminder",
            img: ["https://avatars.githubusercontent.com/u/25179978?s=200&v=4"],
        },
        {
            id: "5",
            type: "Web App",
            name: "Alco Guard",
            desc: "Alco Guard is a comprehensive web application designed to help organizations manage alcohol consumption.",
            git: "https://github.com/Soul-Ajay4502/webalco",
            img: [alco],
        },
        {
            id: "3",
            type: "APIs",
            name: "AMC Reminder",
            desc: "A RESTful API developed for the AMC Reminder application, enabling integration with other systems. It allows for easy CRUD operations for reminders, users, and contract details.",
            git: "https://github.com/Soul-Ajay4502/Amc-Reminder-API",
            img: [amc],
        },
        // Add more works as needed
    ];



    return (
        <Div p='20px' mt='8' >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>My Works</h2>
            <Flex
                justifyContent='center'
                display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex' }}
            >
                <Div width='85%'>
                    <Carousel
                        swipeable
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        infinite
                        // autoPlay
                        autoPlaySpeed={3000}
                        centerMode
                        slidesToSlide={1}

                    >
                        {workObject.map((work) => (
                            <WorkCard key={work.id} work={work} />
                        ))}
                    </Carousel>
                </Div>
            </Flex>

            <Flex
                justifyContent='center'
                display={{ md: 'flex', lg: 'none' }}
            >
                <Div width='85%'>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >

                        {workObject.map((work) => (
                            <WorkCard key={work.id} work={work} />
                        ))}
                    </Carousel>
                </Div>
            </Flex>
        </Div>
    );
}

export default Works;
