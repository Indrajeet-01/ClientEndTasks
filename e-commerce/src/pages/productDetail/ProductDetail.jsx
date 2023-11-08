import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/store";
import { useAuth } from "../../context/auth";
import './productDetail.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProductDetail = ({ products }) => {
    const { id } = useParams(); 
    console.log(id) // Access the "id" parameter from the URL
    const productId = parseInt(id, 10);
    console.log(productId)
  const product = products.find((p) => p.id === productId);
  console.log(products)
  console.log(product)

  const { dispatch } = useContext(CartContext); // Access the addToCart function from the cart context
  const { authState } = useAuth();
  const handleAddToCart = () => {
    if (!authState.user) {
      // User is not logged in, handle this case as needed
      alert("Please log in to add items to your cart.");
      return; // Do not proceed if the user is not logged in
    }
    // Dispatch an action to add the product to the cart
    dispatch({
      type: "ADD_TO_CART",
      product: product,
      quantity: 1, // You can adjust the quantity as needed
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
