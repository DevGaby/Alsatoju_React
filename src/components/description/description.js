import React, { Component } from 'react';
import logo from './../../asset/manette1.png';
import android from './../../asset/googlePlay.png';
import ios from './../../asset/appleStores.png';

export default class Description extends Component {
    render(){
        return (
        <div className="description d-flex flex-row p-2 text-justify">
            <div className="col-8">
                <div className="card"><h4>LOVE ON</h4>
                    <div className="p-3 m-43"> 
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        </p>
                    </div>
                </div>
                <div className="row text-center p-2">
                <div className="col">
                        <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps?hl=fr">
                            <img className="card-img-top" src={android} alt="logo android" style={{ width: 200 }}/>
                        </a>  
                    </div>
                    <div className="col">
                        <a target='_blank' rel="noopener noreferrer" href='https://www.apple.com/fr/ios/app-store/'>
                            <img className="card-img-top"  src={ios} alt="logo android" style={{ width: 200 }}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card"> 
                    <img className="card-img-top" src={ logo } alt="logo"/>
                </div> 
            </div>
        </div>
        );
    }
}