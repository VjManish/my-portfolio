import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import EducationCard from "./EducationCards";
import Particle from "../../styles/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/../Assets/ManishResume.pdf";
 


function Education() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
        Educational <strong className="purple">Qualifications </strong>
      </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
           <EducationCard
               title="College"
               description="Birla Institute Of Technology Mesra Ranchi (Jharkhand) "
               stream ="➤ Stream: Computer Science"
               year=" ➤ Passing Year :2023"
               cgpa="➤ Cgpa:8.2/10 (till 6th Sem)"
             />
          </Col>

          <Col md={4} className="project-card">
            <EducationCard
              title=" Class XII "
              description="Saraswati Vidhya Vihar Sr.Sec. School Bandikui, Dausa(Rajasthan)"
              stream ="➤ Stream: Science"
              year=" ➤ Passing Year :2018"
              cgpa="➤ Percentage:83.60%"
            />
          </Col>

          <Col md={4} className="project-card">
            <EducationCard
              title=" Class X"
              description="Saraswati Vidhya Vihar Sr.Sec. School Bandikui, Dausa(Rajasthan)"
              stream ="➤ Stream: Science"
              year=" ➤ Passing Year :2016"
              cgpa="➤ Percentage:87.33%"
            />
          </Col>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
      </Container>
    
  );
}

export default Education;