import React, {useEffect, useRef, useState} from "react";
import {Button} from "react-bootstrap";
import * as Icon from 'react-feather';

const NavigationBar:React.FC = () => {

    return(
        <div className="Navbar">
            <div className="circle-buttons">
                <Button variant="light" className="circle-button"> <Icon.Home/>
                    <span className="button-text">Home</span>
                </Button>
                <Button variant="light" className="circle-button"><Icon.User/>
                    <span className="button-text">About</span>
                </Button>
                <Button variant="light" className="circle-button"><Icon.File/>
                    <span className="button-text">Resume</span>
                </Button>
                <Button variant="light" className="circle-button"><Icon.Briefcase/>
                    <span className="button-text">Portfolio</span>
                </Button>
                <Button variant="light" className="circle-button"><Icon.Sliders/>
                    <span className="button-text">Skills</span>
                </Button>
                <Button variant="light" className="circle-button"><Icon.Mail/>
                    <span className="button-text">Contact</span>
                </Button>
            </div>
        </div>
    )
}

export default NavigationBar;