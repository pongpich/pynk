import React, { Component } from "react";
import user_circle from "../../assets/img/user_circle.svg";
import { connect } from "react-redux";
import { cancelRecurring } from "../../redux/auth";


class CancelPackage extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    const { statusCancelRecurring } = this.props;

    if ((prevProps.statusCancelRecurring !== statusCancelRecurring) && (statusCancelRecurring === 'success')) {
      this.props.history.push('/cancel_package_succeed');
    }
  }

  onSubmit() {
    if (this.props.user) {
      this.props.cancelRecurring(this.props.user.user_id);
    }
  }

  render() {
    return (
      <>
        <div className="padding-top4 center">
          <p className="font-size6 bold color-protein"> ยกเลิก Bebe Stay Fit</p>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="padding-top2 text-left2 margin-leftRight">
                <p className="font-size6 bold">แพ็กเกจของคุณ </p>
                <p className="font-size5 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size5">1,800 บาท / เดือน</span></p>
              </div>
              <p className="border-bottom margin-leftRight padding-top2"></p>
              <div>
                <p>หากยกเลิกตอนนี้ระบบจะทำการ</p>
                <p className="margin-top-1">หยุดเรียกเก็บเงินอัตโนมัติ</p>
                {/*  <p className="font-size4">โปรโมชั่น</p>
                                <p className="margin-top-1 font-size4">XXXXXXXX</p>
                                <p className="margin-top-1 font-size4">XXXXXXXX</p> */}
              </div>
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 margin-top-2 ">
                <button className="btn bottom-pink" type="button" onClick={() => this.onSubmit()}>
                  ยืนยัน
                                </button>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

const mapStateToProps = ({ get, authUser }) => {
  const { register_log } = get;
  const { user, statusCancelRecurring } = authUser;
  return { user, register_log, statusCancelRecurring };
};

const mapActionsToProps = { cancelRecurring };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CancelPackage);

;
