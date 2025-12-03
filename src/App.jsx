import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import WhyAvolve from './components/WhyAvolve';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

import GrainOverlay from './components/GrainOverlay';

function App() {
  return (
    <div className="app">
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <FeaturedWork />
        <WhyAvolve />
        <Process />
        <Testimonials />
        <FAQ />
        <About />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
