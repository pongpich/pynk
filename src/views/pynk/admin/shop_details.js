import React, { Component } from "react";
import "../css/shopDetails.css";
import group_37546 from "../../../assets/img/pynk/shop/group-37546.png";

class Shop_details extends Component {
  render() {
    return (
      <>
        <div className="product-details row">
          <div className="box-image col-6">
            <img src={group_37546} className="image-product" />
          </div>
          <div className="box-image col-6">adasd</div>
        </div>
      </>
    );
  }
}

export default Shop_details;
