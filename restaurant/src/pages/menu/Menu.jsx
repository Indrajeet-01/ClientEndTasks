import React, { useState, } from 'react'
import './menu.css'
import { useDispatchCart } from '../../reducers/ContextReducer';


const mealItems = [
    {
      id: 1,
      name: 'Cheese Burger',
      description: 'with extra cheese',
      price: '$10.99',
    },
    {
      id: 2,
      name: 'Veg roll',
      description: 'chopped with green vegetables',
      price: '$12.99',
    },
    {
      id: 3,
      name: 'Dosa',
      description: 'serving healthy dosa',
      price: '$9.99',
    },
    {
      id: 4,
      name: 'Brocalli soup',
      description: 'good for mental freshness',
      price: '$11.99',
    },
  ];

const Menu = () => {
  
  const dispatch = useDispatchCart()
  const [itemQuantities, setItemQuantities] = useState({})

  const calculateFinalPrice = (item, quantity) => {
    return (parseFloat(item.price.slice(1)) * quantity).toFixed(2); // Assuming price format is $X.XX
  };

  const addToCart = (item) => {
    
    const quantity = itemQuantities[item.id] || 1
    const finalPrice = calculateFinalPrice(item,quantity)

    dispatch({
      type: 'ADD_TO_CART',
      id: item.id,
      name: item.name,
      qty: quantity,
      price: finalPrice,
      description: item.description,

    })
    
  }

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
        <div className="summary-card">
          <h2>Welcome to Our Restaurant</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="meal-cards">
          {mealItems.map((item) => (
            <div key={item.id} className="meal-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>Final Price: ${calculateFinalPrice(item,itemQuantities[item.id] || 1)}</p>
              <div className='cart-controls'>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <input
                  type="number"
                  value={itemQuantities[item.id] || 1}
                  min="1"
                  step="1"
                  onChange={(e) => handleQuantityChange(e, item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      </div>
        
    )
}

export default Menu
