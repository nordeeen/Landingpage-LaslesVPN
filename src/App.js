import React from 'react';
import Header from './components/Header'
import About from './components/About';
import ContentAbout from './components/ContentAbout'
import Features from './components/Features';
import Pricing from './components/Pricing';
import HugeGlobal from './components/HugeGlobal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <About />
      <ContentAbout />
      <Features/>
      <Pricing />
      <HugeGlobal />
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
