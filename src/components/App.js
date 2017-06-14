import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Header from './header';
import Content from './content';
import Footer from './footer';

import Signin from './signin';

const App = () => (
  <Router>
    <div>
      <Signin />
      <Header />
      <Content />
      <Footer />
    </div>
  </Router>
);

export default App;