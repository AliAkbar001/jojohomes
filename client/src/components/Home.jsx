import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import Nav from './Nav/Nav';
import Navbar from "./Nav/Navbar";
import Product from "./Product";
import axios from "axios"; 
import SliderImage from "./SliderImage";
import image1 from '../images/pillow.jpeg';
import image2 from '../images/pillow4.jpeg';
import image3 from '../images/h3.jpeg';
const baseURL = "http://localhost:5000/api/categories";
  
function Home() {
    const [categories,setCategories] = useState();
    useEffect(()=>{
        axios.get(baseURL).then((response)=>{
            console.log(response.data);
            setCategories(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])


return(
    <>
    <Navbar />
    <SliderImage />
    <div className="py-40">
        <h1 className="t-center py-10">Categories</h1>
        {
            categories && categories.map((category, index) => {
                return (
                    <Card key={index} id={category._id} title={category.title} img={image1} products={category.products}  />
                )
            })
        }
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
    </div>
    </>
);
}

export default Home;
