
import React from 'react';
import './products.css'
import { Link } from 'react-router-dom';



const  Products = ({products}) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
        <div  className={`product ${product.category}`}>
          <img src={product.images[0]} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p className="product-description">Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
        </div>
        </Link>
        
      ))}
    </div>
  );
}

export default Products;
