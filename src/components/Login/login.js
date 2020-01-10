import React, { Component } from 'react'
import { CrudService } from '../../services/CrudService'
import './Login.css'

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: 'alanlima898@gmail.com',
      password: 'password',
      redirectToReferrer: false,
    }
  }

  login () {
    if (this.state.email && this.state.password) {
      CrudService('login', 'POST', this.state).then((result) => {
        if (result.token) {
          sessionStorage.setItem('token', result.token)
          this.setState({ redirectToReferrer: true })
          console.log(result.token)
          this.props.history.push('/home')
        }
      })
    }
  }

  redirect () {
    this.setState({ redirectToReferrer: true })
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
    if (this.state.redirectToReferrer || sessionStorage.getItem('token')) {
      this.props.history.push('/home')
    }

    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column">
          <h2>Login Page </h2>
          <label>Email</label>
          <input type="text" name="email" placeholder="Email"
                 onChange={this.onChange.bind(this)}/>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"
                 onChange={this.onChange.bind(this)}/>
          <input type="submit" value="login" className="button success"
                 onClick={this.login.bind(this)}/>
          <button className="button secondary"
                  onClick={this.redirect.bind(this)}>Retour
          </button>
        </div>
      </div>
    )
  }
}

export default Login
