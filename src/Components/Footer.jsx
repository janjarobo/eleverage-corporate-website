import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Container fluid>
      <div className='copyright'>
        &copy; 2023 Eleverage Inc. All Rights Reserved
      </div>
      <div className='socials'>
        <ul>
          <li>
            <a href='https://www.facebook.com'>
              <i className='fab fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
        </ul>
      </div>
      {showTopBtn && (
        <div
          className='go-top'
          onClick={() => goTop()}
          style={{ cursor: 'pointer' }}
        >
          <i className='fa-solid fa-chevron-up'></i>
        </div>
      )}
    </Container>
  );
};

export default Footer;
