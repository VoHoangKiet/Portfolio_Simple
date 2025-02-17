import React from 'react';
import { Carousel, Image, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselRef } from 'antd/es/carousel';

const ImageSlider = () => {
  const images = [
    '/1/1.jpg',
    '/1/2.jpg',
    '/1/3.jpg',
    '/1/4.jpg',
    '/1/5.jpg',
    '/1/6.jpg',
    '/1/7.jpg',
    '/1/8.jpg',
    '/1/9.jpg',
    '/1/10.jpg',
    '/1/11.jpg',
    '/1/12.jpg',
    '/1/13.jpg',
    '/1/14.jpg',
  ];

  const carouselRef = React.useRef<CarouselRef | null>(null);

  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Carousel ref={carouselRef} autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '90vh' }} />
          </div>
        ))}
      </Carousel>

      <Button 
        icon={<LeftOutlined />} 
        style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 1 }} 
        onClick={goToPrev}
        size='large'
      />
      <Button 
        icon={<RightOutlined />} 
        style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 1 }} 
        onClick={goToNext}
        size='large' 
      />
    </div>
  );
};

export default ImageSlider;