import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import * as Icon from 'react-feather';

const FooterArea:React.FC = () => {

    const redirectToLink = (url:string) => {
        window.open(url, '_blank');
    }


    return(
        <Container fluid={true} className="footer-area">
            <Row className={"justify-content-center"}>
                <Col xs={12} className="text-center">
                    <h3 className="footer-name">Jeewantha Lahiru</h3>
                    <p className="footer-detail">Passionate software engineer seeking new opportunities to make a difference</p>
                    <div className="footer-social-icons">
                        <Button className="circle-button"
                                onClick={() => redirectToLink("https://facebook.com/jeewantha.lahiru.9/")}
                        >
                            <Icon.Twitter/>
                        </Button>
                        <Button className="circle-button"
                                onClick={() => redirectToLink("https://facebook.com/jeewantha.lahiru.9/")}
                        ><Icon.Facebook/></Button>
                        <Button className="circle-button"
                                onClick={() => redirectToLink("https://www.instagram.com/jeewantha__lahiru/?hl=en")}
                        ><Icon.Instagram/></Button>
                        <Button className="circle-button"
                                onClick={() => redirectToLink("www.linkedin.com/in/jeewantha-lahiru-b85b2917b")}
                        ><Icon.Linkedin/></Button>
                        <Button className="circle-button"
                                onClick={() => redirectToLink("https://api.whatsapp.com/send?phone=0760441246")}
                        ><Icon.MessageCircle/></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterArea;