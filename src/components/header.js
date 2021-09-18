import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/">Covid-19</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              India
            </Link>
            <Link className="nav-link" to="/world">
              World
            </Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
