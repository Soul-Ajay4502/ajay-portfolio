// Works.js
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Div, Flex } from "../style/StyledElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function WorkCard({ work }) {
    return (
        <Div style={cardStyle}
            // width={{lg:'250px',md:'150px',xs:'80px'}}
            mx='2'
        >
            <img
                src={work.img[0] || "https://via.placeholder.com/150"} // Default image if none is provided
                alt={work.name}
                style={imageStyle}
            />
            <Div style={contentStyle}>
                <h3>{work.name}</h3>
                <p>{work.desc || "No description provided"}</p>
                <Div>
                    <a href={work.git} target="_blank" rel="noopener noreferrer">
                        <button style={buttonStyle}>GitHub</button>
                    </a>
                    <a href={work.liveLink} target="_blank" rel="noopener noreferrer">
                        <button style={buttonStyle}>Live Link</button>
                    </a>
                </Div>
            </Div>
        </Div>
    );
}
const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    // width: "250px",
    textAlign: "center",
};
const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
};

const contentStyle = {
    marginTop: "12px",
};

const buttonStyle = {
    margin: "8px",
    padding: "8px 16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

function Works() {
    const { theme, toggleTheme, themeStyles } = useTheme();
    const workObject = [
        {
            id: "1",
            type: "Web Site",
            name: "Timer Website",
            desc: "A simple timer website.",
            git: "https://github.com/example/timer",
            liveLink: "https://example.com/timer",
            img: ["https://via.placeholder.com/300x150"],
        },
        {
            id: "2",
            type: "Mobile Application",
            name: "AMC Reminder",
            desc: "An app for setting AMC reminders.",
            git: "https://github.com/example/amc-reminder",
            liveLink: "https://example.com/amc-reminder",
            img: ["https://via.placeholder.com/300x150"],
        },
        {
            id: "3",
            type: "Mobile Application",
            name: "AMC Reminder",
            desc: "An app for setting AMC reminders.",
            git: "https://github.com/example/amc-reminder",
            liveLink: "https://example.com/amc-reminder",
            img: ["https://via.placeholder.com/300x150"],
        },
        {
            id: "4",
            type: "Mobile Application",
            name: "AMC Reminder",
            desc: "An app for setting AMC reminders.",
            git: "https://github.com/example/amc-reminder",
            liveLink: "https://example.com/amc-reminder",
            img: ["https://via.placeholder.com/300x150"],
        },
        // Add more works as needed
    ];

    const responsive = {
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
    };

    return (
        <Div p='20px' mt='8' >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>My Works</h2>
            <Flex
                justifyContent='center'
                display={{ xs:'none',sm:'none',md: 'none', lg: 'flex' }}
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
                        autoPlay
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
