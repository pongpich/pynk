import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./css/home.css";
import "./css/login.css";

import { login, logout, register } from "../../redux/pynk/auth";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPassword, setConfirnPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    var inputID = event.target.id;

    switch (inputID) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "emailRegister":
        setEmailRegister(event.target.value);
        break;
      case "passwordRegister":
        setPasswordRegister(event.target.value);
        break;
      case "confirmPassword":
        setConfirnPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));
  const statusLogin = useSelector(({ auth }) => (auth ? auth.statusLogin : ""));
  const statusRegister = useSelector(({ auth }) => (auth ? auth.statusLogin : ""));

  const handleLogin = () => {
    dispatch(login(email, password));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleRegister = () => {
    console.log(handleRegister);
    if(statusRegister !== "loading"){
      dispatch(register(emailRegister, passwordRegister, firstName, lastName, phone));
    }
  };

  useEffect(() => {
    if (statusLogin === "success") {
      history.push("/shop");
    }
    if (statusLogin === "fail") {
      //setLoggedIn(false);
    }
  }, [statusLogin]);
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
    a.className = "btn-header";
  }
  function registerSwap() {
    x.style.right = "-520px";
    y.style.left = "4px";
    b.className = "btn-header";
    a.className += " pink-color";
  }
  return (
    <div className="body-login">
      <div className="wrapper">
        <div className="two-col">
          <div className="one">
            <span>
              <a
                onClick={registerSwap}
                className="btn-header pink-color"
                id="btn-register"
              >
                ลงทะเบียน
              </a>
            </span>
          </div>
          <div className="two">
            <span>
              <a onClick={loginSwap} className="btn-header" id="btn-login">
                เข้าสู่ระบบ
              </a>
            </span>
          </div>
        </div>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <div className="form-box">
            <div className="register-container" id="register">
              <div className="two-forms">
                <div className="input-box">
                  <label for="first-name">
                    ชื่อ <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="ระบุชื่อ"
                    id="firstName"
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-box">
                  <label for="last-name">
                    นามสกุล <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="ระบุนามสกุล"
                    id="lastName"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="two-forms">
                <div className="input-box">
                  <label for="phone">
                    เบอร์โทรศัพท์ที่ติดต่อได้{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="0xx-xxx-xxxx"
                    id="phone"
                    value={phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <label for="email">
                    อีเมลเข้าใช้งาน <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="example@mail.com"
                    id="emailRegister"
                    value={emailRegister}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="two-forms">
                <div className="input-box">
                  <label for="password">
                    รหัสผ่าน <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="ระบุรหัสผ่าน"
                    id="passwordRegister"
                    value={passwordRegister}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <label for="confirm-password">
                    ยืนยันรหัสผ่าน <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="ระบุรหัสผ่านอีกครั้ง"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-box">
                <input
                  onClick={handleRegister}
                  type="submit"
                  className="submit"
                  value={"ดำเนินการต่อ"}
                />
              </div>
            </div>

            <div className="login-container" id="login">
              <div className="input-box">
                <label for="email">
                  อีเมลเข้าใช้งาน <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="input-box">
                <label for="password">
                  รหัสผ่าน <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="ระบุรหัสผ่าน"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <a href="#" className="forgot-password">
                ลืมรหัสผ่าน?
              </a>
              <div className="input-box">
                <input
                  type="submit"
                  className="submit"
                  value={"ดำเนินการต่อ"}
                  onClick={handleLogin}
                />
              </div>
              <h3 onClick={handleLogout}>Log out</h3>
              {statusLogin === "fail" && <p>เข้าสู่ระบบไม่สำเร็จ!</p>}
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
      </div>
    </div>
  );
};

export default Login;
