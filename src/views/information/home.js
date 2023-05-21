import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram";
import { loginUser, resetStatusSetPassword } from "../../redux/auth";
import IntlMessages from "../../helpers/IntlMessages";
import { injectIntl } from 'react-intl';
import backgroundImag from "../../assets/img/mainbg.jpeg";
import loginprofile from "../../assets/img/loginprofile.jpg";
import head from "../../assets/img/home/head.webp";
import part3 from "../../assets/img/home/part3.webp";
import part4 from "../../assets/img/home/part4.webp";
import part5 from "../../assets/img/home/part5.webp";
import part6 from "../../assets/img/home/part6.webp";
import part7 from "../../assets/img/home/part7.webp";
import part8 from "../../assets/img/home/part8.webp";
import part9 from "../../assets/img/home/part9.webp";
import part10 from "../../assets/img/home/part10.webp";
import part11 from "../../assets/img/home/part11.webp";
import review from "../../assets/img/home/review.webp";
import part13 from "../../assets/img/home/part13.png";
import price from "../../assets/img/home/price.webp";
import countdown from "../../assets/img/home/countdown.webp";
import part16 from "../../assets/img/home/part16.webp";
import rectangle from "../../assets/img/home/rectangle.webp";
import frame1 from "../../assets/img/home/frame1.webp";
import frame2 from "../../assets/img/home/frame2.webp";
import frame3 from "../../assets/img/home/frame3.webp";
import frame4 from "../../assets/img/home/frame4.webp";
import frame5 from "../../assets/img/home/frame5.webp";
import frame6 from "../../assets/img/home/frame6.webp";

/*  win-512 */

