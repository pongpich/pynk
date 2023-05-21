import React, { Component } from "react";
import user_circle from "../../assets/img/user_circle.svg";
import Group38 from '../../assets/img/group38.png';
import Rectangle29 from '../../assets/img/rectangle29.png';
import Rectangle28 from '../../assets/img/rectangle28.png';
import Rectangle27 from '../../assets/img/rectangle27.png';
import IntlMessages from "../../helpers/IntlMessages";
class CancelPackageSucceed extends React.Component {
  render() {
    return (
      <>
        {/*  <div className="padding-top4 center">
          <p className="font-size6 bold color-protein"> ต่ออายุ Bebe Stay Fit  สำเร็จ</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  img-ellipse17 ">
          <div className="grouo38  col-12 col-sm-12 col-md-12  col-lg-12 ">
            <img src={Group38} alt="vector" className=" col-8 col-md-2 col-lg-2" />
            <img src={Rectangle29} alt="vector" className=" col-8 col-md-2 col-lg-2" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 box-imgGrouo38">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="margin-top-5 padding-top5 padding-leftRight">
                <p className="padding-top2 col-12 col-sm-12 col-md-8 col-lg-8 center2"><IntlMessages id="welcome_new_member.thankYou" /></p>
              </div>
              <div className="d-grid gap-2  mx-auto   col-8 col-sm-  col-md-8 col-lg-8 margin-top-2 ">
                <button className="btn bottom-pink" type="button" onClick={() => this.props.history.push('/videoList')}>
                  กลับหน้าออกกำลังกาย
                                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container2">
          <div className="row center">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 padding-top">
              <img src={Rectangle29} alt="vector" className="rectangle29" />
              <div className="">
                <img src={Rectangle27} alt="vector" className="rectangle27" />
                <img src={Rectangle28} alt="vector" className="studio-session" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 padding-top information-box4">
              <div className="padding-top3 text-center box-welcome">
                <p className="border-bottom "></p>
                <p className="font-size8  bold color1">ต่ออายุ Bebe Stay Fit สำเร็จ</p>
                <p className="border-bottom"></p>
                <br/>
                <p className="font-size9">ขอบคุณที่มาสมัครเข้าร่วมเป็นสมาชิก Bebe Stay Fit<br />
                  ทางทีมงานได้รับข้อมูลการสมัครเรียบร้อยแล้ว<br />
                  เราขอบคุณที่ท่านให้ความสนใจและเลือกเราเป็นส่วนหนึ่งสู่ความสำเร็จ <br />
                  มาสร้างวินัย และมีความสุขกับการออกกำลังกายนะคะ</p>
                  <button
                    className="btn bottom-pink col-12 col-sm-12 col-md-6 col-lg-6"
                    type="button"
                    style={{ opacity: "1" }}
                    onClick={() => this.props.history.push('/videoList')}
                  >
                    <IntlMessages id="welcome_new_member.getStart"/>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default CancelPackageSucceed;
;
