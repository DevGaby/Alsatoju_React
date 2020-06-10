import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { login, getMe } from '../../services/user'
import Button from 'react-bootstrap/Button'
import * as constant from '../../utils/constant'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      goToHome: false,
      redirectToReferrer: false,
      isLoading: false
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = async () => {
    try {
      this.setState({ isLoading: true })
      const token = await login(this.state)
      const user = await getMe()

      sessionStorage.setItem(constant.USER, user)
      sessionStorage.setItem(constant.TOKEN, token.token)

      alert('Bienvenue ' + user.firstName)
      
      this.setState({ goToHome: true })
      this.setState({ isLoading: false })
    } catch (e) {
      console.log('Login Catch :', e)
      this.setState({ isLoading: false })
    }
  }


  render() {
    if (this.state.goToHome) {
      return <Redirect push to={'/'}></Redirect>
    }
    if (sessionStorage.getItem('token')) {
      // return <Redirect push to={'/'}></Redirect>
    }

    return (
      <div className="row small-up-2 medium-up-3 large-up-4 p-4">
        <div className="column p-2 ml-5">
          <h2 className="mb-5">Login Page </h2>

          <div className="row mb-3">
            <label className="col-4">Email</label>
            <input className="col-8" type="text" name="email" placeholder="Email"
              value={this.state.mail} onChange={this.onChange.bind(this)} required />
          </div>

          <div className="row mb-3">
            <label className="col-4">Password</label>
            <input className="col-8" type="password" name="password" placeholder="Password"
              value={this.state.password} onChange={this.onChange.bind(this)} required />
          </div>

          <div className="row">
            <Button variant="outline-primary" block size="sm" value="Login" onClick={this.onClick.bind(this)}>
              Login
            </Button>
          </div>

        </div>
      </div>
    );
  }
}