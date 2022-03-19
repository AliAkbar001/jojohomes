import React from "react";
import {FaCartArrowDown  } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { BsCart3} from "react-icons/bs";
import "../Header/Hdesign.css";
 
const Header = () => {
    return(
<>
    <header className="Header">
        <div>
            <h1>
                <Link to="Bedsheets" className="logoo">
                 JoJoHome
                </Link>
            </h1>
        </div>
        <div className="Header-links">
           <ul>
               <li>
                   <Link to='/Sign_Up'> Sign_Up</Link>
               </li>
               <li>
                   <Link to='/'> Home</Link>
               </li>
               <li>
               <Link to='/Cart'><BsCart3 size='0.80cm' color='grey' /></Link>
               </li>
           </ul>
        </div>
    </header>
</>
    );
}
export default Header;