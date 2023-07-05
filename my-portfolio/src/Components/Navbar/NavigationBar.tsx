import React, {useEffect, useRef, useState} from "react";
import {Button} from "react-bootstrap";
import * as Icon from 'react-feather';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const NavigationBar:React.FC = () => {
    const scrollToTarget = (classId: string, event: React.MouseEvent<HTMLButtonElement>) => {
        //event.preventDefault();
        const targetElement = document.querySelector(`.${classId}`);
        if (targetElement) {
            const topPosition = targetElement.getBoundingClientRect().top+ window.scrollY;
            scroll.scrollTo(topPosition, {
                smooth: false,
                duration: 100,
            });
        }
    };

    return(
        <div className="Navbar">
            <div className="circle-buttons">
                <Button variant="light" className="circle-button"
                        onClick={(event) => scrollToTarget('home-page', event)}
                >
                    <Icon.Home/>
                    <span className="button-text">Home</span>
                </Button>
                <Button variant="light" className="circle-button"
                        onClick={(event) => scrollToTarget('about-area', event)}
                >
                    <Icon.User/>
                    <span className="button-text">About</span>
                </Button>
                <Button variant="light" className="circle-button"
                        onClick={(event) => scrollToTarget('skills-area-content', event)}
                >
                    <Icon.Sliders/>
                    <span className="button-text">Skills</span>
                </Button>
                <Button variant="light" className="circle-button"
                        onClick={(event) => scrollToTarget('resume-area', event)}
                >
                    <Icon.File/>
                    <span className="button-text">Resume</span>
                </Button>
                <Button variant="light" className="circle-button"
                        onClick={(event) => scrollToTarget('portfolio-area', event)}
                >
                    <Icon.Briefcase/>
                    <span className="button-text">Portfolio</span>
                </Button>

                <Button variant="light" className="circle-button"
                        onClick={(event) => scrollToTarget('contact-area', event)}
                >
                    <Icon.Mail/>
                    <span className="button-text">Contact</span>
                </Button>
            </div>
        </div>
    )
}

export default NavigationBar;