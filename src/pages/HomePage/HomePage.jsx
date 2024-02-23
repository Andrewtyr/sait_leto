// pages/HomePage/HomePage.jsx
import React from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import MySlider from '../../components/Slider/Slider';
import AboutMeBlock from '../../components/AboutMeBlock/AboutMeBlock';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomePage.scss';

function HomePage() {
  return (
    <Container>
      {/* Навигация */}
      <Row>
        <Col className="bg-custom-white">
          <MyNavbar />
        </Col>
      </Row>

      {/* Контейнер для слайдера с пользовательским серым фоном */}
      <Row>
        <Col className="bg-custom-gray">
          <MySlider />
        </Col>
      </Row>

      {/* Контейнер для AboutMeBlock */}
      <Row>
        <Col>
          <AboutMeBlock />
        </Col>
      </Row>

      {/* Контейнер для InfoBlock */}
      <Row>
        <Col>
          <InfoBlock />
        </Col>
      </Row>

      {/* Добавьте другие компоненты и контент, если необходимо */}
    </Container>
  );
}

export default HomePage;
