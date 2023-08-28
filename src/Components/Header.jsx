import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar expand='lg' className='bg-body-tertiary' id='home'>
        <Container>
          <Navbar.Brand href='#home'>Eleverage Inc.</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#services'>Services</Nav.Link>
              <Nav.Link href='#works'>Works</Nav.Link>
              <Nav.Link href='#teams'>Teams</Nav.Link>
              <Nav.Link href='#testimonials'>Testimonials</Nav.Link>
              <Nav.Link href='#blogs'>Blogs</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
