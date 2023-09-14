import React, { useState, useEffect } from "react";
import "./css/home.css";
import "./css/login.css";

import { login } from "../../redux/pynk/auth";

const Login = () => {
  // const handleSubmit = () => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     });
  //   };
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var a = document.getElementById("btn-register");
  var b = document.getElementById("btn-login");

  function loginSwap() {
    x.style.right = "4px";
    y.style.left = "-520px";
    b.className += " pink-color";
    a.className = "btn-header"
  }
  function registerSwap() {
    x.style.right = "-520px";
    y.style.left = "4px";
    b.className = "btn-header";
    a.className += " pink-color";
  }
  return (
    <>
      <div className="wrapper">
        <div className="two-col">
          <div className="one">
            <span>
              <a onClick={registerSwap} className="btn-header pink-color" id="btn-register">ลงทะเบียน</a>
            </span>
          </div>
          <div className="two">
            <span>
              <a onClick={loginSwap} className="btn-header" id="btn-login">เข้าสู่ระบบ</a>
            </span>
          </div>
        </div>
        <div className="form-box">
          <div className="register-container" id="register">
            <div className="two-forms">
              <div className="input-box">
                <label for="first-name">ชื่อ</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="ระบุชื่อ"
                />
              </div>

              <div className="input-box">
              <label for="last-name">นามสกุล</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="ระบุนามสกุล"
                />
              </div>
            </div>

            <div className="two-forms">
              <div className="input-box">
              <label for="phone">เบอร์โทรศัพท์ที่ติดต่อได้</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="0xx-xxx-xxxx"
                />
              </div>
              <div className="input-box">
              <label for="email">อีเมลเข้าใช้งาน</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="example@mail.com"
                />
              </div>
            </div>

            <div className="two-forms">
              <div className="input-box">
              <label for="password">รหัสผ่าน</label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="ระบุรหัสผ่าน"
                />
              </div>
              <div className="input-box">
              <label for="confirm-password">ยืนยันรหัสผ่าน</label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="ระบุรหัสผ่านอีกครั้ง"
                />
              </div>
            </div>

            <div className="input-box">
              <input type="submit" className="submit" value={"ดำเนินการต่อ"} />
            </div>
          </div>

          <div className="login-container" id="login">
            <div className="input-box">
            <label for="email">อีเมลเข้าใช้งาน</label>
              <input
                type="text"
                className="input-field"
                placeholder="example@mail.com"
              />
            </div>
            <div className="input-box">
            <label for="password">รหัสผ่าน</label>
              <input
                type="password"
                className="input-field"
                placeholder="ระบุรหัสผ่าน"
              />
            </div>
            <a href="#" className="forgot-password">
              ลืมรหัสผ่าน?
            </a>
            <div className="input-box">
              <input type="submit" className="submit" value={"ดำเนินการต่อ"} />
            </div>
            {/* <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label for="login-check"> Remember Me </label>
              </div>
              <div className="two">
                <label>
                  <a>ลืมรหัสผ่าน</a>
                </label>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
