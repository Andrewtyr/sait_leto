// pages/GalleryPage/GalleryPage.jsx
import React,{ useEffect } from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import Gallery from '../../components/Gallery/Gallery';
import Container from 'react-bootstrap/Container';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './GalleryPage.scss';

function GalleryPage() {
  useEffect(() => {
    document.title = 'Галлерея'; 
  }, []);

  return (
    <Container fluid className="main-container">
      {/* Навигация */}
      <Row>
        <Col>
          <MyNavbar />
        </Col>
      </Row>

      {/* Увеличенный отступ между навигацией и галереей */}
      <Row className="mt-3">
        <Col>
            <Gallery />
        </Col>
        </Row>

      {/* Контейнер для InfoBlock */}
      <Row className="mt-4">
        <Col>
          <InfoBlock />
        </Col>
      </Row>

      {/* Добавьте другие компоненты и контент, если необходимо */}
    </Container>
  );
}

export default GalleryPage;
