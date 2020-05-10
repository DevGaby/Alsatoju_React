import React, { Component } from 'react';
import logo from './../../asset/logo.jpeg';

export default class Register extends Component {
    render() {
        return (
        <div className="container">
            <div>
                <img className="w-25" src={ logo } alt="logo"/>
            </div>
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" className="form-control" id="lastnameInput" placeholder="Nom"></input>
                        </div>
                        <div className="form-group">
                            <label>Prénom</label>
                            <input type="text" className="form-control" id="firstnameInput" placeholder="Prénom"></input>
                        </div>
                        <div className="form-group">
                            <label>Téléphone</label>
                            <input type="text" className="form-control" id="phoneInput" placeholder="Téléphone"></input>
                        </div>  
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="mailInput" placeholder="Email"></input>
                        </div>   
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="passwordInput" placeholder="Mot de passe"></input>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="connectInput"></input>
                            <label class="form-check-label" for="exampleCheck1"> Restez connecté</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>  
        );
    }
}