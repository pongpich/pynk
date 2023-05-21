import React, { Component } from "react";
import ellipse17 from "../../assets/img/ellipse17_2.png";
import group183 from "../../assets/img/group183.png";
import vector_check from "../../assets/img/vector_check.png";
import group_check from "../../assets/img/group_check.png";
import { Link } from 'react-router-dom';

class Shipping_check extends React.Component {
    render() {
        return (
            <>
                <div className="padding-top4 center">
                    <p className="font-size8 bold color-protein"> ตรวจสอบการจัดส่งสินค้า</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6  center2 ">
                        <div className="box-protein margin-bottom1 padding-top">
                            <div className="between">
                                <p className="color-2 padding-right">หมายเลขคำสั่งซื้อ</p>
                                <p className="color-2">สั่งเมื่อ</p>
                            </div>
                            <div className="between">
                                <p className="color-2 padding-right">xxxxxxxxxxxxxx</p>
                                <p className="color-2">วันที่ 1 มี.ค. 2022 14:52:55</p>
                            </div>
                            <div className="center2 padding-top">
                                <img src={group183} alt="vector" />
                            </div>
                            <div>
                                <p className="font-size5  bold padding-top2">รอจัดส่งสินค้า</p>
                            </div>
                            <div className="between padding-leftRight section-size">
                                <li >Fitto Plant Protein - Classic malt Flavor</li>
                                <p>6 กล่อง</p>
                            </div>
                            <div className="padding-leftRight">
                                <p className="style-th3"></p>
                            </div>
                            <div>
                                <p className="font-size5  bold padding-top2">ที่อยู่ในการจัดส่ง</p>
                                <p className="section-size margin-top-1 ">บพิตร์ เตชะวัฒนานันท์</p>
                                <p className="section-size margin-top-1">เบอร์โทรศัพท์ 0869879595</p>
                                <p className="section-size margin-top-1">367/161 จรัญสนิทวงศ์33 แยก3 บางขุนศรี </p>
                                <p className="section-size margin-top-1">บางกอกน้อย 10700 กรุงเทพมหานคร</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                        <div className="box-protein margin-bottom1 padding-top">
                            <div className="between">
                                <p className="color-2 padding-right">หมายเลขคำสั่งซื้อ</p>
                                <p className="color-2">สั่งเมื่อ</p>
                            </div>
                            <div className="between">
                                <p className="color-2 padding-right">xxxxxxxxxxxxxx</p>
                                <p className="color-2">วันที่ 1 มี.ค. 2022 14:52:55</p>
                            </div>
                            <div className="center2 padding-top  vector_checkImg">
                                <img src={vector_check} alt="vector" />
                                <img src={group_check} alt="vector" className="checkImg" />
                            </div>
                            <div>
                                <p className="font-size5  bold padding-top2 color1">จัดส่งสินค้าแล้ว</p>
                                <p className="section-size">เลขพัสดุ xxxxxxxxxxxxxxx</p>
                            </div>
                            <div className="margin-top-2">
                                <button className="btn bottom-pink " type="button" >คัดลอกเลขและติดตามพัสดุ</button>
                            </div>
                            <div className="between padding-leftRight section-size">
                                <li>Fitto Plant Protein - Classic malt Flavor</li>
                                <p>6 กล่อง</p>
                            </div>
                            <div className="between padding-leftRight section-size margin-top-1 ">
                                <li>Shaker</li>
                                <p>1 ชิ้น</p>
                            </div>
                            <div className="between padding-leftRight section-size margin-top-1 ">
                                <li>Fitto Drink - Dark Cocoa</li>
                                <p>1 ซอง</p>
                            </div>
                            <div className="between padding-leftRight section-size margin-top-1 ">
                                <li >Fitto Drink - Arabica Latte</li>
                                <p>1 ซอง</p>
                            </div>
                            <div className="between padding-leftRight section-size margin-top-1 ">
                                <li >Fitto Plus COLLA C Pouche</li>
                                <p>1 ซอง</p>
                            </div>
                            <div className="padding-leftRight">
                                <p className="style-th3"></p>
                            </div>
                            <div>
                                <p className="font-size5  bold padding-top2">ที่อยู่ในการจัดส่ง</p>
                                <p className="section-size margin-top-1 ">บพิตร์ เตชะวัฒนานันท์</p>
                                <p className="section-size margin-top-1">เบอร์โทรศัพท์ 0869879595</p>
                                <p className="section-size margin-top-1">367/161 จรัญสนิทวงศ์33 แยก3 บางขุนศรี </p>
                                <p className="section-size margin-top-1">บางกอกน้อย 10700 กรุงเทพมหานคร</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}

export default Shipping_check;
;
