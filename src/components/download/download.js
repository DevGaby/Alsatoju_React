import React, { Component } from 'react';
import android from './../../asset/googlePlay.png';
import ios from './../../asset/appleStores.png';
import phone from './../../asset/smartphone.jpg';

export default class Download extends Component {
    render(){
        return (
            <div className="description d-flex flex-row p-2 m-2 text-justify">
            <div className="col">
                <h2> Rejoins nous...</h2>
                
                <p><i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </i> </p>
                <img className="card-img-top rounded mx-auto d-block " style={{ width: 350 }} src={phone} alt="logo android"/>    
                <div className="row text-center p-2">
                    <div className="col"> 
                        <img className="card-img-top" style={{ width: 200 }} src={android} alt="logo android"/>
                    </div>
                    <div className="col"> 
                        <img className="card-img-top" style={{ width: 200, height:60 }} src={ios} alt="logo ios"/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}