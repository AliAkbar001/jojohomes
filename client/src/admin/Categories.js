import React, { useEffect, useState } from "react";
import axios from "axios";
const Categories = () => {
  const auth = localStorage.getItem('admintoken');
  const [display, setDisplay] = useState("none");
  const [data, setData] = useState();
  const [product, setProduct] = useState({
    title: "",
    img: "",
  });
  
  useEffect(() => {
      axios.get("http://localhost:5000/api/categories/").then((response) =>{
          console.log(response);
          setData(response.data);
      }).catch((error) => {
          console.log(error);
          alert("error");
      })
  },[])

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
    formData.append("catimg", product.img);
    formData.append("title", product.title);
    
    axios
      .post("http://localhost:5000/api/categories/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "token": `Bearer ${auth}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Category Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error in sending request");
      });
  };

  return (
    <>
      <div className='recent-sales box' style={{ width: "100%" }}>
        <div className='title'>
          Products{" "}
          <button onClick={() => setDisplay("block")} className='add-pbtn'>
            Add Category
          </button>
        </div>
        <div className='sales-details'>
          <table className='ptable'>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Title</th>
                <th>Products</th>
                <th>Image</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((element, index) =>{
                  return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.title}</td>
                        <td>{element.products}</td>
                        <td>{element.img}</td>
                        <td>{element.status}</td>
                        <td>
                        {/* <button className='btns1'>Edit</button> */}
                        <button className='btns2'>Delete</button>
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
        <div className='modal-content' style={{ marginTop: '25vh'}}>
          <div className='modal-header'>
            {/* <button  className='hidebtn'><span clasvalsName="close">&times;</span></button> */}
            <h2 style={{ width: "100%", color: "white", textAlign: "center" }}>
              Add Category
            </h2>
          </div>
          <div className='modal-body'>
            <div>
              <input
                type='text'
                name='title'
                value={product.title}
                style={{width:'80%'}}
                onChange={handleInput}
                placeholder='Product Title'
                className='add-pro'
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
            </div>
          </div>
          <div className='modal-footer'>
            <button className='add-pbtn' type="submit" >
              Add Category
            </button>
            <button className='btns3' onClick={() => setDisplay("none")}>
              Cancel
            </button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Categories;
