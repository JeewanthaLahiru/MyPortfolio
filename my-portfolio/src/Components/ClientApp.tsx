import React from "react";
import NavigationBar from "./Navbar/NavigationBar";
import BodyArea from "./Body/BodyArea";
import MobileNavigationBar from "./Navbar/mobileNavigationBar";
import AboutArea from "./About/AboutArea";

const ClientApp:React.FC = () => {
    return(
        <div className="clientApp">
            <div className="NavigationHolder">
                <NavigationBar/>
                <MobileNavigationBar/>
            </div>

            <BodyArea/>
            <AboutArea/>

        </div>
    )
}

export default ClientApp;