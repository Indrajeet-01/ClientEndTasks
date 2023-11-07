// src/components/Auth.js
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './userAuth.css'

const UserAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Indicates whether the user is signing up

  const navigate = useNavigate()

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleSignUp = () => {
    if (password === confirmPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/');
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.error("Password and Confirm Password do not match.");
    }
  }

  return (
    <div className="container-wrapper">
    <div className="container">
      <h1>{isSignUp ? 'Sign Up' : 'Log In'}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {isSignUp && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      )}
      {isSignUp ? (
        <button onClick={handleSignUp}>Sign Up</button>
      ) : (
        <button onClick={handleSignIn}>Log In</button>
      )}
      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account yet?"}
        <span className="toggle-link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Log In' : 'Create Account'}
        </span>
      </p>
    </div>
    </div>
  );
}

export default UserAuth;
