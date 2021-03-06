import React from 'react';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ReactDOM from 'react-dom';

import TimeTravel from './Fashion-Design/TimeTravel';
import BeauteD from './Fashion-Design/BeauteD';

function renderTimeTravel() {
  ReactDOM.render(<TimeTravel/>, document.getElementById("root"));
}

function renderBeauteD() {
  ReactDOM.render(<BeauteD/>, document.getElementById("root"));
}

function HomeLink(children) {
    const activeNavLink = children.activeNavLink;
    if (activeNavLink && activeNavLink === 'home') {
        return <Nav.Link className="active font-weight-bold px-md-4 real-active" href="/">Home</Nav.Link>
    } else {
        return <Nav.Link className="active font-weight-bold px-md-4" href="/">Home</Nav.Link>
    }
  }
  
  function FashionDesignLink(children) {
    const activeNavLink = children.activeNavLink;
    
    if (activeNavLink && activeNavLink === 'fashiondesign') {
        return <NavDropdown className="active font-weight-bold px-md-4 real-active" title="Fashion Design" id="basic-nav-dropdown">
        <NavDropdown.Item className="active px-md-4" href="#fashion-design-time-travel" onClick={TimeTravel}>Time Travel</NavDropdown.Item>
        <NavDropdown.Item className="active px-md-4" href="#action/3.2">Beaute Devastatrice</NavDropdown.Item>
        <NavDropdown.Item className="active px-md-4" href="#action/3.3">The Bull&apos;s Eye</NavDropdown.Item>
        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Predator Plastic</NavDropdown.Item>
        <NavDropdown.Item className="active px-md-4" href="#action/3.4">Great Depression</NavDropdown.Item>
        </NavDropdown>
    } else {
        return <NavDropdown className="active font-weight-bold px-md-4" title="Fashion Design" id="basic-nav-dropdown">
          <NavDropdown.Item className="active px-md-4" href="#fashion-design-time-travel" onClick={renderTimeTravel}>Time Travel</NavDropdown.Item>
          <NavDropdown.Item className="active px-md-4" href="#fashion-design-beauted" onClick={renderBeauteD}>Beaute Devastatrice</NavDropdown.Item>
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
      let sticky = children.sticky && children.sticky === true ? "top" : "";
      const fixed = children.fixed && children.fixed === true ? "top" : "";
      if(sticky == "" && fixed == "") { 
        sticky = "top";
      }

      return <div>
      <Navbar sticky={sticky} fixed={fixed} bg="light" expand="xl" >
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
      <Navbar fixed="top" bg="transparent">

      </Navbar>
      </div>
  };

  export default MyNavBar;