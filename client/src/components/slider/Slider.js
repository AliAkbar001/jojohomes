import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
  return (
    <>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{height: '90vh'}}
                src="./images/housedecor1.jpeg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/h5.jpeg"
                style={{height: '90vh'}}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/h3.jpeg"
                alt="Third slide"
                style={{height: '90vh'}}
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Slider