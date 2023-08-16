import { React, useState, useEffect } from "react";
import "../css/shop_order_summary.css";
import Footer from "../footer";

import picture01 from "../../../assets/img/pynk/shop/group-37546.png";
import arrow_left_line from "../../../assets/img/pynk/shop/arrow-left-s-line.png";

import delete_bin_line from "../../../assets/img/pynk/shop/delete-bin-line.png";
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
          <div className="col-12 col-md-8 justify-content">
            <div>
              <div className="order-summary">
                <div className="order">
                  <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>
                  <div className="body-order  row">
                    <div className="col-3">
                      <img src={picture01} className="image-product-order" />
                    </div>
                    <div className="col-6">
                      <p className="fitto-shop">
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
                      <p className="fitto-shop">
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
          <div className="col-12 col-md-4 justify-content">asd</div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Shop_order_summary;
