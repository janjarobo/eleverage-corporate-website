import { Col, Row, Container, Image } from 'react-bootstrap';
import { projectsData } from '../data';

const Works = () => {
  return (
    <section className='block works-block' id='works'>
      <Container fluid>
        <div className='title-holder'>
          <h3>Our Works</h3>
          <div className='subtitle'>
            some of our finished and on-going projects
          </div>
        </div>
        <Row className='portfoliolist'>
          {projectsData.map((project) => {
            const { id, link, image, title } = project;
            return (
              <Col sm={4} key={id}>
                <div className='portfolio-wrapper'>
                  <a href={link}>
                    <Image src={image} />
                    <div className='label text-center'>
                      <h4>{title}</h4>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Works;
