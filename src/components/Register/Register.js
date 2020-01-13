import React, { Component } from 'react'
import { CrudService } from '../../services/CrudService'
import './Register.css'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: 'ReactTestRegister@gmail.com',
      password: 'password',
      redirectToReferrer: false,
    }
  }

  redirect() {
    this.setState({ redirectToReferrer: true })
  }

  signUp() {
    if (this.state.email && this.state.password) {
      CrudService('api/app_users', 'POST', this.state).then((result) => {
        if (result.id) {
          this.setState({ redirectToReferrer: true })
          console.log(result)
          this.props.history.push('/home')
        } else {
          console.log('failed')
          console.log(result)
        }
      })
    }
  }

  /**
   * change the value each time the user add a char
   *
   * @param e
   */
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('token')) {
      this.props.history.push('/home')
    }

    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column">
          <h2>Register Page </h2>
          <label>Email</label>
          <input type="text" name="email" placeholder="Email"
            onChange={this.onChange.bind(this)} />
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"
            onChange={this.onChange.bind(this)} />
          <input type="submit" value="SignUp" className="button success"
            onClick={this.signUp.bind(this)} />
          <button className="button secondary" onClick={this.redirect.bind(this)}>Retour</button>
        </div>
      </div>
    )
  }
}

export default Register
