import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/store";
import { useAuth } from "../../context/auth";
import './productDetail.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios'


const ProductDetail = ({ products }) => {
    const { id } = useParams(); 
    const productId = parseInt(id, 10);
    console.log(productId)
    const product = products.find((p) => p.id === productId);
    
    console.log(product)

  const { dispatch } = useContext(CartContext); 
  const { authState } = useAuth();
  const handleAddToCart = () => {
    if (!authState.user) {
      
      alert("Please log in to add items to your cart.");
      return; 
    }
    const userEmail = authState.user.email;
    const cleanedEmail = userEmail.replace(/[@.]/g, '');
    
    const data = {
      productId: product.id,
      quantity: 1, 
    };

    
    axios.post(`https://crudcrud.com/api/51b7f7c2dc884a848aa9b7e05d9e48a9/cart${cleanedEmail}`, data)
      .then((response) => {
        
        console.log("Product added to cart:", response.data);
        
        dispatch({
          type: "ADD_TO_CART",
          product: product,
          quantity: 1,
        });
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  
  return (
    <div className="product-detail-container">
      <div className="product-image-slider">
        <Carousel>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price"> ${product.price}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className={`product-stock ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}>
        {product.stock > 0 ? "In stock" : "Out of stock"}
</p>
        <button
          className={`add-to-cart-button ${
            !authState.user ? "disabled" : "" // Apply 'disabled' class if not logged in
          }`}
          onClick={handleAddToCart}
          disabled={!authState.user}
        >
          Add to Cart
        </button>
        <div className="product-reviews">Reviews:</div>
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index} className="review-item">
              <strong>{review.author}:</strong> {review.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
