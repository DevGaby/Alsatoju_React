import React, { Component } from 'react';
import allStories from '../../mockStories';


export default class StoryDetail extends Component {

    render(){
        let id = this.props.match.params.id;

        let storie = allStories.find(storie => storie.id === id)
     
        
        return (
            
            <div> {storie.city} <br/>
             {storie.content} <br/>
             {storie.date} <br/>


            </div>
            ) 
    }
}