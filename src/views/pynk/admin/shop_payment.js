import { React, useState, useEffect } from "react";
import "../css/shop_order_summary.css";
import Footer from "../footer";

import qrcode from "../../../assets/img/pynk/shop/qrcode.png";
import promptPay from "../../../assets/img/pynk/shop/promptPay.png";
import Visa from "../../../assets/img/pynk/shop/Visa.png";
import Mastercard from "../../../assets/img/pynk/shop/Mastercard.png";
import check from "../../../assets/img/pynk/shop/check.png";

const Shop_payment = () => {
  const [statusContinue, setStatusContinue] = useState(0);
  return (
    <>
      <div className="box-order-summary">
        <div className="background-order-summary row">
          <div className="position-relative justify-content">
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
                    <p className="text-head-order-summary">
                      เลือกวิธีการชำระเงิน
                    </p>
                    <form className="mt-32 ">
                      <div className="input-password">
                        <div className="form-payment">
                          <div class="form-check">
                            <input
                              class="form-check-input2"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
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
                            <label
                              class="form-check-label"
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
                        <div className="form-payment">
                          <div class="form-check">
                            <input
                              class="form-check-input2"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
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
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
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
                    </form>
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
                      <p className="text-head-order-summary">
                        สรุปรายการสั่งซื้อ
                      </p>
                      <div className="text-order between">
                        <p className="col-8">
                          x1 FITTO PLANT PROTEIN “ MILK TEA FLAVOUR ”
                        </p>
                        <p>900 บาท</p>
                      </div>
                      <p className="text-order between">
                        ค่าจัดส่ง{" "}
                        <span className="text-head-order-summary">ฟรี</span>
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Shop_payment;
