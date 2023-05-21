import React, { Component } from "react";
import studioSession from "../../assets/img/studio_session_1.png";
import maskgroup from "../images/maskgroup.png";
import mask from "../images/mask.png";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram";
import { loginUser } from "../../redux/auth";
import IntlMessages from "../../helpers/IntlMessages";

class Welcome_NewMember extends React.Component {

  componentDidMount() {
    const { user_program_id, create_user_email, user } = this.props;

    this.props.getUserProgram(create_user_email);

    if (!user_program_id) { //ถ้าไม่มี user_program_id แสดงว่ายังชำระเงินไม่สำเร็จแล้ว
      this.props.history.push('/programPackage');
    }

    if (user !== null) {
      this.props.history.push('/basic_information');
    }
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, status } = this.props;
    if ((prevProps.user_program_id !== user_program_id) && (!user_program_id)) {  //ถ้าไม่มี user_program_id แสดงว่ายังชำระเงินไม่สำเร็จแล้ว
      this.props.history.push('/programPackage');
    }

    if (prevProps.status !== status) {
      if (status === "success") {
        this.props.history.push('/basic_information');
      }
    }
  }

  onUserLogin() {
    if (this.props.create_user_email !== "") {
      this.props.loginUser(this.props.create_user_email, this.props.create_user_password);
    }
  }

  render() {
    return (
      <>
        <div className="container2">
          <div className="row center">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 padding-top">
              <img src={maskgroup} alt="vector" className="studio-maskgroup" />
              <div className="center">
                <img src={mask} alt="vector" className="studio-mask" />
                <img src={studioSession} alt="vector" className="studio-session" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 padding-top information-box3">
              <div className="padding-top3 text-center box-welcome">
                <p className="border-bottom  margin-right"></p>
                <p className="font-size6  bold"><IntlMessages id="welcome_new_member.welcome"/></p>
                <p className="border-bottom margin-right"></p>
                <p className="padding-top2 col-12 col-sm-12 col-md-8 col-lg-8 center2"><IntlMessages id="welcome_new_member.thankYou"/></p>
              </div>
              <div className="mb-3 ">
                <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-6 col-lg-6 ">
                  <button
                    className="btn bottom-pink margin-leftRight"
                    type="button"
                    style={{ opacity: "1" }}
                    onClick={() => this.onUserLogin()}
                  >
                    <IntlMessages id="welcome_new_member.getStart"/>
                  </button>
                  {
                  this.props.status === "fail" &&
                  <h6 style={{ color: "red" }}>
                    <IntlMessages id="welcome_new_member.incorrectPassword"/>
                    <span
                      onClick={() => this.props.history.push("home")}
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    > <IntlMessages id="welcome_new_member.backtohome"/> </span>
                   <IntlMessages id="welcome_new_member.clickLogin"/>
                  </h6>
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

const mapStateToProps = ({ authUser, createUser, exerciseProgram }) => {
  const { user, status } = authUser;
  const { create_user_email, create_user_password } = createUser;
  const { user_program_id } = exerciseProgram;
  return { create_user_email, user_program_id, user, create_user_password, status };
};

const mapActionsToProps = { getUserProgram, loginUser };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Welcome_NewMember);
