import React, { Component } from "react";
import group20 from "../../assets/img/group20.png";
import { Link } from 'react-router-dom';
import InputAddress from 'react-thailand-address-autocomplete';
import ellipse_077 from "../../assets/img/ellipse_077.png";
import ellipse_078 from "../../assets/img/ellipse_078.png";
import IntlMessages from "../../helpers/IntlMessages";
import { injectIntl } from 'react-intl';
import { connect } from "react-redux";
import { shippingAddress, clearSelectDeliveryAddress, selectDeliveryAddress, clearSelectReceiptAddress, selectReceiptAddress } from "../../redux/shippingAddress";
import { getUserProgram } from "../../redux/exerciseProgram"


class Shipping_Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: false,
      subdistrict: null, // เอาไว้ใส่ใน value
      district: null, // เอาไว้ใส่ใน value
      province: null, // เอาไว้ใส่ใน value
      zipcode: null, // เอาไว้ใส่ใน value
      pinkModel: "btn btn-outline-pinkModel",
      pinkModelFocus: "btn btn-outline-pinkModelFocus",
      username: null,
      lastname: null,
      telephone: null,
      addressUser: null,
      subdistrictUser: null,
      districtUser: null,
      provinceUser: null,
      zipcodeUser: null,
      InvoicePerson: "บุคคลธรรมดา",  //  ข้อมูลใบกำกับภาษี start
      InvoiceTaxpayerName: null,
      InvoiceTaxpayerBranchName: "",
      InvoiceTaxIdentificationNumber: null,
      InvoiceTelephone: null,
      useShippingAddress: false,
      InvoiceAddressUser: null,
      InvoiceSubdistrict: null,
      InvoiceDistrict: null,
      InvoiceProvince: null,
      InvoiceZipcode: null,
      needTaxInvoice: false,
      status_submit: "default"
    };
  }
  componentDidMount() {
    const { user_program_id, create_user_email, products_list } = this.props;

    this.props.getUserProgram(create_user_email);

    this.props.clearSelectDeliveryAddress();
    this.props.clearSelectReceiptAddress();

    if (!products_list) {
      this.props.history.push('/fitto_plant_protein');
    }

    if (user_program_id) { //ถ้ามี user_program_id แสดงว่าชำระเงินสำเร็จแล้ว
      this.props.history.push('/welcome_new_nember');
    }
    this.setState({
      username: this.props.create_username,
      lastname: this.props.create_lastname,
      telephone: this.props.create_telephone,
      addressUser: this.props.create_addressUser,
      subdistrict: this.props.create_subdistrictUser,// เอาไว้ใส่ใน value
      district: this.props.create_districtUser, // เอาไว้ใส่ใน value
      province: this.props.create_provinceUser, // เอาไว้ใส่ใน value
      zipcode: this.props.create_zipcodeUser, // เอาไว้ใส่ใน value
      subdistrictUser: this.props.create_subdistrictUser,
      districtUser: this.props.create_districtUser,
      provinceUser: this.props.create_provinceUser,
      zipcodeUser: this.props.create_zipcodeUser
    })
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, delivery_address } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push('/welcome_new_nember');
    }
    if (!prevProps.delivery_address && delivery_address) {
      this.props.history.push('/payment');
    }
  }

  shippingAddress(invoice, username, lastname, telephone, addressUser, subdistrictUser, districtUser, provinceUser, zipcodeUser,
    InvoicePerson, InvoiceTaxpayerName, InvoiceTaxpayerBranchName, InvoiceTaxIdentificationNumber, InvoiceTelephone, useShippingAddress,
    InvoiceAddressUser, InvoiceSubdistrict, InvoiceDistrict, InvoiceProvince, InvoiceZipcode) {
    this.setState({
      status_submit: "default"
    })
    if (username && lastname && telephone && addressUser && subdistrictUser && districtUser && provinceUser && zipcodeUser) {
      this.props.shippingAddress(
        invoice, username, lastname, telephone, addressUser, subdistrictUser, districtUser, provinceUser, zipcodeUser,
        InvoicePerson, InvoiceTaxpayerName, InvoiceTaxIdentificationNumber, InvoiceTelephone, useShippingAddress,
        InvoiceAddressUser, InvoiceSubdistrict, InvoiceDistrict, InvoiceProvince, InvoiceZipcode
      );
      const delivery_address = {
        "firstname": username,
        "lastname": lastname,
        "phone": telephone,
        "address": addressUser,
        "subdistrict": subdistrictUser,
        "district": districtUser,
        "province": provinceUser,
        "zipcode": zipcodeUser
      }
      console.log("delivery_address :", delivery_address);
      this.props.selectDeliveryAddress(delivery_address);

      if (this.state.needTaxInvoice) {
        const receipt_address = {
          "invoicePerson": InvoicePerson,
          "InvoiceTaxpayerName": InvoiceTaxpayerName,
          "InvoiceTaxpayerBranchName": (InvoicePerson === "นิติบุคคล") ? InvoiceTaxpayerBranchName : "",
          "InvoiceTaxIdentificationNumber": InvoiceTaxIdentificationNumber,
          "InvoiceTelephone": InvoiceTelephone,
          "InvoiceAddressUser": useShippingAddress ? addressUser : InvoiceAddressUser,
          "InvoiceSubdistrict": useShippingAddress ? subdistrictUser : InvoiceSubdistrict,
          "InvoiceDistrict": useShippingAddress ? districtUser : InvoiceDistrict,
          "InvoiceProvince": useShippingAddress ? provinceUser : InvoiceProvince,
          "InvoiceZipcode": useShippingAddress ? zipcodeUser : InvoiceZipcode
        }
        console.log("receipt_address :", receipt_address);
        this.props.selectReceiptAddress(receipt_address);
      }
    } else {
      this.setState({
        status_submit: "incomplete_information"
      })
    }
  }

  cancelNeedTaxInvoice() {
    this.setState({ needTaxInvoice: false });
    document.getElementById("checkedTaxInvoice").checked = false
  }

  taxInvoice = (e) => {
    const { checked } = e.target;

    this.setState({
      invoice: checked
    })

    if (checked === true) {
      document.getElementById('clickModal').click();
    }

    if (this.state.needTaxInvoice) {
      this.setState({ needTaxInvoice: false });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onChickUseShippingAddress(e) {

    const { checked } = e.target;

    this.setState({
      useShippingAddress: checked
    })
  }
  onSelect(fullAddress) {

    const { subdistrict, district, province, zipcode } = fullAddress
    this.setState({
      subdistrict,
      district,
      province,
      zipcode,
      subdistrictUser: subdistrict,
      districtUser: district,
      provinceUser: province,
      zipcodeUser: zipcode
    })
  }

  onSelectInvoice(fullAddress) {

    const { subdistrict, district, province, zipcode } = fullAddress
    this.setState({
      subdistrict,
      district,
      province,
      zipcode,
      InvoiceSubdistrict: subdistrict,
      InvoiceDistrict: district,
      InvoiceProvince: province,
      InvoiceZipcode: zipcode
    })
  }



  render() {
    const { invoice, username, lastname, telephone, addressUser, subdistrictUser, districtUser, provinceUser, zipcodeUser,
      InvoicePerson, InvoiceTaxpayerName, InvoiceTaxpayerBranchName, InvoiceTaxIdentificationNumber, InvoiceTelephone, useShippingAddress,
      InvoiceAddressUser, InvoiceSubdistrict, InvoiceDistrict, InvoiceProvince, InvoiceZipcode, status_submit } = this.state;
    const { messages } = this.props.intl;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  App-headerBackground center2 padding-top2 ">
          <div className="col-10 col-sm-10 col-md-8 col-lg-8 center2">
            {/*  <img src={group19} alt="vector" className="group19" /> */}
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
                {/* <img src={ellipse_077} alt="vector" /> */}
                <div className="border-circle"></div>
                <p className="img-p"> <IntlMessages id="register.deliveryAddress" /></p>
              </div>
              <div className="ellipse-text  col-2 col-sm-2 col-md-2 col-lg-2">
                {/*  <img src={ellipse_078} alt="vector" /> */}
                <div className="border-circleWhite"></div>
                <p className="img-p"> <IntlMessages id="register.payment" /></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">

            <div className="box-protein">
              <div className="padding-top">
                <p className="font-size6 bold color-protein"><IntlMessages id="shipping_address.shippingAddress" /></p>
                <div className="box-proteinAddress padding-top">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label className="form-label bold font-size4"><IntlMessages id="shipping_address.name" /></label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" name="username" value={this.state.username} onChange={e => this.onChange(e)} placeholder={messages['shipping_address.name']} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <label className="form-label bold font-size4"><IntlMessages id="shipping_address.surname" /></label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" name="lastname" value={this.state.lastname} onChange={e => this.onChange(e)} placeholder={messages['shipping_address.surname']} />
                    </div>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="register.phoneNumber" /></label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" name="telephone" value={this.state.telephone} onChange={e => this.onChange(e)} placeholder="ตัวอย่าง 08XXXXXXXX" />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.address" /></label>
                    <textarea className="form-control" rows="3" placeholder="กรอกบ้านเลขที่, หมู่, ซอย, อาคาร, ถนน และจุดสังเกต(ถ้ามี)" name="addressUser" onChange={e => this.onChange(e)} value={this.state.addressUser}  ></textarea>
                  </div>
                  <div className="padding-top2 elementStyle">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.subdistrict" /></label>
                    <InputAddress style={{ width: "100%" }}
                      address="subdistrict"
                      value={this.state.subdistrict}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                      placeholder={messages['shipping_address.subdistrict']}
                    />
                  </div>
                  <div className="padding-top2 elementStyle">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.district" /></label>
                    <InputAddress style={{ width: "100%" }}
                      address="district"
                      value={this.state.district}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                      placeholder={messages['shipping_address.district']}
                    />
                  </div>
                  <div className="padding-top2 elementStyle">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.province" /></label>
                    <InputAddress style={{ width: "100%" }}
                      address="province"
                      value={this.state.province}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                      placeholder={messages['shipping_address.province']}
                    />
                  </div>
                  <div className="padding-top2 elementStyle">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.postcode" /></label>
                    <InputAddress style={{ width: "100%" }}
                      address="zipcode"
                      value={this.state.zipcode}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                      placeholder={messages['shipping_address.postcode']}
                    />
                  </div>
                  {
                    (status_submit === "incomplete_information") &&
                    <small id="emailHelp" className="form-text text-muted mb-3"><h6 style={{ color: "red" }}>กรุณากรอกข้อมูลให้ครบถ้วน</h6></small>
                  }
                  <div className="padding-top2">
                    <div className="form-check">
                      <input id="checkedTaxInvoice" className="form-check-input" type="checkbox" onClick={e => this.taxInvoice(e)} />
                      <label className="form-check-label">
                        <IntlMessages id="shipping_address.taxinvoice" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 distance">
                {/*   <button className="btn bottom-pink" type="button" >
                                    ถัดไป
                                </button> */}
                <div style={{ display: 'none' }}>
                  <button className="btn bottom-pink" id="clickModal" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                    chick
                  </button>
                </div>
                <div className="col-12 col-sm-12  col-md-12 col-lg-12 center">
                  <button type="button" className={this.state.pinkModel} id="back-go" onClick={() => this.props.history.push('/fitto_plant_protein')}  ><IntlMessages id="videoList.goback" /></button>&nbsp;&nbsp;
                  {/*   <button type="button" className={this.state.pinkModelFocus}><IntlMessages id="next"/></button> */}
                  <button className={this.state.pinkModelFocus} type="button" onClick={() => this.shippingAddress(
                    invoice, username, lastname, telephone, addressUser, subdistrictUser, districtUser, provinceUser, zipcodeUser,
                    InvoicePerson, InvoiceTaxpayerName, InvoiceTaxpayerBranchName, InvoiceTaxIdentificationNumber, InvoiceTelephone, useShippingAddress,
                    InvoiceAddressUser, InvoiceSubdistrict, InvoiceDistrict, InvoiceProvince, InvoiceZipcode
                  )}  >
                    <IntlMessages id="next" />
                  </button>
                </div>
                {/*     <button className="btn bottom-pink" type="button" onClick={() => this.shippingAddress(
                  invoice, username, lastname, telephone, addressUser, subdistrictUser, districtUser, provinceUser, zipcodeUser,
                  InvoicePerson, InvoiceTaxpayerName, InvoiceTaxpayerBranchName, InvoiceTaxIdentificationNumber, InvoiceTelephone, useShippingAddress,
                  InvoiceAddressUser, InvoiceSubdistrict, InvoiceDistrict, InvoiceProvince, InvoiceZipcode
                )}  >
                  <IntlMessages id="next"/>asd
                </button> */}
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog ">
            <div className="modal-content padding-leftRight">
              <div className="modal-headerIn margin-headText">
                <p className="bold font-size5  color-protein" id="exampleModalLabel"><IntlMessages id="shipping_address.addressInvoice" /></p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-bodyIn">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="InvoicePerson" checked={this.state.InvoicePerson === "บุคคลธรรมดา"} onChange={e => this.onChange(e)} id="inlineRadio1" value="บุคคลธรรมดา" />
                  <label className="form-check-label"><IntlMessages id="shipping_address.individual" /></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="InvoicePerson" checked={this.state.InvoicePerson === "นิติบุคคล"} onChange={e => this.onChange(e)} id="inlineRadio2" value="นิติบุคคล" />
                  <label className="form-check-label"><IntlMessages id="shipping_address.juristic" /></label>
                </div>
                {
                  (this.state.InvoicePerson === "บุคคลธรรมดา") &&
                  <>
                    <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                      <div className="mb-3">
                        <label className="form-label bold"><IntlMessages id="shipping_address.taxpayer" /></label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="InvoiceTaxpayerName" onChange={e => this.onChange(e)} placeholder="กรอกชื่อ" />
                      </div>
                    </div>
                    <div className="row">
                      <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="mb-3">
                          <label className="form-label bold"><IntlMessages id="shipping_address.identification" /></label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" name="InvoiceTaxIdentificationNumber" onChange={e => this.onChange(e)} placeholder="กรุณาระบุ" />
                        </div>
                      </div>
                      <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                        <div className="mb-3">
                          <label className="form-label bold"><IntlMessages id="shipping_address.phoneNumber" /></label>
                          <input type="number" className="form-control" id="exampleFormControlInput1" name="InvoiceTelephone" onChange={e => this.onChange(e)} placeholder="กรุณาระบุ" />
                        </div>
                      </div>
                    </div>
                  </>
                }
                {
                  (this.state.InvoicePerson === "นิติบุคคล") &&
                  <div className="row">
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label bold"><IntlMessages id="shipping_address.nameJuristic" /></label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="InvoiceTaxpayerName" onChange={e => this.onChange(e)} placeholder="กรอกชื่อ" />
                      </div>
                    </div>
                    <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label bold"><IntlMessages id="shipping_address.office" /></label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" name="InvoiceTaxpayerBranchName" onChange={e => this.onChange(e)} placeholder="กรุณาระบุ" />
                      </div>
                    </div>
                    <div className="row">
                      <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="mb-3">
                          <label className="form-label bold"><IntlMessages id="shipping_address.identification" /></label>
                          <input type="number" className="form-control" id="exampleFormControlInput1" name="InvoiceTaxIdentificationNumber" onChange={e => this.onChange(e)} placeholder="กรุณาระบุ" />
                        </div>
                      </div>
                      <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                        <div className="mb-3">
                          <label className="form-label bold"><IntlMessages id="shipping_address.phoneNumber" /></label>
                          <input type="number" className="form-control" id="exampleFormControlInput1" name="InvoiceTelephone" onChange={e => this.onChange(e)} placeholder="กรุณาระบุ" />
                        </div>
                      </div>
                    </div>
                  </div>

                }

                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="useShippingAddress" onClick={e => this.onChickUseShippingAddress(e)} id="flexCheckDefault" defaultChecked={this.state.useShippingAddress} />
                    <label className="form-check-label">
                      <IntlMessages id="shipping_address.sameAddress" />
                    </label>
                  </div>
                </div>

                {
                  !this.state.useShippingAddress &&
                  <div>
                    <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                      <div className="mb-3">
                        <label className="form-label bold"><IntlMessages id="shipping_address.address" /></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="InvoiceAddressUser" onChange={e => this.onChange(e)} placeholder="กรอกบ้านเลขที่, หมู่, ซอย, อาคาร, ถนน และจุดสังเกต(ถ้ามี)"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="mb-3 elementStyle">
                          <label className="form-label bold"><IntlMessages id="shipping_address.subdistrict" /></label>
                          {/* <InputAddress style={{ width: "100%" }}
                            address="subdistrict"
                            value={this.state.InvoiceSubdistrict}
                            onChange={e => this.onChange(e)}
                            onSelect={e => this.onSelectInvoice(e)}
                          /> */}
                          <input
                            type="text" className="form-control"
                            style={{ width: "100%" }}
                            name="InvoiceSubdistrict"
                            value={this.state.InvoiceSubdistrict}
                            onChange={e => this.onChange(e)}
                            placeholder={messages['shipping_address.subdistrict']}
                          />
                        </div>
                      </div>
                      <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                        <div className="mb-3 elementStyle">
                          <label className="form-label bold"><IntlMessages id="shipping_address.district" /></label>
                          {/* <InputAddress style={{ width: "100%" }}
                            address="district"
                            value={this.state.InvoiceDistrict}
                            onChange={e => this.onChange(e)}
                            onSelect={e => this.onSelectInvoice(e)}
                          /> */}
                          <input
                            type="text" className="form-control"
                            style={{ width: "100%" }}
                            name="InvoiceDistrict"
                            value={this.state.InvoiceDistrict}
                            onChange={e => this.onChange(e)}
                            placeholder={messages['shipping_address.district']}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="mb-3 elementStyle">
                          <label className="form-label bold"><IntlMessages id="shipping_address.province" /></label>
                          {/* <InputAddress style={{ width: "100%" }}
                            address="province"
                            value={this.state.InvoiceProvince}
                            onChange={e => this.onChange(e)}
                            onSelect={e => this.onSelectInvoice(e)}
                          /> */}
                          <input
                            type="text" className="form-control"
                            style={{ width: "100%" }}
                            name="InvoiceProvince"
                            value={this.state.InvoiceProvince}
                            onChange={e => this.onChange(e)}
                            placeholder={messages['shipping_address.province']}
                          />
                        </div>
                      </div>
                      <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                        <div className="mb-3 elementStyle">
                          <label className="form-label bold"><IntlMessages id="shipping_address.postcode" /></label>
                          {/* <InputAddress style={{ width: "100%" }}
                            address="zipcode"
                            value={this.state.InvoiceZipcode}
                            onChange={e => this.onChange(e)}
                            onSelect={e => this.onSelectInvoice(e)}
                          /> */}
                          <input
                            type="number" className="form-control"
                            style={{ width: "100%" }}
                            name="InvoiceZipcode"
                            value={this.state.InvoiceZipcode}
                            onChange={e => this.onChange(e)}
                            placeholder={messages['shipping_address.postcode']}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
                <div className="col-12 col-sm-12  col-md-12 col-lg-12 center">
                  <button type="button" className={this.state.pinkModel} onClick={() => this.cancelNeedTaxInvoice()} data-bs-dismiss="modal" ><IntlMessages id="shipping_address.cancel" /></button>&nbsp;&nbsp;&nbsp;
                  {
                    (this.state.InvoiceTaxIdentificationNumber && this.state.InvoiceTelephone) ?
                      <button type="button" className={this.state.pinkModelFocus} onClick={() => this.setState({ needTaxInvoice: true })} data-bs-dismiss="modal"><IntlMessages id="shipping_address.confirm" /></button>
                      :
                      <button type="button" className={this.state.pinkModelFocus}><IntlMessages id="shipping_address.confirm" /></button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>


    );
  }
}


/* const mapStateToProps = ({ }) => {
    return {};
  };
   */


const mapStateToProps = ({ createUser, exerciseProgram, shippingAddress }) => {
  const { create_user_email } = createUser;
  const { user_program_id } = exerciseProgram;
  const { products_list, delivery_address, create_username, create_lastname, create_telephone, create_addressUser, create_subdistrictUser, create_districtUser, create_provinceUser, create_zipcodeUser } = shippingAddress;
  return { create_user_email, user_program_id, products_list, delivery_address, create_username, create_lastname, create_telephone, create_addressUser, create_subdistrictUser, create_districtUser, create_provinceUser, create_zipcodeUser };
};

const mapActionsToProps = { getUserProgram, shippingAddress, clearSelectDeliveryAddress, selectDeliveryAddress, clearSelectReceiptAddress, selectReceiptAddress };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(injectIntl(Shipping_Address));