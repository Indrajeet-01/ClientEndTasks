import React, {useState} from 'react'
import './header.css'
import {FaShoppingCart} from 'react-icons/fa'
import { useCart } from '../reducers/ContextReducer'


const Header = () => {
    const items = useCart() || []

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
        <div className="cart" >
        <FaShoppingCart style={{ fontSize: 42, color: 'yellow' }} />
          <span className="item-count">{items.length}</span>
        </div>
      </header>
    )
}

export default Header