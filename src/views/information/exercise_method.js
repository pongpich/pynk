import React, { Component } from 'react';
import IntlMessages from "../../helpers/IntlMessages";
import { injectIntl } from 'react-intl';
import "./video_List.css";

class Exercise_method extends Component {
    constructor(props) {
        super(props);
        this.state = {
          borderBottom1: "video-link",
          borderBottom2: "video-link",
          borderBottom3: "video-link rectangle13 color1",
        }
      }
    render() {
        const { messages } = this.props.intl;
        return (
            <div className="box-videoCenter">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="video-wh">
                        <ul className="video-maun">
                            <li className="video-li  video-liPadding-left marginLeftRoutine">
                                <a id="workout_label" className={this.state.borderBottom1} name="borderBottom1" onClick={e => this.props.history.push('../videoList')}>{messages['videoList.workout']}</a>
                            </li>
                            <li className="video-li  video-liPadding-left   video-liPadding-left2">
                                <a id="challenge_label" className={this.state.borderBottom2} name="borderBottom2" onClick={e => this.props.history.push('/challenge')}>{messages['videoList.challenge']}</a>
                            </li>
                            <li className="video-li  video-liPadding-left   video-liPadding-left2">
                                <a id="howto_label" className={this.state.borderBottom3} name="borderBottom3" onClick={e => this.clickBottom(e)}>{messages['videoList.exerciseaccording']}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="padding-leftRight2">
              <p className="font-size8-2 color1 bold">วิธีออกกำลังกายตามโปรแกรม</p>
              <p className="font-size9 bold">โปรแกรมออกกำลังกาย Bebe StayFit</p>
              <p className="exercise-size">
                สมาชิกแต่ละบุคคลจะได้รับโปรแกรมที่แตกต่างกัน ขึ้นอยู่กับเกณฑ์น้ำหนักของตนเอง
                กล่าวคือ โปรแกรมจะออกแบบมาให้เหมาะสมกับแต่ละเกณฑ์น้ำหนัก ดังนั้น จำนวนคลิปและระยะเวลาในการฝึกจะไม่เท่ากัน และถึงแม้จะอยู่ในเกณฑ์น้ำหนักเดียวกัน คลิปที่ได้รับก็จะแตกต่างกันด้วย
              </p>
              <p className="font-size9 bold">รูปแบบของโปรแกรมออกกำลังกาย</p>
              <p className="exercise-size">
                การออกกำลังกายในโปรแกรมนี้ เป็นการออกกำลังกายแบบ Circuit Training และ Cardio
              </p>
              <p className="exercise-size">
                Circuit Training คือ การรูปแบบการออกกำลังกาย ที่ผสม Weight Training + Cardio เข้าด้วยกัน ทำให้ได้กระตุ้นกล้ามเนื้อและเบิร์นไขมันไปพร้อม ๆ กัน ประหยัดเวลาออกกำลังกาย
              </p>
              <p className="exercise-size">
                ในโปรแกรม จะประกอบด้วยคลิปหมวดต่าง ๆ ดังนี้
              </p>
              <p className="exercise-size2">
                1. &nbsp; Warm Up : เตรียมพร้อมร่างกาย อบอุ่นกล้ามเนื้อและข้อต่อต่าง ๆ ให้พร้อมสำหรับการฝึก < br />
                2. &nbsp; Main Circuit : เน้นฝึกกล้ามเนื้อมัดสำคัญ มัดใดมัดหนึ่งเป็นหลัก (Main Muscle Focused) < br />
                3. &nbsp; Sub Circuit : เน้นฝึกกล้ามเนื้อทั่วร่าง (Total Body Focused) ซึ่งทั้งเซอร์กิตทั้ง 2 แบบ จะช่วยเสริมสร้างและรักษามวลกล้ามเนื้อ ทำให้สัดส่วนลดลงและรูปร่างกระชับขึ้น < br />
                4. &nbsp; Cardio : เน้นฝึกการทำงานของระบบหัวใจ และระบบไหลเวียนเลือด ช่วยเบิร์นไขมันได้ดี < br />
                5. &nbsp; Cool Down : ยืดเหยียดกล้ามเนื้อ และปรับอัตราการเต้นของหัวใจกลับสู่สภาวะปกติ < br />
              </p>
              <p className="font-size9 bold">
                วิธีการออกกำลังกาย
              </p>
              <p className="exercise-size">
                ออกกำลังกายตามลำดับที่โปรแกรมจัดเรียงให้ ซึ่งได้แก่ เริ่มต้นด้วยการ Warm Up แล้วตามด้วยการออกกำลังกาย Main Circuit, Sub Circuit, Cardio และจบด้วย Cool Down
              </p>
              <p className="exercise-size">
                ออกกำลังกายตามลำดับข้างต้น จะช่วยให้ออกกำลังกายได้อย่างมีประสิทธิภาพและสามารถคาดหวังผลลัพธ์ได้
              </p>
              <p className="exercise-size">
                ในกรณีที่ไม่สามารถออกกำลังกายได้ครบทุกคลิปที่กำหนดให้ สามารถแยกการออกกำลังกายเป็น 2 ช่วงเวลาได้ ซึ่งควรเว้นระยะเวลาให้ห่างกันอย่างน้อย 4-6 ชั่วโมง เช่น ออกกำลังกาย Main Circuit Sub Circuit ช่วงเช้า และออกกำลังกาย cardio ในช่วงเย็น และทุกครั้งที่ออกกำลังกาย จะต้องเริ่มด้วย Warm Up และจบด้วย Cool Down เสมอ
              </p>
              <p className="font-size9 bold">
                จำนวนวันที่ต้องออกกำลังกาย
              </p>
              <p className="exercise-size">
                โปรแกรม กำหนดให้ฝึก 4 วันต่อสัปดาห์ ซึ่งสมาชิกสามารถจัดตาราง หรือกำหนดวันที่จะออกกำลังกายตามโปรแกรมได้ตามความสะดวก ขอแค่ออกกำลังกายให้ครบ 4 วัน/สัปดาห์ ตามที่โปรแกรมกำหนดให้ ก็ถือว่าทำตามโปรแกรมได้ครบแล้ว
              </p>
            </div>
          </div>
        </div>

            </div>
        )
    }
}
export default (injectIntl(Exercise_method));