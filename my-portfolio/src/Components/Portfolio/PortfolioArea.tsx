import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import PortfolioItem from "./PortfolioItem";

const PortfolioArea:React.FC = () => {

    enum PortfolioFilter{
        All = 'all',
        Web = 'web',
        Gaming = 'gaming',
    }

    const [filter, setFilter] = useState<PortfolioFilter>(PortfolioFilter.All);

    const portfolioItems = [
        { id: 1, title: 'Web Project 1', category: PortfolioFilter.Web },
        { id: 2, title: 'Web Project 2', category: PortfolioFilter.Web },
        { id: 3, title: 'Game Project 1', category: PortfolioFilter.Gaming },
        { id: 4, title: 'Game Project 2', category: PortfolioFilter.Gaming },
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
        <Container className="portfolio-area">
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
                    <button className={filter === PortfolioFilter.All ? 'active' : ''} onClick={() => handleFilterChange(PortfolioFilter.All)}>
                        All
                    </button>
                    <button className={filter === PortfolioFilter.Web ? 'active' : ''} onClick={() => handleFilterChange(PortfolioFilter.Web)}>
                        Web
                    </button>
                    <button className={filter === PortfolioFilter.Gaming ? 'active' : ''} onClick={() => handleFilterChange(PortfolioFilter.Gaming)}>
                        Gaming
                    </button>
                </nav>
                <Row className="portfolio-items">
                    {filteredItems.map(item => (
                        <PortfolioItem key={item.id} title={item.title} src={"sdafa"}  />
                    ))}
                </Row>
            </div>
        </Container>
    )
}

export default PortfolioArea;