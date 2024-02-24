// components/AboutMeBlock/AboutMeBlock.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutMeBlock.scss';

function AboutMeBlock() {
  return (
    <Card className="border-0">
      <Card.Body>
      <Card.Title className="text-center" style={{ fontSize: '40px', fontStyle: 'italic', marginBottom: '50px' }}>Обо мне</Card.Title>        
        <Row className="top-container">
          {/* Левый контейнер с картинкой */}
          <Col md={6} className="border-0" style={{ paddingLeft: '0px' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/моя фотка.png'}
              alt="Картинка"
              className="img-fluid full-width"
            />
          </Col>
          {/* Правый контейнер с текстом */}
          <Col md={6} className="border-0" style={{ paddingLeft: '0px',  }}>
            <Card.Text>
              Учусь в политехе, пытаюсь делать практику, смотрю сериалы, читаю книги, пишу разные заметки о том что прийдет в голову, и этот сайт поможет узнать меня немного лучше, здесь я собрал то что мне нравится и кое-какие мои мысли, ну и галерею любимых фото и  просто обоев на рабочий стол, а также оставил способ связаться со мной 
            </Card.Text>
          </Col>
        </Row>

        {/* Контейнер с 2 фотографиями сверху и 2 текстами снизу */}
        <Row className="bottom-container">
          {/* Верхняя левая часть */}
          <Col md={6}className="border-0" style={{ paddingLeft: '0px', paddingRight: '0px', marginBottom: '20px' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/политех.jpg'}
              alt="Фото 1"
              className="img-fluid"
            />
          </Col>
          {/* Верхняя правая часть */}
          <Col md={6}className="border-0" style={{ paddingLeft: '0px', paddingRight: '0px', marginBottom: '20px' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/академия.jpg'}
              alt="Фото 2"
              className="img-fluid"
            />
          </Col>
          {/* Нижняя левая часть */}
          <Col md={6}className="border-0" style={{ paddingLeft: '0px', paddingRight: '0px', marginBottom: '20px' }}>
            <Card.Text>
              Учусь в АлтГТУ им. И. И. Ползунова на 3 курсе по специальности приклодная информатика в экономике 
            </Card.Text>
          </Col>
          {/* Нижняя правая часть */}
          <Col md={6}className="border-0" style={{ paddingLeft: '0px', paddingRight: '0px', marginBottom: '20px' }}>
            <Card.Text>
              Работаю в КГБПОУ “Алтайская академия гостеприимства ” преподавателем программирования. Обычно веду пары у 3 и 4 курса
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutMeBlock;
