import React from 'react';
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyNavBar from '../MyNavBar';

import img1 from "../images/Fashion-Design/TimeTravel/0_d01fe9_93598e5b6f4042df961f3b1a55e5a62a~mv2_d_4200_3300_s_4_2.webp";
import img2 from "../images/Fashion-Design/TimeTravel/1_d01fe9_8b9d065484cb48c5a2186a76c1e5580a~mv2_d_4200_3300_s_4_2.webp";
import img3 from "../images/Fashion-Design/TimeTravel/2_d01fe9_eaf5471c63884b60af1d7988e5cf2fcd~mv2_d_4200_3300_s_4_2.webp";
import img4 from "../images/Fashion-Design/TimeTravel/3_d01fe9_21ffef0563104f4d8566573c88ddf70b~mv2_d_4200_3300_s_4_2.webp";
import img5 from "../images/Fashion-Design/TimeTravel/4_d01fe9_a1bf9c4c8640469b9bb8c7fdeaaccc61~mv2_d_4206_3305_s_4_2.webp";
import img6 from "../images/Fashion-Design/TimeTravel/5_d01fe9_7ac1a014b5544551981e7f84f8650340~mv2_d_4200_3300_s_4_2.webp";

/*
      <Carousel>
          <Carousel.Item>
            <img src={img1} className="d-block w-100" alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} className="d-block w-100" alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} className="d-block w-100" alt="..." /> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={img4} className="d-block w-100" alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img5} className="d-block w-100" alt="..." /> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={img6} className="d-block w-100" alt="..." /> 
          </Carousel.Item>
      </Carousel>
      */

const TimeTravel = () => (
    <Container className="home-container">
      <MyNavBar activeNavLink="fashiondesign" />

      <Carousel slide="false">
          <Carousel.Item>
            <Row>
                <Col>
                <img src={img1} className="d-block w-100" alt="..." />
                </Col>
                <Col>
                <img src={img2} className="d-block w-100" alt="..." />
                </Col>
                <Col>
                <img src={img3} className="d-block w-100" alt="..." /> 
                </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
                <Col>
                <img src={img4} className="d-block w-100" alt="..." />
                </Col>
                <Col>
                <img src={img5} className="d-block w-100" alt="..." /> 
                </Col>
                <Col>
                <img src={img6} className="d-block w-100" alt="..." /> 
                </Col>
            </Row>
          </Carousel.Item>
      </Carousel>
  </Container>
);

export default TimeTravel;