import React from 'react';
import {Link} from 'react-router-dom';

function Box(props) {
    return (
        <div className='p-box'>
        <img src={props.image} alt='product-image'/>
        <p>{props.name}</p>
        <a className='price' href='#'>{props.TotalItem}</a>
    <Link className='buy-btn' to={props.Link}> Shop Now</Link>
       
        </div>

    );
    
}

export default Box;
