import React, { Component } from 'react';

export default class Contact extends Component {
    render(){
        return (
        <div className="description d-flex flex-row p-2 m-2 text-justify">
            <div className="col">
                <h2> Contacter nous...</h2>
                <p><i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </i> </p>  
                <form className="pt-2">
                    <div className="row p-2">
                        <div className="col">
                            <input type="text" className="form-control" name="identity" placeholder="Nom Prénom"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="mail" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col">
                            <select className="form-control" name="subject">
                                <option>Choissisez...</option>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col"> <textarea className="form-control" name="message" rows="9" cols="60"> Votre message... </textarea> </div> 
                    </div>
                    <div className="row p-2">
                        <div className="col"> <button className="col btn btn-outline-success btn-lg content-center" type="submit">ENVOYER</button> </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}