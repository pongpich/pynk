import React, { useState, useEffect } from "react";
import colors from "./colors";
import icon_profile from "../../assets/img/pynk/shop/profile.png";
import icon_edit from "../../assets/img/pynk/shop/edit.png";
import icon_exit from "../../assets/img/pynk/shop/exit.png";
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
        <div className="box-content row">
          <div className="col-md-6">
            <p>ภารกิจชวนพิชิต</p>
          </div>
          <div className="col-md-6">
            <p>เพื่อนของคุณ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
