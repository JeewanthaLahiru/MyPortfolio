import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import * as Icon from 'react-feather';

const ResumeArea:React.FC = () => {
    return(
        <Container className="resume-area">
            <h1 className={"text-center pt-5"}>
                Resume
                <div className="about-underline">
                    <Row className="m-0 pt-3 pb-3 justify-content-center align-items-center">
                        <Col xs={1} className="ul-light"></Col>
                        <Col xs={1} className="ul-dark"></Col>
                        <Col xs={1} className="ul-light"></Col>
                    </Row>
                </div>
            </h1>
            <Row>
                <Col md={6}>
                    <h3 className="ps-5">Summary</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content text-start">
                                <h3 >Jeewantha Lahiru</h3>
                                <p>
                                    Highly motivated software engineering undergraduate seeking full-stack developer
                                    roles. Self-motivated and dedicated to delivering high-quality results in every
                                    development endeavor.
                                </p>
                                <ul>
                                    <li>+94760441246</li>
                                    <li>jeewanthalahiru1111@gmail.com</li>
                                    <li>Galgoda, Mahawalathenna, Balangoda, Sri Lanka</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 className="ps-5">Education</h3>
                    <div className="timeline ">
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content text-start">
                                <h3 >Bsc (Hons) Software Engineering</h3>
                                <label className="resume-label pt-2 pb-3">2019-2023</label>
                                <p>
                                    I am a 4th-year undergraduate with a 3.39 GPA, recently finished final exams,
                                    and actively pursuing opportunities in the software engineer role.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content text-start">
                                <h3 className="text-start">Mathematics for A/L</h3>
                                <div className="resume-label pt-2 pb-3">2008-2016</div>
                                <p>
                                    I completed my A/L's in the math stream at Ananda Maithreya Central College
                                    Balangoda in 2016.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <h3 className="ps-5">Experience</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content text-start">
                                <h3>Associate Software Engineer - Game Development</h3>
                                <div className="resume-label pt-2 pb-3">Jan 2022- Present</div>
                                <p>Arimac Lanka (Pvt) Ltd<br/>
                                    Colombo, Sri Lanka<br/><br/>
                                    Experienced associate software engineer in game development with expertise in
                                    maintaining the company's marketplace account and creating projects.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content text-start">
                                <h3>Associate Software Engineer - Game Development</h3>
                                <div className="resume-label pt-2 pb-3">Jan 2022- Present</div>
                                <p>Arimac Lanka (Pvt) Ltd<br/>
                                    Colombo, Sri Lanka<br/><br/>
                                    I have successfully completed my internship in game development
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content text-start">
                                <h3>React Based Industrial Training</h3>
                                <div className="resume-label pt-2 pb-3">Jan 2021- June 2021</div>
                                <p>SoftVessel (Pvt) Ltd<br/>
                                    Colombo, Sri Lanka<br/><br/>
                                    I have successfully completed React based industrial training programme using
                                    ReactJS, ExpressJS, GraphQL, MongoDB and AWS.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ResumeArea;