import React  from 'react';
import Header from './Front/Header/Header';

const Cart = ({cartitems,handleAddProduct,handleRemoveProduct} ) => {

  // const totalprice = cartitems.reduce((price,item) => 
  // price+item.quantity * item.price,0
  // );


  return (
    <>
       <Header/>
        <div className="cart-items">
          <div className="cart-items-header"> cartitems</div>
          {!cartitems?.length ? (
            <div className="cart-items-empty"> No items added in cart</div>
          ) 
           :null}
           { cartitems && cartitems.map((item) => ( 
            console.log(cartitems),
            <div key={item.id}>
           
           <div>
             <img className="cart-items-image"
                src={item.image}
                alt={item.Name}  />
                </div>
            
          
           
               <button className='cart-items-add' onClick={()=>handleAddProduct(item)}>+</button>
               <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
               <div className='cart-items-price'>{item.quantity}* ${item.price}</div>
          
          </div>
            ))}
            </div> 
          
                {/* <div className='cart-item-total-price-name'>
             Total Price
             <div> ${totalprice} </div>
                </div> */}

          {/* <div> */}
            {/* {cartitems && cartitems.map((item) => (
              console.log(cartitems),
            <div key={item.id}>
           
           <div>
             <img className="cart-items-image"
                src={item.image}
                alt={item.name}  />
                </div>
            
          
           
               <button className='cart-items-add' onClick={()=>handleAddProduct(item)}>+</button>
               <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
         
                <div className='cart-items-price'>{item.quantity}* ${item.price}</div>
          
          </div>
            ))}
            {/* </div>  */}
        

            
      </>
  );
}


export default Cart;
