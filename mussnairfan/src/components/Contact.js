import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import './Contact.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
 
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <span className="head">Personal Email:</span>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <span>mussnairfanxp@gmail.com</span>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <span className="head">Business Email:</span>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <span>curiosityupdated@gmail.com</span>
                    </Col>
                    <Col size={12} className="px-1">
                    <span className="head">Contact Number:</span>
                    </Col>
                    <Col size={12} className="px-1">
                    <span>+92 332 4422 911 (Pakistan)</span>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}