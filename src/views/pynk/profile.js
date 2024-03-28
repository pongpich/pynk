import React, { useState, useEffect } from "react";
import colors from "./colors";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginGoogle, logout } from "../.././redux/pynk/auth";
import icon_profile from "../../assets/img/pynk/shop/profile.png";
import icon_edit from "../../assets/img/pynk/shop/edit.png";
import icon_exit from "../../assets/img/pynk/shop/exit.png";
import Cookies from "js-cookie";

import rectangle_86 from "../../assets/img/pynk/shop/Rectangle-86.png";
import rectangle_87 from "../../assets/img/pynk/shop/Rectangle-87.png";
import rectangle_88 from "../../assets/img/pynk/shop/Rectangle-88.png";
import arrowRight from "../../assets/img/pynk/shop/arrow-right-s-line.png";
import Group from "../../assets/img/pynk/shop/Group.png";
import product from "../../assets/img/pynk/shop/image-product.png";
import icon_circle from "../../assets/img/pynk/shop/icon-circle.png";
import nohistory from "../../assets/img/pynk/shop/nohistory.png";
import bikinibodychallenge from "../../assets/img/pynk/challenge/bikinibodychallenge.jpg";
import bodystepchallenge from "../../assets/img/pynk/challenge/bodystepchallenge.jpg";
import speedropechallenge from "../../assets/img/pynk/challenge/speedropechallenge.jpg";
import Footer from "./footer";

