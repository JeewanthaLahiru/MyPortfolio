import React from "react";
import {Button} from "react-bootstrap";
import * as Icon from 'react-feather';

const NavigationBar:React.FC = () => {
    return(
        <div className="Navbar">
            <div className="circle-buttons">
                <Button variant="light" className="circle-button"> <Icon.Home/> </Button>
                <Button variant="light" className="circle-button"><Icon.User/></Button>
                <Button variant="light" className="circle-button"><Icon.File/></Button>
                <Button variant="light" className="circle-button"><Icon.Briefcase/></Button>
                <Button variant="light" className="circle-button"><Icon.Sliders/></Button>
                <Button variant="light" className="circle-button"><Icon.Mail/></Button>
            </div>
        </div>
    )
}

export default NavigationBar;