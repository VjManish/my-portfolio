import React from "react";
import { Col, Row } from "react-bootstrap";
import {FaGithub} from "react-icons/fa";
import {ImHtmlFive} from "react-icons/im";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiBootstrap,
  SiCss3
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <ImHtmlFive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
     
     
    </Row>
  );
}

export default Techstack;