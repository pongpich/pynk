import React, { Component } from "react";
import vector from "../../assets/img/vector.png";
import pen from "../../assets/img/pen.png";
import polygon from "../../assets/img/polygon.png";

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextStatus: false,
    };
  }
  renderInformation() {
    return (
      <div className="padding-box padding-bottom">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 center padding-top ">
          <div className="information-box col-12 col-sm-12  col-md-8 col-lg-8 padding-box padding-top">
            <h3 className="center ">กรอกข้อมูลเพื่อค้นหาxxxxxxxx</h3>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 center  App-headerBackground">
          <div className="information-box  col-12 col-sm-12  col-md-8 padding-box">
            <p className="border-bottom center"></p>
            <p className="font-weight">เพศ</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sex"
                id="inlineRadio1"
                value="ชาย"
              />
              <label className="form-check-label" for="inlineRadio1">
                ชาย
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sex"
                id="inlineRadio2"
                value="หญิง"
              />
              <label className="form-check-label" for="inlineRadio2">
                หญิง
              </label>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4 font-weight ">
                <label class="form-label">
                  อายุ
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="ปี"
                />
              </div>
              <div className="col-md-4 font-weight ">
                <label for="inputPassword4" class="form-label">
                  น้ำหนัก
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="กีโลกรัม"
                />
              </div>
              <div className="col-md-4 font-weight">
                <label for="inputPassword4" class="form-label">
                  ส่วนสุง
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="เซนติเมต"
                />
              </div>
            </div>
            <br />
            <div claclassNamess="col-12 font-weight">
              <label for="inputAddress" class="form-label">
                เบอร์โทรศัพท์
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="xxx-xxx-xxxx"
              />
            </div>
            <br />
            <div className="col-12 font-weight">
              <label for="inputAddress2" class="form-label">
                ต้องการลดน้ำหนักกี่กิโลกรัม
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="กิโกรัม"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 center ">
          <div className="information-box  col-12 col-sm-12  col-md-8 col-lg-8 padding-box">
            <div className="font-weight ">
              <p>
                คุณสะดวก หรือต้องการลดน้ำหนักด้วยวิธีใด{" "}
                <span className="span-image">
                  <img src={vector} alt="vector" />
                </span>
              </p>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="lose_weight"
                id="exampleRadios03"
                value="ออกกำลังกายควบคู่กับอาหารเสริม"
              />
              <label className="form-check-label" for="exampleRadios3">
                ออกกำลังกายควบคู่กับอาหารเสริม
              </label>
            </div>
            <div className="form-check down-top">
              <input
                className="form-check-input"
                type="radio"
                name="lose_weight"
                id="exampleRadios04"
                value="ออกกำลังกายอย่างเดียว"
              />
              <label className="form-check-label" for="exampleRadios04">
                ออกกำลังกายอย่างเดียว
              </label>
            </div>
            <div className="form-check down-top">
              <input
                className="form-check-input"
                type="radio"
                name="lose_weight"
                id="exampleRadios05"
                value="คุมอาหารอย่างเดียว"
              />
              <label className="form-check-label" for="exampleRadios05">
                คุมอาหารอย่างเดียว
              </label>
            </div>
            <br />
            <br />
            <div className="font-weight ">
              <p>คุณสะดวกกินอาหารเสริมปริมาณเท่าใด (เลือกใดข้อหนึ่ง) </p>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="take_supplement"
                id="take_supplement1"
                value="คุมอาหารวันละ 1 มื้อ 5 วันต่อสํปดาห์"
              />
              <label className="form-check-label" for="take_supplement1">
                คุมอาหารวันละ 1 มื้อ 5 วันต่อสํปดาห์
              </label>
            </div>
            <div className="form-check down-top">
              <input
                className="form-check-input"
                type="radio"
                name="take_supplement"
                id="take_supplement2"
                value="คุมอาหารวันละ 1 มื้อ 7 วันต่อสํปดาห์"
              />
              <label className="form-check-label" for="take_supplement2">
                คุมอาหารวันละ 1 มื้อ 7 วันต่อสํปดาห์
              </label>
            </div>
            <div className="form-check down-top">
              <input
                className="form-check-input"
                type="radio"
                name="take_supplement"
                id="take_supplement3"
                value="คุมอาหารวันละ 2 มื้อ 5 วันต่อสํปดาห์"
              />
              <label className="form-check-label" for="take_supplement3">
                คุมอาหารวันละ 2 มื้อ 5 วันต่อสํปดาห์
              </label>
            </div>
            <div className="form-check down-top">
              <input
                className="form-check-input"
                type="radio"
                name="take_supplement"
                id="take_supplement4"
                value="คุมอาหารวันละ 2 มื้อ 7 วันต่อสํปดาห์"
              />
              <label className="form-check-label" for="take_supplement4">
                คุมอาหารวันละ 2 มื้อ 7 วันต่อสํปดาห์
              </label>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 center ">
          <div className="information-box col-12 col-sm-12  col-md-8 col-lg-8 padding-box">
            <div className="font-weight ">
              <p>แบบสอบถามเพื่อการประเมินและแนะนำสินค้าที่เหมาะสม</p>

              <div className="box-information">
                <p>(กรุณาตอบตามความเป็นจริง)</p>
              </div>
              <br />
              <div className="box-information font-weight ">
                <p>
                  คุณสามารถฝึกท่าฝึกยากๆ เช่นท่า Squat, ท่ากระโดด
                  ได้อย่างถูกต้อง
                </p>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="difficult_exercises"
                  id="difficult_exercises1"
                  value="ใช่"
                />
                <label className="form-check-label" for="difficult_exercises1">
                  ใช่
                </label>
              </div>
              <div className="form-check form-check-inline distance ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="difficult_exercises"
                  id="difficult_exercises2"
                  value="ไม่ใช่"
                />
                <label className="form-check-label" for="difficult_exercises2">
                  ไม่ใช่
                </label>
              </div>
              <div className="form-check form-check-inline distance ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="difficult_exercises"
                  id="difficult_exercises2"
                  value="ไม่แน่ใจ"
                />
                <label className="form-check-label" for="difficult_exercises2">
                  ไม่แน่ใจ
                </label>
              </div>

              <div className="box-information font-weight ">
                <p>คุณมีอาการบาดเจ็บที่ข้อต่อหรือกระดูกสันหลัง หรือไม่</p>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="injury"
                  id="injury1"
                  value="ใช่"
                />
                <label className="form-check-label" for="injury1">
                  ใช่
                </label>
              </div>
              <div className="form-check form-check-inline distance ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="injury"
                  id="injury2"
                  value="ไม่ใช่"
                />
                <label className="form-check-label" for="injury2">
                  ไม่ใช่
                </label>
              </div>
              <div className="box-information font-weight ">
                <p>กินนมแล้วมีอาการถ่ายท้อง หรือไม่</p>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="milk"
                  id="imilk1"
                  value="ใช่"
                />
                <label className="form-check-label" for="milk1">
                  ใช่
                </label>
              </div>
              <div className="form-check form-check-inline distance ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="milk"
                  id="milk2"
                  value="ไม่ใช่"
                />
                <label className="form-check-label" for="milk2">
                  ไม่ใช่
                </label>
              </div>

              <div className="box-information font-weight ">
                <p>ต้องการทานแบบมังสวิรัติ หรือ วีแกน</p>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="vegetarian_wigan"
                  id="vegetarian_wigan1"
                  value="ต้องการ"
                />
                <label className="form-check-label" for="vegetarian_wigan1">
                  ต้องการ
                </label>
              </div>
              <div className="form-check form-check-inline distance ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="vegetarian_wigan"
                  id="vegetarian_wigan2"
                  value="ไม่ต้องการ"
                />
                <label className="form-check-label" for="vegetarian_wigan2">
                  ไม่ต้องการ
                </label>
              </div>

              <div className="box-information font-weight ">
                <p>ดื่มชา กาแฟ หรือ เครื่องดื่มคาเฟอีนเป็นปกติ</p>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="ดื่ม"
                />
                <label className="form-check-label" for="inlineRadio1">
                  ดื่ม
                </label>
              </div>
              <div className="form-check form-check-inline distance ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="ไม่ดื่ม"
                />
                <label className="form-check-label" for="inlineRadio2">
                  ไม่ดื่ม
                </label>
              </div>

              <div className="box-information font-weight ">
                <p>กำลังตั้งครรภ์ หรือให้นมบุตรอยู่</p>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="pregnant"
                  id="pregnant1"
                  value="ใช่"
                />
                <label className="form-check-label" for="inlineRadio1">
                  ใช่
                </label>
              </div>
              <div className="form-check form-check-inline distance ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="pregnant"
                  id="pregnant2"
                  value="ไม่ใช่"
                />
                <label className="form-check-label" for="inlineRadio2">
                  ไม่ใช่
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 center ">
          <div className="information-box col-12 col-sm-12  col-md-8 col-lg-8 padding-box padding-bottom">
            <div className="d-grid gap-2 col-12 ol-sm-12  mx-auto   col-md-6 col-lg-6 distance">
              <button
                onClick={() => this.setState({ nextStatus: true })}
                className="btn bottom-pink"
                type="button"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSummaryDetails() {
    return (
      <div className="padding-box padding-bottom">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 center top ">
          <div className="information-box col-12 col-sm-12  col-md-8 col-lg-8 padding-box padding-top">
            <h3 className="center ">สรุปรายละเอียด</h3>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 center">
          <div className="information-box col-12 col-sm-12  col-md-8 col-lg-8 padding-box padding-top">
            <div className="section-size">
              <p>
                กรุณาตรวจสอบข้อมูลอีกครั้งเพื่อที่คุณจะได้รับประสบการณ์
                <br />
                โปรแกรมการออกกำลังกายสำหรับคุณโดยเฉพาะ/อย่างแม่นยำ/อย่างถูกต้อง
              </p>
            </div>
            <br />
            <div className="container">
              <div className="row row-cols-2 ">
                <div className=" col-4 col-sm-4 col-md-6">
                  <p>ชื่อ</p>
                </div>
                <div className="col-8 col-sm-8 col-md-6">
                  <p>Panee Youngprasit
                    <span>
                      <img src={pen} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className=" col-6 col-sm-6 col-md-6 ">
                  <p>เพศ </p>
                </div>
                <div className=" col-6 col-sm-6 col-md-6 ">
                  <p>xx
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className=" col-6 col-sm-6 col-md-6 ">
                  <p>อายุ</p>
                </div>
                <div className=" col-6 col-sm-6 col-md-6 ">
                  <p>xx
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>น้ำหนัก (กก.)</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>xx
                    <span>
                      <img src={pen} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>ส่วนสูง (ซม.)</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>xx
                    <span>
                      <img src={pen} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>เบอร์โทรศัพท์</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>xxx-xxx-xxxx
                    <span>
                      <img src={pen} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>ต้องการลดน้ำหนัก (กก.)</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>xx
                    <span>
                      <img src={pen} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>
                    คุณสะดวก หรือต้องการลดน้ำหนัก
                    <br />
                    ด้วยวิธีใด
                  </p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>ออกกำงกายควบคู่กับการกินอาหาร
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>คูณสะดวกกินอาหารเสริมปริมาณเท่าใด</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>คุมอาหารวันละ 2 มื้อ 5 วันต่อสับปดาห์
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>คุณสามารถฝึกท่ายากๆ</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>ไม่ใช่
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-md-6">
                  <p>คุณมีอาการบาดเจ็บที่ข้อต่อหรือกระดูกสันหลัง</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>ไม่ใช่
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>กินนมแล้วมีอาการถ่ายท้อง หรือไม่</p>
                </div>
                <div className="col-md-6">
                  <p>ไม่ใช่
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-md-6">
                  <p>ต้องการทานแบบมังสวิรัติ หรือ วีแกน</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>ต้องการ
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-6 col-sm-6 col-md-6">
                  <p>ดื่มชา กาแฟ หรือ เครื่องดื่มคาเฟอีนเป็นปกติ</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <p>ดื่ม
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="style-th2 center"></p>
            <div className="container">
              <div className="row row-cols-2">
                <div className="col-md-6">
                  <p>กำลังตั้งครรท์ หรือให้นมบุตรอยู่</p>
                </div>
                <div className="col-md-6">
                  <p>ไม่ใช่
                    <span>
                      <img src={polygon} alt="vector" className="image-pen " />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 col-12 ol-sm-12  mx-auto   col-md-6 col-lg-6 distance ">
              <button className="btn bottom-pink" type="button">
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return !this.state.nextStatus
      ? this.renderInformation()
      : this.renderSummaryDetails();
  }
}

export default Information;
