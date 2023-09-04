import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Footer from "../footer";
import "../css/shopDetails.css";
import picture01 from "../../../assets/img/pynk/shop/group-37546.png";
import picture02 from "../../../assets/img/pynk/shop/product-picture02.png";
import picture03 from "../../../assets/img/pynk/shop/product-picture03.png";
import picture04 from "../../../assets/img/pynk/shop/product-picture04.png";
import vector from "../../../assets/img/pynk/shop/vector.png";
import vector1 from "../../../assets/img/pynk/shop/vector-1.png";
import mask_group from "../../../assets/img/pynk/shop/mask-group.png";
import mask_group_1 from "../../../assets/img/pynk/shop/mask-group-1.png";
import kaew from "../../../assets/img/pynk/shop/kaew.png";
import image_product from "../../../assets/img/pynk/shop/image-product.png";
import icon_circle from "../../../assets/img/pynk/shop/icon-circle.png";
import delete_bin_line from "../../../assets/img/pynk/shop/delete-bin-line.png";

import { flush } from "redux-saga/effects";
let slidesToShow = 4;

const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={`previous-btn head-shop`} onClick={onClick}>
          <img src={icon_circle} className="icon-previous-btn" />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={`next-btn head-shop`} onClick={onClick}>
          <img src={icon_circle} className="icon-next-btn" />
        </div>
      )}
    </>
  );
};
const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: true,
  autoplay: true, // ให้ Slider หมุนเอง
  autoplaySpeed: 9000, // ตั้งค่าให้หมุนทุก ๆ 30 วินาที
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.8,
        centerMode: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1.85,
        centerMode: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
  ],
};

const Shop_details = () => {
  const [mainImage, setMainImage] = useState(picture01);
  const [activeImage, setActiveImage] = useState(picture01);
  const [plusNumber, setPlusNumber] = useState(1);
  const [more_details, setMoreDetails] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <button
              className="shopping-bag"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              เพิ่มลงถุงช้อปปิ้ง
            </button>

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
      <div className="how-drink background-shop-details">
        <div className="box-how-drink">
          <p className="text-how-drink">HOW TO DRINK ?</p>

          <div className="justify-content margin-top row">
            <div className="kaew-bubble">
              <div className="bubble-radius">1</div>
              <div className="box-kaew">
                <img src={kaew} className="image-kaew" />
                <p className="text-kaew">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
            <div className="kaew-bubble ">
              <div className="bubble-radius">2</div>
              <div className="box-kaew">
                <img src={kaew} className="image-kaew" />
                <p className="text-kaew">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
            <div className="kaew-bubble">
              <div className="bubble-radius">3</div>
              <div className="box-kaew ">
                <img src={kaew} className="image-kaew" />
                <p className="text-kaew">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
            <div className="kaew-bubble">
              <div className="bubble-radius">4</div>
              <div className="box-kaew">
                <img src={kaew} className="image-kaew" />
                <p className="text-kaew">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel box-product">
        <div className="between">
          <p className="may-interested">คุณอาจสนใจสิ่งนี้</p>
          <p className="interested-all">ดูทั้งหมด</p>
        </div>
        <div>
          <Slider {...carouselProperties}>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
            <div className="box-item cursor-pointer">
              <p className="hot-shop-details">HOT</p>
              <img src={image_product} className="image-slider" />
              <div className="slider-hr" />
              <p className="text-center text-head-slider">
                BEBE FIT ROUTINE MAT
              </p>
              <p className="text-center text-slider">
                ฿99 <span className="slide-span">฿199 </span>
              </p>
            </div>
          </Slider>
        </div>
      </div>

      <Footer />

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className={
            windowWidth < 577 ? "modal-dialog" : "modal-dialog  modal-right"
          }
        >
          <div className="modal-content-shop-details">
            <div className="modal-header-shop-details">
              <h1
                className="modal-title-shop-details fs-5"
                id="exampleModalLabel"
              >
                ตะกร้าสินค้า
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body-shop-details  row">
              <div className="col-4 col-md-3">
                <img src={picture01} className="model-image-slider" />
              </div>
              <div className="col-8 col-md-9">
                <p className="fitto-shop">
                  FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”
                </p>
                <div className="plus-minus-box row">
                  <div className="plus-minus-model back-g  col-6">
                    <div className="mt-model">
                      <button
                        className="minus-model back-g-btn"
                        onClick={() => plusMinus("minus")}
                      >
                        <span className="minus-span">-</span>
                      </button>
                      <span className="plus-minus-number">{plusNumber}</span>
                      <button
                        className="plus-model back-g-btn"
                        onClick={() => plusMinus("plus")}
                      >
                        <span className="minus-span">+</span>
                      </button>
                    </div>
                  </div>
                  <img
                    src={delete_bin_line}
                    className="delete_bin_line col-3"
                  />
                  <p className="fitto-shop price-ml col-3">990 บาท</p>
                </div>
              </div>
            </div>
            <div className="modal-footer-shop-details">
              <p className="fitto-shop between">
                จำนวน 1 รายการ
                <span>900 บาท</span>
              </p>
              <Link to="shop-order-summary">
                <button
                  className="model-buy-now"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  คิดเงิน
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop_details;
