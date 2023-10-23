import React, { useState, useEffect } from "react";
import colors from "./colors";
import Slider from "react-slick";
import icon_profile from "../../assets/img/pynk/shop/profile.png";
import icon_edit from "../../assets/img/pynk/shop/edit.png";
import icon_exit from "../../assets/img/pynk/shop/exit.png";
import rectangle_86 from "../../assets/img/pynk/shop/Rectangle-86.png";
import rectangle_87 from "../../assets/img/pynk/shop/Rectangle-87.png";
import rectangle_88 from "../../assets/img/pynk/shop/Rectangle-88.png";
import arrowRight from "../../assets/img/pynk/shop/arrow-right-s-line.png";
import Group from "../../assets/img/pynk/shop/Group.png";
import product from "../../assets/img/pynk/shop/image-product.png";
import icon_circle from "../../assets/img/pynk/shop/icon-circle.png";
import nohistory from "../../assets/img/pynk/shop/nohistory.png";
import Footer from "./footer";

import "./css/profile.css";

let slidesToShow = 3.5;

/*  const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={`previous-btn head-shop`} onClick={onClick}>
          <img src={icon_circle} className="icon-previous-btn" />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={`next-btn head-shop`} onClick={onClick}>
          <img src={icon_circle} className="icon-next-btn" />
        </div>
      )}
    </>
  );
};
*/
var settings = {
  /*  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />, */
  slidesToShow: slidesToShow,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  autoplay: true, // ให้ Slider หมุนเอง
  autoplaySpeed: 9000, // ตั้งค่าให้หมุนทุก ๆ 30 วินาที
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2.2,
        centerMode: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1.4,
        centerMode: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.2,
        centerMode: true,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2.5,
        centerMode: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.9,
        centerMode: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3.5,
        centerMode: true,
      },
    },
  ],
};

