import React, { Component } from "react";
import user_circle from "../../assets/img/user_circle.svg";
import Group38 from '../../assets/img/group38.png';
class CancelPackageSucceed extends React.Component {
    render() {
        return (
            <>
                <div className="padding-top4 center">
                    <p className="font-size6 bold color-protein"> ยกเลิก Bebe Stay Fit  สำเร็จ</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  img-ellipse17 ">
                    <div className="grouo38  col-12 col-sm-12 col-md-12  col-lg-12 ">
                       {/*  <br />
                        <h4 className="color1 bold">ยกเลิก Bebe Stay Fit สำเร็จ</h4> */}
                        <img src={Group38} alt="vector"   className=" col-8 col-md-2 col-lg-2" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 box-imgGrouo38">
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="margin-top-5 padding-top5 padding-leftRight">
                              {/*   <p>XXXXXXXXXXXXXXXX</p>
                                <p className="margin-top-1">XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                                <p className="font-size4">XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                                <p className="margin-top-1 font-size4">XXXXXXXXXXXXXXXXXXXXXXXX</p>
                                <p className="margin-top-1 font-size4">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p> */}
                            </div>
                            <div className="d-grid gap-2  mx-auto   col-8 col-sm-  col-md-8 col-lg-8 margin-top-2 ">
                                <button className="btn bottom-pink" type="button" onClick={() => this.props.history.push('/profile')}>
                                    กลับหน้าโปรไฟล์
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
