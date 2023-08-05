import React, { Component } from "react";
import "../css/shopDetails.css";
import picture01 from "../../../assets/img/pynk/shop/group-37546.png";
import picture02 from "../../../assets/img/pynk/shop/product-picture02.png";
import picture03 from "../../../assets/img/pynk/shop/product-picture03.png";
import picture04 from "../../../assets/img/pynk/shop/product-picture04.png";

class Shop_details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: picture01,
      activeImage: picture01,
    };
  }

  handleImageClick = (image) => {
    this.setState({
      mainImage: image,
      activeImage: image,
    });
  };

  render() {
    const { mainImage, activeImage } = this.state;
    return (
      <>
        <p className="url-product">
          <a href="/">สินค้า</a> {"> "}
          <a href="/categories">หมวดหมู่</a> {"> "}
          <a href="/categories/Fitto-Plant-Protein">
            <span>Fitto Plant Protein</span>
          </a>
        </p>
        <div className="product-details row">
          <div className="box-image col-12  col-sm-6 col-md-6">
            <div className="image-center">
              <img src={mainImage} className="image-product" />
            </div>
            <div className="row box-image">
              <div className="box-img">
                <img
                  src={picture01}
                  className={`image ${
                    activeImage === picture01 ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(picture01)}
                />
              </div>
              <div className="box-img">
                <img
                  src={picture02}
                  className={`image ${
                    activeImage === picture02 ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(picture02)}
                />
              </div>
              <div className="box-img">
                <img
                  src={picture03}
                  className={`image ${
                    activeImage === picture03 ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(picture03)}
                />
              </div>
              <div className="box-img">
                <img
                  src={picture04}
                  className={`image ${
                    activeImage === picture04 ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(picture04)}
                />
              </div>
            </div>
          </div>
          <div className="box-image col-12 col-sm-6  col-md-6">
            <p>FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”</p>
            <p>ธัญพืชรสชานม</p>
            <p>฿990</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type{" "}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Shop_details;
