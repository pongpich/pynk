import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import colors from "./colors";
import home_shop from "../../assets/img/pynk/shop/home_shop.jpg";
import icon_kg from "../../assets/img/pynk/shop/Group37558.png";
import icon_fitto from "../../assets/img/pynk/shop/Group37559.png";
import icon_burner from "../../assets/img/pynk/shop/FITTO_prework_Mixberry.png";
import icon_cup from "../../assets/img/pynk/shop/18072.png";
import icon_supplement from "../../assets/img/pynk/shop/18071.png";
import icon_other from "../../assets/img/pynk/shop/icon_other.png";
import bfr_ball from "../../assets/img/pynk/shop/bfr_ball.png";
import bfr_rope from "../../assets/img/pynk/shop/bfr_rope.png";
import image_product from "../../assets/img/pynk/shop/image-product.png";
import bfr_coupon from "../../assets/img/pynk/shop/bfr_coupon.png";
import icon_circle from "../../assets/img/pynk/shop/icon-circle.png";
import icon_cart_white from "../../assets/img/pynk/shop/icon_cart_white.png";
import { useHistory } from "react-router-dom";
import Footer from "./footer";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/pynk/get";
import { Link } from "react-router-dom";

import "./css/shop.css";

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
  slidesToScroll: 3,
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
        slidesToShow: 1.8,
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
        slidesToShow: 4,
        centerMode: true,
      },
    },
  ],
};

const carouselProperties2 = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 3,
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
        slidesToShow: 1.8,
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
        slidesToShow: 4,
        centerMode: true,
      },
    },
  ],
};

const data = [1, 2, 3, 4, 5, 6];

