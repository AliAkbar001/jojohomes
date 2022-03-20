import React, { useState } from 'react';
import {FaCartArrowDown ,FaHeart, FaSearch ,RiAdminLine} from 'react-icons/fa';
import {Link,useHistory} from 'react-router-dom';
import SliderImage from '../SliderImage';
import Product from '../Product';
import Footer from '../Footer';
import { BsPersonCircle } from "react-icons/bs";
import { BsCart3} from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsSearch} from "react-icons/bs";



function Nav()  {
     const [loggedIn,setLoggedIn] = useState(false);
     const history = useHistory();
     const auth = localStorage.getItem('token');
//     if(localStorage.getItem('token')){
//          setLoggedIn(true);
//     }///;/..
//     alert(loggedIn)
     const logout = () => {
           localStorage.clear();
           history.push("/")
     }

    return (
       <>
            <header className='header'>
            <div className='container'>
            <div className='row v-center'>
                <div className='header-item item-left'>
                <div className='logo'>
               
                <Link to="/" className="logoo">
                <h3> JoJoHome</h3>
                </Link>
               </div>
                </div>
                <div className='header-item item-center'>
                    <nav className='menu'>
                        <ul className='main-menu'>
                          
                           <li>
                                <Link to='/'> Home </Link>
                           </li>
                           <li>
                                <Link to='/'> Shop </Link>
                           </li>
                           <li>
                                <Link to='/'> About</Link>
                           </li>
                           <li>
                                <Link to='/'> Services </Link>
                           </li>
                           {
                                auth?(<li>
                                        <Link to='/' onClick={logout}> Logout</Link>
                                   </li>): (<><li>
                                <Link to='Login'> Sign In</Link>
                           </li>
                           <li>
                                <Link to='Sign_Up'> Sign_Up</Link>
                           </li></>)
                           } 
                           
                            
                        </ul>
                    </nav>
                </div>
                <div className='header2-item item-right'>
             
                <Link><BsSearch size='0.80cm' color='grey' /></Link>
                    <Link to='/Cart'><BsCart3 size='0.80cm' color='grey' /></Link>
                    <Link><BsHeart size='0.80cm' color='grey' /></Link>
                    <Link to='/Dashboard'><BsPersonCircle size='0.80cm' color='grey' /></Link>
                   
                    
                </div>
               
                
                </div>
        </div>
        
        </header> 
              

        <SliderImage/>


         <Product/>
         <Footer/>

          <br></br>
     
          
   </> 
          
        
    );
    
    }

export default Nav; 