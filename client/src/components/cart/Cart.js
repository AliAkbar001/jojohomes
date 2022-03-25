import React, { useContext, useState } from 'react'
import './cart.css';
import { CartContext } from './cart_Context';

const Cart = () => {
    var totalAmount = 0;
    const {userCart, setUserCart} = useContext(CartContext);
    
    const handleRemoveCartItem = (e) => {
        const removeIndex = userCart.findIndex( item => item._id === e._id )
        setUserCart(userCart.splice( removeIndex, 1 )) 
        userCart.length === 0 && setUserCart(null)
        localStorage.setItem("user-cart", JSON.stringify(userCart))
    }

    const handleQuantity = async (e) => {
        const name = e.target.name
        const value = e.target.value
        var cartItems = [];

        await userCart.map(item => {
            if(item._id === name){
                if(value <= item.quantity){
                    cartItems = [...cartItems,{...item, order_quantity:value}]
                }else{
                    cartItems = [...cartItems,{...item, order_quantity:value-1}]
                    alert('Product out of stock')
                }
            }else{
                cartItems = [...cartItems,{...item}]
            }
        });
        localStorage.setItem("user-cart", JSON.stringify(cartItems));
        setUserCart(cartItems)
    }

    const handleCheckout = async() =>{
        console.log(userCart)
        setUserCart(null)
        localStorage.setItem("user-cart", null)
    }
  return (
    <>
        <div className="wrapper">
            <h1>Shopping Cart</h1>
            <div className="project">
                <div className="shop">
                    {userCart !== null && userCart.map(item => 
                    <div className="box">
                        <img src={"../uploads/products/" + item.img} alt='display-img' />
                        <div className="content">
                            <h3>{item.title}</h3>
                            <h4>Price: $ {item.price}</h4>
                            <p className="unit">Quantity: <input type="number" name = {item._id} value={item.order_quantity} onChange={handleQuantity} min='1'/></p>
                            <p className="btn-area" onClick={()=>handleRemoveCartItem(item._id)}><i aria-hidden="true" className="fa fa-trash"></i> <span className="btn2">Remove</span></p>
                        </div>
                    </div>
                    )}
                </div> 
                <div className="right-bar">
                    <p><span>Subtotal</span> <span>$120</span></p>
                    <hr />
                    <p><span>Tax (5%)</span> <span>$6</span></p>
                    <hr />
                    <p><span>Shipping</span> <span>$15</span></p>
                    <hr />
                    <p><span>Total</span>
                   <span style={{display:"none"}}> {userCart !== null && userCart.map(item => totalAmount = totalAmount + (item.price*item.order_quantity))}</span>
                    <span>$ {totalAmount}</span>
                    </p>
                    <a href="#" onClick={handleCheckout}><i className="fa fa-shopping-cart"></i>Checkout</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart