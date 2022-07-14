import React from "react";
import Card from "react-bootstrap/Card";




function AchievementsCards(props) {
  return (
    <Card className="project-card-view">
      
      <Card.Body>
       <Card.Title   style={{marginTop:"2em", color:"#c770f0" }}> {props.title} </Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          {props.s}
        </Card.Text>
         <Card.Text>
          {[props.c1 ,props.c2, props.c3]}
        </Card.Text>

        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default AchievementsCards;