import React, {useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import Navbar from './components/Nav/Navbar';
import { useCookies } from 'react-cookie';
import { CartContext } from './components/cart/cart_Context';
const baseURL = "http://localhost:5000/api/carts";

const CategoryProducts = () => {
    const {userCart, setUserCart} = useContext(CartContext);
    const [products, setProducts] = useState();
    const [viewProduct, setViewProduct] = useState(null);
    const [modalDisplay, setModalDisplay] = useState({display: 'none'});
    const { id } = useParams();
    const auth = localStorage.getItem('token');

    // alert(auth);
    console.log(auth);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/products/category/"+id).then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const handleCart = async(item) => {
        if(userCart === null){
           return setUserCart([{...item,order_quantity:1}])
        }else{
            var check = true;
            var cartItems = [];
            await userCart.map(e => {
                if(e._id === item._id){
                    if(e.order_quantity < e.quantity){
                        cartItems = [...cartItems,{...e, order_quantity:e.order_quantity+1}]
                    }else{
                        alert('Product out of stock')
                        cartItems = [...cartItems,{...e}]
                    }
                    check = false
                }else{
                    cartItems = [...cartItems,{...e}]
                }
            });
            check && (cartItems = [...userCart,{...item,order_quantity:1}])
            localStorage.setItem("user-cart", JSON.stringify(cartItems));
           return setUserCart(cartItems)
        }
    }
   
    const handleViewProduct = (item) => {
        if(item === null){
            setViewProduct(null)
            setModalDisplay({display:'none'})
        }else{
            setViewProduct(item)
            setModalDisplay({display:'block'})
        } 
    }
  return (
    <>
    <Navbar />
    <div style={{padding: '35px 1%'}}>
        {products && products.map((element, index) => {
            
            return (
                <>
                 <div className='pro-card'>
                    <div className='img-div'>
                        <img src={"../uploads/products/"+element.img} alt="first" width="100%" height="310px" />
                    </div>
                    <div className='dec-div'>
                        <h2 className='t-center'>{element.title}</h2>
                        <h5 className='t-center pb-3'>Color : {element.color}</h5>
                        <h5 className='t-center pb-3'>Size : {element.size}</h5>
                        <h5 className='t-center pb-3'>Price : {element.price}</h5>
                        <button className='view-probtn' to="/" style={{marginLeft: '33.5%'}} onClick={()=>handleViewProduct(element)}>View Products</button>
                        <button className='view-probtn mt-3' onClick={() => handleCart(element)} style={{marginLeft: '36.5%',border: 'none'}} >Add to Cart</button>
                    </div>
                </div>
                {viewProduct !== null && 
                    <div style={modalDisplay} class="modal">
                        <div class="modal-content">
                            <span class="close" onClick={()=>handleViewProduct(null)}>&times;</span>
                            <div className='product-modal'>
                                <div>
                                    <img src={"../uploads/products/" + viewProduct.img} alt = {viewProduct.img}/>
                                </div>
                                <div>
                                    <h2>{viewProduct.title}</h2>
                                    <p>{viewProduct.desc}</p>
                                    <h5>Color : {viewProduct.color}</h5>
                                    <h5>Size : {viewProduct.size}</h5>
                                    <h5>Price : {viewProduct.price}</h5>
                                    <button className='view-probtn mt-3' onClick={() => handleCart(viewProduct)} style={{marginLeft: '36.5%',border: 'none'}} >Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                } 
            </>
            )
        })}
    </div>
    </>
  )
}

export default CategoryProducts