import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import bubblesBottom from "../../assets/img/home/bubblesBottom.png";
import bubblesTop from "../../assets/img/home/bubblesTop.png";
import fitto4week from "../../assets/img/home/fitto4week.png";
import stayfit_with_bebe from "../../assets/img/home/stayfit_with_bebe.png";
import bikini_body_challenge from "../../assets/img/home/bikini_body_challenge.png";
import stay_fit_with_bebe from "../../assets/img/home/stay_fit_with_bebe.png";
import lets_challenge from "../../assets/img/home/lets_challenge.png";
import shop_fin from "../../assets/img/home/shop_fin.png";
import star from "../../assets/img/home/star.png";
import comment1 from "../../assets/img/home/comment1.png";
import comment2 from "../../assets/img/home/comment2.png";
import comment3 from "../../assets/img/home/comment3.png";
import comment4 from "../../assets/img/home/comment4.png";
import comment5 from "../../assets/img/home/comment5.png";
import comment6 from "../../assets/img/home/comment6.png";
import content1 from "../../assets/img/home/content1.png";
import content2 from "../../assets/img/home/content2.png";
import content3 from "../../assets/img/home/content3.png";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

import "./css/home.css";
import "./css/home_animation.css";
import styles from "./css/home.module.css";

let slidesToShow = 3;

