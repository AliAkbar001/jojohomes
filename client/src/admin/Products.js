import React, { useState } from 'react'

const Products = () => {
  const [display, setDisplay] = useState('none');
  
  
  return (
    <>
        <div className="recent-sales box" style={{width: '100%'}}>
          <div className="title">Products <button onClick={() => setDisplay('block')} className='add-pbtn'>Add Product</button></div>
          <div className="sales-details">
          <table className='ptable'>
            <thead>
              <tr>
              <th>Sr</th>
              <th>Title</th>
              <th>Category</th>
              <th>Size</th>
              <th>Color</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bedseets</td>
                <td>Bedseets</td>
                <td>Large</td>
                <td>Pink</td>
                <td>1500</td>
                <td>200</td>
                <td>img1.jpg</td>
                <td><button className='btns1' >Edit</button></td>
                <td><button className='btns2'>Delete</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Cover</td>
                <td>Sofa Cover</td>
                <td>Large</td>
                <td>Pink</td>
                <td>6900</td>
                <td>600</td>
                <td>ab.jpg</td>
                <td><button className='btns1' >Edit</button></td>
                <td><button className='btns2'>Delete</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bedseets</td>
                <td>Bedseets</td>
                <td>Large</td>
                <td>Pink</td>
                <td>3000</td>
                <td>30</td>
                <td>isd.jpg</td>
                <td><button className='btns1' >Edit</button></td>
                <td><button className='btns2'>Delete</button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Bedseets</td>
                <td>Bedseets</td>
                <td>Large</td>
                <td>Pink</td>
                <td>3000</td>
                <td>61</td>
                <td>isd.jpg</td>
                <td><button className='btns1' >Edit</button></td>
                <td><button className='btns2'>Delete</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bedseets</td>
                <td>Bedseets</td>
                <td>Large</td>
                <td>Pink</td>
                <td>3000</td>
                <td>300</td>
                <td>isd.jpg</td>
                <td><button className='btns1' >Edit</button></td>
                <td><button className='btns2'>Delete</button></td>
              </tr>
            </tbody>
          </table>
            
          </div>
          <div className="button">
            <a href="#">See All</a>
          </div>
        </div>
         <div id="myModal" style={{display: display}} className="modal">

            <div className="modal-content">
              <div className="modal-header">
                <button onClick={() => setDisplay('none')} className='hidebtn'><span className="close">&times;</span></button>
                <h2>Add Product</h2>
              </div>
              <div className="modal-body">
                <div>
                  <input type="text" placeholder='Product Title' className='add-pro' />
                </div>
              </div>
              <div className="modal-footer">
                <h3>Modal Footer</h3>
              </div>
            </div>

          </div>
    </>
  )
}

export default Products