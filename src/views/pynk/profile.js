import React from "react";
import colors from "./colors";
import icon_profile from "../../assets/img/pynk/shop/profile.png";
import icon_edit from "../../assets/img/pynk/shop/edit.png";
import icon_exit from "../../assets/img/pynk/shop/exit.png";
import "./css/profile.css";

export default function profile() {
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
                <p className="manu-name name-active">ภาพรวมของคุณ</p>
                <p className="manu-name">ภารกิจของคุณ</p>
                <p className="manu-name">แพ็กเกจรายเดือน</p>
                <p className="manu-name manu-padding-right">คำสั่งซื้อของฉัน</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
