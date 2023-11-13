import { React, useState, useEffect } from "react";
import "../css/shop_order_summary.css";
import Footer from "../footer";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";

import picture01 from "../../../assets/img/pynk/shop/group-37546.png";
import arrow_left_line from "../../../assets/img/pynk/shop/arrow-left-s-line.png";
import delete_bin_line from "../../../assets/img/pynk/shop/delete-bin-line.png";
import Logo_payment_1 from "../../../assets/img/pynk/shop/Logo-payment-1.png";
import Logo_payment_2 from "../../../assets/img/pynk/shop/Logo-payment-2.png";
import Logo_payment_3 from "../../../assets/img/pynk/shop/Logo-payment-3.png";
import Logo_payment_4 from "../../../assets/img/pynk/shop/Logo-payment-4.png";
import Logo_payment_5 from "../../../assets/img/pynk/shop/Logo-payment-5.png";
import icon_Email from "../../../assets/img/pynk/shop/icon-Email.png";
import icon_Google from "../../../assets/img/pynk/shop/icon-Google.png";
import icon_facebook from "../../../assets/img/pynk/shop/icon-facebook.png";
import icon_line from "../../../assets/img/pynk/shop/icon-line.png";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/pynk/auth";
import GoogleLoginComponent from "../googleFacebookLineLogin/googleLogin";

