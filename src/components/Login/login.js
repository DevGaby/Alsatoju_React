import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom';
import { CrudService } from '../../services/CrudService'
import './Login.css'

class Login extends Component {

  constructor () {
    super()
    this.state = {
      email: 'alanlima898@gmail.com',
      password: 'password',
      redirectToReferrer: false,
    }
    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  login () {
    if (this.state.email && this.state.password) {
      CrudService('login', 'POST', this.state)
      .then((result) => {
        if (result.token) {
          sessionStorage.setItem('token', result.token)
          this.setState({ redirectToReferrer: true })
          console.log(result.token)
        }
      })
    }
  }

  /**
   * change the value each time the user add a char
   *
   * @param e
   */
  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    if (this.state.redirectToReferrer) {
      // return redirect -> home
    }
    if (sessionStorage.getItem('token')) {
      // return redirect -> home
    }

    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column">
          <h2>Login Page </h2>
          <label>Email</label>
          <input type="text" name="email" placeholder="Email"
                 onChange={this.onChange}/>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"
                 onChange={this.onChange}/>
          <input type="submit" value="login" className="button success"
                 onClick={this.login}/>
        </div>
      </div>
    )
  }
}

export default Login
