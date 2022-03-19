import React from 'react';
import Bed_Sheets from '../Bed_Sheets';
import { Route,Switch } from 'react-router-dom';
import Cart from '../Cart';

const PagesR = (props) => {
   const {cartitems} =props;
   const {productitems}=props;
 
   const{handleAddProduct}=props;
   const {handleRemoveProduct}=props;
  return (
  <>
 
         <Switch>
             <Route path='/Bed_Sheets' exact>
             <Bed_Sheets productitems={productitems}
               handleAddProduct={handleAddProduct}/>
             </Route>
             
             <Route path='/cart' exact>
                <Cart 
                cartitems={cartitems} 
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct}/>
               
             </Route>
             </Switch>
</>
  );
}

export default PagesR;
