import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const mobileNavigationBar:React.FC = () => {
    return(
        <div className="mobile-nav-bar">
            {/* Top Navbar for Mobile Screens */}
            <Navbar expand="md" variant="dark" bg="dark" className="top-navbar">
                <Navbar.Toggle aria-controls="side-nav-menu" />
                <Navbar.Collapse id="side-nav-menu">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Button 1</Nav.Link>
                        <Nav.Link href="#features">Button 2</Nav.Link>
                        <Nav.Link href="#pricing">Button 3</Nav.Link>
                        <Nav.Link href="#about">Button 4</Nav.Link>
                        <Nav.Link href="#contact">Button 5</Nav.Link>
                        <Nav.Link href="#more">Button 6</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default mobileNavigationBar;