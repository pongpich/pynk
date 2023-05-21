import './App.css';
import React, { Component } from 'react';
import Home from '../src/views/information/home';
import Buy_program from '../src/views/information/buy_program';
import Register from '../src/views/information/register';
import Fitto_Plant_Protein from '../src/views/information/fitto_plant_protein';
import EditFitto_Plant_Protein from '../src/views/information/edit_fitto_plant_protein';
import InformationCalculate from "../src/views/information/information_calculate";
import Shipping_Address from "../src/views/information/shipping_address";
import EditShipping_Address from "../src/views/information/edit_shipping_address";
import Payment from "../src/views/information/payment";
import SubscriptionPayment from "../src/views/information/subscriptionPayment";
import subscriptionDiscount from "../src/views/information/subscriptionDiscount";
import Welcome_NewMember from "../src/views/information/welcome_new_member";
import Basic_Information from "../src/views/information/basic_information";
import Your_Program from "../src/views/information/your_program";
import Cc_token from "../src/views/information/cc_token";
import Profile from "./views/profile/profile";
import EditProfile from "./views/profile/editProfile";
import Cancel_Package from "./views/profile/cancel_package";
import Cancel_Package_New from "./views/profile/cancel_package_new";
import Cancel_Package_Succeed from "./views/profile/cancel_packag_succeed";
import Subscription_Success from "./views/information/subscription_success";
import ProgramPackage from "./views/programPackage";
import videoList from "./views/information/video_List";
import logo from "./views/images/logo.png";
import Shipping_check from './views/profile/shipping_check';
import Billing_history from './views/profile/billing_history';
import Food_supplement from './views/information/food_supplement';
import Reset_password from './views/profile/reset_password';
import Reset_password_succeed from './views/profile/reset_password_succeed';
import New_password from './views/profile/new_password';
import Dashboard from './views/information/dashboard';
import Challenge from './views/information/challenge';
import Exercise_method from './views/information/exercise_method';
import Admin from './views/admin/admin';
import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
import IntlMessages from "../src/helpers/IntlMessages";
import { changeLocale } from "../src/redux/actions";

import {
  localeOptions
} from "../src/constants/defaultValues";

//import Home from '../views/home';Welcome_NewMember

import { connect } from "react-redux";
import { logoutUser } from "./redux/auth";
import { clearCreateUser } from "./redux/createUser";
import { clearProgram } from "./redux/exerciseProgram";
import { getRegister_log } from "./redux/get";

import moment from 'moment';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Amplify from 'aws-amplify';
import { awsConfig } from "./constants/defaultValues";
import { BrowserRouter } from 'react-router-dom';
import user_circle from "./assets/img/user_circle.svg";
import TagManager from 'react-gtm-module';

Amplify.configure(awsConfig);

