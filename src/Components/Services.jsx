import { Col, Row, Container } from 'react-bootstrap';
import { servicesData } from '../data';

const Services = () => {
  return (
    <section className='block services-block' id='services'>
      <Container fluid>
        <div className='title-holder'>
          <h3>Our Services</h3>
          <div className='subtitle'>services we provide</div>
        </div>
        <Row>
          {servicesData.map((service) => {
            const { id, icon, title, description } = service;
            return (
              <Col sm={4} className='holder' key={id}>
                <div className='icon'>
                  <i className={icon}></i>
                </div>
                <h4 style={{ fontWeight: '710' }}>{title}</h4>
                <p>{description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
