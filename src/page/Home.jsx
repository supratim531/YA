import React from 'react';
import About from '../component/About';
import Footer from '../component/Footer';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import Service from '../component/service/Service';
import Work from '../component/Work';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Work />
      <About />
      <Footer />
    </>
  );
}

export default Home;
