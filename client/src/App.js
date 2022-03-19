import './App.css';
import React, { useState } from 'react';
import Product from './components/Product';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Order_History from './components/Order_History';
import Login from './components/Login';
import Sign_Up from './components/Sign_Up';
import Pillow_Covers from './components/Pillow_Covers';
import Sofa_Covers from './components/Sofa_Covers';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Front/Header/Header';
import PagesR from './components/Routes/PagesR';
import './index.css';
import data from './components/Back/Data/Data';
import Cart from './components/Cart';
import Dashboard from './Dashboard';
import Matress_Protectors from './components/Matress_Protectors';
import Admin from './admin/Admin';
import AdminProducts from './admin/AdminProducts';
import AdminLogin from './admin/AdminLogin';
import AdminPageUsers from './admin/AdminPageUsers';
// import { useContext } from 'react'
// import { BrowserRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { UserContext } from './context/UserContext';


const App = () => {

  const { productitems } = data;
  
  const [cartitems, setCartItems] = useState([]);
  // const { user } = useContext(UserContext);
  // const History = useHistory();
  const handleAddProduct = (product) => {
  //  console.log(product);
     const ProductExist = cartitems.find((item) => item.id === product.id)
    //  console.log(ProductExist);
    //  setCartItems(ProductExist);
    if (ProductExist) {
      setCartItems(
      
         cartitems.map((item )=> item.id === product.id ? 
        {...ProductExist ,quantity:ProductExist.quantity +1}:item)
      )
    }
    else {
      setCartItems([...cartitems,{...product,quantity:1}])
    }
  }
  const handleRemoveProduct = (product) => {
    const ProductExist = cartitems && cartitems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(
        cartitems.filter((item) => item.id !== product.id)
        );
    }
    else {
      setCartItems(
       cartitems && cartitems.map((item) => item.id === product.id ?
          { ...ProductExist, quantity: ProductExist.quantity - 1 }
          : item)
      );
    }
  }
  
  return (
    <>
      {/*<About/>
    <Home/>*/}
      {/* <BrowserRouter> */}

        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin/login' component={AdminLogin} />
          <Route exact path='/admin/products' component={AdminProducts} />
          <Route exact path='/admin/users' component={AdminPageUsers} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Order_History' component={Order_History} />
          <Route exact path='/Product' component={Product} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/Cart' component={Cart} />
          <Route exact path='/Pillow_Covers' component={Pillow_Covers} />
          <Route exact path='/Sofa_Covers' component={Sofa_Covers} />
          <Route exact path='/Sofa_Covers' component={Matress_Protectors} />
          <Route exact path='/Header' component={Header} />
          <Route path="/Login" component={Login} ></Route>
          <Route path="/Sign_Up" component={Sign_Up}/>
          <Router>
            <Route exact path='/Bed_Sheets' >
              <PagesR productitems={productitems}
                cartitems={cartitems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            </Route>
         
          </Router>

        </Switch>
        {/* <Switch>
          {user && <Route path="/" element={<Home />} />}
          {!user && (
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="/Sign_Up" element={<Sign_Up/>} />
            </>
          )}
          <Route path="*" element={<History to={user ? '/' : '/Login'} />} />
        </Switch>
      </BrowserRouter> */}
      { /*<Header/>
<About/>*/}

    </>
  );

}

export default App;
