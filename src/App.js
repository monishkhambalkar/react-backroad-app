
import React from 'react';
import About from './components/About';
import Services from './components/Services';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Footer from './components/Footer';
import './App.css';

function App() {
  console.log("hello");
  return (
    <>
      
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>

    </>
  );
}

export default App;
