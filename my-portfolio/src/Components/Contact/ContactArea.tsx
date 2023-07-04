import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const ContactArea:React.FC = () => {
    return(
        <Container className={"contact-area"}>
            <h1 className={"text-center pt-5"}>
                CONTACT
                <div className="about-underline">
                    <Row className="m-0 pt-3 pb-3 justify-content-center align-items-center">
                        <Col xs={1} className="ul-light"></Col>
                        <Col xs={1} className="ul-dark"></Col>
                        <Col xs={1} className="ul-light"></Col>
                    </Row>
                </div>


            </h1>
        </Container>
    )
}

export default ContactArea;
