import React, { useState, useEffect } from "react";
import Slider from "react-slick";

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

import { flush } from "redux-saga/effects";

let slidesToShow = 4;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <button>PreviousBtn</button>
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
        <div className={className} onClick={onClick}>
          <button>NextBtn</button>
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
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ];

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
        <img
          src={windowWidth < 568 ? mask_group_1 : mask_group}
          className={windowWidth < 568 ? "mask-group-too" : "mask-group"}
        />
        <div className="box-how-drink">
          <p className="text-how-drink">HOW TO DRINK ?</p>

          <div className="justify-content row">
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
          <p>คุณอาจสนใจสิ่งนี้</p>
          <p>ดูทั้งหมด</p>
        </div>
        <Slider {...carouselProperties}>
          <div>
            <h3>Item 1</h3>
          </div>
          <div>
            <h3>Item 2</h3>
          </div>
          <div>
            <h3>Item 3</h3>
          </div>
          <div>
            <h3>Item 4</h3>
          </div>
          <div>
            <h3>Item 5</h3>
          </div>
          <div>
            <h3>Item 6</h3>
          </div>
          <div>
            <h3>Item 7</h3>
          </div>
          <div>
            <h3>Item 8</h3>
          </div>
          <div>
            <h3>Item 9</h3>
          </div>
          <div>
            <h3>Item 10</h3>
          </div>
        </Slider>
      </div>

      {/*  <div className="box-product">
        <div className="between">
          <p>คุณอาจสนใจสิ่งนี้</p>
          <p>ดูทั้งหมด</p>
        </div>
        <div className="align-items">
          <button onClick={prevSlide}>Prev</button>
          <div className="carousel-container">
            <div
              className="carousel-slide"
               style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerSlide)
                }%)`,
              }}
            >
              {items.map((item) => (
                <div key={item} className="carousel-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button onClick={nextSlide}>Next</button>
        </div>
      </div> */}
    </>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRNDING TVs</p>
      <p style={{ fontSize: "16px", padding: "5px 0", color: "green" }}>
        From ₹ 7,000
      </p>
      <p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
        Up To ₹ 5,000 Off on HDFC
      </p>
    </div>
  );
};

export default Shop_details;
