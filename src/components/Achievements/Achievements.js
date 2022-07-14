import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import AchievementsCard from "./AchievementsCards";
import Particle from "../../styles/Particle";



 


function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
        Experience And <strong className="purple">Achievements </strong>
      </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
           <AchievementsCard
              title="Web  Mentor Gdsc At College"
              description=" I am the Web  mentor  in Google developer Student Club at my College.
              And in this I organized hackathons for the juniors."
             />
          </Col>

          <Col md={4} className="project-card">
            <AchievementsCard
             title="Cpp Instructor"
             description="I Conducted  Cpp classes for juniors at my college under the Gdsc,
             And  I taught Cpp in Bootcamp For 7 days. "
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementsCard
              title="Leetcode"
              description="2.5⭐  on Leetcode "
              s="Solved 250+ Questions."
            />
          </Col>
         

          <Col md={4} className="project-card">
            <AchievementsCard
              title="CodeStudio"
              description="Specalist (5386 pts)"
              s="Solved 176 Questions."
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementsCard
              title="Contest Ranking"
              c1="(1) Codestudio biweekly contest rank 95 out of 650 participants."
              c2="(2) LoveBabbar contest rank 176 out of 1900 participants"
              c3="(3) Codestudio Beginner contest 12 rank 35 out of 500 participants"
            />
          </Col>
          </Row>
          
      </Container>
      </Container>
    
  );
}

export default Achievements;