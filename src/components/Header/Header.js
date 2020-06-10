import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from './../../asset/logo.jpeg'
import Button from 'react-bootstrap/Button'
import * as constant from '../../utils/constant'

export default class Header extends Component {
  constructor (props) {
    super()
    this.state = {
      token: sessionStorage.getItem('token')
    }
  }

  onClick = async () => {
    sessionStorage.removeItem(constant.TOKEN)
  }

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"> <img className="w-50" src={logo} alt="logo" /> </Link>
        <button className="navbar-toggler">
          <span className="navbar-toggle-icon" ></span>
        </button>
        <div className="collapse navbar-collapse w-75">
          <ul className="navbar-nav ml-auto p-5">

            <li className="nav-item active p-2">
              {
                this.state.token
                  ? <Link to="/login"><Button type="" variant="outline-danger" size="sm" onClick={this.onClick()} >Logout</Button></Link>
                  : <Link to="/login"><Button type="" variant="outline-primary" size="sm">Login</Button></Link>
              }
            </li>
            <li className="nav-item active p-2">
              <Link to="/coaching">
                <Button type="" variant="outline-primary" size="sm">
                  Coaching
                </Button>
              </Link>

            </li>
            <li className="nav-item active p-2">
              <Link to="/stories">
                <Button type="" variant="outline-primary" size="sm">
                  Stories
                </Button>
              </Link>
            </li>
            <li className="nav-item active p-2">
              <Link to="/about">
                <Button type="" variant="outline-primary" size="sm">
                  A propos
                </Button>
              </Link>
            </li>
            <li className="nav-item active p-2">
              <Link to="/contact">
                <Button type="" variant="outline-primary" size="sm">
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}