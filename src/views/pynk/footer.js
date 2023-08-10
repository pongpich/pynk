import React from "react";
import pinklogo from "../../assets/img/home/pinklogo.png";
import phonelogo from "../../assets/img/home/phonelogo.png";
import emaillogo from "../../assets/img/home/emaillogo.png";
import social from "../../assets/img/home/social.png";
import "./css/home.css";

export default function footer() {
  return (
    <div
      className="footer-background " /*  style={{ backgroundImage: `url(${home2})`, backgroundSize: '500px 500px', }}  */
    >
      <div className="row">
        <div class="col-12 col-md-4" style={{ textAlign: "left" }}>
          <img src={pinklogo} style={{ width: "30%", marginBottom: "40px" }} />
          <p className="bbpf-company">
            บริษัท บีบีพีเอฟ จำกัด (สำนักงานใหญ่)
          </p>
          <p style={{ fontSize: "18px" }}>
            เลขที่ 429/129 ถนนสรงประภา แขวงดอนเมือง เขตดอนเมือง กรุงเทพมหานคร
            10210
          </p>
        </div>
        <div class="col-12 col-md-4" style={{ textAlign: "left" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>ติดต่อเรา</p>
          <hr className="hr_class" />
          <p style={{ fontSize: "18px" }}>
            <img src={phonelogo} style={{ marginRight: "5px" }} />
            093-883-2339
          </p>
          <p style={{ fontSize: "18px" }}>
            <img src={emaillogo} style={{ width: "5%", marginRight: "5px" }} />
            contact@pynk.co
          </p>
        </div>
        <div class="col-12 col-md-4" style={{ textAlign: "left" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Social Media</p>
          <hr className="hr_class" />
          <img src={social} style={{ width: "50%" }} />
        </div>
      </div>
    </div>
  );
}
