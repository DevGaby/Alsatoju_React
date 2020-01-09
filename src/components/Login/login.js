import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column">
                    <h2>Login Page </h2>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="username"/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password"/>
                </div>
            </div>
        );
    }
}

export default Login;
