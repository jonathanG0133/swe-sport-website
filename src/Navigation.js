import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navbg" expanded={expanded}>
      <Container>
        <Navbar.Brand className="navtext logo" as={Link} to="/">
          Sportfusion
        </Navbar.Brand>
        <Navbar.Toggle
          className="ham"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              className="navtext test"
              title="Fotboll"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="navtext drop"
                as={Link}
                to="/allsvenskan"
                onClick={closeMenu}
              >
                Allsvenskan
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navtext drop"
                as={Link}
                to="/superettan"
                onClick={closeMenu}
              >
                Superettan
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navtext drop"
                as={Link}
                to="/damallsvenskan"
                onClick={closeMenu}
              >
                Damallsvenskan
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="navtext"
              title="Innebandy"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="navtext drop"
                as={Link}
                to="/superligan"
                onClick={closeMenu}
              >
                Superligan
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ishockey" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="navtext drop"
                as={Link}
                to="/shl"
                onClick={closeMenu}
              >
                SHL
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navtext drop"
                as={Link}
                to="/sdhl"
                onClick={closeMenu}
              >
                SDHL
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
