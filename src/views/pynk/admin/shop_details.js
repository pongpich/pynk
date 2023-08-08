import React, { useState } from "react";
import "../css/shopDetails.css";
import picture01 from "../../../assets/img/pynk/shop/group-37546.png";
import picture02 from "../../../assets/img/pynk/shop/product-picture02.png";
import picture03 from "../../../assets/img/pynk/shop/product-picture03.png";
import picture04 from "../../../assets/img/pynk/shop/product-picture04.png";
import vector from "../../../assets/img/pynk/shop/vector.png";
import vector1 from "../../../assets/img/pynk/shop/vector-1.png";
import { flush } from "redux-saga/effects";

const Shop_details = () => {
  const [mainImage, setMainImage] = useState(picture01);
  const [activeImage, setActiveImage] = useState(picture01);
  const [plusNumber, setPlusNumber] = useState(1);
  const [more_details, setMoreDetails] = useState(false);

  const handleImageClick = (image) => {
    setMainImage(image);
    setActiveImage(image);
  };

  const plusMinus = (type) => {
    if (type === "plus") {
      setPlusNumber((prevNumber) => prevNumber + 1);
    } else if (plusNumber > 1) {
      setPlusNumber((prevNumber) => prevNumber - 1);
    }
  };

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
        <div className="col-12  col-sm-6 col-md-5 col-lg-5 ">
          <div className="image-center">
            <img src={mainImage} className="image-product" />
          </div>
          <div className="row box-image">
            <div className="box-img">
              <img
                src={picture01}
                className={`image ${activeImage === picture01 ? "active" : ""}`}
                onClick={() => handleImageClick(picture01)}
              />
            </div>
            <div className="box-img">
              <img
                src={picture02}
                className={`image ${activeImage === picture02 ? "active" : ""}`}
                onClick={() => handleImageClick(picture02)}
              />
            </div>
            <div className="box-img">
              <img
                src={picture03}
                className={`image ${activeImage === picture03 ? "active" : ""}`}
                onClick={() => handleImageClick(picture03)}
              />
            </div>
            <div className="box-img">
              <img
                src={picture04}
                className={`image ${activeImage === picture04 ? "active" : ""}`}
                onClick={() => handleImageClick(picture04)}
              />
            </div>
          </div>
        </div>
        <div className="box-image col-12 col-sm-6  col-md-7  col-lg-7">
          <div className="box-details">
            <p className="text-head">
              FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”
            </p>
            <p className="text-name">ธัญพืชรสชานม</p>
            <p className="text-price">฿990</p>
            <p className="text-span-price">฿1,990 </p>
            <p className="text-span">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type{" "}
            </p>
            <div className="row">
              <div className="amount">
                <p className="text-amount text-center">พลังงาน</p>
                <p className="text-amount-number text-center">120</p>
                <p className="text-amount-power text-center"> แคลอรี่</p>
              </div>
              <div className="amount">
                <p className="text-amount text-center">พลังงาน</p>
                <p className="text-amount-number text-center">120</p>
                <p className="text-amount-power text-center"> แคลอรี่</p>
              </div>
              <div className="amount">
                <p className="text-amount text-center">พลังงาน</p>
                <p className="text-amount-number text-center">120</p>
                <p className="text-amount-power text-center"> แคลอรี่</p>
              </div>
            </div>
          </div>
          <p className="plus-minus">
            <button className="minus" onClick={() => plusMinus("minus")}>
              {"-"}
            </button>
            <span className="plus-minus-number">{plusNumber}</span>
            <button className="plus" onClick={() => plusMinus("plus")}>
              {"+"}
            </button>
          </p>
          <p className="stock-left text-center-576">
            <span>
              {" "}
              <img src={vector} className="vector-image" />
            </span>
            เหลือสินค้าอยู่ 33 ชิ้น
          </p>
          <div className="row justify-content-576">
            <button className="shopping-bag">เพิ่มลงถุงช้อปปิ้ง</button>
            <button className="buy-now">ซื้อเลย</button>
          </div>
          <div className="row more-details">
            <div className="between padding-more-details">
              <p className="text-more-details">รายละเอียดสินค้า</p>
              <img
                className="cursor-pointer"
                src={vector1}
                width={13}
                height={8}
                onClick={() => setMoreDetails(!more_details)}
              />
            </div>

            {more_details && (
              <>
                <div className="more-detail-hr" />
                <p className="animated-slideDown">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="how-drink">
        <p>HOW TO DRINK ?</p>
      </div>
    </>
  );
};

export default Shop_details;
