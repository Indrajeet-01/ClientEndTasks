import React from 'react';
import './header.css';
import { connect } from 'react-redux'; // Import connect
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart, // Map cart state from Redux store
  };
};

export default connect(mapStateToProps)(Header);

