// components/Gallery/Gallery.jsx
import React from 'react';
import './Gallery.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Gallery() {
  return (
    <div className="gallery-container">
      {/* Текстовый контейнер сверху */}
      <div className="text-container">
        <p className="text">То что мне нравиться</p>
      </div>

      {/* Контейнер для фотографий */}
      <Row className="photos-container">
        {/* Левый столбец */}
        <Col xs={12} md={6} lg={6} style={{  marginBottom: '20px' }}>

          <div className="photo-container" style={{  marginBottom: '20px' }}>
            <Image src={process.env.PUBLIC_URL + '/images/галлерея1.jpg'} alt="Photo 1" className="gallery-image" fluid />
          </div>
          <div className="photo-container" style={{  marginBottom: '20px' }}>
            <Image src={process.env.PUBLIC_URL + '/images/галлерея2.jpg'} alt="Photo 2" className="gallery-image" fluid />
          </div>
          <div className="photo-container" style={{  marginBottom: '20px' }}>
            <Image src={process.env.PUBLIC_URL + '/images/галлерея3.jpg'} alt="Photo 3" className="gallery-image" fluid />
          </div>
        </Col>

        {/* Правый столбец */}
        <Col xs={12} md={6} lg={6} style={{  marginBottom: '20px' }}>
          <div className="photo-container" style={{  marginBottom: '20px' }}>
            <Image src={process.env.PUBLIC_URL + '/images/галлерея1.jpg'} alt="Photo 4" className="gallery-image" fluid />
          </div>
          <div className="photo-container" style={{  marginBottom: '20px' }}>
            <Image src={process.env.PUBLIC_URL + '/images/галлерея2.jpg'} alt="Photo 5" className="gallery-image" fluid />
          </div>
          <div className="photo-container" style={{  marginBottom: '20px' }}>
            <Image src={process.env.PUBLIC_URL + '/images/галлерея3.jpg'} alt="Photo 6" className="gallery-image" fluid />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Gallery;
