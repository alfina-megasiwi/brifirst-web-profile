import { React, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import Logo from "./Logo.svg";
import Logobri from "./bri.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomNavbar.css";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ "--bs-bg-opacity": "0" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} width="200" height="30" alt="Logo BUMN" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">
              <li class="nav-item dropdown ktm-mega-menu">
                <div className="NoBold">
                  <div className="hover-underline-animation menu">Home</div>
                </div>
              </li>
            </Nav.Link>
            <Nav.Link href="#menu-kartu">
              <div className="hover-underline-animation NoBold">
                <div className="menu">About</div>
              </div>
            </Nav.Link>
            <Nav.Link href="#menu-newsku">
              <div className="NoBold">
                <div className="hover-underline-animation menu">News</div>
              </div>
            </Nav.Link>
            <Nav.Link href="#navigasi-footer">
              <div className="hover-underline-animation NoBold">
                <div className="menu">Contact</div>
              </div>
            </Nav.Link>
            <Nav.Link href="#contact">
              <div className="logo-container">
                <div className="menu">
                  <img src={Logobri} width="100" height="30" alt="Logo" />
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
