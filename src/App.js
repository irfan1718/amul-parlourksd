import React from 'react';

import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Menu,
  MustTry,
} from './container';

import './App.css';
import { Navbar } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Intro />
      <MustTry />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
