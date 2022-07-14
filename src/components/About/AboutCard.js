import React from "react";
import Card from "react-bootstrap/Card";
import { HiOutlineMusicNote } from "react-icons/hi";
import {GiChessKnight} from "react-icons/gi";
import {IoBookSharp} from "react-icons/io5";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manish Kumar Vijay</span>&ensp;
            from <span className="purple"> Rajasthan, India.</span>
            <br />I am  currently pursuing B.Tech in Computer Science From 
            <span className="purple"> BIT  Mesra. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiChessKnight /> Playing Chess
            </li>
            <li className="about-activity">
              <IoBookSharp /> Reading Books
            </li>
            <li className="about-activity">
              <HiOutlineMusicNote /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” {" "}
          </p>
          <footer className="blockquote-footer">MKV</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;