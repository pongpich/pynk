import React, { Component } from "react";

import ellipse17_2 from "../../assets/img/ellipse17_2.png";

import user_circle from "../../assets/img/user_circle.svg";
import { connect } from "react-redux";
import { getSubscriptionProducts,getCheckDisplayName } from "../../redux/get";
import { putSubscriptionAddress, clearSubscriptionAddress } from "../../redux/updateAddress";
import { updateDisplayName } from "../../redux/update";
import InputAddress from 'react-thailand-address-autocomplete';
import IntlMessages from "../../helpers/IntlMessages";

class EditProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      phone: null,
      address: null,
      subdistrict: null,
      district: null,
      province: null,
      zipcode: null,
      displayname: null,
      displayname2: null,
      displayname3: null,
      validation_displayname: false,
      validation_displayname2: false,
      displayname_length: false,
      checkDisplayName:null,
      statusSubmit: null
    };
  }


  componentDidMount() {
    const address = JSON.parse(this.props.delivery_address);
    this.setAddress(address);

    this.props.clearSubscriptionAddress();

    const memberInfo = this.props.member_info;
    this.setState({
      displayname: memberInfo.display_name,
      displayname3: memberInfo.display_name
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { status_update_address, statusUpdateDisplayName ,statusDisplayName} = this.props;
    if ((prevProps.statusUpdateDisplayName !== statusUpdateDisplayName) && (statusUpdateDisplayName === "success")) {
      this.props.history.push('/profile');
    }
    if ((prevProps.statusUpdateDisplayName !== statusUpdateDisplayName) && (statusUpdateDisplayName === "fail")) {
      //ให้ฟ้องว่ามี DisplayName นี้อยู่แล้วในระบบ
      this.setState({
        validation_displayname2: true
      })
    }
    console.log("statusDisplayName",statusDisplayName);
    if (prevProps.statusDisplayName !== statusDisplayName) {
      if (statusDisplayName === "success") {
        this.setState({
       /*    validation_displayname: false, */
          checkDisplayName: "success",
        }) 
        console.log("statusDisplayName",statusDisplayName);
      }else if (statusDisplayName === "fail") {

        if (this.state.displayname === this.state.displayname3) {
          this.setState({
            displayname: this.state.displayname,
          }) 
        }else{
          this.setState({
            displayname: null,
            checkDisplayName: "fail",
          }) 
        }
        console.log("statusDisplayName",statusDisplayName);
      }
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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

  setAddress(e) {
    this.setState({
      firstname: e.firstname,
      lastname: e.lastname,
      phone: e.phone,
      address: e.address,
      subdistrict: e.subdistrict,
      district: e.district,
      province: e.province,
      zipcode: e.zipcode,
    })
  }

  onSubmit() {
    const user_id = this.props.user.user_id;
    const { firstname, lastname, phone, address, subdistrict, district, province, zipcode, displayname } = this.state;
    const data = {
      firstname,
      lastname,
      phone,
      address,
      subdistrict,
      district,
      province,
      zipcode
    }
    if (displayname) {
      this.props.updateDisplayName(user_id, displayname);
    }else {
      this.setState({
        statusSubmit: "fail"
      })
    }
    /* this.props.updateDisplayName(user_id, displayname); */
    this.props.putSubscriptionAddress(user_id, data);
   
  }

  onCheckDisplayName = (e) => {
    const name = e.target.name;
    if (name === "displayname") {
      const elem = e.target.value;

      this.setState({
        [e.target.name]: e.target.value,
      })

      if (/^([0-9a-zA-Zก-ฮัะาเแอำไใโอิอีอึอือุอูอ่อ้อ๊อ๋อ็อ์])+$/i.test(elem)) {
        this.props.getCheckDisplayName(elem);
        this.setState({
          validation_displayname: false,
          displayname2: elem
        })
      } else {
        this.setState({
          validation_displayname: true,
          displayname: null,
          displayname2: null
        })
      }
    }
  }

  render() {
    const { statusSubmit,checkDisplayName, validation_displayname, validation_displayname2, displayname,displayname2, firstname, lastname, phone, address, subdistrict, district, province, zipcode } = this.state;
    console.log("AAฟฟ", displayname);
    return (
      <>
        <div className="padding-top4 center">
          <p className="font-size8-2 bold color-protein"> <IntlMessages id="profile.editInformation" /></p>
        </div>
        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="padding-top img-ellipse17">
                <img src={ellipse17_2} alt="vector" />
              </div>

              <div className="padding-top2">
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-5 col-lg-5">
                  <button className="btn btn-outline-pink" type="button" >
                    เลือกรูป
                                    </button>
                </div>
              </div>
              <div className=" col-10 col-sm-10  col-md-5 col-lg-5 center2 padding-top2">
                <p className="font-size5  between">ขนาดไฟล์ <span className="bold">สูงสุด 1 MB</span></p>
                <p className="font-size5  between margin-top-1">ไฟล์ที่รองรับ <span className="bold">.JPEG, .PNG</span></p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="box-proteinAddress padding-top">
                <p className="font-size6 bold color-protein "> ข้อมูลส่วนตัว</p>
                <div>
                  <label className="form-label bold font-size4"> <IntlMessages id="register.displayname" /></label>
                  <input type="text" name="displayname" value={displayname} className="form-control" id="exampleFormControlInput1" onChange={e => this.onCheckDisplayName(e)} placeholder="ชื่อที่ใช้แสดงในระบบ" />
                  {
                    (validation_displayname) ?
                      <p style={{ color: "red" }}>อนุญาตให้ใส่ 0-9, A-Z, ก-ฮ เท่านั้น</p>
                      :
                      null
                  }
                  {
                     checkDisplayName === "fail" ?
                     <p style={{ color: "red" }}>มีผู้ใช้ชื่อ {displayname2} อยู่แล้วในระบบ</p>
                     : null
                  }
                  {
                    (displayname && displayname.length < 4) ?
                      <p style={{ color: "red" }}>กรุณากรอกตัวอักษร 4 ตัว ขึ้นไป</p>
                      :
                      null
                  }
                </div>
                {/*  <div className="padding-top2">
                  <label className="form-label bold font-size4">วัน/เดือน/ปี เกิด</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="5 มกราคม 2536" />
                </div> */}
                {/* <div className="padding-top2">
                  <p className="font-weight">เพศ</p>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sex" id="inlineRadio1" value="ชาย" />
                    <label className="form-check-label"> ชาย </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sex" id="inlineRadio2" value="หญิง" />
                    <label className="form-check-label" > หญิง  </label>
                  </div>
                </div> */}
                <div className="padding-top2">
                  <label className="form-label bold font-size4">อีเมล</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" value={this.props.user.email} disabled />
                </div>
                <div className="padding-top2">
                  <label className="form-label bold font-size4 between">เบอร์โทรศัพท์ {/* <span className="font-size4 normal"> ใช้ในการยืนยันตัวตนเข้าบัญชี</span> */}</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" value={phone}/* placeholder="******9595" */ disabled />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="box-proteinAddress padding-top">
                <p className="font-size6 bold color-protein "> <IntlMessages id="shipping_address.shippingAddress" /></p>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.name" /></label>
                    <input type="text" className="form-control" name="firstname" value={firstname} onChange={e => this.onChange(e)} id="exampleFormControlInput1" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.surname" /></label>
                    <input type="text" className="form-control" name="lastname" value={lastname} onChange={e => this.onChange(e)} id="exampleFormControlInput1" />
                  </div>
                </div>
                <div className="padding-top2">
                  <label className="form-label bold font-size4"><IntlMessages id="register.phoneNumber" /></label>
                  <input type="text" className="form-control" name="phone" value={phone} onChange={e => this.onChange(e)} id="exampleFormControlInput1" />
                </div>
                <div className="padding-top2">
                  <label className="form-label bold font-size4"><IntlMessages id="shipping_address.address" /></label>
                  <input type="text" className="form-control" name="address" value={address} onChange={e => this.onChange(e)} id="exampleFormControlInput1" />
                </div>
                <div className="elementStyle">
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.subdistrict" /></label>
                    <InputAddress style={{ width: "100%" }}
                      address="subdistrict"
                      value={subdistrict}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                    />
                  </div>
                  <div className="col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.district" /></label>
                    <InputAddress style={{ width: "100%" }}
                      address="district"
                      value={district}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                    />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.province" /></label>
                    <InputAddress style={{ width: "100%" }}
                      address="province"
                      value={province}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                    />
                  </div>
                  <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="shipping_address.postcode" /></label>
                    <InputAddress style={{ width: "100%" }}
                      address="subdistrict"
                      value={this.state.zipcode}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                    />
                  </div>
                </div>
              </div>
              {
             checkDisplayName === "fail" ?
             <p style={{ color: "red" }}>มีผู้ใช้ชื่อ {displayname2} อยู่แล้วในระบบ</p>
             : null
            }
            {
            (statusSubmit === "fail") &&
            <h6 style={{ color: "red" }}><IntlMessages id="navbarHome.validationInformation" /></h6>
            }
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12  center margin-top-2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="padding-top2 padding-left3 distance margin-bottom1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                <label className="form-check-label">
                  ขอใบเสร็จรับเงิน/ใบกำกับภาษี
                                </label>
              </div>
            </div>
          </div>
        </div> */}
          
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          <div className="bottomEditProfile">
            <button type="button" className="btn bottom-outlinePinkLeft " onClick={() => this.props.history.push('/profile')}><IntlMessages id="shipping_address.cancel" /></button>
            <button type="button" className="btn bottom-outlinePinkRight bottomEditProfileLeft " onClick={() => this.onSubmit()}><IntlMessages id="profile.save" /></button>
          </div>
          {/*   <div className="">
            <div className="row">
              <button type="button" className="btn bottom-outlinePink ">ยกเลิก</button>
            </div>
            <div className="">
              <button type="button" className="btn bottom-pink">บันทึก</button>
            </div>
          </div> */}
        </div>
      </>

    );
  }
}



const mapStateToProps = ({ get, authUser, updateAddress, update }) => {
  const { delivery_address,member_info,statusDisplayName } = get;
  const { user } = authUser;
  const { status_update_address } = updateAddress;
  const { statusUpdateDisplayName } = update;
  return { delivery_address, user, status_update_address, statusUpdateDisplayName,member_info,statusDisplayName };
};

const mapActionsToProps = { getSubscriptionProducts, putSubscriptionAddress, clearSubscriptionAddress, updateDisplayName ,getCheckDisplayName};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EditProfile);

