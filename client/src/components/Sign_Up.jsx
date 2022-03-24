import React,{useState} from "react";
import { Link } from "react-router-dom";
import './css/Signup.css';
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:5000/api/auth/register";

const  Sign_Up = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [response, setResponse] = useState('');
    const [user, setUser] = useState({
        name: "", email: "", password: "", phone: "", address: ""
    });
    let name, value;
    const handleInput = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    

    const signUp = async(e) =>{
        e.preventDefault();
        alert("submited");
        const {name, email, password, phone, address}= user;
        axios
            .post(baseURL, {
                name, email, password, phone, address
            })
            .then((response) => {
                // setPost(response.data);
                console.log("*******************************************");
                console.log(response);
                console.log("*******************************************");
                console.log(response.data);
                alert("Registration Completed succesfully");
                history.push("/login");
            }).catch((error) => {
                console.log(error);
                // setError(error);
            });
        // const {name, email, password, phone, address}= user;
        // const res = await fetch("http://localhost:5000/api/auth/register",{
        //     "method": "POST",
        //     "headers": {
        //         "content-type": "application/json",
        //     },
        //     "body": JSON.stringify({
        //         name, email, password, phone, address
        //     })
        // }).then((response)=>{
        //     console.log(response);
        //     // setMsg(response);
        // }).catch((error) => {
        //     console.log(error);
        //     // setError(error);
        // })

        // const data = await res.JSON();
        // if(data.status === 500 || !data){
        //     window.alert("Invalid Registration");
        //     console.log("Invalid Registration");
        // }else if(data.status === 200){
        //     window.alert("Registration Successfull");
        //     console.log("Registration Successfull");
        //     history.push("/login");
        // }
        // axios.post(`localhost:5000/api/register`,( {
        //     name:name,
        //     email: email,
        //     password: password,
        //     phone:phone,
        //     address:address
        // })).then((response)=>{
        //     console.log(response);
        //     setMsg(response);
        // }),(error) => {
        //     console.log(error);
        //     setError(error);
        // }
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
                    <form onSubmit={signUp} method="POST">
                    <section className='copy'>
                        <h2>Sign Up Here</h2>
                        
                    </section>
                        <div className="input-container name">
                            <label  htmlFor="name">Enter Your Name
                            </label>
                            
                            <input type='text' name="name" value={user.name} onChange={handleInput} id='name' autoComplete='off'  
                            placeholder='Enter Your Name'></input>
                        </div>
                        
                        <div className="input-container email">
                            <label htmlFor="email">
                           Email
                            </label>
                            <input type='email' name='email' value={user.email} onChange={handleInput} id='email'
                         autoComplete='off'
                       
                             placeholder='Enter Your Email'></input>
                        </div>
                        <div className="input-container phone">
                            <label htmlFor="phone">
                            phone
                            </label>
                            <input type='phone' name='phone' id='phone'
                               autoComplete='off' value={user.phone} onChange={handleInput}
                      
                             placeholder='Enter Your phone'></input>
                        </div>
                        <div className="input-container adress">
                            <label htmlFor="adress">
                           Adress
                            </label>
                            <input type='adress' name='address' id='adress' 
                             autoComplete='off' value={user.address} onChange={handleInput}
                            
                            placeholder='Enter Your Adress'></input>
                        </div>
                        <div className="input-container password">
                            <label htmlFor="password">
                            password
                            </label>
                            <input type='password' name='password' id='password' 
                            autoComplete='off' value={user.password} onChange={handleInput}
                             placeholder='Enter Your password'>
                             </input>
              
                         </div>
                
                        
                        <button  className="signup-btn" type='submit' >
                        
                        Sign Up</button>
                    
                        <Link to='/login'> I already have an account</Link>
                       <p style={{padding:'8px 0px',textAlign: 'center',color:'red'}}>{error? error: ''}</p>
                       <p style={{padding:'8px 0px',textAlign: 'center',color:'green'}}>{msg? msg: ''}</p>
                    </form>
                </div>
               
                 
             </div>  
    </> 
           
         
 );
 }
export default Sign_Up; 