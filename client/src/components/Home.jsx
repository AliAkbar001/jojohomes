import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import Navbar from "./Nav/Navbar";
import Product from "./Product";
import axios from "axios"; 
import SliderImage from "./SliderImage";
import Slider from "./slider/Slider";
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
    <Navbar style={{float: 'left'}} />
    {/* <SliderImage /> */}
    <Slider />
    <div className="py-40" style={{flaot: 'left', width:'100%'}}>
        <h1 className="t-center py-10">Categories</h1>
        {
            categories && categories.map((category, index) => {
                return (
                    <Card key={index} id={category._id} title={category.title} img={category.img} products={category.products}  />
                )
            })
        }
    </div>
        <Footer style={{float: 'left'}} />
    </>
);
}

export default Home;


const Footer = () => {
    return (
        <div class="footer-clean" style={{float:'left'}}>
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">Company Name © 2018</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}