import React from 'react';
import './header.css'
import 'font-awesome/css/font-awesome.min.css';
import { useProductsContext } from '../../reducers/ContextReducer';
import { Link } from 'react-router-dom';


const Header = () => {
    const { state } = useProductsContext(); // Access the cart state from the context
  const { cart } = state;

    
  return (
    <header>
      <div className="logo">Your E-commerce Logo</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
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
        
            <Link to='/cart'>
            <i className="fa fa-shopping-cart"></i> 
            <span className="item-count">{cart.length}</span>
            </Link>
          
        
      </div>
    </header>
  );
};

export default Header;
