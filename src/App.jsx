import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//components
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Works from './Components/Works';
import Teams from './Components/Teams';
import Testimonials from './Components/Testimonials';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='app'>
      <header id='header'>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonials />
        <Blogs />
        <Contact />
      </main>
      <footer id='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
