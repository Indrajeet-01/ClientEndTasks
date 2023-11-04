import React from 'react';
import './header.css'
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Your E-commerce Logo</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search products" />
        <button>Search</button>
      </div>
      <div className="cart">
        <a href="/cart">
          <i className="fa fa-shopping-cart"></i> My Cart
        </a>
      </div>
    </header>
  );
};

export default Header;
