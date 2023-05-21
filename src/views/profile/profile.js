import React, { Component } from "react";
import ellipse17 from "../../assets/img/ellipse17_2.png";
import user_circle from "../../assets/img/user_circle.svg";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getSubscriptionProducts, getRegister_log,getMemberInfo } from "../../redux/get";
import IntlMessages from "../../helpers/IntlMessages";

class Profile extends React.Component {

  componentDidMount() {
    const { user } = this.props;
    this.props.getSubscriptionProducts(user.user_id);
    this.props.getRegister_log(user.user_id);
    this.props.getMemberInfo(user.user_id);
  }

  render() {
    const address = JSON.parse(this.props.delivery_address);
    const memberInfo = this.props.member_info;
    const program = this.props.register_log;
    /*   const program_id =  this.props.register_log.program_id;
      const round =  this.props.register_log.round;
      const expire_date =  new Date(this.props.register_log.expire_date);
      const date = expire_date.toLocaleString("th-TH",  {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }); */

    return (
      <>
        <div className="padding-top4 center">
          <p className="font-size8-2 bold color-protein"> <IntlMessages id="navbarHome.profile" /></p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              {/*          <div className="padding-top img-ellipse17">
                <img src={ellipse17} alt="vector" />
              </div> */}
              <div className="padding-top2">
                <p className="section-size">{memberInfo && memberInfo.display_name}</p>
                <p className="section-size">{address && address.firstname} {address && address.lastname}</p>
                <p className="margin-top-1 bold">  {this.props.user.email}</p>
                <p className="margin-top-1 section-size">{address && address.address} {address && address.subdistrict} {address && address.district} </p>
                <p className="margin-top-1 section-size">{address && address.province} {address && address.zipcode}</p>

              </div>
              <p className="border-bottom margin-leftRight"></p>
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2">
                {/*  <button className="btn bottom-pink" type="button" >
                                    แก้ไขข้อมูล
                                </button> */}
                <button className="btn bottom-outlinePink3" type="button" onClick={() => this.props.history.push("/edit_profile")}><IntlMessages id="profile.editInformation" /></button>
                <button className="btn bottom-outlinePink margin-top-3 " type="button" onClick={() => this.props.history.push("/reset_password")} >
                  <IntlMessages id="profile.changePassword" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {


          program && program.map((item, i) => {
            const il = program.length - 1;
            if (il === i) {
              const splitCA = item.created_at.split("-"); //นำ created_at มา split
              const billingCutOffDate = (Number(splitCA[1]) !== 12) ? //เช็คว่าไม่ใช่เดือนที่ 12
                new Date(Number(splitCA[0]), Number(splitCA[1]), 1) //กำหนดวันตัดรอบบิล เป็นวันที่1 ของเดือนถัดไป โดยดูจาก created_at
                :
                new Date(Number(splitCA[0]) + 1, 0, 1); //กรณีเป็นเดือนที่12 วันตัดรอบบิลถัดไปต้อง​ +1ปี และเดือนกำหนดเป็นเดือนที่1(index: 0)
              const date = billingCutOffDate.toLocaleString("th-TH", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
              const name = (
                <>
                  {
                    (item.round > 1) ? /* && (item.payment_type === 'credit_card') ? */ //เช็คว่า round ล่าสุดมากกว่า 1 และ payment_type เป็นบัตรเครดิต
                      <>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                          <div className="col-12 col-sm-8 col-md-6 col-lg-4 center2">
                            <div className="box-protein margin-bottom1 padding-top2">
                              <div className="padding-top">
                                <h4 className="color1 bold">BEBEStayFit</h4>
                              </div>
                              <div className="padding-top2 left-text">
                                <p className="font-size6 text-left2 bold between"><IntlMessages id="payment.yourPackage" />  <span className="pay-user"><IntlMessages id="payment.pay" /></span></p>
                                <p className="font-size0 margin-top-1 bold between"><IntlMessages id="payment.applyProgram" /> <span className="color1 bold font-size0">1,800 <IntlMessages id="programPackage.baht" /> / <IntlMessages id="programPackage.months" /></span></p>
                                {
                                  (item.payment_type === 'credit_card') && (item.status_recurring !== 'canceled')?
                                    <p className=" font-size4 margin-top-1 right color3"><IntlMessages id="profile.cut-offdate" />  {date}</p>
                                    :
                                    null
                                }
                              </div>
                              <p className="border-bottom margin-leftRight padding-top2"></p>
                              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                                <button className="btn bottom-outlinePink3 " type="button" onClick={() => this.props.history.push('/billing_history')}>
                                  <IntlMessages id="profile.billinghistory" />
                                </button>
                     {/*             <button className="btn bottom-outlineGrey margin-top-3" type="button" onClick={() => this.props.history.push('/cancel_package_new')}>
                                  ยกเลิกแพ็กเกจ
                                </button> */}
                                {
                                  (item.payment_type === 'credit_card') && (item.status_recurring !== 'canceled')?
                                    <button className="btn bottom-outlineGrey margin-top-3" type="button" onClick={() => this.props.history.push('/cancel_package_new')}>
                                      ยกเลิกแพ็กเกจ
                                    </button>
                                    :
                                    null
                                }

                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                      :
                      null
                  }
                </>
              )
              return name;
            }


          })

          /*   round > 1 ?
              <>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                    <div className="box-protein margin-bottom1 padding-top2">
                      <div className="padding-top">
                        <h4 className="color1 bold">BEBEStayFit</h4>
                      </div>
                      <div className="padding-top2  margin-leftRight">
                        <p className="font-size6 text-left2 bold between">แพ็กเกจของคุณ  <span className="pay-user">ชำระเงิน</span></p>
                        {
                           program_id === "subscription_stay_fit_01" ?
                           <p className="font-size0 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size0">1,800 บาท / เดือน</span></p>
                           :
                           <p className="font-size0 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size0">3,990 บาท</span></p>
                        }
                        <p className=" font-size4 margin-top-1 right color3">วันตัดรอบบิล  {date}</p>
  
                      </div>
                      <p className="border-bottom margin-leftRight padding-top2"></p>
                      <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                        <button className="btn bottom-pink " type="button" onClick={() => this.props.history.push('/billing_history')}>
                          ประวัติการเรียกเก็บ
                        </button>
                      <button className="btn bottom-outlineGrey margin-top-3" type="button" >
                          ยกเลิกแพ็กเกจ
                        </button> 
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :
              null */
        }


      </>

    );
  }
}

const mapStateToProps = ({ get, authUser }) => {
  const { delivery_address, register_log ,member_info} = get;
  const { user } = authUser;
  return { delivery_address, user, register_log,member_info };
};

const mapActionsToProps = { getSubscriptionProducts, getRegister_log ,getMemberInfo};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Profile);

