import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_tracking_order } from "../../../src/redux/pynk/orders";

import no_img from "../../assets/img/pynk/no_image_icon.png";
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
                {tracking_orders.map((item, index) => {
                  const product_list_item = JSON.parse(item.product_list);
                  const shipping_address_item = JSON.parse(
                    item.shipping_address
                  );

                  return (
                    <React.Fragment key={`order-${index}`}>
                      <div className="show-order">
                        <section className="order-detail">
                          <div>เลขที่คำสั่งซื้อ: {item.order_id}</div>
                          <div className="express-number">
                            <div>จัดส่งโดย: {item.shipping_channel}</div>
                            <div>หมายเลขพัสดุ: {item.tracking_no}</div>
                          </div>
                        </section>
                        {product_list_item &&
                          product_list_item.map((product, index) => (
                            <section
                              key={`product-${index}`}
                              className="order-detail none-border-bottom"
                            >
                              <div className="d-flex align-items-center">
                                {product.image ? (
                                  <img
                                    src={product.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                  />
                                ) : (
                                  <img
                                    src={no_img}
                                    width={100}
                                    height={100}
                                    alt=""
                                  />
                                )}
                                <p className="ms-5 mb-0">{product.name}</p>
                              </div>

                              <p className="d-flex justify-content-center align-items-center mb-0">
                                ราคา: {product.totalprice}฿
                              </p>
                            </section>
                          ))}

                        <div className="order-detail">
                          <p className="total-price">
                            รวมการสั่งซื้อ: {item.total_amount}฿
                          </p>
                        </div>

                        <section className="order-detail mb-5">
                          <div className="express-number">
                            <div>ชำระสินค้าโดย: {item.payment_method}</div>
                            <div>สถานะการชำระเงิน: {item.payment_status}</div>
                          </div>

                          {/* {shipping_address_item &&
                            shipping_address_item.map((shipping, index) => (
                              <section key={index}>
                                <div>
                                  ที่อยู่ในการจัดส่ง: {shipping.address}
                                </div>
                              </section>
                            ))} */}
                          <section>
                            <div>ที่อยู่ในการจัดส่ง: {}</div>
                          </section>
                        </section>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            ) : (
              <div className="not-login">
                <span>ไม่มีรายการคำสั่งซื้อ</span>
              </div>
            )}
          </div>
        )}
        <div className="footer"></div>
        <Footer />
      </div>
    );
  };

  return renderOrderDetail();
};

export default OrderTracking;
