import React from 'react';
import './Popup_login.css';

const Popup_login = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-login-overlay" onClick={onClose}>
      <div className="popup-login-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Login Page</h2>
        <p>เนื้อหาของ Popup นี่คือตัวอย่าง</p>
      </div>
    </div>
  );
};

export default Popup_login;