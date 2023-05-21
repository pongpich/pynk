import React, { Component } from "react";
import group21 from "../../assets/img/group21.png";
import payment1 from "../../assets/img/payment1.png";
import payment2 from "../../assets/img/payment2.png";
import payment3 from "../../assets/img/payment3.png";
import payment4 from "../../assets/img/payment4.png";
import payment5 from "../../assets/img/payment5.png";
import ellipse_077 from "../../assets/img/ellipse_077.png";
import ellipse_078 from "../../assets/img/ellipse_078.png";
import { Link } from 'react-router-dom';
import IntlMessages from "../../helpers/IntlMessages";
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram"
import { insertSubscriptionProducts } from "../../redux/createUser"
import { getSubscriptionProducts } from "../../redux/get"

import axios from 'axios';
import moment from 'moment';
import { encode as btoa } from 'base-64';

class SubscriptionPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: "btn btn-outline-pinkFocus",
      notFocus: "btn btn-outline-pink",
      paymentMethod: "creditCard",
      price: (this.props.user.program_id === "test") ? 1 : 1800, // 1บาท สำหรับเทส / 1800บาท สำหรับใช้จริง
      productName: "bebe stay fit",
      name: this.props.delivery_address && `${JSON.parse(this.props.delivery_address).firstname} ${JSON.parse(this.props.delivery_address).lastname}`,
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      securityCode: "",
      email: this.props.user.email,
      phone: this.props.user.phone,
      program: '',
      product1: this.props.products_list && JSON.parse(this.props.products_list).product1,
      product2: this.props.products_list && JSON.parse(this.props.products_list).product2,
      product3: this.props.products_list && JSON.parse(this.props.products_list).product3,
      username: this.props.delivery_address && JSON.parse(this.props.delivery_address).firstname,
      lastname: this.props.delivery_address && JSON.parse(this.props.delivery_address).lastname,
      telephone: this.props.delivery_address && JSON.parse(this.props.delivery_address).phone,
      addressUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).address,
      subdistrictUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).subdistrict,
      districtUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).district,
      provinceUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).province,
      zipcodeUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).zipcode,
      pageUrl: window.location.href,
      status_payment: "default",
    };
    this.onPay = this.onPay.bind(this);
  }


  componentDidMount() {
    const { price, productName, name, email, phone } = this.state;
    const { user } = this.props;
    this.props.getSubscriptionProducts(user.user_id);

    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);

    const status_payment = params.get("status");
    console.log("status_payment :", status_payment);
    this.setState({ status_payment: status_payment });

    window.localStorage.setItem('price', price);
    window.localStorage.setItem('productName', productName);
    window.localStorage.setItem('name', name);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('phone', phone);
    window.localStorage.setItem('discount', false);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, delivery_address, products_list } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push('/welcome_new_nember');
    }
    if (prevProps.products_list !== products_list) {
      this.setState({
        product1: this.props.products_list && JSON.parse(this.props.products_list).product1,
        product2: this.props.products_list && JSON.parse(this.props.products_list).product2,
        product3: this.props.products_list && JSON.parse(this.props.products_list).product3,
      })
    }
    if (prevProps.delivery_address !== delivery_address) {
      this.setState({
        username: this.props.products_list && JSON.parse(this.props.delivery_address).firstname,
        lastname: this.props.delivery_address && JSON.parse(this.props.delivery_address).lastname,
        telephone: this.props.delivery_address && JSON.parse(this.props.delivery_address).phone,
        addressUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).address,
        subdistrictUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).subdistrict,
        districtUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).district,
        provinceUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).province,
        zipcodeUser: this.props.delivery_address && JSON.parse(this.props.delivery_address).zipcode,
        name: this.props.delivery_address && `${JSON.parse(this.props.delivery_address).firstname} ${JSON.parse(this.props.delivery_address).lastname}`
      })
      window.localStorage.setItem('name', this.props.delivery_address && `${JSON.parse(this.props.delivery_address).firstname} ${JSON.parse(this.props.delivery_address).lastname}`);
    }

  }

  pinkModelFocus = (e) => {
    if (e === "1") {
      //เลือกชำระด้วย creditCard
      this.setState({ paymentMethod: "creditCard" })
      console.log("บัตรเครดิต");
    } else {
      //เลือกชำระด้วย qrCode
      this.setState({ paymentMethod: "qrCode" })
      console.log("QR code");
    }
  }

  onChickprice = (e) => {

  }

  onPay() {
    const { price, name, cardNumber, expirationMonth, expirationYear, securityCode, status_payment, pageUrl } = this.state;
    const { create_user_email, create_user_phone, program, history, products_list, delivery_address, receipt_address, user } = this.props;

    const baseURL = "https://api.gbprimepay.com";
    const tokenURL = `${baseURL}/v2/tokens`; // Test URL: https://api.globalprimepay.com/v2/tokens , Production URL: https://api.gbprimepay.com/v2/tokens
    const recurringURL = `${baseURL}/v1/recurring`;
    const publicKey = "HZUfYchqY3T49pWGoookdeS9eelqfOo7";
    const publicToken = "Basic " + btoa(publicKey + ":");
    const secretKey = "e8Fl2oVu6i5sQ96XalBvQWbbBBFZsrzt";
    const secretToken = "Basic " + btoa(secretKey + ":")

    var ccButton = document.getElementById("cc_button");
    ccButton.style.display = "none";
    setTimeout(() => {
      ccButton.style.display = "block";
    }, 3000);

    let config = {
      headers: {
        Authorization: publicToken,
      }
    }
    const tokenData = {
      rememberCard: true,
      card: {
        name: name,
        number: cardNumber,
        expirationMonth: expirationMonth,
        expirationYear: expirationYear,
        securityCode: securityCode
      }
    };

    axios
      .post(tokenURL, tokenData, config)
      .then(function (response) {
        const { card, resultCode } = response.data;
        var referenceNo = moment().format("YYYYMMDDHHmmss")
        console.log("Response from token service: ", card.token, referenceNo, resultCode);
        if (resultCode === "00") {
          const recurringData = {
            processType: "I",
            referenceNo,
            recurringAmount: price * 12,
            recurringInterval: "M",
            recurringCount: 12,
            recurringPeriod: "01",
            allowAccumulate: "Y",
            cardToken: card.token,
            backgroundUrl: "https://api.planforfit.com/bebefit/recurring", // for staging: https://api.planforfit.com/bebedev/recurring
            customerName: name,
            customerEmail: user && user.email,
            customerTelephone: user && user.phone,
          }

          const recurringConfig = {
            headers: {
              Authorization: secretToken,
            }
          }

          axios
            .post(recurringURL, recurringData, recurringConfig)
            .then(function (recurring_resp) {
              const { resultCode } = recurring_resp.data;
              console.log("Response from recurring service: ", recurring_resp, resultCode);
              if (resultCode === "00") {
                history.push('/subscription_success');
              } else {
                if (pageUrl.includes("localhost") || pageUrl.includes("127.0.0.1")) {
                  window.location.href = "http://localhost:3000/#/subscription_payment?status=unsuccess";
                } else {
                  window.location.href = "https://fit.bebefitroutine.com/#/subscription_payment?status=unsuccess";
                }
                window.location.reload();
              }
            })
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  handleChange(event) {

    this.setState({
      [event.target.id]: event.target.value
    })
  };


  render() {
    const programId = this.state.program.program_id;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground center2 padding-top2 ">
          <div className="col-10 col-sm-10 col-md-8 col-lg-8 center2">
            <div className="current-position2">
              <p className="border-line2  col-8 col-sm-6 col-md-6 col-lg-6 "></p>
              {/* <div className="ellipse-text col-2 col-sm-2 col-md-2 col-lg-2">
                <img src={ellipse_078} alt="vector" />
                <p className="img-p"> <IntlMessages id="register.chooseYouPackage" /></p>
              </div>
              <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                <img src={ellipse_078} alt="vector" />
                <p className="img-p"> <IntlMessages id="register.chooseYouAccount" /></p>
              </div> */}
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
                {/*  <img src={ellipse_077} alt="vector" /> */}
                <div className="border-circle"></div>
                <p className="img-p"> <IntlMessages id="register.payment" /></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2  margin-headText">
              <p className="font-size6 bold color-protein"> การชำระเงิน</p>
            </div>
            {
              ((this.state.status_payment === "unsuccess") && (this.state.paymentMethod === "creditCard")) &&
              <h6 style={{ color: "red" }}>ระบบเรียกเก็บเงินไม่สำเร็จกรุณาตรวจสอบข้อมูลบัตรให้ถูกต้องอีกครั้ง หรือเปลี่ยนวิธีการชำระเงิน</h6>
            }
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 center2 mb-4">
              <button type="button" className={(this.state.paymentMethod === "creditCard") ? this.state.onFocus : this.state.notFocus} onClick={e => this.pinkModelFocus("1")}>บัตรเครดิต/เดบิต</button>&nbsp;&nbsp;&nbsp;
              <button type="button" className={(this.state.paymentMethod === "qrCode") ? this.state.onFocus : this.state.notFocus} onClick={e => this.pinkModelFocus("2")}>ชำระด้วย QR Code</button>
            </div>
            {
              (this.state.paymentMethod === "qrCode") &&
              <div className="center">
                <div className="col-11 col-sm-11 col-md-11 col-lg-11 boxText-qrCode" >
                  <p>1. หลังกด “ชำระเงิน” คุณจะได้รับ QR Code เพื่อชำระ</p>
                  <p>2. เปิดแอปพลิเคชันธนาคารที่คุณมี</p>
                  <p>3. ไปยังเมนู “สแกน” หรือ “สแกนจ่าย”</p>
                  <p>4. ตรวจสอบชื่อบัญชีและยอดที่คุณต้องชำระก่อนทำรายการ</p>
                </div>
              </div>
            }
            {
              (this.state.paymentMethod === "creditCard") &&
              <div className="box-protein">
                <div className="padding-top">
                  <div className="box-proteinAddress padding-top">
                    <div>
                      <img src={payment1} alt="vector" className="img-payment" />&nbsp;
                                        <img src={payment2} alt="vector" className="img-payment" />&nbsp;
                                        <img src={payment3} alt="vector" className="img-payment" />&nbsp;
                                        <img src={payment4} alt="vector" className="img-payment" />&nbsp;
                                        <img src={payment5} alt="vector" className="img-payment" />
                    </div>

                    <form action="#" method="POST">
                      <div className="padding-top2">
                        <label className="form-label bold font-size4">หมายเลขบัตร 16 หลัก</label>
                        <input type="text" className="form-control" id="cardNumber" maxLength="16" placeholder="หมายเลขบัตร" onChange={(event) => this.handleChange(event)} />
                      </div>
                      <div className="padding-top2">
                        <label className="form-label bold font-size4">ชื่อบนบัตร</label>
                        <input type="text" className="form-control" id="name" placeholder="ชื่อ และนามสกุลที่อยู่บนบัตร" onChange={(event) => this.handleChange(event)} />
                      </div>
                      <div className="padding-top2">
                        <label className="form-label bold font-size4">วันหมดอายุ (เดือน)</label>
                        <input type="text" className="form-control" id="expirationMonth" maxLength="2" placeholder="ตัวอย่าง เช่น 05" onChange={(event) => this.handleChange(event)} />
                      </div>
                      <div className="padding-top2">
                        <label className="form-label bold font-size4">วันหมดอายุ (ปี)</label>
                        <input type="text" className="form-control" id="expirationYear" maxLength="2" placeholder="ตัวอย่าง เช่น 22" onChange={(event) => this.handleChange(event)} />
                      </div>
                      <div className="padding-top2">
                        <label className="form-label bold font-size4">รหัส CVV</label>
                        <input type="password" className="form-control" id="securityCode" maxLength="4" autoComplete="off" action="click" placeholder="รหัสหลังบัตร" onChange={(event) => this.handleChange(event)} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            }
            <div className="box-protein  margin-head">
              <div className="padding-top">
                <div className="box-proteinAddress padding-top">
                  <div className="padding-top2">
                    {/* <p className=" bold font-size5 between">แพ็กเกจของคุณ <span className="font-size4 light decoration pointer" onClick={e => this.onChickprice(e)}>เปลี่ยน</span></p> */}
                    <p className="font-size5">
                      <>
                        <p className="font-size5 bold">แพ็กเกจของคุณ</p>
                        <p className="section-sizeLeft">สมัครตามระยะเวลาของโปรแกรม</p>
                        <p className="font-size5 bold">{this.state.price.toLocaleString('en')}  บาท</p>
                        {
                          (this.state.paymentMethod === "creditCard") &&
                          <p className="font-size4">
                            *หลังจากนี้เราจะทำการเรียกเก็บเงินทุกๆเดือนอัตโนมัติ
                          <br />
                          จนกว่าจะครบตามระยะเวลาที่โปรแกรมแนะนำ
                        </p>
                        }
                      </>
                    </p>
                  </div>
                  <p className="border-bottom "></p>
                  <div className="padding-top2">
                    {/* <p className=" bold font-size5 between">แพ็กเกจของคุณ <span className="font-size4 light decoration pointer" onClick={e => this.onChickprice(e)}>เปลี่ยน</span></p> */}
                    <p className="font-size5">
                      <>
                        <p className="font-size5 bold between">รสชาติของ Fitto Plant Protein <span className="font-size4 light decoration pointer" onClick={() => this.props.history.push('/edit_fitto_plant_protein')}>เปลี่ยน</span></p>
                        <p className="font-size4">
                          กล่องที่ 1 - {this.state.product1}
                          <br />
                          กล่องที่ 2 - {this.state.product2}
                          <br />
                          กล่องที่ 3 - {this.state.product3}
                        </p>
                      </>
                    </p>
                  </div>
                  <p className="border-bottom "></p>
                  <div className="padding-top2">
                    <p className=" bold font-size5 between">ที่อยู่ในการจัดส่งสินค้า  <span className="font-size4 light decoration pointer" onClick={() => this.props.history.push('/edit_shipping_address')}>เปลี่ยน</span></p>
                    <p>{this.state.username} &nbsp; {this.state.lastname}  </p>
                    <p>{this.state.telephone} </p>
                    <p>{this.state.addressUser} &nbsp;{this.state.subdistrictUser}&nbsp;{this.state.districtUser}</p>
                    <p>{this.state.provinceUser}&nbsp;{this.state.zipcodeUser} </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 col-10 col-sm-10  mx-auto   col-md-10 col-lg-10 distance">
              {
                ((this.state.status_payment === "unsuccess") && (this.state.paymentMethod === "creditCard")) &&
                <h6 style={{ color: "red" }}>ระบบเรียกเก็บเงินไม่สำเร็จกรุณาตรวจสอบข้อมูลบัตรให้ถูกต้องอีกครั้ง หรือเปลี่ยนวิธีการชำระเงิน</h6>
              }
              {
                (this.state.paymentMethod === "creditCard") &&
                <input id="cc_button" className="btn bottom-pink" value="ชำระเงิน" onClick={() => this.onPay()} />
              }
              {
                /* (this.state.paymentMethod === "creditCard") &&
                <input id="cc_button" className="btn bottom-pink col-12 col-sm-12" value="ชำระเงิน" onClick={() => this.props.history.push("cc_token") */
              }
            </div>
            <form
              id="qr_form"
              action={
                (this.state.pageUrl.includes("localhost") || this.state.pageUrl.includes("127.0.0.1")) ?
                  "http://localhost:3000/#/qr_checkout_subscription"
                  :
                  "https://fit.bebefitroutine.com/#/qr_checkout_subscription"
              }
              className="d-grid gap-2 col-10 ol-sm-10  mx-auto   col-md-10 col-lg-10 distance">
              {
                (this.state.paymentMethod === "qrCode") &&
                <input id="qr_button" type="submit" className="btn bottom-pink" value="ชำระเงิน" />
              }
            </form>

          </div>
        </div>

      </>

    );
  }
}

const mapStateToProps = ({ authUser, createUser, exerciseProgram, get }) => {
  const { user } = authUser;
  const { create_user_email, create_user_password, create_user_phone } = createUser;
  const { program, allProgram, user_program_id } = exerciseProgram;
  const { delivery_address, products_list } = get;
  return { user, create_user_email, create_user_password, create_user_phone, program, allProgram, user_program_id, delivery_address, products_list };
};


const mapActionsToProps = { getUserProgram, insertSubscriptionProducts, getSubscriptionProducts };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SubscriptionPayment);
