import React from "react";
import "./css/footer.css";
import pinklogo from "../../assets/img/home/pinklogo.png";
import phonelogo from "../../assets/img/home/phonelogo.png";
import emaillogo from "../../assets/img/home/emaillogo.png";
import fb from "../../assets/img/home/fb.png";
import instagram from "../../assets/img/home/Instagram.png";
import te from "../../assets/img/home/te.png";
import line from "../../assets/img/home/line.png";

export default function Footer() {
  return (
    <div>
      <div className="box-footer">
        <div className="footer-center">
          <div className="row col-12 ">
            <div className="col-12 col-md-4">
              <img src={pinklogo} alt="" className="layer1-image" />
              <p className="company-bbpf">
                บริษัท บีบีพีเอฟ จำกัด (สำนักงานใหญ่)
              </p>
              <p className="company-address">
                1/2 ซอย พระรามที่ 2 ซอย 82 แยก 6 แขวงแสมดำ เขตบางขุนเทียน
                กรุงเทพมหานคร 10150
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p className="contact-us">ติดต่อเรา</p>
              <div className="hr" />
              <p className="company-address">
                <img src={phonelogo} alt="" className="phone-line" />
                093-883-2339
              </p>
              <p className="company-address">
                <img src={emaillogo} alt="" className="phone-line" />
                contact@pynk.co
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p className="contact-us">Social Media</p>
              <div className="hr" />
              <div className="social-icons">
                <img src={fb} alt="" className="fb-icon" />
                <img src={instagram} alt="" className="fb-icon" />{" "}
                <img src={te} alt="" className="fb-icon" />
                <img src={line} alt="" className="fb-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-footer-bottom">
        <p>© 2022 BBPF RIGHTS RESERVED</p>

        <div className="policy-bottom">
          <div className="hr-policy policy-none" />
          <p>Privacy Policy</p>
          <div className="hr-policy" />
          <p>Cookies Policy</p>
          <div className="hr-policy" />
          <p>Cookies Setting</p>
        </div>
      </div>
    </div>
  );
}
