import React from "react";
import NavigationBar from "./Navbar/NavigationBar";
import BodyArea from "./Body/BodyArea";
import MobileNavigationBar from "./Navbar/mobileNavigationBar";
import AboutArea from "./About/AboutArea";
import ResumeArea from "./Resume/ResumeArea";
import PortfolioArea from "./Portfolio/PortfolioArea";
import ContactArea from "./Contact/ContactArea";

const ClientApp:React.FC = () => {
    return(
        <div className="clientApp">
            <div className="NavigationHolder">
                <NavigationBar/>
                <MobileNavigationBar/>
            </div>

            <BodyArea/>
            <AboutArea/>
            <ResumeArea/>
            <PortfolioArea/>
            <ContactArea/>

        </div>
    )
}

export default ClientApp;