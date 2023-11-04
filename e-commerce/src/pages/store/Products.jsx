import React from 'react';
import './products.css'

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our E-commerce Store</h1>
      <div className="product-list">
        {productsArr.map((product, index) => (
          <div className="product-card" key={index}>
            <h2 className="product-title">{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} />
            <div className="product-details">
              <p className="price">${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
