import { Carousel, Image } from 'antd';

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

  return (
    <Carousel autoplay>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100vh' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;