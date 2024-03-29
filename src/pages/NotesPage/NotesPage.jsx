// pages/NotesPage/NotesPage.jsx
import React,{ useEffect } from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import MySlider from '../../components/Slider/Slider';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Notes from '../../components/Notes/Notes'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NotesPage.scss';

function NotesPage() {
  useEffect(() => {
    document.title = 'Заметки'; 
  }, []);
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
        <Col className="custom-slider-container">
          <MySlider />
        </Col>
      </Row>

      {/* Вставка компонента Notes в середину */}
      <Row className="mt-4">
        <Col className="border-0">
          <Notes />
        </Col>
      </Row>

      {/* Контейнер для InfoBlock */}
      <Row className="mt-4">
        <Col className="border-0">
          <InfoBlock />
        </Col>
      </Row>

      

      
    </Container>
  );
}

export default NotesPage;
