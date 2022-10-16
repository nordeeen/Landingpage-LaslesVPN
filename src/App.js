import React from 'react';
import Header from 'components/Header';
import About from 'components/About';
import ContentAbout from 'components/ContentAbout';
import Features from 'components/Features';
import Pricing from 'components/Pricing';

function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <About />
      <ContentAbout />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
