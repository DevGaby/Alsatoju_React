import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor () {
        super()
        this.state = {
          email: '',
          password: '',
          goToHome:false,
          redirectToReferrer: false,
        }
  }

  onChange = event => {
    const mail = event.target.value
    this.setState({mail})
    const password = event.target.value
    this.setState({password})
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({ goToHome : true})
  }
  

  render () {
    if (this.state.goToHome) {
      return <Redirect push to={'/home'}></Redirect>
    }
    if (sessionStorage.getItem('token')) {
      // return redirect -> home
    }

    return (
      <div className="row small-up-2 medium-up-3 large-up-4 p-4">
        <div className="column p-2">
          <form className="login" onSubmit={this.onSubmit}>
            <h2>Login Page </h2>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email"
                    value={this.state.mail} onChange={this.onChange} required/>
            <label>Password</label>
            <input type="password"  name="password" placeholder="Password"
                    value={this.state.password} onChange={this.onChange} required/>
            <input type="submit" value="login" className="button success" />
          </form>
        </div>
      </div>
    );
  }
}