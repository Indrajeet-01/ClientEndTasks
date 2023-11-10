import React, { useState, } from 'react'
import './menu.css'
import { useDispatchCart } from '../../reducers/ContextReducer';
import axios from 'axios'


const mealItems = [
    {
      id: 1,
      name: 'Caramel Popcorn',
      description: 'made of sugar and butter with just a hint of salt',
      price: '₹5',
    },
    {
      id: 2,
      name: 'Gummies',
      description: 'Gummy candies include anything that’s sweet and chewy',
      price: '₹10',
    },
    {
      id: 3,
      name: 'Candy Canes',
      description: 'sugar sticks bent into shepherd hooks',
      price: '₹12',
    },
    {
      id: 4,
      name: 'Sours',
      description: 'sour candy will make you pucker and tear up',
      price: '₹8',
    },
  ];

const Menu = () => {
  
  const dispatch = useDispatchCart()
  const [itemQuantities, setItemQuantities] = useState({})

  const calculateFinalPrice = (item, quantity) => {
    return (parseFloat(item.price.slice(1)) * quantity).toFixed(2); 
  };

  const addToCart = async (item) => {
    const quantity = itemQuantities[item.id] || 1;
    const finalPrice = calculateFinalPrice(item, quantity);
  
    const candyInfo = {
      id: item.id,
      name: item.name,
      qty: quantity,
      price: finalPrice,
      
    };
  
    try {
      const response = await axios.post('https://crudcrud.com/api/e5bc3c591bd94fb2b680a477f3a6bde8/cart', candyInfo);
  
      if (response.status === 201) {
        console.log('Candy added to cart successfully');
        // You can add further actions here if needed
      } else {
        console.error('Failed to add candy to cart');
      }
    } catch (error) {
      console.error('Error adding candy to cart', error);
    }
  
    dispatch({
      type: 'ADD_TO_CART',
      id: item.id,
      name: item.name,
      qty: quantity,
      price: finalPrice,
      description: item.description,
    });
  };
  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value, 10);
    setItemQuantities({
      ...itemQuantities,
      [itemId]: newQuantity,
    });
  };

    return (
      <div>
  <section className="main-content">
    <table className="meal-table">
      <thead>
        <tr>
          <th>Candy name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {mealItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>
              <input
                className="cart-quantity"
                type="number"
                value={itemQuantities[item.id] || 1}
                min="1"
                step="1"
                onChange={(e) => handleQuantityChange(e, item.id)}
              />
            </td>
            <td>₹{calculateFinalPrice(item, itemQuantities[item.id] || 1)}</td>
            <td>
              <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
</div>

    )
}

export default Menu