import head512 from "../../assets/img/home512/head512.webp";
import part3512 from "../../assets/img/home512/part3512.webp";
import part4512 from "../../assets/img/home512/part4512.webp";
import part5512 from "../../assets/img/home512/part5512.webp";
import part6512 from "../../assets/img/home512/part6512.webp";
import part7512 from "../../assets/img/home512/part7512.webp";
import part8512 from "../../assets/img/home512/part8512.webp";
import part9512 from "../../assets/img/home512/part9512.webp";
import part10512 from "../../assets/img/home512/part10512.webp";
import part11512 from "../../assets/img/home512/part11512.webp";
import review512 from "../../assets/img/home512/review512.webp";
import part13512 from "../../assets/img/home512/part13512.png";
import price512 from "../../assets/img/home512/price512.webp";
import countdown512 from "../../assets/img/home512/countdown512.webp";
import part16512 from "../../assets/img/home512/part16512.webp";
import rectangle512 from "../../assets/img/home512/rectangle512.webp";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      validation: "true",
      setPassword: false,
      validationLogin: "default",
      carousel: 0,
    };
  }

  onChickprice = (e) => {
    this.props.history.push("/videoList");
  };

  componentDidMount() {
    const { user_program_id, create_user_email, user, statusSetPassword, history } =
      this.props;

    this.props.getUserProgram(create_user_email);

    /*   if (user_program_id) { //ถ้ามี user_program_id แสดงว่าชำระเงินสำเร็จแล้ว
      this.props.history.push('/welcome_new_nember');
    } */

    // <!-- Add Pixel Events to the button's click handler -->
    const ReactPixel = require('react-facebook-pixel');
    ReactPixel.default.init('2089309924624680');
    var pageUrl = window.location.href;
    var contactExpertBtn = document.getElementById("contact_expert_btn");
    var registerBtn = document.getElementById("register_btn");
    contactExpertBtn.addEventListener(
      "click",
      async function () {
        await ReactPixel.default.trackCustom('contact-expert');
        /*  setTimeout(() => {
           history.push("/complete")
         }, 3000); */
        if (pageUrl.includes("localhost") || pageUrl.includes("127.0.0.1")) {
          //สำหรับเทส
          window.open("http://localhost:3000/complete.html");
        } else {
          //สำหรับใช้จริง
          window.open("https://fit.bebefitroutine.com/complete.html");
        }
      },
      false
    );
    registerBtn.addEventListener(
      "click",
      async function () {
        await ReactPixel.default.trackCustom('Register');
        /*   setTimeout(() => {
            history.push("/programPackage")
          }, 3000); */
        if (pageUrl.includes("localhost") || pageUrl.includes("127.0.0.1")) {
          //สำหรับเทส
          window.open("http://localhost:3000/#/programPackage");
        } else {
          //สำหรับใช้จริง
          window.open("https://fit.bebefitroutine.com/#/programPackage");
        }
      },
      false
    );

    if (user !== null) {
      this.props.history.push("/basic_information");
    }

    if (statusSetPassword === "success") {
      alert("เปลี่ยนรหัสผ่านสำเร็จ");
      this.props.resetStatusSetPassword();
      console.log("setPassword");
    }

    window.scrollTo(0, 0);

    var progress = document.getElementById("progress-done");
    var progress2 = document.getElementById("progress-done2");
    var progressText = document.getElementById("progress-text-start");
    var progressText2 = document.getElementById("progress-text-start2");
    const maxMember = 75;
    const minMember = 30;
    var member = minMember;
    const addMemberPerDay = 1;
    const turningPointOfMember = 49;
    const dayOfTurningPoint = (
      (turningPointOfMember - minMember) /
      addMemberPerDay
    ).toFixed(0);
    var width;
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const startDate = new Date("2022-07-07T23:59:59");
    const currDate = new Date();
    const diffDays = Math.round(Math.abs((startDate - currDate) / oneDay));

    member = member + diffDays * addMemberPerDay;
    if (member > turningPointOfMember) {
      member = turningPointOfMember + diffDays - dayOfTurningPoint;
      if (member > maxMember) {
        member = maxMember;
      }
    }
    width = (member / maxMember) * 100;

    progress.style.width = width + "%";
    progressText.innerHTML = "สมัครแล้ว " + member + " คน";
    progress2.style.width = width + "%";
    progressText2.innerHTML = "สมัครแล้ว " + member + " คน";
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, status, user } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push("/welcome_new_nember");
    }

    if (prevProps.status !== status) {
      if (status === "success") {
        if (user && user.authorization === "admin") {
          this.props.history.push("/admin");
        } else {
          this.props.history.push("/basic_information");
        }
        document.getElementById("remove-model").click(); //ใช้สำหรับซ่อน modal แต่ตอนนี้เอาออกเพราะปรับดีไซด์ชั่วคราวไม่งั้นมีบัค
      }
      if (status === "fail") {
        this.setState({
          validationLogin: "fail",
        });
      }
    }
    /*     this.timeout() */
  }

  resetPassword() {
    this.props.history.push("/reset_password");
    document.getElementById("remove-model").click(); //ใช้สำหรับซ่อน modal แต่ตอนนี้เอาออกเพราะปรับดีไซด์ชั่วคราวไม่งั้นมีบัค
  }

  onUserLogin() {
    const { status, user } = this.props;
    this.setState({
      validation: "true",
      validationLogin: "default",
    });
    if (
      this.state.email !== "" &&
      this.state.email !== null &&
      this.state.password !== "" &&
      this.state.password !== null
    ) {
      this.props.loginUser(this.state.email, this.state.password);
      if (status === "success") {
        if (user && user.authorization === "admin") {
          this.props.history.push("/admin");
        } else {
          this.props.history.push("/basic_information");
        }
        document.getElementById("remove-model").click(); //ใช้สำหรับซ่อน modal แต่ตอนนี้เอาออกเพราะปรับดีไซด์ชั่วคราวไม่งั้นมีบัค
      }
      if (status === "fail") {
        this.setState({
          validationLogin: "fail",
        });
      }
    } else {
      this.setState({
        validation: "false",
      });
    }
  }

  frame(e) {
    console.log("e", e);

    this.setState({
      carousel: e
    });

    setTimeout(() => {

    }, 9000);
    this.timeout();
  }


  timeout() {

    if (this.state.carousel === 5) {
      console.log("if", this.state.carousel);
      setTimeout(() => {
        this.setState({
          carousel: 0
        });
      }, 9000);
    } else if (this.state.carousel < 5) {
      console.log("else", this.state.carousel);
      setTimeout(() => {
        this.setState({
          carousel: this.state.carousel + 1
        });
      }, 9000);
    }

  }

  handleChange(event) {

    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  register() {
    this.props.history.push("/programPackage");
    document.getElementById("remove-model").click();
  }

  homeLogin() {
    this.timeout()
    const { messages } = this.props.intl;

    return (
      <>
        <div className="win-541">
          <img src={head} alt="vector" className="home-image" />
          <div className="box-home">
            <div className="top-Home">
              <p className="textHome bold">สนใจสมัคร</p>
              <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 center ">
                <a
                  id='contact_expert_btn'
                  className="btn bottom-pinkLogin1 bold"
                  type="button"
                //href="https://fittowhey.com/8week/complete"
                //onClick={() => this.props.history.push("/complete")}
                >
                  ปรึกษาผู้เชี่ยวชาญ
                </a>
                <button
                  id='register_btn'
                  className="btn bottom-pinkLogin3 bold"
                  type="button"
                //onClick={() => this.props.history.push("/programPackage")}
                >
                  ลงทะเบียน
                </button>
              </div>
            </div>
          </div>
          <img src={part3} alt="vector" className="home-image" />
          <img src={part4} alt="vector" className="home-image" />
          <img src={part5} alt="vector" className="home-image" />
          <img src={part6} alt="vector" className="home-image" />
          <img src={part7} alt="vector" className="home-image" />
          <img src={part8} alt="vector" className="home-image" />
          <div className="part16">
            <img src={part9} alt="vector" className="home-image part16-1" />
            <a
              onClick={() => this.props.history.push("/programPackage")}
              className="btn  bold button-pinkLogin3 col-4 col-sm-4  col-md-4 col-lg-4"
              type="button"
            >
              เริ่มคำนวณ
            </a>
          </div>
          <img src={part10} alt="vector" className="home-image" />
          <div className="box-home">
            <div className="top-Home">
              <p className="textHome bold">
                สำหรับผู้ที่มีปัญหาสุขภาพ แต่ไม่อยากที่จะพลาดแคมเปญนี้
              </p>
              <p className="textHome2 bold">
                สามารถรับคำแนะนำลงทะเบียนปรึกษาผู้เชี่ยวชาญได้ที่
              </p>
              <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 center ">
                <a onClick={() => this.props.history.push("/complete")}>
                  <button
                    onClick={() => this.props.history.push("/complete")}
                    className="btn bottom-pinkLogin2 bold"
                    type="button"
                  >
                    ขอคำปรึกษา
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="box-review">
            <div>
              <p className="textHead-review">
                ยืนยันผลลัพธ์ว่าทำเเล้วเห็นผลได้จริง
              </p>
              <p className="text-review">
                จากเสียงตอบรับส่วนหนึ่งในผู้ที่เคยทานผลิตภัณฑ์
              </p>
              <p className="text-review">เเละร่วมสนุกกิจกรรมจาก FITTO</p>
            </div>
            <div className="review-boxImage">
              {this.state.carousel === 0 ?
                <img src={frame6} alt="vector" className="review-image" />
                :
                this.state.carousel === 1 ?
                  <img src={frame5} alt="vector" className="review-image" />
                  :
                  this.state.carousel === 2 ?
                    <img src={frame1} alt="vector" className="review-image" />
                    :
                    this.state.carousel === 3 ?
                      <img src={frame2} alt="vector" className="review-image" />
                      :
                      this.state.carousel === 4 ?
                        <img src={frame3} alt="vector" className="review-image" />
                        :
                        <img src={frame4} alt="vector" className="review-image" />
              }
              <img src={rectangle} alt="vector" className="rectangle-image" />
            </div>
            <div className="buttons-howDot">
              <button className={this.state.carousel === 0 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(0)}></button>
              <button className={this.state.carousel === 1 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(1)}></button>
              <button className={this.state.carousel === 2 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(2)}></button>
              <button className={this.state.carousel === 3 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(3)}></button>
              <button className={this.state.carousel === 4 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(4)}></button>
              <button className={this.state.carousel === 5 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(5)}></button>
            </div>
          </div>
          <img src={part13} alt="vector" className="home-image" />
          <div className="part16">
            <img src={price} alt="vector" className="home-image part16-1" />
            <a
              onClick={() => this.props.history.push("/programPackage")}
              className="btn  bold button-pinkLogin2 col-4 col-sm-4  col-md-4 col-lg-4"
              type="button"
            >
              สมัคร
            </a>
          </div>
          <div className="box-countdown">
            <p className="text-progress bold">
              มีคนสนใจเข้าร่วมแคมเปญมาแล้วทั้งหมด
            </p>
            <div className="progress-bar">
              <div className="progress">
                <div className="progress-done" id="progress-done">
                  <div
                    className="progress-text-start bold"
                    id="progress-text-start"
                  ></div>
                </div>
              </div>
            </div>
            <p className="text-end">จำกัด 75 คน</p>
          </div>
          <div className="part16">
            <img src={part16} alt="vector" className="home-image part16-1" />
            <a
              href="https://fittowhey.com/8week/complete"
              className="btn  bold button-pinkLogin col-4 col-sm-4  col-md-4 col-lg-4"
              type="button"
            >
              คลิก
            </a>
          </div>
        </div>

        <div className="win-540">
          <img src={head512} alt="vector" className="home-image" />
          <div className="box-home">
            <div className="top-Home">
              <p className="textHome bold">สนใจสมัคร</p>
              <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 center ">
                <a onClick={() => this.props.history.push("/complete")}>
                  <button
                    className="btn bottom-pinkLogin1 bold"
                    type="button">
                    ปรึกษาผู้เชี่ยวชาญ
                  </button>
                </a>
                <button
                  className="btn bottom-pinkLogin3 bold"
                  type="button"
                  onClick={() => this.props.history.push("/programPackage")}
                >
                  ลงทะเบียน
                </button>
              </div>
            </div>
          </div>
          <img src={part3512} alt="vector" className="home-image" />
          <img src={part4512} alt="vector" className="home-image" />
          <img src={part5512} alt="vector" className="home-image" />
          <img src={part6512} alt="vector" className="home-image" />
          <img src={part7512} alt="vector" className="home-image" />
          <img src={part8512} alt="vector" className="home-image" />
          <div className="part16">
            <img src={part9512} alt="vector" className="home-image part16-1" />
            <a
              onClick={() => this.props.history.push("/programPackage")}
              className="btn  bold button2-pinkLogin512 col-10 col-sm-10  col-md-4 col-lg-4"
            >
              เริ่มคำนวณ
            </a>
          </div>
          <img src={part10512} alt="vector" className="home-image" />
          <div className="box-home">
            <div className="top-Home padding-leftRight">
              <p className="textHome bold">
                สำหรับผู้ที่มีปัญหาสุขภาพ แต่ไม่อยากที่จะพลาดแคมเปญนี้
              </p>
              <p className="textHome2 bold">
                สามารถรับคำแนะนำลงทะเบียนปรึกษาผู้เชี่ยวชาญได้ที่
              </p>
              <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 center ">
                <a onClick={() => this.props.history.push("/complete")}>
                  <button
                    className="btn bottom-pinkLogin2 bold"
                    type="button">
                    ขอคำปรึกษา
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="box-review">
            <div>
              <p className="textHead-review">
                ยืนยันผลลัพธ์ว่าทำเเล้วเห็นผลได้จริง
              </p>
              <p className="text-review">
                จากเสียงตอบรับส่วนหนึ่งในผู้ที่เคยทานผลิตภัณฑ์
              </p>
              <p className="text-review">เเละร่วมสนุกกิจกรรมจาก FITTO</p>
            </div>
            <div className="review-boxImage">
              {this.state.carousel === 0 ?
                <img src={frame6} alt="vector" className="review-image" />
                :
                this.state.carousel === 1 ?
                  <img src={frame5} alt="vector" className="review-image" />
                  :
                  this.state.carousel === 2 ?
                    <img src={frame1} alt="vector" className="review-image" />
                    :
                    this.state.carousel === 3 ?
                      <img src={frame2} alt="vector" className="review-image" />
                      :
                      this.state.carousel === 4 ?
                        <img src={frame3} alt="vector" className="review-image" />
                        :
                        <img src={frame4} alt="vector" className="review-image" />
              }
              <img src={rectangle512} alt="vector" className="rectangle-image" />
            </div>
            <div className="buttons-howDot">
              <button className={this.state.carousel === 0 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(0)}></button>
              <button className={this.state.carousel === 1 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(1)}></button>
              <button className={this.state.carousel === 2 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(2)}></button>
              <button className={this.state.carousel === 3 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(3)}></button>
              <button className={this.state.carousel === 4 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(4)}></button>
              <button className={this.state.carousel === 5 ? "slideshowDot active" : "slideshowDot"} onClick={() => this.frame(5)}></button>
            </div>
          </div>

          <img src={part13512} alt="vector" className="home-image" />
          <div className="part16">
            <img src={price512} alt="vector" className="home-image part16-1" />
            <a
              onClick={() => this.props.history.push("/programPackage")}
              className="btn  bold button1-pinkLogin512 col-7 col-sm-7"
            >
              สมัคร
            </a>
          </div>
          <div className="box-countdown">
            <p className="text-progress bold">
              มีคนสนใจเข้าร่วมแคมเปญมาแล้วทั้งหมด
            </p>
            <div className="progress-bar">
              <div className="progress">
                <div className="progress-done" id="progress-done2">
                  <div
                    className="progress-text-start bold"
                    id="progress-text-start2"
                  ></div>
                </div>
              </div>
            </div>
            <p className="text-end">จำกัด 75 คน</p>
          </div>
          <div className="part16">
            <img src={part16512} alt="vector" className="home-image " />
            <a
              href="https://fittowhey.com/8week/complete"
              className="btn  bold button-pinkLogin512 col-10 col-sm-10"
              type="button"
            >
              คลิก
            </a>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content padding-leftRight">
              <div className="modal-headerIn margin-headText">
                <p
                  className="bold font-size5  color-protein"
                  id="exampleModalLabel"
                ></p>
                <button
                  type="button"
                  className="btn-close"
                  id="remove-model"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-bodyIn">
                <div className="center margin-bottom margin-top-1">
                  <p
                    className="bold font-size8  color-protein"
                    id="exampleModalLabel"
                  >
                    <IntlMessages id="navbarHome.login" />
                  </p>
                </div>
                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top1">
                  <div className="mb-3">
                    <label className="form-label"> <IntlMessages id="navbarHome.email" /></label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder={messages['navbarHome.ex_email']}
                      value={this.state.email}
                      onChange={(event) => this.handleChange(event)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> <IntlMessages id="navbarHome.password" /></label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={this.state.password}
                      onChange={(event) => this.handleChange(event)}
                    />
                  </div>
                  {this.state.validation === "false" ? (
                    <h6 style={{ color: "red" }}><IntlMessages id="navbarHome.validationInformation" /></h6>
                  ) : this.state.validationLogin === "fail" ? (
                    <h6 style={{ color: "red" }}>
                      <IntlMessages id="navbarHome.validationEmail" />
                    </h6>
                  ) : null}
                  <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 distance">
                    <button
                      className="btn bottom-pinkLogin   font-size6"
                      type="button"
                      onClick={() => this.onUserLogin()}
                    >
                      <IntlMessages id="navbarHome.login" />
                    </button>
                  </div>
                  <p className="between margin-top-2 font-size4">
                    <span
                      className="pointer reset"
                      onClick={() => this.resetPassword()}
                    >
                      <IntlMessages id="navbarHome.forgotpassword" />
                    </span>{" "}
                    <span>
                      <IntlMessages id="navbarHome.donAccount" />
                      <br />
                      <a
                        className="a_link pointer"
                        onClick={() => this.register("register")}
                      >
                        <IntlMessages id="navbarHome.createAccount" />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  login() {
    const { messages } = this.props.intl;
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${backgroundImag})`,
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="centerBox-Login">
            <div className="box-login">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <img
                    src={loginprofile}
                    alt="vector"
                    className="col-12 col-sm-12  col-md-12 col-lg-12"
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 ">
                  <div className="boxTopLogin">
                    <div className="center margin-bottom margin-top-1">
                      <p
                        className="bold font-size8  color-protein"
                        id="exampleModalLabel"
                      >
                        <IntlMessages id="navbarHome.login" />
                      </p>
                    </div>
                    <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top1">
                      <div className="mb-3">
                        <label className="form-label"> <IntlMessages id="navbarHome.email" /></label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="กรุณากรอก Email (Example@mail.com)"
                          value={this.state.email}
                          onChange={(event) => this.handleChange(event)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">  <IntlMessages id="navbarHome.password" /></label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={this.state.password}
                          onChange={(event) => this.handleChange(event)}
                        />
                      </div>
                      {this.state.validation !== "true" ? (
                        <h6 style={{ color: "red" }}>
                          <IntlMessages id="navbarHome.validationInformation" />
                        </h6>
                      ) : null}
                      <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 distance">
                        <button
                          className="btn bottom-pinkLogin   font-size6"
                          type="button"
                          onClick={() => this.onUserLogin()}
                        >
                          เข้าสู่ระบบ
                        </button>
                      </div>
                      <p className="between margin-top-2 font-size4">
                        <span
                          className="pointer reset"
                          onClick={() => this.resetPassword()}
                        >
                          ลืมรหัสผ่าน
                        </span>
                        <span>
                          ยังไม่เป็นสมาชิก?{" "}
                          <a
                            className="a-Href"
                            onClick={(e) =>
                              this.props.history.push("/programPackage")
                            }
                          >
                            ลงทะเบียน
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { validation, validationLogin, carousel } = this.state;

    return (
      <>
        {this.homeLogin()}
        {/* {this.login()} */}
      </>
    );
  }
}

const mapStateToProps = ({ authUser, createUser, exerciseProgram }) => {
  const { user, status, statusSetPassword } = authUser;
  const { create_user_email } = createUser;
  const { user_program_id } = exerciseProgram;
  return {
    create_user_email,
    user_program_id,
    user,
    status,
    statusSetPassword,
  };
};

const mapActionsToProps = { getUserProgram, loginUser, resetStatusSetPassword };

export default connect(mapStateToProps, mapActionsToProps)(injectIntl(Home));
