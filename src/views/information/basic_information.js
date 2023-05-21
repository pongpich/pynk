import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { basicInFormation } from "../../redux/basicInFormation";
import { updateProfile } from "../../redux/auth";
import { getCheckDisplayName } from "../../redux/get";
import IntlMessages from "../../helpers/IntlMessages";
import { injectIntl } from 'react-intl';
class Basic_Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      typeHei_Wig: "กก_ซม",
      typeHeight: "เซนติเมตร",
      typeWeight: "กิโลกรัม",
      basicSex: null,
      basicAge: null,
      basicHeight: null,
      basicWeight: null,
      practiceDifficultExercises: null,
      injury: null,
      arePregnant: null,
      lb_ft: "ปอนด์/ฟ.",
      kg_cm: "กก/ซม",
      statusSubmit: "default",
      displayname: null,
      displayname2: null,
      validation_displayname: false,
      displayname_length: false,
      checkDisplayName: false
    }
  }

  componentDidMount() {
    const { user, locale } = this.props;

    if (user === null) {
      this.props.history.push('/welcome_new_nember');
    }

    if (user && user.other_attributes) {
      this.props.history.push('/videoList');
    }
    this.kg_po(locale)
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { user, locale, statusDisplayName } = this.props;
    if (user && (prevProps.user.other_attributes !== user.other_attributes)) {
      if (user && user.other_attributes) {
        this.props.history.push('/videoList');
      }
    }
    if (prevProps.locale !== locale) {
      this.kg_po(locale)
    }
    if (prevProps.statusDisplayName !== statusDisplayName) {
      if (statusDisplayName === "success") {
        this.setState({
          /*    validation_displayname: false, */
          checkDisplayName: "success",
        })
        console.log("statusDisplayName", statusDisplayName);
      } else if (statusDisplayName === "fail") {
        this.setState({
          displayname: null,
          checkDisplayName: "fail",
        })
        console.log("statusDisplayName", statusDisplayName);
      }
    }

  }




  basicInFormation(basicSex, basicAge, typeHei_Wig, basicHeight, basicWeight, practiceDifficultExercises, injury, arePregnant, displayname) {
    this.setState({
      statusSubmit: "default"
    })
    if (basicSex && basicAge && typeHei_Wig && basicHeight && basicWeight && practiceDifficultExercises && displayname) {

      this.props.basicInFormation(
        basicSex, basicAge, typeHei_Wig, basicHeight, basicWeight, practiceDifficultExercises, injury, arePregnant
      );

      const other_attributes = {
        sex: this.state.basicSex,
        age: Number(this.state.basicAge),
        weight: Number(this.state.basicWeight),
        unitWeight: this.state.typeWeight,
        height: Number(this.state.basicHeight),
        unitHeight: this.state.typeHeight,
        doDifficultPosture: (practiceDifficultExercises === "sure") ? 'yes' : 'no'
      }
      const display_name = this.state.displayname;
      this.props.updateProfile(
        this.props.user.user_id,
        other_attributes,
        display_name,
        this.props.user.start_date,
        this.props.user.program_id,
        (practiceDifficultExercises === "sure") ? false : true // false = ไม่ใช่ is_beginner, true = เป็น is_beginner
      );
    } else {
      console.log("11");
      this.setState({
        statusSubmit: "fail",
        displayname_length: true
      })
    }
  }

  checkBoxes = (e) => {
    const { checked } = e.target
    const { locale } = this.props;
    if (locale === "th") {
      if (checked === false) {
        var typeHei_Wig = "กก_ซม"
        var kg_cm = "กก/ซม"
        var lb_ft = "ปอนด์/ฟ."
        var typeHeight = "เซนติเมตร"
        var typeWeight = "กิโลกรัม"
      } else {
        var typeHei_Wig = "ปอนด์_ฟุต"
        var lb_ft = "ปอนด์/ฟ."
        var kg_cm = "กก/ซม"
        var typeHeight = "ฟุต"
        var typeWeight = "ปอนด์"
      }
    } else {
      if (checked === false) {
        var typeHeight = "cm"
        var lb_ft = "lb/ft"
        var kg_cm = "kg/cm"
        var typeWeight = "Kilogram"
      } else {
        var typeHei_Wig = "lb_ft"
        var lb_ft = "lb/ft"
        var kg_cm = "kg/cm"
        var typeHeight = "foot"
        var typeWeight = "Pound"
      }
    }
    this.setState({
      checked: checked,
      typeHei_Wig: typeHei_Wig,
      typeHeight: typeHeight,
      typeWeight: typeWeight,
      lb_ft: lb_ft,
      kg_cm: kg_cm,
    })


  }

  kg_po(e) {
    const { checked } = this.state;
    if (e === "th") {
      if (checked === false) {
        var typeHei_Wig = "กก_ซม"
        var lb_ft = "ปอนด์/ฟ."
        var kg_cm = "กก/ซม"
        var typeHeight = "เซนติเมตร"
        var typeWeight = "กิโลกรัม"
      } else {
        var typeHei_Wig = "ปอนด์_ฟุต"
        var lb_ft = "ปอนด์/ฟ."
        var kg_cm = "กก/ซม"
        var typeHeight = "ฟุต"
        var typeWeight = "ปอนด์"
      }
    } else {
      if (checked === false) {
        var typeHei_Wig = "cm"
        var lb_ft = "lb/ft"
        var kg_cm = "kg/cm"
        var typeWeight = "Kilogram"
      } else {
        var typeHei_Wig = "lb/ft"
        var lb_ft = "lb/ft"
        var kg_cm = "kg/cm"
        var typeHeight = "foot"
        var typeWeight = "Pound"
      }
    }
    this.setState({
      checked: checked,
      typeHei_Wig: typeHei_Wig,
      typeHeight: typeHeight,
      typeWeight: typeWeight,
      lb_ft: lb_ft,
      kg_cm: kg_cm,
    })
  }

  onCheckBasix = (e) => {
    /*     this.setState({
          validation_displayname: false,
          displayname_length: false,
          checkDisplayName: false
        }) */
    const name = e.target.name;
    if (name === "displayname") {
      const elem = e.target.value;
      if (elem.length >= 4) {

        this.setState({
          displayname_length: false,
        })
        const elem = e.target.value;

        if (/^([0-9a-zA-Zก-ฮัะาเแอำไใโอิอีอึอือุอูอ่อ้อ๊อ๋อ็อ์])+$/i.test(elem)) {
          this.props.getCheckDisplayName(elem);
          this.setState({
            validation_displayname: false,
            displayname: elem,
            displayname2: elem,
          })
        } else {
          this.setState({
            validation_displayname: true,
            displayname: null,
            displayname2: null,
          })
        }

      } else {
        this.setState({
          displayname_length: true,
        })
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }



  }




  render() {

    const { messages } = this.props.intl;
    const { checkDisplayName, displayname, displayname2, validation_displayname, displayname_length, basicSex, basicAge, typeHei_Wig, lb_ft, kg_cm, basicHeight, basicWeight, practiceDifficultExercises, injury, arePregnant, statusSubmit } = this.state;

    console.log("displayname", displayname);
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  App-headerBackground center2 padding-top2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
            <div className="box-protein margin-bottom1">
              <div className="padding-top">
                <p className="font-size6 bold color-protein"> <IntlMessages id="basic_information.fillinbasic" /></p>
                <p><IntlMessages id="basic_information.fillingin" /><br /><IntlMessages id="basic_information.anexercise" /></p>
                <div className="box-proteinAddress padding-top">
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="basic_information.displayname" /></label>
                    <input type="text" className="form-control right2" id="exampleFormControlInput1" name="displayname" onChange={e => this.onCheckBasix(e)} /* placeholder={messages['basic_information.year']} */ />
                    {
                      validation_displayname === true ?
                        <p style={{ color: "red" }}>อนุญาต ให้ใส่ 0-9A-Zก-ฮ เท่านั้น</p>
                        : null
                    }
                    {
                      displayname_length === true ?
                        <p style={{ color: "red" }}>กรุณาตัวอักษร มากกว่า 4 อักษร</p>
                        : null
                    }
                    {
                      checkDisplayName === "fail" ?
                        <p style={{ color: "red" }}>มีผู้ใช้ชื่อ {displayname2} อยู่แล้วในระบบ</p>
                        : null
                    }
                  </div>
                  <div className="padding-top2">
                    <p className="form-label bold font-size4"><IntlMessages id="basic_information.gender" /></p>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="basicSex" onChange={e => this.onCheckBasix(e)} id="inlineRadio1" value="male" />
                      <label className="form-check-label"><IntlMessages id="basic_information.male" /></label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="basicSex" onChange={e => this.onCheckBasix(e)} id="inlineRadio2" value="female" />
                      <label className="form-check-label"><IntlMessages id="basic_information.female" /></label>
                    </div>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="basic_information.age" /></label>
                    <input type="number" className="form-control right2" id="exampleFormControlInput1" name="basicAge" onChange={e => this.onCheckBasix(e)} placeholder={messages['basic_information.year']} />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4 between color1"><IntlMessages id="basic_information.selectunit" />
                      <span className="font-size7 light section">
                        <div className="onoffswitch">
                          <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox " id="myonoffswitch" onChange={e => this.checkBoxes(e)} defaultChecked={this.state.checked} />
                          <label className="onoffswitch-label" htmlFor="myonoffswitch">
                            <span className="onoffswitch-inner">
                              <div className="between">
                                <p className="text-float">{kg_cm} <span className="text-float1">{lb_ft}</span></p>
                              </div>
                            </span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4 between"><IntlMessages id="basic_information.weight" /></label>
                    <input type="email" className="form-control right2" id="exampleFormControlInput1" name="basicWeight" onChange={e => this.onCheckBasix(e)} placeholder={this.state.typeWeight} />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4"><IntlMessages id="basic_information.height" /> </label>
                    <input type="email" className="form-control right2" id="exampleFormControlInput1" name="basicHeight" onChange={e => this.onCheckBasix(e)} placeholder={this.state.typeHeight} />
                  </div>
                  <div className="padding-top2">
                    <p className="bold font-size4 "><IntlMessages id="basic_information.youaresure" /></p>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="practiceDifficultExercises" id="inlineRadio1" onChange={e => this.onCheckBasix(e)} value="sure" />
                      <label className="form-check-label"><IntlMessages id="basic_information.sure" /></label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="practiceDifficultExercises" id="inlineRadio2" onChange={e => this.onCheckBasix(e)} value="unsure" />
                      <label className="form-check-label"><IntlMessages id="basic_information.unsure" /></label>
                    </div>
                  </div>
                  {/* <div className="padding-top2">
                                        <p className="bold font-size4 ">คุณมีอาการบาดเจ็บที่ข้อต่อหรือกระดูกสันหลัง หรือไม่ </p>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="injury" id="inlineRadio1"  onChange={e => this.onCheckBasix(e)} value="ใช่" />
                                            <label className="form-check-label">ใช่</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="injury" id="inlineRadio2"  onChange={e => this.onCheckBasix(e)} value="ไม่ใช่" />
                                            <label className="form-check-label">ไม่ใช่</label>
                                        </div>
                                    </div> */}
                  {/* <div className="padding-top2">
                                        <p className="bold font-size4 ">กำลังตั้งครรภ์ หรือให้นมบุตรอยู่</p>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="arePregnant" id="inlineRadio1"  onChange={e => this.onCheckBasix(e)} value="ใช่" />
                                            <label className="form-check-label">ใช่</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="arePregnant" id="inlineRadio2"  onChange={e => this.onCheckBasix(e)} value="ไม่ใช่" />
                                            <label className="form-check-label">ไม่ใช่</label>
                                        </div>
                                    </div> */}
                </div>
              </div>
              {
                (statusSubmit === "fail") &&
                <h6 style={{ color: "red" }}><IntlMessages id="navbarHome.validationInformation" /></h6>
              }
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 distance">
                <button className="btn bottom-pink" type="button" onClick={() => this.basicInFormation(basicSex, basicAge, typeHei_Wig, basicHeight, basicWeight, practiceDifficultExercises, injury, arePregnant, displayname)}  >
                  <IntlMessages id="basic_information.createExercise" />
                </button>
                {/*    <Link to="/your_program" className="btn bottom-pink" type="button">สร้างโปรแกรมออกกำลังกาย</Link> */}
              </div>
            </div>
          </div>
        </div>

      </>

    );
  }
}

const mapStateToProps = ({ createUser, authUser, settings, get }) => {
  const { user } = authUser;
  const { create_user_email } = createUser;
  const { statusDisplayName } = get;
  let locale;
  if (settings) {
    locale = settings.locale;
  } else {
    locale = "th";
  }
  return { create_user_email, user, locale, statusDisplayName };
};

const mapActionsToProps = { basicInFormation, updateProfile, getCheckDisplayName };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(injectIntl(Basic_Information));