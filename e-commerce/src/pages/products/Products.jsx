// Products.js

import React from 'react';
import { Link } from 'react-router-dom';
import './products.css'

const Products = () => {
  const products = [
    {
      id: '1',
      name: 'Product 1',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 4.5,
      category: 'Electronics',
      stock: 10,
      reviews: [
        {
          author: 'User 1',
          rating: 5,
          text: 'Great product!'
        },
        {
          author: 'User 2',
          rating: 4,
          text: 'Good value for the price.'
        }
      ],
      images: [
        'product1-image1.jpg',
        'product1-image2.jpg',
      ]
    },
    {
      id: '2',
      name: 'Product 2',
      price: 24.99,
      description: 'Suspendisse potenti. Nulla accumsan.',
      rating: 3.8,
      category: 'Clothing',
      stock: 5,
      reviews: [
        {
          author: 'User 3',
          rating: 3,
          text: "It's okay, but the sizing is off."
        }
      ],
      images: [
        'product2-image1.jpg',
        'product2-image2.jpg',
      ]
    }
    
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/products/${product.id}`}>
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <h2>{product.price}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
