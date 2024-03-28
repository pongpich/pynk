import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import bubblesBottom from "../../../assets/img/home/bubblesBottom.png";
import bubblesTop from "../../../assets/img/home/bubblesTop.png";
import stay_fit_with_bebe from "../../../assets/img/home/stay_fit_with_bebe.png";
import lets_challenge from "../../../assets/img/home/lets_challenge.png";
import shop_fin from "../../../assets/img/home/shop_fin.png";

import "./css/home1.css"

function Home1() {
  const history = useHistory();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [animation, setAnimation] = useState(false);

  const handleSlideChange = (event) => {
    const newSlideIndex = parseInt(event.target.value);
    setPrevSlide(currentSlide);
    setCurrentSlide(newSlideIndex);
    setAnimation(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex = (currentSlide + 1) % 3;
      setPrevSlide(currentSlide);
      setCurrentSlide(nextSlideIndex);
      setAnimation(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <input
          type="radio"
          name="slide"
          id="slide1"
          className="carousel-indicator"
          value="0"
          checked={currentSlide === 0}
          onChange={handleSlideChange}
        />
        <label htmlFor="slide1" className="carousel-indicator"></label>
        <input
          type="radio"
          name="slide"
          id="slide2"
          className="carousel-indicator"
          value="1"
          checked={currentSlide === 1}
          onChange={handleSlideChange}
        />
        <label htmlFor="slide2" className="carousel-indicator"></label>
        <input
          type="radio"
          name="slide"
          id="slide3"
          className="carousel-indicator"
          value="2"
          checked={currentSlide === 2}
          onChange={handleSlideChange}
        />
        <label htmlFor="slide3" className="carousel-indicator"></label>
      </div>
      <div className="carousel-inner">
        <div className="box_animation">
          <div className="row">
            <div className="col-12 col-md-6 relative flex_center">
              <img
                src={bubblesTop}
                className={`bubbles-top  ${
                  (animation &&
                    currentSlide === 0 &&
                    prevSlide !== 1 &&
                    "rotate2to0-1") ||
                  (currentSlide === 0 && prevSlide === 1 && "rotate1to0-1") ||
                  (currentSlide === 1 && prevSlide !== 2 && "rotate0to1-1") ||
                  (currentSlide === 1 && prevSlide === 2 && "rotate2to1-1") ||
                  (currentSlide === 2 && "rotate1to2-1")
                }`}
                id="bubbles-top"
                alt=""
              />
              <img
                src={bubblesBottom}
                className={`bubbles-bottom  ${
                  (animation &&
                    currentSlide === 0 &&
                    prevSlide !== 1 &&
                    "rotate2to0") ||
                  (currentSlide === 0 && prevSlide === 1 && "rotate1to0") ||
                  (currentSlide === 1 && prevSlide !== 2 && "rotate0to1") ||
                  (currentSlide === 1 && prevSlide === 2 && "rotate2to1") ||
                  (currentSlide === 2 && "rotate1to2")
                }`}
                id="bubbles-bottom"
                alt=""
              />
              <div
                className={`bebe-slide ${
                  (animation &&
                    currentSlide === 0 &&
                    prevSlide !== 1 &&
                    "bebe-slide2to0") ||
                  (currentSlide === 0 && prevSlide === 1 && "bebe-slide1to0") ||
                  (currentSlide === 1 && prevSlide !== 2 && "bebe-slide0to1") ||
                  (currentSlide === 1 && prevSlide === 2 && "bebe-slide2to1") ||
                  (currentSlide === 2 && "bebe-slide1to2")
                }`}
                id="bebe-slide"
              ></div>
            </div>
            <div className={`texthome1 col-12 col-md-6`}>
              <div className={`text-anime col-12 col-md-6`}>
                <div
                  className={`text-slide ${
                    (animation &&
                      currentSlide === 0 &&
                      prevSlide !== 1 &&
                      "text-anime2to0") ||
                    (currentSlide === 0 &&
                      prevSlide === 1 &&
                      "text-anime1to0") ||
                    (currentSlide === 1 &&
                      prevSlide !== 2 &&
                      "text-anime0to1") ||
                    (currentSlide === 1 &&
                      prevSlide === 2 &&
                      "text-anime2to1") ||
                    (currentSlide === 2 && "text-anime1to2")
                  }`}
                >
                  <div className="home1-detail">
                    <img
                      src={stay_fit_with_bebe}
                      className="slide-img1"
                      alt=""
                    />
                    <p className="slide-text1 SemiBoldPynk">
                      คอร์สออนไลน์ปั้นหุ่นสุดสนุกการันตีความสำเร็จจากนักเรียนกว่าสิบรุ่น
                    </p>
                    <button
                      onClick={() => history.push("../questionare.js")}
                      className="btn  bold button-home1 col-10 col-sm-10"
                    >
                      เริ่มฟิตไปด้วยกัน
                    </button>
                  </div>
                  <div className="home1-detail1">
                    <img src={lets_challenge} className="slide-img2" alt="" />
                    <p className="slide-text2 SemiBoldPynk">
                      ชาเลนจ์สุดปังที่จะพาคุณพิชิตเป้าหมายในฝันได้กับไอเทมฮอตฮิตจาก
                      bebe fit routine
                    </p>
                    <button
                      onClick={() => history.push("/questionare")}
                      className="btn  bold button-home1 col-10 col-sm-10"
                    >
                      เริ่มฟิตไปด้วยกัน
                    </button>
                  </div>
                  <div className="home1-detail2">
                    <img src={shop_fin} className="slide-img3" alt="" />
                    <p className="slide-text3 SemiBoldPynk">
                      รวมดีลเด็ดที่คุณต้องไม่พลาด ช้อปเลย!
                    </p>
                    <button
                      onClick={() => history.push("/questionare")}
                      className="btn  bold button-home1 col-10 col-sm-10"
                    >
                      เริ่มฟิตไปด้วยกัน
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            currentSlide === 0 ? "carousel-item active" : "carousel-item"
          }
        >
          <div className="box_screen1">
            <div className="line3"></div>
          </div>
        </div>
        <div
          className={
            currentSlide === 1 ? "carousel-item active" : "carousel-item"
          }
        >
          <div className="box_screen2">
            <div className="line3"></div>
          </div>
        </div>
        <div
          className={
            currentSlide === 2 ? "carousel-item active" : "carousel-item"
          }
        >
          <div className="box_screen3">
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
