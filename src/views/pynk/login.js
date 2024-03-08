import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./css/home.css";
import "./css/login.css";

import { login, logout, register, clear_status } from "../../redux/pynk/auth";
import GoogleLoginComponent from "./googleFacebookLineLogin/googleLogin";
import FaceBookLoginComponent from "./googleFacebookLineLogin/faceBookLogin";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

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
  const [isEmailRegisterError, setIsEmailRegisterError] = useState("default");

  const [isLoginError, setIsLoginError] = useState("default");
  const [isRegisterFail, setIsRegisterFail] = useState("default");

  const [isConfirmPasswordMatch, setIsConfirmPasswordMatch] = useState(true);

  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState("default");
  const [hasUpperCase, setHasUpperCase] = useState("default");
  const [hasNumber, setHasNumber] = useState("default");
  const googleProfile = useSelector(({ auth }) =>
    auth ? auth.googleProfile : ""
  );

  const handleBlur = (event) => {
    var inputID = event.target.id;

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
          setIsEmailRegisterError("default");
        } else {
          setIsEmailRegisterEmpty(false);
          if (
            !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailRegister)
          ) {
            setIsEmailRegisterError("formatEmail");
          } else {
            setIsEmailRegisterError("default");
          }
        }
        break;
      case "passwordRegister":
        if (passwordRegister.trim() === "") {
          setIsPasswordRegisterEmpty(true);
        } else {
          setIsPasswordRegisterEmpty(false);
        }
        if (passwordRegister.length < 6) {
          setIsPasswordValid("invalid");
        } else {
          setIsPasswordValid("valid");
        }
        if (!/[A-Z]/.test(passwordRegister)) {
          setHasUpperCase("invalid");
        } else {
          setHasUpperCase("valid");
        }
        if (!/\d/.test(passwordRegister)) {
          setHasNumber("invalid");
        } else {
          setHasNumber("valid");
        }
        break;
      case "confirmPassword":
        if (confirmPassword.trim() === "") {
          setIsConfirmPasswordEmpty(true);
        } else {
          setIsConfirmPasswordEmpty(false);
        }
        console.log(passwordRegister, confirmPassword);
        if (passwordRegister !== confirmPassword) {
          setIsConfirmPasswordMatch(false);
        } else {
          setIsConfirmPasswordMatch(true);
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

  const togglePasswordVisibility = (event) => {
    var inputID = event.target.id;

    switch (inputID) {
      case "showPasswordButtonRegister":
        setShowPasswordRegister(!showPasswordRegister);
        break;
      case "showPasswordButtonRegisterConfirm":
        setShowPasswordConfirm(!showPasswordConfirm);
        break;
      case "showPasswordButtonLogin":
        setShowPasswordLogin(!showPasswordLogin);
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
    if (statusRegister !== "loading") {
      dispatch(
        register(emailRegister, passwordRegister, firstName, lastName, phone)
      );
    }
  };

  useEffect(() => {
    if (statusLogin === "success") {
      history.push("/profile-pynk");
    }
    if (statusLogin === "fail") {
      setIsLoginError("invalidLogin");
    }
  }, [statusLogin]);

  useEffect(() => {
    if (statusRegister === "success") {
      dispatch(login(emailRegister, passwordRegister));
    }
    if (statusRegister === "fail") {
      setIsRegisterFail("invalidRegister");
    }
  }, [statusRegister]);
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
    if (passwordRegister.length >= 6) {
      setIsPasswordValid("valid");
    } else {
      setIsPasswordValid("default");
    }
    if (/[A-Z]/.test(passwordRegister)) {
      setHasUpperCase("valid");
    } else {
      setHasUpperCase("default");
    }
    if (/\d/.test(passwordRegister)) {
      setHasNumber("valid");
    } else {
      setHasNumber("default");
    }
  }, [passwordRegister]);

  useEffect(() => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let a = document.getElementById("btn-register");
    let b = document.getElementById("btn-login");
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

  useEffect(() => {
    // login google
    console.log("login Google");
    if (googleProfile && googleProfile.profile != null) {
      history.push("/profile-pynk");
    }
  }, [googleProfile]);

  useMemo(() => {
    //for valied email suddenly
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailRegister)) {
      setIsEmailRegisterError("formatEmail");
    } else {
      setIsEmailRegisterError("default");
    }
  }, [emailRegister]);

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
                    className={
                      isFirstNameEmpty ? "invalid-field" : "input-field"
                    }
                  />
                  {isFirstNameEmpty && (
                    <p className="empty-text">กรุณาระบุข้อมูล</p>
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
                    className={
                      isLastNameEmpty ? "invalid-field" : "input-field"
                    }
                  />
                  {isLastNameEmpty && (
                    <p className="empty-text">กรุณาระบุข้อมูล</p>
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
                    className={isPhoneEmpty ? "invalid-field" : "input-field"}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  {isPhoneEmpty && (
                    <p className="empty-text">กรุณาระบุข้อมูล</p>
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
                      isEmailRegisterEmpty || isEmailRegisterError !== "default"
                        ? "invalid-field"
                        : "input-field"
                    }
                  />
                  {isEmailRegisterEmpty && (
                    <p className="empty-text">กรุณาระบุข้อมูล</p>
                  )}
                  {isEmailRegisterError === "formatEmail" && (
                    <p style={{ color: "red" }}>รูปแบบอีเมลไม่ถูกต้อง</p>
                  )}
                  {isRegisterFail === "invalidRegister" && (
                    <div className="empty-text hasEmail">
                      <p style={{ marginBottom: "0px" }}>
                        มีข้อมูลอีเมลนี้ในระบบแล้ว
                      </p>
                      <p style={{ marginBottom: "0px" }}>
                        กรุณาสมัครใช้งานด้วยอีเมลอื่นหรือเลือกเข้าสู่ระบบ
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="two-forms">
                <div className="input-box">
                  <label for="password">
                    รหัสผ่าน <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type={showPasswordRegister ? "text" : "password"}
                    placeholder="ระบุรหัสผ่าน"
                    id="passwordRegister"
                    value={passwordRegister}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      isPasswordRegisterEmpty ? "invalid-field" : "input-field"
                    }
                  />
                  <button
                    id="showPasswordButtonRegister"
                    onClick={togglePasswordVisibility}
                  >
                    {showPasswordRegister ? "ซ่อน" : "แสดง"}
                  </button>
                  {isPasswordRegisterEmpty && (
                    <p className="empty-text">กรุณาระบุข้อมูล</p>
                  )}
                  <div style={{ textAlign: "left" }}>
                    <div className="d-flex">
                      <div
                        className="check-icon-default"
                        style={{
                          backgroundColor:
                            isPasswordValid === "valid"
                              ? "#09A969"
                              : isPasswordValid === "invalid"
                              ? "#DC061E"
                              : "#ACACAC",
                        }}
                      >
                        {isPasswordValid === "invalid" ? (
                          <i class="fa-solid fa-xmark"></i>
                        ) : (
                          <i class="fa-solid fa-check"></i>
                        )}
                      </div>
                      <p
                        className="check-text-password"
                        style={{
                          color:
                            isPasswordValid === "invalid" ? "#DC061E" : "#000",
                        }}
                      >
                        รหัสผ่านมีความยาวอย่างน้อย 6 ตัวอักษร
                      </p>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <div className="d-flex">
                        <div
                          className="check-icon-default"
                          style={{
                            backgroundColor:
                              hasUpperCase === "valid"
                                ? "#09A969"
                                : hasUpperCase === "invalid"
                                ? "#DC061E"
                                : "#ACACAC",
                          }}
                        >
                          {hasUpperCase === "invalid" ? (
                            <i class="fa-solid fa-xmark"></i>
                          ) : (
                            <i class="fa-solid fa-check"></i>
                          )}
                        </div>
                        <p
                          className="check-text-password"
                          style={{
                            color:
                              hasUpperCase === "invalid" ? "#DC061E" : "#000",
                          }}
                        >
                          มีตัวอักษร A-Z อย่างน้อย 1 ตัว
                        </p>
                      </div>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <div className="d-flex">
                        <div
                          className="check-icon-default"
                          style={{
                            backgroundColor:
                              hasNumber === "valid"
                                ? "#09A969"
                                : hasNumber === "invalid"
                                ? "#DC061E"
                                : "#ACACAC",
                          }}
                        >
                          {hasNumber === "invalid" ? (
                            <i class="fa-solid fa-xmark"></i>
                          ) : (
                            <i class="fa-solid fa-check"></i>
                          )}
                        </div>
                        <p
                          className="check-text-password"
                          style={{
                            color: hasNumber === "invalid" ? "#DC061E" : "#000",
                          }}
                        >
                          มีตัวเลข 0-9 อย่างน้อย 1 ตัว
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-box">
                  <label for="confirm-password">
                    ยืนยันรหัสผ่าน <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="ระบุรหัสผ่านอีกครั้ง"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      isConfirmPasswordEmpty ? "invalid-field" : "input-field"
                    }
                  />
                  <button
                    id="showPasswordButtonRegisterConfirm"
                    onClick={togglePasswordVisibility}
                  >
                    {showPasswordConfirm ? "ซ่อน" : "แสดง"}
                  </button>
                  {isConfirmPasswordEmpty && (
                    <p className="empty-text">กรุณาระบุข้อมูล</p>
                  )}
                  {!isConfirmPasswordMatch && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        textAlign: "left",
                      }}
                    >
                      รหัสผ่านที่ตั้งไม่ตรงกัน กรุณาตรวจสอบความถูกต้อง
                    </p>
                  )}
                </div>
              </div>
              {statusRegister === "loading" ? (
                <div className="spinner-box">
                  <div className="spinner"></div>
                </div>
              ) : firstName &&
                lastName &&
                phone &&
                emailRegister &&
                passwordRegister &&
                confirmPassword &&
                isConfirmPasswordMatch &&
                isPasswordValid === "valid" &&
                hasUpperCase === "valid" &&
                hasNumber === "valid" &&
                isEmailRegisterError !== "formatEmail" ? (
                <div className="input-box">
                  <input
                    onClick={handleRegister}
                    type="submit"
                    className="submit"
                    value={"ดำเนินการต่อ"}
                  />
                </div>
              ) : (
                <div className="input-box">
                  <input
                    type="submit"
                    className="submit"
                    value={"ดำเนินการต่อ"}
                    style={{ cursor: "default", backgroundColor: "#C3C3C3" }}
                  />
                </div>
              )}
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
                      ? "invalid-field"
                      : "input-field"
                  }
                />
                {isEmailEmpty && <p className="empty-text">กรุณาระบุข้อมูล</p>}
                {isEmailError === "formatEmail" && (
                  <p style={{ color: "red" }}>รูปแบบอีเมลไม่ถูกต้อง</p>
                )}
              </div>
              <div className="input-box">
                <label for="password">
                  รหัสผ่าน <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type={showPasswordLogin ? "text" : "password"}
                  placeholder="ระบุรหัสผ่าน"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={isPasswordEmpty ? "invalid-field" : "input-field"}
                />
                <button
                  id="showPasswordButtonLogin"
                  onClick={togglePasswordVisibility}
                >
                  {showPasswordLogin ? "ซ่อน" : "แสดง"}
                </button>
                {isPasswordEmpty ? (
                  <p className="empty-text">กรุณาระบุข้อมูล</p>
                ) : (
                  ""
                )}
              </div>
              <a href="#" className="forgot-password">
                ลืมรหัสผ่าน?
              </a>

              {statusLogin === "loading" ? (
                <div className="spinner-box">
                  <div className="spinner"></div>
                </div>
              ) : email && password ? (
                <div className="input-box">
                  <input
                    onClick={handleLogin}
                    type="submit"
                    className="submit"
                    value={"ดำเนินการต่อ"}
                  />
                </div>
              ) : (
                <div className="input-box">
                  <input
                    type="submit"
                    className="submit"
                    value={"ดำเนินการต่อ"}
                    style={{ cursor: "default", backgroundColor: "#C3C3C3" }}
                  />
                  <h6 style={{ color: "#4F4F4F", marginTop: 10 }}>
                    หรือเข้าสู่ระบบด้วย
                  </h6>
                </div>
              )}

              {isLoginError === "invalidLogin" && (
                <p style={{ color: "red" }}>อีเมลหรือรหัสผ่านไม่ถูกต้อง</p>
              )}

              <div className="login-path">
                <Stack flexDirection={"row"} gap={2} justifyContent={"center"}>
                  <GoogleLoginComponent />
                  <FaceBookLoginComponent />
                </Stack>
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
      </div>
    </div>
  );
};

export default Login;
