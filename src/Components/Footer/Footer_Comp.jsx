import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer_Comp = () => {
  return (
    <footer className="footer bg-dark text-white pt-4 mt-5 ">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p>
              Soil Farming Agent is dedicated to enhancing agricultural
              practices by providing essential soil and crop information. Our
              platform helps farmers understand soil types and the best crops
              suited for each, offering detailed insights and recommendations to
              boost agricultural productivity.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-envelope mr-2"></i>Email:
                support@soilfarmingagent.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>Phone: +987 654 3210
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>Address: 789 Farm
                Lane, Agriculture City, AC 12345
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled justify-content-center">
              <li className="mr-3">
                <a
                  href="https://www.facebook.com"
                  className="text-white"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.twitter.com"
                  className="text-white"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.instagram.com"
                  className="text-white"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; 2024 Soil Farming Agent. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer_Comp;

// _____  _  __
// / ____|| |/ /
// | (___  | ' /
//  \___ \ |  <
//  ____) || . \
// |_____/ |_|\_\

// 👨‍💻 web site Created by Amir Sohail Sheikh
