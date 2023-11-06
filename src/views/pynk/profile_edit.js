import React, { useState, useEffect } from "react";
import colors from "./colors";
import { useSelector, useDispatch } from "react-redux";
import { updateRegister, clearUpdateRegister } from "../../redux/pynk/auth";
import icon_profile from "../../assets/img/pynk/shop/profile.png";
import { useHistory } from "react-router-dom";
import rightContent from "../../assets/img/pynk/shop/RightContent.png";
import icon_facebook from "../../assets/img/pynk/shop/icon-facebook.png";
import icon_Google from "../../assets/img/pynk/shop/icon-Google.png";
import icon_line from "../../assets/img/pynk/shop/icon-line.png";
import InputAddress from "react-thailand-address-autocomplete";

import "./css/profile.css";

const Profile_edit = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));

  useEffect(() => {
    if (!user) {
      history.push("/home");
    }
  }, [user]);

  const statusUpdateRegister = useSelector(({ auth }) =>
    auth ? auth.statusUpdateRegister : ""
  );
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

  useEffect(() => {
    if (statusUpdateRegister == "success") {
      history.push("/profile-pynk");
      dispatch(clearUpdateRegister());
    }
  }, [statusUpdateRegister]);

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

  const handleAddressChange = (value) => {
    setFormData({
      ...formData,
      subdistrict: value.subdistrict,
      district: value.district,
      province: value.province,
      zipcode: value.zipcode,
    });
  };

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  const [formData, setFormData] = useState({
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zipcode: "",
  });

  const [errorsAddress, setErrorsAddress] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  const validate = () => {
    let isValid = true;

    const newErrors = {};

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.trim()) {
      newErrors.email = "กรุณาระบุข้อมูล";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
    }

    // password validation
    if (!password.trim()) {
      newErrors.password = "กรุณาระบุข้อมูล";
      isValid = false;
    }
    // first_name validation
    if (!first_name.trim()) {
      newErrors.first_name = "กรุณาระบุข้อมูล";
      isValid = false;
    }
    // last_name validation
    if (!last_name.trim()) {
      newErrors.last_name = "กรุณาระบุข้อมูล";
      isValid = false;
    }

    // phone validation
    if (!phone.trim()) {
      newErrors.phone = "กรุณาระบุข้อมูล";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
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
    }
  };

  const personalInformation = () => {
    return (
      <div>
        <p className="text-modal-body">ข้อมูลส่วนตัว</p>
        <div className="row row-16">
          <div className="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              ชื่อ <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={first_name}
              name="first_name"
              id="first_name"
              onChange={handleChange}
              placeholder="กรุณาระบุชื่อ"
            />
            {errors.first_name && (
              <div className="error-from">{errors.first_name}</div>
            )}
          </div>
          <div className="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              นามสกุล <span>*</span>
            </label>
            <input
              type="text"
              value={last_name}
              name="last_name"
              className="form-control"
              id="last_name"
              onChange={handleChange}
              placeholder="กรุณาระบุนามสกุล"
            />
            {errors.last_name && (
              <div className="error-from">{errors.last_name}</div>
            )}
          </div>
        </div>
        <div className="row row-16">
          <div className="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              เบอร์โทรศัพท์ที่ติดต่อได้ <span>*</span>
            </label>
            <input
              type="number"
              className="form-control"
              value={phone}
              id="phone"
              name="phone"
              onChange={handleChange}
              placeholder="0XX-XXX-XXXX"
            />
            {errors.phone && <div className="error-from">{errors.phone}</div>}
          </div>
        </div>
        <p className="text-modal-body mt-64">บัญชีเข้าใช้งาน</p>
        <div className="row row-16">
          <div className="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              อีเมลเข้าใช้งาน <span>*</span>
            </label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            {errors.email && <div className="error-from">{errors.email}</div>}
          </div>
          <div className="col-12 col-sm-12  col-md-6  mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              รหัสผ่าน <span>*</span>
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              id="password"
              onChange={handleChange}
              placeholder="name@example.com"
            />
            {errors.password && (
              <div className="error-from">{errors.password}</div>
            )}
          </div>
        </div>

        <div className="row row-16">
          <div className="col-12 col-sm-12 col-md-12 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
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
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    console.log("555");
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const addressInformation = () => {
    const baseStyle = {
      display: "block",
      height: "auto",
      width: "100%",
      padding: "0.375rem 0.75rem",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.5",
      color: "#212529",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #ced4da",
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      borderRadius: "0.375rem",
      transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
    };

    return (
      <div className="mb-5">
        <p className="text-modal-body">ข้อมูลที่อยู่</p>
        <div className="row row-16">
          <div className="col-12 col-sm-12 col-md-12 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              ที่อยู่ <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="กรุณาระบุชื่อ"
            />
          </div>
        </div>
        <div className="row row-16">
          <div className="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              เเขวง/ตำบล <span>*</span>
            </label>

            <InputAddress
              address="subdistrict"
              style={{ ...baseStyle }}
              value={formData.subdistrict}
              onChange={handleChange}
              onSelect={handleAddressChange}
              placeholder="เลือกเเขวง/ตำบล"
            />

            {errorsAddress.subdistrict && (
              <div className="error-from">{errorsAddress.subdistrict}</div>
            )}
          </div>
          <div className="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              เขต/อำเภอ <span>*</span>
            </label>
            <InputAddress
              address="district"
              style={{ ...baseStyle }}
              value={formData.district}
              onChange={handleChange}
              onSelect={handleAddressChange}
              placeholder="เลือกเเขวง/ตำบล"
            />
            {errorsAddress.district && (
              <div className="error-from">{errorsAddress.district}</div>
            )}
          </div>
        </div>
        <div className="row row-16">
          <div className="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              จังหวัด <span>*</span>
            </label>
            {/*  <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="เลือกจังหวัด"
            /> */}
            <InputAddress
              address="province"
              style={{ ...baseStyle }}
              value={formData.province}
              onChange={handleChange}
              onSelect={handleAddressChange}
              placeholder="Placeholder"
            />
            {errorsAddress.province && (
              <div className="error-from">{errorsAddress.province}</div>
            )}
          </div>
          <div className="col-12 col-sm-12 col-md-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              รหัสไปรษณีย์ <span>*</span>
            </label>
            {/* <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="เลือกรหัสไปรษณีย์"
            /> */}
            <InputAddress
              address="zipcode"
              style={{ ...baseStyle }}
              value={formData.zipcode}
              onChange={handleChange}
              onSelect={handleAddressChange}
              placeholder="Placeholder"
            />

            {errorsAddress.zipcode && (
              <div className="error-from">{errorsAddress.zipcode}</div>
            )}
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
