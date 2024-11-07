// Works.js
import React from "react";
import { Button, Div, Flex, Img, Para } from "../style/StyledElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import amc from '../assets/images/amc.png'
import timer from '../assets/images/timer.png'
import alco from '../assets/images/alco.png'
import exp from '../assets/images/track-expense.jpg'
import chrch from '../assets/images/chrch.jpg'




function WorkCard({ work }) {
    return (
        <Div style={cardStyle}
            mx='2'
            position='relative'
            overflow='hidden'
        >
            <img
                src={work.img[0] || "https://via.placeholder.com/150"} // Default image if none is provided
                alt={work.name}
                style={imageStyle}
            />
             <Flex
                    position='absolute'
                    fontSize='12px'
                    bg='#cc92f0'
                    borderRadius='15px'
                    p='2'
                    justifyContent='center'
                    alignItems='center'
                    width='29%'
                    top='37%'
                    right='-15px'
                >
                    {work.type}
                </Flex>
            <Div style={contentStyle} pt='4' pb='8'>
                <Flex justifyContent='center' pt='4'>
                    <h3>{work.name}</h3>
                </Flex>
                <Para textAlign='justify' p='4'>{work.desc || "No description provided"}</Para>
            </Div>
            <Flex
                position='absolute'
                bottom='0'
                left='0'
                right='15px'
                justifyContent={work.liveLink ? 'space-around' : 'center'}
                alignItems='center'
            >
                {work.git && (
                    <a href={work.git} target="_blank" rel="noopener noreferrer" style={{width:work.liveLink?'48%':'100%'}}>
                        <button style={{...buttonStyle, backgroundColor: "#7812b8",width:'100%'}}>
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
                )}
                {work.liveLink && (
                    <a href={work.liveLink} target="_blank" rel="noopener noreferrer"style={{width:work.git?'48%':'100%'}}>
                        <button style={{...buttonStyle, backgroundColor: "#007BFF",width:'100%'}}>Live Link</button>
                    </a>
                )}
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
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-evenly'
};
const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    border: '1px solid #fff'
};
const contentStyle = {
    marginTop: "25px",
};
const buttonStyle = {
    margin: "8px",
    padding: "8px 16px",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
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
        {
            id: "6",
            type: "Web App",
            name: "Daily Expense Tracker",
            desc: "The Daily Expense Tracker helps users efficiently manage and track their day-to-day financial transactions. With intuitive navigation and easy-to-use features, it enables users to add and monitor their income and expenses in real-time.",
            git: "https://github.com/Soul-Ajay4502/daily-expense-tracker-ai",
            liveLink: "https://dailyexpensetracker-b5a15.firebaseapp.com/login",
            img: [exp],
        },
        {
            id: "6",
            type: "Web App",
            name: "Church Data Portal",
            desc: "The Church Data Portal helps church efficiently manage the user details in the church across the world.(Unable to provide codebase)",
            // git: "https://github.com/Soul-Ajay4502/daily-expense-tracker-ai",
            liveLink: "https://ssck.in",
            img: [chrch],
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
                        // autoPlay
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
