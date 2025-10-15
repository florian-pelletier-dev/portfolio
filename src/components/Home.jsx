import Loader from '../sectionComponents/Loader.jsx';

import Nav from '../sectionComponents/Nav.jsx';
import Hero from '../sectionComponents/Hero.jsx';
import AboutSimple from '../sectionComponents/AboutSimple.jsx';
import Skills from '../sectionComponents/Skills.jsx';
import Works from '../sectionComponents/Works.jsx';
import AboutGreater from '../sectionComponents/AboutGreater.jsx';
import Footer from '../sectionComponents/Footer.jsx';

function Home() {
  return (
    <>
      <Loader></Loader>
      <Nav></Nav>
      <Hero></Hero>
      <AboutSimple></AboutSimple>
      <Skills></Skills>
      <Works></Works>
      <AboutGreater></AboutGreater>
      <Footer></Footer>
    </>
  );
}

export default Home