import React, { useState } from "react";
import axios from "axios";
const Products = () => {
  const [display, setDisplay] = useState("none");
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    category: "",
    size: "",
    color: "",
    quantity: "",
    img: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProduct({ ...product, [name]: value });
  };
  const onChange = (e) => {
    setProduct({ ...product, img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello world");
    const formData = new FormData();
    formData.append("img", product.img);
    formData.append("title", product.title);
    formData.append("desc", product.desc);
    formData.append("category", product.category);
    formData.append("size", product.size);
    formData.append("color", product.color);
    formData.append("quantity", product.quantity);

    axios
      .post("localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='recent-sales box' style={{ width: "100%" }}>
        <div className='title'>
          Products{" "}
          <button onClick={() => setDisplay("block")} className='add-pbtn'>
            Add Product
          </button>
        </div>
        <div className='sales-details'>
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
                <td>
                  <button className='btns1'>Edit</button>
                </td>
                <td>
                  <button className='btns2'>Delete</button>
                </td>
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
                <td>
                  <button className='btns1'>Edit</button>
                </td>
                <td>
                  <button className='btns2'>Delete</button>
                </td>
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
                <td>
                  <button className='btns1'>Edit</button>
                </td>
                <td>
                  <button className='btns2'>Delete</button>
                </td>
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
                <td>
                  <button className='btns1'>Edit</button>
                </td>
                <td>
                  <button className='btns2'>Delete</button>
                </td>
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
                <td>
                  <button className='btns1'>Edit</button>
                </td>
                <td>
                  <button className='btns2'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='button'>
          <a href='#'>See All</a>
        </div>
      </div>
      <div id='myModal' style={{ display: display }} className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            {/* <button  className='hidebtn'><span clasvalsName="close">&times;</span></button> */}
            <h2 style={{ width: "100%", color: "white", textAlign: "center" }}>
              Add Product
            </h2>
          </div>
          <div className='modal-body'>
            <div>
              <input
                type='text'
                name='title'
                value={product.title}
                onChange={handleInput}
                placeholder='Product Title'
                className='add-pro'
                required
              />
              <select
                name='category'
                value={product.category}
                onChange={handleInput}
                id=''
                className='add-pro'
                required
              >
                <option value=''>Select Option</option>
                <option value='bedsheet'>Bed Sheet</option>
                <option value='sofa cover'>Sofa Cover</option>
                <option value='cussion'>Cussion</option>
                <option value='bedsheet'>Bed Sheet</option>
              </select>
              <input
                type='text'
                value={product.color}
                onChange={handleInput}
                className='add-pro'
                name='color'
                placeholder='Color'
                required
              />
              <input
                type='text'
                value={product.size}
                onChange={handleInput}
                className='add-pro'
                name='size'
                placeholder='Size'
                required
              />
              <input
                type='number'
                value={product.price}
                onChange={handleInput}
                className='add-pro'
                name='price'
                placeholder='Price'
                required
              />
              <input
                type='number'
                value={product.quantity}
                onChange={handleInput}
                className='add-pro'
                name='quantity'
                placeholder='Quantity'
                required
              />
              <input
                type='file'
                accept='.png, .jpg, .jpeg'
                // value={product.img}
                onChange={onChange}
                className='add-pro'
                name='img'
                placeholder='Select Image'
                required
              />
              <textarea
                value={product.description}
                onChange={handleInput}
                name='description'
                placeholder="Product's Description"
                cols='30'
                rows='4'
                className='add-pro'
                required
              ></textarea>
            </div>
          </div>
          <div className='modal-footer'>
            <button className='add-pbtn' onClick={handleSubmit}>
              Add Product
            </button>
            <button className='btns3' onClick={() => setDisplay("none")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
