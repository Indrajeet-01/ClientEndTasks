import React from 'react';
import { useCart } from '../../store'; // Import the useCart hook from your context provider
import './cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart(); // Use the useCart hook to access cart data and functions

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.price * (product.quantity || 1);
    }, 0);
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className="product-container">
                    <img src={product.imageUrl} alt={product.title} className="product-image" />
                    <div className="product-title">{product.name}</div>
                  </div>
                </td>
                <td>${product.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity || 1}
                    onChange={(e) => updateQuantity(product, e.target.value)}
                  />
                </td>
                <td>${product.price * (product.quantity || 1)}</td>
                <td>
                  <button onClick={() => removeFromCart(product)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 && (
        <div className="cart-footer">
          <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
          <button className="checkout-button">Checkout</button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
