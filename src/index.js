import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Register from './components/home/register';
import NotFound from './components/notFound/notfound';
import { Login, Coaching, Contact, ListStories, Story } from './components';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ App } />
      <Route path='/login' component={ Login } />
      <Route path='/home' component={ App } />
      <Route path='/coaching' component={ Coaching } />
      <Route path='/stories' component={ ListStories } />
      {/* <Route path='/story/:id' component={ Story } /> */}
      <Route path='/contact' component={ Contact } />
      <Route path='/register' component={ Register } /> 
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(<Routes />, document.getElementById('root'));