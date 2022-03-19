import React from 'react';
import Header from './Front/Header/Header';
import Nav from './Nav/Nav';
import './css/products_b.css';

 const Bed_Sheets=(props) =>{
    //  console
    
     const data  = props.productitems;
     
 const {handleAddProduct}=props;
     return(
         <> 
      <Header/> 
            <div className='products1'>
                {data.map((productitem) =>(
                    console.log(productitem.price), 
             <div className='card1'>
               <div>
                   <img className='products1-image' 
                    src={productitem.image}
                    alt={productitem.price}/>
                
                    </div>

                    <div>

                   <h3 className='products1-name'>{productitem.Name}

                   </h3>
                   </div>
                    <div>
                    <h3 className='products1-price'>${productitem.price}


                   </h3>
                   </div>
                  
                  <button className='products1-add-button' 
                  onClick={() => handleAddProduct(productitem)}> Add To Cart</button>
                  {/* <div>
                  <button className='products1_view'> view product</button>
                  
                  </div>*/}
                  
               </div>
               
                    
               
               ))}  
          </div>
         </>
     );
     
 };
 export default Bed_Sheets;