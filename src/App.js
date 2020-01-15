import React, { Component } from 'react';

import './styles/foundation.min.css';
import './styles/custom.css';

import Routes from './routes';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appName: "Alsatoju",
    }
  }

  render () {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            <Header />
            <hr/>
            <Routes />
            <hr/>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
