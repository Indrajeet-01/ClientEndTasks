import React, {useState} from 'react'
import './header.css'
import {FaShoppingCart} from 'react-icons/fa'


const Header = () => {
    const [itemCount, setItemCount] = useState(0); // Initialize cart item count to 0

    const addToCart = () => {
        setItemCount(itemCount + 1);
    };

    return (
        <header className="navbar">
        <div className="logo">
          <h2 href="/">Go Healthy</h2>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="cart" onClick={addToCart}>
        <FaShoppingCart style={{ fontSize: 42, color: 'yellow' }} />
          <span className="item-count">{itemCount}</span>
        </div>
      </header>
    )
}

export default Header