import React, {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import PortfolioItem from "./PortfolioItem";
import Ecommerce from "./../../Assets/Images/ECommerce.png";
import TheScrutinizer from "./../../Assets/Images/TheScrutinizer.png";
import GiniAwi from "../../Assets/Images/Giniawi.png";
import EndlessRunner from "../../Assets/Images/EndlessRunner.png";
import RichDad from "../../Assets/Images/RichDad.png";
import PortfolioImg from "../../Assets/Images/PortfolioWebSite.png";

const PortfolioArea:React.FC = () => {

    enum PortfolioFilter{
        All = 'all',
        Web = 'web',
        Gaming = 'gaming',
    }

    const [filter, setFilter] = useState<PortfolioFilter>(PortfolioFilter.All);

    const portfolioItems = [
        {
            id: 1,
            title: 'Shopping Cart',
            category: PortfolioFilter.Web,
            image:Ecommerce,
            description: "This is a web application created using React, expressJS, GraphQL, SCSS"
        },
        {
            id: 2,
            title: 'The Scrutinizer',
            category: PortfolioFilter.Web,
            image: TheScrutinizer,
            description: "This is an intelligence online exam Monitoring Application"
        },
        {
            id: 3,
            title: 'Giniawi Saha Gini Keli FanGame',
            category: PortfolioFilter.Gaming,
            image: GiniAwi,
            description: "this is a fan game of Giniawi saha Ginikeli tv series using Unreal Engine"
        },
        {
            id: 4,
            title: 'EndlessRunner Game',
            category: PortfolioFilter.Gaming,
            image: EndlessRunner,
            description: "this is an endless runner game created using Unreal Engine"
        },
        {
            id: 5,
            title: 'Rich dad simulator game',
            category: PortfolioFilter.Gaming,
            image: RichDad,
            description: "this is an simulator game created using Unreal Engine"
        },
        {
            id: 6,
            title: 'Portfolio website',
            category: PortfolioFilter.Web,
            image: PortfolioImg,
            description: "this is my portfolio website created using React"
        }
    ];
    const [filteredItems, setFilteredItems] = useState(portfolioItems);
    const handleFilterChange = (newFilter: PortfolioFilter) => {
        setFilter(newFilter);
        setFilteredItems(prevItems => {
            if (newFilter === PortfolioFilter.All) {
                return portfolioItems;
            } else {
                return portfolioItems.filter(item => item.category === newFilter);
            }
        });
    };


    return(
        <Container className="portfolio-area scroll-target">
            <h1 className={"text-center pt-5"}>
                Portfolio
                <div className="about-underline">
                    <Row className="m-0 pt-3 pb-3 justify-content-center align-items-center">
                        <Col xs={1} className="ul-light"></Col>
                        <Col xs={1} className="ul-dark"></Col>
                        <Col xs={1} className="ul-light"></Col>
                    </Row>
                </div>


            </h1>
            <div className="portfolio">
                <nav className="portfolio-nav">
                    <Button className={filter === PortfolioFilter.All ? 'active' : ''} onClick={() => handleFilterChange(PortfolioFilter.All)}>
                        All
                    </Button>
                    <Button className={filter === PortfolioFilter.Web ? 'active' : ''} onClick={() => handleFilterChange(PortfolioFilter.Web)}>
                        Web
                    </Button>
                    <Button className={filter === PortfolioFilter.Gaming ? 'active' : ''} onClick={() => handleFilterChange(PortfolioFilter.Gaming)}>
                        Gaming
                    </Button>
                </nav>
                <Row className="portfolio-items">
                    {filteredItems.map(item => (
                        <PortfolioItem
                            key={item.id}
                            title={item.title}
                            src={item.image}
                            description={item.description}
                        />
                    ))}
                </Row>
            </div>
        </Container>
    )
}

export default PortfolioArea;