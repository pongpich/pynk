import React, { Component } from "react";
import ellipse_077 from "../../assets/img/ellipse_077.png";
import ellipse_078 from "../../assets/img/ellipse_078.png";
import IntlMessages from "../../helpers/IntlMessages";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram";
import { insertSubscriptionProducts } from "../../redux/createUser";
import { injectIntl } from 'react-intl';

import axios from 'axios';
import moment from 'moment';
import { encode as btoa } from 'base-64';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardFocus: "btn btn-outline-pinkFocus",
      qrCodeFocus: "btn btn-outline-pink",
      paymentMethod: "creditCard",
      //price: 1.00, //สำหรับเทส
      price: this.props.program.price, //สำหรับใช้จริง
      productName: "bebe stay fit",
      name: `${this.props.create_username} ${this.props.create_lastname}`,
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      securityCode: "",
      email: this.props.create_user_email,
      phone: this.props.create_user_phone,
      program: this.props.program,
      username: this.props.create_username,
      lastname: this.props.create_lastname,
      telephone: this.props.create_ltelephone,
      addressUser: this.props.create_addressUser,
      subdistrictUser: this.props.create_subdistrictUser,
      districtUser: this.props.create_districtUser,
      provinceUser: this.props.create_provinceUser,
      zipcodeUser: this.props.create_zipcodeUser,
      pageUrl: window.location.href,
      status_payment: "default"
    };
    this.onPay = this.onPay.bind(this);
  }


  componentDidMount() {
    const { user_program_id, products_list, delivery_address, receipt_address } = this.props;
    const { price, productName, email, phone, program, name } = this.state;

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
    window.localStorage.setItem('program_id', program.program_id);
    window.localStorage.setItem('products_list', products_list);
    window.localStorage.setItem('delivery_address', delivery_address);
    window.localStorage.setItem('receipt_address', receipt_address);
    this.props.insertSubscriptionProducts(
      email,
      products_list,
      delivery_address,
      receipt_address
    );

    this.props.getUserProgram(email);

    if (user_program_id) { //ถ้ามี user_program_id แสดงว่าชำระเงินสำเร็จแล้ว
      this.props.history.push('/welcome_new_nember');
    }

    if (!delivery_address) {
      this.props.history.push('/shipping_address');
    }
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push('/welcome_new_nember');
    }
  }

  pinkModelFocus = (e) => {
    if (e === "1") {
      //เลือกชำระด้วย creditCard
      var qrCodeFocus = "btn btn-outline-pink";
      var creditCardFocus = "btn btn-outline-pinkFocus";
      this.setState({ paymentMethod: "creditCard" })
      console.log("บัตรเครดิต");
    } else {
      //เลือกชำระด้วย qrCode
      var qrCodeFocus = "btn btn-outline-pinkFocus";
      var creditCardFocus = "btn btn-outline-pink";
      this.setState({ paymentMethod: "qrCode" })
      console.log("QR code");
    }
    console.log("e :", e);
    this.setState({
      qrCodeFocus: qrCodeFocus,
      creditCardFocus: creditCardFocus,
    })

  }

  onChickprice = (e) => {
    let id = this.state.program.program_id
    if (id === "starter_stay_fit_01") {
      this.setState({
        program: this.props.allProgram[2],
      });
      /*    console.log("3900",id,id, this.props.allProgram[1]); */
    } else {
      this.setState({
        program: this.props.allProgram[1],
      });
      /*       console.log("3700",id, this.props.allProgram[2]); */
    }

  }

  onPay() {
    const { price, name, cardNumber, expirationMonth, expirationYear, securityCode } = this.state;
    const { create_user_email, create_user_phone, program, history, products_list, delivery_address, receipt_address } = this.props;

    const baseURL = "https://api.gbprimepay.com";
    const tokenURL = `${baseURL}/v2/tokens`; // Test URL: https://api.globalprimepay.com/v2/tokens , Production URL: https://api.gbprimepay.com/v2/tokens
    const recurringURL = `${baseURL}/v1/recurring`;
    const publicKey = "HZUfYchqY3T49pWGoookdeS9eelqfOo7";
    const publicToken = "Basic " + btoa(publicKey + ":");
    const secretKey = "e8Fl2oVu6i5sQ96XalBvQWbbBBFZsrzt";
    const secretToken = "Basic " + btoa(secretKey + ":")
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
        console.log("Response from token service: ", card.token, referenceNo);
        if (resultCode === "00") {
          const recurringData = {
            processType: "I",
            referenceNo,
            recurringAmount: price,
            recurringInterval: "M",
            recurringCount: 1,
            recurringPeriod: "01",
            allowAccumulate: "Y",
            cardToken: card.token,
            backgroundUrl: "https://api.planforfit.com/bebefit/recurring", // for staging: https://api.planforfit.com/bebedev/recurring
            customerName: name,
            customerEmail: create_user_email,
            customerTelephone: create_user_phone,
            merchantDefined1: program.program_id,
            merchantDefined2: products_list,
            merchantDefined3: delivery_address,
            merchantDefined4: receipt_address
          }

          const recurringConfig = {
            headers: {
              Authorization: secretToken,
            }
          }

          axios
            .post(recurringURL, recurringData, recurringConfig)
            .then(function (recurring_resp) {
              console.log("Response from recurring service: ", recurring_resp);
              history.push('/welcome_new_nember');
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
    const { messages } = this.props.intl;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground center2 padding-top2 ">
        <div className="col-10 col-sm-10 col-md-8 col-lg-8 center2">
           <div className="current-position2">
                <p className="border-line2  col-8 col-sm-6 col-md-6 col-lg-6 "></p>
                <div className="ellipse-text col-2 col-sm-2 col-md-2 col-lg-2">
                  {/* <img src={ellipse_078} alt="vector" /> */}
                  <div className="border-circleWhite"></div>
                  <p className="img-p"> <IntlMessages id="register.chooseYouPackage" /></p>
                </div>
                <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                  {/* <img src={ellipse_078} alt="vector" /> */}
                  <div className="border-circleWhite"></div>
                  <p className="img-p"> <IntlMessages id="register.chooseYouAccount" /></p>
                </div>
                <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                  {/* <img src={ellipse_078} alt="vector" /> */}
                  <div className="border-circleWhite"></div>
                  <p className="img-p"> <IntlMessages id="register.chooseYouflavor" /></p>
                </div>
                <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                 {/*  <img src={ellipse_078} alt="vector" /> */}
                 <div className="border-circleWhite"></div>
                  <p className="img-p"> <IntlMessages id="register.deliveryAddress" /></p>
                </div>
                <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                  {/* <img src={ellipse_077} alt="vector" /> */}
                  <div className="border-circle"></div>
                  <p className="img-p"> <IntlMessages id="register.payment" /></p>
                </div>
              </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
            {
              /* (this.state.paymentMethod === "creditCard") &&
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
              </div> */
            }

            <div className="box-protein">
              <div className="">
                <div className="box-proteinAddress padding-top">
                  <div>
                    {/* <p className=" bold font-size5 between">แพ็กเกจของคุณ <span className="font-size4 light decoration pointer" onClick={e => this.onChickprice(e)}>เปลี่ยน</span></p> */}

                    <p className="font-size5">
                      {programId === "starter_stay_fit_01" ?
                        <>
                          <p className="font-size5 bold"><IntlMessages id="payment.yourPackage" /></p>
                          <p className="section-sizeLeft"><IntlMessages id="payment.applyProgram"/></p>
                          <p className="font-size5 bold">
                            {this.state.program.price.toLocaleString('en')}  <IntlMessages id="programPackage.baht" />
                          </p>
                          <p className="font-size4">
                            <IntlMessages id="programPackage.2months"/>
                          </p>
                        </>
                        :
                        <>
                          <p className="font-size5 bold"><IntlMessages id="payment.yourPackage" /></p>
                          <p className="section-sizeLeft"><IntlMessages id="payment.applyProgram"/></p>
                          <p className="font-size5 bold">
                            {this.state.program.price.toLocaleString('en')}  <IntlMessages id="programPackage.baht"/>
                          </p>
                          <p className="font-size4">
                            <IntlMessages id="programPackage.specialPrice"/>
                          </p>

                        </>

                      }
                    </p>

                  </div>
                  <p className="border-bottom "></p>
                  <div className="padding-top2">
                    <p className=" bold font-size5 between"><IntlMessages id="shipping_address.shippingAddress"/> <span className="font-size4 light decoration pointer" onClick={() => this.props.history.push('/shipping_address')}>เปลี่ยน</span></p>
                    <p>{this.state.username} &nbsp; {this.state.lastname}  </p>
                    <p>{this.state.telephone} </p>
                    <p>{this.state.addressUser} &nbsp;{this.state.subdistrictUser}&nbsp;{this.state.districtUser}</p>
                    <p>{this.state.provinceUser}&nbsp;{this.state.zipcodeUser} </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2  margin-headText">
              <p className="font-size6 bold color-protein"> <IntlMessages id="payment.payment"/></p>
            </div>
            {
              this.state.status_payment === "unsuccess" &&
              <h6 style={{ color: "red" }}><IntlMessages id="payment.errorBilling"/></h6>
            }
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="button-mg">
                <button type="button" className={this.state.creditCardFocus} onClick={e => this.pinkModelFocus("1")}><IntlMessages id="payment.credit"/></button>&nbsp;&nbsp;
                <button type="button" className={this.state.qrCodeFocus} onClick={e => this.pinkModelFocus("2")}><IntlMessages id="payment.qrcode"/></button>
              </div>
            </div>
            {
              (this.state.paymentMethod === "qrCode") &&
              <div className="center">
                <div className="col-11 col-sm-11 col-md-11 col-lg-11 boxText-qrCode" >
                  <p><IntlMessages id="payment.messagQrcode1"/></p>
                  <p><IntlMessages id="payment.messagQrcode2"/></p>
                  <p><IntlMessages id="payment.messagQrcode3"/></p>
                  <p><IntlMessages id="payment.messagQrcode4"/></p>
                </div>
              </div>
            }

            <div className="d-grid gap-2 col-10 col-sm-10  mx-auto   col-md-10 col-lg-10 distance">
              {
                /* (this.state.paymentMethod === "creditCard") &&
                <input id="cc_button" className="btn bottom-pink" value="ชำระเงิน" onClick={() => this.onPay()} /> */
              }
              {
                (this.state.paymentMethod === "creditCard") &&
                <input id="cc_button" className="btn bottom-pink col-12 col-sm-12" value={messages['payment.pay']} onClick={() => this.props.history.push("cc_token")} />
              }
            </div>



            <form
              id="qr_form"
              action={
                (this.state.pageUrl.includes("localhost") || this.state.pageUrl.includes("127.0.0.1")) ?
                  "http://localhost:3000/#/qr_checkout"
                  :
                  "http://localhost:3000/#/qr_checkout"
                 /*  "https://fit.bebefitroutine.com/#/qr_checkout" */
              }
              //action={"https://api.gbprimepay.com/gbp/gateway/qrcode"}
              //method="POST"
              className="d-grid gap-2 col-10 col-sm-10  mx-auto   col-md-10 col-lg-10 distance">
              {/* <input id="qr_token" type="hidden" name="token" />
              <input id="qr_refNo" type="hidden" name="referenceNo" />
              <input id="qr_bgUrl" type="hidden" name="backgroundUrl" />
              <input id="qr_amount" type="hidden" name="amount" />
              <input id="qr_detail" type="hidden" name="detail" />
              <input id="qr_name" type="hidden" name="customerName" />
              <input id="qr_email" type="hidden" name="customerEmail" />
              <input id="qr_phone" type="hidden" name="customerTelephone" />
              <input id="qr_programID" type="hidden" name="merchantDefined1" /> */}
              {
                (this.state.paymentMethod === "qrCode") &&
                <input id="qr_button" type="submit" className="btn bottom-pink  col-12 col-sm-12" value={messages['payment.pay']} />
              }
            </form>

            {/*  <Link to="/welcome_new_nember" className="btn bottom-pink" type="button">ชำระเงิน</Link> */}

          </div>
        </div>

      </>

    );
  }
}

const mapStateToProps = ({ createUser, exerciseProgram, shippingAddress }) => {
  const { create_user_email, create_user_password, create_user_phone } = createUser;
  const { program, allProgram, user_program_id } = exerciseProgram;
  const { products_list, delivery_address, receipt_address, create_username, create_lastname, create_telephone, create_addressUser,
    create_subdistrictUser, create_districtUser, create_provinceUser, create_zipcodeUser } = shippingAddress;
  return {
    products_list, delivery_address, receipt_address, create_user_email, create_user_password, create_user_phone, program, allProgram,
    create_username, create_lastname, create_telephone, create_addressUser,
    create_subdistrictUser, create_districtUser, create_provinceUser, create_zipcodeUser, user_program_id
  };
};


const mapActionsToProps = { getUserProgram, insertSubscriptionProducts };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(injectIntl(Payment));