const Profile = () => {
  const [statusManu, setStatusManu] = useState(0);
  const menuItems = [
    "ภาพรวมของคุณ",
    "ภารกิจของคุณ",
    "แพ็กเกจรายเดือน",
    "คำสั่งซื้อของฉัน",
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="div-profile">
      <div className="head-profile">
        <div className="image-head" />
        <div className="box-profile">
          <div className="profile-name">
            <div className="box-image-profile">
              <div className="div-btn">
                <div>
                  <img src={icon_profile} className="icon-profile" />
                </div>
                <div>
                  <p className="bebe-fit">BeBe Fit</p>
                  <p className="username">@username1234</p>
                  <p className="lv">LV: มือใหม่หัดฟิตหุ่น</p>
                </div>
              </div>
              <div className="div-btn btn-margin-right-64">
                <div className="btn-icon-profile">
                  <img src={icon_edit} className="icon-edit " />
                  <img src={icon_exit} className="icon-edit" />
                </div>
                <div>
                  <div className="btn-profile btn-margin-right">
                    <img src={icon_edit} className="icon-edit" />
                    แก้ไขข้อมูลส่วนตัว
                  </div>
                </div>
                <div>
                  <div className="btn-profile">
                    <img src={icon_exit} className="icon-edit" />
                    ออกจากระบบ
                  </div>
                </div>
              </div>
            </div>

            <div className="ex3">
              <div className="manu-profile">
                {menuItems &&
                  menuItems.map((item, index) => (
                    <p
                      key={index}
                      className={`manu-name ${
                        statusManu === index ? "name-active" : ""
                      }`}
                      onClick={() => setStatusManu(index)}
                    >
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-content row">
        <div className=" col-sm-12 col-md-8 col-lg-8 mb-4">
          <p className="hand-name">ภารกิจชวนพิชิต</p>
          <div className="content-all">
            <div class="row mb-3">
              <div class="col-4 col-sm-4 col-md-3 col-lg-3">
                {" "}
                <img src={rectangle_86} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div>
                  <div class="col-sm-12 col-md-8 col-lg-8 order-sm-1 order-md-1 order-lg-1">
                    <p className="head-text">Fitto 4 Week Starter Program </p>
                    <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-3 "></div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-9 mt-pra">
                <button className="btn-content-participate">เข้าร่วม</button>
                <button className="btn-content-details">รายละเอียด</button>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 col-sm-4 col-md-3 col-lg-3">
                {" "}
                <img src={rectangle_87} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div>
                  <div class="col-sm-12 col-md-8 col-lg-8 order-sm-1 order-md-1 order-lg-1">
                    <p className="head-text">Fitto 4 Week Starter Program </p>
                    <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-3 "></div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-9 mt-pra">
                <button className="btn-content-participate">เข้าร่วม</button>
                <button className="btn-content-details">รายละเอียด</button>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 col-sm-4 col-md-3 col-lg-3">
                {" "}
                <img src={rectangle_88} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div>
                  <div class="col-sm-12 col-md-8 col-lg-8 order-sm-1 order-md-1 order-lg-1">
                    <p className="head-text">Fitto 4 Week Starter Program </p>
                    <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-3 "></div>
              <div className="div-btn col-sm-12 col-md-12 col-lg-9 mt-pra">
                <button className="btn-content-participate">เข้าร่วม</button>
                <button className="btn-content-details">รายละเอียด</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
          <p className="hand-name">เพื่อนของคุณ</p>

          <div className="box-friend">
            <div className="box-image-friend">
              <img src={icon_profile} className="icon-profile" />
            </div>
            <p className="start-getting">มาเริ่มทำความรู้จักคนๆ อื่นกัน</p>
            <p className="exercise-will-be">
              การออกกำลังกายจะสนุกยิ่งขึ้น เมื่อเรามีเพื่อนๆ อยู่ด้วยกัน
            </p>
            <div className="box-image-friend">
              <button className="btn-content-participate">เพิ่มเพื่อน</button>
            </div>
          </div>
          <div className="box-friend-input">
            {/* <input
              type="text"
              className="form-control form-search2 form-border"
              placeholder="ค้นหาเพื่อนเพิ่มเติม"
            /> */}
            <div className="more-friends">
              <div>
                <img src={Group} className="icon-Group" />
                <span className="span-Group">ค้นหาเพื่อนเพิ่มเติม</span>
              </div>
              <img src={arrowRight} className="icon-Group" />
            </div>
          </div>
        </div>
        <p className="hand-name mt-64">คลังไอเทมออกกำลังกายของคุณ</p>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
          <div className="content-all-2">
            <Slider {...settings}>
              <div className="box-item-you">
                <div className="box-item-img">
                  <img src={product} className="product-item" />
                </div>
                <p className="text-milk-tea">
                  Fitto Drink Milk Tea 1 Box Free 1 Box Fitto Drink Milk Tea ...
                </p>
              </div>
              <div className="box-item-you">
                <div className="box-item-img">
                  <img src={product} className="product-item" />
                </div>
                <p className="text-milk-tea">
                  Fitto Drink Milk Tea 1 Box Free 1 Box Fitto Drink Milk Tea ...
                </p>
              </div>
              <div className="box-item-you">
                <div className="box-item-img">
                  <img src={product} className="product-item" />
                </div>
                <p className="text-milk-tea">
                  Fitto Drink Milk Tea 1 Box Free 1 Box Fitto Drink Milk Tea ...
                </p>
              </div>
              <div className="box-item-you">
                <div className="box-item-img">
                  <img src={product} className="product-item" />
                </div>
                <p className="text-milk-tea">
                  Fitto Drink Milk Tea 1 Box Free 1 Box Fitto Drink Milk Tea ...
                </p>
              </div>
              <div className="box-item-you">
                <div className="box-item-img">
                  <img src={product} className="product-item" />
                </div>
                <p className="text-milk-tea">
                  Fitto Drink Milk Tea 1 Box Free 1 Box Fitto Drink Milk Tea ...
                </p>
              </div>
            </Slider>
          </div>
        </div>
        <p className="hand-name mt-64">โปรแกรมออกกำลังกาย</p>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
          <div className="content-all ">
            <div className="center-nohistory">
              <img src={nohistory} className="nohistory" />
            </div>
            <p className="head-text text-center mt-32">
              คุณยังไม่มีโปรแกรมออกกำลังกาย
            </p>
            <p className="text-content text-center mt-8">
              หากยังไม่มั่นใจว่าจะเริ่มต้นยังไงดี เราขอแนะนำให้คุณ
            </p>
          </div>
        </div>
      </div>
      <div  className="mt-footer" />
      <Footer />
    </div>
  );
};

export default Profile;
