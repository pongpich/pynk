import React, { useState, useEffect, useRef } from "react";
import slide1 from "../../assets/img/home/slide1.png";
import slide2 from "../../assets/img/home/slide2.png";
import slide3 from "../../assets/img/home/slide3.png";
import frame37407 from "../../assets/img/home/frame37407.png";
import frame37408 from "../../assets/img/home/frame37408.png";
import frame37409 from "../../assets/img/home/frame37409.png";
import frame37410 from "../../assets/img/home/frame37410.png";
import frame37545 from "../../assets/img/home/frame37545.png";
import frame37547 from "../../assets/img/home/frame37547.png";
import frame37549 from "../../assets/img/home/frame37549.png";
import "./css/home.css";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slide1, slide2, slide3];

  const autoSlideIntervalRef = useRef(null);

  const handleRadioChange = (newIndex) => {
    setCurrentIndex(newIndex);
    clearInterval(autoSlideIntervalRef.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(autoSlideIntervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="slider-container">
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active_home" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translateX(${100 * (index - currentIndex)}%)`,
              }}
            ></div>
          ))}
          <div className="radio-buttons">
            {images.map((_, index) => (
              <div
                className={
                  index === currentIndex
                    ? "button-carousel-active"
                    : "button-carousel"
                }
                aria-current="true"
                aria-label="Slide 1"
                checked={index === currentIndex}
                onClick={() => handleRadioChange(index)}
              />
            ))}
          </div>
          {currentIndex === 0 ? (
            <div className="box_text_home1">
              <p className="text-home1-48px-2">Stay fit with Bebe</p>
              <p className="text-home1-24px">
                คอร์สออนไลน์ปั้นหุ่นสุดสนุกการันตี
              </p>
              <p className="text-home1-24px">
                ความสำเร็จจากนักเรียนกว่าสิบรุ่น
              </p>

              <button
                onClick={() => history.push("/questionare")}
                className="btn  bold button-home1 col-10 col-sm-10"
              >
                <p
                  style={{
                    width: "100%",
                    top: "25%",
                    left: "0%",
                    marginBottom:"0px",
                    position: "absolute",
                  }}
                >
                  เริ่มฟิตไปด้วยกัน
                </p>
              </button>
            </div>
          ) : currentIndex === 1 ? (
            <div className="box_text_home1">
              <p className="text-home1-48px-2">Let’s Challenge</p>
              <p className="text-home1-24px">
                ชาเลนจ์สุดปังที่จะพาคุณพิชิตเป้าหมายในฝัน
              </p>
              <p className="text-home1-24px">
                ได้กับไอเทมฮอตฮิตจาก bebe fit routine
              </p>

              <button
                onClick={() => history.push("/questionare")}
                className="btn  bold button-home1 button-home2 col-10 col-sm-10"
              >
                <p
                  style={{
                    width: "100%",
                    top: "25%",
                    left: "0%",
                    marginBottom:"0px",
                    position: "absolute",
                  }}
                >
                  เริ่มฟิตไปด้วยกัน
                </p>
              </button>
            </div>
          ) : (
            <div className="box_text_home1">
              <p className="text-home1-48px-2">Shop สุดฟิน!!!</p>
              <p className="text-home1-24px">รวมดีลเด็ดที่คุณต้องไม่พลาด</p>
              <p className="text-home1-24px">ช้อปเลย!</p>

              <button
                onClick={() => history.push("/questionare")}
                className="btn  bold button-home1 col-10 col-sm-10"
              >
                <p
                  style={{
                    width: "100%",
                    top: "25%",
                    left: "0%",
                    marginBottom:"0px",
                    position: "absolute",
                  }}
                >
                  เริ่มฟิตไปด้วยกัน
                </p>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* <div className="home2"> */}
      <img src={frame37407} alt="" className="frame37407" />
      {/* <p className="text48">บริการที่ทำให้คุณออกกำลังกายอย่างมีความสุข และทำได้จนเป็นส่วนหนึ่งของชีวิตประจำวัน</p> */}
      <img src={frame37408} alt="" className="frame37408" />

      <div class="stayfit_item_grid">
        <div class="grid-item">
          {" "}
          <img src={frame37409} className="frame37409" alt="" />
        </div>
        <div class="grid-item">
          <img src={frame37410} className="frame37410" alt="" />
        </div>
      </div>
      {/* <div class="stayfit_item">
                <div class="column" >
                    <img src={frame37409} alt="" className="frame37409" />
                </div>
                <div class="column" >
                    <img src={frame37410} alt="" className="frame37410" />
                </div>
            </div> */}
      {/* </div> */}

      <div
        className="bubble" /*  style={{ backgroundImage: `url(${home2})`, backgroundSize: '500px 500px', }}  */
      >
        <img src={frame37545} alt="" className="frame37545" />
      </div>
      <div
        className="background37399" /*  style={{ backgroundImage: `url(${home2})`, backgroundSize: '500px 500px', }}  */
      >
        <img src={frame37547} alt="" className="frame37547" />
      </div>

      <img src={frame37549} alt="" className="frame37549" />

      <Footer />
    </>
  );
};

export default Home;
