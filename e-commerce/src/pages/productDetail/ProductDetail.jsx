import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../store";
const ProductDetail = ({ products }) => {
    const { id } = useParams(); 
    console.log(id) // Access the "id" parameter from the URL
    const productId = parseInt(id, 10);
    console.log(productId)
  const product = products.find((p) => p.id === productId);
  console.log(products)
  console.log(product)

  const { dispatch } = useContext(CartContext); // Access the addToCart function from the cart context

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch({
      type: "ADD_TO_CART",
      product: product,
      quantity: 1, // You can adjust the quantity as needed
    });
  };
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.images[0]}  />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Reviews:</p>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.author}:</strong> {review.text}
          </li>
        ))}
      </ul>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
