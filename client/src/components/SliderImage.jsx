import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import  "slick-carousel/slick/slick-theme.css";
// import image1 from '../images/pillow.jpeg';
// import image2 from '../images/pillow4.jpeg';
// import image3 from '../images/h3.jpeg';
import './css/Sliderimage.scss';

 function SliderImage() {
    const image1="";
    const image2="";
    const image3="";
    let settings ={
        dot:'true',
        infinite: 'true',
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase:"linear",
    }
  return(
      <>
      <div className='container mt-5 carousel'>
      

      </div>
      <div style={{width: '100%'}}>
            <Slider {...settings}  style={{width: '100%'}}>
            <div className='card-wrapper'>
                <div className='card'>  
                    <div className='card-image'>
                    <img src={image1}/>
                    </div>
              
                      <ul className='social-icons'>
                        <li><a href='https://www.instagram.com'><i className='fa fa-instagram'></i></a> </li>
                        <li><a href='http://www.facebook.com'><i className='fa fa-facebook'></i></a> </li>
                        
                      
                      </ul>
                      <div className='details'>
                        <h2> <span>J</span>ojo <span color='rgb(109, 207, 84)'>H</span>ome</h2>
                      </div>
              </div>
            </div>
              
              <div className='card-wrapper'>
                <div className='card'>  
                    <div className='card-image'>
                    <img src={image2}/>
                    </div>
              
                      <ul className='social-icons'>
                      <li><a href='https://www.instagram.com'><i className='fa fa-instagram'></i></a> </li>
                        <li><a href='http://www.facebook.com'><i className='fa fa-facebook'></i></a> </li>
              
                      </ul>
                      <div className='details'>
                        <h2> <span>J</span>ojo <span color='rgb(109, 207, 84)'>H</span>ome</h2>
                      </div>
              </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>  
                    <div className='card-image'>
                    <img src={image3}/>
                    </div>
              
                      <ul className='social-icons'>
                      <li><a href='https://www.instagram.com'><i className='fa fa-instagram'></i></a> </li>
                        <li><a href='http://www.facebook.com'><i className='fa fa-facebook'></i></a> </li>
              
                      </ul>
                      <div className='details'>
                        <h2> <span>J</span>ojo <span color='rgb(109, 207, 84)'>H</span>ome</h2>
                      </div>
              </div>
            </div>

            <div className='card-wrapper'>
                <div className='card'>  
                    <div className='card-image'>
                    <img src={image1}/>
                    </div>
              
                      <ul className='social-icons'>
                      <li><a href='https://www.instagram.com'><i className='fa fa-instagram'></i></a> </li>
                        <li><a href='http://www.facebook.com'><i className='fa fa-facebook'></i></a> </li>
              
                      </ul>
                      <div className='details'>
                        <h2> <span>J</span>ojo <span color='rgb(109, 207, 84)'>H</span>ome</h2>
                      </div>
              </div>
            </div>



            </Slider>
            </div>
      </>
  )
  
}
export default SliderImage
