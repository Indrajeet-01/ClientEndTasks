import React, {useState} from 'react'
import './header.css'
import {FaShoppingCart} from 'react-icons/fa'
import { useCart } from '../../reducers/ContextReducer'

import Cart from '../../pages/cart/Cart'

import Modal from '../modal/Modal'

const Header = () => {
    const items = useCart() || []

    const [cartView, setCartView] = useState(false)
    const loadCart = () => {
      setCartView(true)
  }

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
        <div>
        <div className="cart" onClick={loadCart} >
          
          <FaShoppingCart style={{ fontSize: 42, color: 'yellow' }} />
          <span className="item-count">{items.length}</span>
          
      </div>
      {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
      
        </div>
        
      </header>
    )
}

export default Header