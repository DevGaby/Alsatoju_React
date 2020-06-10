import React, { Component, Fragment }from 'react';
import { Redirect, Link } from 'react-router-dom';

import allStories from '../../mockStories';

export default class StoryList extends Component {
  
        state = {
            stories : allStories,
            goToDetail: false
        }

    handleClick = (event) => {
    event.preventDefault()
    this.setState({ goToDetail : true})
    }

    render(){
        if(this.state.goToDetail){
            return <Redirect push to={'/story/:cardId'}></Redirect>
        }

        //const cards = Object.keys(this.state.stories).map(key => <Story key details = {this.state.stories[key]} />)

        return (
        <Fragment>
        <div className="row p-2"> <h4 className="text-center ">STORIES</h4> </div>
            <div className="container-fluid d-inline-flex p-2">
            {
                this.state.stories.map((storie, index) =>(
                    <div className="row" key={index}>
                    <div className="card">
                        <img className="card-img-top" src={require('../../asset/'+storie.image)} width="50px" height="45px" alt="name"/>
                        <div className="card-body">
                            <h5 className="card-title">{storie.title}</h5>
                            <p className="card-text">{storie.content}</p>
                            <Link to={'/story/'+storie.id}> 
                                <input className="btn btn-primary" value="DETAIL" onClick={this.props.downloadList} /> 
                            </Link>
                        </div>
                    </div>
                </div>
                ))
            }      
            </div>  
        </Fragment>    
        );
    }
}