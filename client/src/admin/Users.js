import React,{ useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:5000/api/users/";
const Users = () => {
    const auth = localStorage.getItem('admintoken');
    const [customers, setCustomers] = useState('');
    useEffect(()=>{
        axios.get(baseURL, {headers: {token: "Bearer "+auth}}).then((response) => {
            console.log("***************************************");
            console.log("***************************************");
            console.log("***************************************");
            console.log("***************************************");
            console.log(response);
            setCustomers(response.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

  return (
    <>
        <div className="recent-sales box" style={{width: '100%'}}>
          <div className="title">Customers </div>
            <div className="sales-details">
                <table className='ptable'>
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Date of Joining</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        customers && customers.map((customer, index) =>{
                            const {name, email, phone, address, status, createdAt} = customer;
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{address}</td>
                                    <td>{createdAt}</td>
                                    <td>{status}</td>
                                    {/* <td><button className='btns1' >Edit</button></td> */}
                                </tr>
                            )
                        })
                    }
                    
                    </tbody>
                                    {/* <td><button className='btns2'>Delete</button></td> */}
                </table>            
            </div>
        </div>
    </>
  )
}

export default Users