import { Carousel } from 'react-bootstrap';
import { heroData } from '../data';

const Hero = () => {
  return (
    <section id='hero' className='hero-block'>
      <Carousel>
        {heroData.map((item) => {
          const { id, image, title, desc, link } = item;
          return (
            <Carousel.Item key={id}>
              <img src={image} alt='some pics' />
              <Carousel.Caption>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={link} className='btn btn-primary'>
                  Learn More
                  <i className='fas fa-chevron-right'></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Hero;
