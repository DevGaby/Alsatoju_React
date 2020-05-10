import React, { Component } from 'react';
import { Home } from './components';
import './index.css';
// import { Description, Coaching, ListStories, Contact, Download, Header, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column"> 
      <Home /> 
      {/* <Header />   
        <div className="d-flex flex-column flex-fill">
          <Description />
          <Coaching />
          <ListStories />
          <div className="d-flex flex-row">
            <Contact />
            <Download />
          </div>
        </div>
      <Footer /> */}
     </div>
    )
  }
}

export default App;
