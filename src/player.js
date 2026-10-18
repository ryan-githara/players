import React from 'react';
import { Card } from 'react-bootstrap';

// Destructure props
function Player({ name, team, nationality, jerseyNumber, age, image, imagePosition }) {
  return (
    <Card style={{ width: '18rem', margin: '15px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '280px', objectFit: 'cover', objectPosition: imagePosition, borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
      <Card.Body style={{ backgroundColor: '#f8f9fa' }}>
        <Card.Title style={{ fontWeight: 'bold' }}>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

export default Player;