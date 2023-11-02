import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'; // Import the CSS file

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &#x2715;
        </span>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  );
}
