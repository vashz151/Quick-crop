import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../images/logo.svg";
import "../css/navbar.css";
function NavBar() {
  let [expanded, setExpanded] = useState(false);
  return (
    <div style={{ marginBottom: "18px" }}>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        expand="lg"
        expanded={expanded}
      >
        <Container fluid>
          <img
            id="logo"
            src={logo}
            alt="logo"
          />
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(expanded ? false : true)}
            onBlur={() => setExpanded(false)}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpanded(false)}
                onBlur={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
                onBlur={() => setExpanded(false)}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/news"
                onClick={() => setExpanded(false)}
                onBlur={() => setExpanded(false)}
              >
                News
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
