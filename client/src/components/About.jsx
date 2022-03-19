import React from "react";
import Nav from './Nav/Nav';
import {FaCartArrowDown ,FaInstagramSquare,FaBars,FaHome,FaSearch,FaAngleDown } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function About() {

    return (
        <>
             <header className='header2'>
             <div className='container'>
             <div className='row v-center'>
                 <div className='header2-item item-left'>
                 JOJO<b>H</b>OME
                 </div>
                 <div className='header2-item item-center'>
                     <nav className='navbar'>
                         <ul className='navbar-nav'>
                             <li>
                                 <Link to='/'>Home
                                 </Link>
                             </li>
                             <li className='menu-item-has-children'>
                                  <Link>Products<FaAngleDown/></Link>
                                 
                             </li>
                             <li>
                                 <Link>Order History
                                 </Link>
                             </li>                           
                             <li>
                                 <Link>Contact
                                 </Link>
                             </li>    
                         </ul>
                     </nav>
                 </div>
                 <div className='header2-item item-right'>
                 
                     <Link><FaInstagramSquare/></Link>
                     <Link><FaCartArrowDown/></Link>
                 </div>
                
                 
                 </div>
         </div>
         
         </header>
          <h2>this is about page</h2>
    </> 
           
         
     );
    }
export default About; 
