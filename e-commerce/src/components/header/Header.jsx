import React from 'react';
import './header.css';

import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/store';
import { useAuth } from '../../context/auth';

const Header = () => {
  const {cart} = useCart()
  const { authState, dispatch } = useAuth();
  const navigate = useNavigate()

  const handleSignOut = () => {
    // Dispatch the 'SIGN_OUT' action to sign out the user
    dispatch({ type: 'SIGN_OUT' });

    // Redirect the user to the login page
    navigate('/');
  };

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

      
        <div className='authUser'>
        {authState.user && authState.token ? (
          <>
          <div className="cart">
          <Link to='/cart'>
            <i className="fa fa-shopping-cart"></i>
            <span className="item-count">{cart.length}</span>
          </Link>
        </div>
        <button className="auth" onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (<Link className='auth' to='/auth'>Log In</Link>)}
        </div>
        
      
    </header>
  );
};

export default Header

