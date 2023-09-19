import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./css/home.css";
import "./css/login.css";

import { login, logout, register, clear_status } from "../../redux/pynk/auth";

const Login = () => {
  const history = useHistory();

  const [renderName, setRenderName] = useState("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPassword, setConfirnPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
  const [isEmailRegisterEmpty, setIsEmailRegisterEmpty] = useState(false);
  const [isPasswordRegisterEmpty, setIsPasswordRegisterEmpty] = useState(false);
  const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const [isEmailError, setIsEmailError] = useState("default");
  const [isPasswordError, setIsPasswordError] = useState("default");

  const [isLoginError, setIsLoginError] = useState("default");

  /* const handleBlur = (fieldName) => {
    // ตรวจสอบความเต็มของช่องกรอก
    const value = formData[fieldName];
    if (!value) {
      alert(กรุณากรอก ${fieldName});
    }
  };
const [formData, setFormData] = useState({
    email: '',
    password: '',
    // เพิ่มช่องกรอกเพิ่มเติมตามต้องการ
  }); */

  const handleBlur = (event) => {
    var inputID = event.target.id;
    console.log(inputID);

    switch (inputID) {
      case "firstName":
        if (firstName.trim() === "") {
          setIsFirstNameEmpty(true);
        } else {
          setIsFirstNameEmpty(false);
        }
        break;
      case "lastName":
        if (lastName.trim() === "") {
          setIsLastNameEmpty(true);
        } else {
          setIsLastNameEmpty(false);
        }
        break;
      case "phone":
        if (phone.trim() === "") {
          setIsPhoneEmpty(true);
        } else {
          setIsPhoneEmpty(false);
        }
        break;
      case "emailRegister":
        if (emailRegister.trim() === "") {
          setIsEmailRegisterEmpty(true);
        } else {
          setIsEmailRegisterEmpty(false);
        }
        break;
      case "passwordRegister":
        if (passwordRegister.trim() === "") {
          setIsPasswordRegisterEmpty(true);
        } else {
          setIsPasswordRegisterEmpty(false);
        }
        break;
      case "confirmPassword":
        if (confirmPassword.trim() === "") {
          setIsConfirmPasswordEmpty(true);
        } else {
          setIsConfirmPasswordEmpty(false);
        }
        break;
      case "email":
        if (email.trim() === "") {
          setIsEmailEmpty(true);
          setIsEmailError("default");
        } else {
          setIsEmailEmpty(false);
          if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setIsEmailError("formatEmail");
          } else {
            setIsEmailError("default");
          }
        }
        break;
      case "password":
        if (password.trim() === "") {
          setIsPasswordEmpty(true);
        } else {
          setIsPasswordEmpty(false);
        }
        break;
      default:
        break;
    }
  };

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
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));
  const statusLogin = useSelector(({ auth }) => (auth ? auth.statusLogin : ""));
  const statusRegister = useSelector(({ auth }) =>
    auth ? auth.statusRegister : ""
  );

  const handleLogin = () => {
    dispatch(login(email, password));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleRegister = () => {
    console.log(handleRegister);
    if (statusRegister !== "loading") {
      dispatch(
        register(emailRegister, passwordRegister, firstName, lastName, phone)
      );
    }
  };

  useEffect(() => {
    if (statusLogin === "success") {
      history.push("/shop");
    }
    if (statusLogin === "fail") {
      setIsLoginError("invalidLogin");
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
  useEffect(() => {
    dispatch(clear_status());
  }, []);

  useEffect(() => {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var a = document.getElementById("btn-register");
    var b = document.getElementById("btn-login");
    if (renderName === "register") {
      x.style.right = "-520px";
      y.style.left = "4px";
      b.className = "btn-header";
      a.className += " pink-color";
    } else {
      x.style.right = "4px";
      y.style.left = "-520px";
      b.className += " pink-color";
      a.className = "btn-header";
    }
  }, [renderName]);

  return (
    <div className="body-login">
      <div className="wrapper">
        <div className="two-col">
          <div className="one">
            <span>
              <a
                onClick={() => {
                  setRenderName("register");
                }}
                className="btn-header pink-color"
                id="btn-register"
              >
                ลงทะเบียน
              </a>
            </span>
          </div>
          <div className="two">
            <span>
              <a
                onClick={() => {
                  setRenderName("login");
                }}
                className="btn-header"
                id="btn-login"
              >
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
                    placeholder="ระบุชื่อ"
                    id="firstName"
                    value={firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={isFirstNameEmpty ? "empty-field" : "input-field"}
                  />
                  {isFirstNameEmpty ? (
                    <p style={{ color: "red" }}>กรุณาระบุข้อมูล</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="input-box">
                  <label for="last-name">
                    นามสกุล <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ระบุนามสกุล"
                    id="lastName"
                    value={lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={isLastNameEmpty ? "empty-field" : "input-field"}
                  />
                  {isLastNameEmpty ? (
                    <p style={{ color: "red" }}>กรุณาระบุข้อมูล</p>
                  ) : (
                    ""
                  )}
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
                    placeholder="0xx-xxx-xxxx"
                    id="phone"
                    value={phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={isPhoneEmpty ? "empty-field" : "input-field"}
                  />
                  {isPhoneEmpty ? (
                    <p style={{ color: "red" }}>กรุณาระบุข้อมูล</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="input-box">
                  <label for="email">
                    อีเมลเข้าใช้งาน <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="example@mail.com"
                    id="emailRegister"
                    value={emailRegister}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      isEmailRegisterEmpty ? "empty-field" : "input-field"
                    }
                  />
                  {isEmailRegisterEmpty ? (
                    <p style={{ color: "red" }}>กรุณาระบุข้อมูล</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="two-forms">
                <div className="input-box">
                  <label for="password">
                    รหัสผ่าน <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="ระบุรหัสผ่าน"
                    id="passwordRegister"
                    value={passwordRegister}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      isPasswordRegisterEmpty ? "empty-field" : "input-field"
                    }
                  />
                  {isPasswordRegisterEmpty ? (
                    <p style={{ color: "red" }}>กรุณาระบุข้อมูล</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="input-box">
                  <label for="confirm-password">
                    ยืนยันรหัสผ่าน <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="ระบุรหัสผ่านอีกครั้ง"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      isConfirmPasswordEmpty ? "empty-field" : "input-field"
                    }
                  />
                  {isConfirmPasswordEmpty ? (
                    <p style={{ color: "red" }}>กรุณาระบุข้อมูล</p>
                  ) : (
                    ""
                  )}
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
                  placeholder="example@mail.com"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    isEmailEmpty || isEmailError !== "default"
                      ? "empty-field"
                      : "input-field"
                  }
                />
                {isEmailEmpty ? (
                  <p style={{ color: "red" }}>กรุณาระบุข้อมูล</p>
                ) : (
                  ""
                )}
                {isEmailError === "formatEmail" ? (
                  <p style={{ color: "red" }}>รูปแบบอีเมลไม่ถูกต้อง</p>
                ) : (
                  ""
                )}
              </div>
              <div className="input-box">
                <label for="password">
                  รหัสผ่าน <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  placeholder="ระบุรหัสผ่าน"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={isPasswordEmpty ? "empty-field" : "input-field"}
                />
                {isPasswordEmpty ? (
                  <p style={{ color: "red" }}>กรุณาระบุข้อมูล</p>
                ) : (
                  ""
                )}
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
              {isLoginError === "invalidLogin" && (
                <p style={{ color: "red" }}>อีเมลหรือรหัสผ่านไม่ถูกต้อง</p>
              )}
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
