import React, { Component } from 'react';
import logo from './../../asset/logo.jpeg';

// import { Login } from './login';
// import { Register } from './register';

export default class Home extends Component {
    render() {
        return (
        <div className="container">
            <div className="card">
                <img className="center w-50 card-img-top" src={ logo } alt="logo"/>
                <div class="card-body">
                    <div className="row">
                        <div className="col">
                        <h5 class="card-title">CONNEXION</h5>
                        <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="mailInput" placeholder="Email"></input>
                                </div>   
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" placeholder="Mot de passe"></input>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="connectInput"></input>
                                    <label class="form-check-label" for="exampleCheck1"> Restez connecté</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Connection</button>
                        </form>
                        </div>
                        <div className="col">
                        <h5 class="card-title">INSCRIPTION</h5>
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
                                <button type="submit" className="btn btn-success">Inscription</button>
                            </form> 
                        </div>
                    </div>  
                </div>
            </div>
        </div>    
        );
    }
}