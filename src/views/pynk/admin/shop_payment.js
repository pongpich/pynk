import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { create_order, clear_status } from "../../../redux/pynk/orders";
import "../css/shop_order_summary.css";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../footer";
import InputAddress from "react-thailand-address-autocomplete";

import { updateAddressPynk } from "../../../redux/pynk/auth";

import qrcode from "../../../assets/img/pynk/shop/qrcode.png";
import prompt_pay from "../../../assets/img/pynk/shop/promptPay.png";
import Visa from "../../../assets/img/pynk/shop/Visa.png";
import Mastercard from "../../../assets/img/pynk/shop/Mastercard.png";
import check from "../../../assets/img/pynk/shop/check.png";
import qrcode_pay from "../../../assets/img/pynk/shop/qrcode-pay.png";

const Shop_payment = () => {
  const history = useHistory();
  const [statusContinue, setStatusContinue] = useState(1);
  const [statusStep, setStatusStep] = useState(0);
  const [pageUrl, setPageUrl] = useState(window.location.href);
  const product = Cookies.get("product_name");
  const [order, setOrder] = useState(null);

  const dispatch = useDispatch();

  const user = useSelector(({ auth }) => (auth ? auth.user : ""));

  const [formData, setFormData] = useState({
    username: user ? user.first_name : "",
    surname: user ? user.last_name : "",
    phone_number: user ? user.phone : "",
    email: user ? user.email : "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zipcode: "",
    order_notes: "",
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

  const [selectedPaymentMethod, setselectedPaymentMethod] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // คำสั่งนี้จะเลื่อนหน้าไปที่ด้านบนสุดของหน้า
  }, [pathname]);

  // ฟังก์ชันที่จะเรียกเมื่อ radio button ถูกเลือก
  const handleRadioChange = (event) => {
    /* setselectedPaymentMethod(event.target.value); */
    setselectedPaymentMethod(event);

    console.log("selectedPaymentMethod :", selectedPaymentMethod);
  };

  const status_create_order = useSelector(({ orders }) =>
    orders ? orders.status_create_order : ""
  );

  const current_order_id = useSelector(({ orders }) =>
    orders ? orders.current_order_id : ""
  );

  useEffect(() => {
    //สั่ง clear_status ทุกครั้งเมื่อเริ่มเปิดหน้านี้มา
    dispatch(clear_status());
  }, []);
  useEffect(() => {
    setOrder(product && JSON.parse(product));
  }, []);
  useEffect(() => {
    if (user) {
      const addressUser = user && JSON.parse(user.address);
      setFormData({
        ...formData,
        address: user ? addressUser.address : "",
        subdistrict: user ? addressUser.subdistrict : "",
        district: user ? addressUser.district : "",
        province: user ? addressUser.province : "",
        zipcode: user ? addressUser.zipcode : "",
      });
    }
  }, []);

  useEffect(() => {
    setOrder(product && JSON.parse(product));
  }, [product]);

  useEffect(() => {
    /*     if (!user) { */
    const getUsername = window.localStorage.getItem("username");
    const getSurname = window.localStorage.getItem("surname");
    const getEmail = window.localStorage.getItem("email");
    const getPhone = window.localStorage.getItem("phone");
    const getAddress = window.localStorage.getItem("address");
    const getSubdistrict = window.localStorage.getItem("subdistrict");
    const getDistrict = window.localStorage.getItem("district");
    const getProvince = window.localStorage.getItem("province");
    const getZipcode = window.localStorage.getItem("zipcode");

    setFormData({
      ...formData,
      username: getUsername,
      surname: getSurname,
      email: getEmail,
      phone_number: getPhone,
      address: getAddress,
      subdistrict: getSubdistrict,
      district: getDistrict,
      province: getProvince,
      zipcode: getZipcode,
    });
  }, []);

  useEffect(() => {
    if (status_create_order === "default") {
      setStatusStep(0);
    }

    //เช็คว่า create_order เสร็จ
    if (status_create_order === "success") {
      const totalSum =
        order && order.reduce((acc, product) => acc + product.totalprice, 0);

      //setค่าต่างๆของสินค้า ใน localStorage เพื่อไปเรียกใช้ที่หน้าจ่ายเงิน
      window.localStorage.setItem(
        "price",
        totalSum && totalSum.toLocaleString()
      );
      window.localStorage.setItem("productName", "pynk");
      window.localStorage.setItem("username", formData.username);
      window.localStorage.setItem("surname", formData.surname);
      window.localStorage.setItem(
        "name",
        `${formData.username} ${formData.surname}`
      );
      window.localStorage.setItem("email", formData.email);
      window.localStorage.setItem("phone", formData.phone_number);
      window.localStorage.setItem("order_id", current_order_id);
      window.localStorage.setItem("address", formData.address);
      window.localStorage.setItem("subdistrict", formData.subdistrict);
      window.localStorage.setItem("district", formData.district);
      window.localStorage.setItem("province", formData.province);
      window.localStorage.setItem("zipcode", formData.zipcode);
      window.localStorage.setItem("payment_method", selectedPaymentMethod);

      //เช็คช่องทางการจ่ายเงินที่ผู้ใช้เลือก
      if (selectedPaymentMethod == "qr_code") {
        history.push("/qr_checkout_pynk");
      }
      if (selectedPaymentMethod == "credit_card") {
        history.push("/cc_token_pynk");
      }
    }
  }, [status_create_order]);

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
    if (formData.checked != true) {
      newErrors.checked = "Checkbox must be checked";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    console.log("name", name, type, checked, value);

    if (name == "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        ["checked"]: type == "checkbox" ? checked : checked,
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
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

  const handleSubmit = async (event) => {
    const totalSum =
      order && order.reduce((acc, product) => acc + product.totalprice, 0);

    event.preventDefault();
    const product_list = order;
    const customer_data = {
      name: formData.username,
      last_name: formData.surname,
      phone_number: formData.phone_number,
      email: formData.email,
    };

    const shipping_address = {
      address: formData.address,
      province: formData.province,
      district: formData.district,
      subdistrict: formData.subdistrict,
      zipcode: formData.zipcode,
    };

    dispatch(
      create_order(
        user ? user.user_id : null, //user_id, ถ้าสมัครสมาชิกก่อนซื้อจะมี user_id / ถ้าไม่สมัครจะเป็น NULL
        product_list, //product_list,
        totalSum && totalSum.toLocaleString(), //total_amount,
        customer_data, //customer_data,
        shipping_address, //shipping_address,
        formData.order_notes, //note
        selectedPaymentMethod //payment_method
      )
    );
  };

  function onPayment() {
    history.push("/shop_details");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      setStatusStep(1);
      window.scrollTo(0, 0);
      // update ที่อยู่กรณีที่ไม่เคยมี
      if (user) {
        let userAddress = {
          address: formData && formData.address,
          subdistrict: formData && formData.subdistrict,
          district: formData && formData.district,
          province: formData && formData.province,
          zipcode: formData && formData.zipcode,
        };

        dispatch(
          updateAddressPynk(
            user ? user.user_id : null, //user_id, ถ้าสมัครสมาชิกก่อนซื้อจะมี user_id / ถ้าไม่สมัครจะเป็น NULL
            formData ? userAddress : null,
            "false"
          )
        );
      }
    }
  };

  const customerInformation = () => {
    const totalSum =
      order && order.reduce((acc, product) => acc + product.totalprice, 0);

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
              <form className="mt-32 " /*  onSubmit={handleSubmit} */>
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
                          เเขวง/ตำบล{" "}
                          <span className="login-payment-span">*</span>
                        </p>

                        <InputAddress
                          address="subdistrict"
                          style={{ ...baseStyle }}
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
                          เขต/อำเภอ{" "}
                          <span className="login-payment-span">*</span>
                        </p>
                        <InputAddress
                          address="district"
                          style={{ ...baseStyle }}
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
                          จังหวัด <span className="login-payment-span">*</span>
                        </p>
                        <InputAddress
                          address="province"
                          style={{ ...baseStyle }}
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
                          รหัสไปรษณีย์{" "}
                          <span className="login-payment-span">*</span>
                        </p>
                        <InputAddress
                          address="zipcode"
                          style={{ ...baseStyle }}
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
                        name="order_notes"
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
                  <button
                    onClick={onSubmit}
                    /* type="submit" */ className="btn-buy-payment"
                  >
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

                {order &&
                  order.map((item, index) => (
                    <>
                      <div className="text-order between">
                        <p className="col-8">{item.name}</p>
                        <p>{item.totalprice.toLocaleString()} บาท</p>
                      </div>
                    </>
                  ))}

                <p className="text-order between">
                  ค่าจัดส่ง <span className="text-head-order-summary">ฟรี</span>
                </p>
                <div className="line-hr-order" />
                <p className="amount-be-paid between">
                  ยอดที่ต้องชำระ{" "}
                  <span>{totalSum && totalSum.toLocaleString()} บาท</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const orderOetails = () => {
    const totalSum =
      order && order.reduce((acc, product) => acc + product.totalprice, 0);
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
                  <div
                    className="form-payment cursor-pointer"
                    onClick={() => handleRadioChange("qr_code")}
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input2"
                        type="radio"
                        name="payment_method"
                        value="qr_code"
                        checked={selectedPaymentMethod === "qr_code"} // ตรวจสอบค่าถูกเลือก
                        /*  onChange={handleRadioChange} */
                      />
                      <label
                        class="form-check-label label-prompt_pay"
                        for="flexRadioDefault1"
                      >
                        QR Code/พร้อมเพย์
                      </label>
                      <div className="show-payment">
                        <img src={qrcode} className="" />
                        <img src={prompt_pay} className="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="form-payment cursor-pointer"
                    onClick={() => handleRadioChange("credit_card")}
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input2"
                        type="radio"
                        name="payment_method"
                        value="credit_card"
                        checked={selectedPaymentMethod === "credit_card"} // ตรวจสอบค่าถูกเลือก
                        /*  onChange={handleRadioChange} */
                      />
                      <label
                        class="form-check-label label-prompt_pay"
                        for="flexRadioDefault1"
                      >
                        บัตรเครดิต
                      </label>
                      <div className="show-payment">
                        <img src={Visa} className="" />
                        <img src={Mastercard} className="" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-payment">
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
                  </div> */}
                  {/*  <div className="form-payment">
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
                  </div> */}
                  <button
                    className={
                      statusContinue == 0
                        ? "btn-continue-payment"
                        : "btn-buy-payment"
                    }
                    onClick={handleSubmit}
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
                  <span className="edit-order" onClick={() => setStatusStep(0)}>
                    แก้ไข
                  </span>
                </p>
                <p className="text-order">
                  {formData.username} {formData.surname}
                </p>
                <p className="text-order">
                  ที่อยู่: {formData.address} ตำบล/แขวง: {formData.subdistrict}{" "}
                  อำเภอ/เขต: {formData.district} จังหวัด: {formData.province}{" "}
                  รหัสไปรษณีย์: {formData.zipcode}
                </p>
                <p className="text-order">{formData.phone_number}</p>
                <div className="line-hr-order" />
                <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>
                {order &&
                  order.map((item, index) => (
                    <>
                      <div className="text-order between">
                        <p className="col-8">{item.name}</p>
                        <p>{item.totalprice.toLocaleString()} บาท</p>
                      </div>
                    </>
                  ))}
                <p className="text-order between">
                  ค่าจัดส่ง <span className="text-head-order-summary">ฟรี</span>
                </p>
                <div className="line-hr-order" />
                <p className="amount-be-paid between">
                  ยอดที่ต้องชำระ{" "}
                  <span>{totalSum && totalSum.toLocaleString()} บาท</span>
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

  //   Cookies.remove('username'); ลบ Cookies;

  /* console.log("order", order); */
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
