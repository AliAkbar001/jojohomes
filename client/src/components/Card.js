import React from 'react'
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const {id, img, title, products} = props;
        let path="category/"+id;
    return (
        <>
            <div className='cat-card'>
                <div className='img-div'>
                    <img src={"./uploads/categories/"+img} alt="first" width="100%" height="310px" />
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
