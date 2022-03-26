import React, { useEffect, useState } from "react";
import Navbar from "./Nav/Navbar";

function Order_History() {
const [orderList, setOrderList] = useState(null);
const [productList, setProductList] = useState(null);

  useEffect(() => {
    const GetOrder = async () =>{
      const uID =  localStorage.getItem("uid") ?? null;
      console.log('UID',uID)
      if(uID !== null){
        const userOrder = await fetch('http://localhost:5000/api/orders/find/' + uID)
        const data = await userOrder.json()
        console.log('data ', data )
        if(data.status === 200 ){
          handleProduct()
          if(data.orders.length === 0){
            setOrderList(null)
          }else{
            setOrderList(data.orders)
          }
        }
      }
    }
    GetOrder()
  }, [])
  
  const handleProduct =  async() => {
      const getProduct = await fetch('http://localhost:5000/api/products/all_find')
      const data = await getProduct.json()
      if(data){
        console.log('Products---',data)
        setProductList(data)
      }
  }
    return (
        <>    
        <Navbar/>
        <div className="order-list">
        {orderList !== null ? orderList.map(order =>
              <div className="order-content" key={order._id}>
                <h3>Order Id: <span>{order._id}</span></h3>
                <h3>Status: <span>{order.status}</span></h3>
                <h3>Products: </h3>
                {productList !== null && order.products.map(e => (
                  productList.map(f => e._id === f._id && 
                  <p>Name: {f.title}<br/>Amount: {f.price}<br/>Quantity: {e.order_quantity}</p>
                )))}
                <h3>Total Amount: <span>{order.amount}</span></h3>
              </div>
            ):<div className="order-content">
                <h3>No Order Placed</h3>
              </div>}
            </div> 
            
        </> 
     );
    }
export default Order_History; 