const Shop_order_summary = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [plusNumber, setPlusNumber] = useState(1);
  const [statusLogin, setStatusLogin] = useState(0);
  const [statusContinue, setStatusContinue] = useState(0);
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [product_cookies, setProduct_cookies] = useState(null);
  const [expires_cookies, setExpires_cookies] = useState(7);
  const { pathname } = useLocation();
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));
  const statusLogin2 = useSelector(({ auth }) =>
    auth ? auth.statusLogin : ""
  );
  const googleProfile = useSelector(({ auth }) =>
    auth ? auth.googleProfile : ""
  );

  useEffect(() => {
    if (statusLogin2 === "success") {
      //สั่งปิด Popup Login
      document.getElementById("btn-close-login-modal") &&
        document.getElementById("btn-close-login-modal").click();
    }
  }, [statusLogin2]);

  useEffect(() => {
    window.scrollTo(0, 0); // คำสั่งนี้จะเลื่อนหน้าไปที่ด้านบนสุดของหน้า
  }, [pathname]);

  useEffect(() => {
    // login google
    if (googleProfile && googleProfile.profile != null) {
      document.getElementById("btn-close-login-modal") &&
        document.getElementById("btn-close-login-modal").click();
      history.push("/shop-payment");
    }
  }, [googleProfile]);

  const plusMinus = (type) => {
    if (type === "plus") {
      setPlusNumber((prevNumber) => prevNumber + 1);
    } else if (plusNumber > 1) {
      setPlusNumber((prevNumber) => prevNumber - 1);
    }
  };

  useEffect(() => {
    const product_name1 = Cookies.get("product_name");
    setProduct_cookies(product_name1 && JSON.parse(product_name1));
  }, []);

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

  const onSubmit = () => {
    //เช็คว่า login หรือยัง
    if (user) {
      history.push("/shop-payment");
    }
  };

  const handleGoogleLoginClick = () => {
    // Handle any logic you need before or after GoogleLoginComponent is triggered
    console.log("Button clicked! Performing Google login...");

    // Now, you can use GoogleLoginComponent by including it in the JSX
    return <GoogleLoginComponent />;
  };

  const selectLogin = () => {
    return (
      <>
        <div className="modal-content-payment">
          <div className="modal-header">
            <button
              type="button"
              id="btn-close-login-modal"
              className="btn-close mt-16"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body-payment login-button justify-content">
            <div className="box-button-login">
              <p className="want-login">
                ต้องการเข้าสู่ระบบ/ ลงทะเบียนของเราหรือไม่?
              </p>
              <button
                className="btn-want-login"
                onClick={() => setStatusLogin(1)}
              >
                <img src={icon_Email} className="icon-login-model" />
                เข้าใช้งานด้วย Email
              </button>

              <GoogleLoginComponent />

              <button
                className="btn-want-login" /*  onClick={handleFacebookLogin} */
              >
                <img src={icon_facebook} className="icon-login-model" />
                เข้าใช้งานด้วย Facebook
              </button>
              <button
                className="btn-want-login" /*  onClick={handleLineLogin} */
              >
                <img src={icon_line} className="icon-login-model" />
                เข้าใช้งานด้วย Line
              </button>
              <p className="or-login"> หรือ</p>
              <Link to="/shop-payment">
                <button
                  className="btn-want-login"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  สั่งซื้อโดยไม่ได้เป็นสมาชิก
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleChange = (event) => {
    var inputID = event.target.id;

    switch (inputID) {
      case "emailLogin":
        setEmailLogin(event.target.value);
        break;
      case "passwordLogin":
        setPasswordLogin(event.target.value);
        break;
      default:
        break;
    }
  };

  const formLogin = () => {
    return (
      <>
        <div className="modal-content-payment-form">
          <div className="modal-header">
            <img
              src={arrow_left_line}
              className="arrow-left-line-form cursor-pointer"
              onClick={() => setStatusLogin(0)}
            />
          </div>
          <div className="modal-body-payment ">
            <div className="box-button-login">
              <button
                type="button"
                id="btn-close-login-modal"
                className="btn-close mt-16"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ display: "none" }}
              ></button>
              <p className="want-login want-to">เข้าใช้งานด้วยอีเมล</p>
              <div className="box-input">
                <form>
                  <p className="text-login-payment">
                    อีเมลเข้าใช้งาน{" "}
                    <span className="login-payment-span">*</span>
                  </p>
                  <input
                    type="text"
                    value={emailLogin}
                    id="emailLogin"
                    onChange={handleChange}
                    className="input-form-login"
                    placeholder="example@mail.com"
                  />
                  <p className="text-login-payment">
                    รหัสผ่าน <span className="login-payment-span">*</span>
                  </p>
                  <div className="input-password">
                    <input
                      type="password"
                      value={passwordLogin}
                      id="passwordLogin"
                      onChange={handleChange}
                      className="input-form-login"
                      placeholder="กรุณาระบุรหัสผ่าน"
                    />
                    <span className="show-pass">แสดง</span>
                  </div>
                </form>
                <a className="forgot-password">ลืมรหัสผ่าน?</a>
                <button
                  className={
                    emailLogin && passwordLogin
                      ? "btn-buy-payment"
                      : "btn-continue-payment"
                  }
                  onClick={() => dispatch(login(emailLogin, passwordLogin))}
                >
                  ดำเนินการต่อ
                </button>
                {statusLogin2 === "fail" && (
                  <p style={{ color: "red" }}>อีเมลหรือรหัสผ่านไม่ถูกต้อง</p>
                )}

                {/*   <p className="or-access">หรือเข้าใช้งานด้วย</p>
                <div className="justify-content">
                  <img src={icon_Google} className="icon-login" />
                  <img src={icon_facebook} className="icon-login" />
                  <img src={icon_line} className="icon-login" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const totalSum =
    product_cookies &&
    product_cookies.reduce((acc, product) => acc + product.totalprice, 0);

  /*   console.log("product_cookies", product_cookies); */

  return (
    <>
      <div className="box-order-summary">
        <div className="background-order-summary row">
          <div className="col-12 col-md-7 justify-content">
            <div className="customer-first-child-r">
              <div className="order-summary">
                <div className="order">
                  <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>
                  {product_cookies &&
                    product_cookies.map((product, index) => (
                      <>
                        <div className="body-order  row">
                          <div className="col-3">
                            <img
                              src={product.image}
                              className="image-product-order"
                            />
                          </div>
                          <div className="col-6">
                            <p className="fitto-shop margin-left-768">
                              {product.name}
                            </p>
                            <div className="plus-minus-model back-g  col-6">
                              <div className="box-add-order">
                                <button
                                  className="minus-model back-g-btn"
                                  onClick={() =>
                                    plusMinusCookies("minus", product.sku)
                                  }
                                >
                                  <span className="minus-span">-</span>
                                </button>
                                <span className="plus-minus-number">
                                  {"  "}
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
                                <img
                                  onClick={() =>
                                    deleteArrayCookies(product.sku)
                                  }
                                  src={delete_bin_line}
                                  className="delete_bin_line-order"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            {" "}
                            <p className="text-left-order text-price-order">
                              {product && product.totalprice.toLocaleString()}{" "}
                              บาท
                            </p>
                          </div>
                        </div>
                        <hr className="line-order-bottom" />
                      </>
                    ))}
                </div>
              </div>
              <Link to="/shop">
                <button className="shop-more-products">
                  <img src={arrow_left_line} className="arrow-left-line" />
                  เลือกซื้อสินค้าเพิ่มเติม
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-5 justify-content-767">
            <div className="box-proceed-payment">
              {/* <div className="input-code">
                <input
                  type="text"
                  className="form-control input-height"
                  id="exampleFormControlInput1"
                  placeholder="ใส่รหัสส่วนลด"
                />
                <button className="button-use">ใช้</button>
              </div> */}
              <p className="text-price-order between mt-32">
                ค่าสินค้า{" "}
                <span>{totalSum && totalSum.toLocaleString()} บาท </span>
              </p>
              <p className="text-price-order between">
                ค่าจัดส่ง <span>ฟรี </span>
              </p>
              <hr className="line-order-bottom" />
              <p className="text-price-order between text-pink">
                ยอดที่ต้องชำระ
                <span>{totalSum && totalSum.toLocaleString()} บาท</span>
              </p>

              <button
                className="btn-buy-payment"
                data-bs-toggle={user ? "" : "modal"}
                data-bs-target={user ? "" : "#exampleModalPayment"}
                onClick={onSubmit}
              >
                ดำเนินการชำระเงิน
              </button>

              <p className="text-price-order mt-32">รับชำระด้วย</p>
              <img src={Logo_payment_1} className="logo-payment-1" />
              <img src={Logo_payment_2} className="logo-payment-1" />
              <img src={Logo_payment_3} className="logo-payment-1" />
              {/* <img src={Logo_payment_4} className="logo-payment-4" />
              <img src={Logo_payment_5} className="logo-payment-5" /> */}
            </div>
          </div>
        </div>
        {/*         //Logo_payment_1 */}
        <Footer />
      </div>

      <div
        className="modal fade"
        id="exampleModalPayment"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          {statusLogin == 0 ? selectLogin() : formLogin()}
        </div>
      </div>
    </>
  );
};

export default Shop_order_summary;
