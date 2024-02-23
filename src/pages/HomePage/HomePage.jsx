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
    <Container fluid className="main-container">
      {/* Навигация */}
      <Row>
        <Col className="border-0">
          <MyNavbar />
        </Col>
      </Row>

      {/* Увеличенный отступ между навигацией и слайдером */}
      <Row className="mt-3">
        <Col className="bg-custom-gray d-flex justify-content-center align-items-center border-0 custom-slider-container">
          <MySlider   />
        </Col>
      </Row>

      {/* Контейнер для AboutMeBlock */}
      <Row>
        <Col className="border-0" style={{ paddingLeft: '0px', paddingRight: '0px', margin: '0px !important' }}>
          <AboutMeBlock />
        </Col>
      </Row>

      {/* Контейнер для InfoBlock */}
      <Row>
        <Col className="border-0">
          <InfoBlock />
        </Col>
      </Row>

      {/* Добавьте другие компоненты и контент, если необходимо */}
    </Container>
  );
}

export default HomePage;
