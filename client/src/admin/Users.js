import React,{ useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:5000/api/users";
const Users = () => {
    const [customers, setCustomers] = useState('');
    useEffect(()=>{
        axios.get(baseURL).then((response) => {
            console.log("***************************************");
            console.log("***************************************");
            console.log("***************************************");
            console.log("***************************************");
            console.log(response);
            // setCustomers(response)
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
                    <tr>
                        <td>1</td>
                        <td>Shahwaiz</td>
                        <td>Shahwaiz@nagar.com</td>
                        <td>0346782829</td>
                        <td>District Loduran</td>
                        <td>12-11-22021</td>
                        <td>Active</td>
                        <td><button className='btns1' >Edit</button></td>
                        {/* <td><button className='btns2'>Delete</button></td> */}
                    </tr>
                    </tbody>
                </table>            
            </div>
        </div>
    </>
  )
}

export default Users