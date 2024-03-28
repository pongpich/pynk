import { React, useState, useEffect } from "react";
import "../css/shop_order_summary.css";
import checkGreen from "../../../assets/img/pynk/shop/Subtract.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Shop_error_payment = (props) => {
  const product = Cookies.get("product_name");
  const [order, setOrder] = useState(null);
  const [order_id, setOrder_id] = useState(null);
  const [username, setUsername] = useState(null);
  const [surname, setSurname] = useState(null);
  const [address, setAddress] = useState(null);
  const [subdistrict, setSubdistrict] = useState(null);
  const [district, setDistrict] = useState(null);
  const [province, setProvince] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [phone, setPhone] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const { pathname } = useLocation(null);

  useEffect(() => {
    setOrder(product && JSON.parse(product));
  }, []);
  useEffect(() => {
    setOrder_id(window.localStorage.getItem("order_id"));
    setUsername(window.localStorage.getItem("username"));
    setSurname(window.localStorage.getItem("surname"));
    setAddress(window.localStorage.getItem("address"));
    setSubdistrict(window.localStorage.getItem("subdistrict"));
    setDistrict(window.localStorage.getItem("district"));
    setProvince(window.localStorage.getItem("province"));
    setZipcode(window.localStorage.getItem("zipcode"));
    setPhone(window.localStorage.getItem("phone"));
    setPaymentMethod(window.localStorage.getItem("payment_method"));

    /*   const surname = ;
    const email = window.localStorage.getItem("email");
    const phone = window.localStorage.getItem("phone");
    const order_id = window.localStorage.getItem("order_id");


    const province = window.localStorage.getItem("province");
    const zipcode = window.localStorage.getItem("zipcode"); */
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // คำสั่งนี้จะเลื่อนหน้าไปที่ด้านบนสุดของหน้า
  }, [pathname]);

  const goBack = () => {
    Cookies.remove("product_name");
    props.history.push("/shop-payment"); // เปลี่ยนหน้าไปยัง '/shop'
  };
  console.log("username", username);

  const totalSum =
    order && order.reduce((acc, product) => acc + product.totalprice, 0);

  return (
    <div className="box-order-summary">
      <div className="background-order-summary row">
        <div className="position-relative justify-content">
          <div className="box-promptPay">
            <div class="col-12 col-md-10  col-lg-7">
              <div className="order-details background-promptPay">
                <div className="justify-content">
                  <img src={checkGreen} className="check-success-img" />
                </div>
                <p className="text-head-order-summary text-center">
                  ชำระเงินไม่สำเร็จ
                </p>
                <p className="text-center order-number">
                  หมายเลขคำสั่งซื้อ PYNK-{order_id && order_id}
                </p>
                <p className="text-head-order-summary  between">
                  รายละเอียดการสั่งซื้อ{" "}
                  {/*  <span className="edit-order">แก้ไข</span> */}
                </p>
                <p className="text-order">
                  ชื่อ {username && username} นามสกุล {surname && surname}
                </p>
                <p className="text-order">
                  ที่อยู่: {address && address} ตำบล/แขวง:{" "}
                  {subdistrict && subdistrict} อำเภอ/เขต: {district && district}{" "}
                  จังหวัด: {province && province} รหัสไปรษณีย์:{" "}
                  {zipcode && zipcode}
                </p>
                <p className="text-order">
                  {phone &&
                    phone.slice(0, 3) +
                      "-" +
                      phone.slice(3, 6) +
                      "-" +
                      phone.slice(6)}
                </p>
                <div className="line-hr-order" />
                <p className="text-head-order-summary">สรุปรายการสั่งซื้อ</p>

                {order &&
                  order.map((item, index) => (
                    <>
                      <div className="text-order between">
                        <p className="col-8">{item.name}</p>
                        <p>{item && item.totalprice.toLocaleString()} บาท</p>
                      </div>
                    </>
                  ))}

                <p className="text-order between">
                  ค่าจัดส่ง <span className="text-head-order-summary">ฟรี</span>
                </p>
                <div className="line-hr-order" />
                <p className="between text-order">
                  วิธีชำระเงิน
                  {paymentMethod === "qr_code" && <span>QR Code</span>}
                  {paymentMethod === "credit_card" && <span>Credit Card</span>}
                </p>
                <p className="amount-be-paid between">
                  ยอดที่ต้องชำระ{" "}
                  <span>{totalSum && totalSum.toLocaleString()} บาท</span>
                </p>
              </div>
              <p className="text-center please-contact">
                หากต้องการแก้ไขข้อมูลการจัดส่ง กรุณาติดต่อ 02-xxx-xxxx
              </p>
              <div className="justify-content">
                <div className="col-12 col-md-8">
                  <button
                    type="submit"
                    className="btn-buy-payment"
                    onClick={goBack}
                  >
                    กลับหน้าแรก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_error_payment;
