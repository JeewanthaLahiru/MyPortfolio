import React from "react";
import photo from '../../../Assets/Images/myCoverPhoto.png';
import Typewriter from 'typewriter-effect';

const Homepage:React.FC = () => {
    return(
        <div className="home-page">
            <div className="photo-container">
                <img src={photo} alt="My Photo" className="photo" />
            </div>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('First line of text')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Second line of text')
                        .start();
                }}
            />
        </div>
    )
}

export default Homepage;