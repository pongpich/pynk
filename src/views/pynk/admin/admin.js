import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { login_admin, clear_status } from "../../../redux/pynk/auth";
import { useSelector, useDispatch } from "react-redux";

function Admin() {
  const history = useHistory();

  const [emailAdmin, setEmailAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");

  const [isLoginAdminError, setIsLoginAdminError] = useState("default");
  const [isEmailAdminError, setIsEmailAdminError] = useState("default");

  const [isEmailAdminEmpty, setIsEmailAdminEmpty] = useState(false);
  const [isPasswordAdminEmpty, setIsPasswordAdminEmpty] = useState(false);

  const handleChange = (event) => {
    var inputID = event.target.id;

    switch (inputID) {
      case "emailAdmin":
        setEmailAdmin(event.target.value);
        break;
      case "passwordAdmin":
        setPasswordAdmin(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleBlur = (event) => {
    var inputID = event.target.id;

    switch (inputID) {
      case "emailAdmin":
        if (emailAdmin.trim() === "") {
          setIsEmailAdminEmpty(true);
          setIsEmailAdminError("default");
        } else {
          setIsEmailAdminEmpty(false);
          if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAdmin)) {
            setIsEmailAdminError("formatEmail");
          } else {
            setIsEmailAdminError("default");
          }
        }
        break;
      case "passwordAdmin":
        if (passwordAdmin.trim() === "") {
          setIsPasswordAdminEmpty(true);
        } else {
          setIsPasswordAdminEmpty(false);
        }
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const statusLoginAdmin = useSelector(({ auth }) =>
    auth ? auth.statusLoginAdmin : ""
  );
  const user = useSelector(({ auth }) =>
    auth ? auth.user : ""
  );


  const handleLoginAdmin = () => {
    dispatch(login_admin(emailAdmin, passwordAdmin));
  };

  useEffect(() => {
    dispatch(clear_status());

    if (user && (user.authorization === "admin")) {
      history.push("/products_management");
    }

    if (user && (user.authorization !== "admin")) {
      history.push("/home");
    }

  }, []);

  useEffect(() => {
    if (statusLoginAdmin === "success") {
      history.push("/products_management");
    }
    if (statusLoginAdmin === "fail") {
      setIsLoginAdminError("invalidLoginAdmin");
    }
  }, [statusLoginAdmin]);

  return (
    <div>
      <div className="login-admin-container">
        <div className="bold mb-3 card text24 bg-dark text-white">Admin Login</div>
        <div className="input-box">
          <label for="email">
            อีเมลเข้าใช้งาน <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="Email ของ Admin"
            id="emailAdmin"
            value={emailAdmin}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              isEmailAdminEmpty || isEmailAdminError !== "default"
                ? "invalid-field"
                : "input-field"
            }
          />
          {isEmailAdminEmpty && <p className="empty-text">กรุณาระบุข้อมูล</p>}
          {isEmailAdminError === "formatEmail" && <p style={{ color: "red" }}>รูปแบบอีเมลไม่ถูกต้อง</p>}
        </div>
        <div className="input-box">
          <label for="password">
            รหัสผ่าน <span style={{ color: "red" }}>*</span>
          </label>
          <input
            /* type={showPasswordLogin ? "text" : "password"} */
            type="password"
            placeholder="ระบุรหัสผ่าน"
            id="passwordAdmin"
            value={passwordAdmin}
            onChange={handleChange}
            onBlur={handleBlur}
            className={isPasswordAdminEmpty ? "invalid-field" : "input-field"}
          />
          {/* <button
                  id="showPasswordButtonLogin"
                  onClick={togglePasswordVisibility}
                >
                  {showPasswordLogin ? "ซ่อน" : "แสดง"}
                </button> */}
          {isPasswordAdminEmpty && <p className="empty-text">กรุณาระบุข้อมูล</p>}
        </div>

        {statusLoginAdmin === "loading" ? (
          <div className="spinner-box">
            <div className="spinner"></div>
          </div>
        ) : emailAdmin && passwordAdmin ? (
          <div className="input-box submit-login">
            <input
              onClick={handleLoginAdmin}
              type="submit"
              className="submit"
              value={"ดำเนินการต่อ"}
            />
          </div>
        ) : (
          <div className="input-box submit-login">
            <input
              type="submit"
              className="submit"
              value={"ดำเนินการต่อ"}
              style={{ cursor: "default", backgroundColor: "#C3C3C3" }}
            />
          </div>
        )}

        {isLoginAdminError === "invalidLoginAdmin" && (
          <p style={{ color: "red" }}>
            อีเมลหรือรหัสผ่านไม่ถูกต้อง(ใช้ของแอดมินเข้าใช้เท่านั้น!!!)
          </p>
        )}
      </div>
    </div>
  );
}

export default Admin;
