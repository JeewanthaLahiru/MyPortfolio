import React, {useEffect, useState} from "react";
import photo from '../../../Assets/Images/myCoverPhoto.png';
import Typewriter from 'typewriter-effect';
import {Button, Col, Row} from "react-bootstrap";
import * as Icon from "react-feather";

const Homepage:React.FC = () => {

    const redirectToLink = (url:string) => {
        window.open(url, '_blank');
    }


    return(
        <div className="home-page">
            <div className="photo-container">
                <img src={photo} alt="My Photo" className="photo" />
            </div>

            <div className="text-container">
                <h1 className="home-header-name">Jeewantha Lahiru</h1>
                <div className="typewriter-text">

                    <Typewriter
                        options={{
                            strings: ['I\'m a Full Stack Developer'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'line-1',
                            cursorClassName: 'custom-cursor',
                            cursor: '|',
                        }}
                    />
                </div>
                <br/>
                <div className="button-container">
                    <Button className="icon-button"
                            onClick={() => redirectToLink("https://twitter.com/JeewanthaLahir1")}
                    >
                        <Icon.Twitter/>
                    </Button>
                    <Button className="icon-button"
                            onClick={() => redirectToLink("https://facebook.com/jeewantha.lahiru.9/")}
                    >
                        <Icon.Facebook/>
                    </Button>
                    <Button className="icon-button"
                            onClick={() => redirectToLink("https://www.instagram.com/jeewantha__lahiru/?hl=en")}
                    >
                        <Icon.Instagram/>
                    </Button>
                    <Button className="icon-button"
                            onClick={() => redirectToLink("www.linkedin.com/in/jeewantha-lahiru-b85b2917b")}
                    >
                        <Icon.Linkedin/>
                    </Button>
                </div>
            </div>

            <div className="scroll-wheel-bouncing">
                <div className="scroll-icon">
                    <div className="mouse">
                            <span className="scroll-wheel">
                                <Icon.ChevronsDown/>
                            </span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Homepage;