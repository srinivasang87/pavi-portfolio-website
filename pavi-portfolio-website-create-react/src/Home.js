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
            <Navbar fixed="top" bg="light" expand="xl" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Nav.Link className="active font-weight-bold px-md-4 real-active" href="#home">Home</Nav.Link>
                    <NavDropdown className="active font-weight-bold px-md-4" title="Fashion Design" id="basic-nav-dropdown">
                        <NavDropdown.Item className="active px-md-4" href="#action/3.1">Time Travel</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.2">Beaute Devastatrice</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.3">The Bull's Eye</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Predator Plastic</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Great Depression</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="active font-weight-bold px-md-4" title="Textile" id="basic-nav-dropdown">
                        <NavDropdown.Item className="active px-md-4" href="#action/3.1">Embroidery</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.2">Abstract</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.3">Brush Strokes</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Flowers</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Reflections</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="active font-weight-bold px-md-4" href="#link">Tech Packs</Nav.Link>
                    <NavDropdown className="active font-weight-bold px-md-4" title="Internships" id="basic-nav-dropdown">
                        <NavDropdown.Item className="active px-md-4" href="#action/3.1">Bibhu Mohapatra</NavDropdown.Item>
                        <NavDropdown.Item className="active px-md-4" href="#action/3.2">The Levy Group</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="active font-weight-bold px-md-4" href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>       
    );
};

const Home = () => (
    <Container className="home-container">
        <MyNavBar />
        <h1 className="display-4 d-flex justify-content-start em-wide home-title">Pavithra <br/> Rangarajan</h1>
    </Container>
  );


export default Home;