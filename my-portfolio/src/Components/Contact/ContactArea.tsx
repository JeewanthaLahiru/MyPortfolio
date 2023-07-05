import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import * as Icon from 'react-feather';

const ContactArea:React.FC = () => {
    return(
        <Container className={"contact-area"} fluid={false}>
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

            <Row className="contact-form-area">
                <Col xs={5} className="left-area circle-buttons">
                    <Row >
                        <Col xs={2}>
                            <Button variant="light" className="circle-button">
                                <Icon.MapPin/>
                            </Button>
                        </Col>
                        <Col xs={10}>
                            <h3>Location:</h3>
                            <p>galgoda, Mahawalathenna, Balangoda</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <Button variant="light" className="circle-button">
                                <Icon.Mail/>
                            </Button>
                        </Col>
                        <Col xs={10}>
                            <h3>Email:</h3>
                            <p>jeewanthalahiru1111@gmail.com</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <Button variant="light" className="circle-button">
                                <Icon.Smartphone/>
                            </Button>
                        </Col>
                        <Col xs={10}>
                            <h3>Call:</h3>
                            <p>+94760441246</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={7}>
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="name" placeholder="Your Name" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Your Email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="pt-2">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="subject" placeholder="Subject" />
                            </Form.Group>
                        </Row>
                        <Row className="pt-2">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Message" rows={4} />
                            </Form.Group>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} className="text-center">
                                <Button variant="primary">Send Message</Button>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>


        </Container>
    )
}

export default ContactArea;
