import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import {useState,useContext} from 'react';
// import {UserContext} from '../context/UserContext';
import './css/Signup.css';
const baseURL = "http://localhost:5000/api/auth/";



const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({email: "", password: ""});


    let name, value;
    const handleInput = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    
    const LoginFun = async (e) =>{
        console.log("Form submitted Succfully");
        alert("form submitted");
        e.preventDefault();
        // alert("submited");
        const {email, password}= user;
        axios.post(baseURL, {
            email, password
        })
        .then((response) => {
            console.log("*******************************************");
            console.log(response);
            console.log("*******************************************");
            console.log(response.data.accessToken);
            console.log(response.data);
            // alert(response.accessToken);
            localStorage.setItem('token',response.data.accessToken);
            localStorage.setItem('uid',response.data._id);
            alert("Logged in succfully");
            history.push("/");
        }).catch((error) => {
            console.log(error);
            // setError(error);
        });
    }


    return (
        <>            
            <div className="split-screen">
                <div className="left">
                    <section className="signup-form">
                        <h1 className="form-title">  </h1>
                    </section>
                </div>
                <div className='right'>
                    <form  onSubmit={LoginFun} method="POST">
                        <section className='copy'>
                            <h2>Login Here</h2>
                        </section>                                            
                        <div className="input-container email">
                            <label htmlFor="email">
                            Email
                            </label>
                            <input type='email' name='email' onChange={handleInput} value={user.email}  
                        
                                placeholder='Enter Your Email'></input>
                        </div> 
                        <div className="input-container password">
                            <label htmlFor="password">
                            password
                            </label>
                            <input type='password' name='password'  
                                value={user.password}
                                placeholder='Enter Your password' onChange={handleInput}>
                                </input>
                        </div>    
                        <button  className="signup-btn" type='submit'> Log In</button>
                        <Link to='/signup'> Not a member?</Link>    
                    </form>
                </div>                
            </div>
        </>                  
    );         
}
export default Login; 
