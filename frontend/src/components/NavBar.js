import { Nav, Navbar, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function NavBar() {
  let [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Quick Crop
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(true)}
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onClick={() => setExpanded(true)}
              onBlur={() => setExpanded(false)}
            />
            <Button
              variant="outline-success"
              onClick={() => setExpanded(false)}
              onBlur={() => setExpanded(false)}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
