import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Header from './header';
import Content from './content';
import Footer from './footer';

const App = () => (
  <Router>
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  </Router>
);

export default App;