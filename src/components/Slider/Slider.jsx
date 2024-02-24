// Slider.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-item-img"
          src={process.env.PUBLIC_URL + '/images/слайд1.jpg'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-item-img"
          src={process.env.PUBLIC_URL + '/images/слайд2.jpg'}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-item-img"
          src={process.env.PUBLIC_URL + '/images/слайд3.jpg'}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-item-img"
          src={process.env.PUBLIC_URL + '/images/слайд4.png'}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
