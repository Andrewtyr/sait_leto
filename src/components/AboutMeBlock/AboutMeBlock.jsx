// components/AboutMeBlock/AboutMeBlock.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import './AboutMeBlock.scss';
function AboutMeBlock() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>О мене</Card.Title>
        <Card.Text>
          {/* Ваш текст о себе */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutMeBlock;
