import React, { Fragment } from 'react';
import img from '../../asset/404_LoveOn.png'

const NotFound = () => (
   <Fragment>
     <img src= {img} alt="joystick" className="w-100 not-found"/>
    <button type="button" 
            className="button success">
    </button>  
   </Fragment>

)

export default NotFound;