import React from 'react';
import {FaCartArrowDown ,FaInstagramSquare,FaBars,FaSearch,FaAngleDown, FaAlignLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import  {useState} from 'react';
import Dropdown from './Dropdown';


function Sidenav(){
     const [click,setClick]=useState(false)
     const[dropdown,setDropdown]=useState(false);
     const handleClick =() => setClick(!click);
     const closeMobileMenu =() => setClick(false)
     ;
     const onMouseEnter=() => setClick(false)
    if(window.innerWidth<960)
    {
        setDropdown(false)}
        else{
            setDropdown(true)
        }
    return(
<>
        <nav>
       
                              <div className='menu-icons' onClick={handleClick}>
                            
                                 <i className={click? 'fas fa-times':'fas fa-align-left'}>Categories</i>
                                 </div>
                                 
                                <ul className={click? 'nav-menu active':'nav-menu'}>
                               
                            <li className='nav-item'>
                            <Link to='/Product' className='nav-links' onClick={closeMobileMenu}>
                                what's in jojo<i className='fas fa-caret-down'/>
                            </Link>
                            {dropdown && <Dropdown/>}
                             </li>
                             <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                               
                            </Link>
                            { dropdown && <Dropdown/>}
                             </li>
                            
                           </ul>
             </nav>
</>
    );
}
export default Sidenav;