import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {SiCodeproject} from "react-icons/si";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { GiAchievement } from "react-icons/gi";
 import {FaChalkboardTeacher} from "react-icons/fa";
 import { IconContext } from "react-icons";
 



function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <IconContext.Provider
      value={{ color: "white", marginBottom:"2px" }}
    >
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
              >
                <FaChalkboardTeacher style={{ marginBottom: "2px" }} />{" "}  Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <SiCodeproject style={{ marginBottom: "2px" }} /> Projects  
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/achievements"
                onClick={() => updateExpanded(false)}
              >
                <GiAchievement  color ="white" style={{marginBottom:"2px"}}/> Achievements
              </Nav.Link>
            </Nav.Item>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </IconContext.Provider>
  );
}

export default NavBar;
