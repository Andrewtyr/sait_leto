// SiteInfo.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SiteInfo() {
  return (
    <Container>
      <Row>
        <Col>
          <p className="mt-3">Информация о вашем сайте с использованием классов Bootstrap.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SiteInfo;
