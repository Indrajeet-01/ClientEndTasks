import React, { useState } from 'react'
import './menu.css'


const mealItems = [
    {
      id: 1,
      name: 'Meal 1',
      description: 'Description of Meal 1',
      price: '$10.99',
    },
    {
      id: 2,
      name: 'Meal 2',
      description: 'Description of Meal 2',
      price: '$12.99',
    },
    {
      id: 3,
      name: 'Meal 3',
      description: 'Description of Meal 3',
      price: '$9.99',
    },
    {
      id: 4,
      name: 'Meal 4',
      description: 'Description of Meal 4',
      price: '$11.99',
    },
  ];

const Menu = () => {
  const [cart, setCart] = useState({})

  const addToCart = (mealId) => {
    setCart((prevCart) => {
      const updatedCart = {...prevCart}
      if(updatedCart[mealId]) {
        updatedCart[mealId] += 1
      } else {
        updatedCart[mealId] = 1
      }
      return updatedCart
    })
  }

  const removeFromCart = (mealId) => {
    setCart((prevCart) => {
      const updatedCart = {...prevCart}
      if(updatedCart[mealId]) {
        updatedCart[mealId] -= 1
        if(updatedCart[mealId] <= 0){
          delete updatedCart[mealId]
        }
      }
      return updatedCart
    })
  }
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
              <div className='cart-controls'>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{cart[item.id] || 0}</span>
                <button onClick={() => addToCart(item.id)}>+</button>

              </div>
            </div>
          ))}
        </div>
      </section>

      </div>
        
    )
}

export default Menu
