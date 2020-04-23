import React, { Component }from 'react';
import woman from './../../asset/woman.jpg';
import woman2 from './../../asset/woman2.jpg';
import man from './../../asset/man.jpg';
import man2 from './../../asset/man2.jpg';


export default class ListStories extends Component {
    render(){
        return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                <li data-target="#carouselExampleControls" data-slide-to="3"></li>
            </ol>
           <div className="carousel-inner"> <h4>STORIES</h4> 
                <div className="carousel-item active">
                    <img className="d-block w-100" style={{  height:500 }} src={ woman } alt="woman"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Title</h5>
                        <p>Bla bla bla ...</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" style={{  height:500 }} src={ man2 } alt="woman"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Title</h5>
                        <p>Bla bla bla ...</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" style={{  height:500 }} src={ woman2 } alt="woman"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Title</h5>
                        <p>Bla bla bla ...</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" style={{  height:500 }} src={ man } alt="woman"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Title</h5>
                        <p>Bla bla bla ...</p>
                    </div>
                </div>
           </div> 
      
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Précédent</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Suivant</span>
            </a>
        </div>  
        );
    }
}