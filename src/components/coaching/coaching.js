import React, { Component } from 'react';
import couple from './../../asset/couple2.png';
export default class Coaching extends Component {
    render(){
        return (
            <div className="description d-flex flex-row p-2 m-2 text-justify">
                <div className="col-4">
                <div className="card" > 
                    <img className="card-img-top" style={{ width: 350,height: 500}} src={ couple } alt="logo"/>
                </div> 
                </div>
                <div className="col-8">
                    <div className="card p-3"> 
                    <h2> COACHING </h2>
                    <h4> Besoin d'un coup de pouce? </h4>
                        <div className="p-3 m-43"> 
                            <ul className=""> 
                                <li>Cras justo odio</li>
                                <li>Dapibus ac facilisis in</li>
                                <li>Morbi leo risus</li>
                                <li>Porta ac consectetur ac</li>
                                <li>Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card"> <button className="btn btn-outline-success btn-lg"> C'est içi</button></div>
                </div>
            </div>
            );
    }
}