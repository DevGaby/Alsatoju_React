import React, { Component, Fragment } from 'react';
import { Description, Coaching, ListStories, Contact, Download, Header, Footer } from './components';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     appName: "Alsatoju",
  //     home: false
  //   }
  // }

  render () {
    return (
      <Fragment>
         <div className="off-canvas-wrapper">
            <Header />
              <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                <Description />
                <Coaching />
                <ListStories />
                <Contact />
                <Download />
              </div>
            <Footer />
          </div>
      </Fragment>
    );
  }
}

export default App;