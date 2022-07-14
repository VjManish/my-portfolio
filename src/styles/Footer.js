import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {CgMail} from "react-icons/cg";

function Footer() {
  let date = new Date();
  let date1= date.getDate();
  let Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let month= date.getMonth();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>  Developed by <span className="purple"> Manish Kumar vijay </span></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> {date1}-{Month[month]}-{year} MVJ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/VjManish"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CgMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/manish-kumar-vijay-0b91b21b3/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/manishkvijay240101/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
