import { Form, Button, Col, Row, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id='contact' className='block contact-block'>
      <Container fluid>
        <div className='title-holder'>
          <h3>Contact Us</h3>
          <div className='subtitle'>get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Enter your Full Name</Form.Label>
                <Form.Control type='text' placeholder='e.g. Juan Dela Cruz' />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Enter your Email address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. example@sample.com'
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <Form.Label>Enter your Contact Number</Form.Label>
                <Form.Control type='tel' placeholder='(+63) 917 662 1645' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                as='textarea'
                placeholder='Enter your comments here'
              />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button
              variant='primary'
              type='submit'
              style={{ alignItems: 'center' }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61829.21871676995!2d120.99165016384785!3d14.408351612959642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d02cc7b1e345%3A0x51fdbee47cdaf013!2sMuntinlupa%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1693236900945!5m2!1sen!2sph'
          title='map'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <Container fluid className='contact-info'>
        <ul>
          <li>
            <i className='fas fa-envelope'></i>
            hello@example.com
          </li>
          <li>
            <i className='fas fa-phone'></i>
            (02)8863-8888
          </li>
          <li>
            <i className='fas fa-map-marker-alt'></i>
            Muntinlupa City, Philippines
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Contact;