TagManager.initialize({
  gtmId: 'GTM-KLDH7S5',
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colorFood: "nav-link pointer",
      colorVideo: "nav-link pointer color1",
      thEn: null,
      inBeforeXdays: 7
    }
  }

  handleChangeLocale = locale => {
    this.props.changeLocale(locale);
    if (locale === "th") {
      var thEn = "ไทย";
    } else {
      var thEn = "English";
    }
    this.setState({
      thEn: thEn
    })
  };

  onUserLogout(event) {
    this.props.logoutUser();
    this.props.clearCreateUser();
    this.props.clearProgram();
    this.props.history.push('/home');
  }
  onClickNavbar(e) {

    if (e === "videoList") {
      this.props.history.push('/videoList')
      this.setState({
        colorFood: "nav-link pointer",
        colorVideo: "nav-link pointer color1"
      })
    } else {
      this.props.history.push('/food_supplement')
      this.setState({
        colorFood: "nav-link pointer color1",
        colorVideo: "nav-link pointer"
      })
    }
    document.getElementById("navbar-toggler").click();
  }

  componentDidMount() {

    const { user, locale } = this.props;

    if (locale === "th") {
      this.setState({
        thEn: "ไทย"
      })
    } else {
      this.setState({
        thEn: "English"
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { user, statusGetExpireDate } = this.props;
    if ((prevProps.statusGetExpireDate !== statusGetExpireDate) && (statusGetExpireDate === "success") && (this.props.location.pathname === "/videoList")) {
      var expired = false;
      var inBefore7days = false;
      var inBefore3days = false;
      if (user && user.expire_date) {
        const currentDate = new Date().getTime();
        const expireDate = new Date(user.expire_date).getTime();
        expired = (currentDate > expireDate); //เช็คว่าหมดอายุหรือยัง

        var before7days = new Date(user.expire_date);
        before7days.setDate(before7days.getDate() - 7);
        before7days.setHours(0, 0, 0);
        const before7daysStart = new Date(before7days).getTime();
        before7days.setHours(23, 59, 59);
        const before7daysEnd = new Date(before7days).getTime();
        inBefore7days = ((currentDate >= before7daysStart) && (currentDate <= before7daysEnd)); //เช็คว่าอยู่ในช่วงวันที่7 ก่อนที่จะหมดอายุ

        var before3days = new Date(user.expire_date);
        before3days.setDate(before3days.getDate() - 3);
        before3days.setHours(0, 0, 0);
        const before3daysStart = new Date(before3days).getTime();
        before3days.setHours(23, 59, 59);
        const before3daysEnd = new Date(before3days).getTime();
        inBefore3days = ((currentDate >= before3daysStart) && (currentDate <= before3daysEnd)); //เช็คว่าอยู่ในช่วงวันที่3 ก่อนที่จะหมดอายุ
        console.log("inBefore3days :", inBefore3days);
      }
      if (expired) {
        document.getElementById("modalExpireClick").click();
      }
      if (inBefore7days) {
        this.setState({ inBeforeXdays: 7 })
        document.getElementById("modalBeforeXdaysClick").click();
      }
      if (inBefore3days) {
        this.setState({ inBeforeXdays: 3 })
        document.getElementById("modalBeforeXdaysClick").click();
      }
    }
  }

  renderExpired() {

    return (
      <>
        <div style={{ display: 'none' }}>
          <button type="button" className="btn btn-primary" id="modalExpireClick" data-bs-toggle="modal" data-bs-target="#modalExpire">
            Launch demo modal
          </button>
        </div>
        <div className="modal fade" id="modalExpire" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-bodyExpire">
                <p className="headText-expire bold">
                  Bebe Stay Fit ของคุณ
                  <br />หมดอายุแล้ว
                </p>
                <p className="boxText-expire">
                  หากคุณต้องการต้องการเข้าร่วมโปรแกรม
                  Bebe Stay Fit ต่อ <br /> กรุณาคลิกชำระเงินด้านล่าง
                </p>
                <div className="btn-expire">
                  <button
                    type="button"
                    class="btn  bottom-pinkLogin font-size6 col-10 col-sm-10 col-md-10 col-lg-10"
                    data-bs-dismiss="modal"
                    onClick={() => this.props.history.push('/subscription_payment')}
                  >
                    ชำระเงิน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
  renderBeforeXdays() {
    const { inBeforeXdays } = this.state;
    const { register_log } = this.props;
    const currRound = register_log && register_log[register_log.length - 1];

    return (
      <>
        <div style={{ display: 'none' }}>
          <button type="button" className="btn btn-primary" id="modalBeforeXdaysClick" data-bs-toggle="modal" data-bs-target="#modalBeforeXdays">
            Launch demo modal
          </button>
        </div>
        <div className="modal fade" id="modalBeforeXdays" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-bodyExpire">
                <p className="headText-expire bold">
                  สิทธิ์การใช้งาน BebeStayFit
                  <br />จะหมดอายุในอีก {inBeforeXdays} วัน
                </p>
                {
                  (currRound && (currRound.round > 1) && (currRound.payment_type === 'credit_card')) ?
                    <p className="boxText-expire">
                      หลังสิทธิ์การใช้งาน Bebe stay fit หมดอายุ <br />
                      จะมีการเรียกเก็บเงินตามช่องทางที่คุณได้เลือกไว้
                    </p>
                    :
                    <p className="boxText-expire">
                      หากคุณต้องการต้องการเข้าร่วมโปรแกรม <br />
                      Bebe Stay Fit ต่อ <br />
                      กรุณาคลิกชำระเงินด้านล่าง
                    </p>
                }

                {
                  (currRound && (currRound.round > 1) && (currRound.payment_type === 'credit_card')) ?
                    <div className="btn-expire">
                      <button
                        type="button"
                        class="btn  bottom-pinkLogin font-size6 col-10 col-sm-10 col-md-10 col-lg-10"
                        data-bs-dismiss="modal"
                        onClick={() => document.getElementById("modalBeforeXdaysClick").click()}
                      >
                        ปิด
                      </button>
                    </div>
                    :
                    <div className="btn-expire">
                      <button
                        type="button"
                        class="btn  bottom-pinkLogin font-size6 col-10 col-sm-10 col-md-10 col-lg-10"
                        data-bs-dismiss="modal"
                        onClick={() => this.props.history.push('/subscription_payment')}
                      >
                        ชำระเงิน
                      </button>
                    </div>
                }

              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
  manuTH_EN() {
    const { thEn } = this.state;
    return (
      <div className="btn-group">
        <div className="dropdown">
          <a className="nav-link nav-linkHead2 pointer bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {thEn}
          </a>
          <ul className="dropdown-menu dropdown-menu-col-end dropdown-menu-lg-start" aria-labelledby="dropdownMenuLink">
            {localeOptions.map((l) => {
              return (
                <li><a className="dropdown-item"
                  onClick={() => this.handleChangeLocale(l.id)}
                  key={l.id}
                >{l.name}</a></li>
              );
            })}
          </ul>
        </div>
      </div>

    )
  }
  manuTH_EN2() {
    const { thEn } = this.state;
    return (
      <div className="btn-group">
        <div className="dropdown">
          <a className="nav-link nav-linkHead2 pointer bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {thEn}
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
            {localeOptions.map((l) => {
              return (
                <li><a className="dropdown-item"
                  onClick={() => this.handleChangeLocale(l.id)}
                  key={l.id}
                >{l.name}</a></li>
              );
            })}
          </ul>
        </div>
      </div>

    )
  }

  renderNavbar() {
    const pagePath = this.props.location.pathname;
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg bg-light information-box  sticky-top">
        <div className="container-fluid nav-left2">
          <a className="navbar-brand" href="/#" onClick={() => this.props.history.push('/')} style={{ color: "white", cursor: "pointer" }}>
            <img src={logo} alt="vector" />
          </a>

          {

            (this.props.user !== null) ?
              <>
                <button className="navbar-toggler" type="button" id="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-size5 bold">

                    {
                      (user && user.other_attributes) &&
                      <>
                        <li className="nav-item">
                          <a id="videolist_btn" className={this.state.colorVideo} onClick={() => this.onClickNavbar("videoList")} ><IntlMessages id="navbarHome.exerciseprogram" /></a>
                        </li>
                        <li className="nav-item">
                          <a id="food-supplement_btn" className={this.state.colorFood} onClick={() => this.onClickNavbar("food_supplement")}><IntlMessages id="navbarHome.foodsupplements" /></a>
                        </li>
                      </>
                    }
                    <li className="nav-item">
                    </li>
                  </ul>
                  <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {/*         <li className="nav-item">
                      <a className="nav-link nav-linkHead " href="/#" onClick={() => this.onUserLogout()} style={{ cursor: "pointer" }}>
                        ออกจากระบบ
                    </a>
                    </li> */}
                      <div>
                        {this.manuTH_EN()}
                      </div>
                      <li className="nav-item ">
                        <a className="nav-link dropdown-toggle nav-linkHead" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                          <img src={user_circle} alt="vector" className="padding-rightIcon" />
                          {this.props.user.email}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          {
                            this.props.user.authorization === "admin" ?
                              <>
                                <li className="nav-item">
                                  <a className="dropdown-item nav-linkHead pointer" onClick={() => this.props.history.push('/admin')}>
                                    <IntlMessages id="navbarHome.admin" />
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="dropdown-item nav-linkHead pointer" onClick={() => this.props.history.push('/dashboard')}>
                                    Dashboard
                                  </a>
                                </li>
                              </>
                              : null
                          }

                          <li className="nav-item">
                            <a className="dropdown-item nav-linkHead pointer" onClick={() => this.props.history.push('/profile')}>
                              <IntlMessages id="navbarHome.profile" />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item nav-linkHead pointer" onClick={() => this.onUserLogout()}>
                              <IntlMessages id="navbarHome.logout" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
              :
              (pagePath === "/home") ?
                <>
                  <button className="navbar-toggler" type="button" id="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse padding-left3" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-size5 bold">
                      <li className="nav-item">
                        {/*  <a className="nav-link pointer"  >ราคา</a> */}
                      </li>
                      <li className="nav-item">
                        {/* <a className="nav-link pointer" >สร้างโปรแกรมส่วนตัว</a> */}
                      </li>
                    </ul>
                    {/* <div className="mt-0 mb-2">{this.manuTH_EN()}</div>
                    &nbsp; &nbsp;&nbsp; */}
                    <button className="nav-link nav-linkHead2 pointer bold" onClick={() => this.props.history.push("/programPackage")}><IntlMessages id="navbarHome.register"></IntlMessages></button>
                                        &nbsp; &nbsp;&nbsp;
                    <a className="nav-link nav-linkHead3 pointer bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <img src={user_circle} alt="vector" className="padding-rightIcon" /><IntlMessages id="navbarHome.login" /></a>
                    <div class="dropdown">
                    </div>
                  </div>

                </>
                :
                <div className="mt-0 mb-2">
                  {this.manuTH_EN2()}
                </div>

          }

        </div>
      </nav >

    )
  }


  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    /*   const currentAppLocale = AppLocale[locale];
  locale */

    return (
      <div>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <div className="App">
            {this.renderNavbar()}
            {this.renderExpired()}
            {this.renderBeforeXdays()}

            <header className="App-header ">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route path='/home' component={Home} />
                <Route path='/information_calculate' component={InformationCalculate} />
                <Route path='/buy_program' component={Buy_program} />
                <Route path='/register' component={Register} />
                {/* <Route path='/cc_token' component={Cc_token} /> */}
                <Route path='/fitto_plant_protein' component={Fitto_Plant_Protein} />
                <Route path='/edit_fitto_plant_protein' component={EditFitto_Plant_Protein} />
                <Route path='/shipping_address' component={Shipping_Address} />
                <Route path='/edit_shipping_address' component={EditShipping_Address} />
                <Route path='/payment' component={Payment} />
                <Route path='/subscription_payment' component={SubscriptionPayment} />
                <Route path='/subscription_discount' component={subscriptionDiscount} />
                <Route path='/welcome_new_nember' component={Welcome_NewMember} />
                <Route path='/basic_information' component={Basic_Information} />
                <Route path='/your_program' component={Your_Program} />
                <Route path='/profile' component={Profile} />
                <Route path='/edit_profile' component={EditProfile} />
                <Route path='/cancel_package' component={Cancel_Package} />
                <Route path='/cancel_package_new' component={Cancel_Package_New} />
                <Route path='/cancel_package_succeed' component={Cancel_Package_Succeed} />
                <Route path='/subscription_success' component={Subscription_Success} />
                <Route path='/programPackage' component={ProgramPackage} />
                <Route path='/videoList' component={videoList} />
                <Route path='/qr_checkout' render={() => { window.location.href = "qr_checkout.html" }} />
                <Route path='/qr_checkout_subscription' render={() => { window.location.href = "qr_checkout_subscription.html" }} />
                <Route path='/cc_checkout' render={() => { window.location.href = "cc_checkout.html" }} />
                <Route path='/cc_token' render={() => { window.location.href = "cc_token.html" }} />
                <Route path='/cc_preotp' render={() => { window.location.href = "cc_preotp.html" }} />
                <Route path='/complete' render={() => { window.location.href = "complete.html" }} />
                <Route path='/complete_thankyou' render={() => { window.location.href = "complete_thankyou.html" }} />
                <Route path='/shipping_check' component={Shipping_check} />
                <Route path='/billing_history' component={Billing_history} />
                <Route path='/food_supplement' component={Food_supplement} />
                <Route path='/reset_password' component={Reset_password} />
                <Route path='/reset_password_succeed' component={Reset_password_succeed} />
                <Route path='/new_password' component={New_password} />
                <Route path='/admin' component={Admin} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/challenge' component={Challenge} />
                <Route path='/exercise_method' component={Exercise_method} />

                {/* เเก้การที่เว็บ กด F5 เเล้ว มันเปลี่ยน Url  scrollspy*/}
                <Route path='/generalFood' component={Food_supplement} />
                <Route path='/vegetarianFood' component={Food_supplement} />
                <Route path='/general_food_simpleHealth' component={Food_supplement} />
                <Route path='/general_food_recommendedHealth' component={Food_supplement} />
                <Route path='/general_food_eat_foodPprogram' component={Food_supplement} />
                <Route path='/general_food_recommendedApproach' component={Food_supplement} />
                <Route path='/general_food_AdditionalAdvice' component={Food_supplement} />
                <Route path='/vegetarian_food_plantBased' component={Food_supplement} />
                <Route path='/vegetarian_food_recommendedHealth' component={Food_supplement} />
                <Route path='/vegetarian_food_eat_foodPprogram' component={Food_supplement} />
                <Route path='/vegetarian_food_recommendedApproach' component={Food_supplement} />
                <Route path='/vegetarian_food_AdditionalAdvice' component={Food_supplement} />
              </Switch>
            </header>
          </div>
        </IntlProvider>
      </div>
    )
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
  getRegister_log
};




export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
