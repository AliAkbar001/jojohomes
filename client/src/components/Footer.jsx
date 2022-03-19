import React from 'react';
import {FaCartArrowDown ,FaInstagramSquare,FaFacebookSquare,FaTwitterSquare,FaWhatsappSquare, FaAlignLeft } from 'react-icons/fa';

export default function Footer() {
  return(<div>
<footer>
              <div className='content'>
              <div className='top'>
                  <div className='logo-details'>
                      <i className='fas fa-slack'></i>
                     <span className='logo_name'>JojoHome</span>
                  </div>
                  <div className='media-icons'>
                     
                      <FaInstagramSquare  className='b' size='0.9cm' color='#E1306C' />
                      <FaFacebookSquare className='c' size='0.9cm' color='#426782'/>
                      <FaTwitterSquare className='d' size='0.9cm' color='1DA1F2'/>
                  </div>
              </div>
             
 <div className='link-boxes'>
 <ul className='box'>
 <li className= 'link-name'>JojoHome</li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
 </ul>
 

 <ul className='box'>
 <li className='link-name'>JojoHome</li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
 </ul>

 <ul className='box'>
 <li className='link-name'>JojoHome</li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
 </ul>
 
 <ul className='box'>
 <li className='link-name'>JojoHome</li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
     <li><a href='/Home'>Home</a></li>
 </ul>
 </div>
 
              </div>
          </footer>
    </div>

  ) ;
}

  
        