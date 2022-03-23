import React from 'react'
import image1 from '../images/pillow.jpeg';
import image2 from '../images/pillow4.jpeg';
import image3 from '../images/h3.jpeg';
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const {id, img, title, products} = props;
        let path="category/"+id;
    return (
        <>
            <div className='cat-card'>
                <div className='img-div'>
                    <img src={img} alt="first" width="100%" height="310px" />
                </div>
                <div className='dec-div'>
                    <h1 className='t-center'>{title}</h1>
                    <h2 className='t-center pb-3'>{products} Products</h2>
                    <Link className='view-probtn' to={path} style={{marginLeft: '33.5%'}} >View Products</Link>
                </div>
            </div>
        </>
    )
}
