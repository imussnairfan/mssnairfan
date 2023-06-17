import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/M.I White.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mussna-irfan-b06633221/"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/imussnairfan"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/imussnairfan/"><img src={navIcon3} alt="" /></a>
              <a href="https://www.youtube.com/@CuriosityUpdated"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}