import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL="http://localhost:5000/api/products";

const Products = () => {
  const auth = localStorage.getItem('admintoken');
  const [display, setDisplay] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [cat, setCat] = useState();
  const [data, setData] = useState();
  const [del, setDel] = useState('');
  useEffect(() => {
    axios.get("http://localhost:5000/api/categories").then((response) => {
      setCat(response.data);
    }).catch((error) => {
      console.log(error);
    })    
  },[])
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log(error);
    })    
  },[])
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    category: "",
    size: "",
    color: "",
    quantity: "",
    price: "",
    img: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProduct({ ...product, [name]: value });
  };
  const onChange = (e) => {
    setProduct({ ...product, img: e.target.files[0]});
  };

  const handleSubmit = async (e) => {
    alert("Request send")
    e.preventDefault();
    console.log("hello world");
    const formData = new FormData();
    formData.append("productimg", product.img);
    formData.append("title", product.title);
    formData.append("desc", product.desc);
    formData.append("category", product.category);
    formData.append("size", product.size);
    formData.append("color", product.color);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);

    axios
      .post("http://localhost:5000/api/products/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "token": `Bearer ${auth}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Product added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error in sending request");
      });
  };
  function delFun(idd){
    alert(`${baseURL}/`+idd);
    axios.delete("http://localhost:5000/api/products/"+idd, {
      headers: { 
        "token": 'Bearer '+auth,
      },
    }).then((response) => {
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      console.log(response);
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      alert("Product deleted Successfully");
    }).catch((error) => {
      console.log(error);
    })
  }
  function updateFun(element){
    setProduct({...element});
    console.log("UPDATE PRODUCT UPDATE PRODUCT UPDATE PRODUCT");
    console.log("product : ",product);
  }
  function handleSubmit2(e){
    e.preventDefault();
    alert('form submittedd');
    console.log("updated product object value");
    console.log("U product : ", product);
    const formData = new FormData();
    formData.append("productimg", product.img);
    formData.append("title", product.title);
    formData.append("desc", product.desc);
    formData.append("category", product.category);
    formData.append("size", product.size);
    formData.append("color", product.color);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);

    axios
      .put(baseURL+"/"+product._id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "token": `Bearer ${auth}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Product Updated successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error in sending request");
      });
  }
  return (
    <>
      <div className='recent-sales box' style={{ width: "100%" }}>
        <div className='title'>
          Products
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
              {data && data.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{element.title}</td>
                    
                    <td>
                    {
                        cat.filter(cat1 => cat1._id == element.category ).map(filteredCat => (
                          filteredCat.title
                        ))
                    }</td>
                    <td>{element.size}</td>
                    <td>{element.color}</td>
                    <td>{element.price}</td>
                    <td>{element.quantity}</td>
                    <td>{element.img}</td>
                    <td>
                      <button onClick={() => {
                        setDisplay2('block');
                        updateFun(element);
                      }} className='btns1'>Edit</button>
                    </td>
                    <td>
                      <button  className='btns2' onClick={()=>{
                       setDel(element._id);
                       delFun(element._id)
                       } }>Delete</button>
                    </td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
        <div className='button'>
          <a href='#'>See All</a>
        </div>
      </div>
      <div id='myModal' style={{ display: display }} className='modal'>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                style={{width: '80%'}}
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
                {cat && cat.map((element, index) =>{
                  return (
                    <option key={index} value={element._id}>{element.title}</option>
                  )
                })}
                {/* <option value='bedsheet'>Bed Sheet</option>
                <option value='sofa cover'>Sofa Cover</option>
                <option value='cussion'>Cussion</option>
                <option value='bedsheet'>Bed Sheet</option> */}
              </select>
              <input
                type='text'
                value={product.color}
                onChange={handleInput}
                className='add-pro'
                style={{width: '80%'}}
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
                style={{width: '80%'}}
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
                name='desc'
                placeholder="Product's Description"
                cols='30'
                rows='4'
                className='add-pro'
                required
              ></textarea>
            </div>
          </div>
          <div className='modal-footer'>
            <button className='add-pbtn' type="submit" >
              Add Product
            </button>
            <button className='btns3' onClick={() => setDisplay("none")}>
              Cancel
            </button>
          </div>
        </div>
        </form>
      </div>
      
      {/* update product modal  */}
      
      
      
      <div id='myModal' style={{ display: display2 }} className='modal'>
        <form encType="multipart/form-data" onSubmit={handleSubmit2}>
        <div className='modal-content'>
          <div className='modal-header'>
            {/* <button  className='hidebtn'><span clasvalsName="close">&times;</span></button> */}
            <h2 style={{ width: "100%", color: "white", textAlign: "center" }}>
              Update Product
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
                style={{width: '80%'}}
              />
              <select
                name='category'
                value={product.category}
                onChange={handleInput}
                id=''
                className='add-pro'
                
              >
                <option value=''>Select Option</option>
                {cat && cat.map((element, index) =>{
                  return (
                    <option key={index} value={element._id}>{element.title}</option>
                  )
                })}
                {/* <option value='bedsheet'>Bed Sheet</option>
                <option value='sofa cover'>Sofa Cover</option>
                <option value='cussion'>Cussion</option>
                <option value='bedsheet'>Bed Sheet</option> */}
              </select>
              <input
                type='text'
                value={product.color}
                onChange={handleInput}
                className='add-pro'
                style={{width: '80%'}}
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
                style={{width: '80%'}}
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
                value={product.desc}
                onChange={handleInput}
                name='desc'
                placeholder="Product's Description"
                cols='30'
                rows='4'
                className='add-pro'
                required
              ></textarea>
            </div>
          </div>
          <div className='modal-footer'>
            <button className='add-pbtn' type="submit" >
              Update Product
            </button>
            <button className='btns3' onClick={() => setDisplay2("none")}>
              Cancel
            </button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Products;
