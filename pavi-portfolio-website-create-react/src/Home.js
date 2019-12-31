import React from "react";

import Container from "react-bootstrap/Container";
import "./Fashion-Design/TimeTravel"

import "./GoogleFonts.css"
import "./core.css";
import "./Home.css";
import MyNavBar from "./MyNavBar";

const Home = () => (
  <div>
    <MyNavBar activeNavLink="home" />
    <Container className="home-container">
      <h1 className="display-4 d-flex justify-content-start em-wide home-title">Pavithra <br/> Rangarajan</h1>
    </Container>
  </div>
);

export default Home;