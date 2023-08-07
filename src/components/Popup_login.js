import React, { useState } from 'react';
import './Popup_login.css';

const Popup_login = ({ isOpen, onClose, children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // ตรวจสอบข้อมูลผู้ใช้งานและรหัสผ่านที่ถูกกรอก
    // ในสถานการณ์จริงคุณควรเชื่อมต่อกับเซิร์ฟเวอร์และตรวจสอบข้อมูลที่เป็นไปได้
    if (email === 'user@gmail.com' && password === 'password') {
      setLoggedIn(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-login-overlay">
      <div className="popup-login-content">
        <button className="close-button" onClick={onClose} style={{ color: "black" }}>
          &times;
        </button>

        <h2 className='center fw-bold' style={{ color: '#EF60A3' }}>เข้าสู่ระบบ</h2>
        <div>อีเมล</div>
        <input
          type="text"
          placeholder="อีเมล"
          value={email}
          onChange={handleEmailChange}
        />
        <div>รหัสผ่าน</div>
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className='d-flex justify-content-center'>
          <button onClick={handleLogin}>เข้าสู่ระบบ</button>
        </div>
        {loggedIn && <p className="success-message">เข้าสู่ระบบสำเร็จ!</p>}

      </div>
    </div >
  );
};

export default Popup_login;