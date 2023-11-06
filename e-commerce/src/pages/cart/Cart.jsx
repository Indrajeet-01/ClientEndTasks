import React from 'react';
import { useCart } from '../../store';
import './cart.css';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.product.price * (cartItem.quantity || 1);
    }, 0);
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity: parseInt(quantity, 10) });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
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
            {cart.map((cartItem, index) => (
              <tr key={index}>
                <td>
                  <div className="product-container">
                    <img src={cartItem.product.images[0]} className="product-image" />
                    <div className="product-title">{cartItem.product.name}</div>
                  </div>
                </td>
                <td>${cartItem.product.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={cartItem.quantity || 1}
                    onChange={(e) => handleQuantityChange(cartItem.product.id, e.target.value)}
                  />
                </td>
                <td>${cartItem.product.price * (cartItem.quantity || 1)}</td>
                <td>
                  <button onClick={() => handleRemoveFromCart(cartItem.product.id)}>Remove</button>
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
          <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
