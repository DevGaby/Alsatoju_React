import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col">
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>  
        );
    }
}