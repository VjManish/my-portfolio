import React from "react";
import Card from "react-bootstrap/Card";
import {BsGraphUp} from "react-icons/bs";



function EducationCards(props) {
  return (
    <Card className="project-card-view">
      
      <Card.Body>
       <BsGraphUp   style={{fontSize:"80px" , color:"#c770f0"}}/>
       <Card.Title   style={{marginTop:"2em", color:"#c770f0" }}> {props.title} </Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          {props.stream}
        </Card.Text>
        <Card.Text>
          {props.year}
        </Card.Text>
        <Card.Text>
          {props.cgpa}
        </Card.Text>

        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default EducationCards;