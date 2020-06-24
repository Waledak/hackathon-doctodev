import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Results = (props) => {
  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>Categorie : {props.categorie}</Card.Title>
        <Card.Text>
          <div>Type de soin : {props.description}</div>
          <div>Prix : {props.price}</div>
        </Card.Text>
        <Link to="/Infos">
          <Button variant="primary">Plus d'info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Results;
