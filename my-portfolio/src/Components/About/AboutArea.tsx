import React from "react";
import {Col, Container, Image, ProgressBar, Row} from "react-bootstrap";
import * as Icon from 'react-feather';
import myPhoto from "../../Assets/Images/MyPicFace.png";

const AboutArea:React.FC = () => {
    return(
        <Row className="m-0  pt-0 pb-5 about-area">
            <Col xs={0} lg={2} className="spacer"></Col>
            <Col xs={12} lg={8} className="about-content">
                <Container className="about-area-content">
                    <h1 className={"text-center pt-5"}>
                        About
                        <div className="about-underline">
                            <Row className="m-0 pt-3 pb-3 justify-content-center align-items-center">
                                <Col xs={1} className="ul-light"></Col>
                                <Col xs={1} className="ul-dark"></Col>
                                <Col xs={1} className="ul-light"></Col>
                            </Row>
                        </div>
                    </h1>
                    <p className="pt-3">
                        Welcome to my portfolio! I am a motivated software engineering undergraduate with a passion for
                        problem-solving and a strong academic background.
                        Equipped with programming skills and practical experience, I am eager to contribute to impactful
                        projects in the tech industry. I thrive in collaborative environments, possess a solid
                        understanding of software development principles, and constantly seek opportunities for growth.
                    </p>
                    <Row className="m-0 pt-4">
                        <Col xs={12} xl={4} className="about-image-container">
                            <Image src={myPhoto} className="myImage"/>
                        </Col>
                        <Col xs={12} xl={8}>
                            <h2 className={"text-center"}>Full Stack Software Engineer</h2>
                            <p className="ps-4">
                                I am eager to contribute to impactful
                                projects in the tech industry. I thrive in collaborative environments, possess a solid
                                understanding of software development principles, and constantly seek opportunities for growth.
                            </p>
                            <Row className="m-0 pb-5">
                                <Col xs={6}>
                                    <Row className="m-0 pt-3">
                                        <Col><Icon.ArrowRightCircle/><strong>Birthday: </strong>2 Jan 1998</Col>
                                    </Row>
                                    <Row className="m-0 pt-3">
                                        <Col><Icon.ArrowRightCircle/><strong>Phone: </strong> +94760441246</Col>
                                    </Row>
                                    <Row className="m-0 pt-3">
                                        <Col><Icon.ArrowRightCircle/><strong>City: </strong> Balangoda</Col>
                                    </Row>
                                </Col>
                                <Col xs={6}>
                                    <Row className="m-0 pt-3">
                                        <Col><Icon.ArrowRightCircle/><strong>Age: </strong>25</Col>
                                    </Row>
                                    <Row className="m-0 pt-3">
                                        <Col><Icon.ArrowRightCircle/><strong>Degree: </strong>Bsc(Hons) Software Engineering</Col>
                                    </Row>
                                    <Row className="m-0 pt-3">
                                        <Col><Icon.ArrowRightCircle/><strong>Email: </strong>jeewanthalahiru1111@gmail.com</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
                <Container className="skills-area-content">
                    <h1 className={"text-center pt-5 mt-5"}>
                        Skills
                        <div className="about-underline">
                            <Row className="m-0 pt-3 pb-3 justify-content-center align-items-center">
                                <Col xs={1} className="ul-light"></Col>
                                <Col xs={1} className="ul-dark"></Col>
                                <Col xs={1} className="ul-light"></Col>
                            </Row>
                        </div>
                    </h1>
                    <p className="pt-3">
                        I possess a diverse set of technical skills including proficiency in various programming languages.
                        Additionally, I have experience with modern frameworks and tools, allowing me to develop
                        innovative and efficient software solutions.
                    </p>
                    <Row className="m-0">
                        <Col xs={6} className="pt-3">
                            <h6>Java</h6>
                            <ProgressBar now={60} label="60%"/>
                        </Col>
                        <Col xs={6} className="pt-3">
                            <h6>React</h6>
                            <ProgressBar now={60} label="60%"/>
                        </Col>
                        {/*<Col xs={6} className="pt-3">
                            <h6>Springboot</h6>
                            <ProgressBar now={60} label="60%"/>
                        </Col>*/}
                        <Col xs={6} className="pt-3">
                            <h6>expressjs</h6>
                            <ProgressBar now={40} label="40%"/>
                        </Col>
                        <Col xs={6} className="pt-3">
                            <h6>Mysql</h6>
                            <ProgressBar now={60} label="60%"/>
                        </Col>
                        <Col xs={6} className="pt-3">
                            <h6>mongoDB</h6>
                            <ProgressBar now={60} label="60%"/>
                        </Col>
                        <Col xs={6} className="pt-3">
                            <h6>Unreal Engine</h6>
                            <ProgressBar now={80} label="80%"/>
                        </Col>
                        <Col xs={6} className="pt-3">
                            <h6>Unity</h6>
                            <ProgressBar now={40} label="40%"/>
                        </Col>
                        <Col xs={6} className="pt-3">
                            <h6>AWS</h6>
                            <ProgressBar now={20} label="20%"/>
                        </Col>
                    </Row>
                </Container>

            </Col>
            <Col xs={0} md={2} className="spacer"></Col>

        </Row>
    )
}

export default AboutArea;

