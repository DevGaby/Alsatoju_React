import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '././components/Login/Login'
import Home from './components/Home/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route exact path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
)

export default Routes