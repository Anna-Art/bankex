import React, { Component } from 'react';
import Header from './components/Header/Header';

import './application.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-inner">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
