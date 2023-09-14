import { React, useState, useEffect } from "react";
import "../css/shop_order_summary.css";
import Footer from "../footer";
import checkGreen from "../../../assets/img/pynk/shop/check-green.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Shop_successful_payment = () => {
  const product = Cookies.get("product_name");
  const [order, setOrder] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOrder(product && JSON.parse(product));
    /* Cookies.remove("product_name"); */
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // คำสั่งนี้จะเลื่อนหน้าไปที่ด้านบนสุดของหน้า
  }, [pathname]);
  useEffect(() => {
    //      Cookies.remove("product_name"); successful-payment
  }, [order]);

  console.log("order", order);
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
                  ชำระเงินสำเร็จ
                </p>
                <p className="text-center order-number">
                  หมายเลขคำสั่งซื้อ XXXXXXXXXXXXX
                </p>
                <p className="text-head-order-summary  between">
                  รายละเอียดการสั่งซื้อ{" "}
                  {/*  <span className="edit-order">แก้ไข</span> */}
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
                <p className="between text-order">
                  วิธีชำระเงิน <span>QR Code</span>
                </p>
                <p className="amount-be-paid between">
                  ยอดที่ต้องชำระ <span>900 บาท</span>
                </p>
              </div>
              <p className="text-center please-contact">
                หากต้องการแก้ไขข้อมูลการจัดส่ง กรุณาติดต่อ 02-xxx-xxxx
              </p>
              <div className="justify-content">
                <div className="col-12 col-md-8">
                  <Link to="/shop">
                    <button type="submit" className="btn-buy-payment">
                      กลับหน้าแรก
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop_successful_payment;
