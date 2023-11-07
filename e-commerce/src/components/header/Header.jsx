import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import { useCart } from '../../context/store';

const Header = () => {
  const {cart} = useCart()
  return (
    <header>
      <div className="logo">Legends Choice</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>

      <div className="cart">
        <Link to='/cart'>
          <i className="fa fa-shopping-cart"></i>
          <span className="item-count">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header

