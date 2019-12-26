import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./GoogleFonts.css"
import "./core.css";
import "./Home.css";

const MyNavBar = ({ children }) => {
    const [show, toggleShow] = useState(true);
    return (
        <Container>
            <Navbar sticky="top" bg="light" expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Nav.Link className="active font-weight-bold px-md-4 real-active" href="#home">Home</Nav.Link>
                    <Nav.Link className="active px-md-4" href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" className="active" id="basic-nav-dropdown">
                        <NavDropdown.Item className="active px-md-4" href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.3">Something</NavDropdown.Item>
                        
                        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>       
    );
};

const Home = () => (
    <Container className="home-container">
        <MyNavBar />
        <h1 className="display-4 d-flex justify-content-start em-wide home-title">Pavithra Rangarajan</h1>
    </Container>
  );


export default Home;