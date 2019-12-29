import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from "react-bootstrap/Container";
import "./Fashion-Design/TimeTravel"

import "./GoogleFonts.css"
import "./core.css";
import "./Home.css";
import MyNavBar from "./MyNavBar";




const Home = () => (
    <Container className="home-container">
        <MyNavBar activeNavLink="home" />
        <h1 className="display-4 d-flex justify-content-start em-wide home-title">Pavithra <br/> Rangarajan</h1>
    </Container>
  );


export default Home;