import React, { Component } from 'react';
import { Description, Coaching, Contact, Download } from '..';

export default class Home extends Component{
    render(){
        return(
            <>
                <div className="container-fluid d-flex w-100"> 
                    <div className="row">
                        <div className="col-md-6"> <Description/></div>
                        <div className="col-md-6"><Coaching /></div>
                        <div className="col-md-6">  <Contact /></div>
                        <div className="col-md-6">  <Download /> </div>
                    </div>
                </div>
            </>

        )
    }
}