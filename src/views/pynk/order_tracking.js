import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

import "./css/order_tracking.css"
import "./css/fonts.css"

const OrderTracking = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const statusLogin = useSelector(({ auth }) => (auth ? auth.statusLogin : ""));

  useEffect(() => {
    if (statusLogin === "success") {
      setIsLoggedIn(true);
    }
  }, [statusLogin]);
  return (
    <div className="page">
      {!isLoggedIn && 
        <div className="not-login">
          <span>กรุณาเข้าสู่ระบบ</span>
        </div>}
      {isLoggedIn && (<div className="order-tracking">
        <div className="order-id text32 RegularPynk">Order-ID:123456789</div>
        <div className="order-detail">
          <div>รูปสินค้า</div>
          <div>ชื่อสินค้า</div>
          <div className="price">ราคา</div>
        </div>
        <div className="footer-detail">
          <div>payment method</div>
          <div>ที่อยู่ในการจัดส่งสินค้า</div>
        </div>
      </div>)}
      

      <Footer />
    </div>
  );
};

export default OrderTracking;
