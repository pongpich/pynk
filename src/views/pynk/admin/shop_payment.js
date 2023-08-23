import { React, useState, useEffect } from "react";
import "../css/shop_order_summary.css";
import Footer from "../footer";
import InputAddress from "react-thailand-address-autocomplete";

import qrcode from "../../../assets/img/pynk/shop/qrcode.png";
import promptPay from "../../../assets/img/pynk/shop/promptPay.png";
import Visa from "../../../assets/img/pynk/shop/Visa.png";
import Mastercard from "../../../assets/img/pynk/shop/Mastercard.png";
import check from "../../../assets/img/pynk/shop/check.png";
import qrcode_pay from "../../../assets/img/pynk/shop/qrcode-pay.png";

const Shop_payment = () => {
  const [statusContinue, setStatusContinue] = useState(0);
  const [statusStep, setStatusStep] = useState(2);

  const [formData, setFormData] = useState({
    username: "",
    surname: "",
    phone_number: "",
    email: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zipcode: "",
    checked: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    surname: "",
    phone_number: "",
    email: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zipcode: "",
    order_notes: "",
    checked: false,
  });

  const validate = () => {
    let isValid = true;

    const newErrors = {};

    // username validation
    if (!formData.username.trim()) {
      newErrors.username = "username is required";
      isValid = false;
    }
    // surname validation
    if (!formData.surname.trim()) {
      newErrors.surname = "surname is required";
      isValid = false;
    }
    // phone_number validation
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "phone_number is required";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Email format is invalid";
      isValid = false;
    }

    // address validation
    if (!formData.address.trim()) {
      newErrors.address = "address is required";
      isValid = false;
    }
    // subdistrict validation
    if (!formData.subdistrict.trim()) {
      newErrors.subdistrict = "subdistrict is required";
      isValid = false;
    }
    // district validation
    if (!formData.district.trim()) {
      newErrors.district = "district is required";
      isValid = false;
    }
    // province validation
    if (!formData.province.trim()) {
      newErrors.province = "province is required";
      isValid = false;
    }
    // zipcode validation
    if (!formData.zipcode.trim()) {
      newErrors.zipcode = "zipcode is required";
      isValid = false;
    }
    // checked validation
    if (!formData.checked) {
      newErrors.checked = "Checkbox must be checked";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    if (name == "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleAddressChange = (value) => {
    setFormData({
      ...formData,
      address: value.address,
      subdistrict: value.subdistrict,
      district: value.district,
      province: value.province,
      zipcode: value.zipcode,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validate()) {
      console.log("เงื่อนไงผ่าน");
    }
  };

  const customerInformation = () => {
    console.log("formData.checkbox", formData.checkbox);
    return (
      <div className="box-form-payment">
        <div className="box-row">
          <div className="box-circle">
            <div className="circle-number">
              <span className="circle-span">1</span>
            </div>
            <p className="circle-p">รายละเอียดการสั่งซื้อ</p>
          </div>
          <div className="box-line-placeholder">
            <div className="box-line-pink" />
          </div>
          <div className="box-circle">
            <div className="circle-number-bg">
              <span className="circle-span-disabled">2</span>
            </div>
            <p className="circle-p">ชำระเงิน</p>
          </div>
          <div className="box-line-placeholder line-mr"></div>
          <div className="box-circle">
            <div className="circle-number-bg">
              <span className="circle-span-disabled">3</span>
            </div>
            <p className="circle-p circle-p-none">เสร็จสิ้น</p>
          </div>
        </div>
        <div className="hr-line-white" />
        <div className="col-12  mt-col">
          <div class="row">
            <div class="col-12 col-md-7 order-2 order-md-1 mt-32-576">
              <p className="text-head-order-summary">เลือกวิธีการชำระเงิน</p>
              <form className="mt-32 " onSubmit={handleSubmit}>
                <div className="input-password">
                  <div class="mb-3 row">
                    <div className="col-12 col-md-6">
                      <div className="customer-first-child-r">
                        <p className="text-login-payment">
                          ชื่อ <span className="login-payment-span">*</span>
                        </p>
                        <input
                          type="text"
                          className="input-form-login"
                          placeholder="กรุณาระบุชื่อ"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                        />
                        {errors.username && (
                          <div className="error-from">{errors.username}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="customer-first-child-l">
                        <p className="text-login-payment">
                          นามสกุล <span className="login-payment-span">*</span>
                        </p>
                        <input
                          type="text"
                          className="input-form-login"
                          placeholder="กรุณาระบุนามสกุล"
                          id="surname"
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                        />
                        {errors.surname && (
                          <div className="error-from">{errors.surname}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <div className="col-12 col-md-6">
                      <div className="customer-first-child-r">
                        <p className="text-login-payment">
                          เบอร์โทรศัพท์{" "}
                          <span className="login-payment-span">*</span>
                        </p>
                        <input
                          type="text"
                          className="input-form-login"
                          placeholder="กรุณาระบุเบอร์โทรศัพท์ที่สามารถติดต่อได้"
                          id="phone_number"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                        />
                        {errors.phone_number && (
                          <div className="error-from">
                            {errors.phone_number}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="customer-first-child-l">
                        <p className="text-login-payment">
                          อีเมล <span className="login-payment-span">*</span>
                        </p>
                        <input
                          type="email"
                          className="input-form-login"
                          placeholder="example@mail.com"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <div className="error-from">{errors.email}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-head-order-summary customer-mt">
                    ที่อยู่จัดส่งสินค้า
                  </p>
                  <div className="col-12 col-md-12">
                    <p className="text-login-payment">
                      ที่อยู่ <span className="login-payment-span">*</span>
                    </p>
                    <input
                      type="text"
                      className="input-form-login"
                      placeholder="Placeholder"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {errors.address && (
                      <div className="error-from">{errors.address}</div>
                    )}
                  </div>
                  <div class="mb-3 row">
                    <div className="col-12 col-md-6">
                      <div className="customer-first-child-r">
                        <p className="text-login-payment">
                          จังหวัด <span className="login-payment-span">*</span>
                        </p>
                        <InputAddress
                          address="province"
                          style={{
                            width: "100%",
                            height: "42px",
                            marginTop: "-8px",
                            marginBottom: "16px",
                            borderRadius: "8px",
                            border: "1px solid #4A4A4A",
                          }}
                          value={formData.province}
                          onChange={handleChange}
                          onSelect={handleAddressChange}
                          placeholder="Placeholder"
                        />
                        {errors.province && (
                          <div className="error-from">{errors.province}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="customer-first-child-l">
                        <p className="text-login-payment">
                          เขต/อำเภอ{" "}
                          <span className="login-payment-span">*</span>
                        </p>
                        <InputAddress
                          address="province"
                          style={{
                            width: "100%",
                            height: "42px",
                            marginTop: "-8px",
                            marginBottom: "16px",
                            borderRadius: "8px",
                            border: "1px solid #4A4A4A",
                          }}
                          value={formData.district}
                          onChange={handleChange}
                          onSelect={handleAddressChange}
                          placeholder="Placeholder"
                        />
                        {errors.district && (
                          <div className="error-from">{errors.district}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <div className="col-12 col-md-6">
                      <div className="customer-first-child-r">
                        <p className="text-login-payment">
                          เเขวง/ตำบล{" "}
                          <span className="login-payment-span">*</span>
                        </p>

                        <InputAddress
                          address="province"
                          style={{
                            width: "100%",
                            height: "42px",
                            marginTop: "-8px",
                            marginBottom: "16px",
                            borderRadius: "8px",
                            border: "1px solid #4A4A4A",
                          }}
                          value={formData.subdistrict}
                          onChange={handleChange}
                          onSelect={handleAddressChange}
                          placeholder="Placeholder"
                        />

                        {errors.subdistrict && (
                          <div className="error-from">{errors.subdistrict}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="customer-first-child-l">
                        <p className="text-login-payment">
                          รหัสไปรษณีย์{" "}
                          <span className="login-payment-span">*</span>
                        </p>
                        <InputAddress
                          address="province"
                          style={{
                            width: "100%",
                            height: "42px",
                            marginTop: "-8px",
                            marginBottom: "16px",
                            borderRadius: "8px",
                            border: "1px solid #4A4A4A",
                          }}
                          value={formData.zipcode}
                          onChange={handleChange}
                          onSelect={handleAddressChange}
                          placeholder="Placeholder"
                        />

                        {errors.zipcode && (
                          <div className="error-from">{errors.zipcode}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <div className="col-12">
                      <p className="text-login-payment">
                        หมายเหตุการสั่งซื้อสินค้า //
                      </p>
                      <textarea
                        style={{
                          width: "100%",
                          padding: "16px",
                        }}
                        class="input-form-login"
                        placeholder="หมายเหตุเกี่ยวกับการสั่งซื้อของคุณ เช่น ต้องการห่อของขวัญ  เป็นต้น"
                        rows="10"
                        id="order_notes"
                        name="phone_number"
                        value={formData.order_notes}
                        onChange={handleChange}
                      ></textarea>

                      {errors.subdistrict && (
                        <div className="error-from">{errors.subdistrict}</div>
                      )}
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      value={formData.checked}
                      onChange={handleChange}
                    />
                    <label
                      class="text-login-payment condition"
                      for="flexCheckDefault"
                    >
                      ข้าพเจ้าต้องการรับข่าวสาร, สิทธิพิเศษและโปรโมชัน จาก Pynx
                      ตามที่ระบุไว้ใน นโยบายความเป็นส่วนตัว
                    </label>
                  </div>
                  {errors.checked && (
                    <div className="error-from mt-1">{errors.checked}</div>
                  )}
                  <button type="submit" className="btn-buy-payment">
                    ชำระเงิน
                  </button>
                  <p className="text-login-payment">
                    การคลิกที่ปุ่ม ถือว่าคุณได้ยอมรับใน
                    <span className="condition-span">
                      {" "}
                      ข้อกำหนดและเงื่อนไข
                    </span>{" "}
                    และ
                    <span className="condition-span">
                      {" "}
                      นโยบายความเป็นส่วนตัว
                    </span>
                  </p>
                </div>
              </form>
            </div>
            <div class="col-12 col-md-5 order-1 order-md-2">
              <div className="order-details">
                <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>
                <div className="text-order between">
                  <p className="col-8">
                    x1 FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”
                  </p>
                  <p>900 บาท</p>
                </div>
                <p className="text-order between">
                  ค่าจัดส่ง <span className="text-head-order-summary">ฟรี</span>
                </p>
                <div className="line-hr-order" />
                <p className="amount-be-paid between">
                  ยอดที่ต้องชำระ <span>900 บาท</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const orderOetails = () => {
    return (
      <div className="box-form-payment">
        <div className="box-row">
          <div className="box-circle">
            <div className="circle-number-darkest">
              <img src={check} className="check-image" />
            </div>
            <p className="circle-p">รายละเอียดการสั่งซื้อ</p>
          </div>
          <div className="box-line-placeholder">
            <div className="box-line-pink-max" />
          </div>
          <div className="box-circle">
            <div className="circle-number">
              <span className="circle-span">2</span>
            </div>
            <p className="circle-p">ชำระเงิน</p>
          </div>
          <div className="box-line-placeholder line-mr">
            <div className="box-line-pink" />
          </div>
          <div className="box-circle">
            <div className="circle-number-bg">
              <span className="circle-span-disabled">3</span>
            </div>
            <p className="circle-p circle-p-none">เสร็จสิ้น</p>
          </div>
        </div>
        <div className="hr-line-white" />
        <div className="col-12  mt-col">
          <div class="row">
            <div class="col-12 col-md-7 order-2 order-md-1 mt-32-576">
              <p className="text-head-order-summary">เลือกวิธีการชำระเงิน</p>
              <div className="mt-32 ">
                <div className="input-password">
                  <div className="form-payment">
                    <div class="form-check">
                      <input
                        class="form-check-input2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        QR Code/พร้อมเพย์
                      </label>
                      <div className="show-payment">
                        <img src={qrcode} className="" />
                        <img src={promptPay} className="" />
                      </div>
                    </div>
                  </div>
                  <div className="form-payment">
                    <div class="form-check">
                      <input
                        class="form-check-input2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        บัตรเครดิต
                      </label>
                      <div className="show-payment">
                        <img src={Visa} className="" />
                        <img src={Mastercard} className="" />
                      </div>
                    </div>
                  </div>
                  <div className="form-payment">
                    <div class="form-check">
                      <input
                        class="form-check-input2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        ผ่อนชำระ 0%
                      </label>
                    </div>
                  </div>
                  <div className="form-payment">
                    <div class="form-check">
                      <input
                        class="form-check-input2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        เก็บเงินปลายทาง
                      </label>
                    </div>
                  </div>
                  <button
                    className={
                      statusContinue == 0
                        ? "btn-continue-payment"
                        : "btn-buy-payment"
                    }
                  >
                    ชำระเงิน
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-5 order-1 order-md-2">
              <div className="order-details">
                <p className="text-head-order-summary  between">
                  รายละเอียดการสั่งซื้อ{" "}
                  <span className="edit-order">แก้ไข</span>
                </p>
                <p className="text-order">ชื่อจริง นามสกุล</p>
                <p className="text-order">
                  เลขที่ 2533 ถนนสุขุมวิท แขวงบางจาก เขตพระโขนง จังหวัด
                  กรุงเทพมหานคร รหัสไปรษณีย์ 10260
                </p>
                <p className="text-order">090-900-9000</p>
                <div className="line-hr-order" />
                <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>
                <div className="text-order between">
                  <p className="col-8">
                    x1 FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”
                  </p>
                  <p>900 บาท</p>
                </div>
                <p className="text-order between">
                  ค่าจัดส่ง <span className="text-head-order-summary">ฟรี</span>
                </p>
                <div className="line-hr-order" />
                <p className="amount-be-paid between">
                  ยอดที่ต้องชำระ <span>900 บาท</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const promptPay = () => {
    return (
      <div className="box-promptPay">
        <div className="col-12">
          <div class="row">
            <div class="col-12 col-md-7  order-1 order-md-1  mt-32-576 mb-32-576">
              <div className="order-details  background-promptPay">
                <div className="padding-left-right">
                  <p className="text-qrcode-qrcode between">
                    เหลือเวลาชำระเงิน{" "}
                    <span className="text-pink">14:59 นาที</span>
                  </p>
                  <div className="justify-content">
                    <img src={qrcode_pay} className="qrcode-pay-image " />
                  </div>
                  <p className="text-qrcode-qrcode between">
                    Corporate Name{" "}
                    <span className="text-pink baht-promptPay">990 บาท</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-5 order-2 order-md-2">
              <div className="order-details background-promptPay">
                <p className="text-head-order-summary  between">
                  รายละเอียดการสั่งซื้อ{" "}
                  <span className="edit-order">แก้ไข</span>
                </p>
                <p className="text-order">ชื่อจริง นามสกุล</p>
                <p className="text-order">
                  เลขที่ 2533 ถนนสุขุมวิท แขวงบางจาก เขตพระโขนง จังหวัด
                  กรุงเทพมหานคร รหัสไปรษณีย์ 10260
                </p>
                <p className="text-order">090-900-9000</p>
                <div className="line-hr-order" />
                <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>
                <div className="text-order between">
                  <p className="col-8">
                    x1 FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”
                  </p>
                  <p>900 บาท</p>
                </div>
                <p className="text-order between">
                  ค่าจัดส่ง <span className="text-head-order-summary">ฟรี</span>
                </p>
                <div className="line-hr-order" />
                <p className="amount-be-paid between">
                  ยอดที่ต้องชำระ <span>900 บาท</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="box-order-summary">
        <div className="background-order-summary row">
          <div className="position-relative justify-content">
            {statusStep == 0
              ? customerInformation()
              : statusStep == 1
              ? orderOetails()
              : promptPay()}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Shop_payment;
