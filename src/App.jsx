import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Requirements from './components/Requirements'; // ✅ Add this import
import Clients from './components/Clients';
import Visa from './components/Visa';
import Location from './components/Location';
import Management from './components/Management';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Management />
      <Services />
      <Requirements />
      <Clients />
      <Visa />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
