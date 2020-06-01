import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Coaching, StoryList, Contact, Header, Footer, Home, NotFound, Story } from './components';

class App extends Component {

  render () {
  return (
      <BrowserRouter>
        <Fragment>
         <div className="off-canvas-wrapper">
            <Header />
          </div>
          <div className="main-route">
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/login' component={ Login } />
              <Route path='/coaching' component={ Coaching } />
              <Route path='/stories' component={ StoryList } />
              <Route path='/story/:id' component={ Story } />
              <Route path='/contact' component={ Contact } />
              <Route component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </BrowserRouter> 
    );
  }
}

export default App;