import React from 'react'

const TSProducts = () => {
  return (
    <>
        <div className="top-sales box">
          <div className="title">Top Seling Product</div>
          <ul className="top-sales-details">
            <li>
            <a href="#">
              <img src="images/sunglasses.jpg" alt="" />
              <span className="product">Vuitton Sunglasses</span>
            </a>
            <span className="price">$1107</span>
          </li>
          <li>
            <a href="#">
              <img src="images/jeans.jpg" alt="" />
              <span className="product">Hourglass Jeans </span>
            </a>
            <span className="price">$1567</span>
          </li>
          <li>
            <a href="#">
              <img src="images/nike.jpg" alt="" />
              <span className="product">Nike Sport Shoe</span>
            </a>
            <span className="price">$1234</span>
          </li>
          <li>
            <a href="#">
              <img src="images/scarves.jpg" alt="" />
              <span className="product">Hermes Silk Scarves.</span>
            </a>
            <span className="price">$2312</span>
          </li>
          <li>
            <a href="#">
              <img src="images/blueBag.jpg" alt="" />
              <span className="product">Succi Ladies Bag</span>
            </a>
            <span className="price">$1456</span>
          </li>
          <li>
            <a href="#">
              <img src="images/bag.jpg" alt="" />
              <span className="product">Gucci Womens's Bags</span>
            </a>
            <span className="price">$2345</span>
            </li>
          <li>
            <a href="#">
              <img src="images/addidas.jpg" alt="" />
              <span className="product">Addidas Running Shoe</span>
            </a>
            <span className="price">$2345</span>
          </li>
          <li>
            <a href="#">
              <img src="images/shirt.jpg" alt="" />
              <span className="product">Bilack Wear's Shirt</span>
            </a>
            <span className="price">$1245</span>
          </li>
          </ul>
        </div>
    </>
  )
}

export default TSProducts