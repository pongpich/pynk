import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_tracking_order } from "../../../src/redux/pynk/orders";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

import "./css/order_tracking.css";
import "./css/fonts.css";

const OrderTracking = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));
  const tracking_orders = useSelector(({ orders }) =>
    orders ? orders.tracking_orders : ""
  );
  const dataProductList = tracking_orders;
  /* const dataImageURL = JSON.parse(dataProductList); */

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      dispatch(get_tracking_order(user.user_id));
    }
  }, []);

  const renderOrderDetail = () => {
    return (
      <div className="page">
        {!isLoggedIn ? (
          <div className="not-login">
            <span>กรุณาเข้าสู่ระบบ</span>
          </div>
        ) : (
          <div className="tracking-detail">
            <div className="head-order RegularPynk">
              ประวัติคำสั่งซื้อของฉัน
            </div>
            {tracking_orders.length > 0 ? (
              <div className="order-tracking">
                {tracking_orders.map(
                  (item) => {
                    <section className="order-detail">
                      <div>เลขที่คำสั่งซื้อ: {item.order_id}</div>
                      <div className="express-number">
                        <div>จัดส่งโดย: {item.shipping_channel}</div>
                        <div>หมายเลขพัสดุ: {item.tracking_no}</div>
                      </div>
                    </section>;

                    const product_list_item = JSON.parse(item.product_list);
                    product_list_item &&
                      JSON.parse(item.product_list).map((product, index) => (
                        <section key={index} className="order-detail">
                          <div>
                            <img src={product.image} alt="" />
                          </div>
                          <div></div>
                        </section>
                      ));
                  }
                  /* (

                  <div key={index} className="show-order">
                    
                    
                    <section className="order-detail mb-5">
                      <div className="express-number">
                        <div>ชำระสินค้าโดย: {item.payment_method}</div>
                        <div>สถานะการชำระเงิน: {item.payment_status}</div>
                      </div>

                      <div>
                        <div>ที่อยู่ในการจัดส่ง: {}</div>
                      </div>
                    </section>
                  </div>
                ) */
                )}
              </div>
            ) : (
              <div className="not-login">
                <span>ไม่มีรายการคำสั่งซื้อ</span>
              </div>
            )}
          </div>
        )}

        {/* {isLoggedIn && haveOrder ? { tracking_orders.map((item,index) => (
          <li key={index}>{item.order_id}</li>)) } :""} */}

        {/* <div className="order-tracking">
              <div className="order-id text32 RegularPynk">
                Order-ID:123456789
              </div>
              <div className="order-detail">
                <div >รูปสินค้า</div>
                <div>ชื่อสินค้า</div>
                <div className="price">ราคา</div>
              </div>
              <div className="footer-detail">
                <div>payment method</div>
                <div>ที่อยู่ในการจัดส่งสินค้า</div>
              </div>
            </div> */}
        <div className="footer"></div>
        <Footer />
      </div>
    );
  };

  return renderOrderDetail();
};

export default OrderTracking;
