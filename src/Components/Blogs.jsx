import { Container, Row, Col, Card } from 'react-bootstrap';
import { blogsData } from './../data';

const Blogs = () => {
  return (
    <section id='blogs' className='block blog-block'>
      <Container fluid>
        <div className='title-holder'>
          <h3>Latest From Our Blogs</h3>
          <div className='subtitle'>get our latest news from our blog</div>
        </div>
        <Row>
          {blogsData.map(({ id, image, time, title, description, link }) => {
            return (
              <Col sm={4} key={id}>
                <div className='holder'>
                  <Card>
                    <Card.Img variant='top' src={image} />
                    <Card.Body>
                      <time>{time}</time>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{`${description.substring(
                        0,
                        60
                      )}...`}</Card.Text>
                      <a href={link} className='btn btn-primary'>
                        Read More<i className='fas fa-chevron-right'></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
