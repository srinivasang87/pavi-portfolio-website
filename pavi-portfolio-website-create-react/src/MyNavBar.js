import React, { useState } from 'react';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HomeLink(children) {
    const activeNavLink = children.activeNavLink;
    if (activeNavLink && activeNavLink === 'home') {
        return <Nav.Link className="active font-weight-bold px-md-4 real-active" href="#home">Home</Nav.Link>
    } else {
        return <Nav.Link className="active font-weight-bold px-md-4" href="#home">Home</Nav.Link>
    }
  }
  
  function FashionDesignLink(children) {
    const activeNavLink = children.activeNavLink;
    
    if (activeNavLink && activeNavLink === 'fashiondesign') {
        return <NavDropdown className="active font-weight-bold px-md-4 real-active" title="Fashion Design" id="basic-nav-dropdown">
        <NavDropdown.Item className="active px-md-4" href="/fashion-design/time-travel">Time Travel</NavDropdown.Item>
        <NavDropdown.Item className="active px-md-4" href="#action/3.2">Beaute Devastatrice</NavDropdown.Item>
        <NavDropdown.Item className="active px-md-4" href="#action/3.3">The Bull%apos;s Eye</NavDropdown.Item>
        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Predator Plastic</NavDropdown.Item>
        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Great Depression</NavDropdown.Item>
        </NavDropdown>
    } else {
        return <NavDropdown className="active font-weight-bold px-md-4" title="Fashion Design" id="basic-nav-dropdown">
          <NavDropdown.Item className="active px-md-4" href="/fashion-design/time-travel">Time Travel</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.2">Beaute Devastatrice</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.3">The Bull%apos;s Eye</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.4">Predator Plastic</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.4">Great Depression</NavDropdown.Item>
          </NavDropdown>
    }
  }
  
  function TextileLink(children) {
    const activeNavLink = children.activeNavLink;
    if (activeNavLink && activeNavLink === 'textile') {
        return <NavDropdown className="active font-weight-bold px-md-4 real-active" title="Textile" id="basic-nav-dropdown">
          <NavDropdown.Item className="active px-md-4" href="#action/3.1">Embroidery</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.2">Abstract</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.3">Brush Strokes</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.4">Flowers</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.4">Reflections</NavDropdown.Item>
          </NavDropdown>
          
    } else {
        return <NavDropdown className="active font-weight-bold px-md-4" title="Textile" id="basic-nav-dropdown">
          <NavDropdown.Item className="active px-md-4" href="#action/3.1">Embroidery</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.2">Abstract</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.3">Brush Strokes</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.4">Flowers</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.4">Reflections</NavDropdown.Item>
          </NavDropdown>
    }
  }
  
  function TechPacksLink(children) {
    const activeNavLink = children.activeNavLink;
    if (activeNavLink && activeNavLink === 'textile') {
        return <Nav.Link className="active font-weight-bold px-md-4 real-active" href="#link">Tech Packs</Nav.Link>
    } else {
        return <Nav.Link className="active font-weight-bold px-md-4" href="#link">Tech Packs</Nav.Link>
    }
  }
  
  function InternshipsLink(children) {
    const activeNavLink = children.activeNavLink;
    if (activeNavLink && activeNavLink === 'internships') {
        return <NavDropdown className="active font-weight-bold px-md-4 real-active" title="Internships" id="basic-nav-dropdown">
          <NavDropdown.Item className="active px-md-4" href="#action/3.1">Bibhu Mohapatra</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.2">The Levy Group</NavDropdown.Item>
          </NavDropdown>
      
    } else {
        return <NavDropdown className="active font-weight-bold px-md-4" title="Internships" id="basic-nav-dropdown">
          <NavDropdown.Item className="active px-md-4" href="#action/3.1">Bibhu Mohapatra</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#action/3.2">The Levy Group</NavDropdown.Item>
          </NavDropdown>
          
    }
  }
  
  function ContactLink(children) {
    const activeNavLink = children.activeNavLink;
    if (activeNavLink && activeNavLink === 'textile') {
        return <Nav.Link className="active font-weight-bold px-md-4 real-active" href="#link">Contact</Nav.Link>
    } else {
        return <Nav.Link className="active font-weight-bold px-md-4" href="#link">Contact</Nav.Link>
    }
  }
  
  const MyNavBar = (children) => {
      const activeNavLink = children.activeNavLink;
      
      return <Container>
      <Navbar fixed="top" bg="light" expand="xl" >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <HomeLink activeNavLink={activeNavLink} />
        <FashionDesignLink activeNavLink={activeNavLink} />
        <TextileLink activeNavLink={activeNavLink} />
        <TechPacksLink activeNavLink={activeNavLink} />
        <InternshipsLink activeNavLink={activeNavLink} />
        <ContactLink activeNavLink={activeNavLink} />
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      </Container>
  };

  export default MyNavBar;