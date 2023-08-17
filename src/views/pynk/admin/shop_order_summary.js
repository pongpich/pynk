import { React, useState, useEffect } from "react";
import "../css/shop_order_summary.css";
import Footer from "../footer";

import picture01 from "../../../assets/img/pynk/shop/group-37546.png";
import arrow_left_line from "../../../assets/img/pynk/shop/arrow-left-s-line.png";
import delete_bin_line from "../../../assets/img/pynk/shop/delete-bin-line.png";
import Logo_payment_1 from "../../../assets/img/pynk/shop/Logo-payment-1.png";
import Logo_payment_2 from "../../../assets/img/pynk/shop/Logo-payment-2.png";
import Logo_payment_3 from "../../../assets/img/pynk/shop/Logo-payment-3.png";
import Logo_payment_4 from "../../../assets/img/pynk/shop/Logo-payment-4.png";
import Logo_payment_5 from "../../../assets/img/pynk/shop/Logo-payment-5.png";
import icon_Email from "../../../assets/img/pynk/shop/icon-Email.png";
import icon_Google from "../../../assets/img/pynk/shop/icon-Google.png";
import icon_facebook from "../../../assets/img/pynk/shop/icon-facebook.png";
import icon_line from "../../../assets/img/pynk/shop/icon-line.png";

const Shop_order_summary = () => {
  const [plusNumber, setPlusNumber] = useState(1);

  const plusMinus = (type) => {
    if (type === "plus") {
      setPlusNumber((prevNumber) => prevNumber + 1);
    } else if (plusNumber > 1) {
      setPlusNumber((prevNumber) => prevNumber - 1);
    }
  };

  return (
    <>
      <div className="box-order-summary">
        <div className="background-order-summary row">
          <div className="col-12 col-md-7 justify-content">
            <div>
              <div className="order-summary">
                <div className="order">
                  <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>
                  <div className="body-order  row">
                    <div className="col-3">
                      <img src={picture01} className="image-product-order" />
                    </div>
                    <div className="col-6">
                      <p className="fitto-shop margin-left-768">
                        FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”
                      </p>
                      <div className="plus-minus-model back-g  col-6">
                        <div className="box-add-order">
                          <button
                            className="minus-model back-g-btn"
                            onClick={() => plusMinus("minus")}
                          >
                            <span className="minus-span">-</span>
                          </button>
                          <span className="plus-minus-number">
                            {plusNumber}
                          </span>
                          <button
                            className="plus-model back-g-btn"
                            onClick={() => plusMinus("plus")}
                          >
                            <span className="minus-span">+</span>
                          </button>
                          <img
                            src={delete_bin_line}
                            className="delete_bin_line-order"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      {" "}
                      <p className="tex-right text-price-order">999 บาท</p>
                    </div>
                  </div>
                  <hr className="line-order-bottom" />
                  <div className="body-order  row">
                    <div className="col-3">
                      <img src={picture01} className="image-product-order" />
                    </div>
                    <div className="col-6">
                      <p className="fitto-shop margin-left-768">
                        FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”
                      </p>
                      <div className="plus-minus-model back-g  col-6">
                        <div className="box-add-order">
                          <button
                            className="minus-model back-g-btn"
                            onClick={() => plusMinus("minus")}
                          >
                            <span className="minus-span">-</span>
                          </button>
                          <span className="plus-minus-number">
                            {plusNumber}
                          </span>
                          <button
                            className="plus-model back-g-btn"
                            onClick={() => plusMinus("plus")}
                          >
                            <span className="minus-span">+</span>
                          </button>
                          <img
                            src={delete_bin_line}
                            className="delete_bin_line-order"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      {" "}
                      <p className="tex-right text-price-order">999 บาท</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="shop-more-products">
                <img src={arrow_left_line} className="arrow-left-line" />
                เลือกซื้อสินค้าเพิ่มเติม
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5 justify-content-576">
            <div>
              <div className="box-proceed-payment">
                <div className="input-code">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="ใส่รหัสส่วนลด"
                  />
                  <button className="button-use">ใช้</button>
                </div>
                <p className="text-price-order between mt-32">
                  ค่าสินค้า <span>990 บาท </span>
                </p>
                <p className="text-price-order between">
                  ค่าจัดส่ง <span>ฟรี </span>
                </p>
                <hr className="line-order-bottom" />
                <p className="text-price-order between text-pink">
                  ยอดที่ต้องชำระ<span>1,030 บาท</span>
                </p>
                <button
                  className="btn-buy-payment"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalPayment"
                >
                  ดำเนินการชำระเงิน
                </button>
              </div>

              <p className="text-price-order mt-32">รับชำระด้วย</p>
              <img src={Logo_payment_1} className="logo-payment-1" />
              <img src={Logo_payment_2} className="logo-payment-1" />
              <img src={Logo_payment_3} className="logo-payment-1" />
              <img src={Logo_payment_4} className="logo-payment-4" />
              <img src={Logo_payment_5} className="logo-payment-5" />
            </div>
          </div>
        </div>
        {/*         //Logo_payment_1 */}
        <Footer />
      </div>

      <div
        className="modal fade"
        id="exampleModalPayment"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content-payment">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close mt-16"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body-payment justify-content">
              <div className="box-button-login">
                <p className="want-login">
                  ต้องการเข้าสู่ระบบ/ ลงทะเบียนของเราหรือไม่?
                </p>
                <button className="btn-want-login">
                  <img src={icon_Email} className="icon-login-model" />
                  เข้าใช้งานด้วย Email
                </button>
                <button className="btn-want-login">
                  <img src={icon_Google} className="icon-login-model" />
                  เข้าใช้งานด้วย Google
                </button>
                <button className="btn-want-login">
                  <img src={icon_facebook} className="icon-login-model" />
                  เข้าใช้งานด้วย Facebook
                </button>
                <button className="btn-want-login">
                  <img src={icon_line} className="icon-login-model" />
                  เข้าใช้งานด้วย Line
                </button>
                <p className="or-login"> หรือ</p>
                <button className="btn-want-login">
                  สั่งซื้อโดยไม่ได้เป็นสมาชิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop_order_summary;
