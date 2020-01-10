import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      redirect: 0,
      token: sessionStorage.getItem('token') ?? null,
    }
  }

  login () {
    console.log('login()')
    this.setState({ redirect: 1 })
  }

  logout () {
    console.log('logout()')
    sessionStorage.setItem('token', null)
    this.setState({ redirect: 0, token: null })
  }

  render () {
    console.log('token ' + this.state.token)
    console.log('redirect ' + this.state.redirect)
    if (this.state.redirect === 1) {
      this.props.history.push('/login')
    }
    if (this.state.token) {
      return (
        <div>
          <h2 className="text-center primary">Home</h2>
          <button value="logout" className="button secondary float-center"
                  onClick={this.logout.bind(this)}>Logout
          </button>
        </div>
      )
    }
    return (
      <div>
        <h2 className="text-center primary">Home</h2>
        <button value="login" className="button float-center"
                onClick={this.login.bind(this)}>Login
        </button>
      </div>
    )
  }
}

export default Home