const carouselProperties = {
  prevArrow: false,
  nextArrow: false,
  slidesToShow: slidesToShow,
  slidesToScroll: 3,
  infinite: true,
  autoplay: true, // ให้ Slider หมุนเอง
  autoplaySpeed: 9000, // ตั้งค่าให้หมุนทุก ๆ 30 วินาที
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.1,
        centerMode: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2.5,
        centerMode: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
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
        slidesToShow: 3,
        centerMode: true,
      },
    },
  ],
};
const Home = () => {
  const history = useHistory();

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [previousSlideIndex, setPreviousSlideIndex] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(2);

  const handleButtonHover = (buttonId) => {
    setHoveredButton(buttonId);
  };
  const resetHoveredButton = () => {
    setHoveredButton(2);
  };

  const { ref: home4, inView: Home4ISVisible } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const carousel = document.getElementById("carouselExampleAutoplaying");

    // เมื่อสไลด์เปลี่ยน
    carousel.addEventListener("slid.bs.carousel", (event) => {
      setCurrentSlideIndex(event.to);
      setAnimation(true);
    });
  }, []);

  function previousIndex(curr, prev) {
    setPreviousSlideIndex(prev);
    if (curr !== currentSlideIndex) {
      setCurrentSlideIndex(curr);
    }
  }

  return (
    <div className="page">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            onClick={() => previousIndex(0, currentSlideIndex)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            onClick={() => previousIndex(1, currentSlideIndex)}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            onClick={() => previousIndex(2, currentSlideIndex)}
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="box_animation">
            <div className="row">
              <div className="col-12 col-md-6 relative flex_center">
                <img
                  src={bubblesTop}
                  className={`bubbles-top  ${
                    (animation &&
                      currentSlideIndex === 0 &&
                      previousSlideIndex !== 1 &&
                      "rotate2to0-1") ||
                    (currentSlideIndex === 0 &&
                      previousSlideIndex === 1 &&
                      "rotate1to0-1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex !== 2 &&
                      "rotate0to1-1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex === 2 &&
                      "rotate2to1-1") ||
                    (currentSlideIndex === 2 && "rotate1to2-1")
                  }`}
                  id="bubbles-top"
                  alt=""
                />
                <img
                  src={bubblesBottom}
                  className={`bubbles-bottom  ${
                    (animation &&
                      currentSlideIndex === 0 &&
                      previousSlideIndex !== 1 &&
                      "rotate2to0") ||
                    (currentSlideIndex === 0 &&
                      previousSlideIndex === 1 &&
                      "rotate1to0") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex !== 2 &&
                      "rotate0to1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex === 2 &&
                      "rotate2to1") ||
                    (currentSlideIndex === 2 && "rotate1to2")
                  }`}
                  id="bubbles-bottom"
                  alt=""
                />
                <div
                  className={`${
                    (currentSlideIndex === 0 &&
                      previousSlideIndex !== 1 &&
                      "bebe-slide1 bebe-slide2to0") ||
                    (currentSlideIndex === 0 &&
                      previousSlideIndex === 1 &&
                      "bebe-slide1 bebe-slide1to0") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex !== 2 &&
                      "bebe-slide2 bebe-slide0to1") ||
                    (currentSlideIndex === 1 &&
                      previousSlideIndex === 2 &&
                      "bebe-slide2 bebe-slide2to1") ||
                    (currentSlideIndex === 2 && "bebe-slide3 bebe-slide1to2")
                  }`}
                ></div>
              </div>
              <div className="col-12 col-md-6 relative flex_center">
                {currentSlideIndex === 0 ? (
                  <img src={stay_fit_with_bebe} className="slide-img1" alt="" />
                ) : currentSlideIndex === 1 ? (
                  <img src={lets_challenge} className="slide-img2" alt="" />
                ) : currentSlideIndex === 2 ? (
                  <img src={shop_fin} className="slide-img3" alt="" />
                ) : (
                  ""
                )}
                {currentSlideIndex === 0 ? (
                  <p className="slide-text1 SemiBoldPynk">
                    คอร์สออนไลน์ปั้นหุ่นสุดสนุกการันตีความสำเร็จจากนักเรียนกว่าสิบรุ่น
                  </p>
                ) : currentSlideIndex === 1 ? (
                  <p className="slide-text2 SemiBoldPynk">
                    ชาเลนจ์สุดปังที่จะพาคุณพิชิตเป้าหมายในฝันได้กับไอเทมฮอตฮิตจาก
                    bebe fit routine
                  </p>
                ) : currentSlideIndex === 2 ? (
                  <p className="slide-text3 SemiBoldPynk">
                    รวมดีลเด็ดที่คุณต้องไม่พลาด ช้อปเลย!
                  </p>
                ) : (
                  ""
                )}
                <button
                  onClick={() => history.push("/questionare")}
                  className="btn  bold button-home1 col-10 col-sm-10 button-home1"
                >
                  เริ่มฟิตไปด้วยกัน
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item active" data-interval="1000">
            <div className="box_screen1">
              <div className="line3"></div>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <div className="box_screen2">
              <div className="line3"></div>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <div className="box_screen3">
              <div className="line3"></div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="text-home2">
        <p className={`${styles["services-happily"]} ${"text-center"}`}>
          บริการที่ทำให้คุณออกกำลังกายอย่างมีความสุข
          และทำได้จนเป็นส่วนหนึ่งของชีวิตประจำวัน
        </p>
        <p className={`${styles["not-good"]} ${"text-center"}`}>
          “ไม่ใช่แค่หุ่นดี{" "}
          <span className={`${styles["not-good-span"]}`}>
            {" "}
            แต่มันคือการรักตัวเองอย่างมีความสุข”
          </span>
        </p>
      </div>

      <Slider {...carouselProperties}>
        <div className="box-home-slider-1">
          <div className="slider-card-item-course">
            <div className="box-fitto4week">
              <img className="fitto4week" src={fitto4week} alt="" />
            </div>

            <div className="card-text-box">
              <p className="SemiBoldPynk text24">
                Fitto 4 Week Starter Program
              </p>
              <p className="RegularPynk text20">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <i className={`fa-solid fa-arrow-right fa-xl`} />
            </div>
          </div>
        </div>
        <div className="box-home-slider-2">
          <div className="box-suggestion"></div>
          <div className="slider-card-item-course-center">
            <div className="box-fitto4week">
              <p className="suggestion text24 SemiBoldPynk white">แนะนำ</p>
              <img className="fitto4week" src={stayfit_with_bebe} alt="" />
            </div>
            <div className="card-text-box">
              <p className="SemiBoldPynk text24">STAY FIT WITH BEBE</p>
              <p className="RegularPynk text20">
                โปรแกรมออกกำลังกาย 8 สัปดาห์ที่ เบเบ้ออกแบบพิเศษให้เหมาะกับคุณ
              </p>
              <i className={`fa-solid fa-arrow-right fa-xl`} />
            </div>
          </div>
        </div>
        <div className="box-home-slider-3">
          <div className="slider-card-item-course">
            <div className="box-fitto4week">
              <img className="fitto4week" src={bikini_body_challenge} alt="" />
            </div>
            <div className="card-text-box">
              <p className="SemiBoldPynk text24">Bikini Body Challenge</p>
              <p className="RegularPynk text20">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <i className={`fa-solid fa-arrow-right fa-xl`} />
            </div>
          </div>
        </div>
      </Slider>

      <div ref={home4} className="home4">
        <div className="home4-container">
          <div
            className={`text48 SemiBoldPynk text-align-center ${
              Home4ISVisible && "animate-open-home4"
            }`}
          >
            เสียงตอบรับจากผู้ใช้บริการ
            <div className="home-star">
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
              <picture>
                <img src={star} width={62} height={62} alt="" />
              </picture>
            </div>
          </div>
          <div className="comment-item-container">
            <div className={Home4ISVisible && "card-comment1"}>
              <picture>
                <img src={comment1} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment2"}>
              <picture>
                <img src={comment2} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment3"}>
              <picture>
                <img src={comment3} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment4"}>
              <picture>
                <img src={comment4} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment5"}>
              <picture>
                <img src={comment5} alt="" />
              </picture>
            </div>
            <div className={Home4ISVisible && "card-comment6"}>
              <picture>
                <img src={comment6} alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="home5">
        <div className="text-home5">
          <p className="text48 SemiBoldPynk mb-0px">
            เคล็ด (ไม่) ลับ ฉบับอยากแชร์
          </p>
          <button
            className="text18 SemiBoldPynk ef60a3"
            style={{ alignSelf: "center", backgroundColor: "#fff" }}
          >
            ดูเพิ่มเติม
          </button>
        </div>
        <div className="card-container-home5">
          <div className="card-content-home5">
            <img
              src={content1}
              width={376}
              height={251}
              style={{ marginBottom: "32px" }}
              alt=""
            />
            <p className="text24 SemiBoldPynk">Content</p>
            <p className="text20 RegularPynk">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
          <div className="card-content-home5">
            <img
              src={content2}
              width={376}
              height={251}
              style={{ marginBottom: "32px" }}
              alt=""
            />
            <p className="text24 SemiBoldPynk">Content</p>
            <p className="text20 RegularPynk">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
          <div className="card-content-home5">
            <img
              src={content3}
              width={376}
              height={251}
              style={{ marginBottom: "32px" }}
              alt=""
            />
            <p className="text24 SemiBoldPynk">Content</p>
            <p className="text20 RegularPynk">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
