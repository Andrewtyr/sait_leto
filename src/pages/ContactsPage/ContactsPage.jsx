// pages/ContactsPage/ContactsPage.jsx
import React, { useEffect } from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactsPage.scss';

function ContactsPage() {
  useEffect(() => {
    document.title = 'Контакты'; 
  }, []);

  return (
    <Container fluid className="main-container">
      {/* Навигация */}
      <Row>
        <Col className="border-0">
          <MyNavbar />
        </Col>
      </Row>

      {/* Увеличенный отступ между навигацией и формой контактов */}
      <Row className="mt-3">
        <Col className="bg-custom-gray d-flex justify-content-center align-items-center border-0 custom-contact-form-container" style={{ paddingLeft: '0px', paddingRight: '0px', margin: '0px !important' }}>
          <ContactForm />
        </Col>
      </Row>
      {/* Последний контейнер для мобильной версии */}
      <Row className="d-md-none mt-4">
        <Col className="border-0" style={{ marginTop: '310px' }}>
          {/* Ваш последний контейнер для мобильной версии */}
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

export default ContactsPage;
