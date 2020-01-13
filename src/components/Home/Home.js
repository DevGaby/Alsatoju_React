import React, { Component } from 'react'
import './Home.css'

/**
 * Les console.log sont pas obligatoire
 * Ils servent ici à vérifier que tout se passe comme attendu.
 */
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: 0,
      token: sessionStorage.getItem('token') ?? null,
    }
  }

  /**
   * Quand on clique sur Login la fonction autorise la redirection 
   * vers le component Login
   */
  login() {
    console.log('login()')
    this.setState({ redirect: 1 })
  }

  /**
   * Quand on clique sur Logout la fonction vide le Token du local storage
   * et interdit la redirection. Cela permet de modifier l'affichage
   */
  logout() {
    console.log('logout()')
    // remove le token
    sessionStorage.removeItem('token')
    this.setState({ redirect: 0, token: null })
  }

  /**
   * Redirige vers le component Register
   */
  signUp () {
    console.log('signuUp')
    this.setState({ redirect: 2 })
  }

  render () {
    console.log('token ' + this.state.token)
    console.log('redirect ' + this.state.redirect)

    if (this.state.redirect === 1) {
      this.props.history.push('/login')
    } else if (this.state.redirect === 2) {
      this.props.history.push('/register')
    }

    // Si l'utilisateur est connecté :
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

    // Sinon :
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column">
          <h2 className="text-center primary">Home</h2>
          <button value="login" className="button"
            onClick={this.login.bind(this)}>Login
        </button>
          <button value="SignUp" className="button"
            onClick={this.signUp.bind(this)}>SignUp
        </button>
        </div>
      </div>
    )
  }
}

export default Home
