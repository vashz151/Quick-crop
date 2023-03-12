import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../images/logo.svg";
import "../css/navbar.css";
import translate from "../images/translate.gif";

function NavBar() {
  let duplicate = 0;
  const googleTranslateElementInit = () => {
    if (duplicate === 0) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          //the default option in select should be english
          targetLanguage: "hi",
          includedLanguages: "en,hi,gu,ta,te,ml,kn,pa,or,bn,as,ur",
        },
        "google_translate_element"
      );
    }
    duplicate++;
  };
  React.useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    // eslint-disable-next-line
  }, []);

  const [expanded, setExpanded] = useState(false);
  return (
    <div id="navdiv">
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        expand="md"
        expanded={expanded}
        ml="auto"
      >
        <Container fluid>
          <img id="logo" src={logo} alt="logo" />
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(expanded ? false : true)}
            onBlur={() => setExpanded(false)}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-3 my-lg-0" navbarScroll>
              <Nav.Link
                as={Link}
                to="/"
                bsPrefix="nav-link active"
                onClick={() => setExpanded(false)}
                onBlur={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                bsPrefix="nav-link active"
                onClick={() => setExpanded(false)}
                onBlur={() => setExpanded(false)}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/news"
                bsPrefix="nav-link active"
                onClick={() => setExpanded(false)}
                onBlur={() => setExpanded(false)}
              >
                News
              </Nav.Link>
            </Nav>
            <div className="flex-container">
              <div id="google_translate_element" className="flex-items"></div>
              <img
                src={translate}
                alt="translate"
                id="translate"
                className="flex-items"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
