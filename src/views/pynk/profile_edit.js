import React, { useState, useEffect } from "react";
import colors from "./colors";
import { useSelector, useDispatch } from "react-redux";
import { updateRegister } from "../../redux/pynk/auth";
import icon_profile from "../../assets/img/pynk/shop/profile.png";
import { useHistory } from "react-router-dom";
import rightContent from "../../assets/img/pynk/shop/RightContent.png";
import icon_facebook from "../../assets/img/pynk/shop/icon-facebook.png";
import icon_Google from "../../assets/img/pynk/shop/icon-Google.png";
import icon_line from "../../assets/img/pynk/shop/icon-line.png";

import "./css/profile.css";

const Profile_edit = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));
  const [statusProfile, setStatusProfile] = useState(1);
  const [id, setID] = useState(user && user.user_id);
  const [email, setEmail] = useState(user && user.email);
  const [password, setPassword] = useState(user && user.password);
  const [first_name, setFirst_name] = useState(user && user.first_name);
  const [last_name, setLast_name] = useState(user && user.last_name);
  const [phone, setPhone] = useState(user && user.phone);

  useEffect(() => {
    setEmail(user && user.email);
    setPassword(user && user.password);
    setFirst_name(user && user.first_name);
    setLast_name(user && user.last_name);
    setPhone(user && user.phone);
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // ใช้การแมปชื่อเพื่อตั้งค่าค่าที่เหมาะสม
    const setters = {
      first_name: setFirst_name,
      last_name: setLast_name,
      phone: setPhone,
      email: setEmail,
      password: setPassword,

      // เพิ่ม setter อื่น ๆ ตามความจำเป็น
    };

    if (setters[name]) {
      setters[name](value);
    }
  };

  const handleSubmit = () => {
    console.log("555");
    dispatch(
      updateRegister(
        user ? user.user_id : null, //user_id, ถ้าสมัครสมาชิกก่อนซื้อจะมี user_id / ถ้าไม่สมัครจะเป็น NULL
        email, //product_list,
        password, //total_amount,
        first_name, //customer_data,
        last_name, //shipping_address,
        phone //note
      )
    );
  };

  const personalInformation = () => {
    return (
      <div>
        <p className="text-modal-body">ข้อมูลส่วนตัว</p>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              ชื่อ <span>*</span>
            </label>
            <input
              type="text"
              class="form-control"
              value={first_name}
              name="first_name"
              id="first_name"
              onChange={handleChange}
              placeholder="กรุณาระบุชื่อ"
            />
          </div>
          <div class="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              นามสกุล <span>*</span>
            </label>
            <input
              type="text"
              value={last_name}
              name="last_name"
              class="form-control"
              id="last_name"
              onChange={handleChange}
              placeholder="กรุณาระบุนามสกุล"
            />
          </div>
        </div>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              เบอร์โทรศัพท์ที่ติดต่อได้ <span>*</span>
            </label>
            <input
              type="number"
              class="form-control"
              value={phone}
              id="phone"
              name="phone"
              onChange={handleChange}
              placeholder="0XX-XXX-XXXX"
            />
          </div>
        </div>
        <p className="text-modal-body mt-64">บัญชีเข้าใช้งาน</p>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              อีเมลเข้าใช้งาน <span>*</span>
            </label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              รหัสผ่าน <span>*</span>
            </label>
            <input
              type="password"
              name="password"
              value={password}
              class="form-control"
              id="password"
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-12 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              การเชื่อมต่อ
            </label>
            <div className="box-fa">
              <div className="connect-icon">
                <img src={icon_facebook} className="icon_facebook" />
                <p className="text-icon-connect">Facebook</p>
              </div>
              <button className="btn-connect ">Connect</button>
            </div>
            <div className="box-google">
              <div className="connect-icon">
                <img src={icon_Google} className="icon_facebook" />
                <p className="text-icon-connect">Google</p>
              </div>
              <button className="btn-connect ">Connect</button>
            </div>
            <div className="box-line">
              <div className="connect-icon">
                <img src={icon_line} className="icon_facebook" />
                <p className="text-icon-connect">Line</p>
              </div>
              <button className="btn-connect ">Connect</button>
            </div>
            <div className="row-16-button">
              <button className="save-profile" onClick={handleSubmit}>
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const addressInformation = () => {
    return (
      <div className="mb-5">
        <p className="text-modal-body">ข้อมูลที่อยู่</p>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-12 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              ที่อยู่ <span>*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="กรุณาระบุชื่อ"
            />
          </div>
        </div>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              เเขวง/ตำบล <span>*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="เลือกเเขวง/ตำบล"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              เขต/อำเภอ <span>*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="เลือกเขต/อำเภอ"
            />
          </div>
        </div>
        <div className="row row-16">
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              จังหวัด <span>*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="เลือกจังหวัด"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              รหัสไปรษณีย์ <span>*</span>
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="เลือกรหัสไปรษณีย์"
            />
          </div>
          <div className="row-16-button">
            <button className="save-profile">บันทึก</button>
          </div>
        </div>
      </div>
    );
  };

  const onBack = () => {
    history.push("/profile-pynk");
  };

  return (
    <div className="div-edit-profile">
      <div className="head-profile">
        <div className="image-head" />
        <div className="box-profile2">
          <div className="box-edit-profile row row-16">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="box-edit">
                <div className="icon-box-edit" onClick={onBack}>
                  <img src={icon_profile} className="icon-profile edit-icon" />
                  <p className="bebe-fit text-center">BeBe Fit</p>
                  <p className="username text-center">
                    @{user && user.first_name}
                  </p>
                </div>
                {/*  <p className="lv">LV: มือใหม่หัดฟิตหุ่น</p> */}
                <div
                  className={
                    statusProfile == 1
                      ? "box-right-text  box-right-active"
                      : "box-right-text"
                  }
                  onClick={() => setStatusProfile(1)}
                >
                  บัญชีของฉัน{" "}
                  <span>
                    {" "}
                    <img src={rightContent} className="icon-rightContent" />
                  </span>
                </div>
                <div
                  className={
                    statusProfile == 2
                      ? "box-right-text  box-right-active"
                      : "box-right-text"
                  }
                  onClick={() => setStatusProfile(2)}
                >
                  ข้อมูลที่อยู่{" "}
                  <span>
                    {" "}
                    <img src={rightContent} className="icon-rightContent" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
              <div className="from-profile">
                {statusProfile == 1
                  ? personalInformation()
                  : addressInformation()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_edit;
