import "./App.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import delete_bin_line from "./assets/img/pynk/shop/delete-bin-line.png";
import GoogleLoginComponent from "./views/pynk/googleFacebookLineLogin/googleLogin";

//---------------------------------------Pynk---------------------------------------
// image
import search_line from "./assets/img/home/search-line.png";
import truck_line from "./assets/img/home/truck-line.png";
import shopping_bag_line from "./assets/img/home/shopping-bag-line.png";
import user_line from "./assets/img/home/user-3-line.png";
import close_line from "./assets/img/home/close-line.png";
import group from "./assets/img/home/Group.png";
import ellipse24 from "./assets/img/home/Ellipse24.png";
/* search-line.png */
// redux
import { logout } from "./redux/pynk/auth";
import { update_status_cart } from "./redux/pynk/orders";

// route
import GroupProduct from "./views/pynk/admin/group_product";
import AdminPynk from "./views/pynk/admin/admin";
import Home from "../src/views/pynk/home";
import OrderTracking from "../src/views/pynk/order_tracking";
import DashboardPynk from "./views/pynk/admin/dashboard";
import ShopPynk from "./views/pynk/shop";
import ShopDetailsPynk from "./views/pynk/admin/shop_details";
import ShopOrderSummaryPynk from "./views/pynk/admin/shop_order_summary";
import ShopPaymentPynk from "./views/pynk/admin/shop_payment";
import ShopSuccessfulPaymentPynk from "./views/pynk/admin/shop_successful_payment";
import ShopErrorPaymentPynk from "./views/pynk/admin/shop_error_payment";
import Popup_login from "./components/Popup_login";
import Login from "../src/views/pynk/login";
import ProductsManagement from "./views/pynk/admin/products_management";
import ContentsManagement from "./views/pynk/admin/contents_management";
import AddProduct from "./views/pynk/admin/add_product";
import AddContent from "./views/pynk/admin/add_content";
import Shop_category from "./views/pynk/admin/shop_category";
import HomePlatfrom from "../src/views/platform/login";
import Questionare from "../src/views/pynk/questionare";
import profilePynk from "../src/views/pynk/profile";
import profileEditPynk from "../src/views/pynk/profile_edit";
import Content from "../src/views/pynk/content";
import Content_detail from "../src/views/pynk/content_detail";

//-------------------------------------Stay Fit-------------------------------------
import HomeStayFit from "../src/views/stay_fit/information/home";
import Buy_program from "../src/views/stay_fit/information/buy_program";
import Register from "../src/views/stay_fit/information/register";
import Fitto_Plant_Protein from "../src/views/stay_fit/information/fitto_plant_protein";
import EditFitto_Plant_Protein from "../src/views/stay_fit/information/edit_fitto_plant_protein";
import InformationCalculate from "../src/views/stay_fit/information/information_calculate";
import Shipping_Address from "../src/views/stay_fit/information/shipping_address";
import EditShipping_Address from "../src/views/stay_fit/information/edit_shipping_address";
import Payment from "../src/views/stay_fit/information/payment";
import SubscriptionPayment from "../src/views/stay_fit/information/subscriptionPayment";
import subscriptionDiscount from "../src/views/stay_fit/information/subscriptionDiscount";
import Welcome_NewMember from "../src/views/stay_fit/information/welcome_new_member";
import Basic_Information from "../src/views/stay_fit/information/basic_information";
import Your_Program from "../src/views/stay_fit/information/your_program";
import Cc_token from "../src/views/stay_fit/information/cc_token";
import Profile from "./views/stay_fit/profile/profile";
import EditProfile from "./views/stay_fit/profile/editProfile";
import Cancel_Package from "./views/stay_fit/profile/cancel_package";
import Cancel_Package_New from "./views/stay_fit/profile/cancel_package_new";
import Cancel_Package_Succeed from "./views/stay_fit/profile/cancel_packag_succeed";
import Subscription_Success from "./views/stay_fit/information/subscription_success";
import ProgramPackage from "./views/stay_fit/programPackage";
import videoList from "./views/stay_fit/information/video_List";
import logo from "./views/stay_fit/images/logo.png";
import Shipping_check from "./views/stay_fit/profile/shipping_check";
import Billing_history from "./views/stay_fit/profile/billing_history";
import Food_supplement from "./views/stay_fit/information/food_supplement";
import Reset_password from "./views/stay_fit/profile/reset_password";
import Reset_password_succeed from "./views/stay_fit/profile/reset_password_succeed";
import New_password from "./views/stay_fit/profile/new_password";
import Dashboard from "./views/stay_fit/information/dashboard";
import Challenge from "./views/stay_fit/information/challenge";
import Exercise_method from "./views/stay_fit/information/exercise_method";
import Admin from "./views/stay_fit/admin/admin";

