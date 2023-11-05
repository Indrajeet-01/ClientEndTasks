// Product.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const product = useSelector((state) => state.products.find((p) => p.id === productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Rating: {product.rating}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
      <p>Number of Reviews: {product.reviews.length}</p>

      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`} />
        ))}
      </div>

      <div className="product-reviews">
        <h3>Product Reviews</h3>
        {product.reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.author}</p>
            <p>{review.rating} stars</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
