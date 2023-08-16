import { React, useState, useEffect } from "react";
import "../css/shop_order_summary.css";
import Footer from "../footer";

import picture01 from "../../../assets/img/pynk/shop/group-37546.png";

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
            <div className="order-summary">
              <div className="order">
                <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>
                <div className="modal-body-shop-details  row">
                  <div className="col-3">
                    <img src={picture01} className="image-product" />
                  </div>
                  <div className="col-7"></div>
                  <div className="col-2">999 บาท</div>
                </div>
              </div>
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
