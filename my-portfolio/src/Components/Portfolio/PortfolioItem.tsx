import React, {useState} from "react";
import {Col} from "react-bootstrap";
import ImageMe from "../../Assets/Images/MyPicFace.png";

interface portfolioItemProps{
    title: string
    src: string
}

const PortfolioItem:React.FC<portfolioItemProps> = ({title, src}) => {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return(
        <Col xs={4} className="portfolio-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="image-container">
                <img src={ImageMe} alt={title} />
            </div>
            <div className="overlay">
                <h3>{title}</h3>
                <p>Hello world</p>
            </div>
        </Col>
    )
}

export default PortfolioItem;