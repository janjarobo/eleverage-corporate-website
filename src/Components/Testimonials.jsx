import { Container, Carousel } from 'react-bootstrap';
import { testimonialsData } from '../data';

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials-block'>
      <Container fluid>
        <div className='title-holder'>
          <h3>Client Testimonials</h3>
          <div className='subtitle'>what client says about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map(({ id, name, description, designation }) => {
            return (
              <Carousel.Item key={id}>
                <blockquote>
                  <p>{`"${description}"`}</p>
                  <cite>
                    <span className='name'>{name}</span>
                    <span className='designation'>{designation}</span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
