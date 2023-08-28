import { Row, Col, Container, Image, ProgressBar } from 'react-bootstrap';

const About = () => {
  const customerSatisfactionProgress = 80;
  const reliabilityProgress = 90;
  const speedProgress = 89;
  return (
    <section id='about' className='block about-block'>
      <Container>
        <div className='title-holder'>
          <h3>About Us</h3>
          <div className='subtitle'>learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src='/images/about.jpg' alt='IEE employees' />
          </Col>
          <Col sm={6}>
            <p>
              We redefine vertical transportation. With a commitment to
              excellence, we specialize in the supply and installation of
              cutting-edge elevators.
            </p>
            <p>
              Our team of expertise ensures seamless solutions that enhance
              accessibility, efficiency, and safety in every building. From
              residential to commercial projects, we elevate spaces with
              innovation and reliability. As industry leaders, we take pride in
              transforming the way people move, one floor at a time. Discover a
              new level of vertical mobility with our products.
            </p>
            <p>
              We committed to deliver customer satisfaction, reliabilty and
              speed towards our customers.
            </p>
            <div className='progress-block'>
              <h4>customer satisfaction</h4>
              <ProgressBar
                now={customerSatisfactionProgress}
                label={`${customerSatisfactionProgress}%`}
              />
            </div>

            <div className='progress-block'>
              <h4>reliability</h4>
              <ProgressBar
                now={reliabilityProgress}
                label={`${reliabilityProgress}%`}
              />
            </div>

            <div className='progress-block'>
              <h4>speed</h4>
              <ProgressBar now={speedProgress} label={`${speedProgress}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
