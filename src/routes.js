import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Register from './components/Register/Register'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route exact path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
)

export default Routes