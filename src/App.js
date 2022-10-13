import React from 'react';
import Header from 'components/Header';
import About from 'components/About';
import ContentAbout from 'components/ContentAbout';
import Features from 'components/Features';

function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <About />
      <ContentAbout />
      <Features />
    </div>
  );
}

export default App;
