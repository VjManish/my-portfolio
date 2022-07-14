import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../styles/Particle";
import Calculator from "../../Assets/Projects/Calculator.png";
import mvjr from "../../Assets/Projects/mvjr.png";
import MusicPlayer from "../../Assets/Projects/Music Player.png";
import newsApp from "../../Assets/Projects/NewsApp.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MusicPlayer}
              isBlog={false}
              title="MusicPlayer"
              //description=" This is a Music Player build with Html Css and I Implemented a Single Screen Component also ."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
             // description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mvjr}
              isBlog={false}
              title="Resume"
              //description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsApp}
              isBlog={false}
              title="NewsExpress"
              //description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                           
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;