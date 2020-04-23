import React, { Component } from 'react';
import logo from './../../asset/logo.jpeg';

export default class Header extends Component {
    render(){
        return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <img className="w-25" src={ logo } alt="logo"/>
            <button className="navbar-toggler">
                <span className="navbar-toggle-icon" ></span>
            </button>
            <div className="collapse navbar-collapse w-75">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active"> 
                    <a className="nav-link" href="/"> Connexion </a>
                </li>
                <li className="nav-item active"> 
                    <a className="nav-link" href="/"> Coaching </a>
                </li>
                <li className="nav-item active"> 
                    <a className="nav-link" href="/"> Stories </a>
                </li>
                <li className="nav-item active"> 
                    <a className="nav-link" href="/"> A propos </a>
                </li>
                <li className="nav-item active"> 
                    <a className="nav-link" href="/"> Contact </a>
                </li>
            </ul>

            </div>
        </header>
    );
}
}