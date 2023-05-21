import React, { Component } from "react";

class Your_Program extends React.Component {
    render() {
        return (
            <>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  App-headerBackground center2 padding-top2 ">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 center2 margin-head">
                        <div className="box-protein margin-bottom1">
                            <div className="padding-top">
                                <p className="font-size6 bold color-protein"> BEBEStayFit</p>
                                <div className="box-yourProgram center3">
                                    <p className="border-bottom"></p>
                                    <p className="font-size6 bold"> ยินดีต้อนรับสมาชิกใหม่ของเรา</p>
                                    <p className="border-bottom"></p>
                                </div>
                                <div className="box-yourProgram">
                                    <div className="center3">
                                        <p>ขอบคุณที่มาสมัครเข้าร่วมเป็นสมาชิก Bebe Stay Fit</p>
                                        <p>ทางทีมงานได้รับข้อมูลการสมัครเรียบร้อยแล้ว</p>
                                        <p>เราขอบคุณที่ท่านให้ความสนใจและเลือกเราเป็นส่วนหนึ่งสู่ความสำเร็จ </p>
                                        <p>มาสร้างวินัย และมีความสุขกับการออกกำลังกายนะคะ </p>
                                    </div>
                                </div>
                                <div className="col-11 col-sm-11 col-md-8 col-lg-8 center2" >
                                    <div className="margin-head box-yourProgramIn padding-left">
                                        <p className="font-size4 margin-bottom color1 ">วันที่ชำระ 30 มิถุนายน 2565</p>
                                        <p className="font-size5 bold "> สมัครตามระยะเวลาของโปรแกรม</p>
                                        <p className="font-size4 bold"> สิ่งที่จะได้รับ</p>
                                        <div className="padding-bottom">
                                            <li className="font-size4 padding-left">Exercise program</li>
                                            <li className="font-size4 padding-left">Nutrition program</li>
                                            <li className="font-size4 padding-left">Supplement program</li>
                                            <li className="font-size4 padding-left">Fitto Plant Protein - Classic malt Flavor</li>
                                        </div>
                                        <p className="font-size5 bold "> ฟรีของแถม</p>
                                        <div className="padding-bottom">
                                            <li className="font-size4 padding-left">Shaker</li>
                                            <li className="font-size4 padding-left">Fitto Drink - Dark Cocoa</li>
                                            <li className="font-size4 padding-left">Fitto Drink - Arabica Latte</li>
                                            <li className="font-size4 padding-left">Fitto Plus COLLA C Pouche</li>
                                        </div>
                                        <div className="box-summarize ">
                                            <p className="font-size5 bold "> สรุป</p>
                                            <p className="font-size4 between margin-bottom"> ราคา (รวม Vat 7%) <span className="font-size5 bold">3,750 บาท / 2 เดือน</span></p>
                                            <p className="font-size7 right">เราจะทำการเรียกเก็บเงินทุกๆ 2 เดือน</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2  mx-auto   col-8 col-sm-8  col-md-4 col-lg-4 distance">
                                 <button className="btn bottom-pink" type="button" >
                                    เริ่มต้นใช้งาน
                                </button>
                               {/*  <Link to="/payment" className="btn bottom-pink" type="button">เริ่มต้นใช้งาน</Link> */}
                            </div>
                            <div className="box-yourProgram2">
                                <p className="font-size4  margin-bottom ">หากคุณไม่ได้ทำการสั่งซื้อกรุณา <a href="#" className="light"> hyperlink</a> </p>
                                <p className="font-size4  margin-bottom ">กดที่นี่  <a href="#" className="light">hyperlink </a> </p>
                                <p className="font-size4 "> หรือติดต่อเราที่ XXXXXX</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}

export default Your_Program;
;
