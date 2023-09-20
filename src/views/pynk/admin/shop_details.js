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
import icon_cart_white from "../../../assets/img/pynk/shop/icon_cart_white.png";
import colors from ".././colors";
import { useLocation } from "react-router-dom";
import { flush } from "redux-saga/effects";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/pynk/get";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

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
        slidesToShow: 1.5,
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

const Shop_details = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [mainImage, setMainImage] = useState();
  const [activeImage, setActiveImage] = useState(picture01);
  const [number, setNumber] = useState(1);
  const [more_details, setMoreDetails] = useState(false);
  const [expires_cookies, setExpires_cookies] = useState(7);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { products_pynk, status_products_pynk } = useSelector(
    (state) => state.getPynk
  );
  const [product, setProduct] = useState(products_pynk);
  const [productId, setProductId] = useState(null);
  const [product_cookies, setProduct_cookies] = useState(null);

  const { id } = match.params; // รับ ID จาก URL
  //const [id, setId]= useState(match.params); //240230303013

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

  const handleImageClick = (image) => {
    setMainImage(image);
    setActiveImage(image);
  };

  const plusMinus = (type) => {
    if (type === "plus") {
      setNumber((prevNumber) => prevNumber + 1);
    } else if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };
  useEffect(() => {
    setProduct(products_pynk);
  }, [products_pynk]);

  useEffect(() => {
    setProductId(
      products_pynk && products_pynk.find((status) => status.product_id == id)
    );
    setNumber(1);
  }, [id]);

  const dataCookies = () => {
    const product_name = Cookies.get("product_name");
    if (product_name && product_name != "undefined") {
      // มีสินค้า
      const productArray = product_name && JSON.parse(product_name);

      const foundProduct =
        Array.isArray(productArray) &&
        productArray.find((product) => product.sku == productId.product_id);

      if (!foundProduct) {
        // product_id สินค้าไม่ซ้ำกัน
        const array = Array.isArray(productArray)
          ? productArray
          : [productArray];
        const product_list = {
          image: productId.image_url,
          sku: productId.product_id,
          name: productId.product_name,
          number: number,
          pricepernumber: productId.price,
          discount: "0",
          totalprice: parseInt(productId.price) * parseInt(number),
        };
        array.push(product_list);
        Cookies.set("product_name", JSON.stringify(array), {
          expires: expires_cookies,
        });
      } else {
        // product_id สินค้าซ้ำกัน
        const foundProductIndex =
          Array.isArray(productArray) &&
          productArray.findIndex(
            (product) => product.sku === productId.product_id
          );

        if (foundProductIndex !== -1) {
          productArray[foundProductIndex].number =
            parseInt(productArray[foundProductIndex].number) + parseInt(number);

          productArray[foundProductIndex].totalprice =
            parseInt(productArray[foundProductIndex].pricepernumber) *
            parseInt(productArray[foundProductIndex].number);

          Cookies.set("product_name", JSON.stringify(productArray), {
            expires: expires_cookies,
          });
          setNumber(1);
        }
      }
    } else {
      // ยังไม่มีสินค้า
      const product_list = [
        {
          image: productId.image_url,
          sku: productId.product_id,
          name: productId.product_name,
          number: number,
          pricepernumber: productId.price,
          discount: "0",
          totalprice: parseInt(productId.price) * parseInt(number),
        },
      ];
      Cookies.set("product_name", JSON.stringify(product_list), {
        expires: expires_cookies,
      });
    }
    const product_name1 = Cookies.get("product_name");
    setProduct_cookies(product_name1 && JSON.parse(product_name1));
  };

  const clickSelected = () => {
    dataCookies();
    showMinus();
  };

  const buy_now = () => {
    dataCookies();
    if (product_cookies != null) {
      history.push("/shop-order-summary");
    }
  };

  const showMinus = (action) => {
    document.getElementById("modalAchievement1Btn") &&
      document.getElementById("modalAchievement1Btn").click();
  };

  useEffect(() => {
    if (productId) {
      // productId && productId.image_url;
      setMainImage(productId && productId.image_url);
    }
  }, [productId]);

  //เเก้จำนวนสินค้า ใน model && Cookies
  const plusMinusCookies = (e, id) => {
    const product_name = Cookies.get("product_name");
    if (product_name && product_name != "undefined") {
      const productArray = product_name && JSON.parse(product_name);
      const foundProductIndex =
        Array.isArray(productArray) &&
        productArray.findIndex((product) => product.sku == id);

      if (foundProductIndex !== -1) {
        if (e == "plus") {
          productArray[foundProductIndex].number =
            parseInt(productArray[foundProductIndex].number) + 1;
          productArray[foundProductIndex].totalprice =
            parseInt(productArray[foundProductIndex].pricepernumber) *
            parseInt(productArray[foundProductIndex].number);

          Cookies.set("product_name", JSON.stringify(productArray), {
            expires: expires_cookies,
          });
        } else {
          // ลบ ค่า ได้ถึงเเค่ 1
          if (parseInt(productArray[foundProductIndex].number) > 1) {
            productArray[foundProductIndex].number =
              parseInt(productArray[foundProductIndex].number) - 1;
            productArray[foundProductIndex].totalprice =
              parseInt(productArray[foundProductIndex].pricepernumber) *
              parseInt(productArray[foundProductIndex].number);

            Cookies.set("product_name", JSON.stringify(productArray), {
              expires: expires_cookies,
            });
          }
        }
        const product_name1 = Cookies.get("product_name");
        setProduct_cookies(product_name1 && JSON.parse(product_name1));
      }
    }
  };
  // ลบ ค้า  cookies
  const deleteArrayCookies = (id) => {
    const product_name = Cookies.get("product_name");
    if (product_name && product_name != "undefined") {
      let productArray = product_name && JSON.parse(product_name);

      productArray =
        productArray && productArray.filter((product) => product.sku != id);
      Cookies.set("product_name", JSON.stringify(productArray), {
        expires: expires_cookies,
      });
      const product_name1 = Cookies.get("product_name");
      setProduct_cookies(product_name1 && JSON.parse(product_name1));
    }
  };
  // คำนวน ราคา ทั้งหมด
  const totalSum =
    product_cookies &&
    product_cookies.reduce((acc, product) => acc + product.totalprice, 0);

  const nutritional_value = productId ?
    productId.nutritional_value ?
      JSON.parse(productId.nutritional_value)
      :
      null
    :
    null;

  return (
    <>
      <div className="url-product">
        <a href="/">สินค้า</a> {"> "}
        <a href="/categories">หมวดหมู่</a> {"> "}
        <a href="/categories/Fitto-Plant-Protein">
          <span>Fitto Plant Protein</span>
        </a>
      </div>
      <div className="product-details row">
        <div className="col-12  col-sm-6 col-md-5 col-lg-5 ">
          <div className="image-center">
            <img src={mainImage} className="image-product" />
          </div>
          <div className="row box-image">
            <div className="box-img mb-3">
              <img
                src={productId && productId.image_url}
                className={`image ${activeImage === productId && productId.image_url
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  handleImageClick(productId && productId.image_url)
                }
              />
            </div>
            <div className="box-img mb-3">
              <img
                src={picture02}
                className={`image ${activeImage === picture02 ? "active" : ""}`}
                onClick={() => handleImageClick(picture02)}
              />
            </div>
            <div className="box-img mb-3">
              <img
                src={picture03}
                className={`image ${activeImage === picture03 ? "active" : ""}`}
                onClick={() => handleImageClick(picture03)}
              />
            </div>
            <div className="box-img mb-3">
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
            <p className="text-head">{productId && productId.product_name}</p>
            {/*      <p className="text-name">ธัญพืชรสชานม</p> */}
            <p className="text-price">
              ฿{productId && productId.price.toLocaleString()}
            </p>
            {/* <p className="text-span-price">฿1,990 </p> */}
            <p className="text-span">
              {productId && productId.description}
            </p>
            <div className="row">
              {
                nutritional_value &&
                nutritional_value.map((item, index) => (
                  <div className="amount mb-3">
                    <p className="text-amount text-center">{item.nutrition_name}</p>
                    <p className="text-amount-number text-center">{item.value}</p>
                    <p className="text-amount-power text-center">{item.unit}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <p className="plus-minus">
            <button className="minus" onClick={() => plusMinus("minus")}>
              {"-"}
            </button>
            <span className="plus-minus-number">{number}</span>
            <button className="plus" onClick={() => plusMinus("plus")}>
              {"+"}
            </button>
          </p>
          <p className="stock-left text-center-576">
            <span>
              {" "}
              <img src={vector} className="vector-image" />
            </span>
            เหลือสินค้าอยู่ {productId && productId.available_stock} ชิ้น
          </p>
          <div className="row justify-content-576">
            {
              (productId && (productId.available_stock > 0)) ?
                <>
                  <button onClick={() => clickSelected()} className="shopping-bag">
                    เพิ่มลงถุงช้อปปิ้ง
                  </button>
                  <button className="buy-now" onClick={() => buy_now()}>
                    ซื้อเลย
                  </button>
                </>
                :
                <>
                  <button className="shopping-bag" style={{ backgroundColor: "#D3D3D3", cursor: "none" }}>
                    เพิ่มลงถุงช้อปปิ้ง
                  </button>
                  <button className="buy-now" style={{ backgroundColor: "#D3D3D3", cursor: "none" }} >
                    ซื้อเลย
                  </button>
                </>
            }



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
                  {productId && productId.detail}
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
            {product &&
              product.map((item, index) => (
                <Link to={`/shop_details/${item.product_id}`}>
                  <div
                    key={index}
                    className="box-item-hover cursor-pointer"
                  /*   onClick={() => seId_order(item.product_id)} */
                  >
                    <p className="hot-shop-details">HOT</p>
                    <img src={item.image_url} className="image-slider" />
                    <div className="slider-hr" />
                    <p className="text-center text-head-slider">
                      {item.product_name}
                    </p>
                    <p className="text-center text-slider-hover">
                      ฿{item.price} <span className="slide-span">฿199 </span>
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

      <Footer />

      <button
        style={{ display: "none" }}
        type="button"
        id="modalAchievement1Btn"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
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
            <div className="modal-header-shop-details mt-3">
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
            <div>
              <div className="modal-body-shop-details  row">
                {product_cookies &&
                  product_cookies.map((product, index) => (
                    <>

                      <div className="col-4 col-md-3 mb-3">
                        <img
                          src={product.image}
                          className="model-image-slider"
                        />
                      </div>
                      <div className="col-8 col-md-9  mb-3">
                        <p className="fitto-shop">{product.name}</p>
                        <div className="plus-minus-box row">
                          <div className="plus-minus-model back-g  col-6">
                            <div className="mt-model">
                              <button
                                className="minus-model back-g-btn"
                                onClick={() =>
                                  plusMinusCookies("minus", product.sku)
                                }
                              >
                                <span className="minus-span">-</span>
                              </button>
                              <span className="plus-minus-number">
                                {product.number}
                              </span>
                              <button
                                className="plus-model back-g-btn"
                                onClick={() =>
                                  plusMinusCookies("plus", product.sku)
                                }
                              >
                                <span className="minus-span">+</span>
                              </button>
                            </div>
                          </div>
                          <img
                            src={delete_bin_line}
                            onClick={() => deleteArrayCookies(product.sku)}
                            className="delete_bin_line col-3"
                          />
                          <p className="fitto-shop price-ml col-3">
                            {product.totalprice.toLocaleString()} บาท
                          </p>
                        </div>
                      </div>

                    </>
                  ))}
              </div>
              <div className="modal-footer-shop-details">
                <p className="fitto-shop between">
                  จำนวน {product_cookies && product_cookies.length} รายการ
                  <span>{totalSum && totalSum.toLocaleString()} บาท</span>
                </p>
                {
                  (product_cookies && (product_cookies.length > 0)) ?
                    <Link to="/shop-order-summary">
                      <button
                        className="model-buy-now"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        คิดเงิน
                      </button>
                    </Link>
                    :
                    <button
                      className="model-buy-now"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      คิดเงิน
                    </button>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop_details;
