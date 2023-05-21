import React, { Component } from "react";
import ellipse_71 from "../../assets/img/ellipse_71.png";
import { Link } from 'react-router-dom';

class Buy_program extends React.Component {
    render() {
        return (
            <>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12   padding-top2 information-box ">
                    <div className="container">
                        <div className="row row-cols-2">
                            <h4 className="color1">BEBEStayFit</h4>
                            <h6 className="right">ลงทะเบียน</h6>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-12 col-sm-12 col-md-12  col-lg-12 App-headerBackground">
                    <div className="container center ">
                        <div className="box2">
                            <div className="center  head-box">
                                <div className="head-width font-size5">
                                    <p>คุณจะสามารถลดน้ำหนัก 10 กิโลกรัม  <span className="bold">ภายใน32เดือน</span></p>
                                </div>
                            </div>
                            <div className="row center">
                                <div className="col-10 col-sm-10 col-md-5 col-lg-5 margin-boxLeft">
                                    <div className="box-starter_set text-center">
                                        <p className="bold font-size5 down-top bold">เซตเริ่มต้นสายฟิต</p>
                                        <p className="border-bottom"></p>
                                        <p className="font-size5  box-price">  ราคา <span className="font-size6 color-price bold">3,990</span> บาท</p>
                                        <p className="border-bottom margin-leftRight"></p>
                                        <div className="text-left bottom-padding">
                                            <li> โปรแกรมออกกำลังกาย</li>
                                            <li>คำแนะนำการควบคุมอาหาร</li>
                                            <li>คำแนะนำการทานอาหารเสริม</li>
                                            <li>Fitto Plant Protein 6 กล่อง  <br /><span className="margin-leftRight">(เลือกรสชาติได้)</span></li>
                                        </div>
                                        <div className="d-grid gap-2 col-8 ol-sm-8  mx-auto   col-md-8 col-lg-8 distance ">
                                            {/*  <button className="btn bottom-pink" type="button" >
                                                ถัดไป
                                            </button> */}
                                            <Link to="/register" className="btn bottom-pink" type="button">ถัดไป</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 col-sm-10 col-md-5 col-lg-5 center margin-head">
                                    <div className=" box-starter_set2 text-center">
                                        <div className="linear">
                                            <p className="bold font-size6 down-top bold ">ประหยัดกว่า</p>
                                        </div>
                                        <div className="margin-head  box-starter_set1">
                                            <div className="box-black">
                                                <p className="bold font-size5 center padding-top">สมัครตามระยะเวลาของโปรแกรม</p>
                                            </div>
                                            <div className="scroll">
                                                <div>
                                                    <p className="font-size5   margin-headText">  ราคา <span className="font-size6 color-price bold">3,990</span> /  2เดือน</p>
                                                </div>
                                                <div className="font-size4">
                                                    <li> เราจะทำการเรียกเก็บเงินทุกๆ 2 เดือน</li>
                                                    <li> ยกเลิกเมื่อไรก็ได้</li>
                                                </div>
                                                <p className="border-bottom margin-leftRight top-border"></p>
                                                <div className="font-size5 text-left">
                                                    <li> โปรแกรมออกกำลังกาย</li>
                                                    <li> คำแนะนำการควบคุมอาหาร</li>
                                                    <li> คำแนะนำการทานอาหารเสริม</li>
                                                    <li> Fitto Plant Protein 6 กล่อง  <br /><span className="bold span-image">ทุก 2 เดือน</span>  &nbsp;(เลือกรสชาติได้)</li>
                                                </div>
                                                <br />
                                                <div>
                                                    <p className="font-size5 bold">
                                                        ฟรีของแถม
                                                    </p>
                                                </div>
                                                <div className="font-size4 text-left">
                                                    <p> <img src={ellipse_71} alt="vector" className="ellipse-71" /> <span className="span-image">Shaker 1 ชิ้น <br /> <span className="distance-span">(เฉพาะสั่งซื้อครั้งแรก)</span></span></p>
                                                    <p> <img src={ellipse_71} alt="vector" className="ellipse-71" /> <span className="span-image">Cocoa </span></p>
                                                </div>
                                                {/*  <div className="example3"></div> */}
                                            </div>
                                            <div className="d-grid gap-2 col-8 ol-sm-8  mx-auto   col-md-8 col-lg-8 distance">
                                                {/*   <button className="btn bottom-pink" type="button" >
                                                    ถัดไป
                                                </button> */}
                                                <Link to="/register" className="btn bottom-pink" type="button">ถัดไป</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default Buy_program;
