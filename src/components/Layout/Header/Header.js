import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

var Scroll = require("react-scroll");

var Link = Scroll.Link;
// contactScrollTo
const Header = () => {
  return (
    <Navbar
      className="client-header"
      bg="primary"
      expand="md"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand
        as={Link}
        className="client-header-brand"
        to="topScrollTo"
        spy={true}
        smooth={true}
        duration={2000}
      >
        Ilyes Zouaoui
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <a
            href="cv/cv-ilyes-zouaoui-english-2p.pdf"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            CV Download
          </a>
          <Link
            activeClass="active"
            to="certificationsScrollTo"
            spy={true}
            smooth={true}
            duration={(distance) =>
              distance > 0 ? distance / 2.5 : (-1 * distance) / 2.5
            }
          >
            Certifications
          </Link>
          <Link
            activeClass="active"
            to="projectsScrollTo"
            spy={true}
            smooth={true}
            duration={(distance) =>
              distance > 0 ? distance / 2.5 : (-1 * distance) / 2.5
            }
          >
            Personal Projects
          </Link>
          <Link
            activeClass="active"
            to="contactScrollTo"
            spy={true}
            smooth={true}
            duration={2000}
          >
            Contact Information
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
