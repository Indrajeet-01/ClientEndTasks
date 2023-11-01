import React, {useState} from 'react'
import './header.css'
import {FaShoppingCart} from 'react-icons/fa'
import { useCart } from '../../reducers/ContextReducer'
import {Link} from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import Menu from '../../pages/menu/Menu'

const Header = () => {
    const items = useCart() || []

    const [isCartOpen, setIsCartOpen] = useState(false); 

    const toggleCart = () => {
      setIsCartOpen((prevState) => !prevState); 
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
        <div className="cart" onClick={toggleCart} >
          <Link to='/cart'>
            <FaShoppingCart style={{ fontSize: 42, color: 'yellow' }} />
            <span className="item-count">{items.length}</span>

          </Link>
        
        </div>
        
      </header>
    )
}

export default Header