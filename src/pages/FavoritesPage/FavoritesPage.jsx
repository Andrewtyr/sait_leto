// pages/Favorites/Favorites.jsx
import React ,{ useEffect } from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Favorites from '../../components/Favorites/Favorites'; // Импортируйте компонент Favorites
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FavoritesPage.scss'; // Подключите ваши стили

function FavoritesPage() {
    useEffect(() => {
        document.title = 'Избранное'; 
      }, []);
    
  return (
    <Container fluid className="main-container">
      {/* Навигация */}
      <Row>
        <Col className="border-0">
          <MyNavbar />
        </Col>
      </Row>

      {/* Увеличенный отступ между навигацией и компонентом Favorites */}
      <Row className="mt-3">
        <Col className="custom-favorites-container" style={{ marginBottom: '50px' }}>
          <Favorites />
        </Col>
      </Row>

        {/* Контейнер для InfoBlock */}
      <Row className="mt-4">
        <Col className="border-0">
          <InfoBlock />
        </Col>
      </Row>
      {/* Добавьте другие компоненты и контент, если необходимо */}
    </Container>
  );
}

export default FavoritesPage;
