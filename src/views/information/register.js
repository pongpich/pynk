import React, { Component } from "react";
import p4fbebe97111 from "../../assets/img/group224.png";
import group18 from "../../assets/img/group18.png";
import ellipse_077 from "../../assets/img/ellipse_077.png";
import ellipse_078 from "../../assets/img/ellipse_078.png";

import mask1 from ".././images/mask1.png";
import mask2 from ".././images/mask2.png";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createUser } from "../../redux/createUser";
import { register } from "../../redux/auth";
import IntlMessages from "../../helpers/IntlMessages";
import { injectIntl } from 'react-intl';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      confirm_password: null,
      phone: null,
      status_submit: "default",
      invalidEmail: "default",
      eye: false,
      eye1: false,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  componentDidMount() {
    const { statusRegister } = this.props;

    //ทดลองเปลี่ยนเป็นแบบเอาออก ถ้ามีบัคค่อยเอากลับมา
    /* if (statusRegister === "success") { //success แสดงว่าสร้าง email นี้ใน table member แล้ว
      this.props.history.push('/fitto_plant_protein');
    } */
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const { statusRegister } = this.props;

    if (prevProps.statusRegister !== statusRegister) {
      if (statusRegister === "success") {
        this.props.history.push('/fitto_plant_protein');
      } else if ((statusRegister === "existInStayFit") || (statusRegister === "existBebefitroutine")) {
        this.setState({
          invalidEmail: statusRegister
        })
      }
    }

  }
  clickEye(y,e) {
    if (y === "eye") {
      this.setState({
        eye: e,
      })
    }else {
      this.setState({
        eye1: e,
      })
    }
   
  }
  createUser(email, password, confirm_password, phone) {
    const { statusRegister } = this.props;
    this.setState({
      status_submit: "default",
      invalidEmail: "default"
    })
    if ((email && password && confirm_password && phone) && (password === confirm_password) && (password && password.length >= 6)) {
      this.props.createUser(email, password, phone);
      this.props.register(email, password, phone);
      if (statusRegister === "success") {
        this.props.history.push('/fitto_plant_protein');
      } else if ((statusRegister === "existInStayFit") || (statusRegister === "existBebefitroutine")) {
        this.setState({
          invalidEmail: statusRegister
        })
      }
    } else if (password !== confirm_password) {
      this.setState({
        status_submit: "not_match_password"
      })
    } else if (password && password.length < 6) {
      this.setState({
        status_submit: "password_too_short"
      })
    } else if (!(email && password && confirm_password && phone)) {
      this.setState({
        status_submit: "incomplete_information"
      })
    }
  }

  render() {
    const { email, password, confirm_password, phone, status_submit, invalidEmail } = this.state;
    const { statusRegister } = this.props;
    const { messages } = this.props.intl;
    return (
      <>

        <div className="container2 ">
          <div className="row ">
            <div className="col-12 col-sm-12  col-md-5 col-lg-5 padding-top center">
              <div className="mask">
                <img src={mask1} alt="vector" className="mask1" />
                <img src={mask2} alt="vector" className="mask2" />
              </div>
              <img src={p4fbebe97111} alt="vector" className="register-image" />
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7  information-box2  ">
              {/*  <div className="center2">
                <img src={group18} alt="vector" className="group18" />
              </div> */}
              <div className="current-position ellipse-center">
                <p className="border-line  col-9 col-sm-8 col-md-5 col-lg-5"></p>
                <div className="ellipse-text col-2 col-sm-2 col-md-2 col-lg-2">
                  {/* <img src={ellipse_078} alt="vector" /> */}
                  <div className="border-circleWhite"></div>
                  <p className="img-p"> <IntlMessages id="register.chooseYouPackage" /></p>
                </div>
                <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                  {/* <img src={ellipse_077} alt="vector" /> */}
                  <div className="border-circle"></div>
                  <p className="img-p"> <IntlMessages id="register.chooseYouAccount" /></p>
                </div>
                <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                  {/* <img src={ellipse_078} alt="vector" /> */}
                  <div className="border-circleWhite"></div>
                  <p className="img-p"> <IntlMessages id="register.chooseYouflavor" /></p>
                </div>
                <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                  {/* <img src={ellipse_078} alt="vector" /> */}
                  <div className="border-circleWhite"></div>
                  <p className="img-p"> <IntlMessages id="register.deliveryAddress" /></p>
                </div>
                <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                {/*   <img src={ellipse_078} alt="vector" /> */}
                <div className="border-circleWhite"></div>
                  <p className="img-p"> <IntlMessages id="register.payment" /></p>
                </div>
              </div>
              <div className="from-left maigeSm ">
                <div className="account-fit ">
                  <p className="font-size6  bold "><IntlMessages id="register.createAccount" /></p>
                  <p className="font-size4 margin-top-1 "><IntlMessages id="register.accountCredited"/> <span className="bold"> Bebe Stay Fit</span></p>
                </div>
                <div className="mb-3 ">
                  <div className="col-11 col-sm-11 col-lg-11  box-smsStay">
                    <div className="padding-top2">
                      <label className="form-label bold"><IntlMessages id="navbarHome.email" /></label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder={messages['navbarHome.ex_email']}
                        value={email}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </div>
                    {
                      (invalidEmail === "existInStayFit" && ((statusRegister === "existInStayFit") || (statusRegister === "existBebefitroutine"))) &&
                      <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}>อีเมลนี้มีอยู่แล้วในระบบ</h6></small>
                    }
                    {
                      (invalidEmail === "existBebefitroutine" && ((statusRegister === "existInStayFit") || (statusRegister === "existBebefitroutine"))) &&
                      <div>
                        <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}>ไม่สามารถใช้อีเมลนี้ได้</h6></small>
                        <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}>* เนื่องจากซ้ำกับอีเมลในเว็บไซต์ platform.bebefitroutine.com โปรดติดต่อแอดมิน</h6></small>
                      </div>
                    }

                    <div className="padding-top2">
                      <label className="form-label bold"><IntlMessages id="navbarHome.password" /></label>
                      <input
                        type={
                          this.state.eye === true ? "text": "password"
                        }
                        className="form-control"
                        id="password"
                        placeholder={messages['register.numberCharacters']}
                        value={password}
                        onChange={(event) => this.handleChange(event)}
                      />
                            <div className="eye-pass">
                          {
                            this.state.eye === true ? 
                            <i class="fa fa-eye"  onClick={() => this.clickEye("eye",false)}></i>
                            :
                            <i class="fa fa-eye-slash" onClick={() => this.clickEye("eye",true)}></i>
                          }
                      </div>
                    </div>
                    {
                      (status_submit === "password_too_short") &&
                      <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="register.passwordtooShort"/></h6></small>
                    }
                    <div className="padding-top2">
                      <label className="form-label bold"><IntlMessages id="register.confirmPassword"/></label>
                      <input
                       type={
                        this.state.eye1 === true ? "text": "password"
                      }
                        className="form-control"
                        id="confirm_password"
                        placeholder={messages['register.confirmPassword']}
                        value={confirm_password}
                        onChange={(event) => this.handleChange(event)}
                      />
                      <div className="eye-pass">
                          {
                            this.state.eye1 === true ? 
                            <i class="fa fa-eye"  onClick={() => this.clickEye("confirm_eye",false)}></i>
                            :
                            <i class="fa fa-eye-slash"  onClick={() => this.clickEye("confirm_eye",true)}></i>
                          }
                      </div>
                     
                    </div>
                    {
                      (status_submit === "not_match_password") &&
                      <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="register.passwordsnotMatch"/></h6></small>
                    }
                    <div className="padding-top2">
                      <label className="form-label bold"><IntlMessages id="register.phoneNumber"/></label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder={messages['register.ex.phone']}
                        value={phone}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </div>
                    {
                      (status_submit === "incomplete_information") &&
                      <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}><IntlMessages id="navbarHome.validationInformation"/></h6></small>
                    }
                    {/* <div className="padding-top2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                          ยืนยันข้อตกลงและเงื่อนไขการใช้งาน <span className="decoration">อ่านเพิ่ม</span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label">
                          ต้องการรับอีเมลข้อเสนอพิเศษจากทาง  <span className="bold">Bebe Stay Fit</span>
                        </label>
                      </div>
                    </div> */}
                    <div className="mg-top d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 ">
                      <button className="btn bottom-pink " type="button" onClick={() => this.createUser(email, password, confirm_password, phone)} >
                        <IntlMessages id="next"/>
                      </button>
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
}

const mapStateToProps = ({ authUser, exerciseProgram }) => {
  const { statusRegister } = authUser
  const { user_program_id } = exerciseProgram;
  return { statusRegister, user_program_id };
};

const mapActionsToProps = { createUser, register };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(injectIntl(Register));