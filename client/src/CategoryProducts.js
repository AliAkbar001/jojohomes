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

    // const addToCart = (prod) => {
    //     const userId = localStorage.getItem('uid');
    //     const cate = localStorage.getItem('category');
    //     if(cate){
    //         alert("category found");
    //     }
    //     else{
    //         alert("colud not found category");
    //         alert(auth);
    //         const data={
    //             userId: userId,
    //             products: [
    //                 {
    //                     productId: prod._id,
    //                     quantity: 1,
    //                 },
    //             ],
    //             status: 'incart'
    //         };
    //         axios.post("http://localhost:5000/api/carts",{ 
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 "token": `Bearer ${auth}`,
    //             },
    //         },data).then((response) => {
    //             console.log(response);
    //             alert('Added to Cart Successfully');
    //             localStorage.setItem('category',response.data._id);
    //             alert("Add to cart ID : ",response.data._id);
    //         }).catch((error) => {
    //             alert(error);
    //             console.log(error);
    //         })
    //     }
    // }
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
                        <Link className='view-probtn' to="/" style={{marginLeft: '33.5%'}} >View Products</Link>
                        <button className='view-probtn mt-3' onClick={() => handleCart(element)} style={{marginLeft: '36.5%',border: 'none'}} >Add to Cart</button>
                    </div>
                </div>
            </>
            )
        })}
    </div>
    {/* <div className="p-4" style={{height: '35px',float:'none'}}>kjkjkjj</div> */}
    {/* <Footer /> */}
    </>
  )
}

export default CategoryProducts