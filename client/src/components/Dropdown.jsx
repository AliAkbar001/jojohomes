import React from 'react';
import {FaCartArrowDown ,FaInstagramSquare,FaBars,FaSearch,FaAngleDown, FaAlignLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import  {useState} from 'react';
import { MenuItems } from './MenuItems';
function Dropdown()
{  const [click,setClick]=useState(false)

    const handleClick =() => setClick(!click); 
    return(
<>
<ul onClick={handleClick}
className={click ? 'dropdown-menu clicked' :'dropdown-menu'}>
    {MenuItems.map((MenuItems,index)=> {
        return(
            <li key={index}>
                <Link className={MenuItems.cName} to={MenuItems.path} onClick={() =>
                setClick(false)}>

                    {MenuItems.title}
                </Link>
            </li>
        );
    })}
</ul>

</>
    );
}
export default Dropdown;