import React, { useState, useEffect } from "react";
import colors from "./colors";
import icon_profile from "../../assets/img/pynk/shop/profile.png";
import icon_edit from "../../assets/img/pynk/shop/edit.png";
import icon_exit from "../../assets/img/pynk/shop/exit.png";
import rectangle_86 from "../../assets/img/pynk/shop/Rectangle-86.png";
import rectangle_87 from "../../assets/img/pynk/shop/Rectangle-87.png";
import rectangle_88 from "../../assets/img/pynk/shop/Rectangle-88.png";
import "./css/profile.css";

const Profile = () => {
  const [statusManu, setStatusManu] = useState(0);
  const menuItems = [
    "ภาพรวมของคุณ",
    "ภารกิจของคุณ",
    "แพ็กเกจรายเดือน",
    "คำสั่งซื้อของฉัน",
  ];

  return (
    <div className="div-profile">
      <div className="head-profile">
        <div className="image-head" />
        <div className="box-profile">
          <div className="profile-name">
            <div className="box-image-profile">
              <div className="div-btn">
                <div>
                  <img src={icon_profile} className="icon-profile" />
                </div>
                <div>
                  <p className="bebe-fit">BeBe Fit</p>
                  <p className="username">@username1234</p>
                  <p className="lv">LV: มือใหม่หัดฟิตหุ่น</p>
                </div>
              </div>
              <div className="div-btn btn-margin-right-64">
                <div className="btn-icon-profile">
                  <img src={icon_edit} className="icon-edit " />
                  <img src={icon_exit} className="icon-edit" />
                </div>
                <div>
                  <div className="btn-profile btn-margin-right">
                    <img src={icon_edit} className="icon-edit" />
                    แก้ไขข้อมูลส่วนตัว
                  </div>
                </div>
                <div>
                  <div className="btn-profile">
                    <img src={icon_exit} className="icon-edit" />
                    ออกจากระบบ
                  </div>
                </div>
              </div>
            </div>

            <div className="ex3">
              <div className="manu-profile">
                {menuItems &&
                  menuItems.map((item, index) => (
                    <p
                      key={index}
                      className={`manu-name ${
                        statusManu === index ? "name-active" : ""
                      }`}
                      onClick={() => setStatusManu(index)}
                    >
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-content row">
        <div className=" col-sm-12 col-md-8 col-lg-8 mb-4">
          <p className="hand-name">ภารกิจชวนพิชิต</p>
          <div className="content-all">
            <div class="row mb-3">
              <div class="col-4 col-sm-4 col-md-3 col-lg-3">
                {" "}
                <img src={rectangle_86} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div>
                  <div class="col-sm-12 col-md-8 col-lg-8 order-sm-1 order-md-1 order-lg-1">
                    <p className="head-text">Fitto 4 Week Starter Program </p>
                    <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-3 "></div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-9 mt-pra">
                <button className="btn-content-participate">เข้าร่วม</button>
                <button className="btn-content-details">รายละเอียด</button>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 col-sm-4 col-md-3 col-lg-3">
                {" "}
                <img src={rectangle_87} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div>
                  <div class="col-sm-12 col-md-8 col-lg-8 order-sm-1 order-md-1 order-lg-1">
                    <p className="head-text">Fitto 4 Week Starter Program </p>
                    <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-3 "></div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-9 mt-pra">
                <button className="btn-content-participate">เข้าร่วม</button>
                <button className="btn-content-details">รายละเอียด</button>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 col-sm-4 col-md-3 col-lg-3">
                {" "}
                <img src={rectangle_88} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div>
                  <div class="col-sm-12 col-md-8 col-lg-8 order-sm-1 order-md-1 order-lg-1">
                    <p className="head-text">Fitto 4 Week Starter Program </p>
                    <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-3 "></div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-9 mt-pra">
                <button className="btn-content-participate">เข้าร่วม</button>
                <button className="btn-content-details">รายละเอียด</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
          <p className="hand-name">เพื่อนของคุณ</p>

          <div className="box-friend">
            <div className="box-image-friend">
              <img src={icon_profile} className="icon-profile" />
            </div>
            <p className="start-getting">มาเริ่มทำความรู้จักคนๆ อื่นกัน</p>
            <p className="exercise-will-be">
              การออกกำลังกายจะสนุกยิ่งขึ้น เมื่อเรามีเพื่อนๆ อยู่ด้วยกัน
            </p>
            <div className="box-image-friend">
              <button className="btn-content-participate">เพิ่มเพื่อน</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
