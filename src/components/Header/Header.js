import React, { Component} from 'react';
import { Link } from "react-router-dom";
import logo from './../../asset/logo.jpeg';

export default class Header extends Component {
    render(){
        return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"> <img className="w-50" src={ logo } alt="logo"/> </Link>
            <button className="navbar-toggler">
                <span className="navbar-toggle-icon" ></span>
            </button>
            <div className="collapse navbar-collapse w-75">
            <ul className="navbar-nav ml-auto p-5">
                <li className="nav-item active p-2"> 
                    <Link to="/login"> Connexion </Link>
                </li>
                <li className="nav-item active p-2"> 
                    <Link to="/coaching"> Coaching </Link>
                </li>
                <li className="nav-item active p-2"> 
                    <Link to="/stories"> Stories </Link>
                </li>
                <li className="nav-item active p-2"> 
                    <Link to="/about"> A propos </Link>
                </li>
                <li className="nav-item active p-2"> 
                    <Link to="/contact"> Contact </Link>
                </li>
            </ul>
            </div>
        </header>
        );
    } 
}