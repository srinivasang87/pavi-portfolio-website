import React from "react";

import Container from "react-bootstrap/Container";
import "./Fashion-Design/TimeTravel"

import "./GoogleFonts.css"
import "./core.css";
import "./Home.css";
import MyNavBar from "./MyNavBar";

const Home = () => (
  <div className="home-super-container">
    <MyNavBar activeNavLink="home" />
    <Container className="home-container">
      <div className="mobile-image">
        <img src="https://static.wixstatic.com/media/d01fe9_b22518db86e94a6d87fc8c0317bf22bc~mv2_d_4833_3108_s_4_2.jpg/v1/fill/w_560,h_366,al_c,q_80,usm_0.66_1.00_0.01/YC3A2680%20copy_JPG.webp" className="mx-auto d-block img-fluid"/>
      </div>
      <h1 className="display-4 d-flex justify-content-start em-wide home-title">Pavithra <br/> Rangarajan</h1>
    </Container>
  </div>
);

export default Home;