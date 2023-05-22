import React, { Component } from "react";
import { Link } from 'react-router-dom';

/* function activateLasers() {

    <Link to="/buy_program"></Link>
} */
class Information_calculate extends React.Component {
    render() {
        return (

            <>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  padding-top2 information-box ">
                    <div className="container">
                        <div className="row row-cols-2">
                            <h4 className="color1">BEBEStayFit</h4>
                            <h6 className="right">ลงทะเบียน</h6>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  App-headerBackground">
                    <div className="container">
                        <div className="row center  ">
                            <div className="box1">
                                <p className="font-size1">กรอกข้อมูลเพื่อคำนวณระยะเวลา ที่ใช้ในการลดน้ำหนัก</p>
                                <p className="style-th2"></p>
                                <p className="font-size3">วิธีการลดน้ำหนัก</p>
                                <p className="font-size2">คุณสะดวก หรือต้องการลดน้ำหนักด้วยวิธีใด</p>
                                <div className="form-check font-size4">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label">
                                        ออกกำลังกายควบคู่กับอาหารเสริม
                                    </label>
                                </div>
                                <div className="form-check font-size4">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label">
                                        คุมอาหารอย่างเดียว
                                    </label>
                                </div>
                                <br />
                                <div className="mb-3 ">
                                    <label className="form-label font-size2 ">คุณต้องการลดน้ำหนักกี่กิโลกรัม</label>
                                    <input type="email" className="form-control right" id="exampleFormControlInput1" placeholder="กิโลกรัม" />
                                </div>
                                <div className="d-grid gap-2 col-12 ol-sm-12  mx-auto   col-md-12 col-lg-12 distance ">
                                    {/*  <button className="btn bottom-pink" type="button" onClick={activateLasers}>
                            ถัดไป
                        </button>   */}
                                    <Link to="/buy_program" className="btn bottom-pink" type="button">ถัดไป</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default Information_calculate;