import "./css/profile.css";
import { GoogleLogout, useGoogleLogout } from "react-google-login";
import GoogleLoginComponent from "./googleFacebookLineLogin/googleLogin";

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
const settings = {
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
const clientId =
  "796848287017-3eh30gsc3e5o8dv5hh25bqa1c5ushgf8.apps.googleusercontent.com";
const Profile = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [statusManu, setStatusManu] = useState(0);
  const menuItems = [
    "ภาพรวมของคุณ",
    // "ภารกิจของคุณ",
    // "แพ็กเกจรายเดือน",
    // "คำสั่งซื้อของฉัน",
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const user = useSelector(({ auth }) => (auth ? auth.user : ""));
  const googleProfile = useSelector(({ auth }) =>
    auth ? auth.googleProfile : ""
  );

  useEffect(() => {
    if (!user && googleProfile?.profile == null) {
      history.push("/home");
    }
  }, [user, googleProfile]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onLogout = () => {
    const urlCookieLoginWeb = true ? "pynk.co" : "localhost";

    if (document.getElementById("icon-google")) {
      document.getElementById("icon-google").click();
    }
    Cookies.remove("loginUser", { domain: urlCookieLoginWeb, path: "/" });
    history.push("/home");
  };

  const onNextEdit = () => {
    history.push("/profile-edit-pynk");
  };

  return (
    <div className="div-profile">
      <div className="head-profile">
        <div className="image-head" />
        <div className="box-profile">
          <div className="profile-name">
            <div className="box-image-profile">
              <div className="div-btn2">
                <div>
                  <img src={icon_profile} className="icon-profile" />
                </div>
                <div>
                  <p className="bebe-fit">BeBe Fit</p>
                  <p className="username">
                    @{user ? user.first_name : null}
                    {googleProfile && googleProfile.profile
                      ? googleProfile.profile.givenName
                      : null}
                  </p>
                  {/*  <p className="lv">LV: มือใหม่หัดฟิตหุ่น</p> */}
                </div>
              </div>
              <div className="div-btn2 btn-margin-right-64">
                <div className="btn-icon-profile">
                  <img
                    src={icon_edit}
                    className="icon-edit "
                    onClick={onNextEdit}
                  />
                  <img
                    src={icon_exit}
                    className="icon-edit cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  />
                </div>
                <div>
                  <div
                    className="btn-profile btn-margin-right cursor-pointer"
                    onClick={onNextEdit}
                  >
                    <img src={icon_edit} className="icon-edit" />
                    แก้ไขข้อมูลส่วนตัว
                  </div>
                </div>

                {googleProfile?.profile ? (
                  <div className="btn-profile cursor-pointer">
                    <GoogleLoginComponent />
                  </div>
                ) : (
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="btn-profile cursor-pointer">
                      <img src={icon_exit} className="icon-edit" />
                      ออกจากระบบ
                    </div>
                  </div>
                )}
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
                <img src={bikinibodychallenge} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  {/* <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div> */}
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <p className="head-text">Bikini Body Challenge</p>
                    {/*  <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p> */}
                  </div>
                </div>
                <div className="row mt-5 none-767 gap-2">
                  <a
                    href="https://form.typeform.com/to/T0cII7D0?typeform-source=bebefitroutine.com"
                    target="_blank"
                    className="btn-content-participate"
                  >
                    เข้าร่วม
                  </a>
                  <a
                    target="_blank"
                    href="https://bebefitroutine.com/bikinibodychallenge/"
                    className="btn-content-details"
                  >
                    รายละเอียด
                  </a>
                </div>
              </div>
              <div className="row mt-3 mb-2 none-992">
                <button className="btn-content-participate">เข้าร่วม</button>
                <a
                  target="_blank"
                  href="https://bebefitroutine.com/bikinibodychallenge/"
                  className="btn-content-details"
                >
                  รายละเอียด
                </a>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 col-sm-4 col-md-3 col-lg-3">
                {" "}
                <img src={speedropechallenge} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  {/* <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div> */}
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <p className="head-text">Speed Rope Challenge</p>
                    {/*  <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p> */}
                  </div>
                </div>
                <div className="row mt-5  none-767 gap-2">
                  <a
                    target="_blank"
                    href="https://bebefitroutine.com/speedropechallenge/apply/"
                    className="btn-content-participate"
                  >
                    เข้าร่วม
                  </a>
                  <a
                    target="_blank"
                    href="https://bebefitroutine.com/speedropechallenge/"
                    className="btn-content-details"
                  >
                    รายละเอียด
                  </a>
                </div>
              </div>
              <div className="row mt-3 mb-2 none-992">
                <button className="btn-content-participate">เข้าร่วม</button>
                <a
                  target="_blank"
                  href="https://bebefitroutine.com/speedropechallenge/"
                  className="btn-content-details"
                >
                  รายละเอียด
                </a>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 col-sm-4 col-md-3 col-lg-3">
                {" "}
                <img src={bodystepchallenge} className="icon-rectangle" />
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-9 padding-left">
                <div class="row">
                  {/* <div class="col-sm-12 col-md-4 col-lg-4 order-sm-2 order-md-2  order-lg-2">
                    <p className="still-more-left">เหลืออีก 200 ที่</p>
                  </div> */}
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <p className="head-text">Body Step Challenge</p>
                    {/*  <p className="text-content">
                      Details ChallengeDetails ChallengeDetails ChallengeDetails
                      ChallengeDetails ChallengeDetails
                    </p> */}
                  </div>
                </div>
                <div className="row mt-5  none-767 gap-2">
                  <a
                    href="https://5ag91vnk022.typeform.com/to/eaaDFZtz"
                    target="_blank"
                    className="btn-content-participate"
                  >
                    เข้าร่วม
                  </a>
                  <a
                    target="_blank"
                    href="https://bebefitroutine.com/bodystepchallenge/"
                    className="btn-content-details"
                  >
                    รายละเอียด
                  </a>
                </div>
              </div>
              <div className="row mt-3 mb-2 none-992">
                <button className="btn-content-participate">เข้าร่วม</button>
                <a
                  target="_blank"
                  href="https://bebefitroutine.com/bodystepchallenge/"
                  className="btn-content-details"
                >
                  รายละเอียด
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
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
            
            <div className="more-friends">
              <div>
                <img src={Group} className="icon-Group" />
                <span className="span-Group">ค้นหาเพื่อนเพิ่มเติม</span>
              </div>
              <img src={arrowRight} className="icon-Group" />
            </div>
          </div>
        </div> */}
        {/*         <p className="hand-name mt-64">คลังไอเทมออกกำลังกายของคุณ</p>
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
        </div> */}
      </div>
      <div className="mt-footer" />
      <Footer />

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body-profile">
              <div>
                <p className="text-modal-body">ยืนยันการออกจากระบบใช่หรือไม่</p>

                <div className="modal-body-profile-btn">
                  <button
                    className="btn-content-no-logout"
                    data-bs-dismiss="modal"
                  >
                    ไม่
                  </button>
                  <button
                    className="btn-content-logout"
                    data-bs-dismiss="modal"
                    onClick={onLogout}
                  >
                    ออกจากระบบ
                  </button>
                </div>
              </div>
            </div>
            {/*  <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
