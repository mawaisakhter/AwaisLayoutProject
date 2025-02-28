import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./styles.css"; 
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="custom-navbar" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Name & Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto fs-5 d-flex justify-content-center">
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Button as={Link} to="/register" variant="outline-light" className="me-2">
              Sign Up
            </Button>
            <Button as={Link} to="/login" variant="outline-light">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
