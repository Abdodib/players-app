import React from "react";
import { Card } from "react-bootstrap";

const Player = ({
  name = "Unknown Player",
  team = "No Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = "N/A",
  imageUrl = "https://via.placeholder.com/150"
}) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><strong>Team:</strong> {team}</Card.Text>
        <Card.Text><strong>Nationality:</strong> {nationality}</Card.Text>
        <Card.Text><strong>Jersey Number:</strong> {jerseyNumber}</Card.Text>
        <Card.Text><strong>Age:</strong> {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