//-------------------------------------Platform-------------------------------------

import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
import IntlMessages from "../src/helpers/IntlMessages";
import { changeLocale } from "../src/redux/actions";

import { localeOptions } from "../src/constants/defaultValues";

//import Home from '../views/home';Welcome_NewMember

import { connect } from "react-redux";
import { logoutUser } from "./redux/stay_fit/auth";
import { clearCreateUser } from "./redux/stay_fit/createUser";
import { clearProgram } from "./redux/stay_fit/exerciseProgram";
import { getRegister_log } from "./redux/stay_fit/get";

import moment from "moment";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Amplify from "aws-amplify";
import { awsConfig } from "./constants/defaultValues";
import { BrowserRouter } from "react-router-dom";
import user_circle from "./assets/img/user_circle1.svg";
import TagManager from "react-gtm-module";
import { all } from "redux-saga/effects";
import AOS from "aos";
import "aos/dist/aos.css";

Amplify.configure(awsConfig);

TagManager.initialize({
  gtmId: "GTM-KLDH7S5",
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFood: "nav-link pointer",
      colorVideo: "nav-link pointer color1",
      thEn: null,
      inBeforeXdays: 7,
      isPopupLoginOpen: false,
      searchStatus: 0,
      windowWidth: window.innerWidth,
      group_image: false,
      expires_cookies: 7,
      product_cookies: null,
    };
  }

  handleChangeLocale = (locale) => {
    this.props.changeLocale(locale);
    if (locale === "th") {
      var thEn = "ไทย";
    } else {
      var thEn = "English";
    }
    this.setState({
      thEn: thEn,
    });
  };

  showMinus2 = (action) => {
    const product_name1 = Cookies.get("product_name");
    this.setState({
      product_cookies: product_name1 ? JSON.parse(product_name1) : null,
    });
    document.getElementById("modalAchievement1Btn_shopDetails") &&
      document.getElementById("modalAchievement1Btn_shopDetails").click();
  };

  onUserLogout(event) {
    this.props.logoutUser();
    this.props.clearCreateUser();
    this.props.clearProgram();
    this.props.history.push("/home");
    this.props.logout();
  }
  onClickNavbar(e) {
    if (e === "videoList") {
      this.props.history.push("/videoList");
      this.setState({
        colorFood: "nav-link pointer",
        colorVideo: "nav-link pointer color1",
      });
    } else {
      this.props.history.push("/food_supplement");
      this.setState({
        colorFood: "nav-link pointer color1",
        colorVideo: "nav-link pointer",
      });
    }
    document.getElementById("navbar-toggler").click();
  }
  updateWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  componentDidMount() {
    const { user, locale } = this.props;

    if (locale === "th") {
      this.setState({
        thEn: "ไทย",
      });
    } else {
      this.setState({
        thEn: "English",
      });
    }

    window.addEventListener("resize", this.updateWindowWidth);
    //when refresh scroll to top
    window.history.scrollRestoration = "manual";
    AOS.init();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }
  componentDidUpdate(prevProps, prevState) {
    const { user, statusGetExpireDate, status_cart } = this.props;

    const { windowWidth, searchStatus, product_cookies } = this.state;

    if (prevState.windowWidth != windowWidth && windowWidth > 576) {
      this.setState({ searchStatus: 0 });
    }

    if (prevProps.status_cart !== status_cart && status_cart === "success") {
      console.log("กดใส่ถุงจ้า!!");
      this.showMinus2();

      this.props.update_status_cart("default");
    }
  }

  manuTH_EN() {
    const { thEn } = this.state;
    return (
      <div className="btn-group">
        <div className="dropdown">
          <a
            className="nav-link nav-linkHead2 pointer bold dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {thEn}
          </a>
          <ul
            className="dropdown-menu dropdown-menu-col-end dropdown-menu-lg-start"
            aria-labelledby="dropdownMenuLink"
          >
            {localeOptions.map((l) => {
              return (
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => this.handleChangeLocale(l.id)}
                    key={l.id}
                  >
                    {l.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  manuTH_EN2() {
    const { thEn } = this.state;
    return (
      <div className="btn-group">
        <div className="dropdown">
          <a
            className="nav-link nav-linkHead2 pointer bold dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {thEn}
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuLink"
          >
            {localeOptions.map((l) => {
              return (
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => this.handleChangeLocale(l.id)}
                    key={l.id}
                  >
                    {l.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  clikSearchStatus(e) {
    const { searchStatus } = this.state;
    this.setState({ searchStatus: e });
  }
  renderNavbar() {
    const pagePath = this.props.location.pathname;
    const { user, googleProfile } = this.props;
    const { searchStatus, group_image } = this.state;

    return (
      <div className="navbar-pynk">
        <nav className="navbar navbar-expand-sm bg-light information-nav fixed-top">
          <div className="information-box">
            <div className="flex-container">
              <Link to="home">
                <img src={logo} alt="vector" />
              </Link>
              {/*       <div className="custom-input ">
                <img
                  src={search_line}
                  className="search-img-icon display-none"
                  alt="vector"
                />
                <input
                  type="text"
                  className="form-control form-search  display-none"
                  placeholder="ค้นหาสินค้า"
                />
              </div>
              <img
                src={search_line}
                className="search_line user-line"
                onClick={() => this.clikSearchStatus(1)}
                alt="vector"
              /> */}
            </div>
            <div>
              <div className="flex-container">
                <img
                  src={user_line}
                  onClick={() => this.showMinus2()}
                  className="truck-line-icon user-line"
                  alt="vector"
                />
                {this.props.user ? (
                  <div className="nav-pynk">
                    <div class="dropdown">
                      <div
                        class="btn  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={ellipse24}
                          className="nav-ellipse24"
                          alt="vector"
                        />
                        {this.props.user.email}
                      </div>
                      <ul class="dropdown-menu">
                        <li>
                          <Link class="dropdown-item" to="profile-pynk">
                            profile
                          </Link>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            onClick={() => this.onUserLogout()}
                          >
                            ออกจากระบบ
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="pointer" onClick={() => this.props.logout()}>
                    ออกจากระบบ
                  </div> */}
                  </div>
                ) : this.props.googleProfile &&
                  this.props.googleProfile.profile ? (
                  <div className="nav-pynk">
                    <div class="dropdown">
                      <div
                        class="btn  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={ellipse24}
                          className="nav-ellipse24"
                          alt="vector"
                        />
                        {this.props.googleProfile.profile.email}
                      </div>
                      <ul class="dropdown-menu">
                        <li>
                          <Link class="dropdown-item" to="profile-pynk">
                            profile
                          </Link>
                        </li>
                        <li>
                          <div className="nav-logout">
                            <GoogleLoginComponent />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <button
                    className="nav-link nav-linkHead2 pointer bold  display-none"
                    onClick={() => this.props.history.push("/login")}
                  >
                    เข้าสู่ระบบ/ลงทะเบียน
                  </button>
                )}

                <h2
                  style={{
                    color: "#BCCCD6",
                    /*  marginRight: 16, */
                    /*  marginLeft: 16, */
                    fontWeight: 10,
                    height: 30,
                  }}
                >
                  |
                </h2>
                <div
                  className="d-flex justify-content-center align-items-center cursor-pointer"
                  onClick={() => this.props.history.push("/order_tracking")}
                >
                  <img
                    src={truck_line}
                    className="truck-line-icon"
                    alt="vector"
                  />
                  <p className="order-status display-none ms-1 mb-0">
                    สถานะคำสั่งซื้อ
                  </p>
                </div>

                <h2
                  style={{
                    color: "#BCCCD6",
                    fontWeight: 10,
                    height: 30,
                  }}
                >
                  |
                </h2>
                <img
                  onClick={() => this.showMinus2()}
                  src={shopping_bag_line}
                  className="truck-line-icon pointer"
                  alt="vector"
                />
              </div>
            </div>
          </div>
          {searchStatus === 0 ? (
            <div className="information-box-row2">
              <div className="navbar-flex-center user-line">
                {group_image ? (
                  <img
                    src={close_line}
                    alt="vector"
                    className="group-icon "
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    onClick={() => this.setState({ group_image: false })}
                    aria-label="Toggle navigation"
                  />
                ) : (
                  <img
                    src={group}
                    alt="vector"
                    className="group-icon"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    onClick={() => this.setState({ group_image: true })}
                    aria-label="Toggle navigation"
                  />
                )}
              </div>

              <div
                className="collapse navbar-collapse navbarNav-ul"
                id="navbarNav"
              >
                <div className="navbar-nav">
                  {user && user.authorization === "admin" && (
                    <a
                      className="nav-link link-pynk"
                      onClick={() =>
                        this.props.history.push("/products_management")
                      }
                    >
                      จัดการสินค้า
                    </a>
                  )}
                  {user && user.authorization === "admin" && (
                    <a
                      className="nav-link link-pynk"
                      onClick={() =>
                        this.props.history.push("/contents_management")
                      }
                    >
                      จัดการบทความ
                    </a>
                  )}
                  <a
                    className="nav-link  link-pynk active2"
                    href="https://platform.bebefitroutine.com"
                    target="_blank"
                  >
                    Online Training
                  </a>
                  <a
                    className="nav-link link-pynk"
                    href="https://fit.bebefitroutine.com"
                    target="_blank"
                  >
                    Stay Fit
                  </a>

                  {/*   <a
                    className="nav-link link-pynk"
                    href="/#"
                    onClick={() => this.props.history.push("/")}
                  >
                    Exclusive Coaching
                  </a> */}
                  <a
                    className="nav-link link-pynk"
                    onClick={() => this.props.history.push("/shop")}
                  >
                    ร้านค้า
                  </a>
                  <a
                    className="nav-link link-pynk"
                    // href="/#"
                    onClick={() => this.props.history.push("/content")}
                  >
                    บทความ
                  </a>
                  {/* <a class="nav-link" href="#">
                    Disabled
                  </a> */}
                </div>
              </div>
            </div>
          ) : (
            <></>
            /*         <div className="information-box-row3">
              <div className="custom-input2">
                <img
                  src={search_line}
                  className="search-img-icon"
                  alt="vector"
                />
                <input
                  type="text"
                  className="form-control form-search2"
                  placeholder="ค้นหาสินค้า"
                />
              </div>
             
              <img
                src={close_line}
                className="close_line-icon"
                onClick={() => this.clikSearchStatus(0)}
                alt="vector"
              />
            </div>  */
          )}
        </nav>
      </div>
    );
  }

  openPopup() {
    this.setState({ isPopupLoginOpen: true });
  }
  closePopup() {
    this.setState({ isPopupLoginOpen: false });
  }

  //เเก้จำนวนสินค้า ใน model && Cookies
  plusMinusCookies(e, id) {
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
            expires: this.state.expires_cookies,
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
              expires: this.state.expires_cookies,
            });
          }
        }
        const product_name1 = Cookies.get("product_name");
        this.setState({
          product_cookies: product_name1 && JSON.parse(product_name1),
        });
      }
    }
  }
  // ลบ ค้า  cookies
  deleteArrayCookies(id) {
    const product_name = Cookies.get("product_name");
    if (product_name && product_name != "undefined") {
      let productArray = product_name && JSON.parse(product_name);

      productArray =
        productArray && productArray.filter((product) => product.sku != id);
      Cookies.set("product_name", JSON.stringify(productArray), {
        expires: this.state.expires_cookies,
      });
      const product_name1 = Cookies.get("product_name");
      this.setState({
        product_cookies: product_name1 && JSON.parse(product_name1),
      });
    }
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    const { product_cookies } = this.state;
    const totalSum =
      product_cookies &&
      product_cookies.reduce((acc, product) => acc + product.totalprice, 0);

    return (
      <div>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <div className="App" style={{ background: "black" }}>
            {this.renderNavbar()}
            <Popup_login
              isOpen={this.state.isPopupLoginOpen}
              onClose={() => this.closePopup()}
            />

            <header className="App-header ">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/dashboard" component={DashboardPynk} />
                <Route path="/admin" component={AdminPynk} />
                <Route
                  path="/products_management"
                  component={ProductsManagement}
                />
                <Route path="/group_product" component={GroupProduct} />
                <Route
                  path="/contents_management"
                  component={ContentsManagement}
                />
                <Route path="/add_product" component={AddProduct} />
                <Route path="/add_content" component={AddContent} />
                <Route path="/shop" component={ShopPynk} />
                <Route path="/shop_details/:id" component={ShopDetailsPynk} />
                <Route path="/shop-category/:name" component={Shop_category} />
                <Route path="/order_tracking" component={OrderTracking} />
                <Route path="/questionare" component={Questionare} />
                <Route path="/content" component={Content} />
                <Route path="/content_detail/:id" component={Content_detail} />
                <Route
                  path="/shop-order-summary"
                  component={ShopOrderSummaryPynk}
                />
                <Route path="/shop-payment" component={ShopPaymentPynk} />
                <Route
                  path="/qr_checkout_pynk"
                  render={() => {
                    window.location.href = "qr_checkout_pynk.html";
                  }}
                />
                <Route
                  path="/cc_checkout_pynk"
                  render={() => {
                    window.location.href = "cc_checkout_pynk.html";
                  }}
                />
                <Route
                  path="/cc_token_pynk"
                  render={() => {
                    window.location.href = "cc_token_pynk.html";
                  }}
                />
                <Route
                  path="/cc_preotp_pynk"
                  render={() => {
                    window.location.href = "cc_preotp_pynk.html";
                  }}
                />
                <Route
                  path="/successful-payment"
                  component={ShopSuccessfulPaymentPynk}
                />
                <Route path="/error-payment" component={ShopErrorPaymentPynk} />
                <Route path="/profile-pynk" component={profilePynk} />
                <Route path="/profile-edit-pynk" component={profileEditPynk} />
                <Route path="/login" component={Login} />
                <Route path="/stay_fit_home" component={HomeStayFit} />
                <Route
                  path="/information_calculate"
                  component={InformationCalculate}
                />
                <Route path="/buy_program" component={Buy_program} />
                <Route path="/register" component={Register} />
                {/* <Route path='/cc_token' component={Cc_token} /> */}
                <Route
                  path="/fitto_plant_protein"
                  component={Fitto_Plant_Protein}
                />
                <Route
                  path="/edit_fitto_plant_protein"
                  component={EditFitto_Plant_Protein}
                />
                <Route path="/shipping_address" component={Shipping_Address} />
                <Route
                  path="/edit_shipping_address"
                  component={EditShipping_Address}
                />
                <Route path="/payment" component={Payment} />
                <Route
                  path="/subscription_payment"
                  component={SubscriptionPayment}
                />
                <Route
                  path="/subscription_discount"
                  component={subscriptionDiscount}
                />
                <Route
                  path="/welcome_new_nember"
                  component={Welcome_NewMember}
                />
                <Route
                  path="/basic_information"
                  component={Basic_Information}
                />
                <Route path="/your_program" component={Your_Program} />
                <Route path="/profile" component={Profile} />
                <Route path="/edit_profile" component={EditProfile} />
                <Route path="/cancel_package" component={Cancel_Package} />
                <Route
                  path="/cancel_package_new"
                  component={Cancel_Package_New}
                />
                <Route
                  path="/cancel_package_succeed"
                  component={Cancel_Package_Succeed}
                />
                <Route
                  path="/subscription_success"
                  component={Subscription_Success}
                />
                <Route path="/programPackage" component={ProgramPackage} />
                <Route path="/videoList" component={videoList} />
                <Route
                  path="/qr_checkout"
                  render={() => {
                    window.location.href = "qr_checkout.html";
                  }}
                />
                <Route
                  path="/qr_checkout_subscription"
                  render={() => {
                    window.location.href = "qr_checkout_subscription.html";
                  }}
                />
                <Route
                  path="/cc_checkout"
                  render={() => {
                    window.location.href = "cc_checkout.html";
                  }}
                />
                <Route
                  path="/cc_token"
                  render={() => {
                    window.location.href = "cc_token.html";
                  }}
                />
                <Route
                  path="/cc_preotp"
                  render={() => {
                    window.location.href = "cc_preotp.html";
                  }}
                />
                <Route
                  path="/complete"
                  render={() => {
                    window.location.href = "complete.html";
                  }}
                />
                <Route
                  path="/complete_thankyou"
                  render={() => {
                    window.location.href = "complete_thankyou.html";
                  }}
                />
                <Route path="/shipping_check" component={Shipping_check} />
                <Route path="/billing_history" component={Billing_history} />
                <Route path="/food_supplement" component={Food_supplement} />
                <Route path="/reset_password" component={Reset_password} />
                <Route
                  path="/reset_password_succeed"
                  component={Reset_password_succeed}
                />
                <Route path="/new_password" component={New_password} />
                <Route path="/admin_stayfit" component={Admin} />
                <Route path="/dashboard_stayfit" component={Dashboard} />
                <Route path="/challenge" component={Challenge} />
                <Route path="/exercise_method" component={Exercise_method} />
                {/* เเก้การที่เว็บ กด F5 เเล้ว มันเปลี่ยน Url  scrollspy*/}
                <Route path="/generalFood" component={Food_supplement} />
                <Route path="/vegetarianFood" component={Food_supplement} />
                <Route
                  path="/general_food_simpleHealth"
                  component={Food_supplement}
                />
                <Route
                  path="/general_food_recommendedHealth"
                  component={Food_supplement}
                />
                <Route
                  path="/general_food_eat_foodPprogram"
                  component={Food_supplement}
                />
                <Route
                  path="/general_food_recommendedApproach"
                  component={Food_supplement}
                />
                <Route
                  path="/general_food_AdditionalAdvice"
                  component={Food_supplement}
                />
                <Route
                  path="/vegetarian_food_plantBased"
                  component={Food_supplement}
                />
                <Route
                  path="/vegetarian_food_recommendedHealth"
                  component={Food_supplement}
                />
                <Route
                  path="/vegetarian_food_eat_foodPprogram"
                  component={Food_supplement}
                />
                <Route
                  path="/vegetarian_food_recommendedApproach"
                  component={Food_supplement}
                />
                <Route
                  path="/vegetarian_food_AdditionalAdvice"
                  component={Food_supplement}
                />

                <Route path="/platfrom_home" component={HomePlatfrom} />
              </Switch>
            </header>
          </div>
        </IntlProvider>

        <button
          style={{ display: "none" }}
          type="button"
          id="modalAchievement1Btn_shopDetails"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className={
              this.state.windowWidth < 577
                ? "modal-dialog"
                : "modal-dialog  modal-right"
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
                            alt=""
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
                                    this.plusMinusCookies("minus", product.sku)
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
                                    this.plusMinusCookies("plus", product.sku)
                                  }
                                >
                                  <span className="minus-span">+</span>
                                </button>
                              </div>
                            </div>
                            <img
                              src={delete_bin_line}
                              onClick={() =>
                                this.deleteArrayCookies(product.sku)
                              }
                              className="delete_bin_line col-3"
                              alt=""
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
                  {product_cookies && product_cookies.length > 0 ? (
                    <Link to="/shop-order-summary">
                      <button
                        className="model-buy-now"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        คิดเงิน
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="model-buy-now"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      คิดเงิน
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ get, settings, auth, orders }) => {
  const { register_log } = get;
  let user;
  if (auth) {
    user = auth.user;
  } else {
    user = null;
  }
  let googleProfile;
  if (auth) {
    googleProfile = auth.googleProfile;
  } else {
    googleProfile = null;
  }

  let status_cart;
  if (orders) {
    status_cart = orders.status_cart;
  } else {
    status_cart = "default";
  }

  let locale;
  if (settings) {
    locale = settings.locale;
  } else {
    locale = "th";
  }
  return { user, googleProfile, register_log, locale, status_cart };
};

const mapActionsToProps = {
  logoutUser,
  clearCreateUser,
  clearProgram,
  changeLocale,
  getRegister_log,
  logout,
  update_status_cart,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
