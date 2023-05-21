import React, { Component } from 'react';
import rectangle465 from "../../assets/img/rectangle465.png";
import rectangle466 from "../../assets/img/rectangle466.png";
import rectangle467 from "../../assets/img/rectangle467.png";
import rectangle468 from "../../assets/img/rectangle468.png";
import rectangle469 from "../../assets/img/rectangle469.png";
import rectangle470 from "../../assets/img/rectangle470.png";
import rectangle471 from "../../assets/img/rectangle471.png";
import rectangle472 from "../../assets/img/rectangle472.png";
import rectangle473 from "../../assets/img/rectangle473.png";
import { connect } from "react-redux";
import { cancelRecurring } from "../../redux/auth";
import IntlMessages from "../../helpers/IntlMessages";
import { injectIntl } from 'react-intl';






class Cancel_package_new extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason_choose: null,
      no_reason_choose: false,
      program: null,
      product: null,
      start_cancel: /* "price_reason" */"choose_reason"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { statusCancelRecurring, user } = this.props;
    const {reason_choose} = this.state;

    if ((prevProps.statusCancelRecurring !== statusCancelRecurring) && (statusCancelRecurring === 'success')) {
      if (reason_choose == "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว") {
        this.setState({
          start_cancel: "target_shape"
        })
      }else if(reason_choose == "ไม่ค่อยได้ใช้บริการนี้") {
        this.setState({
          start_cancel: "rarely_service"
        })
      }else if(reason_choose == "ไม่พอใจกับโปรแกรมออกกำลังกาย") {
        this.setState({
          start_cancel: "dissatisfied_program"
        })
      }else{
        this.setState({
          start_cancel: "successfully"
        })
      }
    }
    console.log("reason_choose",reason_choose);
    //เพิ่มมาสำหรับ akkewach.yodsomboon@gmail.com ใช้ Demo
    if ((prevProps.statusCancelRecurring !== statusCancelRecurring) && (statusCancelRecurring === 'fail')) {
      if (user && (user.email === "akkewach.yodsomboon@gmail.com")) {

        if (reason_choose == "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว") {
          this.setState({
            start_cancel: "target_shape"
          })
        }else if(reason_choose == "ไม่ค่อยได้ใช้บริการนี้") {
          this.setState({
            start_cancel: "rarely_service"
          })
        }else if(reason_choose == "ไม่พอใจกับโปรแกรมออกกำลังกาย") {
          this.setState({
            start_cancel: "dissatisfied_program"
          })
        }else{
          this.setState({
            start_cancel: "successfully"
          })
        }

      }
    }
  }

  click_reason(event) {
    let name = event.target.value;
    this.setState({
      reason_choose: name
    })
    /* console.log("event",event); */
  }
  comment(event) {
    let name = event.target.name;
    let val = event.target.value;
    console.log("comm", val, name);
  }
  confirm() {
    const { reason_choose } = this.state;
    if (reason_choose === "โปรดเลือกเหตุผล"  ||reason_choose === "Select all that apply" || reason_choose === null) {
      this.setState({
        no_reason_choose: true
      })
    }
    if (reason_choose === "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว" || reason_choose === "Already achieved my dream body") {
      if (this.props.user) {
        this.props.cancelRecurring(this.props.user.user_id);
      }
    }else if (reason_choose === "เหตุผลด้านราคา" || reason_choose === "Pricing.") {
      this.setState({
        start_cancel: "price_reason"
      })
    }else if (reason_choose === "ไม่ค่อยได้ใช้บริการนี้" || reason_choose === "I’m not really using the service.") {
      if (this.props.user) {
        this.props.cancelRecurring(this.props.user.user_id);
      }
    }else if (reason_choose === "ไม่พอใจกับโปรแกรมออกกำลังกาย" || reason_choose === "I’m not happy with the workout program.") {
      if (this.props.user) {
        this.props.cancelRecurring(this.props.user.user_id);

      }
    }else if (reason_choose === "ไม่พอใจกับผลิตภัณฑ์" || reason_choose === "I’m not happy with the product.") {
      this.setState({
        start_cancel: "not_satisfied_product"
      })
    }else if (reason_choose === "ไม่พอใจกับผลลัพธ์ที่ได้" || reason_choose === "I’m not happy with the result.") {
      this.setState({
        start_cancel: "dissatisfied_results"
      })
    }else if (reason_choose === "เจอโปรแกรมที่ดีกว่า" || reason_choose === "I’ve found a better workout program (please specify)") {
      this.setState({
        start_cancel: "better_program"
      })
    }else if (reason_choose === "เจอผลิตภัณฑ์ที่ดีกว่า"  || reason_choose === "I’ve found a better product (please specify)") {
      this.setState({
        start_cancel: "better_product"
      })
    }
    
    
    /*  ["โปรดเลือกเหตุผล", "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว", "เหตุผลด้านราคา",
    "ไม่ค่อยได้ใช้บริการนี้", "ไม่พอใจกับโปรแกรมออกกำลังกาย",
  "ไม่พอใจกับผลิตภัณฑ์", "ไม่พอใจกับผลลัพธ์ที่ได้", "เจอโปรแกรมที่ดีกว่า",
   "เจอผลิตภัณฑ์ที่ดีกว่า"
] */
    /* else {
      if (this.props.user) {
        this.props.cancelRecurring(this.props.user.user_id);
      }
      this.setState({
        start_cancel: "succeed"
      })
    } */
  }

  choose_reason() {
    const { reason_choose, no_reason_choose } = this.state;
   let reason = null;
   const { messages } = this.props.intl;
    if (this.props.locale == 'th') {
       reason =   ["โปรดเลือกเหตุผล", "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว", "เหตุผลด้านราคา", "ไม่ค่อยได้ใช้บริการนี้", "ไม่พอใจกับโปรแกรมออกกำลังกาย",
      "ไม่พอใจกับผลิตภัณฑ์", "ไม่พอใจกับผลลัพธ์ที่ได้", "เจอโปรแกรมที่ดีกว่า", "เจอผลิตภัณฑ์ที่ดีกว่า"];
    }else{
       reason =   ["Select all that apply", "Already achieved my dream body", "Pricing.", "I’m not really using the service.", "I’m not happy with the workout program.",
      "I’m not happy with the product.", "I’m not happy with the result.", "I’ve found a better workout program (please specify)", "I’ve found a better product (please specify)"];
    }
    return (
      <>
        <div className="padding-top4 ">
          <p className="font-size8 bold color-protein text-center"><IntlMessages id="cancel_package_new.unsubscribe" /> <br className="line-hr"/> <IntlMessages id="cancel_package_new.bebeStayFit" /></p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="padding-top2 text-left2 margin-leftRight">
                <p className="font-size6 bold"><IntlMessages id="cancel_package_new.yourPackage" /> </p>
                <p className="font-size3 margin-top-1  between"><IntlMessages id="cancel_package_new.onceTheSubscription" /> <span className="color1 bold font-size5">1,800 <IntlMessages id="programPackage.baht" /> / <IntlMessages id="cancel_package_new.month" /></span></p>
              </div>
              <p><IntlMessages id="cancel_package_new.onceTheSubscription" /></p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="padding-top2 text-left2 margin-leftRight">
                <p className="font-size6 bold"><IntlMessages id="cancel_package_new.pleaseTellUsTheReaso" /></p>
                <select className="form-select" name="select-reason" onChange={(e) => this.click_reason(e)} aria-label="Default select example">
                  {reason && reason.map((index, i) => (
                    <option key={i} value={index}>{index}</option>
                  )
                  )}
                </select>
                {
                  /* console.log("e",reason_choose) */
                  no_reason_choose === true ?
                    <p className="no_reason">กรุณาเลือกเหตุผล</p>
                    : null
                }
                {
                  reason_choose === "เจอโปรแกรมที่ดีกว่า" || reason_choose === "I’ve found a better workout program (please specify)"  ?
                    <div className="mb-3">
                      <br />
                      <textarea class="form-control" id="exampleFormControlTextarea1" onChange={(e) => this.comment(e)} name="program" rows="2" placeholder={messages['cancel_package_new.pleaseSpecify_1']}></textarea>
                    </div>
                    : null
                }
                {
                  reason_choose === "เจอผลิตภัณฑ์ที่ดีกว่า" || reason_choose === "I’ve found a better product (please specify)" ?
                    <div className="mb-3">
                      <br />
                      <textarea class="form-control" id="exampleFormControlTextarea2" onChange={(e) => this.comment(e)} name="product" rows="2" placeholder={messages['cancel_package_new.pleaseSpecify_2']}></textarea>
                    </div>
                    : null
                }
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-6 margin-top-2 ">
          <button className="btn bottom-pink" id="reason" type="button" onClick={(e) => this.confirm()} >
          <IntlMessages id="cancel_package_new.finishCancellation" />
                    </button>
        </div>
      </>
    )
  }

  target_shape() {
    return(
      <>
      <div className="centerx-y">
        <div className="col-12 col-sm-10 col-md-12 col-lg-9">
          <div className="box-reason">
            <div class="">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                  <img src={rectangle471} alt="vector" className="rectangle472" />
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                  <div className="box-reason2">
                    <p className="font-reason"><IntlMessages id="cancel_package_new.yourSubscription" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.alwaysKeep" /></p>
                    <div className="d-grid gap-2  mx-auto margin-top-4   col-10 col-sm-10  col-md-8 col-lg-8">
                      <button className="btn bottom-pink2 bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
                      <IntlMessages id="cancel_package_new.backProfile" />
                                              </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
    )
  }

  


  price_reason() {
    return (
      <>
        <div className="centerx-y">
          <div className="col-12 col-sm-8 col-md-10 col-lg-8">
            <div className="box-reason0">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                  <img src={rectangle473} alt="vector" className="rectangle472 center2" />
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
               {/*  <IntlMessages id="cancel_package_new.yourPackage" />  */}
                  <div className="box-reason3">
                    <p className="font-reason">สมัครต่ออายุบริการวันนี้ <br className="line-hr"/> ลดทันที 5%</p>
                    <p className="font-reason4">โปรโมชั่นพิเศษเฉพาะคุณ! </p>
                      <div className="center reason-top2">
                        <button type="button" className="btn bottom-reasonLeft2 bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" ><IntlMessages id="cancel_package_new.imIn" /></button>
                        <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}> <IntlMessages id="cancel_package_new.cancelSubscription" /></button>
                    </div>
                    <hr className="br2  center2 col-md-10 col-lg-10 "/> 
                    <div className="box-Line">
                    <p className="font-reason">หรือติดต่อเจ้าหน้าที่</p>
                    <p className="font-reason4 pad_lR">Line :<span className="pad_R">@fitto <IntlMessages id="cancel_package_new.with" /></span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /> </p>
                    <p className="font-reason4 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason4 pad_lR"><IntlMessages id="cancel_package_new.phone" /> <span className="pad_R">028216146</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.monFri" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-bodyChallenge">
                  <div className="text-center">
                    <p className="font-reason"><IntlMessages id="cancel_package_new.contactOurStaff" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.get5" />  <br /><IntlMessages id="cancel_package_new.continuingYour" /></p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto <IntlMessages id="cancel_package_new.with" /></span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR"><IntlMessages id="cancel_package_new.phone" /> <span className="pad_R">028216146</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.monFri" /></p>
                  </div>
                </div>
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                  <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                  <IntlMessages id="cancel_package_new.close" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  rarely_service() {
    return(
      <>
      <div className="centerx-y">
        <div className="col-12 col-sm-10 col-md-12 col-lg-9">
          <div className="box-reason">
            <div class="">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                  <img src={rectangle470} alt="vector" className="rectangle472" />
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                  <div className="box-reason2">
                    <p className="font-reason"> <IntlMessages id="cancel_package_new.yourSubscription" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.ultimate4day" /></p>
                    <div className="d-grid gap-2  mx-auto  margin-top-4  col-10 col-sm-10  col-md-8 col-lg-8">
                      <button className="btn bottom-pink2 bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
                      <IntlMessages id="cancel_package_new.backProfile" />
                                              </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
    
  dissatisfied_program() {
    return (
      <>
        <div className="centerx-y">
          <div className="col-12 col-sm-10 col-md-12 col-lg-9">
            <div className="box-reason">
              <div class="">
                <div class="row justify-content-md-center">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                    <img src={rectangle472} alt="vector" className="rectangle472" />
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                    <div className="box-reason2">
                      <p className="font-reason"> <IntlMessages id="cancel_package_new.yourSubscription" /></p>
                      <p className="font-reason2">หุ่นในฝันไม่ไกลเกินเอื้อม คุณทำได้</p>
                      <p className="font-reason3"><IntlMessages id="cancel_package_new.ourWorkoutProgram" />)</p>
                      <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10">
                        <button className="btn bottom-pink2 bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
                        <IntlMessages id="cancel_package_new.backProfile" />
                                                </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    not_satisfied_product () {
      return(
        <>
        <div className="centerx-y">
          <div className="col-12 col-sm-8 col-md-10 col-lg-8">
            <div className="box-reason">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                  <img src={rectangle469} alt="vector" className="rectangle472 center2" />
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="box-reason3">
                    <p className="font-reason"><IntlMessages id="cancel_package_new.contactOurStaffTo" /><br className="br" />
                    <IntlMessages id="cancel_package_new.yourExercise" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.likeOurProduct" /> </p>
                        <br/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="center ">
                        <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" ><IntlMessages id="cancel_package_new.contactUs" /></button>
                        <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}><IntlMessages id="cancel_package_new.cancelSubscription" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-bodyChallenge">
                  <div className="text-center">
                    <p className="font-reason"><IntlMessages id="cancel_package_new.contactOurStaff" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.get5" />  <br /><IntlMessages id="cancel_package_new.continuingYour" /></p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto <IntlMessages id="cancel_package_new.with" /></span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR"><IntlMessages id="cancel_package_new.phone" /> <span className="pad_R">028216146</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.monFri" /></p>
                    
                  </div>
                </div>
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                  <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                  <IntlMessages id="cancel_package_new.close" />
                                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    }
    
    dissatisfied_results() {
      return(
        <>
        <div className="centerx-y">
          <div className="col-12 col-sm-8 col-md-10 col-lg-8">
            <div className="box-reason">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                  <img src={rectangle468} alt="vector" className="rectangle472 center2" />
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="box-reason3">
                    <p className="font-reason"><IntlMessages id="cancel_package_new.onsultOurSpecialists" /><br className="br" />
                    <IntlMessages id="cancel_package_new.customMake" /></p>
                    <p className="font-reason2"> <IntlMessages id="cancel_package_new.youAreNotSeeing" /></p>
                        <br/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="center ">
                        <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" > <IntlMessages id="cancel_package_new.contactUs" /></button>
                        <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}> <IntlMessages id="cancel_package_new.cancelSubscription" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-bodyChallenge">
                  <div className="text-center">
                    <p className="font-reason"><IntlMessages id="cancel_package_new.contactOurStaff" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.get5" />  <br /><IntlMessages id="cancel_package_new.continuingYour" /></p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto <IntlMessages id="cancel_package_new.with" /></span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR"><IntlMessages id="cancel_package_new.phone" /> <span className="pad_R">028216146</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.monFri" /></p>
                  </div>
                </div>
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                  <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                  <IntlMessages id="cancel_package_new.close" />
                                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    }

    better_program() {
      return(
        <>
        <div className="centerx-y">
          <div className="col-12 col-sm-8 col-md-10 col-lg-8">
            <div className="box-reason">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                  <img src={rectangle467} alt="vector" className="rectangle472 center2" />
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="box-reason3">
                    <p className="font-reason"><IntlMessages id="cancel_package_new.onsultOurSpecialists" /><br className="br" />
                    <IntlMessages id="cancel_package_new.customMake" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.youAreNotSeeingWorking" /></p>
                        <br/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="center ">
                        <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" ><IntlMessages id="cancel_package_new.contactUs" /></button>
                        <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}><IntlMessages id="cancel_package_new.cancelSubscription" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-bodyChallenge">
                  <div className="text-center">
                  <p className="font-reason"><IntlMessages id="cancel_package_new.contactOurStaff" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.get5" />  <br /><IntlMessages id="cancel_package_new.continuingYour" /></p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto <IntlMessages id="cancel_package_new.with" /></span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR"><IntlMessages id="cancel_package_new.phone" /> <span className="pad_R">028216146</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.monFri" /></p>
                  </div>
                </div>
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                  <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                  <IntlMessages id="cancel_package_new.close" />
                                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    }



    better_product() {
      return(
        <>
        <div className="centerx-y">
        <div className="col-12 col-sm-8 col-md-10 col-lg-8">
          <div className="box-reason">
            <div class="row justify-content-md-center">
              <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                <img src={rectangle466} alt="vector" className="rectangle472 center2" />
              </div>
              <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                <div className="box-reason3">
                  <p className="font-reason"><IntlMessages id="cancel_package_new.contactStaffToCustomise" /><br className="br" />
                  <IntlMessages id="cancel_package_new.exerciseProgram" /></p>
                  <p className="font-reason2"><IntlMessages id="cancel_package_new.ifYouLikeOurProduct" /></p>
                      <br/>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="center ">
                      <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" ><IntlMessages id="cancel_package_new.contactUs" /></button>
                      <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}><IntlMessages id="cancel_package_new.cancelSubscription" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-bodyChallenge">
                <div className="text-center">
                <p className="font-reason"><IntlMessages id="cancel_package_new.contactOurStaff" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.get5" />  <br /><IntlMessages id="cancel_package_new.continuingYour" /></p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto <IntlMessages id="cancel_package_new.with" /></span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.midnight" /></p>
                    <p className="font-reason2 pad_lR"><IntlMessages id="cancel_package_new.phone" /> <span className="pad_R">028216146</span></p>
                    <p className="time-open"><IntlMessages id="cancel_package_new.monFri" /></p>
                </div>
              </div>
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                <IntlMessages id="cancel_package_new.close" />
                                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      )
    }

    successfully() {
      return(
        <>
        <div className="centerx-y">
        <div className="col-12 col-sm-10 col-md-12 col-lg-9">
          <div className="box-reason">
            <div class="">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                  <img src={rectangle465} alt="vector" className="rectangle472" />
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                  <div className="box-reason2">
                    <p className="font-reason"><IntlMessages id="cancel_package_new.yourSubscription" /></p>
                    <p className="font-reason2"><IntlMessages id="cancel_package_new.thankYouForTrusting" /></p>
                    <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10">
                      <button className="btn bottom-pink2 bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
                      <IntlMessages id="cancel_package_new.backProfile" />
                                              </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      )
  }

  render() {

    const { start_cancel } = this.state;
    return (
      <>
        {
          start_cancel === "choose_reason" ?
            this.choose_reason()
            :
            start_cancel === "dissatisfied_program" ?
              this.dissatisfied_program()
              :
              start_cancel === "price_reason" ?
                this.price_reason()
                :
                start_cancel === "target_shape" ?
                  this.target_shape() 
                  : 
                  start_cancel === "rarely_service" ?
                    this.rarely_service() 
                    : 
                    start_cancel === "not_satisfied_product" ?
                      this.not_satisfied_product() 
                      : 
                      start_cancel === "dissatisfied_results" ?
                        this.dissatisfied_results() 
                        : 
                        start_cancel === "better_program" ?
                          this.better_program() 
                          : 
                          start_cancel === "better_product" ?
                            this.better_product() 
                            : 
                            start_cancel === "successfully" ?
                              this.successfully() 
                              : this.choose_reason()

        }
      </>
    )
  }
}

const mapStateToProps = ({ get, authUser,settings }) => {
  const { register_log } = get;
  const { user, statusCancelRecurring } = authUser;
  let locale;
  if (settings) {
    locale = settings.locale;
  } else {
    locale = "th";
  }
  return { user, register_log, statusCancelRecurring ,locale};
};



const mapActionsToProps = { cancelRecurring };


export default connect(
  mapStateToProps,
  mapActionsToProps
)(injectIntl(Cancel_package_new));