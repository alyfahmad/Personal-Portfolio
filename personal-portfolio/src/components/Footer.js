import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import A_logo from '../assets/img/A_logo.png';
import navIcon4 from '../assets/img/download.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container class="row no-gutters">
                <Row>
                    <Col sm={6} className="align-item-start">
                    <img style={{ marginLeft: 15, width:50, height:50}} src={A_logo} alt="Logo"></img>
                    </Col>
                    <Col sm={6} className="text-end text sm-end">
                        <div style={{ marginTop: 5 }} className="social-icon">
                            <a href="https://www.linkedin.com/in/alifahmad/" target="_blank"><img src={navIcon1} alt="LinkedIn"/></a>
                            <a href="https://www.facebook.com/AlyfAhmad/" target="_blank"><img src={navIcon2} alt="Facebook"/></a>
                            <a href="https://www.instagram.com/alyf_ahmad/" target="_blank"><img src={navIcon3} alt="Instagram"/></a>
                            <a href="https://drive.google.com/uc?export=download&id=1RbhBXcDIzRPRYtDWJFPqY832h7_b5iby" target="_blank"><img src={navIcon4} alt="Download CV"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}