function ShopPynk() {
  const history = useHistory();
  const dispatch = useDispatch();
  /*   const { products_pynk, status_products_pynk } = useSelector(
    (state) => state.getPynk
  ); */
  const { products_pynk, status_products_pynk } = useSelector(
    (state) =>
      state.getPynk || { products_pynk: null, status_products_pynk: null } // ใส่การสร้าง object ว่าง {} ถ้า state.getPynk ไม่มีค่า
  );

  const [promotionalProduct, setPromotionalProduct] = useState(products_pynk);
  const [statusPromotionalProduct, setStatusPromotionalProduct] =
    useState(status_products_pynk);

  const [newProduct, setNewProduct] = useState(products_pynk);
  const [statusNewProduct, setStatusNewProduct] =
    useState(status_products_pynk);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setPromotionalProduct(products_pynk);
    setStatusPromotionalProduct(status_products_pynk);
  }, [products_pynk]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // คำสั่งนี้จะเลื่อนหน้าไปที่ด้านบนสุดของหน้า
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log("promotionalProduct", promotionalProduct);
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: colors.red2,
          justifyContent: "center",
          alignItems: "center",
          height: 54,
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "20px",
          }}
        >
          Special Offer Discount 20%
        </h1>
      </div>

      <div className="head-shop">
        <img height={355} width={"100%"} src={home_shop} />
      </div>

      <div
        className="row gap-5 mt-5"
        style={{
          justifyContent: "center",
          display: "flex",
          margin: 0,
        }}
      >
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 8,
          }}
        >
          <Link to="shop-category/exercise_equipment">
            <div className="row">
              <div
                className="col-12"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  width={156}
                  height={135}
                  src={icon_kg}
                  className="icon-kg"
                />
              </div>

              <div className="icon-kg-text">
                <span className="d-flex justify-content-center">
                  อุปกรณ์ <br />
                  ออกกำลังกาย
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 8,
          }}
        >
          <Link to="shop-category/fitto_plant_protein">
            <div className="row">
              <div
                className="col-12"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  width={155}
                  height={131}
                  src={icon_fitto}
                  className="icon-kg"
                />
              </div>
              <div className="icon-kg-text">
                <span className="d-flex justify-content-center">
                  Fitto <br />
                  Plant Protein
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 8,
            padding: 0,
          }}
        >
          <Link to="shop-category/fitto_pre_workout_fat_burner">
            <div>
              <div
                className="col-12"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  width={67}
                  height={132}
                  src={icon_burner}
                  className="icon-kg"
                />
              </div>
              <div className="icon-kg-text">
                <span className="d-flex justify-content-center">
                  Fitto Pre-Work Out <br />& Fat Burner
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 8,
          }}
        >
          <Link to="shop-category/fitto_drink">
            <div className="row">
              <div
                className="col-12"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  width={92}
                  height={152}
                  src={icon_cup}
                  className="icon-kg"
                />
              </div>

              <div className="icon-kg-text">
                <span className="d-flex justify-content-center">
                  Fitto Drink
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 8,
          }}
        >
          <Link to="shop-category/food_supplement">
            <div className="row">
              <div
                className="col-12"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  width={92}
                  height={151}
                  src={icon_supplement}
                  className="icon-kg"
                />
              </div>
              {/*  <span
              className="d-flex justify-content-center align-items-center"
              style={{
                height: 48,
              }}
            >
              อาหารเสริม
            </span> */}
              <div className="icon-kg-text">
                <span className="d-flex justify-content-center">
                  อาหารเสริม
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: colors.primary2,
            width: "180px",
            height: "180px",
            borderRadius: 8,
          }}
        >
          <Link to="shop-category/another">
            <div className="row">
              <div
                className="col-12"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: 15,
                }}
              >
                <img width={74} height={74} src={icon_other} />
              </div>
              <span
                className="d-flex justify-content-center align-items-center icon_other-text"
                style={{
                  height: 48,
                }}
              >
                อื่นๆ
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="height-box-slider">
        <div>
          <div
            className="d-flex justify-content-between"
            style={{
              paddingLeft: "3%",
              paddingRight: "3%",
              marginBottom: 16,
            }}
          >
            <span
              className="fw-bold"
              style={{ color: "#4F4F4F", fontSize: 20 }}
              π
            >
              สินค้าดีมีโปร
            </span>
            <span
              className="text-decoration-underline"
              style={{ color: colors.primary4, fontSize: 14 }}
            >
              ดูทั้งหมด
            </span>
          </div>
          <div className="slider-div">
            <Slider {...carouselProperties}>
              {promotionalProduct &&
                promotionalProduct.map((item, index) => (
                  <Link to={`/shop_details/${item.product_id}`}>
                    <div className="box-item-hover cursor-pointer">
                      <p className="hot-shop-details">HOT</p>
                      <img src={item.image_url} className="image-slider" />
                      <div className="slider-hr" />
                      <p className="text-center text-head-slider white-space-ellipsis">
                        {item.product_name}
                      </p>
                      <p className="text-center text-slider-hover">
                        ฿{item.price.toLocaleString()}{" "}
                        {/* <span className="slide-span">฿199 </span> */}
                      </p>

                      <button
                        type="button"
                        className="btn  add-shopping-bag justify-content-center align-items-center"
                        style={{
                          backgroundColor: colors.primary4,
                          width: "100%",
                          borderRadius: 46,
                          marginTop: 0,
                          marginBottom: 32,
                          border: 0,
                        }}
                      >
                        <span className="span-div">
                          <span className="add_shop-test_span">
                            <img
                              width={18}
                              height={18}
                              src={icon_cart_white}
                              className="icon-cart-white"
                            />
                            เพิ่มลงถุงช้อปปิ้ง
                          </span>
                        </span>
                      </button>
                    </div>
                  </Link>
                ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="height-box-slider">
        <div>
          <div
            className="d-flex justify-content-between"
            style={{
              paddingLeft: "3%",
              paddingRight: "3%",
              marginBottom: 16,
            }}
          >
            <span
              className="fw-bold"
              style={{ color: "#4F4F4F", fontSize: 20 }}
              π
            >
              แนะนำสินค้าใหม่
            </span>
            <span
              className="text-decoration-underline"
              style={{ color: colors.primary4, fontSize: 14 }}
            >
              ดูทั้งหมด
            </span>
          </div>
          <div className="slider-div">
            <Slider {...carouselProperties2}>
              {promotionalProduct &&
                promotionalProduct.map((item, index) => (
                  <Link to={`/shop_details/${item.product_id}`}>
                    <div className="box-item-hover cursor-pointer">
                      <p className="hot-shop-details">HOT</p>
                      <img src={item.image_url} className="image-slider" />
                      <div className="slider-hr" />
                      <p className="text-center text-head-slider white-space-ellipsis">
                        {item.product_name}
                      </p>
                      <p className="text-center text-slider-hover">
                        ฿{item.price}
                        {/* <span className="slide-span">฿199 </span> */}
                      </p>

                      <button
                        type="button"
                        className="btn  add-shopping-bag justify-content-center align-items-center"
                        style={{
                          backgroundColor: colors.primary4,
                          width: "100%",

                          borderRadius: 46,
                          marginTop: 0,
                          marginBottom: 32,
                          border: 0,
                        }}
                      >
                        <span className="span-div">
                          <span className="add_shop-test_span">
                            <img
                              width={18}
                              height={18}
                              src={icon_cart_white}
                              className="icon-cart-white"
                            />
                            เพิ่มลงถุงช้อปปิ้ง
                          </span>
                        </span>
                      </button>
                    </div>
                  </Link>
                ))}
            </Slider>
          </div>
        </div>
      </div>

      <div
        className="d-flex box-bfr_coupon "
        style={{
          paddingLeft: "3%",
          paddingRight: "3%",
          gap: 30,
          overflowX: "auto",
          width: "100%",
        }}
      >
        <img src={bfr_coupon} className="bfr-coupon" />
        <img src={bfr_coupon} className="bfr-coupon" />
      </div>
      <Footer />
    </div>
  );
}

export default ShopPynk;
