import React, {useState} from "react";
import {Col} from "react-bootstrap";
import ImageMe from "../../Assets/Images/MyPicFace.png";

interface portfolioItemProps{
    title: string
    src: string
    description: string
}

const PortfolioItem:React.FC<portfolioItemProps> = ({title, src,description}) => {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return(
        <Col xs={4} className="portfolio-item mb-5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="image-container">
                <img src={src} alt={title} />
            </div>
            <div className="overlay">
                <h3 className="portfolio-title">{title}</h3>
                <p className="text-center ps-5 pe-5 portfolio-desc">{description}</p>
            </div>
        </Col>
    )
}

export default PortfolioItem;