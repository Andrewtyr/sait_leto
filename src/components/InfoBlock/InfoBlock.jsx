import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function InfoBlock() {
  return (
    <Row className="flex-column-reverse flex-md-row">
      {/* Контейнер для мобильной версии */}
      <Col xs={12} className="d-md-none">
        

        <div className="d-flex justify-content-end mb-2">
          <a href="https://t.me/Andrewtyrr" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <Image src={process.env.PUBLIC_URL + '/images/телеграмм.png'} style={{ width: '40px', height: '40px' }} />
          </a>
          <a href="https://vk.com/andrewtyrr" target="_blank" rel="noopener noreferrer">
            <Image src={process.env.PUBLIC_URL + '/images/вк.png'} alt="ВКонтакте" style={{ width: '40px', height: '40px' }} />
          </a>
        </div>

        <div className="d-flex justify-content-end mb-2 text-center">
          <p className="mb-0">
            Алтайский край 
            г. Барнаул 2024.
          </p>
          <a href="https://github.com/Andrewtyr/sait_leto" target="_blank" rel="noopener noreferrer" className="d-block mb-0">© 2024 github</a>
        </div>

      </Col>

      {/* Контейнер для версии на больших экранах */}
      <Col md={6} className="d-none d-md-flex flex-column align-items-end">
        {/* Внутренний контейнер 1 */}
        <div className="d-flex justify-content-end" style={{ marginTop: '-5px' }}>
          <a href="https://t.me/Andrewtyrr" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <Image src={process.env.PUBLIC_URL + '/images/телеграмм.png'} style={{ width: '40px', height: '40px', alignSelf: 'flex-start' }} />
          </a>
          <a href="https://vk.com/andrewtyrr" target="_blank" rel="noopener noreferrer">
            <Image src={process.env.PUBLIC_URL + '/images/вк.png'} alt="ВКонтакте" style={{ width: '40px', height: '40px', alignSelf: 'flex-start' }} />
          </a>
        </div>

        {/* Внутренний контейнер 2 */}
        <div className="d-flex justify-content-end">
          <a href="https://github.com/Andrewtyr/sait_leto" target="_blank" rel="noopener noreferrer" className="d-block mb-0">© 2024 github</a>
        </div>
      </Col>

      {/* Левый контейнер для версии на больших экранах */}
      <Col md={6} className="d-none d-md-flex align-items-end order-first">
        <p className="mb-0 text-left text-md-right">
          Алтайский край
        </p>
      </Col>
    </Row>
  );
}

export default InfoBlock;
