import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../styles/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeLogo from "../../Assets/Lottie/home-main.gif";
import ScrollToTop from "../../styles/ScrollToTop";




function Home() {
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                👋🏼
                </span>
              </h1>
               
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Manish Kumar Vijay </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20, color:'white' }}>
             <img 
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
             /> 
            </Col>
           
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ScrollToTop/>
      
     
    </section>
  );
}

export default Home;