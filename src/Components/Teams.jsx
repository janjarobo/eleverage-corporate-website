import { Col, Container, Image, Row } from 'react-bootstrap';
import { teamsData } from '../data';

const Teams = () => {
  return (
    <section className='block teams-block' id='teams'>
      <Container fluid>
        <div className='title-holder'>
          <h3>Our Officers</h3>
        </div>
        <Row>
          {teamsData.map((person) => {
            const {
              id,
              image,
              fbLink,
              twitterLink,
              linkedInLink,
              name,
              designation,
            } = person;
            return (
              <Col sm={3} key={id}>
                <div className='image'>
                  <Image src={image} alt={name} />
                  <div className='overlay'>
                    <div className='socials'>
                      <ul>
                        <li>
                          <a href={fbLink}>
                            <i className='fab fa-facebook'></i>
                          </a>
                        </li>
                        <li>
                          <a href={twitterLink}>
                            <i className='fab fa-twitter'></i>
                          </a>
                        </li>
                        <li>
                          <a href={linkedInLink}>
                            <i className='fab fa-linkedin'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  <h4>{name}</h4>
                  <span className='designation'>{designation}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;
