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
import VectorNew from "../../../assets/img/pynk/shop/VectorNew.png";
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

import { update_status_cart } from "../../../redux/pynk/orders";
import { updateProductStock } from "../../../redux/pynk/admin";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";

let slidesToShow = 5.2;

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
        slidesToShow: 1.6,
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
        slidesToShow: 2.2,
        centerMode: true,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2.5,
        centerMode: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.9,
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
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3.6,
        centerMode: true,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        centerMode: true,
      },
    },
  ],
};

const Shop_details_Multiple = ({ match }) => {
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
  const [products, setProducts] = useState(products_pynk);
  const [productId, setProductId] = useState(null);
  const [product_cookies, setProduct_cookies] = useState(null);
  const [groupedProducts, setGroupedProducts] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isCartBlank, setisCartBlank] = useState(false);
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

  const plusMinus = (type, proId) => {
    const filterItem = groupedProducts.filter(
      (item) => item.product_id == proId
    );
    setGroupedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === proId
          ? {
              ...product,
              number:
                type === "plus" ? (product.number = 1) : (product.number = 0),
            }
          : product
      )
    );
    const existingItem = selectedItems.some(
      (item) => item.product_id === proId
    );
    if (!existingItem) {
      setSelectedItems([...selectedItems, ...filterItem]);
    }
  };

  useEffect(() => {
    setProducts(products_pynk);
  }, [products_pynk]);

  useEffect(() => {
    const currProduct = products_pynk.find((status) => status.product_id == id);
    const curr_group_name = currProduct && currProduct.group_name;

    const grouped = products_pynk.reduce((acc, product) => {
      const { product_id, group_name, property } = product;
      if (curr_group_name == group_name) {
        if (!acc[group_name]) {
          acc[group_name] = [];
        }
        acc[group_name].push({ product_id, group_name, property });
      }
      return acc;
    }, {});
    const newGroup = grouped[curr_group_name].map((item) => {
      return {
        ...item,
        number: 0,
      };
    });
    setGroupedProducts(newGroup);
  }, []);

  useEffect(() => {
    setProductId(
      products_pynk && products_pynk.find((status) => status.product_id == id)
    );
    setNumber(1);
    dispatch(updateProductStock(id));
  }, [id]);

  const status_update_stock = useSelector(({ admin }) =>
    admin ? admin.status_update_stock : ""
  );
  const available_stock = useSelector(({ admin }) =>
    admin ? admin.available_stock : ""
  );

  useEffect(() => {
    if (status_update_stock === "success" && productId) {
      // คัดลอก state ทั้ง object
      const updatedState = { ...productId };

      // ทำการอัปเดตค่าใน object
      updatedState.available_stock = available_stock;

      setProductId(updatedState);
    }
  }, [status_update_stock]);

  const dataCookies = () => {
    const filterProduct = products.filter((item) =>
      selectedItems.some((val) => val.product_id == item.product_id)
    );

    const originalData = filterProduct.map((currentItem) => {
      return {
        image: currentItem.image_url,
        sku: currentItem.product_id,
        name: currentItem.product_name,
        number: 1,
        pricepernumber: currentItem.after_discount
          ? currentItem.after_discount
          : currentItem.price,
        discount: "0",
        totalprice:
          parseInt(
            productId.after_discount
              ? productId.after_discount
              : productId.price
          ) * parseInt(number),
      };
    });

    Cookies.set("product_name", JSON.stringify(originalData), {
      expires: expires_cookies,
    });
  };

  const clickSelected = () => {
    dataCookies();
    //showMinus();
    dispatch(update_status_cart("success"));
  };

  const buy_now = () => {
    if (selectedItems.length == 0) {
      setisCartBlank(true);
    } else {
      dataCookies();
      history.push("/shop-order-summary");
      setisCartBlank(false);
    }
  };

  const showMinus = (action) => {
    document.getElementById("modalAchievement1Btn_shopDetails") &&
      document.getElementById("modalAchievement1Btn_shopDetails").click();
  };

  useEffect(() => {
    if (productId) {
      // productId && productId.image_url;
      setMainImage(productId && productId.image_url);
    }
  }, [productId]);

  // คำนวน ราคา ทั้งหมด
  const totalSum =
    product_cookies &&
    product_cookies.reduce((acc, product) => acc + product.totalprice, 0);

  const nutritional_value = productId
    ? productId.nutritional_value
      ? JSON.parse(productId.nutritional_value)
      : null
    : null;

  const imageList = JSON.parse(productId && productId.image_list);
  return (
    <>
      <div className="url-product">
        <Link to="/shop">สินค้า</Link>
        <span style={{ fontWeight: "bold" }}>{" > "}</span>
        <Link to="/shop">หมวดหมู่</Link>
        <span style={{ fontWeight: "bold" }}>{" > "}</span>
        <a href="/categories/Fitto-Plant-Protein">
          <span>Fitto Plant Protein</span>
        </a>
      </div>
      <h1>Multiple</h1>

      <div className="product-details row">
        <div className="col-12  col-sm-6 col-md-5 col-lg-5 ">
          <div className="image-center">
            <img src={mainImage} className="image-product" />
          </div>
          <div className="row box-image">
            {imageList ? (
              imageList.map((imageUrl, index) => (
                <div className="box-img mb-3" key={index}>
                  <img
                    key={index}
                    alt={`imageUrl`}
                    src={imageUrl}
                    className={`image ${
                      activeImage === productId && productId.image_url
                        ? "active"
                        : ""
                    }`}
                    style={{
                      border: imageUrl == mainImage ? "2px solid #EF60A3" : "",
                    }}
                    onClick={() => handleImageClick(imageUrl)}
                  />
                </div>
              ))
            ) : (
              <div className="box-img mb-3">
                <img
                  src={productId && productId.image_url}
                  className={`image ${
                    activeImage === productId && productId.image_url
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleImageClick(productId && productId.image_url)
                  }
                  alt="img"
                />
              </div>
            )}
          </div>
        </div>
        <div className="box-image col-12 col-sm-6  col-md-7  col-lg-7">
          <div className="box-details">
            <p className="text-head">{productId && productId.product_name}</p>
            {productId && productId.after_discount ? (
              <>
                <p className="text-price">
                  ฿{productId && productId.after_discount.toLocaleString()}
                </p>
                <p className="text-span-price">
                  ฿{productId && productId.price.toLocaleString()}{" "}
                </p>
              </>
            ) : (
              <p className="text-price">
                ราคา {productId && productId.price.toLocaleString()} บาท
              </p>
            )}
            {/* Start Mutilple */}
            {groupedProducts && (
              <Box>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                  <p className="text-span">เลือก :</p>
                  <p className="text-span">จำนวน 0/2 กล่อง</p>
                </Stack>

                {groupedProducts.map((item, index) => (
                  <Box key={index}>
                    <Stack
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack
                        flexDirection={"row"}
                        gap={2}
                        alignItems={"center"}
                      >
                        <div
                          style={{ background: "red", width: 70, height: 70 }}
                        />
                        <p style={{ fontWeight: 600 }}>{item.property}</p>
                      </Stack>

                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        sx={{
                          background: "#FFF8FB",
                          width: "fit-content",
                          height: 40,
                        }}
                      >
                        <Button
                          sx={{
                            color: "#EF60A3",
                            fontWeight: 900,
                            fontSize: 20,
                            ":hover": { background: "none" },
                          }}
                          variant="text"
                          onClick={() => plusMinus("minus", item.product_id)}
                          disabled={item.number == 0 ? true : false}
                        >
                          {"-"}
                        </Button>
                        <span>{item.number}</span>
                        <Button
                          sx={{
                            color: "#EF60A3",
                            fontWeight: 900,
                            fontSize: 20,
                            ":hover": { background: "none" },
                          }}
                          variant="text"
                          onClick={() => plusMinus("plus", item.product_id)}
                        >
                          {"+"}
                        </Button>
                      </Stack>
                    </Stack>
                    <Divider sx={{ mt: 2, mb: 2, borderBottomWidth: 2 }} />
                  </Box>
                ))}
              </Box>
            )}
            {/* END Mutilple */}

            {isCartBlank ? (
              <Alert
                severity="error"
                style={{
                  color: "red",
                  ".MuiAlert-icon": {
                    color: "red",
                  },
                }}
              >
                กรุณาระบุตัวเลือกสินค้า
              </Alert>
            ) : null}

            <p className="text-span">{productId && productId.description}</p>
            <div className="row">
              {nutritional_value &&
                nutritional_value[0].value !== "" &&
                nutritional_value.map((item, index) => (
                  <div className="amount mb-3" key={index}>
                    <p className="text-amount text-center">
                      {item.nutrition_name}
                    </p>
                    <p className="text-amount-number text-center">
                      {item.value}
                    </p>
                    <p className="text-amount-power text-center">{item.unit}</p>
                  </div>
                ))}
            </div>

            <p className="stock-left mt-4">
              <span>
                <img src={VectorNew} className="vector-image" alt="VectorNew" />
              </span>
              เหลือสินค้าอยู่{" "}
              {productId &&
                (productId.available_stock <= 0
                  ? 0
                  : productId.available_stock)}{" "}
              ชิ้น
            </p>
          </div>

          <div className="row justify-content-576 mt-5">
            {productId && productId.available_stock > 0 ? (
              <>
                <button
                  onClick={() => clickSelected()}
                  className="shopping-bag"
                >
                  เพิ่มลงถุงช้อปปิ้ง
                </button>
                <button className="buy-now" onClick={() => buy_now()}>
                  ซื้อเลย
                </button>
              </>
            ) : (
              <>
                <button
                  className="shopping-bag"
                  style={{ backgroundColor: "#D3D3D3", cursor: "default" }}
                >
                  เพิ่มลงถุงช้อปปิ้ง
                </button>
                <button
                  className="buy-now"
                  style={{ backgroundColor: "#D3D3D3", cursor: "default" }}
                >
                  ซื้อเลย
                </button>
              </>
            )}
          </div>
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
              alt="'img"
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
                <img src={kaew} className="image-kaew" alt="img" />
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
            {products &&
              products.map((item, index) => (
                <Link to={`/shop_details/${item.product_id}`} key={index}>
                  <div
                    key={index}
                    className="box-item-hover cursor-pointer"
                    /*   onClick={() => seId_order(item.product_id)} */
                  >
                    <p className="hot-shop-details">HOT</p>
                    <img src={item.image_url} className="image-slider" />
                    <div className="slider-hr" />
                    <p className="text-center text-head-slider white-space-ellipsis">
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
    </>
  );
};

export default Shop_details_Multiple;
