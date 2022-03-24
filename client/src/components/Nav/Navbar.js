import React, { useState, useEffect } from "react";
import "./navbar.css";
import { BsHeart, BsCart3, BsPersonCircle} from "react-icons/bs";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSwitchAccount } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

import { Link, NavLink, useHistory } from "react-router-dom";
const baseURL = "http://localhost:5000/api/categories";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [display, setDisplay] = useState('none');
  const [categories,setCategories] = useState();
  
  const auth = localStorage.getItem("token");

  const history = useHistory();

    useEffect(()=>{
        axios.get(baseURL).then((response)=>{
            console.log(response.data);
            setCategories(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    const logout = () => {
      localStorage.clear();
      history.push('/login');
    }


  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>J</span>O
            <span>J</span>O Home
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li> */}
            <li>
              <NavLink to="/dashboard"><BsPersonCircle size='1.30cm' color='lightgrey' /></NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                {/* <MdSwitchAccount size='1.30cm' color='grey' /> */}
                <BsCart3 size='1.30cm' color='lightgrey' />
              </NavLink>
            </li>
            {
              auth?(
                <li>
                  <NavLink to="" onClick={logout}><BiLogOutCircle size='1.30cm' color='lightgrey' /></NavLink>
                </li>
              ):(
                <>
                  <li>
                    <NavLink to="/signup"><MdSwitchAccount size='1.30cm' color='lightgrey' /></NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"><BiLogInCircle size='1.30cm' color='lightgrey' /></NavLink>
                  </li>
                </>
              )
            }
            
            <li>
              <NavLink to="" onClick={() => setDisplay('block')} >
                  <GiHamburgerMenu color="lightgray" size='1.30cm'  />
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/login"><BsCart3 size='1.30cm' style={{marginLeft: '15px', marginRight: '15px'}} color='grey' /></NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/login"><BsPersonCircle size='1.30cm' color='grey' /></NavLink>
            </li> */}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <BsHeart size='1.30cm' color='grey' />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <BsCart3 size='1.30cm' style={{marginLeft: '15px', marginRight: '15px'}} color='grey' />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <BsPersonCircle size='1.30cm' color='grey' />
              </a>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
      <div className="side-div" style={{display: display}}>
        <button onClick={() => setDisplay('none')} style={{outline: 'none',border: 'none',marginLeft: '43%', marginTop: '20px', backgroundColor: 'inherit'}}><HiMenuAlt3 size='1.50cm' /></button>
        <h2 className="t-center mt-4">Categories</h2>
        {
          categories && categories.map((element, index) => {
            const {_id, title} =element;
            return (
              <Link to={"/category/"+_id} className="cat-link" key={index} > {title}</Link>
            )
          })
        }
      </div>
    </>
  );
};

export default Navbar;