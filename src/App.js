import "./App.css";
import React, { Component } from "react";

//---------------------------------------Pynk---------------------------------------
// image
import search_line from "./assets/img/home/search-line.png";
import truck_line from "./assets/img/home/truck-line.png";
import shopping_bag_line from "./assets/img/home/shopping-bag-line.png";
import user_line from "./assets/img/home/user-3-line.png";
import close_line from "./assets/img/home/close-line.png";
import group from "./assets/img/home/Group.png";
/* search-line.png */
// route
import Home from "../src/views/pynk/home";
import DashboardPynk from "./views/pynk/admin/dashboard";
import ShopPynk from "./views/pynk/shop";
import ShopDetailsPynk from "./views/pynk/admin/shop_details";
import ShopOrderSummaryPynk from "./views/pynk/admin/shop_order_summary";
import ShopPaymentPynk from "./views/pynk/admin/shop_payment";
import ShopSuccessfulPaymentPynk from "./views/pynk/admin/shop_successful_payment";
import Popup_login from "./components/Popup_login";
import Login from "../src/views/pynk/login";
// import Shop from "../src/views/pynk/shop";
import HomePlatfrom from "../src/views/platform/login";
import Questionare from "../src/views/pynk/questionare";
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

  onUserLogout(event) {
    this.props.logoutUser();
    this.props.clearCreateUser();
    this.props.clearProgram();
    this.props.history.push("/home");
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
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }
  componentDidUpdate(prevProps, prevState) {
    const { user, statusGetExpireDate } = this.props;
    if (
      prevProps.statusGetExpireDate !== statusGetExpireDate &&
      statusGetExpireDate === "success" &&
      this.props.location.pathname === "/videoList"
    ) {
      var expired = false;
      var inBefore7days = false;
      var inBefore3days = false;
      if (user && user.expire_date) {
        const currentDate = new Date().getTime();
        const expireDate = new Date(user.expire_date).getTime();
        expired = currentDate > expireDate; //เช็คว่าหมดอายุหรือยัง

        var before7days = new Date(user.expire_date);
        before7days.setDate(before7days.getDate() - 7);
        before7days.setHours(0, 0, 0);
        const before7daysStart = new Date(before7days).getTime();
        before7days.setHours(23, 59, 59);
        const before7daysEnd = new Date(before7days).getTime();
        inBefore7days =
          currentDate >= before7daysStart && currentDate <= before7daysEnd; //เช็คว่าอยู่ในช่วงวันที่7 ก่อนที่จะหมดอายุ

        var before3days = new Date(user.expire_date);
        before3days.setDate(before3days.getDate() - 3);
        before3days.setHours(0, 0, 0);
        const before3daysStart = new Date(before3days).getTime();
        before3days.setHours(23, 59, 59);
        const before3daysEnd = new Date(before3days).getTime();
        inBefore3days =
          currentDate >= before3daysStart && currentDate <= before3daysEnd; //เช็คว่าอยู่ในช่วงวันที่3 ก่อนที่จะหมดอายุ
        console.log("inBefore3days :", inBefore3days);
      }
      if (expired) {
        document.getElementById("modalExpireClick").click();
      }
      if (inBefore7days) {
        this.setState({ inBeforeXdays: 7 });
        document.getElementById("modalBeforeXdaysClick").click();
      }
      if (inBefore3days) {
        this.setState({ inBeforeXdays: 3 });
        document.getElementById("modalBeforeXdaysClick").click();
      }
    }

    const { windowWidth, searchStatus } = this.state;
    console.log("searchStatus", windowWidth);
    if (prevState.windowWidth != windowWidth && windowWidth > 576) {
      this.setState({ searchStatus: 0 });
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
    const { user } = this.props;
    const { searchStatus, group_image } = this.state;

    console.log("searchStatus", searchStatus);
    return (
      <div className="navbar-pyak">
        <nav className="navbar navbar-expand-sm bg-light information-nav fixed-top">
          <div className="information-box">
            <div className="flex-container">
              <img src={logo} alt="vector" />
              <div className="custom-input ">
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
              />
            </div>
            <div>
              <div className="flex-container">
                <img
                  src={user_line}
                  className="truck-line-icon user-line"
                  alt="vector"
                />
                <button
                  className="nav-link nav-linkHead2 pointer bold  display-none"
                  onClick={() => this.props.history.push("/programPackage")}
                >
                  เข้าสู่ระบบ/ลงทะเบียน
                </button>
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
                <img
                  src={truck_line}
                  className="truck-line-icon"
                  alt="vector"
                />
                <p className="order-status display-none">สถานะคำสั่งซื้อ</p>
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
                <img
                  src={shopping_bag_line}
                  className="truck-line-icon"
                  alt="vector"
                />
              </div>
            </div>
          </div>
          {searchStatus == 0 ? (
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
                <div class="navbar-nav">
                  <a
                    class="nav-link  link-pynk active2"
                    href="https://platform.bebefitroutine.com"
                  >
                    Online Training
                  </a>
                  <a
                    class="nav-link link-pynk"
                    href="https://fit.bebefitroutine.com"
                  >
                    Stay Fit
                  </a>

                  <a
                    class="nav-link link-pynk"
                    href="/#"
                    onClick={() => this.props.history.push("/")}
                  >
                    Exclusive Coaching
                  </a>
                  <a
                    class="nav-link link-pynk"
                    href="#"
                    onClick={() => this.props.history.push("/shop")}
                  >
                    ร้านค้า
                  </a>
                  <a
                    class="nav-link link-pynk"
                    href="/#"
                    onClick={() => this.props.history.push("/")}
                  >
                    บทความ
                  </a>
                  {/*  <a class="nav-link" href="#">
                    Disabled
                  </a> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="information-box-row3">
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
            </div>
          )}
        </nav>

        {/* <nav className="navbar navbar-expand-lg bg-light information-box  sticky-top">
          <div className="container-fluid nav-left2">
            <a
              className="navbar-brand"
              href="/#" 
              onClick={() => this.props.history.push("/")}
              style={{ color: "white", cursor: "pointer" }}
            >
              <img src={logo} alt="vector" />
            </a>

            {this.props.user !== null ? (
              <>
                <button
                  className="navbar-toggler"
                  type="button"
                  id="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-size5 bold">
                    {user && user.other_attributes && (
                      <>
                        <li className="nav-item">
                          <a
                            id="videolist_btn"
                            className={this.state.colorVideo}
                            onClick={() => this.onClickNavbar("videoList")}
                          >
                            <IntlMessages id="navbarHome.exerciseprogram" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            id="food-supplement_btn"
                            className={this.state.colorFood}
                            onClick={() =>
                              this.onClickNavbar("food_supplement")
                            }
                          >
                            <IntlMessages id="navbarHome.foodsupplements" />
                          </a>
                        </li>
                      </>
                    )}
                    <li className="nav-item"></li>
                  </ul>
                  <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                     // <a className="nav-link nav-linkHead " href="/#" onClick={() => this.onUserLogout()} style={{ cursor: "pointer" }}>
                       // ออกจากระบบ
                    //</a>
                    </li>
                      <div>{this.manuTH_EN()}</div>
                      <li className="nav-item ">
                        <a
                          className="nav-link dropdown-toggle nav-linkHead"
                          data-bs-toggle="dropdown"
                          href="#"
                          role="button"
                          aria-expanded="false"
                        >
                          <img
                            src={user_circle}
                            alt="vector"
                            className="padding-rightIcon"
                          />
                          {this.props.user.email}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          {this.props.user.authorization === "admin" ? (
                            <>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item nav-linkHead pointer"
                                  onClick={() =>
                                    this.props.history.push("/admin")
                                  }
                                >
                                  <IntlMessages id="navbarHome.admin" />
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="dropdown-item nav-linkHead pointer"
                                  onClick={() =>
                                    this.props.history.push("/dashboard")
                                  }
                                >
                                  Dashboard
                                </a>
                              </li>
                            </>
                          ) : null}

                          <li className="nav-item">
                            <a
                              className="dropdown-item nav-linkHead pointer"
                              onClick={() =>
                                this.props.history.push("/profile")
                              }
                            >
                              <IntlMessages id="navbarHome.profile" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-linkHead pointer"
                              onClick={() => this.onUserLogout()}
                            >
                              <IntlMessages id="navbarHome.logout" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  className="navbar-toggler"
                  type="button"
                  id="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse padding-left3"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-size5 bold"></ul>
                  <button
                    className="nav-link nav-linkHead2 pointer bold"
                    onClick={() => this.props.history.push("/programPackage")}
                  >
                    <IntlMessages id="navbarHome.register"></IntlMessages>
                  </button>
                  <h2
                    style={{
                      color: "#BCCCD6",
                      marginRight: 16,
                      marginLeft: 16,
                      fontWeight: 10,
                      height: 30,
                    }}
                  >
                    |
                  </h2>
                  <a
                    className="nav-link nav-linkHead3 pointer bold"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    // onClick={() => this.openPopup()}
                    onClick={() => this.props.history.push("/login")}
                  >
                    <img
                      src={user_circle}
                      alt="vector"
                      className="padding-rightIcon"
                    />
                     <IntlMessages id="navbarHome.login" />
                  </a>
                </div>
              </>
            )}
          </div>
        </nav> */}
        {/* <nav className="navbar navbar-expand-lg bg-light information-box-row2 sticky-top">
          <div
            className="container-fluid nav-left2"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <a
              className=""
              href="https://platform.bebefitroutine.com"
              // onClick={() => this.props.history.push("/platfrom_home")}
              style={{ cursor: "pointer" }}
            >
              <h5 style={{ color: "#5A6E7B" }}>
                <b>Online Training</b>
              </h5>
            </a>
            <h2 style={{ color: "#BCCCD6", marginRight: 16, marginLeft: 16 }}>
              |
            </h2>
            <a
              className=""
              href="https://fit.bebefitroutine.com"
              // onClick={() => this.props.history.push("/stay_fit_home")}
              style={{ cursor: "pointer" }}
            >
              <h5 style={{ color: "#5A6E7B" }}>
                <b>Stay Fit</b>
              </h5>
            </a>
            <h2 style={{ color: "#BCCCD6", marginRight: 16, marginLeft: 16 }}>
              |
            </h2>
            <a
              className=""
              href="/#"
              onClick={() => this.props.history.push("/")}
              style={{ cursor: "pointer" }}
            >
              <h5 style={{ color: "#5A6E7B" }}>
                <b>Exclusive Coaching</b>
              </h5>
            </a>
            <h2 style={{ color: "#BCCCD6", marginRight: 16, marginLeft: 16 }}>
              |
            </h2>
            <a
              className=""
              // href="/#"
              onClick={() => this.props.history.push("/shop")}
              style={{ cursor: "pointer" }}
            >
              <h5 style={{ color: "#5A6E7B" }}>
                <b>ร้านค้า</b>
              </h5>
            </a>
            <h2 style={{ color: "#BCCCD6", marginRight: 16, marginLeft: 16 }}>
              |
            </h2>
            <a
              className=""
              href="/#"
              onClick={() => this.props.history.push("/")}
              style={{ cursor: "pointer" }}
            >
              <h5 style={{ color: "#5A6E7B" }}>
                <b>บทความ</b>
              </h5>
            </a>
          </div>
        </nav> */}
      </div>
    );
  }

  openPopup() {
    this.setState({ isPopupLoginOpen: true });
  }
  closePopup() {
    this.setState({ isPopupLoginOpen: false });
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <div className="App">
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
                <Route path="/shop" component={ShopPynk} />
                <Route path="/shop_details" component={ShopDetailsPynk} />
                <Route path="/questionare" component={Questionare} />
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
                  path="/successful-payment"
                  component={ShopSuccessfulPaymentPynk}
                />
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
                <Route path="/admin" component={Admin} />
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
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, get, settings }) => {
  const { register_log } = get;
  const { user, statusGetExpireDate } = authUser;
  let locale;
  if (settings) {
    locale = settings.locale;
  } else {
    locale = "th";
  }
  return { user, statusGetExpireDate, register_log, locale };
};

const mapActionsToProps = {
  logoutUser,
  clearCreateUser,
  clearProgram,
  changeLocale,
  getRegister_log,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
