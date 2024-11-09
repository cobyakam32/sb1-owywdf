import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;