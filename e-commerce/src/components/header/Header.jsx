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
      <div className="logo">Legends Choice</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><a href="/categories">Categories</a></li>
          <li><Link to="/about">About Us</Link></li>
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
